import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

// ── palette (matches the in-app canvas card) ───────────────────────────────
const PAPER = "#f5ecd8";
const INK   = "#151413";
const GOLD  = "#e6b843";
const COURT = "#c9673d";
const CHALK = "#fff7df";
const MUTED = "rgba(21,20,19,0.55)";
const TRACK = "#e6dac3";

const ATTRS = ["HGT", "SHT", "FIN", "HDL", "PAS", "DEF", "REB", "ATH", "IQ"];

// Ported from app.js getTier() so the card label matches the game exactly.
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

const barColor = (v) =>
  v >= 95 ? "#4f8a4f" : v >= 85 ? "#d9a441" : v >= 75 ? "#cf7a3a" : "#c45a4a";

// tiny hyperscript so we don't need JSX / a build step
const h = (type, style, children) => ({
  type,
  props: { style, ...(children !== undefined ? { children } : {}) },
});

// Build the 1200×630 landscape trading card element tree.
export function buildCard({ score, vals, label }) {
  const tier = tierFor(score);

  const statRow = (short, v) =>
    h("div", { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 13 }, [
      h("div", { width: 70, fontSize: 24, fontWeight: 700, color: MUTED }, short),
      h("div", { display: "flex", flex: 1, height: 22, background: TRACK, borderRadius: 11, marginRight: 16, overflow: "hidden" }, [
        h("div", { width: `${Math.max(4, v)}%`, height: 22, background: barColor(v), borderRadius: 11 }),
      ]),
      h("div", { width: 56, fontSize: 26, fontWeight: 700, color: INK, textAlign: "right" }, String(v)),
    ]);

  return h("div", {
    display: "flex", flexDirection: "row", width: 1200, height: 630,
    background: PAPER, border: `14px solid ${INK}`, fontFamily: "Space Mono",
  }, [
    // ── left rail ──
    h("div", {
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: 446, background: INK, color: CHALK, padding: 46,
    }, [
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { fontSize: 30, fontWeight: 700, letterSpacing: 1, color: CHALK }, "GOAT LAB"),
        h("div", { fontSize: 20, fontWeight: 700, color: GOLD, marginTop: 8 }, label),
      ]),
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { fontSize: 168, fontWeight: 700, color: GOLD, lineHeight: 1 }, String(score)),
        h("div", {
          display: "flex", fontSize: 24, fontWeight: 700, color: INK, background: GOLD,
          padding: "8px 18px", borderRadius: 30, marginTop: 6,
        }, tier),
      ]),
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { fontSize: 26, fontWeight: 700, color: CHALK }, "Can you beat my build?"),
        h("div", { fontSize: 22, fontWeight: 700, color: COURT, marginTop: 6 }, "playgoatlab.com"),
      ]),
    ]),
    // ── right rail: stat bars ──
    h("div", {
      display: "flex", flexDirection: "column", justifyContent: "center",
      flex: 1, padding: "40px 44px",
    }, ATTRS.map((s, i) => statRow(s, vals[i]))),
  ]);
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const score = Math.max(0, Math.min(100, parseInt(searchParams.get("s") || "0", 10)));
  const mode  = searchParams.get("m") || "classic";
  const dnum  = searchParams.get("d");
  const vals  = (searchParams.get("v") || "")
    .split("-")
    .map((n) => Math.max(0, Math.min(100, parseInt(n, 10) || 0)));
  while (vals.length < 9) vals.push(0);

  const label =
    mode === "daily" ? `DAILY #${dnum || "?"}` :
    mode === "blind" ? "BLIND MODE" : "CLASSIC MODE";

  const [bold, regular] = await Promise.all([
    fetch(new URL("/og-assets/SpaceMono-Bold.ttf", req.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("/og-assets/SpaceMono-Regular.ttf", req.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(buildCard({ score, vals, label }), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Space Mono", data: bold, weight: 700, style: "normal" },
      { name: "Space Mono", data: regular, weight: 400, style: "normal" },
    ],
  });
}
