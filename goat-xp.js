// GOAT Lab — XP / Rank system.
// Self-contained: exposes window.GoatXP. Loaded after firebase-init.js and
// app.js (both `defer`), so it can lean on their globals (GoatAuth, getTodayStr,
// getDailyHistory, getModeStats, getPB, getDailyStreak) and the window.GoatTrophies
// hook app.js publishes. Every runtime call app.js makes is guarded, so load
// order only matters for our own init (which runs last).
window.GoatXP = (function () {
  "use strict";

  // ==== Config — TUNE FREELY BEFORE LAUNCH (migration needed after) =========
  // The 12-rank ladder. `xp` is the cumulative total needed to reach the rank.
  const RANKS = [
    { name: "Rookie",           xp: 0,     icon: "🏀", chip: "chip-gray" },
    { name: "Benchwarmer",      xp: 250,   icon: "🪑", chip: "chip-gray" },
    { name: "Role Player",      xp: 650,   icon: "🧩", chip: "chip-gray" },
    { name: "Sixth Man",        xp: 1300,  icon: "🙌", chip: "chip-bronze" },
    { name: "Starter",          xp: 2400,  icon: "🏃", chip: "chip-bronze" },
    { name: "All-Star",         xp: 4000,  icon: "⭐", chip: "chip-blue" },
    { name: "All-NBA",          xp: 6500,  icon: "🌟", chip: "chip-blue" },
    { name: "Franchise Player", xp: 9500,  icon: "🏛️", chip: "chip-purple" },
    { name: "MVP",              xp: 14000, icon: "👑", chip: "chip-purple" },
    { name: "Hall of Famer",    xp: 20000, icon: "🎖️", chip: "chip-gold" },
    { name: "Legend",           xp: 29000, icon: "💎", chip: "chip-gold" },
    { name: "GOAT",             xp: 42000, icon: "🐐", chip: "chip-gold" },
  ];
  const AWARDS = {
    dailyPlay: 50,        // once per day
    modePlay: 20,         // first N Classic/Blind runs a day...
    modePlayTaper: 5,     // ...then this, forever (anti-farm without a hard cap)
    modeFullRuns: 5,
    streakPer: 10,        // per streak day, awarded once/day with the Daily...
    streakCap: 150,       // ...capped here (15-day streak)
    score90: 25,          // highest applicable tier only (not stacked)
    score97: 50,
    score100: 150,
    trophy: 100,          // per trophy unlocked
    passMultiplier: 1.0,  // GOAT Pass gives NO XP advantage — everyone earns equally
                          // (set >1 to re-enable a pass boost; kept as a knob)
  };
  const LEVEL_STEP = 250;              // 1 cosmetic "level" per this much XP
  const LS_KEY = "goatlab_xp_v1";      // per-device meta + signed-out XP

  // ==== Small deps (all guarded — app.js globals may not exist in previews) ==
  const A = () => window.GoatAuth;
  const signedIn = () => { const a = A(); return !!(a && a.currentUser && a.currentUser()); };
  const hasPass = () => { const a = A(); return !!(a && a.goatPassCached && a.goatPassCached()); };
  function todayStr() {
    try { if (window.getTodayStr) return window.getTodayStr(); } catch (e) {}
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  const call = (name, fb) => { try { return window[name] ? window[name]() : fb; } catch (e) { return fb; } };
  const dailyHistory = () => call("getDailyHistory", {}) || {};
  const modeStats = () => call("getModeStats", {}) || {};
  const personalBest = () => call("getPB", {}) || {};
  function currentStreak() {
    try { if (window.getDailyStreak) return window.getDailyStreak(dailyHistory(), todayStr()); } catch (e) {}
    return 0;
  }
  // Streak INCLUDING today, for the daily award. Our XP hook fires before
  // saveDailyResult writes today into history, so getDailyStreak(today) would
  // read 0 — instead count consecutive days ending yesterday, then +1 for today.
  function streakWithToday() {
    const h = dailyHistory();
    const d = new Date(todayStr() + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() - 1);
    let streak = 1; // today
    for (;;) {
      const k = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
      if (!h[k]) break;
      streak++;
      d.setUTCDate(d.getUTCDate() - 1);
    }
    return streak;
  }
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const commas = (n) => Math.round(n || 0).toLocaleString("en-US");
  // Roman numerals for the rank emblem (1..12 -> I..XII). No emoji.
  function roman(n) {
    const map = [["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
    let s = "";
    for (const [r, v] of map) { while (n >= v) { s += r; n -= v; } }
    return s || "I";
  }

  // ==== Pure rank math ======================================================
  const CHIP_BY_NAME = {};
  RANKS.forEach((r) => { CHIP_BY_NAME[r.name] = r.chip; });

  function rankIndexForXp(xp) {
    let idx = 0;
    for (let i = 0; i < RANKS.length; i++) if (xp >= RANKS[i].xp) idx = i;
    return idx;
  }
  function rankInfo(xp) {
    xp = Math.max(0, Math.round(xp || 0));
    const idx = rankIndexForXp(xp);
    const cur = RANKS[idx];
    const next = RANKS[idx + 1] || null;
    const span = next ? next.xp - cur.xp : 1;
    const pct = next ? Math.max(0, Math.min(100, Math.round((xp - cur.xp) / span * 100))) : 100;
    return {
      xp, index: idx, total: RANKS.length, name: cur.name, icon: cur.icon, chip: cur.chip,
      next: next ? next.name : null, nextXp: next ? next.xp : null,
      toNext: next ? Math.max(0, next.xp - xp) : 0, pct,
      level: Math.floor(xp / LEVEL_STEP) + 1, isMax: !next,
    };
  }
  function scoreBonus(score) {
    if (score >= 100) return AWARDS.score100;
    if (score >= 97) return AWARDS.score97;
    if (score >= 90) return AWARDS.score90;
    return 0;
  }

  // ==== Local meta (per-day guards, awarded trophies, signed-out XP) =========
  function loadMeta() { try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch (e) { return {}; } }
  function saveMeta(m) { try { localStorage.setItem(LS_KEY, JSON.stringify(m)); } catch (e) {} }

  // ==== Current XP (synchronous source of truth for the UI) =================
  let curXp = 0;
  let lastRankIndex = 0;

  function readXp() {
    if (signedIn()) {
      const c = A().xpCached && A().xpCached();
      if (typeof c === "number") return c;
    }
    return loadMeta().xp || 0;
  }
  function syncXp() {
    curXp = readXp();
    lastRankIndex = rankInfo(curXp).index;
    renderCard();
  }

  // ==== Trophies (via the hook app.js publishes) ============================
  function trophyState() { try { return (window.GoatTrophies && window.GoatTrophies()) || []; } catch (e) { return []; } }
  // Trophy ids newly completed since last check; marks all current ones awarded.
  function drainNewTrophies(meta) {
    const done = trophyState().filter((t) => t.done).map((t) => t.id);
    const awarded = new Set(meta.awardedTrophies || []);
    const fresh = done.filter((id) => !awarded.has(id));
    meta.awardedTrophies = done;
    return fresh;
  }

  // ==== Awarding ============================================================
  // Applies an XP gain: updates memory + storage, mirrors to cloud, refreshes
  // the card, fires a level-up celebration if the rank went up.
  function applyGain(delta) {
    if (!delta) return;
    const before = rankInfo(curXp);
    curXp = Math.max(0, curXp + delta);
    const meta = loadMeta();
    meta.xp = curXp;                 // mirror locally so sign-out keeps progress
    saveMeta(meta);
    if (signedIn()) { try { A().addXp(delta); } catch (e) {} submitBoard(); }
    const after = rankInfo(curXp);
    renderCard();
    if (after.index > before.index) celebrate(after);
    lastRankIndex = after.index;
  }

  // Called from finish() for every completed game (all modes).
  function onGameFinish(opts) {
    opts = opts || {};
    const mode = opts.mode;
    const score = Math.max(0, Math.min(100, Math.round(opts.score || 0)));
    const meta = loadMeta();
    const today = todayStr();
    let gained = 0;

    if (mode === "daily") {
      if (meta.lastDailyAwardDate !== today) {
        gained += AWARDS.dailyPlay;
        gained += Math.min(AWARDS.streakCap, streakWithToday() * AWARDS.streakPer);
        meta.lastDailyAwardDate = today;
      }
    } else if (mode === "classic" || mode === "blind") {
      if (!meta.modeCounts || meta.modeCounts.date !== today) meta.modeCounts = { date: today, n: 0 };
      meta.modeCounts.n += 1;
      gained += (meta.modeCounts.n <= AWARDS.modeFullRuns) ? AWARDS.modePlay : AWARDS.modePlayTaper;
    }
    gained += scoreBonus(score);
    gained += drainNewTrophies(meta).length * AWARDS.trophy;

    if (gained > 0 && hasPass()) gained = Math.round(gained * AWARDS.passMultiplier);
    saveMeta(meta);
    if (gained > 0) applyGain(gained);
  }

  // ==== One-time backfill ===================================================
  function mergeModes(a, b) {
    const out = {};
    ["classic", "blind"].forEach((k) => {
      const x = (a && a[k]) || {}, y = (b && b[k]) || {};
      // Prefer whichever source has more plays (matches app.js modeSource intent).
      out[k] = (x.plays || 0) >= (y.plays || 0) ? x : y;
    });
    return out;
  }
  function longestStreak(dh) {
    const dates = Object.keys(dh).filter((d) => dh[d] && typeof dh[d].score === "number").sort();
    let best = 0, run = 0, prev = null;
    dates.forEach((d) => {
      const t = new Date(d + "T12:00:00Z").getTime();
      if (prev != null && Math.round((t - prev) / 86400000) === 1) run += 1; else run = 1;
      if (run > best) best = run;
      prev = t;
    });
    return best;
  }
  // Deterministic XP from a player's whole history — so nobody starts at zero.
  function computeBackfillXp(dh, modes) {
    let xp = 0;
    const dates = Object.keys(dh).filter((d) => dh[d] && typeof dh[d].score === "number");
    dates.forEach((d) => { xp += AWARDS.dailyPlay + scoreBonus(dh[d].score); });
    xp += Math.min(AWARDS.streakCap, longestStreak(dh) * AWARDS.streakPer);
    ["classic", "blind"].forEach((k) => {
      const m = modes[k] || {};
      xp += (m.plays || 0) * AWARDS.modePlay; // full value per play (taper is going-forward only)
      xp += (m.perfect || 0) * AWARDS.score100;
      xp += Math.max(0, (m.elite || 0) - (m.perfect || 0)) * AWARDS.score97;
    });
    xp += trophyState().filter((t) => t.done).length * AWARDS.trophy;
    if (hasPass()) xp = Math.round(xp * AWARDS.passMultiplier);
    return Math.max(0, Math.round(xp));
  }
  async function backfillSignedIn() {
    let dh = {};
    try { dh = (await A().fetchDailyHistory()) || {}; } catch (e) {}
    if (!Object.keys(dh).length) dh = dailyHistory();
    let cloud = {};
    try { cloud = (await A().getModeStatsCloud()) || {}; } catch (e) {}
    const modes = mergeModes(cloud, modeStats());
    const xp = computeBackfillXp(dh, modes);
    const meta = loadMeta();
    meta.awardedTrophies = trophyState().filter((t) => t.done).map((t) => t.id);
    meta.backfilled = true; meta.xp = xp;
    saveMeta(meta);
    try { await A().setXp(xp); } catch (e) {}
    curXp = xp;
  }
  function backfillSignedOut() {
    const meta = loadMeta();
    if (meta.backfilledLocal) return;
    const dh = dailyHistory();
    const hasHistory = Object.keys(dh).length || (modeStats().classic || modeStats().blind);
    if (hasHistory && !meta.xp) {
      const xp = computeBackfillXp(dh, modeStats());
      meta.xp = xp;
    }
    meta.awardedTrophies = trophyState().filter((t) => t.done).map((t) => t.id);
    meta.backfilledLocal = true;
    saveMeta(meta);
  }

  // ==== All-time XP leaderboard entry write =================================
  let _boardTimer = null;
  function submitBoard() {
    if (!signedIn()) return;
    clearTimeout(_boardTimer);
    _boardTimer = setTimeout(() => {
      try { A().submitXpEntry(curXp, rankInfo(curXp).name); } catch (e) {}
    }, 400);
  }

  // ==== Styles ==============================================================
  function injectStyles() {
    if (document.getElementById("goatXpStyles")) return;
    const css = `
    /* Slim rank bar (home, top of page) */
    .grank-strip{display:flex;align-items:center;gap:11px;width:100%;border:2px solid var(--ink,#151413);background:var(--paper,#fbf7ee);box-shadow:3px 3px 0 var(--ink,#151413);padding:7px 12px;margin:0 0 12px;cursor:pointer;text-align:left;font-family:"Playfair Display",Georgia,serif}
    .grank-emblem{flex:none;width:30px;height:30px;display:grid;place-items:center;border:2px solid var(--ink,#151413);border-radius:50%;background:var(--gold,#e6b843);color:#3a2c05;font:800 .68rem/1 "Space Mono",monospace;box-shadow:1px 1px 0 var(--ink,#151413)}
    .grank-name{flex:none;font:800 .92rem/1 "Playfair Display",Georgia,serif;color:var(--ink,#151413);white-space:nowrap}
    .grank-lvl{font:700 .54rem/1 "Space Mono",monospace;color:var(--muted,#8a8272);text-transform:uppercase;letter-spacing:.05em;margin-left:6px}
    .grank-track{flex:1 1 auto;min-width:36px;height:8px;background:rgba(21,20,19,.12);border:2px solid var(--ink,#151413);border-radius:999px;overflow:hidden}
    [data-theme="dark"] .grank-track{background:rgba(243,236,219,.14)}
    .grank-fill{height:100%;background:var(--court,#c0512f);border-radius:999px;transition:width .5s ease}
    .grank-next{flex:none;font:700 .58rem/1 "Space Mono",monospace;color:var(--muted,#8a8272);text-transform:uppercase;letter-spacing:.04em;white-space:nowrap}
    @media (max-width:560px){.grank-next{display:none}}
    /* Rank chip (leaderboards) */
    .grank-chip{display:inline-block;font:800 .56rem/1 "Space Mono",monospace;letter-spacing:.04em;text-transform:uppercase;padding:3px 7px;border:1.5px solid var(--ink,#151413);border-radius:999px;white-space:nowrap;vertical-align:middle}
    .grank-chip.chip-gray{background:#d9d3c6;color:#3a352c}
    .grank-chip.chip-bronze{background:#cd9b6a;color:#3a2410}
    .grank-chip.chip-blue{background:#7fb0d0;color:#0c2a3d}
    .grank-chip.chip-purple{background:#b79ad6;color:#2b1a44}
    .grank-chip.chip-gold{background:var(--gold,#e6b843);color:#3a2c05}
    .grank-chip.pass{border:2px solid var(--gold,#e6b843);box-shadow:0 0 0 2px rgba(230,184,67,.4)}
    /* Level-up celebration */
    .grank-lvlup{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:rgba(21,20,19,.6);animation:grankFade .25s ease}
    .grank-lvlup-card{position:relative;overflow:hidden;background:var(--paper,#fbf7ee);border:3px solid var(--ink,#151413);box-shadow:8px 8px 0 var(--ink,#151413);padding:30px 34px;text-align:center;max-width:340px;animation:grankPop .4s cubic-bezier(.2,1.3,.4,1)}
    .grank-lvlup-emblem{width:96px;height:96px;margin:0 auto 12px;display:grid;place-items:center;border:3px solid var(--ink,#151413);border-radius:50%;font:800 2.1rem/1 "Space Mono",monospace;color:#3a2c05;background:var(--gold,#e6b843);box-shadow:4px 4px 0 var(--ink,#151413)}
    .grank-lvlup-kicker{font:700 .7rem/1 "Space Mono",monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--court,#c0512f)}
    .grank-lvlup-title{margin:6px 0 2px;font:900 2rem/1 "Playfair Display",Georgia,serif;color:var(--ink,#151413)}
    .grank-lvlup-sub{font:400 .9rem/1.4 "Playfair Display",Georgia,serif;color:var(--muted,#8a8272)}
    .grank-confetti{position:absolute;top:-12px;width:8px;height:14px;opacity:.9;animation:grankFall linear forwards}
    @keyframes grankFade{from{opacity:0}to{opacity:1}}
    @keyframes grankPop{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
    @keyframes grankFall{to{transform:translateY(360px) rotate(540deg);opacity:0}}
    /* XP leaderboard overlay */
    .gxpb{position:fixed;inset:0;z-index:9998;background:var(--bg,#f3ecdb);overflow-y:auto;animation:grankFade .2s ease}
    .gxpb-inner{max-width:560px;margin:0 auto;padding:20px 16px 60px}
    .gxpb-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:6px}
    .gxpb-back{font:700 .8rem/1 "Space Mono",monospace;background:none;border:2px solid var(--ink,#151413);padding:8px 12px;cursor:pointer;color:var(--ink,#151413)}
    .gxpb-h{font:900 1.6rem/1.1 "Playfair Display",Georgia,serif;color:var(--ink,#151413);margin:14px 0 2px}
    .gxpb-note{font:400 .85rem/1.4 "Playfair Display",Georgia,serif;color:var(--muted,#8a8272);margin:0 0 16px}
    .gxpb-list{display:grid;gap:6px}
    .gxpb-row{display:grid;grid-template-columns:34px 1fr auto;align-items:center;gap:10px;border:2px solid var(--ink,#151413);background:var(--paper,#fbf7ee);padding:9px 12px}
    .gxpb-row.me{background:var(--gold,#e6b843)}
    .gxpb-rank{font:900 1rem/1 "Space Mono",monospace;text-align:center;color:var(--ink,#151413)}
    .gxpb-name{font:700 .9rem/1.2 "Playfair Display",Georgia,serif;color:var(--ink,#151413);display:flex;align-items:center;gap:7px;flex-wrap:wrap;min-width:0}
    .gxpb-xp{display:flex;align-items:baseline;gap:3px;font:950 .82rem/1 "Space Mono",monospace;color:var(--ink,#151413);white-space:nowrap}
    .gxpb-xp::after{content:"XP";font-size:.6rem;opacity:.6}
    .gxpb-empty{text-align:center;color:var(--muted,#8a8272);font:400 .95rem/1.5 "Playfair Display",Georgia,serif;padding:30px 10px}`;
    const s = document.createElement("style");
    s.id = "goatXpStyles"; s.textContent = css;
    document.head.appendChild(s);
  }

  // ==== Home rank bar (slim strip, top of the home screen) ==================
  function ensureCard() {
    if (document.getElementById("goatRankCard")) return;
    const home = document.getElementById("modeScreen");
    if (!home || !home.parentNode) return;
    // Sit at the very top of the home content — above the GOAT Pass promo if it's
    // there, otherwise directly above the mode section.
    const anchor = document.getElementById("goatPassPromo") || home;
    const el = document.createElement("button");
    el.id = "goatRankCard"; el.type = "button"; el.className = "grank-strip"; el.hidden = true;
    el.title = "View the all-time XP leaderboard";
    el.addEventListener("click", openBoard);
    anchor.parentNode.insertBefore(el, anchor);
    try {
      new MutationObserver(syncCardVisible).observe(home, { attributes: true, attributeFilter: ["hidden"] });
    } catch (e) {}
    syncCardVisible();
  }
  function syncCardVisible() {
    const el = document.getElementById("goatRankCard");
    const home = document.getElementById("modeScreen");
    if (el && home) el.hidden = !!home.hidden;
  }
  function renderCard() {
    ensureCard();
    const el = document.getElementById("goatRankCard");
    if (!el) return;
    const r = rankInfo(curXp);
    const next = r.isMax ? "Max rank" : `${commas(r.toNext)} XP &rarr; ${esc(r.next)}`;
    el.innerHTML = `
      <span class="grank-emblem" aria-hidden="true">${roman(r.index + 1)}</span>
      <span class="grank-name">${esc(r.name)}<span class="grank-lvl">Rank ${r.index + 1}/${r.total}</span></span>
      <span class="grank-track"><span class="grank-fill" style="width:${r.pct}%"></span></span>
      <span class="grank-next">${next}</span>`;
  }

  // ==== Level-up celebration ================================================
  function celebrate(info) {
    injectStyles();
    const ov = document.createElement("div");
    ov.className = "grank-lvlup";
    const confetti = hasPass()
      ? Array.from({ length: 24 }, (_, i) => {
          const colors = ["#e6b843", "#c0512f", "#157f68", "#7fb0d0", "#b79ad6"];
          const left = (i / 24) * 100;
          const dur = 1.1 + (i % 5) * 0.25;
          const delay = (i % 7) * 0.08;
          return `<span class="grank-confetti" style="left:${left}%;background:${colors[i % colors.length]};animation-duration:${dur}s;animation-delay:${delay}s"></span>`;
        }).join("")
      : "";
    ov.innerHTML = `
      <div class="grank-lvlup-card">
        ${confetti}
        <div class="grank-lvlup-emblem" aria-hidden="true">${roman(info.index + 1)}</div>
        <div class="grank-lvlup-kicker">Rank up!</div>
        <div class="grank-lvlup-title">${esc(info.name)}</div>
        <div class="grank-lvlup-sub">${info.isMax ? "You've reached the summit. You are the GOAT." : "Keep climbing — next up: " + esc(info.next) + "."}</div>
      </div>`;
    const close = () => { ov.remove(); };
    ov.addEventListener("click", close);
    document.body.appendChild(ov);
    setTimeout(close, hasPass() ? 4200 : 3200);
  }

  // ==== All-time XP leaderboard overlay =====================================
  const chipColor = (rankName) => CHIP_BY_NAME[rankName] || "chip-gold";
  async function openBoard() {
    injectStyles();
    const ov = document.createElement("div");
    ov.className = "gxpb";
    ov.innerHTML = `
      <div class="gxpb-inner">
        <div class="gxpb-top"><button class="gxpb-back" type="button">← Back</button></div>
        <h1 class="gxpb-h">All-Time XP Leaderboard</h1>
        <p class="gxpb-note">Total XP earned — the grind, not a single score. Never resets.</p>
        <div class="gxpb-list" id="gxpbList"><p class="gxpb-empty">Loading…</p></div>
      </div>`;
    ov.querySelector(".gxpb-back").addEventListener("click", () => ov.remove());
    ov.addEventListener("click", (e) => { if (e.target === ov) ov.remove(); });
    document.body.appendChild(ov);

    const listEl = ov.querySelector("#gxpbList");
    let rows = [];
    try { rows = (A() && A().getXpLeaderboard) ? await A().getXpLeaderboard(50) : []; } catch (e) { rows = []; }

    const me = signedIn() ? A().currentUser() : null;
    if (!rows.length) {
      listEl.innerHTML = signedIn()
        ? `<p class="gxpb-empty">No XP scores yet — play a game to be the first on the board!</p>`
        : `<p class="gxpb-empty">Sign in and play to climb the all-time XP board.</p>`;
    } else {
      listEl.innerHTML = rows.map((r, i) => {
        const mine = me && r.uid === me.uid;
        const nm = esc(String(r.name || "Anonymous").replace(/\u{1F410}[️‍]?/gu, "").trim() || "Anonymous");
        const chip = (r.goatPass && r.rank)
          ? `<span class="grank-chip pass ${chipColor(r.rank)}">${esc(r.rank)}</span>` : "";
        return `<div class="gxpb-row${mine ? " me" : ""}">
          <span class="gxpb-rank">${i + 1}</span>
          <span class="gxpb-name">${nm}${chip}${mine ? " (you)" : ""}</span>
          <span class="gxpb-xp">${commas(r.xp)}</span>
        </div>`;
      }).join("");
      // Pin the signed-in user if they're not in the top 50.
      if (me && !rows.some((r) => r.uid === me.uid)) {
        const r = rankInfo(curXp);
        const chip = hasPass() ? `<span class="grank-chip pass ${r.chip}">${esc(r.name)}</span>` : "";
        listEl.insertAdjacentHTML("beforeend", `
          <div class="gxpb-row me" style="border-top:2px dashed var(--ink,#151413);margin-top:6px">
            <span class="gxpb-rank">–</span>
            <span class="gxpb-name">You${chip}</span>
            <span class="gxpb-xp">${commas(curXp)}</span>
          </div>`);
      }
    }
  }

  // ==== Leaderboard chip helper (called from app.js daily board rows) ========
  // Pass holders show a gold-bordered rank chip; free players show no chip.
  function chipFor(rankName, goatPass) {
    if (!goatPass) return "";
    const nm = rankName || "GOAT Pass";
    return ` <span class="grank-chip pass ${chipColor(rankName)}">${esc(nm)}</span>`;
  }

  // ==== Init ================================================================
  function init() {
    injectStyles();
    ensureCard();
    // Signed-out backfill + first render.
    if (!signedIn()) { backfillSignedOut(); }
    syncXp();
    // React to auth: load cloud XP (backfill if the account has none yet).
    if (A() && A().onChange) {
      A().onChange(async (user) => {
        if (user) {
          let xp = null;
          try { xp = await A().getXp(); } catch (e) {}
          if (xp === null) { await backfillSignedIn(); }
          syncXp();
          submitBoard();
        } else {
          backfillSignedOut();
          syncXp();
        }
      });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  // ==== Public API ==========================================================
  return {
    RANKS, AWARDS,
    onGameFinish,
    rankName: () => rankInfo(curXp).name,
    rankIndex: () => rankInfo(curXp).index,
    info: () => rankInfo(curXp),
    xp: () => curXp,
    chipFor,
    openBoard,
    refresh: syncXp,
    // exposed for tuning/debugging
    _rankInfo: rankInfo,
  };
})();
