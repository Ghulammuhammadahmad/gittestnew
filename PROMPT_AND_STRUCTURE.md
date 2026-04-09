# Finguard Landing Page — React Recreation Guide

---

## Project File Structure

```
finguard/
├── public/
│   └── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css               ← Global styles, CSS variables, resets
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx      ← Primary + secondary variants
│   │   │   ├── SectionLabel.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── PartnerTile.jsx
│   │   │   └── PaymentCard.jsx ← CSS-rendered payment card
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AboutUs.jsx
│   │       ├── Features.jsx
│   │       ├── Benefits.jsx
│   │       ├── Partners.jsx
│   │       ├── Testimonials.jsx
│   │       └── FooterCTA.jsx
│   │
│   ├── data/
│   │   ├── features.js
│   │   ├── stats.js
│   │   ├── partners.js
│   │   ├── testimonials.js
│   │   └── footerLinks.js
│   │
│   └── hooks/
│       ├── useScrollReveal.js  ← IntersectionObserver for fade-up
│       └── useCountUp.js       ← Animated number counter
│
├── package.json
└── vite.config.js
```

---

## package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.383.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0"
  }
}
```

**Google Fonts (in index.html `<head>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## Complete AI Prompt

> Use the following prompt verbatim when instructing an AI to build this page:

---

```
Build a complete, production-grade React landing page for "Finguard" — a financial
technology / banking platform. Use Vite + React 18 + Framer Motion + Lucide React.

=== DESIGN SYSTEM ===

COLOR TOKENS (define as CSS variables in :root):
  --color-orange:        #FF4500
  --color-orange-dark:   #E03D00
  --color-bg:            #0A0A0A
  --color-bg-dark:       #111111
  --color-bg-card:       #1A1A1A
  --color-border:        #2A2A2A
  --color-text:          #FFFFFF
  --color-text-muted:    #888888
  --color-success:       #22C55E
  --color-pending:       #F59E0B
  --color-cancel:        #EF4444

FONTS:
  Headlines:  'Bebas Neue' (Google Fonts) — ALL CAPS, tight leading
  Body/UI:    'DM Sans' — weights 300/400/500/600
  Monospace:  'Space Mono' — stat numbers, counters

=== SECTIONS TO BUILD (in order) ===

1. NAVBAR (fixed, blur backdrop)
   - Logo: "finguard" in DM Sans bold, white
   - Nav links: Products · Features · Benefits · Partners
   - CTA button: "Sign up →" in orange, pill shape, small

2. HERO SECTION
   - Full-width dark background
   - Left side:
     · Headline (Bebas Neue, ~80px): "SECURE YOUR\nFINANCIAL FUTURE"
     · Subtext: "Trusted Protection and Expert Guidance for Your Finances"
     · Orange CTA button: "GET STARTED →"
     · Social proof: "Active Users" label + "95K+" count + 5 stacked avatar circles
   - Center: Three CSS-rendered payment cards stacked/rotated:
     · Card 1 (front): orange/red gradient, "finguard" text, Visa logo, chip
     · Card 2 (mid): silver, "ralph rewards", chip, rotated +3deg
     · Card 3 (back): dark/black, rotated +10deg
   - Right side: Vertical steps list with numbers and right arrows:
     · "Selecting your provider"
     · "Set Up Your Account"
     · "Enjoy Seamless Banking FinGuard"

3. ABOUT US SECTION
   - Section label: "ABOUT US" in orange small caps
   - Left: Headline "GETTING TO\nKNOW FINGUARD" (Bebas Neue, ~52px)
   - Right: Body copy paragraph
   - Three stat cards in a row:
     · Card 1 (orange bg): icon + "500k users" + description
     · Card 2 (dark bg): "98%" large + "Clients enjoy faster transaction processes time"
     · Card 3 (dark bg): "24K" large + "A network of over 200,000 partner ATMs worldwide"
   - Animate numbers with useCountUp hook on intersection

4. FEATURES SECTION
   - Label: "FEATURES"
   - Left column: Headline "ALL-IN-ONE PLATFORM FOR SAVINGS" + subtext
     Then 4 feature rows (numbered 01–04):
       01: Secure and Easy Transactions
       02: Real-Time Financial Monitoring
       03: Fast & EASY TRANSACTIONS  ← this row is orange/active
       04: Comprehensive Financial Planning
     Each row: number + title + circle arrow button (→)
     Active row (03): orange background, white text
   - Right column: Invoice widget card (white card, dark text):
     Title: "Latest Invoice"
     Row 1: avatar + "Kelly Williams" + progress bars (67% success, 14% pending, 19% cancel) + "PAID NOW" button
     Row 2: avatar + "John Tarry" + date "3 July 2016" + "INVOICE" button
     Row 3: avatar + "Caitlin Clark" + date "3 July 2016" + "PENDING" badge

5. BENEFITS SECTION
   - Label: "BENEFITS"
   - Right: Headline "SHOPPING ON INTERNATIONAL"
   - Right: Three benefit items with icons:
     · ✅ Green check — "Get 2% cashback on all purchases."
     · ✗ Red X — "Access exclusive travel deals and discounts on flights and hotels."
     · 📍 Pin — "Includes travel insurance and purchase protection."
   - Right: "LEARN MORE ↗" button
   - Left: Two CSS payment cards overlapping at an angle (same card design as hero)

6. PARTNERS SECTION (dark background)
   - Label: "OUR TRUSTED PARTNERS"
   - Left: Headline "REAL-TIME FINANCIAL MONITORING" + body copy
   - Left below: Large "98%" stat + small description text
   - Center: 2×2 grid of orange square tiles with white partner logos:
     · Apple Pay, PayPal (P), Wise (lightning bolt), Google Pay
   - Right: Dark card with text "CREATING IMPACTFUL SOLUTIONS AND LASTING PARTNERSHIPS"
     + "LET'S GROW TOGETHER →" orange button

7. TESTIMONIALS SECTION
   - Label: "WHAT THEY SAYS ABOUT US"
   - Large quote mark (") in orange, decorative, top-right of card
   - Quote text (italic, large): "finguard has completely transformed the way I manage
     my finances. The real-time updates and personalized advice have been invaluable."
   - Reviewer: avatar circle + "Kelly Williams" bold + "Head of Design, Layers" muted
   - Navigation arrows: ← →

8. FOOTER CTA SECTION
   - Large 3D orange "finguard" text as background (Bebas Neue, ~160px, extruded text-shadow)
   - Overlaid centered content: "READY TO TAKE CONTROL OF YOUR FINANCIAL FUTURE"
   - Orange CTA button: "GET STARTED →"

9. FOOTER
   - Top: Social icons row (Twitter, Instagram, LinkedIn, Facebook)
   - Four columns: Products · Company · Resources · Support (with links)
   - Bottom bar: © 2024 Finguard · All Rights Reserved | Terms of Service · Privacy Policy

=== ANIMATIONS ===
- All sections: fade-up reveal on scroll using Framer Motion (initial: opacity 0 + y: 40,
  animate: opacity 1 + y: 0, duration 0.6s, stagger children by 0.1s)
- Stat numbers: count up from 0 to target when scrolled into view
- Payment cards in hero: subtle floating animation (y: ±8px, 3s ease-in-out infinite)
- Navbar: add backdrop-filter blur after scrolling 60px
- Feature rows: hover highlight effect
- Partner tiles: hover scale(1.04) with orange glow shadow

=== TECHNICAL REQUIREMENTS ===
- Single-file components with Tailwind OR pure CSS-in-JS (your choice)
- Fully responsive: mobile-first, hamburger menu on mobile
- Semantic HTML5 (header, nav, main, section, footer)
- All CSS variables defined in :root
- No placeholder images — use CSS-rendered payment cards, colored divs for avatars,
  SVG icons from lucide-react for all icons
- Partner logos: text-based (white text on orange tile) since no assets available
- Smooth scroll behavior on nav link clicks
- No external image dependencies

=== DATA FILES ===
Create src/data/ files for all dynamic content (features list, stats, partners, testimonials,
footer links) so sections are data-driven.
```

