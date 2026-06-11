// Firebase: optional Google sign-in + GLOBAL daily leaderboard (Firestore).
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

// Graceful fallback: if config/SDK is missing, account features hide themselves
// and the game keeps working untouched.
window.GoatAuth = (() => {
  const isPlaceholder = String(firebaseConfig.apiKey).startsWith("PASTE");
  let auth = null;
  let db = null;
  let user = null;
  let enabled = false;
  const listeners = new Set();

  if (!isPlaceholder && typeof firebase !== "undefined") {
    try {
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      enabled = true;
      auth.onAuthStateChanged((u) => {
        user = u;
        listeners.forEach((cb) => cb(u));
      });
    } catch (e) {
      console.error("[GoatAuth] init failed — account features disabled.", e);
      enabled = false;
    }
  } else {
    console.info("[GoatAuth] Firebase not configured — account features hidden.");
  }

  function entriesRef(dateStr) {
    return db.collection("dailyLeaderboard").doc(dateStr).collection("entries");
  }

  return {
    get enabled() { return enabled; },
    currentUser: () => user,
    displayName: () => (user && (user.displayName || user.email)) || "Anonymous",

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

    async signOut() {
      if (enabled) await auth.signOut();
    },

    // --- Global daily leaderboard ------------------------------------------
    // One entry per user per day: dailyLeaderboard/{date}/entries/{uid}
    async submitDailyScore(dateStr, data) {
      if (!enabled || !user) return false;
      const name = String(data.name || this.displayName()).slice(0, 40);
      await entriesRef(dateStr).doc(user.uid).set({
        name,
        score: Number(data.score) || 0,
        tier: String(data.tier || ""),
        franchise: !!data.franchise,
        franchiseTeam: data.franchiseTeam || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      return true;
    },

    // Public read — works even when signed out.
    async getDailyLeaderboard(dateStr, topN = 100) {
      if (!enabled) return [];
      const snap = await entriesRef(dateStr)
        .orderBy("score", "desc")
        .limit(topN)
        .get();
      return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
    },
  };
})();
