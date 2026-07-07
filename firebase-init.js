// Firebase: optional Google sign-in, custom handle, GLOBAL daily leaderboard,
// and private saved builds ("My Builds") — all on Firestore.
// These config values are NOT secrets — they ship to every browser. Security is
// enforced by Firestore rules (see firestore.rules), not by hiding the apiKey.
const firebaseConfig = {
  apiKey: "AIzaSyDVrptbmrqIiSYqwfTfsw97sllcPNPaod0",
  authDomain: "goat-lab.firebaseapp.com",
  projectId: "goat-lab",
  storageBucket: "goat-lab.firebasestorage.app",
  messagingSenderId: "437208170826",
  appId: "1:437208170826:web:eb2d87a173e398a88a81b3",
  measurementId: "G-K66KP53VPS",
};

// Web Push public key (Firebase Console → Project settings → Cloud Messaging →
// "Web Push certificates" → Generate key pair). Paste the key pair value here.
const VAPID_KEY = "BJfK7UIjqku9IXqwH_HFgLs4eQ-AHxj0WAeox7e1ZQrNbsnj1gmZvg0FneQYzVhc935Dk_zQf_rSuTOU8f891jU";

window.GoatAuth = (() => {
  const isPlaceholder = String(firebaseConfig.apiKey).startsWith("PASTE");
  let auth = null;
  let db = null;
  let user = null;
  let enabled = false;
  let handleCache = null;
  let passCache = null; // GOAT Pass ownership, cached per sign-in (null = not yet read)
  let xpCache = null;   // total XP for the rank system (null = not yet read / not backfilled)
  let profilePromise = null; // one shared read of users/{uid} feeding handle + pass
  let messaging = null;      // Firebase Cloud Messaging (push), lazy-initialised
  const listeners = new Set();

  if (!isPlaceholder && typeof firebase !== "undefined") {
    try {
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      enabled = true;
      auth.onAuthStateChanged((u) => {
        user = u;
        handleCache = null; // reset on sign-in/out
        passCache = null;   // re-read GOAT Pass ownership for the new user
        xpCache = null;     // re-read XP for the new user
        profilePromise = null;
        listeners.forEach((cb) => cb(u));
      });
    } catch (e) {
      console.error("[GoatAuth] init failed — account features disabled.", e);
      enabled = false;
    }
  } else {
    console.info("[GoatAuth] Firebase not configured — account features hidden.");
  }

  const userDoc = () => db.collection("users").doc(user.uid);
  const buildsRef = () => userDoc().collection("builds");
  const entriesRef = (d) => db.collection("dailyLeaderboard").doc(d).collection("entries");

  // Merge two per-mode stat records so NO field can ever decrease. Counters take
  // the max; sum + recent follow whichever side has more plays (keeps avg/last-30
  // self-consistent). Used by seedModeStats — mirrors the same merge in app.js.
  function mergeModeRecord(a, b) {
    a = a || {}; b = b || {};
    const ap = a.plays || 0, bp = b.plays || 0;
    const fuller = bp >= ap ? b : a; // more plays = more complete sum/recent
    const aLen = Array.isArray(a.recent) ? a.recent.length : 0;
    const bLen = Array.isArray(b.recent) ? b.recent.length : 0;
    return {
      plays:   Math.max(ap, bp),
      best:    Math.max(a.best    || 0, b.best    || 0),
      elite:   Math.max(a.elite   || 0, b.elite   || 0),
      perfect: Math.max(a.perfect || 0, b.perfect || 0),
      sum:     fuller.sum || 0,
      recent:  (bLen >= aLen ? b.recent : a.recent) || [],
    };
  }

  // Read users/{uid} ONCE per sign-in and feed both handle + pass caches from it
  // (getHandle and hasGoatPass both need it — no reason to read the doc twice).
  const loadProfile = () => {
    if (!enabled || !user) return Promise.resolve(null);
    if (!profilePromise) {
      profilePromise = userDoc().get().then((doc) => {
        const data = (doc.exists && doc.data()) || {};
        if (handleCache == null) handleCache = data.handle || user.displayName || user.email || "Player";
        if (passCache == null) passCache = !!data.goatPass;
        // null (field absent) is meaningful: it tells the XP system this account
        // has never been backfilled yet. A real 0 is stored as the number 0.
        if (xpCache == null) xpCache = (typeof data.xp === "number" && isFinite(data.xp)) ? data.xp : null;
        return data;
      }).catch((e) => {
        profilePromise = null; // allow retry on transient failure
        throw e;
      });
    }
    return profilePromise;
  };

  return {
    get enabled() { return enabled; },
    currentUser: () => user,
    displayName: () => (user && (user.displayName || user.email)) || "Player",

    onChange(cb) {
      listeners.add(cb);
      cb(user);
      return () => listeners.delete(cb);
    },

    async signIn() {
      if (!enabled) return null;
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await auth.signInWithPopup(provider);
      return res.user;
    },
    async signOut() { if (enabled) await auth.signOut(); },

    // --- Push notifications (daily reminder) -------------------------------
    pushSupported() {
      return enabled && typeof firebase !== "undefined" && !!firebase.messaging
        && "serviceWorker" in navigator && "Notification" in window
        && !String(VAPID_KEY).startsWith("PASTE");
    },
    notifPermission() { try { return Notification.permission; } catch (e) { return "default"; } },
    // "On" if the browser has permission AND we hold a token for this device.
    pushEnabled() {
      try { return Notification.permission === "granted" && !!localStorage.getItem("goatlab_push_token"); }
      catch (e) { return false; }
    },
    async enablePush() {
      if (!this.pushSupported()) return { ok: false, reason: "unsupported" };
      try {
        const ok = firebase.messaging.isSupported ? await firebase.messaging.isSupported() : true;
        if (!ok) return { ok: false, reason: "unsupported" };
        const perm = await Notification.requestPermission();
        if (perm !== "granted") return { ok: false, reason: perm };
        const reg = await navigator.serviceWorker.register("/firebase-messaging-sw.js", { scope: "/fcm/" });
        if (!messaging) messaging = firebase.messaging();
        const token = await messaging.getToken({ vapidKey: VAPID_KEY, serviceWorkerRegistration: reg });
        if (!token) return { ok: false, reason: "no-token" };
        await db.collection("pushTokens").doc(token).set({
          uid: user ? user.uid : null,
          ua: String(navigator.userAgent || "").slice(0, 200),
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
        try { localStorage.setItem("goatlab_push_token", token); } catch (e) {}
        return { ok: true };
      } catch (e) { return { ok: false, reason: "error", error: String(e) }; }
    },
    async disablePush() {
      try {
        const token = localStorage.getItem("goatlab_push_token");
        if (token) {
          await db.collection("pushTokens").doc(token).delete().catch(() => {});
          try { if (!messaging) messaging = firebase.messaging(); await messaging.deleteToken(); } catch (e) {}
          try { localStorage.removeItem("goatlab_push_token"); } catch (e) {}
        }
        return { ok: true };
      } catch (e) { return { ok: false }; }
    },

    // --- Custom handle (leaderboard display name) --------------------------
    async getHandle() {
      if (!enabled || !user) return null;
      if (handleCache != null) return handleCache;
      try { await loadProfile(); } catch (e) { /* fall through to display name */ }
      if (handleCache == null) handleCache = this.displayName();
      return handleCache;
    },
    async setHandle(name) {
      if (!enabled || !user) return null;
      const h = String(name).trim().slice(0, 40) || this.displayName();
      await userDoc().set({ handle: h }, { merge: true });
      handleCache = h;
      return h;
    },

    // --- GOAT Pass (optional one-time purchase) ----------------------------
    // Reads the goatPass flag set by the Stripe webhook on the user's doc.
    async hasGoatPass() {
      if (!enabled || !user) return false;
      if (passCache !== null) return passCache;
      // Shares the single users/{uid} read with getHandle. On a transient read
      // failure we do NOT cache false — the profile promise is reset so the next
      // check retries instead of requiring a page refresh.
      try { await loadProfile(); } catch (e) { return false; }
      return passCache === true;
    },
    // Force a fresh read (used to poll right after a purchase).
    async refreshGoatPass() { passCache = null; profilePromise = null; return this.hasGoatPass(); },
    // Synchronous best-effort read (may be null if not fetched yet).
    goatPassCached() { return passCache === true; },
    // Build the Stripe checkout URL, tagging it with this user's uid so the
    // webhook can grant the pass to the right account, and pre-filling email.
    goatPassCheckoutUrl(base) {
      if (!user) return base;
      try {
        const u = new URL(base);
        u.searchParams.set("client_reference_id", user.uid);
        if (user.email) u.searchParams.set("prefilled_email", user.email);
        return u.toString();
      } catch (e) { return base; }
    },

    // --- Global daily leaderboard ------------------------------------------
    async submitDailyScore(dateStr, data) {
      if (!enabled || !user) return false;
      const name = String(data.name || handleCache || this.displayName()).slice(0, 40);
      const entryRef = entriesRef(dateStr).doc(user.uid);
      const existing = await entryRef.get();
      const clamp = (s) => Math.max(0, Math.min(100, Math.round(Number(s) || 0)));
      const newScore = clamp(data.score);
      const oldScore = existing.exists ? clamp(existing.data().score) : null;
      await entryRef.set({
        name,
        score: Number(data.score) || 0,
        tier: String(data.tier || ""),
        franchise: !!data.franchise,
        franchiseTeam: data.franchiseTeam || null,
        picks: data.picks || null, // stored for auditability (detect/purge fake scores)
        goatPass: passCache === true, // drives the 🐐 badge; rules verify it's real
        // Current rank name (e.g. "All-Star") so the leaderboard can show a rank
        // chip next to pass holders without an extra read per row.
        rank: (typeof window !== "undefined" && window.GoatXP && window.GoatXP.rankName)
          ? (window.GoatXP.rankName() || null) : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      // Maintain a running tally on the daily doc so the leaderboard can read ONE
      // document (count + score histogram) instead of every player's score.
      const inc = firebase.firestore.FieldValue.increment.bind(firebase.firestore.FieldValue);
      const agg = {};
      if (!existing.exists) {
        agg.playerCount = inc(1);
        agg.scoreHist = { [newScore]: inc(1) };
      } else if (oldScore !== newScore) {
        agg.scoreHist = { [oldScore]: inc(-1), [newScore]: inc(1) };
      }
      if (Object.keys(agg).length) {
        db.collection("dailyLeaderboard").doc(dateStr).set(agg, { merge: true }).catch(() => {});
      }
      return true;
    },

    // One cheap read: { count, hist } where hist maps score -> number of players.
    async getDailyAggregate(dateStr) {
      if (!enabled) return null;
      try {
        const doc = await db.collection("dailyLeaderboard").doc(dateStr).get();
        if (!doc.exists) return null;
        const d = doc.data();
        return { count: d.playerCount || 0, hist: d.scoreHist || {} };
      } catch (e) { return null; }
    },
    // Full read of every score for a day — used only to (re)build the summary
    // when it's missing or incomplete, so it happens at most once per day.
    async getAllDailyScores(dateStr) {
      if (!enabled) return [];
      try {
        const snap = await entriesRef(dateStr).get();
        return snap.docs.map((d) => d.data().score).filter((s) => typeof s === "number");
      } catch (e) { return []; }
    },
    // This account's own entry for a given day (score etc.) — lets the rank banner
    // work even when the device has no local record for that date (played elsewhere).
    async getMyEntry(dateStr) {
      if (!enabled || !user) return null;
      try {
        const doc = await entriesRef(dateStr).doc(user.uid).get();
        return doc.exists ? doc.data() : null;
      } catch (e) { console.warn("[GoatAuth] getMyEntry failed:", e); return null; }
    },
    // Every entry tied at exactly `score` — used to compute a player's exact rank
    // when they're beyond the fetched top-N (the score histogram gives everyone
    // strictly above for free; this fills in the tie group at their own score).
    async getEntriesAtScore(dateStr, score) {
      if (!enabled) return [];
      try {
        const snap = await entriesRef(dateStr).where("score", "==", score).get();
        return snap.docs.map((d) => ({ uid: d.id, picks: d.data().picks, createdAt: d.data().createdAt }));
      } catch (e) { console.warn("[GoatAuth] getEntriesAtScore failed:", e); return []; }
    },
    // Overwrite the daily summary with an accurate snapshot (backfill).
    async writeDailyHist(dateStr, hist, count) {
      if (!enabled) return;
      const ref = db.collection("dailyLeaderboard").doc(dateStr);
      try { await ref.update({ scoreHist: hist, playerCount: count }); }
      catch (e) { try { await ref.set({ scoreHist: hist, playerCount: count }, { merge: true }); } catch (e2) {} }
    },

    // --- Classic / Blind mode stats (cloud, follows you across devices) -----
    async getModeStatsCloud() {
      if (!enabled || !user) return null;
      try {
        const doc = await userDoc().collection("stats").doc("modes").get();
        return doc.exists ? (doc.data() || {}) : {};
      } catch (e) { console.warn("[GoatAuth] getModeStatsCloud failed:", e); return null; }
    },
    // Add one Classic/Blind result to the account's running totals. A transaction
    // keeps it correct even if two devices finish games at the same time.
    async bumpModeStats(mode, score) {
      if (!enabled || !user) return;
      if ((mode !== "classic" && mode !== "blind") || typeof score !== "number" || score <= 0) return;
      const ref = userDoc().collection("stats").doc("modes");
      try {
        await db.runTransaction(async (tx) => {
          const doc = await tx.get(ref);
          const data = doc.exists ? (doc.data() || {}) : {};
          const m = data[mode] || { plays: 0, best: 0, sum: 0, elite: 0, perfect: 0, recent: [] };
          m.plays = (m.plays || 0) + 1;
          m.sum = (m.sum || 0) + score;
          if (score > (m.best || 0)) m.best = score;
          if (score >= 97) m.elite = (m.elite || 0) + 1;
          if (score === 100) m.perfect = (m.perfect || 0) + 1;
          m.recent = (Array.isArray(m.recent) ? m.recent : []).concat(score).slice(-30);
          data[mode] = m;
          tx.set(ref, data, { merge: true });
        });
      } catch (e) { console.warn("[GoatAuth] bumpModeStats failed:", e); }
    },
    // Reconcile this device's LOCAL Classic/Blind totals into the cloud. Runs on
    // every sign-in + stats-open — catches games played signed-out (which never
    // hit bumpModeStats). FIELD-WISE MAX MERGE so no stat can ever DECREASE: a
    // device with more plays but a lower best won't clobber an all-time high.
    // plays converges to the higher device's count (a true cross-device SUM would
    // double-count games re-synced through the cloud, so max is the safe choice).
    async seedModeStats(local) {
      if (!enabled || !user || !local) return;
      const ref = userDoc().collection("stats").doc("modes");
      try {
        await db.runTransaction(async (tx) => {
          const doc = await tx.get(ref);
          const data = doc.exists ? (doc.data() || {}) : {};
          let changed = false;
          ["classic", "blind"].forEach((mode) => {
            const l = local[mode];
            if (!l) return;
            const c = data[mode] || {};
            const merged = mergeModeRecord(c, l);
            if (JSON.stringify(merged) !== JSON.stringify(c)) { data[mode] = merged; changed = true; }
          });
          if (changed) tx.set(ref, data, { merge: true });
        });
      } catch (e) { console.warn("[GoatAuth] seedModeStats (merge) failed:", e); }
    },
    async getDailyLeaderboard(dateStr, topN = 100) {
      if (!enabled) return [];
      const snap = await entriesRef(dateStr).orderBy("score", "desc").limit(topN).get();
      const rows = snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
      if (dateStr >= "2026-06-17") {
        rows.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          const bestA = Array.isArray(a.picks) ? Math.max(...a.picks.map(p => p.score ?? 0)) : 0;
          const bestB = Array.isArray(b.picks) ? Math.max(...b.picks.map(p => p.score ?? 0)) : 0;
          if (bestB !== bestA) return bestB - bestA;
          const tA = a.createdAt?.toMillis?.() ?? 0;
          const tB = b.createdAt?.toMillis?.() ?? 0;
          return tA - tB;
        });
      }
      return rows;
    },

    // --- XP / rank system --------------------------------------------------
    // Cached best-effort XP read (null until loadProfile runs, or if the account
    // has never been backfilled — the caller treats null as "needs backfill").
    xpCached() { return xpCache; },
    // Read XP, loading the profile if needed. Returns a number, or null if the
    // account has no xp field yet (not backfilled).
    async getXp() {
      if (!enabled || !user) return null;
      if (xpCache !== null) return xpCache;
      try { await loadProfile(); } catch (e) { return null; }
      return xpCache;
    },
    // Atomically add XP (used on every award). Keeps the cache in sync so the UI
    // updates instantly without a re-read.
    async addXp(n) {
      if (!enabled || !user || !n) return;
      const delta = Math.round(Number(n) || 0);
      if (!delta) return;
      // Read the real cloud XP before mutating the local cache — otherwise a game
      // finishing during sign-in (xpCache still null) would desync it to a low value.
      if (xpCache == null) { try { await loadProfile(); } catch (e) {} }
      const base = (typeof xpCache === "number" && isFinite(xpCache)) ? xpCache : 0;
      xpCache = Math.max(0, base + delta);
      try { await userDoc().set({ xp: firebase.firestore.FieldValue.increment(delta) }, { merge: true }); }
      catch (e) {}
    },
    // Set XP to an exact value (used by the one-time backfill).
    async setXp(n) {
      if (!enabled || !user) return;
      const v = Math.max(0, Math.round(Number(n) || 0));
      xpCache = v;
      try { await userDoc().set({ xp: v }, { merge: true }); } catch (e) {}
    },
    // Upsert this player's entry on the all-time XP leaderboard
    // (xpLeaderboard/{uid}).
    async submitXpEntry(xp, rankName, name) {
      if (!enabled || !user) return;
      try {
        await db.collection("xpLeaderboard").doc(user.uid).set({
          xp: Math.max(0, Math.round(Number(xp) || 0)),
          name: String(name || handleCache || this.displayName()).slice(0, 40),
          goatPass: passCache === true,
          rank: rankName ? String(rankName).slice(0, 24) : null,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
      } catch (e) {}
    },
    // Top-N players by total XP, all-time.
    async getXpLeaderboard(topN = 50) {
      if (!enabled) return [];
      try {
        const snap = await db.collection("xpLeaderboard")
          .orderBy("xp", "desc").limit(topN).get();
        return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
      } catch (e) { return []; }
    },

    // --- Private saved builds ("My Builds") --------------------------------
    async saveBuild(data) {
      if (!enabled || !user) throw new Error("not signed in");
      const ref = await buildsRef().add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      return ref.id;
    },
    async listBuilds() {
      if (!enabled || !user) return [];
      const snap = await buildsRef().orderBy("createdAt", "desc").get();
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    },
    async deleteBuild(id) {
      if (!enabled || !user) return;
      await buildsRef().doc(id).delete();
    },

    // --- Daily history / streak (cloud-synced, one doc per date) ------------
    async fetchDailyHistory() {
      if (!enabled || !user) return {};
      const snap = await userDoc().collection("dailyHistory2").get();
      const out = {};
      snap.docs.forEach((d) => { out[d.id] = d.data(); });
      return out;
    },
    async putDailyHistory(dateStr, entry) {
      if (!enabled || !user) return;
      await userDoc().collection("dailyHistory2").doc(dateStr).set(entry);
    },
    // Write many days at once (one commit per 450 docs) instead of N separate
    // network writes — used by the sign-in sync.
    async putDailyHistoryBatch(entries) {
      if (!enabled || !user) return;
      const col = userDoc().collection("dailyHistory2");
      const dates = Object.keys(entries || {});
      for (let i = 0; i < dates.length; i += 450) {
        const batch = db.batch();
        dates.slice(i, i + 450).forEach((d) => batch.set(col.doc(d), entries[d]));
        await batch.commit();
      }
    },
    // Wipe THIS account's daily history (and its leaderboard entries for those
    // days). Used to clean up cross-account contamination from the old sync bug.
    async clearDailyHistory() {
      if (!enabled || !user) return;
      const uid = user.uid;
      const snap = await userDoc().collection("dailyHistory2").get();
      await Promise.all(snap.docs.map((d) => d.ref.delete().catch(() => {})));
      await Promise.all(snap.docs.map((d) =>
        db.collection("dailyLeaderboard").doc(d.id).collection("entries").doc(uid).delete().catch(() => {})));
    },

    // --- Delete account + all associated data ------------------------------
    async deleteAccount() {
      if (!enabled || !user) return;
      const uid = user.uid;
      // Leaderboard entries exist only for days in dailyHistory2 — use those.
      const dailySnap = await userDoc().collection("dailyHistory2").get();
      await Promise.all(dailySnap.docs.map((d) =>
        db.collection("dailyLeaderboard").doc(d.id).collection("entries").doc(uid).delete().catch(() => {})));
      // Delete daily history, saved builds, and the profile doc.
      await Promise.all(dailySnap.docs.map((d) => d.ref.delete().catch(() => {})));
      const buildsSnap = await buildsRef().get();
      await Promise.all(buildsSnap.docs.map((d) => d.ref.delete().catch(() => {})));
      await userDoc().delete().catch(() => {});
      // Finally delete the auth user (re-auth if the session is too old).
      try {
        await user.delete();
      } catch (e) {
        if (e && e.code === "auth/requires-recent-login") {
          await user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
          await user.delete();
        } else {
          throw e;
        }
      }
    },
  };
})();
