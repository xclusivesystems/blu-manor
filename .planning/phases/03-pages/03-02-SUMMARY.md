---
phase: 03-pages
plan: "02"
subsystem: pages
tags: [housing, program, next-js, framer-motion, responsive]
dependency_graph:
  requires:
    - 01-03 (UI primitives — AnimatedSection, Button, Card, SectionHeader, constants.ts)
  provides:
    - /housing route — Housing listings page
    - /program route — Program details page
  affects:
    - Nav links (Housing, Program already in navLinks constant)
tech_stack:
  added: []
  patterns:
    - data.map() for zero-code content expansion
    - Lucide icon map for string-to-component resolution
    - faq.slice(0, 3) for partial FAQ preview
key_files:
  created:
    - src/app/(site)/housing/page.tsx
    - src/app/(site)/program/page.tsx
  modified: []
decisions:
  - Housing cards use grid grid-cols-1 md:grid-cols-2 with single-card centering via md:col-span-2 max-w-2xl — future cards auto-expand grid
  - Program services use dynamic icon map (Record<string, React.ElementType>) keyed to icon string in constants.ts
  - FAQ preview uses faq.slice(0, 3) — no prop needed, always shows first three
metrics:
  duration: "2 min"
  completed: "2026-03-18"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Phase 03 Plan 02: Housing and Program Pages Summary

**One-liner:** Housing page with all-inclusive listing cards via `housing.map()` and Program page with services grid, rules list, 4-step timeline, and FAQ preview — both responsive, dark-themed, Framer Motion animated.

## What Was Built

### Task 1 — Housing Page (`/housing`)
- **Page Banner** — `py-24` hero on `bg-bg-surface` with grain overlay
- **Housing Listings** — `housing.map()` renders cards with price (`text-4xl text-primary font-libre`), availability badge (green dot + text), features checklist with `CheckCircle` icons, and Apply Now CTA
- **Single-card centering** — `md:col-span-2 max-w-2xl mx-auto` centers lone card; adding a second item in `constants.ts` auto-creates a side-by-side grid
- **What's Included** — 2x3 amenities icon grid: Wifi, Tv, Shirt, Zap, Bed, Home with label text
- **Eligibility** — 5-item checklist with `Check` icons on `bg-bg-card` tiles
- **CTA** — Apply Now (primary) + Call Us (`tel:siteConfig.phoneResident`) (secondary)

### Task 2 — Program Page (`/program`)
- **Page Banner** — matching pattern, "Our Program" headline
- **What We Offer** — `services.map()` with `Record<string, React.ElementType>` icon map; 2x2 card grid with icon badge (`bg-primary-dim`), title, description
- **House Rules** — 7-item static list with `ShieldCheck` icons on `bg-bg-card` tiles
- **What To Expect** — 4-step timeline grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`); numbered gold badge + icon + title + description per step
- **FAQ Preview** — `faq.slice(0, 3)` renders first 3 Q&A pairs; "See All FAQs" → `/resources`
- **CTA** — Apply Now + Contact Us buttons

## Verification

- `npm run build` passes cleanly — 10 static pages generated including `/housing` and `/program`
- No `transition-all` anywhere in either file
- `housing.map()` confirmed at line 75 of housing/page.tsx
- `services.map()` at line 109 and `faqPreview.map()` at line 215 of program/page.tsx
- Design system tokens only (bg-bg-deep, bg-bg-surface, bg-bg-card, text-primary, text-muted, etc.)
- AnimatedSection stagger delays applied (0.1s increments)

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check

- [x] `src/app/(site)/housing/page.tsx` — FOUND
- [x] `src/app/(site)/program/page.tsx` — FOUND
- [x] Commit `99e3a13` (Housing page) — FOUND
- [x] Commit `6db2e1e` (Program page) — FOUND
- [x] `npm run build` passed — both routes in output

## Self-Check: PASSED
