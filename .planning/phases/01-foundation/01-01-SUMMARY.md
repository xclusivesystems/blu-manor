---
phase: 01-foundation
plan: 01
subsystem: ui
tags: [nextjs, tailwind4, framer-motion, lucide-react, typescript, next-font, route-groups]

# Dependency graph
requires: []
provides:
  - Next.js 16 App Router project scaffold with TypeScript
  - Tailwind 4 @theme inline dark navy/gold design tokens (17 tokens)
  - (site) route group layout with Libre Baskerville + Source Sans 3 fonts
  - (studio) route group layout pre-wired for Phase 2 Sanity Studio
  - cn() class merging utility in lib/utils.ts
  - framer-motion and lucide-react installed
  - public/img/logo.png copied from static site
affects: [02-content, 03-pages, 04-deploy]

# Tech tracking
tech-stack:
  added:
    - "Next.js 16.2.0 (App Router)"
    - "Tailwind CSS 4 via @tailwindcss/postcss"
    - "framer-motion ^12"
    - "lucide-react"
    - "next/font/google (Libre Baskerville, Source Sans 3)"
  patterns:
    - "Tailwind 4 @theme inline for design tokens (no tailwind.config.ts)"
    - "Route groups for isolated document shells — no root app/layout.tsx"
    - "CSS custom properties in :root, mapped to Tailwind via @theme inline"
    - "next/font/google with CSS variable exposure for heading/body fonts"

key-files:
  created:
    - src/app/globals.css
    - src/app/(site)/layout.tsx
    - src/app/(site)/page.tsx
    - src/app/(studio)/layout.tsx
    - src/lib/utils.ts
    - public/img/logo.png
  modified:
    - next.config.ts
    - postcss.config.mjs
    - .gitignore

key-decisions:
  - "No root app/layout.tsx — each route group ((site), (studio)) provides its own html/body shell to avoid hydration conflicts"
  - "Tailwind 4 @theme inline approach — no tailwind.config.ts needed"
  - "cn() utility hand-rolled with no clsx dependency — keeps dependencies minimal"
  - "Scaffolded in temp directory then merged into static site repo to preserve static HTML for reference during rebuild"

patterns-established:
  - "Color tokens: bg-bg-deep, text-primary, border-border, text-muted — always use token names not hex values"
  - "Font headings: font-[family-name:var(--font-libre)] on all h1/h2/h3"
  - "No transition-all anywhere — specify exact properties"
  - "All shadows tinted navy: rgba(15,22,35,0.4) or gold glow rgba(201,168,76,0.08)"

requirements-completed: [SCAF-01]

# Metrics
duration: 3min
completed: 2026-03-18
---

# Phase 1 Plan 01: Next.js Scaffold + Tailwind 4 Tokens Summary

**Next.js 16 App Router scaffolded with Tailwind 4 @theme inline dark navy/gold tokens, route group document shells, next/font/google Libre Baskerville and Source Sans 3, and cn() utility**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-18T22:51:28Z
- **Completed:** 2026-03-18T22:54:03Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments

- Scaffolded Next.js 16 App Router project with TypeScript, ESLint, and Tailwind 4 into the existing static site repo
- Replaced default globals.css with all 17 Blu Manor dark navy/gold design tokens in @theme inline
- Created (site) layout with Libre Baskerville + Source Sans 3 via next/font/google, plus home page stub
- Created bare (studio) layout shell for Phase 2 Sanity Studio
- Created cn() class merging utility with no external dependency

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js project and configure Tailwind 4 tokens** - `3896e68` (feat)
2. **Task 2: Create route group layouts with font loading** - `d2e9cad` (feat)

**Plan metadata:** _(final commit below)_

## Files Created/Modified

- `src/app/globals.css` - Complete Blu Manor @theme inline tokens: 17 color tokens, body styles, scrollbar, selection, .grain utility
- `src/app/(site)/layout.tsx` - Site document shell with Libre Baskerville + Source Sans 3 fonts via CSS variables, site metadata
- `src/app/(site)/page.tsx` - Home page stub for visual token/font verification (dark navy, gold, parchment text)
- `src/app/(studio)/layout.tsx` - Bare html/body shell pre-wired for Phase 2 Sanity Studio
- `src/lib/utils.ts` - cn() class merging utility (string | undefined | null | false | Record<string, boolean>)
- `public/img/logo.png` - Logo copied from static site images/logo.png
- `next.config.ts` - cdn.sanity.io remotePattern pre-wired for Phase 2
- `postcss.config.mjs` - @tailwindcss/postcss (Tailwind 4 — already correct from scaffold)
- `.gitignore` - Added .next/, node_modules/, .env patterns

## Decisions Made

- **No root app/layout.tsx** — deleted the create-next-app generated root layout.tsx immediately; each route group owns its document shell to prevent hydration conflicts
- **Scaffolded to temp directory** — static site files blocked scaffold in-place; scaffolded to `blu-manor-next/` then merged files in; static HTML preserved for content reference during rebuild
- **cn() without clsx** — hand-rolled utility keeps dependencies lean; the implementation handles all needed cases (string, object, falsy)
- **No tailwind.config.ts** — Tailwind 4 uses @theme inline exclusively; file deleted from scaffold

## Deviations from Plan

None — plan executed exactly as written.

The scaffold-to-temp-directory workaround was a mechanical step (static HTML files blocked in-place scaffold), not a deviation from plan intent. All plan requirements and anti-patterns were followed.

## Issues Encountered

- `create-next-app` refused to scaffold in the existing project directory due to static HTML files conflict — resolved by scaffolding to `projects/blu-manor-next/` then copying files into `projects/blu-manor/` (temp directory removed after copy)

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Project compiles clean (`npm run build` passes, `/` route renders as static)
- All 17 design tokens available as Tailwind utilities (bg-bg-deep, text-primary, text-foreground, etc.)
- Font variables --font-libre and --font-source-sans exposed for component use
- cn() utility ready for import from lib/utils.ts
- (studio)/layout.tsx ready to receive Sanity Studio in Phase 2
- Ready for Plan 02: Header/Footer layout components

---
*Phase: 01-foundation*
*Completed: 2026-03-18*
