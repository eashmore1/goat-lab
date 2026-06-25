export const config = { runtime: "edge" };

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function tierFor(score) {
  if (score >= 100) return "GOAT";
  if (score >= 97) return "GOAT Candidate";
  if (score >= 94) return "All-Time Legend";
  if (score >= 90) return "Hall of Famer";
  if (score >= 86) return "Franchise Icon";
  if (score >= 80) return "All-Star";
  if (score >= 77) return "Rotation Player";
  if (score >= 74) return "Bench Warmer";
  if (score >= 71) return "End of Roster";
  if (score >= 68) return "Two-Way Contract";
  if (score >= 65) return "G League";
  if (score >= 60) return "Cut in Training Camp";
  return "Watching From the Stands";
}

// Per-build share page: emits Open Graph / Twitter meta so the link unfurls as the
// trading-card image, then redirects real visitors into the game.
export default function handler(req) {
  const url = new URL(req.url);
  const sp = url.searchParams;
  const origin = url.origin;

  const score = Math.max(0, Math.min(100, parseInt(sp.get("s") || "0", 10)));
  const mode = sp.get("m") || "classic";
  const dnum = sp.get("d");
  const tier = tierFor(score);

  const ogImg = `${origin}/api/og?${sp.toString()}`;
  const pageUrl = `${origin}/s?${sp.toString()}`;
  const title = mode === "daily"
    ? `I scored ${score} on GOAT Lab Daily #${dnum || "?"}`
    : `I scored ${score} (${tier}) in GOAT Lab`;
  const desc = "Build the perfect hooper from basketball history — can you beat my build?";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta property="og:type" content="website">
<meta property="og:site_name" content="GOAT Lab">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(ogImg)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${esc(pageUrl)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(ogImg)}">
<meta http-equiv="refresh" content="0; url=/">
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f5ecd8;color:#151413;text-align:center;padding:48px">
<p>Opening GOAT Lab… <a href="/" style="color:#c9673d">tap here</a> if it doesn't redirect.</p>
<script>location.replace("/");</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=600",
    },
  });
}
