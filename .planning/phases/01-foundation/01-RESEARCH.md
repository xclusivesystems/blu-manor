# Phase 1: Foundation — Research

**Researched:** 2026-03-17
**Domain:** Next.js App Router scaffold, Tailwind 4 design tokens, shared layout, UI primitives
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SCAF-01 | Next.js App Router project with TypeScript, Tailwind 4, `@theme inline` dark theme tokens from design system | Stack + token mapping sections below; verified pattern from jnewsbbq reference build |
| SCAF-02 | Shared layout with Header (nav + mobile menu) and Footer | Component architecture; jnewsbbq Header/Footer patterns verified and reusable |
| SCAF-03 | AnimatedSection component (Framer Motion scroll reveals) | Verified implementation exists in jnewsbbq — direct port with color swap |
| SCAF-04 | Reusable UI primitives: Button, Card, SectionHeader | All three verified in jnewsbbq; need color token swap for gold/navy palette |
| SCAF-05 | `lib/constants.ts` with all site content (siteConfig, navLinks, services, housing, team, testimonials, FAQ, stats) | Content extracted from static HTML pages; structure mapped below |
</phase_requirements>

---

## Summary

This phase bootstraps a Next.js App Router project with Tailwind 4 design tokens, shared layout components, scroll animation primitives, and a centralized content constants file. There are no research unknowns — the agency has a nearly identical prior build (jnewsbbq) that demonstrates every deliverable in this phase, with the only differences being brand colors and site content.

The primary work is: (1) scaffold with `create-next-app`, (2) apply Blu Manor's dark navy/gold tokens from MASTER.md into `@theme inline`, (3) port Header/Footer/AnimatedSection/Button/Card/SectionHeader from jnewsbbq with color token swaps, and (4) build `constants.ts` by extracting content from the existing static HTML pages.

**Primary recommendation:** Port components from `projects/jnewsbbq/` directly, swapping BBQ-red token values for Blu Manor's gold/navy values. Do not rebuild from scratch. This phase has zero external dependency research gaps — all tools are already installed and proven.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.x (latest stable) | App Router framework | Agency standard; already in SKILL.md |
| TypeScript | ^5 | Type safety | Agency standard; strict mode |
| Tailwind CSS | ^4 | Utility CSS | Agency standard; `@theme inline` approach |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin | Required for Tailwind 4 (replaces tailwind.config.ts) |
| framer-motion | ^12 | Scroll reveal animations | Agency standard; AnimatedSection pattern |
| lucide-react | ^0.577+ | Icons | Agency mandate — no emojis as icons |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `next/font/google` | Built-in | Libre Baskerville + Source Sans 3 | Load via Next.js font optimization, not CDN link tag |

### What This Phase Excludes

Phase 1 is foundation only. The following are intentionally deferred:
- Sanity CMS (Phase 2)
- `sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`
- No MDX, no blog, no DERRECK widget (out of scope per STATE.md decisions)
- No Resend (contact form uses Google Sheets)
- No Prisma/database
- No auth

**Installation (Phase 1 only):**
```bash
npx create-next-app@latest blu-manor --typescript --tailwind --eslint --app --src-dir
# Delete tailwind.config.ts — Tailwind 4 uses @theme inline
npm install framer-motion lucide-react
# Sanity deps come in Phase 2
```

---

## Architecture Patterns

### Recommended Project Structure

```
src/
├── app/
│   ├── globals.css              # @theme inline tokens + grain utility + scrollbar
│   ├── (site)/                  # Route group — site pages with Header/Footer
│   │   ├── layout.tsx           # Fonts, metadata, JSON-LD, GA4, Header/Footer
│   │   ├── page.tsx             # Home page (stub for Phase 1)
│   │   ├── about/page.tsx       # Stub
│   │   ├── housing/page.tsx     # Stub
│   │   ├── program/page.tsx     # Stub
│   │   ├── partners/page.tsx    # Stub
│   │   ├── resources/page.tsx   # Stub
│   │   ├── contact/page.tsx     # Stub
│   │   └── apply/page.tsx       # Stub
│   └── (studio)/                # Isolated studio layout (scaffold now, wired in Phase 2)
│       └── layout.tsx           # Bare <html><body> wrapper
├── components/
│   ├── ui/
│   │   ├── AnimatedSection.tsx  # Framer Motion scroll reveal wrapper
│   │   ├── Button.tsx           # Primary/secondary/ghost variants
│   │   ├── Card.tsx             # hover prop for lift effect
│   │   └── SectionHeader.tsx    # label + title + description pattern
│   └── layout/
│       ├── Header.tsx           # Sticky nav + mobile menu (useState)
│       └── Footer.tsx           # 4-col grid: brand, links, resources, contact
└── lib/
    ├── constants.ts             # All site content (see SCAF-05 below)
    └── utils.ts                 # cn() class merger — no external clsx dep
```

