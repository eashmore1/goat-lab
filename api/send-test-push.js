// Sends a single TEST push to one device — used by the owner's "Send test"
// button to verify the whole notification pipeline end-to-end in one tap.
//
// Self-scoped and safe: it only sends to a token that is already registered in
// the pushTokens collection (i.e. a real device that opted in), so it can't be
// used to spam arbitrary endpoints. Uses the same Firebase Admin credentials as
// the daily push + Stripe webhook.
//
// Env vars (Vercel): FIREBASE_SERVICE_ACCOUNT_KEY (already set).

import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}")
    ),
  });
}
const db = admin.firestore();

export default async function handler(req, res) {
  // Accept the token from the query (GET) or body (POST).
  const token =
    (req.query && req.query.token) ||
    (req.body && (typeof req.body === "string" ? JSON.parse(req.body || "{}").token : req.body.token)) ||
    "";
  if (!token || typeof token !== "string") {
    res.status(400).json({ ok: false, error: "missing token" });
    return;
  }

  try {
    // Only send to a device that actually registered — prevents this from
    // being an open relay to any FCM token.
    const doc = await db.collection("pushTokens").doc(token).get();
    if (!doc.exists) {
      res.status(404).json({ ok: false, error: "token not registered" });
      return;
    }

    await admin.messaging().send({
      token,
      data: {
        title: "GOAT Lab — test 🏀",
        body: "Your daily reminders are working. See you tomorrow!",
        url: "https://playgoatlab.com",
      },
      webpush: { headers: { TTL: "600" }, fcmOptions: { link: "https://playgoatlab.com" } },
    });

    res.status(200).json({ ok: true, sent: 1 });
  } catch (e) {
    const code = (e && e.code) || "";
    // Prune a dead token so a stale device stops erroring.
    if (
      code === "messaging/registration-token-not-registered" ||
      code === "messaging/invalid-registration-token" ||
      code === "messaging/invalid-argument"
    ) {
      db.collection("pushTokens").doc(token).delete().catch(() => {});
    }
    console.error("[send-test-push] error:", e);
    res.status(500).json({ ok: false, error: code || "send failed" });
  }
}
