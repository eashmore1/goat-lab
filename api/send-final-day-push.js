// One-off "final day" GOAT Pass push: fires on the last day of launch pricing
// to nudge fence-sitters before the price goes $2.99 -> $3.99.
//
// Safety rails so it can never fire early or twice:
//   1. HARD DATE GATE — only sends on FINAL_DAY (UTC). Any other day is a no-op.
//   2. IDEMPOTENT — records a Firestore flag after sending and refuses to send
//      again, so a re-run (cron retry or a manual hit) won't double-notify.
//   3. CRON_SECRET protected, same as send-daily-push.
//
// Scheduled by a Vercel Cron (see vercel.json) for FINAL_DAY; you can also hit
// it manually with ?key=<CRON_SECRET>. Add ?dryRun=1 to see how many tokens it
// WOULD reach without sending anything (safe to run any day).

import admin from "firebase-admin";

// Last day of launch pricing. The price flips to $3.99 at the end of this day.
const FINAL_DAY = "2026-07-15";
const CAMPAIGN_ID = "finalDayPush_2026_07_15";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}")
    ),
  });
}
const db = admin.firestore();

function utcDateStr(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`;
}

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  const authHeader = req.headers["authorization"] || "";
  const qKey = (req.query && req.query.key) || "";
  if (secret && authHeader !== `Bearer ${secret}` && qKey !== secret) {
    res.status(401).send("Unauthorized");
    return;
  }

  const dryRun = req.query && (req.query.dryRun === "1" || req.query.dryRun === "true");
  const today = utcDateStr();

  // Rail #1: never send on any day but the final day.
  if (today !== FINAL_DAY && !dryRun) {
    res.status(200).json({ skipped: true, reason: "not final day", today, finalDay: FINAL_DAY });
    return;
  }

  try {
    // Rail #2: only ever send once.
    const flagRef = db.collection("campaigns").doc(CAMPAIGN_ID);
    if (!dryRun) {
      const flag = await flagRef.get();
      if (flag.exists && flag.data() && flag.data().sent) {
        res.status(200).json({ skipped: true, reason: "already sent", sentAt: flag.data().sentAt || null });
        return;
      }
    }

    const snap = await db.collection("pushTokens").get();
    const tokens = snap.docs.map((d) => d.id);

    if (dryRun) {
      res.status(200).json({ dryRun: true, wouldSendTo: tokens.length, today, finalDay: FINAL_DAY });
      return;
    }
    if (!tokens.length) {
      res.status(200).json({ sent: 0, total: 0 });
      return;
    }

    const data = {
      title: "⏰ Final day — GOAT Pass is $2.99",
      body: "Launch price ends tonight, then it's $3.99. Grab the Pass before it goes up.",
      url: "https://playgoatlab.com/?goatpass=lastcall",
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
      // Prune dead tokens so the list stays clean (same as send-daily-push).
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

    // Mark done so we never re-send.
    await flagRef.set({ sent: true, sentAt: new Date().toISOString(), count: sent }, { merge: true });

    console.log(`[send-final-day-push] sent=${sent} failed=${failed} total=${tokens.length}`);
    res.status(200).json({ sent, failed, total: tokens.length });
  } catch (e) {
    console.error("[send-final-day-push] error:", e);
    res.status(500).send("Internal error");
  }
}
