// Stripe → Firestore: grants GOAT Pass automatically when a purchase completes.
//
// Flow:
//   1. Signed-in player taps "Unlock" → we send them to the Stripe payment link
//      with ?client_reference_id=<firebase uid> appended.
//   2. Stripe processes the $2.99 payment and fires a `checkout.session.completed`
//      webhook at this endpoint.
//   3. We verify the signature, read the uid from client_reference_id, and set
//      `goatPass: true` on that user's Firestore doc (Admin SDK, bypasses rules).
//   4. The game reads that flag on load and unlocks the extras.
//
// Required Vercel environment variables:
//   STRIPE_SECRET_KEY           — sk_live_… (or sk_test_… while testing)
//   STRIPE_WEBHOOK_SECRET       — whsec_… from the Stripe webhook endpoint config
//   FIREBASE_SERVICE_ACCOUNT_KEY — the full service-account JSON, as one string
//
// Stripe dashboard: add a webhook endpoint pointing at
//   https://playgoatlab.com/api/stripe-webhook
// subscribed to the `checkout.session.completed` event.

import Stripe from "stripe";
import admin from "firebase-admin";

// Stripe needs the raw request body to verify the signature — disable parsing.
export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Initialise Firebase Admin once; reused across warm invocations.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}")
    ),
  });
}
const db = admin.firestore();

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  let event;
  try {
    const raw = await readRawBody(req);
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      let uid = session.client_reference_id;
      const email =
        session.customer_details?.email || session.customer_email || null;

      // Fallback: if no uid was attached (promo code, bare payment link, etc.),
      // match the Stripe email to a Firebase account so the pass still lands.
      if (!uid && email) {
        try {
          const u = await admin.auth().getUserByEmail(email);
          uid = u.uid;
          console.log(`[stripe-webhook] matched by email → uid=${uid}`);
        } catch (e) {
          console.warn(`[stripe-webhook] no Firebase user for email=${email}`);
        }
      }

      if (uid) {
        await db.collection("users").doc(uid).set(
          {
            goatPass: true,
            goatPassAt: admin.firestore.FieldValue.serverTimestamp(),
            goatPassEmail: email,
            goatPassSession: session.id,
          },
          { merge: true }
        );
        console.log(`[stripe-webhook] GOAT Pass granted to uid=${uid}`);
      } else {
        // Couldn't map to an account at all — log for manual reconciliation.
        console.warn(
          `[stripe-webhook] checkout completed but no uid/email match ` +
            `(email=${email}, session=${session.id})`
        );
      }
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("[stripe-webhook] handler error:", err);
    res.status(500).send("Internal error");
  }
}
