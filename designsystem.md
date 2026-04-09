# Finguard — Design System

---

## 1. Color Palette

### Primary Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-orange` | `#FF4500` | Primary CTA buttons, accents, active states, card backgrounds |
| `--color-brand-orange-dark` | `#E03D00` | Hover state for orange buttons |
| `--color-bg-black` | `#0A0A0A` | Page background (primary) |
| `--color-bg-dark` | `#111111` | Card backgrounds, section dividers |
| `--color-bg-card` | `#1A1A1A` | Feature cards, stat cards |
| `--color-bg-card-alt` | `#141414` | Alternate card tone |

### Text Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#FFFFFF` | Headlines, body copy on dark backgrounds |
| `--color-text-secondary` | `#AAAAAA` | Subtext, descriptions, muted copy |
| `--color-text-muted` | `#666666` | Placeholder text, footer links |
| `--color-text-orange` | `#FF4500` | Highlighted words, section labels |

### Status Colors (Invoice Widget)

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#22C55E` | Success/paid states |
| `--color-pending` | `#F59E0B` | Pending states |
| `--color-cancel` | `#EF4444` | Cancelled states |

### Accent / UI

| Token | Hex | Usage |
|---|---|---|
| `--color-border` | `#2A2A2A` | Card borders, dividers |
| `--color-border-orange` | `#FF4500` | Active item borders, selected states |

---

## 2. Typography

### Font Families

```css
/* Display / Headlines */
font-family: 'Bebas Neue', 'Anton', sans-serif;

/* Body / UI */
font-family: 'DM Sans', 'Sora', sans-serif;

/* Monospace / Stats */
font-family: 'Space Mono', monospace;
```

> **Google Fonts imports:**
> `Bebas Neue`, `DM Sans` (weights: 300, 400, 500, 600), `Space Mono`

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `--text-hero` | `72–96px` | 700 | 0.9 | Hero headline |
| `--text-h1` | `52–64px` | 700 | 1.0 | Section headlines |
| `--text-h2` | `36–42px` | 700 | 1.1 | Sub-section heads |
| `--text-h3` | `24px` | 600 | 1.2 | Card titles |
| `--text-label` | `11–12px` | 600 | 1.4 | Section labels (ALL CAPS, tracked) |
| `--text-body` | `14–16px` | 400 | 1.6 | Body copy |
| `--text-stat` | `48–64px` | 700 | 1.0 | Stat numbers |
| `--text-small` | `12px` | 400 | 1.5 | Footer links, captions |

### Typography Rules

- Section labels: ALL CAPS · letter-spacing: 0.15em · color: `--color-text-orange` · font-size: 11px
- Hero/H1 headlines: ALL CAPS · font-family: Bebas Neue · no letter-spacing
- Body copy: DM Sans Regular · max-width: 420px · color: `--color-text-secondary`
- Stat numbers: extremely large (48–64px) · bold · white

---

## 3. Spacing System

Based on an **8px grid**:

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   24px
--space-6:   32px
--space-7:   48px
--space-8:   64px
--space-9:   80px
--space-10:  96px
--space-11:  120px
--space-12:  160px
```

**Section padding:** `96px` top/bottom (`--space-10`)
**Container max-width:** `1200px`, centered, padding: `0 24px`

---

## 4. Border Radius

```
--radius-sm:   6px    → Tags, badges, small chips
--radius-md:   12px   → Cards, stat blocks
--radius-lg:   16px   → Large cards, partner tiles
--radius-xl:   24px   → CTA buttons (pill), hero cards
--radius-full: 9999px → Avatar circles, pill buttons
```

---

## 5. Components

### Button — Primary (Orange)

```css
background: var(--color-brand-orange);
color: #FFFFFF;
font-family: 'DM Sans', sans-serif;
font-size: 13px;
font-weight: 600;
letter-spacing: 0.06em;
text-transform: uppercase;
padding: 14px 28px;
border-radius: var(--radius-xl);
border: none;
cursor: pointer;
display: inline-flex;
align-items: center;
gap: 8px;
transition: background 0.2s ease, transform 0.15s ease;

/* Hover */
background: var(--color-brand-orange-dark);
transform: translateY(-1px);
```

**Arrow icon:** → or ↗ inline with button text

### Button — Secondary / Ghost

```css
background: transparent;
color: #FFFFFF;
border: 1.5px solid #3A3A3A;
padding: 12px 24px;
border-radius: var(--radius-xl);
font-size: 13px;
font-weight: 500;
letter-spacing: 0.05em;
text-transform: uppercase;
transition: border-color 0.2s, color 0.2s;

/* Hover */
border-color: var(--color-brand-orange);
color: var(--color-brand-orange);
```

### Stat Card

```css
background: var(--color-bg-card);
border-radius: var(--radius-md);
padding: 24px;
border: 1px solid var(--color-border);