**CRITICAL:** The `(site)` route group's `layout.tsx` provides `<html>` and `<body>`. There must be NO root `app/layout.tsx`. Each route group owns its own document shell.

### Pattern 1: Tailwind 4 Token Mapping (`@theme inline`)

**What:** CSS custom properties in `:root` are mapped to Tailwind color utilities via `@theme inline`. No `tailwind.config.ts` needed.

**When to use:** Always. This is how Tailwind 4 works for custom design tokens.

```css
/* globals.css */
@import "tailwindcss";

:root {
  --bg-deep: #0F1623;
  --bg-surface: #162032;
  --bg-card: #1D2B42;
  --bg-elevated: #263652;
  --primary: #C9A84C;
  --primary-light: #D4B85E;
  --primary-dim: rgba(201, 168, 76, 0.12);
  --primary-glow: rgba(201, 168, 76, 0.08);
  --accent: #7BA7D9;
  --accent-light: #92BBE5;
  --foreground: #E8E4DC;
  --muted: #8B9BB5;
  --subtle: #5A6B82;
  --border: #2A3A52;
  --border-hover: #3D5070;
  --success: #4ADE80;
  --error: #EF4444;
}

@theme inline {
  --color-bg-deep: var(--bg-deep);
  --color-bg-surface: var(--bg-surface);
  --color-bg-card: var(--bg-card);
  --color-bg-elevated: var(--bg-elevated);
  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-primary-dim: var(--primary-dim);
  --color-primary-glow: var(--primary-glow);
  --color-accent: var(--accent);
  --color-accent-light: var(--accent-light);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-subtle: var(--subtle);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --color-success: var(--success);
  --color-error: var(--error);
}
```

Usage: `bg-bg-deep`, `text-primary`, `border-border`, `text-muted`, etc.

### Pattern 2: Font Loading (next/font/google)

**What:** Load Libre Baskerville and Source Sans 3 via Next.js font optimization (self-hosted, no external CDN request at runtime). Expose as CSS variables.

**CRITICAL:** Delete the Google Fonts `<link>` tags from the static site — `next/font` handles this automatically and avoids double-loading.

```tsx
// (site)/layout.tsx
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Apply both variable classes to <body>
```

Then in globals.css:
```css
body {
  background: var(--bg-deep);
  color: var(--foreground);
  font-family: var(--font-source-sans), system-ui, sans-serif;
  line-height: 1.65;
}
```

Headings use: `font-[family-name:var(--font-libre)]`

### Pattern 3: AnimatedSection (Framer Motion)

Verified implementation from jnewsbbq — direct port, no changes needed:

```tsx
// components/ui/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**`prefers-reduced-motion` handling:** Framer Motion 12 respects this automatically via its `useReducedMotion` internals when using `whileInView`. No manual check needed for this pattern.

### Pattern 4: Button Component

Port from jnewsbbq with color updates. Key differences for Blu Manor:
- Primary: gold on deep navy (not white)
- Secondary: outlined with gold border
- Per design system: `hover:-translate-y-0.5` on primary

```tsx
// Key variant overrides from MASTER.md:
primary: "bg-primary text-bg-deep font-semibold hover:bg-primary-light hover:-translate-y-0.5"
secondary: "border-2 border-primary text-primary hover:bg-primary-dim"
ghost: "text-muted hover:text-foreground"
```

Shadow for card: `shadow-[0_4px_24px_rgba(15,22,35,0.4)]`
Card hover shadow: `shadow-[0_8px_32px_rgba(201,168,76,0.08)]`

### Pattern 5: Header — Mobile Menu

The static site's mobile menu uses vanilla JS. In Next.js, replace with `useState`:

```tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const [mobileOpen, setMobileOpen] = useState(false);

