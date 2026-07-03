// GOAT Lab — Firebase Cloud Messaging service worker (push notifications).
// Kept separate from sw.js (the cache worker) and registered at its own scope
// so the two never conflict. Handles background push + notification clicks.
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDVrptbmrqIiSYqwfTfsw97sllcPNPaod0",
  authDomain: "goat-lab.firebaseapp.com",
  projectId: "goat-lab",
  storageBucket: "goat-lab.firebasestorage.app",
  messagingSenderId: "437208170826",
  appId: "1:437208170826:web:eb2d87a173e398a88a81b3",
});

const messaging = firebase.messaging();

// We send DATA-only messages so the worker fully controls how they look.
messaging.onBackgroundMessage((payload) => {
  const d = payload.data || {};
  self.registration.showNotification(d.title || "GOAT Lab", {
    body: d.body || "Today's Daily is live — can you beat yesterday?",
    icon: "/icon-192-v2.png",
    badge: "/favicon-32-v2.png",
    tag: "goatlab-daily", // collapse repeats into one
    data: { url: d.url || "https://playgoatlab.com" },
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "https://playgoatlab.com";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes("playgoatlab.com") && "focus" in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
