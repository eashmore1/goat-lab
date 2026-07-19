"""Regenerate og-image.png / og-image.webp (the link-preview cover).

Run from the repo root:  python3 og-assets/make-og.py
Needs Pillow. Palette matches styles.css (--paper/--ink/--court).
Bump the ?v= on the og:image + twitter:image meta tags in index.html
afterwards, or the platforms keep serving the cached old card.
"""
from PIL import Image, ImageDraw, ImageFont
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = ROOT
W, H, SS = 1200, 630, 2
PAPER, INK, COURT = (245, 236, 216), (21, 20, 19), (201, 103, 61)
MUTED = (21, 20, 19, 150)
BOLD = os.path.join(ROOT, "og-assets/SpaceMono-Bold.ttf")
REG = os.path.join(ROOT, "og-assets/SpaceMono-Regular.ttf")
F = lambda p, s: ImageFont.truetype(p, s * SS)

img = Image.new("RGB", (W * SS, H * SS), PAPER)
d = ImageDraw.Draw(img, "RGBA")

# graph-paper grid, edge to edge
for x in range(0, W * SS, 40 * SS):
    d.line([(x, 0), (x, H * SS)], fill=(21, 20, 19, 13), width=SS)
for y in range(0, H * SS, 40 * SS):
    d.line([(0, y), (W * SS, y)], fill=(21, 20, 19, 13), width=SS)

lg_im = Image.open(os.path.join(ROOT, "GOATLABLOGO.png")).convert("RGBA")
lw, lh = lg_im.size
tw = 400 * SS
lg = lg_im.resize((tw, round(lh * tw / lw)), Image.LANCZOS)
img.paste(lg, (74 * SS, (H * SS - lg.size[1]) // 2), lg)

tx, y, line_h = 530 * SS, 145 * SS, 74 * SS
h1 = F(BOLD, 58)
for t, c in [("Can you build", INK), ("the perfect", INK), ("basketball player?", COURT)]:
    d.text((tx, y), t, font=h1, fill=c)
    y += line_h
y += 14 * SS
d.rectangle([tx, y, tx + 372 * SS, y + 7 * SS], fill=COURT)
y += 46 * SS
d.text((tx, y), "Free daily basketball game.", font=F(BOLD, 30), fill=INK)
y += 52 * SS
d.text((tx, y), "DAILY  ·  CLASSIC  ·  BLIND", font=F(REG, 24), fill=MUTED)

uf = F(BOLD, 24)
b = d.textbbox((0, 0), "playgoatlab.com", font=uf)
d.text((W * SS - 56 * SS - (b[2] - b[0]), H * SS - 68 * SS), "playgoatlab.com", font=uf, fill=COURT)

out = img.resize((W, H), Image.LANCZOS)
out.save(f"{OUT}/og-image.png", optimize=True)
out.save(f"{OUT}/og-image.webp", quality=92, method=6)
print("wrote og-image.png + og-image.webp")
