---
phase: 03-pages
plan: 04
subsystem: ui
tags: [nextjs, react, lucide-react, google-sheets, google-maps, forms, mobile]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: UI primitives (Button, Card, SectionHeader, AnimatedSection), constants.ts with siteConfig
provides:
  - Contact page with audience-specific cards, Google Maps embed, and Apply CTA
  - Apply page RSC shell with 4-step process timeline and ApplyForm client component
  - ApplyForm client component with 6-field validation and Google Sheets no-cors submission
  - MobileCtaBar fixed bottom component with Call + Apply buttons (mobile only)
  - Updated (site) layout with MobileCtaBar and pb-20 md:pb-0 mobile bottom padding
affects: [04-cms, future-design, final-deploy]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - RSC shell wrapping client component (apply/page.tsx → ApplyForm.tsx)
    - no-cors fetch to Google Apps Script — resolve without throw = success signal
    - Radio buttons as clickable card buttons (border highlight on selection)
    - Fixed mobile CTA bar using md:hidden + pb-20 on main to prevent content clip

key-files:
  created:
    - src/app/(site)/contact/page.tsx
    - src/app/(site)/apply/page.tsx
    - src/components/apply/ApplyForm.tsx
    - src/components/layout/MobileCtaBar.tsx
  modified:
    - src/app/(site)/layout.tsx

key-decisions:
  - "no-cors fetch to Google Apps Script — opaque response, treat resolve as success; do not read response body"
  - "Radio buttons implemented as styled button elements (not native inputs) for design system token alignment"
  - "MobileCtaBar uses md:hidden; main gets pb-20 md:pb-0 to prevent CTA bar from covering content"

patterns-established:
  - "Client forms: 'use client' component + RSC page shell — allows metadata export at page level"
  - "no-cors Google Sheets pattern: POST → no-cors → catch = error, resolve = success"
  - "Mobile sticky bar: fixed bottom-0 z-40 md:hidden + compensating padding on main element"

requirements-completed: [PAGE-07, PAGE-08]

# Metrics
duration: 3min
completed: 2026-03-18
---

# Phase 03 Plan 04: Contact, Apply, and Mobile CTA Summary

**Contact page with dual audience phone cards and Google Maps embed; Apply page with 6-field Google Sheets form, inline validation, and success confirmation; MobileCtaBar fixed at bottom on mobile completing the full conversion funnel**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-18T23:42:28Z
- **Completed:** 2026-03-18T23:45:26Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Contact page with 4 audience-specific cards (residents phone 727-563-6540, partners phone 727-710-6930, email, location), Google Maps embed, and Apply CTA
- ApplyForm client component with 6 validated fields, custom radio card buttons, Google Sheets submission via no-cors fetch, success confirmation state, and error fallback with phone number
- Apply page RSC shell with 4-step process timeline wrapping the ApplyForm at max-w-2xl
- MobileCtaBar fixed-bottom component (Call + Apply) hidden at md+ breakpoint
- Layout updated with MobileCtaBar and pb-20 md:pb-0 to prevent mobile content clip

## Task Commits

Each task was committed atomically:

1. **Task 1: Build Contact page with audience cards and Google Maps embed** - `7a3e728` (feat)
2. **Task 2: Build ApplyForm component, Apply page, MobileCtaBar, and update layout** - `d4131a6` (feat)

**Plan metadata:** committed after summary creation

## Files Created/Modified
- `src/app/(site)/contact/page.tsx` - Contact page with 4 cards, Google Maps iframe, CTA section
- `src/app/(site)/apply/page.tsx` - Apply page RSC shell with process timeline and ApplyForm
- `src/components/apply/ApplyForm.tsx` - Client form: 6 fields, validation, Google Sheets no-cors, success/error states
- `src/components/layout/MobileCtaBar.tsx` - Fixed bottom mobile CTA bar, md:hidden
- `src/app/(site)/layout.tsx` - Added MobileCtaBar import/render, pb-20 md:pb-0 on main

## Decisions Made
- no-cors fetch to Google Apps Script: opaque response means we cannot read the body — treat promise resolve as success, catch as error. This is the correct pattern for cross-origin GAS forms without a proxy.
- Radio buttons implemented as styled `<button type="button">` elements with border/background state changes rather than native `<input type="radio">` — cleaner design token application, accessible with keyboard via onClick.
- MobileCtaBar placed after `<Footer />` inside `<body>` — fixed positioning takes it out of document flow, so placement in DOM doesn't affect layout.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered
- Existing `next build` process lock from the running dev server — resolved by using `npx tsc --noEmit` for type checking and `curl localhost:3101` for runtime verification. No build errors.

## User Setup Required
None — no external service configuration required. Google Apps Script URL is hardcoded in ApplyForm.tsx per plan spec. Google Maps embed uses a generic Tampa Bay query (TODO comment added for when client provides primary property address).

## Next Phase Readiness
- Contact and Apply pages fully functional; conversion funnel is complete
- Google Sheets intake form ready to receive submissions
- MobileCtaBar live on all mobile visitors
- Phase 03 (Pages) now has all conversion pages built — ready for Phase 04 (CMS) or final deploy

---
*Phase: 03-pages*
*Completed: 2026-03-18*