---

## Key Implementation Notes

### Payment Card (Pure CSS)
```jsx
// PaymentCard.jsx — no image needed
const PaymentCard = ({ variant = 'orange', rotation = 0 }) => (
  <div style={{
    width: 280, height: 170,
    borderRadius: 16,
    background: variant === 'orange'
      ? 'linear-gradient(135deg, #FF4500 0%, #E03D00 100%)'
      : variant === 'silver'
      ? 'linear-gradient(135deg, #B8BCC8 0%, #8A8E9A 100%)'
      : 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
    transform: `rotate(${rotation}deg)`,
    padding: 24,
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    color: '#fff',
  }}>
    {/* Chip */}
    <div style={{ width: 36, height: 28, background: '#D4AF37',
      borderRadius: 4, marginBottom: 24 }} />
    {/* Card number dots */}
    <div style={{ letterSpacing: 6, fontSize: 14, marginBottom: 12 }}>
      •••• •••• •••• 4521
    </div>
    {/* Brand */}
    <div style={{ fontSize: 18, fontWeight: 700 }}>finguard</div>
    {/* Visa badge */}
    <div style={{ position: 'absolute', bottom: 20, right: 20,
      fontStyle: 'italic', fontWeight: 700, fontSize: 18 }}>VISA</div>
  </div>
);
```

### useScrollReveal Hook
```js
// hooks/useScrollReveal.js
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};
```

### useCountUp Hook
```js
// hooks/useCountUp.js
import { useEffect, useState } from 'react';

export const useCountUp = (target, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
};
```

---

## Quick-Start Commands

```bash
npm create vite@latest finguard -- --template react
cd finguard
npm install lucide-react framer-motion
npm run dev
```

---

## Asset Checklist (No External Images Needed)

| Asset | Solution |
|---|---|
| Payment cards | Pure CSS (see PaymentCard.jsx above) |
| User avatars | CSS circles with initials or colored divs |
| Partner logos | Styled text on orange tiles |
| Icons | `lucide-react` (ArrowRight, Check, X, MapPin, etc.) |
| Social icons | `lucide-react` (Twitter, Instagram, Linkedin, Facebook) |
| Quote mark | Unicode `"` styled with CSS |
| Background 3D text | CSS `text-shadow` extrusion (see designsystem.md §11) |
