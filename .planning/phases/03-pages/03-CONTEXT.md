# Phase 3: Pages - Context

**Gathered:** 2026-03-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all 8 pages (Home, About, Housing, Program, Partners, Resources, Contact, Apply) — styled to the design system, responsive at 375px, with Framer Motion scroll animations and Google Sheets form integration. Content comes from `constants.ts` only (Phase 2 CMS deferred). Both resident and partner audiences can complete their full journey.

</domain>

<decisions>
## Implementation Decisions

### Page Layout & Sections
- Content density: **moderate/balanced** — enough text to inform, broken into digestible sections with headers and cards
- About page: **mission-only** — no team section (team data is TBD). Focus on mission, story, values, and stats
- Hero style: Claude's discretion
- Housing presentation: Claude's discretion (single option currently, but design for potential expansion)

### Apply Form
- Field set: **basic essentials only** — name, phone, email, date of birth, current situation (employed/looking), supervision status (yes/no)
- Submits to Google Sheets
- Form layout (single page vs multi-step): Claude's discretion
- Post-submission confirmation: Claude's discretion

### Scroll Animations
- Intensity: **moderate** — sections fade in with slight upward slide, cards stagger in. Engaging but not flashy
- Replay: **once only** — animate on first scroll-in, then stay visible
- Page transitions: Claude's discretion
- Stat counter animation: Claude's discretion

### Mobile Presentation
- Sticky CTA: **both Call + Apply buttons** fixed at bottom of screen on mobile
- Mobile nav style: Claude's discretion
- FAQ accordion behavior: Claude's discretion
- Mobile form adaptations: Claude's discretion

### Claude's Discretion
- Home page hero style (full-screen, split, or text-focused)
- Housing page layout (single featured option vs card grid)
- Apply form layout (single page vs multi-step wizard)
- Post-submission UX (inline success vs redirect to thank-you page)
- Partners page referral approach (form vs phone/email only)
- Stat counter animation (count-up vs static)
- Page-to-page transitions
- Mobile nav pattern (slide-out drawer vs full-screen overlay)
- FAQ mobile behavior (accordion vs expanded)
- Mobile form touch target sizing

</decisions>

<specifics>
## Specific Ideas

- Two distinct audiences: prospective residents (looking for housing) and referring partners (probation officers, reentry professionals)
- Site tone should be serious and trust-building — this is housing for people reentering the community, not a flashy product
- Phone numbers differ by audience: residents call 727-563-6540, partners call 727-710-6930
- Team data is TBD from client — skip team section entirely for now

</specifics>

<deferred>
## Deferred Ideas

- Phase 2 (Sanity CMS) — deferred by user decision. Content stays in constants.ts
- Team section on About page — blocked on client providing real team member info

</deferred>

---

*Phase: 03-pages*
*Context gathered: 2026-03-18*
