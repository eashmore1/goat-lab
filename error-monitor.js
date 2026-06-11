// Error monitoring for GOAT Lab.
// Paste your Sentry DSN below to enable remote error capture (free tier is plenty).
// With no DSN it stays silent except for keeping the last error on window for
// quick debugging — no remote calls, nothing breaks.
(function () {
  var SENTRY_DSN = ""; // <-- paste your Sentry DSN here to turn on remote monitoring

  // Always-on lightweight capture (handy even without Sentry).
  window.addEventListener("error", function (e) {
    window.__lastError = (e && (e.error || e.message)) || "unknown error";
  });
  window.addEventListener("unhandledrejection", function (e) {
    window.__lastRejection = e && e.reason;
  });

  if (!SENTRY_DSN) return; // remote monitoring off until a DSN is set

  var s = document.createElement("script");
  s.src = "https://browser.sentry-cdn.com/7.120.3/bundle.min.js";
  s.crossOrigin = "anonymous";
  s.onload = function () {
    if (window.Sentry) {
      window.Sentry.init({
        dsn: SENTRY_DSN,
        environment: location.hostname === "localhost" ? "dev" : "prod",
        tracesSampleRate: 0.1,
        ignoreErrors: ["ResizeObserver loop", "Non-Error promise rejection captured"],
      });
    }
  };
  document.head.appendChild(s);
})();
