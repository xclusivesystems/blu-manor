# Requirements: Blu Manor

**Defined:** 2026-03-17
**Core Value:** Make it effortless for someone reentering the community to find safe housing and apply — while building trust with both residents and referring partners.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Scaffold

- [x] **SCAF-01**: Next.js App Router project with TypeScript, Tailwind 4, `@theme inline` dark theme tokens from design system
- [x] **SCAF-02**: Shared layout with Header (nav + mobile menu) and Footer
- [x] **SCAF-03**: AnimatedSection component (Framer Motion scroll reveals)
- [x] **SCAF-04**: Reusable UI primitives (Button, Card, SectionHeader)
- [x] **SCAF-05**: `lib/constants.ts` with all site content (siteConfig, navLinks, services, housing, team, testimonials, FAQ, stats)

### CMS

- [ ] **CMS-01**: Sanity CMS project with schemas for Housing, Team, Testimonial, Partner, Resource, FAQ
- [ ] **CMS-02**: Sanity Studio mounted at `/studio` with isolated route group layout
- [ ] **CMS-03**: ISR revalidation with Sanity webhook (60s baseline + on-demand)
- [ ] **CMS-04**: Sanity data fetching with `constants.ts` fallback

### Pages

- [x] **PAGE-01**: Home page — hero, values cards, how-it-works timeline, housing preview, impact stats, testimonials, partner logos, CTA
- [x] **PAGE-02**: About page — mission, story, team members (from Sanity)
- [x] **PAGE-03**: Housing page — listing cards with pricing, features, availability (from Sanity)
- [x] **PAGE-04**: Program page — program details, rules, what's included, timeline
- [ ] **PAGE-05**: Partners page — partner logos/info (from Sanity), referral process, CTA
- [ ] **PAGE-06**: Resources page — downloadable resources, FAQ accordion (from Sanity)
- [ ] **PAGE-07**: Contact page — contact info cards, Google Maps embed
- [ ] **PAGE-08**: Apply page — full intake form with validation, Google Sheets submission via existing Apps Script URL

### SEO

- [ ] **SEO-01**: JSON-LD structured data (NonprofitOrganization + LocalBusiness)
- [ ] **SEO-02**: Dynamic sitemap.ts with all pages
- [ ] **SEO-03**: robots.ts linking to sitemap
- [ ] **SEO-04**: OpenGraph image (static or dynamic)
- [ ] **SEO-05**: GA4 tracking via `NEXT_PUBLIC_GA_ID` env var

### Deploy

- [ ] **DEP-01**: Vercel deployment with production env vars
- [ ] **DEP-02**: DNS verified (blumanor.org, Cloudflare proxy OFF)
- [ ] **DEP-03**: Sanity webhook configured for revalidation

## v2 Requirements

### Enhancements

- **ENH-01**: Resident portal with application status tracking
- **ENH-02**: Partner referral dashboard
- **ENH-03**: Blog/news section for success stories
- **ENH-04**: DERRECK chatbot widget for 24/7 inquiries
- **ENH-05**: SMS notifications for application status updates

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog | Client doesn't produce blog content |
| DERRECK chatbot | Low traffic, phone/email sufficient |
| Stripe/payments | Rent handled offline |
| User accounts/auth | No resident portal in v1 |
| Mobile app | Web only |
| 3D hero / R3F | Too heavy for nonprofit site |
| Resend email | Contact form uses Google Sheets instead |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCAF-01 | Phase 1 | Complete |
| SCAF-02 | Phase 1 | Complete |
| SCAF-03 | Phase 1 | Complete |
| SCAF-04 | Phase 1 | Complete |
| SCAF-05 | Phase 1 | Complete |
| CMS-01 | Phase 2 | Pending |
| CMS-02 | Phase 2 | Pending |
| CMS-03 | Phase 2 | Pending |
| CMS-04 | Phase 2 | Pending |
| PAGE-01 | Phase 3 | Complete |
| PAGE-02 | Phase 3 | Complete |
| PAGE-03 | Phase 3 | Complete |
| PAGE-04 | Phase 3 | Complete |
| PAGE-05 | Phase 3 | Pending |
| PAGE-06 | Phase 3 | Pending |
| PAGE-07 | Phase 3 | Pending |
| PAGE-08 | Phase 3 | Pending |
| SEO-01 | Phase 4 | Pending |
| SEO-02 | Phase 4 | Pending |
| SEO-03 | Phase 4 | Pending |
| SEO-04 | Phase 4 | Pending |
| SEO-05 | Phase 4 | Pending |
| DEP-01 | Phase 4 | Pending |
| DEP-02 | Phase 4 | Pending |
| DEP-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 25 total
- Mapped to phases: 25
- Unmapped: 0

---
*Requirements defined: 2026-03-17*
*Last updated: 2026-03-17 — traceability updated after roadmap creation*
