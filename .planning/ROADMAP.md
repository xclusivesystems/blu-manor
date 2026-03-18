# Roadmap: Blu Manor

## Overview

Four phases deliver a full Next.js rebuild of blumanor.org. Phase 1 produces the scaffold and design system so every subsequent phase builds on a consistent foundation. Phase 2 wires in Sanity CMS so content is decoupled from code before any pages are written. Phase 3 builds all eight pages against real CMS data. Phase 4 ships the site to production with SEO infrastructure, GA4, and DNS verified.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Next.js scaffold, Tailwind 4 dark theme, shared layout, and reusable components (completed 2026-03-18)
- [ ] **Phase 2: CMS** - Sanity project, schemas, Studio at /studio, and ISR revalidation
- [ ] **Phase 3: Pages** - All eight pages built against live CMS data and design system
- [ ] **Phase 4: Ship** - SEO infrastructure, GA4, Vercel deploy, DNS verification

## Phase Details

### Phase 1: Foundation
**Goal**: The project compiles with the correct tech stack, design tokens, shared layout, and reusable primitives — every future page starts from a working, styled shell
**Depends on**: Nothing (first phase)
**Requirements**: SCAF-01, SCAF-02, SCAF-03, SCAF-04, SCAF-05
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts without errors and renders the dark navy/gold theme at localhost
  2. Header with working mobile menu and Footer appear on every route
  3. AnimatedSection scroll reveals trigger correctly in the browser
  4. Button, Card, and SectionHeader components render with correct design system styles
  5. `lib/constants.ts` exports siteConfig, navLinks, services, housing, team, testimonials, FAQ, and stats without TypeScript errors
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Next.js scaffold, Tailwind 4 dark theme tokens, route group layouts, font loading
- [ ] 01-02-PLAN.md — Header with mobile menu, Footer, and layout shell wiring
- [ ] 01-03-PLAN.md — AnimatedSection, Button, Card, SectionHeader primitives and constants.ts

### Phase 2: CMS
**Goal**: Sanity CMS is connected to the project, all content schemas exist, the Studio is accessible at /studio, and ISR revalidation is wired so content changes reflect on the site
**Depends on**: Phase 1
**Requirements**: CMS-01, CMS-02, CMS-03, CMS-04
**Success Criteria** (what must be TRUE):
  1. Sanity Studio loads at /studio with schemas for Housing, Team, Testimonial, Partner, Resource, and FAQ
  2. A content change in Sanity Studio triggers ISR revalidation and the updated content appears on the site within 60 seconds
  3. Pages that fetch Sanity data fall back gracefully to constants.ts values when Sanity returns no data
  4. `NEXT_PUBLIC_SANITY_PROJECT_ID` and related env vars are documented and working
**Plans**: TBD

Plans:
- [ ] 02-01: Sanity project initialization and all content schemas
- [ ] 02-02: Studio route group, ISR revalidation webhook, and data fetching layer

### Phase 3: Pages
**Goal**: All eight pages are fully built, styled to the design system, pulling content from constants.ts — both resident and partner audiences can complete their full journey
**Depends on**: Phase 1
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08
**Success Criteria** (what must be TRUE):
  1. A prospective resident can navigate from Home through Housing to Apply, complete the intake form, and receive confirmation that it was submitted to Google Sheets
  2. A referring partner can find the Partners page, review the referral process, and reach the Contact page with both phone numbers visible
  3. All eight pages render correctly on a 375px mobile screen with no horizontal scroll
  4. The Apply form validates all required fields and rejects submission with a visible error if any are blank
  5. Framer Motion scroll animations play on sections across all pages without layout shift
**Plans**: 4 plans

Plans:
- [ ] 03-01-PLAN.md — Home page (hero, services, timeline, housing preview, stats, testimonials, CTA) and About page (mission, story, values, stats)
- [ ] 03-02-PLAN.md — Housing page (listing cards, amenities, eligibility) and Program page (services, rules, timeline, FAQ preview)
- [ ] 03-03-PLAN.md — Partners page (referral process, partner phone CTA) and Resources page (FAQ accordion)
- [ ] 03-04-PLAN.md — Contact page (audience cards, Google Maps) and Apply page (form with Google Sheets submission) plus MobileCtaBar

### Phase 4: Ship
**Goal**: The site is live at blumanor.org with GA4 tracking active, JSON-LD structured data indexed, sitemap submitted, and all production env vars confirmed
**Depends on**: Phase 3
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, DEP-01, DEP-02, DEP-03
**Success Criteria** (what must be TRUE):
  1. blumanor.org loads the Next.js site over HTTPS with Cloudflare proxy OFF
  2. Google Rich Results Test validates NonprofitOrganization + LocalBusiness JSON-LD on the Home page
  3. /sitemap.xml lists all eight pages and /robots.txt links to it
  4. GA4 real-time report shows a pageview when visiting the live site
  5. A content edit in Sanity Studio reflects on the live site within 60 seconds (Sanity webhook confirmed in production)
**Plans**: TBD

Plans:
- [ ] 04-01: SEO infrastructure (JSON-LD, sitemap, robots, OpenGraph image)
- [ ] 04-02: Vercel deploy, env vars, DNS verification, and Sanity webhook production config

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 3/3 | Complete   | 2026-03-18 |
| 2. CMS | 0/2 | Not started | - |
| 3. Pages | 0/4 | Not started | - |
| 4. Ship | 0/2 | Not started | - |
