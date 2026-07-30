# RYETEK ENGINEERING — INTERACTIVE LANDING PAGE BRIEF
### *A complete design and technical specification for a Sofi Health-style scroll experience*
> **For any AI reading this:** This is a self-contained build brief. You do NOT need to ask the user for context. Build exactly what is described below. All decisions have already been made.

---

## 01 · WHO IS THE CLIENT

**Company:** Ryetek Engineering Pty Ltd  
**Location:** Victoria, Australia (national operations)  
**Industry:** Heavy Industrial Plant Engineering  
**Products:**
- Concrete & Asphalt batching plants (continuous drum mix, batch, and cold-mix)
- Bitumen storage tanks with thermal oil heating
- Counter-flow rotary drum dryers
- **WearGuard™** — proprietary drum flighting & wear plate retrofit system *(signature product)*
- Material handling systems: conveyors, bucket elevators, silos
- SCADA & PLC automation panels

**Brand Voice:** Authoritative, precise, industrial-grade. Never casual. Think Caterpillar or Zeppelin Systems, not a startup. Every word earns its place.

---

## 02 · DESIGN PHILOSOPHY

> **"Clean authority. No decoration without purpose."**

| Principle | Rule |
|---|---|
| **Minimal** | White space is structural. Every element is intentional. |
| **Industrial-precise** | CAD-blueprint textures, monospace labels, sharp 0px corners |
| **Motion with meaning** | Animate only when revealing information or guiding attention |
| **Premium not flashy** | One signature animation per page. Not five. |

**Reference sites:** Sofi Health (scroll pinning + product callouts), Zeppelin Systems (authority + technical precision), Apple product pages (product reveal via scroll)

---

## 03 · DESIGN SYSTEM

### Color Palette

| Name | Hex | Use |
|---|---|---|
| **Deep Navy** | `#002B49` | Headlines, buttons, structural elements |
| **Electric Cobalt** | `#2563EB` | Accents, hover states, scan-lines, active badges |
| **Pure White** | `#FFFFFF` | Primary backgrounds, card surfaces |
| **Light Slate** | `#F8FAFC` | Section backgrounds, subtle surfaces |
| **Border** | `#E2E8F0` | Card borders, dividers |
| **Body Text** | `#0F172A` | Readable dark text |
| **Muted Text** | `#64748B` | Descriptions, secondary labels |

> **BANNED:** Orange, purple, red accents. Never pure `#000000` black.

### Typography

| Role | Font | Size | Weight |
|---|---|---|---|
| **Display / Hero** | Archivo Narrow | 80–120px clamped | 800 |
| **Section Headings** | Archivo Narrow | 40–56px | 700 |
| **Body Text** | Inter | 16–18px | 400 |
| **Technical Labels** | JetBrains Mono | 11–13px | 500–700 |

> All headings: `uppercase`, `letter-spacing: -0.01em`

### Shape Language
- **0px border radius** on buttons, badges, form fields — engineered, not soft
- Round only for status pulse indicators (6px circles)
- No drop shadows — use `1px solid border` + tonal layering instead

---

## 04 · THE SOFI-STYLE SCROLL EXPERIENCE

### How It Works (Technical Explanation for the AI Building This)

1. **Wrapper div** is `height: 600vh` (very tall — creates scroll space)
2. **Inner sticky panel** is `position: sticky; top: 0; height: 100vh;` — stays on screen
3. **GSAP ScrollTrigger** maps scroll progress `0→1` to drive all animations
4. **Lenis** provides smooth scroll inertia (buttery feel)
5. **Product images** are high-res PNGs on transparent/white backgrounds
6. **SVG callout lines** animate outward from the product using `strokeDashoffset`

**Key libraries:**
```bash
npm install gsap @studio-freight/lenis
```

---

## 05 · SCROLL JOURNEY — SECTION BY SECTION

> Build each phase as scroll-scrubbed animations within one sticky container.

### Phase 0: 0–8% scroll · PAGE LOAD / HERO
**What the user sees:**
- Left column: small HUD badge `● AUSTRALIAN HEAVY PLANT ENGINEERING`
- Massive headline animates in word-by-word: `BUILT FOR AUSTRALIA'S HARSHEST CONDITIONS.`
- Sub-line fades in: *"Aggregate batching plants, bitumen systems and WearGuard™ drum technology."*
- Right side: rotary drum image fades/scales in gently
- Background: crisp white with subtle CAD grid lines (32px repeating `#E2E8F0` grid)

