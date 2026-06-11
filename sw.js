// GOAT Lab service worker — conservative, network-first with cache fallback.
// Only same-origin GETs are handled; Firebase, Google auth, fonts, and analytics
// (all cross-origin) are never intercepted, so sign-in/Firestore are untouched.
const CACHE = "goatlab-v1";
const CORE = [
  "/", "/index.html", "/styles.css", "/manifest.json",
  "/GOATLABLOGO.webp", "/GOATLABLOGO.png", "/favicon.png",
  "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch Firebase/Google/fonts/analytics

  // Network-first: always try fresh, fall back to cache offline. Keeps content
  // current (no stale app.js) while still working with no connection.
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((m) => m || caches.match("/index.html")))
  );
});
