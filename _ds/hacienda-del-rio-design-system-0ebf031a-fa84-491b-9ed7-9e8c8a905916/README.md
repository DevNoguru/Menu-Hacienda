# Hacienda del Rio — Design System

A warm, hand-crafted hospitality brand grounded in terracotta, cream, and
the language of an old riverside estate. This system holds the typography,
colors, illustration vocabulary, logo lockups, and component recipes used
across **Hacienda del Rio**'s identity.

> *Hacienda del Rio* (Spanish: *"estate by the river"*) reads as a
> destination brand — equally at home on a restaurant menu, a boutique
> resort booking page, a tasting-room signage program, or a small-batch
> consumer product. The visual language is **warm earth, hand-drawn,
> generous whitespace, no pretense.**

## Sources

| Source | Path / Link |
| --- | --- |
| Figma — Style Guide (single page, 7 frames) | mounted .fig file, page `/Page-1`, root frame node `0:10` ("Hacienda del Rio - Style Guide") |
| Brand wordmark (user upload) | `uploads/HDR 1.svg` → `assets/logos/hdr-wordmark.svg` |
| Display + body font (user upload) | `uploads/Metallophile Sp8 *.ttf` → `fonts/` |

The Figma file is a **single-page style guide**, not a full product
codebase. It contains: the colored brand palette, the web-extended
palette, two type specimens (Metallophile Sp8 + Sniglet), four large
logo lockups on colored grounds, four hand-drawn brand illustrations
(house · figure · market stall · iced drink), and one lifestyle photo.
No production UI, no app screens, no website screens were provided —
the UI kit in this repo is therefore an **applied recreation**: it
takes the foundations from the style guide and renders them through
plausible hospitality interfaces (a marketing landing page and a
reservation / menu surface). Treat the UI kit as *brand application*,
not as a reverse-engineered product.

---

## Index

- `colors_and_type.css` — CSS variables + semantic classes (drop-in)
- `fonts/` — Metallophile Sp8 (Light · Light Italic · Medium · Medium Italic)
- `assets/logos/` — all logo lockups (cream, black, white-on-terracotta, square, horizontal)
- `assets/illustrations/` — hand-drawn brand spot illustrations
- `assets/photos/` — lifestyle photography
- `preview/` — design-system cards rendered for the Design System tab
- `ui_kits/marketing-site/` — applied recreation: landing + booking page
- `ui_kits/catering-menu/` — pixel-faithful recreation of the printed catering menu (from Figma)
- `slides/` — *(none — no slide template was provided in source)*
- `SKILL.md` — Agent Skill manifest (for Claude Code or similar)

---

## Content fundamentals

The brand's voice on the page is **short, hospitable, and unhurried**.
The Figma style guide itself doesn't ship marketing copy, so this
section codifies the implied voice from the visual treatment.

**Tone.** Warm, generous, a little romantic. Think the welcome card
in a guest room or the chalkboard outside a restaurant — not a
hospitality SaaS product page. No exclamation points unless someone
is genuinely being welcomed.

**Person.** "You" (the guest) and "we" (the hacienda) — never "users,"
never "the customer." Recipes / menu items / spaces are written in
the third person ("the courtyard," "the river kitchen"), so the
voice can step back when the place itself should do the talking.

**Casing.**
- **Title casing** for headlines that feel like signage: *"Welcome to the River Kitchen"*
- **Sentence case** for body and UI: *"Reserve a table for four"*
- **ALL CAPS** is reserved for the Inter eyebrow labels in the
  style guide (BRAND COLORS · WEB COLORS) and small UI labels.
  Never use all caps for body copy.
- The wordmark itself mixes a flowing "Hacienda" script with the
  sans block "DEL RIO" — that pairing is the visual master of the
  whole brand and should be echoed in long-form titles
  (script intro phrase + block name).

**Length.** Marketing copy lives in short, punchy lines (4–10 words).
Menus and descriptions can breathe to 1–2 sentences. Never paragraphs
on a hero. Empty space is part of the brand.

**Examples (in-voice).**
- *Hero:* "Hacienda del Rio — table for two, by the water."
- *Subhead:* "A small kitchen, a slow afternoon, and the river just there."
- *CTA:* "Reserve a table" · "Plan a stay" · "Find the door"
- *Eyebrow:* "OPEN THURSDAY – SUNDAY"
- *Menu item:* "Pollo de la casa — citrus, smoke, a little char."
- *Out-of-voice (do not write like this):* "Book your dining experience now!", "Click here", "Awesome!"

**Emoji + symbols.** No emoji. The brand has its own
hand-drawn illustration vocabulary (house, figure, market stall,
iced drink) that fills the role emoji normally would. Unicode
characters like `·` (middle dot) and `—` (em dash) are used as
soft separators in menus and metadata.

---

## Visual foundations

### Palette
Three layers, all warm-cast:

1. **Brand colors** (the four hero swatches in the style guide
   block): peach `#FBBBA0`, gold `#D69F56`, olive `#3F4F3C`,
   indigo `#205374`. These are the colors that own a full panel
   when the logo sits on top — they're saturated enough to read
   as *a place*, not *a UI*.
2. **Web colors** — the extended palette adds two near-whites
   (`#FAFAF9` snow, `#FFF2E2` cream), a sand `#F2E2CE`, two
   warmer reds (`#C9694F` terracotta, `#B25D47` brick), and a
   deep cocoa `#4D2D25` for body type.
3. **Ink** — `#1D2021` near-black is rare; secondary ink is
   `#757575`. Body type prefers the cocoa or ink-soft, not pure
   black.

Sand `#F2E2CE` is the most-used color in the source file (50
appearances) — it's the **default surface** when the page isn't
on terracotta. Pure white is rare; cream and bone surfaces are
the norm.

