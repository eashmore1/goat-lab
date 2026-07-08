// GOAT Lab — "You built ___" real-player comparison.
// After each build, finds the most similar real NBA player by attribute profile.
// Height is deliberately DOWN-WEIGHTED: nearly every build maxes height (you pick
// a 7-footer for it), so it isn't discriminating — the skill profile drives the
// match, and a tall player only surfaces when the build actually plays like one
// (Wemby/Dirk/Jokic shape: big + skilled), not just because height is 97.
window.GoatComps = (function () {
  "use strict";

  // The match is driven by SHAPE — your relative strengths & weaknesses — so it's
  // specific to what you actually built and varies widely, instead of every strong
  // build collapsing onto the same "most complete" stars. Caliber keeps it in tier;
  // height barely matters (builds always max it).
  const SHAPE_WEIGHT = 1.0;   // profile of strengths/weaknesses (the main driver)
  const LEVEL_WEIGHT = 1.5;   // overall caliber — keeps an 88 build off prime LeBron
  const HEIGHT_WEIGHT = 0.04; // height contributes only a whisper
  const ATTRS = ["height", "shooting", "finishing", "handles", "passing", "defense", "rebounding", "athleticism", "iq"];
  const LABELS = { height: "Height", shooting: "Shooting", finishing: "Finishing", handles: "Handles", passing: "Passing", defense: "Defense", rebounding: "Rebounding", athleticism: "Athleticism", iq: "IQ" };

  // 0–100 ratings reflecting real playing STYLE. height ≈ actual height/length.
  const COMP_PLAYERS = [
    // Point / combo guards
    { name: "Magic Johnson", era: "'80s Lakers", a: { height: 88, shooting: 74, finishing: 84, handles: 88, passing: 99, defense: 82, rebounding: 82, athleticism: 84, iq: 98 } },
    { name: "John Stockton", era: "'90s Jazz", a: { height: 68, shooting: 82, finishing: 78, handles: 90, passing: 99, defense: 84, rebounding: 58, athleticism: 74, iq: 96 } },
    { name: "Steve Nash", era: "'00s Suns", a: { height: 68, shooting: 95, finishing: 80, handles: 94, passing: 98, defense: 60, rebounding: 55, athleticism: 74, iq: 98 } },
    { name: "Chris Paul", era: "modern", a: { height: 66, shooting: 86, finishing: 78, handles: 95, passing: 97, defense: 88, rebounding: 60, athleticism: 78, iq: 97 } },
    { name: "Isiah Thomas", era: "'80s Pistons", a: { height: 65, shooting: 80, finishing: 82, handles: 96, passing: 94, defense: 82, rebounding: 55, athleticism: 86, iq: 92 } },
    { name: "Jason Kidd", era: "'00s Nets", a: { height: 74, shooting: 74, finishing: 76, handles: 88, passing: 98, defense: 88, rebounding: 78, athleticism: 82, iq: 96 } },
    { name: "Pistol Pete Maravich", era: "'70s", a: { height: 74, shooting: 88, finishing: 84, handles: 97, passing: 95, defense: 66, rebounding: 60, athleticism: 84, iq: 90 } },
    // Scoring guards
    { name: "Stephen Curry", era: "Warriors", a: { height: 66, shooting: 99, finishing: 82, handles: 97, passing: 90, defense: 72, rebounding: 58, athleticism: 80, iq: 95 } },
    { name: "Damian Lillard", era: "modern", a: { height: 68, shooting: 96, finishing: 82, handles: 94, passing: 85, defense: 66, rebounding: 56, athleticism: 82, iq: 90 } },
    { name: "Allen Iverson", era: "'00s Sixers", a: { height: 64, shooting: 80, finishing: 88, handles: 98, passing: 84, defense: 78, rebounding: 55, athleticism: 96, iq: 84 } },
    { name: "Kyrie Irving", era: "modern", a: { height: 68, shooting: 92, finishing: 92, handles: 99, passing: 84, defense: 74, rebounding: 55, athleticism: 88, iq: 88 } },
    { name: "James Harden", era: "modern", a: { height: 70, shooting: 92, finishing: 86, handles: 96, passing: 94, defense: 66, rebounding: 66, athleticism: 80, iq: 92 } },
    { name: "Russell Westbrook", era: "modern", a: { height: 68, shooting: 68, finishing: 90, handles: 88, passing: 90, defense: 80, rebounding: 82, athleticism: 98, iq: 78 } },
    { name: "Ja Morant", era: "modern", a: { height: 66, shooting: 76, finishing: 92, handles: 92, passing: 88, defense: 70, rebounding: 60, athleticism: 97, iq: 82 } },
    { name: "Shai Gilgeous-Alexander", era: "modern", a: { height: 74, shooting: 84, finishing: 92, handles: 94, passing: 86, defense: 84, rebounding: 62, athleticism: 86, iq: 90 } },
    // Shooting guards / wings
    { name: "Michael Jordan", era: "'90s Bulls", a: { height: 78, shooting: 88, finishing: 96, handles: 92, passing: 85, defense: 94, rebounding: 76, athleticism: 99, iq: 97 } },
    { name: "Kobe Bryant", era: "'00s Lakers", a: { height: 78, shooting: 90, finishing: 94, handles: 94, passing: 84, defense: 90, rebounding: 72, athleticism: 94, iq: 94 } },
    { name: "Dwyane Wade", era: "'00s Heat", a: { height: 76, shooting: 78, finishing: 92, handles: 90, passing: 84, defense: 86, rebounding: 66, athleticism: 95, iq: 90 } },
    { name: "Tracy McGrady", era: "'00s", a: { height: 80, shooting: 86, finishing: 90, handles: 90, passing: 84, defense: 78, rebounding: 72, athleticism: 94, iq: 86 } },
    { name: "Vince Carter", era: "'00s", a: { height: 78, shooting: 84, finishing: 92, handles: 84, passing: 76, defense: 78, rebounding: 68, athleticism: 98, iq: 82 } },
    { name: "Ray Allen", era: "'00s", a: { height: 77, shooting: 98, finishing: 80, handles: 82, passing: 74, defense: 76, rebounding: 60, athleticism: 84, iq: 88 } },
    { name: "Reggie Miller", era: "'90s Pacers", a: { height: 79, shooting: 97, finishing: 76, handles: 78, passing: 72, defense: 74, rebounding: 58, athleticism: 78, iq: 88 } },
    { name: "Klay Thompson", era: "Warriors", a: { height: 79, shooting: 97, finishing: 78, handles: 74, passing: 70, defense: 84, rebounding: 62, athleticism: 80, iq: 84 } },
    { name: "Anthony Edwards", era: "modern", a: { height: 76, shooting: 84, finishing: 90, handles: 86, passing: 78, defense: 82, rebounding: 62, athleticism: 96, iq: 82 } },
    // Forwards
    { name: "LeBron James", era: "modern", a: { height: 82, shooting: 82, finishing: 96, handles: 90, passing: 96, defense: 88, rebounding: 84, athleticism: 97, iq: 98 } },
    { name: "Larry Bird", era: "'80s Celtics", a: { height: 81, shooting: 94, finishing: 84, handles: 82, passing: 94, defense: 78, rebounding: 84, athleticism: 68, iq: 98 } },
    { name: "Kevin Durant", era: "modern", a: { height: 83, shooting: 96, finishing: 92, handles: 88, passing: 82, defense: 84, rebounding: 74, athleticism: 86, iq: 92 } },
    { name: "Kawhi Leonard", era: "modern", a: { height: 79, shooting: 88, finishing: 88, handles: 82, passing: 76, defense: 97, rebounding: 74, athleticism: 88, iq: 92 } },
    { name: "Scottie Pippen", era: "'90s Bulls", a: { height: 80, shooting: 76, finishing: 84, handles: 84, passing: 88, defense: 95, rebounding: 76, athleticism: 92, iq: 92 } },
    { name: "Julius Erving", era: "'70s-'80s", a: { height: 80, shooting: 76, finishing: 92, handles: 84, passing: 80, defense: 82, rebounding: 76, athleticism: 97, iq: 86 } },
    { name: "Grant Hill", era: "'90s Pistons", a: { height: 80, shooting: 78, finishing: 88, handles: 88, passing: 88, defense: 82, rebounding: 74, athleticism: 92, iq: 90 } },
    { name: "Jimmy Butler", era: "modern", a: { height: 79, shooting: 78, finishing: 86, handles: 82, passing: 82, defense: 92, rebounding: 70, athleticism: 84, iq: 90 } },
    { name: "Jayson Tatum", era: "modern", a: { height: 80, shooting: 88, finishing: 86, handles: 84, passing: 80, defense: 84, rebounding: 76, athleticism: 86, iq: 86 } },
    { name: "Luka Doncic", era: "modern", a: { height: 80, shooting: 88, finishing: 88, handles: 94, passing: 96, defense: 70, rebounding: 82, athleticism: 76, iq: 96 } },
    { name: "Paul George", era: "modern", a: { height: 80, shooting: 88, finishing: 84, handles: 82, passing: 78, defense: 88, rebounding: 70, athleticism: 88, iq: 86 } },
    // Bigs
    { name: "Tim Duncan", era: "'00s Spurs", a: { height: 90, shooting: 74, finishing: 90, handles: 66, passing: 82, defense: 97, rebounding: 94, athleticism: 80, iq: 98 } },
    { name: "Kevin Garnett", era: "'00s", a: { height: 88, shooting: 80, finishing: 86, handles: 72, passing: 84, defense: 96, rebounding: 92, athleticism: 88, iq: 94 } },
    { name: "Karl Malone", era: "'90s Jazz", a: { height: 86, shooting: 78, finishing: 92, handles: 70, passing: 78, defense: 84, rebounding: 90, athleticism: 90, iq: 88 } },
    { name: "Charles Barkley", era: "'90s", a: { height: 82, shooting: 74, finishing: 92, handles: 78, passing: 82, defense: 82, rebounding: 94, athleticism: 90, iq: 88 } },
    { name: "Dirk Nowitzki", era: "'00s Mavs", a: { height: 90, shooting: 96, finishing: 84, handles: 74, passing: 76, defense: 72, rebounding: 84, athleticism: 72, iq: 92 } },
    { name: "Giannis Antetokounmpo", era: "modern", a: { height: 88, shooting: 68, finishing: 97, handles: 82, passing: 84, defense: 94, rebounding: 92, athleticism: 97, iq: 86 } },
    { name: "Anthony Davis", era: "modern", a: { height: 90, shooting: 78, finishing: 92, handles: 72, passing: 74, defense: 96, rebounding: 90, athleticism: 90, iq: 86 } },
    { name: "Draymond Green", era: "Warriors", a: { height: 84, shooting: 68, finishing: 74, handles: 78, passing: 92, defense: 96, rebounding: 84, athleticism: 80, iq: 96 } },
    { name: "Dennis Rodman", era: "'90s Bulls", a: { height: 84, shooting: 40, finishing: 66, handles: 58, passing: 66, defense: 94, rebounding: 99, athleticism: 90, iq: 84 } },
    { name: "Pau Gasol", era: "'00s", a: { height: 92, shooting: 78, finishing: 86, handles: 66, passing: 84, defense: 82, rebounding: 88, athleticism: 72, iq: 90 } },
    // Centers
    { name: "Kareem Abdul-Jabbar", era: "'70s-'80s", a: { height: 94, shooting: 82, finishing: 96, handles: 66, passing: 80, defense: 92, rebounding: 94, athleticism: 88, iq: 96 } },
    { name: "Wilt Chamberlain", era: "'60s", a: { height: 96, shooting: 62, finishing: 96, handles: 60, passing: 74, defense: 92, rebounding: 99, athleticism: 98, iq: 84 } },
    { name: "Bill Russell", era: "'60s Celtics", a: { height: 94, shooting: 54, finishing: 82, handles: 60, passing: 78, defense: 99, rebounding: 99, athleticism: 94, iq: 96 } },
    { name: "Hakeem Olajuwon", era: "'90s Rockets", a: { height: 92, shooting: 70, finishing: 92, handles: 76, passing: 76, defense: 98, rebounding: 92, athleticism: 92, iq: 94 } },
    { name: "Shaquille O'Neal", era: "'00s Lakers", a: { height: 96, shooting: 42, finishing: 99, handles: 58, passing: 70, defense: 88, rebounding: 92, athleticism: 92, iq: 82 } },
    { name: "David Robinson", era: "'90s Spurs", a: { height: 94, shooting: 72, finishing: 92, handles: 68, passing: 74, defense: 96, rebounding: 92, athleticism: 94, iq: 88 } },
    { name: "Patrick Ewing", era: "'90s Knicks", a: { height: 92, shooting: 74, finishing: 88, handles: 64, passing: 68, defense: 92, rebounding: 88, athleticism: 84, iq: 84 } },
    { name: "Nikola Jokic", era: "modern", a: { height: 92, shooting: 84, finishing: 90, handles: 82, passing: 99, defense: 78, rebounding: 92, athleticism: 66, iq: 99 } },
    { name: "Joel Embiid", era: "modern", a: { height: 94, shooting: 82, finishing: 94, handles: 76, passing: 74, defense: 92, rebounding: 90, athleticism: 86, iq: 86 } },
    { name: "Victor Wembanyama", era: "modern", a: { height: 99, shooting: 84, finishing: 90, handles: 78, passing: 80, defense: 98, rebounding: 92, athleticism: 88, iq: 88 } },
    { name: "Rudy Gobert", era: "modern", a: { height: 94, shooting: 40, finishing: 86, handles: 52, passing: 58, defense: 98, rebounding: 94, athleticism: 84, iq: 78 } },
    { name: "Dikembe Mutombo", era: "'90s", a: { height: 94, shooting: 44, finishing: 78, handles: 52, passing: 56, defense: 97, rebounding: 94, athleticism: 80, iq: 80 } },
    { name: "Ben Wallace", era: "'00s Pistons", a: { height: 86, shooting: 32, finishing: 70, handles: 54, passing: 60, defense: 97, rebounding: 96, athleticism: 88, iq: 82 } },
    // More legends (fill era gaps)
    { name: "Jerry West", era: "'60s-'70s", a: { height: 76, shooting: 90, finishing: 86, handles: 86, passing: 86, defense: 86, rebounding: 62, athleticism: 86, iq: 92 } },
    { name: "Oscar Robertson", era: "'60s-'70s", a: { height: 78, shooting: 84, finishing: 86, handles: 88, passing: 94, defense: 82, rebounding: 80, athleticism: 86, iq: 94 } },
    { name: "Elgin Baylor", era: "'60s Lakers", a: { height: 78, shooting: 80, finishing: 90, handles: 82, passing: 80, defense: 72, rebounding: 84, athleticism: 92, iq: 84 } },
    { name: "George Gervin", era: "'70s-'80s", a: { height: 80, shooting: 90, finishing: 92, handles: 84, passing: 72, defense: 66, rebounding: 64, athleticism: 86, iq: 84 } },
    { name: "Moses Malone", era: "'80s", a: { height: 90, shooting: 56, finishing: 88, handles: 56, passing: 58, defense: 86, rebounding: 97, athleticism: 86, iq: 82 } },
    { name: "Dominique Wilkins", era: "'80s-'90s", a: { height: 80, shooting: 80, finishing: 94, handles: 82, passing: 70, defense: 70, rebounding: 72, athleticism: 97, iq: 78 } },
    { name: "Alonzo Mourning", era: "'90s", a: { height: 90, shooting: 56, finishing: 88, handles: 56, passing: 56, defense: 94, rebounding: 86, athleticism: 86, iq: 80 } },
    { name: "Chris Webber", era: "'00s Kings", a: { height: 86, shooting: 78, finishing: 88, handles: 78, passing: 86, defense: 82, rebounding: 90, athleticism: 86, iq: 86 } },
    { name: "Yao Ming", era: "'00s Rockets", a: { height: 98, shooting: 74, finishing: 88, handles: 56, passing: 72, defense: 86, rebounding: 84, athleticism: 64, iq: 84 } },
    // Modern / very-good tier (so strong-not-GOAT builds have real comps)
    { name: "Carmelo Anthony", era: "'00s-'10s", a: { height: 80, shooting: 88, finishing: 88, handles: 82, passing: 72, defense: 68, rebounding: 72, athleticism: 82, iq: 82 } },
    { name: "Devin Booker", era: "modern", a: { height: 78, shooting: 90, finishing: 84, handles: 86, passing: 84, defense: 72, rebounding: 60, athleticism: 80, iq: 86 } },
    { name: "Donovan Mitchell", era: "modern", a: { height: 74, shooting: 86, finishing: 88, handles: 86, passing: 78, defense: 74, rebounding: 58, athleticism: 92, iq: 82 } },
    { name: "Blake Griffin", era: "'10s", a: { height: 82, shooting: 74, finishing: 94, handles: 76, passing: 82, defense: 76, rebounding: 86, athleticism: 96, iq: 82 } },
    { name: "Chris Bosh", era: "'10s Heat", a: { height: 84, shooting: 82, finishing: 84, handles: 66, passing: 72, defense: 80, rebounding: 84, athleticism: 82, iq: 82 } },
    { name: "Al Horford", era: "modern", a: { height: 86, shooting: 80, finishing: 80, handles: 62, passing: 80, defense: 88, rebounding: 82, athleticism: 76, iq: 90 } },
    { name: "Paul Pierce", era: "'00s Celtics", a: { height: 79, shooting: 88, finishing: 84, handles: 82, passing: 80, defense: 76, rebounding: 70, athleticism: 76, iq: 88 } },
    { name: "DeMar DeRozan", era: "modern", a: { height: 78, shooting: 78, finishing: 88, handles: 84, passing: 80, defense: 70, rebounding: 60, athleticism: 82, iq: 84 } },
    { name: "Tony Parker", era: "'00s Spurs", a: { height: 74, shooting: 78, finishing: 88, handles: 90, passing: 86, defense: 72, rebounding: 50, athleticism: 90, iq: 88 } },
    { name: "Manu Ginobili", era: "'00s Spurs", a: { height: 78, shooting: 86, finishing: 84, handles: 88, passing: 88, defense: 82, rebounding: 58, athleticism: 86, iq: 92 } },
    { name: "Shawn Marion", era: "'00s Suns", a: { height: 80, shooting: 72, finishing: 86, handles: 68, passing: 72, defense: 90, rebounding: 86, athleticism: 94, iq: 80 } },
    { name: "Kyle Lowry", era: "'10s Raptors", a: { height: 66, shooting: 84, finishing: 76, handles: 84, passing: 88, defense: 86, rebounding: 64, athleticism: 74, iq: 90 } },
    { name: "Andre Iguodala", era: "'10s Warriors", a: { height: 78, shooting: 72, finishing: 82, handles: 80, passing: 84, defense: 90, rebounding: 66, athleticism: 90, iq: 88 } },
    { name: "Rasheed Wallace", era: "'00s Pistons", a: { height: 88, shooting: 82, finishing: 82, handles: 66, passing: 72, defense: 90, rebounding: 82, athleticism: 82, iq: 82 } },
  ];

  // Most similar player to a build ({height, shooting, ...} scores). Height is
  // down-weighted so the skill profile decides the match.
  // Profile of a build/player: caliber (mean of the 8 SKILL attrs, height excluded)
  // and the per-attribute deviation from that mean (its shape of strengths/weaks).
  const SKILL = ATTRS.filter((k) => k !== "height");
  function profile(obj) {
    let sum = 0;
    for (const k of SKILL) sum += obj[k] || 0;
    const mean = sum / SKILL.length;
    const dev = {};
    for (const k of SKILL) dev[k] = (obj[k] || 0) - mean;
    return { mean, dev };
  }
  COMP_PLAYERS.forEach((p) => { p._p = profile(p.a); });

  function findMatch(build) {
    if (!build) return null;
    const b = profile(build);
    let best = null, bestD = Infinity;
    for (const p of COMP_PLAYERS) {
      // Shape: how closely your relative strengths/weaknesses line up with theirs.
      let shape = 0;
      for (const k of SKILL) { const d = b.dev[k] - p._p.dev[k]; shape += d * d; }
      const lvl = b.mean - p._p.mean;
      const hgt = (build.height || 0) - (p.a.height || 0);
      const d = SHAPE_WEIGHT * shape + LEVEL_WEIGHT * lvl * lvl + HEIGHT_WEIGHT * hgt * hgt;
      if (d < bestD) { bestD = d; best = p; }
    }
    if (!best) return null;
    const similarity = Math.max(55, Math.min(99, Math.round(100 - Math.sqrt(bestD / (SKILL.length + LEVEL_WEIGHT)))));
    // "Why this player": the build's top RELATIVE strengths (its signature) that
    // the matched player also leans on — so the reason is specific to the shape.
    const byDev = SKILL.slice().sort((x, y) => b.dev[y] - b.dev[x]);
    const shared = byDev.filter((k) => b.dev[k] > 0 && best._p.dev[k] > -3).slice(0, 3);
    const strengths = (shared.length ? shared : byDev.slice(0, 3)).map((k) => LABELS[k]);
    return { name: best.name, era: best.era, similarity, strengths };
  }

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Render the comparison into #playerComp for a build attribute object.
  function render(build) {
    const box = document.getElementById("playerComp");
    if (!box) return null;
    const m = findMatch(build);
    if (!m) { box.hidden = true; box.innerHTML = ""; return null; }
    const strengths = m.strengths.length
      ? `<span class="pc-why">Both elite at ${m.strengths.map(esc).join(" · ")}</span>`
      : "";
    box.innerHTML = `
      <div class="pc-kicker">Your build plays like</div>
      <div class="pc-name">${esc(m.name)}</div>
      <div class="pc-meta"><span class="pc-era">${esc(m.era)}</span><span class="pc-sim">${m.similarity}% match</span></div>
      ${strengths}`;
    box.hidden = false;
    return m;
  }

  return { findMatch, render, players: COMP_PLAYERS };
})();