// Mobile nav panel uses transition-[max-height,opacity]:
<div className={cn(
  "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
  mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
)}>
```

**Note:** The static site header has a logo + text combo ("Blu Manor" / "Second Chance Housing" subtext). Preserve this in the Next.js Header. Use `<Image>` from `next/image` for the logo.

### Pattern 6: `lib/constants.ts` Content Map (SCAF-05)

All content must be extracted from the static HTML files. Here is the complete map:

| Export | Source | Notes |
|--------|--------|-------|
| `siteConfig` | index.html meta + footer | name, tagline, description, url, email, phones (resident + partner), address (placeholder), ga4Id |
| `navLinks` | All pages nav | Home, About, Housing, Program, Partners, Resources, Contact + Apply CTA |
| `services` | index.html features section | 4 items: Felon-Friendly Housing, Employment-Focused, Supervision Compliance, Move-In Ready |
| `housing` | housing.html | Shared Room: $750/mo, features list, availability |
| `team` | about.html | Founder + staff (names pending from client — use placeholder) |
| `testimonials` | index.html testimonials | James D., Marcus T., Sarah R. (parole officer) |
| `faq` | index.html FAQ section | 7 questions extracted |
| `stats` | index.html stat bar | 5+ Properties, Move-In Within Days, Employment-Focused |

**Type interfaces to define:**
```ts
interface SiteConfig { name, tagline, description, url, email, phoneResident, phonePartner, address, ga4Id }
interface NavLink { label: string; href: string; }
interface Service { id, title, description, icon?: string }
interface HousingOption { id, type, price, pricePeriod, features: string[], availability, image? }
interface TeamMember { id, name, role, bio, initials }
interface Testimonial { id, name, quote, role, initials, verified?: boolean }
interface FaqItem { question: string; answer: string; }
interface Stat { label: string; value: string; }
```

### Anti-Patterns to Avoid

- **`transition-all` anywhere:** Specify exact properties — `transition-[color,background-color,border-color,box-shadow,transform]`
- **Plain gray shadows:** All shadows tinted with navy — `rgba(15,22,35,0.4)` or gold glow `rgba(201,168,76,0.08)`
- **Tailwind blue/indigo as primary:** Blu Manor uses `--primary: #C9A84C` (muted gold)
- **Emojis as icons:** The static HTML uses emoji icons heavily (&#127968;, &#128188; etc.). Replace ALL with Lucide React icons in the Next.js build.
- **Root `app/layout.tsx`:** Each route group provides its own `<html>/<body>` shell
- **`tailwind.config.ts`:** Delete it — Tailwind 4 uses `@theme inline` only
- **CDN Google Fonts link tags:** Use `next/font/google` instead
- **Hardcoded strings in components:** All text content comes from `constants.ts`

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Class merging | Custom string concat | `cn()` utility in `lib/utils.ts` | Handles falsy values cleanly; already proven pattern |
| Scroll animations | CSS + IntersectionObserver (as in static site) | Framer Motion `whileInView` | GPU-composited, handles reduced motion, cleaner code |
| Mobile nav toggle | Vanilla JS classList | React `useState` | SSR-safe, no hydration mismatch |
| Font loading | `<link>` to Google Fonts CDN | `next/font/google` | Auto-optimized, self-hosted, no layout shift |

**Key insight:** The static site's scroll animations use `IntersectionObserver` with CSS classes (`fade-in`, `visible`). This approach requires manual reduced-motion checks. Framer Motion handles all of this transparently.

---

## Common Pitfalls

### Pitfall 1: Duplicate `<html>/<body>` shell

**What goes wrong:** Creating a root `app/layout.tsx` alongside `(site)/layout.tsx`. Both try to render `<html>` causing React hydration errors.

**Why it happens:** `create-next-app` generates a root `app/layout.tsx` by default.

**How to avoid:** Delete `app/layout.tsx` after scaffold. Route group layouts (`(site)/layout.tsx` and `(studio)/layout.tsx`) each provide their own document shell.

**Warning signs:** React error "Can't render a `<html>` element inside a `<body>` element"

### Pitfall 2: PostCSS / Tailwind 4 config mismatch

**What goes wrong:** Keeping `tailwind.config.ts` alongside Tailwind 4 causes conflicts. The old config may override or conflict with `@theme inline`.

**Why it happens:** `create-next-app` with `--tailwind` may scaffold a `tailwind.config.ts`.

**How to avoid:** Delete `tailwind.config.ts` immediately after scaffold. Use only `postcss.config.mjs`:
```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

### Pitfall 3: `framer-motion` SSR errors

**What goes wrong:** Importing from `framer-motion` in a Server Component causes build errors.

**Why it happens:** Framer Motion uses browser APIs (`window`, `document`).

**How to avoid:** Always add `"use client"` directive to `AnimatedSection.tsx` and any component that uses Framer Motion hooks. Page-level components that *use* AnimatedSection don't need `"use client"` themselves — the boundary is at AnimatedSection.

### Pitfall 4: `next/image` for logo

**What goes wrong:** Using `<img>` instead of `<Image>` for the logo causes Next.js build warnings and misses optimization.

**Why it happens:** Direct port from static HTML.

**How to avoid:** Wrap logo in `<Image>` with explicit `width` and `height`. Copy `images/logo.png` from static site to `public/img/logo.png`.

**Note on logo path:** Static site uses `images/logo.png`. Next.js public dir convention is `public/img/`. Decide on one path and be consistent.

### Pitfall 5: `Source_Sans_3` font name in next/font

**What goes wrong:** `Source Sans 3` font has an underscore naming convention in `next/font/google`: `Source_Sans_3`. Using `Source_Sans_Pro` (the older name) will 404.

**How to avoid:** Import exactly: `import { Libre_Baskerville, Source_Sans_3 } from "next/font/google"`

### Pitfall 6: Mobile menu body scroll lock

**What goes wrong:** The static site sets `document.body.style.overflow = 'hidden'` on mobile menu open. In Next.js with React, this direct DOM manipulation can cause hydration warnings.

**How to avoid:** Either (a) skip the scroll lock for simplicity (acceptable for this build scale), or (b) use a `useEffect` to apply it after mount. The jnewsbbq pattern skips scroll lock entirely and uses `max-height/opacity` transition instead.

---

## Code Examples

### globals.css (complete structure)

```css
@import "tailwindcss";

:root {
  /* Blu Manor — Dark Navy/Gold Theme */
  --bg-deep: #0F1623;
  --bg-surface: #162032;
  --bg-card: #1D2B42;
  --bg-elevated: #263652;
  --primary: #C9A84C;
  --primary-light: #D4B85E;
  --primary-dim: rgba(201, 168, 76, 0.12);
  --primary-glow: rgba(201, 168, 76, 0.08);
  --accent: #7BA7D9;
  --accent-light: #92BBE5;
  --foreground: #E8E4DC;
  --muted: #8B9BB5;
  --subtle: #5A6B82;
  --border: #2A3A52;
  --border-hover: #3D5070;
  --success: #4ADE80;
  --error: #EF4444;
}

@theme inline {
  --color-bg-deep: var(--bg-deep);
  --color-bg-surface: var(--bg-surface);
  --color-bg-card: var(--bg-card);
  --color-bg-elevated: var(--bg-elevated);
  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-primary-dim: var(--primary-dim);
  --color-primary-glow: var(--primary-glow);
  --color-accent: var(--accent);
  --color-accent-light: var(--accent-light);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-subtle: var(--subtle);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --color-success: var(--success);
  --color-error: var(--error);
}

body {
  background: var(--bg-deep);
  color: var(--foreground);
  font-family: var(--font-source-sans), system-ui, sans-serif;
  line-height: 1.65;
}

html { scroll-behavior: smooth; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-surface); }
::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 3px; }

