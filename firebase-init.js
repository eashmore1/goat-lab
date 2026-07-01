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

    // --- Global daily leaderboard ------------------------------------------
    async submitDailyScore(dateStr, data) {
      if (!enabled || !user) return false;
      const name = String(data.name || handleCache || this.displayName()).slice(0, 40);
      const entryRef = entriesRef(dateStr).doc(user.uid);
      const existing = await entryRef.get();
      await entryRef.set({
        name,
        score: Number(data.score) || 0,
        tier: String(data.tier || ""),
        franchise: !!data.franchise,
        franchiseTeam: data.franchiseTeam || null,
        picks: data.picks || null, // stored for auditability (detect/purge fake scores)
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      // Increment the total player count only on first submission for this date.
      if (!existing.exists) {
        db.collection("dailyLeaderboard").doc(dateStr).set(
          { playerCount: firebase.firestore.FieldValue.increment(1) },
          { merge: true }
        ).catch(() => {});
      }
      return true;
    },

    async getDailyPlayerCount(dateStr) {
      if (!enabled) return null;
      try {
        const doc = await db.collection("dailyLeaderboard").doc(dateStr).get();
        return doc.exists ? (doc.data().playerCount || null) : null;
      } catch (e) { return null; }
    },

    async getAllDailyScores(dateStr) {
      if (!enabled) return [];
      try {
        const snap = await entriesRef(dateStr).get();
        return snap.docs.map(d => d.data().score).filter(s => typeof s === "number");
      } catch (e) { return []; }
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
