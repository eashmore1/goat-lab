// One-time dismissible privacy notice. GOAT Lab uses no tracking/ad cookies —
// analytics is cookieless and sign-in uses essential local storage — so this is
// a notice, not a consent gate. Shown until the visitor acknowledges it.
(function () {
  try { if (localStorage.getItem("goatlab_cookie_ack")) return; } catch (e) {}

  var bar = document.createElement("div");
  bar.className = "cookie-notice";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Privacy notice");
  bar.innerHTML =
    '<span class="cookie-text">GOAT Lab uses optional Google sign-in and privacy-friendly, ' +
    'cookieless analytics — no tracking or advertising cookies. ' +
    '<a href="privacy.html">Privacy Policy</a>.</span>' +
    '<button class="cookie-accept" type="button">Accept</button>';

  function dismiss() {
    try { localStorage.setItem("goatlab_cookie_ack", "1"); } catch (e) {}
    bar.remove();
  }
  bar.querySelector(".cookie-accept").addEventListener("click", dismiss);

  function mount() { document.body.appendChild(bar); }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