### Type
**Three families, each with a clear job:**

- **Metallophile Sp8** is the **single** typeface — display, headings,
  body, prices, navigation, captions, sub-labels. Light 300 / Light
  Italic / Medium 500. The brand earlier looked like it might use
  **Sniglet** as a second display voice, but the production menu
  confirms it does not — Metallophile alone carries the whole system.
- The signature is **heavy tracking on uppercase** — section headers
  hit +0.25em, eyebrows +0.18–0.20em, display caps +0.13em. Use the
  `--tr-cap-*` tokens.
- The hand-script "Hacienda" is hand-lettered as **SVG only** — there
  is no live font for it. Use the SVG wordmark whenever the brand
  needs that exact stroke.

Letter-spacing: tight (`-0.02em`) on mixed-case display, normal on
body, **+0.13 to +0.25em** on uppercase Metallophile (heaviest on the
olive section-header bars). See `colors_and_type.css` `--tr-cap-*`
tokens.

### Backgrounds & motifs
- **Full-color panels.** The brand happily fills an entire
  hero/section/card with one of the four brand colors and lets
  the logo or a single illustration sit on it. No gradients.
- **Decorative side trim.** The terracotta hero in the style
  guide has mirrored zig-zag/serrated bands hugging both edges
  (echoing a Mexican blanket weave) — use sparingly on hero
  sections only.
- **Hand-drawn spot illustrations.** Single-color, loose-line,
  irregular weight. Four exist in source (house · figure ·
  market stall · iced drink) and they sit on saturated
  rectangles. They are the brand's "iconography" at large
  scale; never replace them with stock vector icons.
- **No** gradients, no glass, no neon, no glow, no noise/grain
  overlay. **Yes** generous flat color and large negative space.
- **Photography** (the one lifestyle photo in source) is warm,
  daylit, natural color — no heavy filters, no cool-blue tint.
  Imagery should feel like a friend's iPhone in afternoon light.

### Layout
- Generous edge margins; the style guide pads to ~180px at
  1440 width.
- Slabs of color end and begin abruptly — sections own their
  background, no fades.
- Mostly soft-square cards (small radius, `--r-md` 10px). Pills
  are reserved for small UI controls (tag chips, toggles).
- Strong vertical rhythm — large negative space between sections
  (96–128px) is normal.

### Borders, shadows, transparency
- **Borders** are hairline (`1px solid var(--line)`), used for
  menu rows and form fields. No heavy borders.
- **Shadows** are gentle, warm-cast (cocoa, not black). Three
  levels (`--shadow-1/2/3`); shadow-3 is the heaviest and is
  used on hover only.
- **No glassmorphism / backdrop blur.** The brand is opaque.
  Transparency only appears inside the `--fg-3` token as
  desaturated body text.

### Motion & state
- **Easing:** primary curve is `cubic-bezier(0.22, 0.61, 0.36, 1)`
  — soft and slow-out. No bouncy springs.
- **Hover:** colored buttons darken ~6% (color-mix toward cocoa)
  and lift one shadow level. Tertiary links underline on hover.
- **Press:** scale `0.98` + inset shadow `--shadow-press`.
  No color flash.
- **Page transitions:** simple fade + 8px rise, 220ms. Nothing
  flashy. The brand is *slow afternoon*, not *snappy*.

### Corner radii
- `--r-xs` 4px — small chips
- `--r-sm` 6px — inputs
- `--r-md` 10px — cards (default)
- `--r-lg` 16px — large hero cards / modals
- `--r-pill` 999px — only round controls (avatar, dot, micro-tag)

---

## Iconography

The brand has **its own hand-drawn illustration vocabulary**, not a
production icon font. Four spot illustrations exist in source:
- `cold-drink.svg` — iced drink with citrus + straw (gold panel)
- *house*, *figure-in-sombrero*, *market-stall* — visible in source
  but only the house was extractable as clean SVG; the others are
  flagged below.

These are **single-color, loose-line, irregular-weight** drawings
that read as warm and human at any size from 48px to 400px. They
fill the role emoji would in most brands.

For **UI iconography** (chevrons, X, search, hamburger, calendar
ticks, +/−) the style guide ships nothing. The system substitutes
**Lucide** (`https://unpkg.com/lucide@latest`) at 1.5px stroke
weight — flagged as a substitution; pick a hand-drawn icon set if
you want closer brand fit.

**Emoji:** never. **Unicode glyphs:** sparingly — middle dot `·`
and em dash `—` as menu separators only.

**See:** [`assets/illustrations/`](./assets/illustrations/) and
[`assets/logos/`](./assets/logos/) for the live files.

---

## Caveats / substitutions to flag

1. **Sniglet font file missing.** The brief listed
   `uploads/Sniglet-Regular.otf` but the file didn't arrive.
   This turned out to be moot — the production menu only uses
   Metallophile Sp8, so Sniglet has been dropped from the system.
   The `@import` for Sniglet in `colors_and_type.css` is now a
   legacy fallback only.
2. **Two brand illustrations not extracted.** The figure-in-sombrero
   and market-stall illustrations render in the style guide but
   only the *house* and *iced-drink* were available as clean
   SVGs from the source. Re-upload these from the brand library
   when possible.
3. **UI iconography is Lucide (substitution).** No native icon
   set exists in the brand. Lucide at 1.5px stroke is the closest
   loose, human, single-line feel; ideal would be a custom set
   matching the spot illustrations.
4. **No product code provided.** The UI kit is an *applied
   recreation* using brand foundations, not a reverse-engineered
   product. Treat as a starting point, not pixel-perfect.
