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

window.GoatAuth = (() => {
  const isPlaceholder = String(firebaseConfig.apiKey).startsWith("PASTE");
  let auth = null;
  let db = null;
  let user = null;
  let enabled = false;
  let handleCache = null;
  let passCache = null; // GOAT Pass ownership, cached per sign-in (null = not yet read)
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

    // --- Custom handle (leaderboard display name) --------------------------
    async getHandle() {
      if (!enabled || !user) return null;
      if (handleCache != null) return handleCache;
      try {
        const doc = await userDoc().get();
        handleCache = (doc.exists && doc.data().handle) || this.displayName();
      } catch (e) {
        console.error(e);
        handleCache = this.displayName();
      }
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
      try {
        const doc = await userDoc().get();
        passCache = !!(doc.exists && doc.data().goatPass);
      } catch (e) { passCache = false; }
      return passCache;
    },
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
      } catch (e) { return null; }
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
      } catch (e) {}
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
