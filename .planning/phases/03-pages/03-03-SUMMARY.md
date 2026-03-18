---
phase: 03-pages
plan: "03"
subsystem: pages
tags: [partners, resources, faq, accordion, accessibility, referral]
dependency_graph:
  requires: []
  provides: [partners-page, resources-page, faq-accordion]
  affects: [navigation, site-map]
tech_stack:
  added: []
  patterns: [react-server-component, client-component, accordion-toggle, aria-accessibility]
key_files:
  created:
    - src/app/(site)/partners/page.tsx
    - src/app/(site)/resources/page.tsx
    - src/components/resources/FaqAccordion.tsx
  modified: []
decisions:
  - No referral form — phone-first per CONTEXT.md (phone/email CTAs only)
  - No partner logos section — no partner data in constants.ts
  - No downloadable resources — FAQ is primary content per research
  - FaqAccordion single-open accordion pattern with null state for all-closed default
metrics:
  duration: "2 min"
  completed: "2026-03-18"
  tasks_completed: 2
  files_modified: 3
---

# Phase 03 Plan 03: Partners and Resources Pages Summary

Partners and Resources pages built — two audience-specific pages serving referring reentry professionals (probation officers, parole agents) and general information seekers with an accessible interactive FAQ accordion.

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Build Partners page with referral process and partner phone CTA | db29fc4 | src/app/(site)/partners/page.tsx |
| 2 | Build FaqAccordion component and Resources page | cbbee91 | src/components/resources/FaqAccordion.tsx, src/app/(site)/resources/page.tsx |

## What Was Built

### Partners Page (`/partners`)
- Page banner with professional tone: "Partner With Us" targeting probation officers, parole agents, and reentry coordinators
- Why Partner section: 3 value cards (Structured Environment, Employment Focus, Open Communication) with staggered AnimatedSection delays
- Referral Process section on bg-bg-surface: 3 numbered steps (Contact Us → Client Applies → We Coordinate) matching the Home page pattern
- Contact CTA: Partner phone `727-710-6930` displayed at `text-3xl font-bold text-primary`, tel: link, email fallback, two CTA buttons
- Resident redirect footer: subtle "Are you looking for housing for yourself? Apply here" note at bottom

### FaqAccordion Component (`src/components/resources/FaqAccordion.tsx`)
- `"use client"` — requires state for interactive toggle
- `useState<number | null>(null)` — single-open pattern, null = all closed
- Keyboard accessible `<button>` elements (not divs)
- `aria-expanded`, `aria-controls`, `id` on answer panel for full ARIA compliance
- ChevronDown icon rotates 180deg using `transition-[transform] duration-200` (not `transition-all`)
- Clicking open item closes it; clicking different item swaps

### Resources Page (`/resources`)
- Page banner with informational tone
- FAQ section: all 7 items from `faq[]` in `max-w-3xl mx-auto` centered layout
- "Still Have Questions?" contact cards — resident phone (727-563-6540) and partner line (727-710-6930) as tel: links
- CTA: Apply Now (/apply) and Contact Us (/contact) buttons

## Deviations from Plan

None — plan executed exactly as written.

## Verification

- `npm run build` completed without errors — 7 static routes including /partners and /resources
- No `transition-all` in any new files
- No partner logos section (correctly omitted — no data)
- No downloadable resources (correctly omitted — FAQ is primary content)
- Partners page: partner phone prominently displayed, 3-step referral process, phone + email CTAs
- Resources page: FaqAccordion renders all 7 FAQ items, keyboard accessible buttons with aria attributes
- Both pages: responsive at all breakpoints, grain texture applied to banners
