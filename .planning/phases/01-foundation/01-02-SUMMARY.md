---
phase: 01-foundation
plan: 02
subsystem: ui
tags: [nextjs, header, footer, mobile-menu, lucide-react, constants, layout]

# Dependency graph
requires:
  - 01-01
provides:
  - Sticky Header with desktop nav, mobile hamburger menu, and Apply CTA
  - 4-column Footer with brand, links, resources, contact, and XclusiveSystems credit
  - Minimal constants.ts bootstrap (siteConfig + navLinks) for Plan 03 to expand
  - (site) layout shell complete — Header/Footer wired, content offset from fixed header
affects: [03-pages, 04-deploy]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Fixed header with bg-bg-surface/95 backdrop-blur-sm — sticky nav pattern"
    - "Mobile menu via useState + transition-[max-height,opacity] duration-300 — no scroll lock"
    - "Footer 4-column md:grid-cols-4 — brand/links/resources/contact layout"
    - "pt-[72px] on <main> to offset fixed header height"

key-files:
  created:
    - src/components/layout/Header.tsx
    - src/components/layout/Footer.tsx
    - src/lib/constants.ts
  modified:
    - src/app/(site)/layout.tsx

key-decisions:
  - "navLinks excludes Apply from the array — Apply is rendered as a separate CTA button in both Header and Footer, keeping the link list clean at 7 items"
  - "Mobile menu uses max-h-screen (not fixed px value) to handle variable content height — consistent with jnewsbbq pattern"
  - "constants.ts bootstrap created in Plan 02 wave (same wave as Plan 03) to avoid import errors — Plan 03 will expand with full content arrays"

patterns-established:
  - "Header: fixed top-0 w-full z-50 bg-bg-surface/95 backdrop-blur-sm border-b border-border"
  - "Mobile panel: transition-[max-height,opacity] duration-300, max-h-screen/max-h-0 toggle"
  - "Footer bottom bar: mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between"

requirements-completed: [SCAF-02]

# Metrics
duration: 1min
completed: 2026-03-18
---

# Phase 1 Plan 02: Header + Footer Layout Shell Summary

**Sticky Header with desktop nav, mobile hamburger menu (useState), and Apply CTA — plus 4-column Footer with brand, links, resources, contact, and XclusiveSystems credit — wired into (site) layout**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-03-18T22:56:40Z
- **Completed:** 2026-03-18T22:57:40Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Built Header.tsx as a "use client" component with fixed sticky nav, logo + brand name + tagline, desktop nav links (7 items), Apply CTA button with gold background, and hamburger mobile menu with max-height/opacity transition
- Built Footer.tsx as a server component with 4-column grid (Brand | Quick Links | Resources | Contact), dual phone numbers with Resident/Partner labels, email, MapPin icon for address, and "Built by XclusiveSystems" credit in the bottom bar
- Created minimal constants.ts bootstrap with `siteConfig` and `navLinks` exports to satisfy Header/Footer imports without blocking Plan 03 which will expand the file
- Wired both components into `src/app/(site)/layout.tsx` with `<main className="min-h-screen pt-[72px]">` to prevent content hiding behind the fixed header

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Header with mobile menu and Footer components** - `872d9d1` (feat)
2. **Task 2: Wire Header and Footer into (site) layout** - `477f910` (feat)

**Plan metadata:** _(final commit below)_

## Files Created/Modified

- `src/components/layout/Header.tsx` — Fixed sticky header with logo/tagline, desktop nav, Apply CTA, mobile menu toggle (useState), mobile nav panel with transition-[max-height,opacity]
- `src/components/layout/Footer.tsx` — 4-column footer: brand description, quick links (first 4 navLinks), resources (last 3 navLinks + Apply), contact info with icons, copyright + XclusiveSystems credit
- `src/lib/constants.ts` — Bootstrap with SiteConfig/NavLink interfaces, `siteConfig` object, `navLinks` array (7 pages excluding Apply which is a CTA)
- `src/app/(site)/layout.tsx` — Added Header/Footer imports and render, wrapped children in `<main className="min-h-screen pt-[72px]">`

## Decisions Made

- **Apply excluded from navLinks array** — Apply is rendered as a standalone CTA button (gold background) in both Header and Footer nav, not as a regular nav link. This keeps the `navLinks` array clean at 7 items and gives Apply visual distinction as the primary conversion action.
- **Mobile menu uses max-h-screen** — Rather than a fixed pixel value for the open state, `max-h-screen` handles variable content height gracefully. Consistent with jnewsbbq proven pattern.
- **constants.ts bootstrapped in Plan 02** — Plan 02 and Plan 03 run in the same wave (wave 2). To avoid TypeScript import errors during Plan 02 compilation, a minimal constants.ts was created here. Plan 03 will expand it with services, housing, team, testimonials, FAQ, and stats arrays.
- **No scroll lock on mobile menu** — Skipped `document.body.style.overflow = 'hidden'` to avoid hydration mismatch. The max-height transition provides clear visual feedback without DOM manipulation.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed duplicate Apply link from navLinks expansion**
- **Found during:** Post-task 2 verification
- **Issue:** constants.ts was expanded to full content (services, housing, team, testimonials, FAQ, stats) and navLinks gained an 8th "Apply" entry. Header was iterating all navLinks PLUS rendering a separate Apply CTA button — Apply would appear twice in both desktop and mobile nav.
- **Fix:** Added `.filter((link) => link.href !== "/apply")` to both Header navLinks maps. Footer had a redundant hard-coded `<Link href="/apply">` that was removed since `navLinks.slice(4)` now includes Apply naturally.
- **Files modified:** `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- **Commit:** `33eccd1`

### Forward Work Done

The auto-sync hook expanded `constants.ts` beyond the minimal bootstrap to include the full content that Plan 03 was going to build. Plan 03 can now either skip the constants.ts task or verify/expand the content instead of building from scratch.

**Full content now in constants.ts:**
- All 8 type interfaces (SiteConfig, NavLink, Service, HousingOption, TeamMember, Testimonial, FaqItem, Stat)
- Real phone numbers from static site (727-563-6540 / 727-710-6930)
- 4 services, 1 housing option, 2 team placeholders, 3 testimonials, 7 FAQ items, 3 stats

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Header appears on every page route with correct nav links and Apply CTA
- Mobile menu opens/closes via hamburger toggle
- Footer renders with 4-column layout and XclusiveSystems credit
- Both components use only design system tokens (bg-bg-surface, text-primary, text-muted, border-border, etc.)
- No `transition-all` — all transitions specify exact properties
- `npm run build` passes with 0 errors
- Ready for Plan 03: AnimatedSection, Button, Card, SectionHeader UI primitives + expanded constants.ts

## Self-Check: PASSED

All files exist and all commits are verified:
- FOUND: `src/components/layout/Header.tsx`
- FOUND: `src/components/layout/Footer.tsx`
- FOUND: `src/lib/constants.ts`
- FOUND: `src/app/(site)/layout.tsx`
- FOUND: `.planning/phases/01-foundation/01-02-SUMMARY.md`
- FOUND commit: `872d9d1` (Task 1)
- FOUND commit: `477f910` (Task 2)
- FOUND commit: `33eccd1` (constants expansion + fix)

---
*Phase: 01-foundation*
*Completed: 2026-03-18*