**Animation:** Framer Motion `opacity 0→1` + `y: 30→0` stagger on text

---

### Phase 1: 8–30% scroll · PRODUCT REVEAL
**What the user sees:**
- Hero text slides LEFT and fades out as scroll progresses
- Rotary drum image moves to CENTER of viewport
- Drum **scales up** to fill 70% of the screen
- Background shifts from white → very light slate `#F8FAFC`

**GSAP scrub animation:**
```
heroText: opacity 1→0, x: 0→-120px
drumImage: x: 200→0, scale: 0.6→1.0, opacity: 0.6→1
```

---

### Phase 2: 30–55% scroll · PRODUCT CALLOUTS
**What the user sees:**
- Drum stays centered (pinned)
- 4 SVG callout lines animate out from specific parts of the drum image
- Each line has a label that fades in at the end:
  1. **Drum Shell** — *"450+ Brinell hardness plate lining"* (top-right)
  2. **WearGuard™ Flighting** — *"CFD-optimized lifting curtain"* (bottom-right)
  3. **Burner Inlet** — *"Multi-fuel: Gas / Diesel / Bio"* (left)
  4. **Aggregate Outlet** — *"Up to 400 TPH throughput"* (bottom-left)
- Each callout appears sequentially (line draws first, then label fades in)

**GSAP scrub animation (per callout, staggered):**
```
SVG path strokeDashoffset: 100%→0% (line draws)
Label opacity: 0→1 (after line completes)
```

---

### Phase 3: 55–72% scroll · WEARGUARD™ SPOTLIGHT
**What the user sees:**
- Drum fades out
- Interior flighting/wear plate image fades in, centered
- Left side: two large stat cards slide in from left:
  - `65%` — Drum shell wear reduction
  - `30%` — Fuel saving per tonne
- Right side: WearGuard™ cross-section image
- Badge: `PROPRIETARY RETROFIT · < 36HR INSTALL`

**Animation:** Image cross-fade + stat cards `x: -80→0, opacity: 0→1`

---

### Phase 4: 72–88% scroll · SCADA / AUTOMATION
**What the user sees:**
- SCADA HMI panel image fades in, slightly rotated (`rotateY: 15deg→0deg`)
- Right text column:
  - Heading: `FULL PLANT INTELLIGENCE`
  - Data metrics count up: `450+` plants, `15+` years
  - Sub-text about PLC / SCADA telemetry
- Background: shifts to Deep Navy `#002B49`
- Cobalt scan-line sweeps horizontally

**Animation:** 3D perspective flip on image + counter animation on numbers

---

### Phase 5: 88–100% scroll · CTA UNLOCK
**What the user sees:**
- Navy background
- HUGE type: `GET A TECHNICAL PROPOSAL.`
- Sub-line: "Speak with a Ryetek engineer — no sales pitch, just specifications."
- Two CTA buttons:
  1. `REQUEST QUOTE` (white bg, navy text)
  2. `EXPLORE CAPABILITIES →` (outline, white)
- Cobalt accent line sweeps across full width
- Trust badges: `AS 4100 ✓`, `AS 1210 ✓`, `15+ Years ✓`

---

## 06 · SECTIONS BELOW THE SCROLL EXPERIENCE

*After the scroll journey ends, the page continues with standard scrolling sections:*

### Section A — TRUST BAR
- White background, single row
- 4 metrics with left cobalt border:
  - `15+` Years Engineering Expertise
  - `450+` Plant Systems Commissioned
  - `65%` Drum Wear Reduction
  - `AS 4100` Structural Code

### Section B — CAPABILITIES BENTO GRID
- Title: `ENGINEERED PLANT SYSTEMS`
- 3-column bento grid (single column on mobile)
- 6 capability cards with icons, descriptions, bullet lists
- Hover: card lifts `4px`, border turns cobalt
- See existing `BentoGrid.jsx` component

### Section C — CONTACT CTA BANNER
- Full-width navy panel
- `SPEAK WITH AN ENGINEER →` button
- No fluff, no stock phrases