/* First stat card uses orange background */
.stat-card--orange {
  background: var(--color-brand-orange);
}
.stat-card--dark {
  background: #1C1C1C;
}
```

**Layout:** Icon (top-left) · Big number · Description text beneath

### Feature Row Item

```css
.feature-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background 0.2s;
}
.feature-item--active {
  background: var(--color-brand-orange);
  border-radius: var(--radius-md);
  color: #FFFFFF;
}
.feature-item:hover {
  background: rgba(255, 69, 0, 0.08);
}
```

**Number label:** Small orange monospace counter (01, 02, 03, 04)

### Partner Tile

```css
background: var(--color-brand-orange);
border-radius: var(--radius-lg);
aspect-ratio: 1;
display: flex;
align-items: center;
justify-content: center;
padding: 32px;
```

**Logo:** White SVG/PNG, centered. Grid: 2×2.

### Invoice Widget Card

```css
background: #FFFFFF;
color: #111111;
border-radius: var(--radius-lg);
padding: 20px 24px;
min-width: 320px;
box-shadow: 0 24px 48px rgba(0,0,0,0.4);
```

**Row layout:** Avatar circle · Name + date · Status pill → Action button

### Navigation

```css
position: fixed;
top: 0;
width: 100%;
background: rgba(10, 10, 10, 0.85);
backdrop-filter: blur(12px);
padding: 16px 40px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
border-bottom: 1px solid var(--color-border);
```

### Section Label

```css
font-size: 11px;
font-weight: 600;
letter-spacing: 0.18em;
text-transform: uppercase;
color: var(--color-brand-orange);
margin-bottom: 16px;
```

### Testimonial Card

```css
background: var(--color-bg-card);
border-radius: var(--radius-lg);
padding: 48px;
max-width: 800px;
position: relative;

/* Large quote mark */
.quote-mark {
  font-size: 120px;
  color: var(--color-brand-orange);
  line-height: 0;
  position: absolute;
  top: 32px;
  right: 32px;
  font-family: Georgia, serif;
}
```

---

## 6. Layout Grid

```
- Columns: 12
- Gutter: 24px
- Max width: 1200px
- Breakpoints:
    Mobile:  < 768px
    Tablet:  768px – 1024px
    Desktop: > 1024px
```

**Two-column sections** split roughly: `55% / 45%` or `50/50`

---

## 7. Cards & Payment Cards Visual

The hero features 3 stacked/rotated payment cards:

```
Card 1 (front): Red/Orange · "finguard" wordmark · Visa logo · chip visible
Card 2 (mid):   Silver/Gray · "ralph rewards" text · standard chip + Visa
Card 3 (back):  Black/Dark · Union branding
```

CSS transform for card stack:
```css
.card-1 { transform: rotate(-8deg) translateY(-20px); z-index: 3; }
.card-2 { transform: rotate(3deg) translateY(10px); z-index: 2; }
.card-3 { transform: rotate(12deg) translateY(30px); z-index: 1; }
```

---

## 8. Shadows & Effects

```css
/* Elevated card shadow */
--shadow-card: 0 8px 32px rgba(0, 0, 0, 0.35);

/* Float effect (invoice widget, cards) */
--shadow-float: 0 24px 64px rgba(0, 0, 0, 0.5);

/* Orange glow (active states) */
--shadow-glow-orange: 0 0 24px rgba(255, 69, 0, 0.35);

/* Subtle inset (dark cards) */
--shadow-inset: inset 0 1px 0 rgba(255,255,255,0.04);
```

---

## 9. Icons & Visual Assets

- Use **Lucide React** for UI icons (arrow-right, check, x, map-pin, arrow-up-right)
- Section feature numbers: monospace `01` `02` `03` `04` style
- Arrow buttons on feature list rows: circular border button `→`
- Social icons (footer): Twitter/X, Instagram, LinkedIn, Facebook
- Stats icons: small circular icon badge per stat card

---

## 10. Animation Guidelines

```css
/* Fade up on scroll reveal */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Stagger delay: 0.1s between each child */

/* Number counter: animate from 0 to target value on intersection */

/* Card hover lift */
transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
:hover { transform: translateY(-6px); }

/* Nav blur on scroll: add class via JS on window scroll > 60px */
```

---

## 11. Footer CTA — 3D Text Effect

The large background "finguard" text in the footer CTA section uses:
```css
/* 3D extruded orange text */
color: var(--color-brand-orange);
font-size: clamp(80px, 14vw, 180px);
font-family: 'Bebas Neue', sans-serif;
text-shadow:
  2px 2px 0 #c73800,
  4px 4px 0 #a02d00,
  6px 6px 0 #7a2200;
letter-spacing: -0.01em;
user-select: none;
pointer-events: none;
opacity: 0.85;
```
