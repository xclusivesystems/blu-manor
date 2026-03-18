---
phase: 01-foundation
plan: 03
subsystem: ui
tags: [framer-motion, lucide-react, typescript, tailwind4, ui-primitives, constants]

# Dependency graph
requires:
  - 01-01 (cn() utility, design tokens, project scaffold)
provides:
  - AnimatedSection: Framer Motion scroll reveal wrapper with reduced-motion support
  - Button: primary/secondary/ghost variants rendering as Link or button
  - Card: dark bg-card with navy shadow and gold hover glow
  - SectionHeader: label/title/description pattern with Libre Baskerville heading
  - constants.ts: all site content with full TypeScript type definitions
affects: [03-pages]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "useReducedMotion() hook from framer-motion to disable y transform for accessibility"
    - "ButtonHTMLAttributes spread for full native button API pass-through"
    - "cn() conditional classes: hover classes applied only when hover prop is true"
    - "Render-as pattern: Button renders Link when href provided, button otherwise"

key-files:
  created:
    - src/components/ui/AnimatedSection.tsx
    - src/components/ui/Button.tsx
    - src/components/ui/Card.tsx
    - src/components/ui/SectionHeader.tsx
    - src/lib/constants.ts
  modified: []

key-decisions:
  - "useReducedMotion() used explicitly rather than relying on Framer Motion internals — MASTER.md requires disabling transforms, not just opacity, for prefers-reduced-motion"
  - "Button is 'use client' for onClick handler support even though server render would work for link-only use"
  - "Card and SectionHeader are server components (no 'use client' needed)"
  - "constants.ts replaces Plan 02 minimal bootstrap entirely — phone numbers corrected from placeholder 813 numbers to real 727 numbers from static HTML"
  - "stats value field uses '100%' for Employment-Focused rather than '5+' to differentiate from Properties stat"

requirements-completed: [SCAF-03, SCAF-04, SCAF-05]

# Metrics
duration: 2min
completed: 2026-03-18
---

# Phase 1 Plan 03: UI Primitives and Site Constants Summary

**Four Framer Motion / Tailwind 4 UI primitives and complete typed constants.ts with all Blu Manor site content extracted from static HTML**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-18T22:56:46Z
- **Completed:** 2026-03-18T22:59:03Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Created AnimatedSection with `useReducedMotion()` for WCAG-compliant scroll reveals — disables y transform (not just opacity) for users who prefer reduced motion
- Created Button with primary/secondary/ghost variants matching MASTER.md gold/navy palette, rendering as Next.js Link when href is provided
- Created Card with dark bg-card, navy-tinted shadow (`rgba(15,22,35,0.4)`), and gold hover glow (`rgba(201,168,76,0.08)`) — no transition-all
- Created SectionHeader with Libre Baskerville heading, Source Sans 3 label in gold, and optional description
- Replaced Plan 02's minimal constants.ts bootstrap with canonical complete version: 8 typed exports, 7 FAQ items, 3 testimonials, real phone numbers from static HTML, all interfaces exported

## Task Commits

Each task was committed atomically:

1. **Task 1: Create AnimatedSection, Button, Card, and SectionHeader components** - `92c333e` (feat)
2. **Task 2: Create complete constants.ts with all site content and types** - `eeecb8f` (feat)

## Files Created/Modified

- `src/components/ui/AnimatedSection.tsx` — `"use client"` scroll reveal wrapper with `useReducedMotion`, `whileInView`, viewport margin -80px
- `src/components/ui/Button.tsx` — `"use client"` with 3 variants, 3 sizes, renders as Link or button. Extends `ButtonHTMLAttributes`
- `src/components/ui/Card.tsx` — Server component, `hover` prop toggles lift/glow effect, no transition-all
- `src/components/ui/SectionHeader.tsx` — Server component, `centered` prop, `font-[family-name:var(--font-libre)]` for title
- `src/lib/constants.ts` — 8 exports: `siteConfig`, `navLinks`, `services`, `housing`, `team`, `testimonials`, `faq`, `stats`. 8 exported interfaces. Phone numbers from static HTML (727-563-6540 resident, 727-710-6930 partner)

## Decisions Made

- **Explicit `useReducedMotion()`** — MASTER.md requires disabling transforms for reduced motion, not just opacity. Framer Motion's automatic handling would still animate opacity, so explicit hook ensures `y: prefersReduced ? 0 : 24`
- **Button is `"use client"`** — supports onClick handlers for any future interactive use; server rendering works but client directive adds zero cost at this scale
- **Replaced Plan 02 constants.ts** — the minimal bootstrap had placeholder phone numbers (813 area code) and missing exports; replaced entirely as planned

## Deviations from Plan

None — plan executed exactly as written.

The constants.ts replacement of the Plan 02 minimal bootstrap was the expected behavior per the plan's explicit instructions: "If Plan 02 created a minimal constants.ts: Replace it entirely with this complete version."

## Issues Encountered

None.

## Next Phase Readiness

- All four UI primitives ready for import in Phase 3 page components
- `constants.ts` provides typed content for every page section
- `AnimatedSection` wraps any content for scroll-triggered reveals
- `Button` handles all CTA patterns: primary gold, secondary outlined, ghost text, with Link or button rendering
- Phase 1 Foundation complete — scaffold, layout shell, UI components, and content data all in place for Phase 2 (CMS) and Phase 3 (Pages)

---
*Phase: 01-foundation*
*Completed: 2026-03-18*

## Self-Check: PASSED

- FOUND: src/components/ui/AnimatedSection.tsx
- FOUND: src/components/ui/Button.tsx
- FOUND: src/components/ui/Card.tsx
- FOUND: src/components/ui/SectionHeader.tsx
- FOUND: src/lib/constants.ts
- FOUND: .planning/phases/01-foundation/01-03-SUMMARY.md
- FOUND: commit 92c333e (Task 1 — UI primitives)
- FOUND: commit eeecb8f (Task 2 — constants.ts)