### Section D — FOOTER
- See existing `Footer.jsx` component

---

## 07 · MOBILE LAYOUT (< 768px)

> The scroll-pinned sticky experience is **replaced** on mobile with a clean, standard-scroll vertical layout.

- All sections stack single-column
- Product image appears full-width, 80vw, centered
- Callout annotations replaced by a clean bullet list below the image
- Font sizes clamped down: hero `clamp(2.5rem, 8vw, 4rem)`
- No custom cursor
- Lenis still active but scroll is standard
- CTAs: full-width buttons
- Trust bar: 2×2 grid

---

## 08 · ASSET MANIFEST

| Asset | File | Status | Notes |
|---|---|---|---|
| Hero drum PNG | `drum-hero.png` | ✅ AI Render | Replace with real photo later |
| WearGuard interior | `wearguard-interior.png` | ✅ AI Render | Replace with real photo later |
| SCADA HMI panel | `scada-hmi.png` | ✅ AI Render | Replace with real photo later |
| Plant site photo | *(needed)* | ❌ To do | Aerial or site photo of actual plant |
| Company logo SVG | *(in codebase)* | ✅ Exists | `R` badge + wordmark |

---

## 09 · TECH STACK

| Tool | Version | Purpose |
|---|---|---|
| **Next.js** | 14 (App Router) | Framework |
| **Tailwind CSS** | v3 | Utility styling |
| **GSAP + ScrollTrigger** | 3.x | Scroll-scrubbed sticky animations |
| **Lenis** | latest | Smooth scroll inertia |
| **Framer Motion** | 11.x | Entrance animations, hover states |
| **Lucide React** | latest | Icons |

---

## 10 · COMPONENT FILE MAP

```
ryetek-app/
├── app/
│   ├── page.jsx              ← Home page: hosts scroll experience
│   ├── layout.jsx            ← Root layout (Navbar, Footer, CustomCursor)
│   ├── globals.css           ← Design tokens, HUD badge, animations
│   └── (other pages)
├── components/
│   ├── ScrollExperience.jsx  ← THE SOFI-STYLE SCROLL JOURNEY COMPONENT
│   ├── TrustBar.jsx          ← Below scroll section
│   ├── BentoGrid.jsx         ← Capabilities grid
│   ├── WearGuardSection.jsx  ← Standalone WearGuard detail
│   ├── PlantSchematicGraphic.jsx ← Interactive node diagram
│   ├── Footer.jsx            ← Site footer
│   ├── Navbar.jsx            ← Sticky header
│   └── CustomCursor.jsx      ← Custom cursor (desktop only)
└── public/
    └── renders/
        ├── drum-hero.png          ← Ryetek drum render (transparent bg)
        ├── wearguard-interior.png ← Flighting interior render
        └── scada-hmi.png         ← SCADA panel render
```

---

## 11 · COPY GUIDELINES

| Rule | Example |
|---|---|
| No fluff adjectives | ❌ "innovative cutting-edge solutions" ✅ "CFD-optimized drum flighting" |
| Use real specs | ❌ "high performance" ✅ "400 TPH max capacity" |
| Imperative CTAs | ❌ "Learn more" ✅ "Request Technical Specs" |
| Australian English | ❌ "optimize" ✅ "optimise" |
| No exclamation marks | Engineering brands don't hype. They state facts. |

---

## 12 · IMPLEMENTATION CHECKLIST

- `[x]` Design system tokens in Tailwind + CSS
- `[x]` Navbar — sticky, responsive, hamburger mobile
- `[x]` BentoGrid — capabilities cards
- `[x]` WearGuardSection — spotlight section
- `[x]` TrustBar — metrics row
- `[x]` Footer — responsive 4-column / mobile stacked
- `[x]` CustomCursor — disabled on mobile
- `[ ]` **ScrollExperience.jsx** — Sofi-style GSAP sticky scroll *(NEXT TO BUILD)*
- `[ ]` Replace static HeroSection with ScrollExperience on home page
- `[ ]` Add Lenis smooth scroll to layout.jsx
- `[ ]` Mobile responsive fallback for scroll section
- `[ ]` Replace AI renders with real product photos (when available)

---

*Document version: 1.0 · Last updated: 2026-07-30 · Ryetek Engineering Pty Ltd*