/* Selection */
::selection { background: rgba(201, 168, 76, 0.3); color: var(--foreground); }

/* Grain texture overlay for hero/CTA sections */
.grain { position: relative; }
.grain::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}
```

### lib/utils.ts

```ts
type ClassValue = string | undefined | null | false | Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}
```

### next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",  // Pre-add for Phase 2
      },
    ],
  },
};

export default nextConfig;
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.ts` | `@theme inline` in globals.css | Tailwind 4 (2024) | No config file needed; tokens defined in CSS |
| `pages/` directory | App Router `app/` directory | Next.js 13 (2022) | Server Components by default; layouts at folder level |
| Google Fonts `<link>` tag | `next/font/google` | Next.js 13 (2022) | Self-hosted, no layout shift, GDPR-friendly |
| Separate `postcss.config.js` with multiple plugins | Single `@tailwindcss/postcss` plugin | Tailwind 4 | Simpler config |

**Deprecated/outdated (from static site):**
- Vanilla JS IntersectionObserver for scroll animations: replaced by Framer Motion `whileInView`
- `classList.toggle('open')` for mobile menu: replaced by React `useState`
- HTML emoji icons (&#127968; etc.): replaced by Lucide React components

---

## Open Questions

1. **Logo file location and format**
   - What we know: `images/logo.png` exists in the static site
   - What's unclear: Is there an SVG version? Should we use PNG or request SVG?
   - Recommendation: Copy PNG to `public/img/logo.png` for now; flag to client for SVG upgrade

2. **Team member content for constants.ts**
   - What we know: STATE.md flags "Founder name/bio and exact property addresses pending from client"
   - What's unclear: Real names/bios for team members
   - Recommendation: Use placeholder data in constants.ts (`{ name: "TBD", bio: "Coming soon" }`); About page will render whatever is in the array

3. **Property addresses for Housing section**
   - What we know: Client has 5+ properties; addresses listed as "PLACEHOLDER" in static site JSON-LD
   - What's unclear: Real addresses
   - Recommendation: Housing constants use generic area descriptions ("Tampa Bay Area, FL"); actual addresses come when Sanity is populated (Phase 2)

4. **`prefers-reduced-motion` for AnimatedSection**
   - What we know: MASTER.md requires `prefers-reduced-motion: reduce` — disable transforms, use opacity only
   - What's unclear: Does Framer Motion 12 handle this automatically?
   - Recommendation: HIGH confidence that Framer Motion 12 respects `prefers-reduced-motion` via `useReducedMotion` internally. However, to be safe, add explicit `useReducedMotion()` hook in AnimatedSection and conditionally remove `y` from the animation: `initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}`

---

## Sources

### Primary (HIGH confidence)

- Verified working code in `/home/xclusivesystems/claude-code/projects/jnewsbbq/src/` — all 4 UI primitives, Header, Footer, layout, globals.css directly read and verified
- `/home/xclusivesystems/claude-code/skills/build-website/SKILL.md` — agency canonical stack documentation
- `/home/xclusivesystems/claude-code/design-system/blu-manor/MASTER.md` — all color tokens, typography, component specs, animation rules
- `/home/xclusivesystems/claude-code/projects/blu-manor/.planning/REQUIREMENTS.md` — SCAF-01 through SCAF-05 verified
- `/home/xclusivesystems/claude-code/projects/blu-manor/.planning/STATE.md` — decisions confirmed (dark navy/gold, Sanity in Phase 2, rebuild not migration)
- Static HTML pages: `index.html`, `about.html`, `housing.html` — content mapped for constants.ts

### Secondary (MEDIUM confidence)

- `next/font/google` font name for `Source_Sans_3` — derived from naming convention; highly likely correct but should be verified on first `npm run dev` (404 from Next.js will indicate wrong name)

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — proven in jnewsbbq, agency SKILL.md documents every decision
- Architecture: HIGH — direct port of verified working structure
- Design tokens: HIGH — all values from MASTER.md, no guessing
- Content for constants.ts: HIGH — extracted from existing static HTML pages
- Pitfalls: HIGH — observed directly in prior builds

**Research date:** 2026-03-17
**Valid until:** 2026-09-17 (stable stack; revisit if Next.js major version changes)
