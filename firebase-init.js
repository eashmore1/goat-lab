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
    async getDailyLeaderboard(dateStr, topN = 100) {
      if (!enabled) return [];
      const snap = await entriesRef(dateStr).orderBy("score", "desc").limit(topN).get();
      return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
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
      const snap = await userDoc().collection("dailyHistory").get();
      const out = {};
      snap.docs.forEach((d) => { out[d.id] = d.data(); });
      return out;
    },
    async putDailyHistory(dateStr, entry) {
      if (!enabled || !user) return;
      await userDoc().collection("dailyHistory").doc(dateStr).set(entry);
    },
  };
})();
