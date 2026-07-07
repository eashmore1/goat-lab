// GOAT Lab service worker — conservative, network-first with cache fallback.
// Only same-origin GETs are handled; Firebase, Google auth, fonts, and analytics
// (all cross-origin) are never intercepted, so sign-in/Firestore are untouched.
const CACHE = "goatlab-v5";
const CORE = [
  "/", "/index.html", "/styles.css", "/manifest.json",
  "/GOATLABLOGO.webp", "/GOATLABLOGO.png",
  "/favicon-v2.png", "/favicon-32-v2.png",
  "/apple-touch-icon-v2.png", "/icon-192-v2.png", "/icon-512-v2.png",
  "/icon-192-maskable-v2.png", "/icon-512-maskable-v2.png",
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

  // Network-first with a short timeout: fresh when the network is healthy, but a
  // flaky connection falls back to cache after ~3.5s instead of hanging the page.
  // If nothing is cached, keep waiting on the network (never abandon a first load).
  // IMPORTANT: only NAVIGATIONS may fall back to the index.html shell — serving
  // index.html in place of a missing JS/CSS file breaks the whole page.
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const network = fetch(req).then((res) => {
      cache.put(req, res.clone()).catch(() => {});
      return res;
    });
    const first = await Promise.race([
      network.catch(() => "netfail"),
      new Promise((resolve) => setTimeout(() => resolve("timeout"), 3500)),
    ]);
    if (first !== "timeout" && first !== "netfail") return first;
    const cached = await cache.match(req);
    if (cached) return cached;
    if (req.mode === "navigate") {
      const shell = await cache.match("/index.html");
      if (shell) return shell;
    }
    return network; // no cache to serve — let the network settle it (or fail honestly)
  })());
});
