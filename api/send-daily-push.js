// Sends the "today's Daily is live" push to every stored FCM token.
// Triggered once a day by a Vercel Cron (see vercel.json). Protected by
// CRON_SECRET so only the cron (or you) can fire it.
//
// Env vars (Vercel): FIREBASE_SERVICE_ACCOUNT_KEY (already set for Stripe),
// and CRON_SECRET (any long random string).

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
  // Auth: Vercel Cron sends "Authorization: Bearer <CRON_SECRET>"; also accept
  // ?key=<CRON_SECRET> for manual testing.
  const secret = process.env.CRON_SECRET;
  const authHeader = req.headers["authorization"] || "";
  const qKey = (req.query && req.query.key) || "";
  if (secret && authHeader !== `Bearer ${secret}` && qKey !== secret) {
    res.status(401).send("Unauthorized");
    return;
  }

  try {
    const snap = await db.collection("pushTokens").get();
    const tokens = snap.docs.map((d) => d.id);
    if (!tokens.length) {
      res.status(200).json({ sent: 0, total: 0 });
      return;
    }

    const data = {
      title: "GOAT Lab 🏀",
      body: "Today's Daily is live — can you beat yesterday's score?",
      url: "https://playgoatlab.com",
    };

    let sent = 0, failed = 0;
    for (let i = 0; i < tokens.length; i += 500) {
      const batch = tokens.slice(i, i + 500);
      const resp = await admin.messaging().sendEachForMulticast({
        tokens: batch,
        data,
        webpush: { headers: { TTL: "43200" }, fcmOptions: { link: data.url } },
      });
      sent += resp.successCount;
      failed += resp.failureCount;
      // Prune dead tokens so the list stays clean.
      resp.responses.forEach((r, idx) => {
        if (!r.success) {
          const code = r.error && r.error.code;
          if (
            code === "messaging/registration-token-not-registered" ||
            code === "messaging/invalid-registration-token" ||
            code === "messaging/invalid-argument"
          ) {
            db.collection("pushTokens").doc(batch[idx]).delete().catch(() => {});
          }
        }
      });
    }

    console.log(`[send-daily-push] sent=${sent} failed=${failed} total=${tokens.length}`);
    res.status(200).json({ sent, failed, total: tokens.length });
  } catch (e) {
    console.error("[send-daily-push] error:", e);
    res.status(500).send("Internal error");
  }
}
