# Blu Manor — Second Chance Transitional Housing

## What This Is

A full Next.js rebuild of blumanor.org — a nonprofit transitional housing website serving people reentering the community in Tampa Bay, FL. The current static HTML site works but looks cookie-cutter. The rebuild brings it to the agency standard: Next.js App Router, Tailwind 4, Sanity CMS for content management, and a custom warm dark navy/gold theme that communicates safety, dignity, and trust. Two audiences: potential residents looking to apply, and referring partners/agencies evaluating the program.

## Core Value

Make it effortless for someone reentering the community to find safe housing and apply — while building trust with both residents and referring partners through a professional, dignified presentation.

## Requirements

### Validated

<!-- Existing site capabilities that must carry forward -->

- Existing Google Sheets intake form integration (Apps Script URL)
- GA4 tracking (G-H8JCFW9RRT)
- Google Search Console verified
- Domain: blumanor.org on Vercel with Cloudflare DNS

### Active

- [ ] Next.js App Router scaffold with Tailwind 4 dark theme
- [ ] 8 pages: Home, About, Housing, Program, Partners, Resources, Contact, Apply
- [ ] Sanity CMS for managing Housing, Team, Testimonials, Partners, Resources, FAQ
- [ ] Google Sheets intake form (Apply page) — preserve existing Apps Script integration
- [ ] Contact form via Resend email API
- [ ] Responsive design (mobile-first, 375px+)
- [ ] JSON-LD structured data (NonprofitOrganization + LocalBusiness)
- [ ] Dynamic sitemap and robots.txt
- [ ] OpenGraph image generation
- [ ] Framer Motion scroll animations
- [ ] GA4 tracking via NEXT_PUBLIC_GA_ID env var
- [ ] Sanity Studio at /studio with ISR revalidation webhook

### Out of Scope

- Blog — not needed for this client
- DERRECK chatbot widget — not needed
- 3D hero / React Three Fiber — too heavy for this use case
- GSAP — Framer Motion sufficient
- Stripe/payments — rent is handled offline
- User accounts / auth — no resident portal
- Mobile app — web only

## Context

**Existing site:** Static HTML/CSS/JS at `projects/blu-manor/`. 8 pages with consistent header/footer, full intake form that POSTs to Google Apps Script. Content is well-written and can be migrated to constants.ts and Sanity.

**Business info:**
- Address: Tampa Bay Area, FL (multiple locations — exact addresses pending from client)
- Phone (residents): (727) 563-6540
- Phone (partners): (727) 710-6930
- Email: info@blumanor.org
- Pricing: $750/month all-inclusive (furnished, utilities, Wi-Fi)
- Hours: Thu-Sun (open days for visits)
- Services: Transitional housing, employment support, supervision compliance, community reentry

**Design system:** Detailed in `design-system/blu-manor/MASTER.md`
- Dark theme: Deep navy (#0F1623) → navy surface (#162032) → card (#1D2B42) → elevated (#263652)
- Primary: Muted gold (#C9A84C)
- Accent: Soft steel blue (#7BA7D9)
- Fonts: Libre Baskerville (headings) + Source Sans 3 (body)
- Tinted navy shadows, grain texture, layered surfaces

**Google Sheets integration:**
- Apps Script URL: `https://script.google.com/macros/s/AKfycbyAGohOTYu96rDRWgylkdlCL0clrjcBmlAzEhROw-N_S5PVkpnB-GyPSihKRgIINWSt/exec`
- Submits via client-side fetch (no-cors, JSON body)
- Fields: fullName, dob, phone, email, currentAddress, supervision, referringAgency, officerContact, employer, position, monthlyIncome, workSchedule, moveInDate, emergencyContact, ackRules, signature, signatureDate

**CRM record:** ID d9982957-5b5c-4eac-b88c-953481b78c8d
- Pending TODOs: founder name/bio, exact property addresses

## Constraints

- **Stack**: Next.js App Router + Tailwind 4 + Sanity CMS (per agency standard in skills/build-website/SKILL.md)
- **Brand**: Must use Libre Baskerville + Source Sans 3 fonts, navy/gold palette
- **Deployment**: Vercel with Cloudflare proxy OFF
- **Domain**: blumanor.org (already configured)
- **GA4**: G-H8JCFW9RRT (existing, must preserve)
- **Google Sheets**: Existing Apps Script URL must continue working
- **Design**: Follow design-system/blu-manor/MASTER.md — warm dark theme, not institutional
- **No transition-all**: Agency rule enforced by hooks

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Full rebuild over incremental migration | Static HTML → Next.js is cleaner as rebuild. Content migrates, code doesn't. | — Pending |
| Sanity CMS for content | Client needs to manage housing listings, team, testimonials, partners without developer | — Pending |
| No blog | Client doesn't produce blog content, unnecessary complexity | — Pending |
| No chatbot | Low traffic volume, phone/email sufficient for inquiries | — Pending |
| Keep Google Sheets form | Already working, client familiar with it, no reason to change | — Pending |
| Dark theme | Matches design system, differentiates from generic nonprofit sites | — Pending |

---
*Last updated: 2026-03-17 after initialization*
