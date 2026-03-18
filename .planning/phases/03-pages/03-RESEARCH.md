# Phase 3: Pages - Research

**Researched:** 2026-03-18
**Domain:** Next.js App Router page implementation — 8 pages, Framer Motion scroll animations, Google Sheets form submission
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Content density: **moderate/balanced** — enough text to inform, broken into digestible sections with headers and cards
- About page: **mission-only** — no team section (team data is TBD). Focus on mission, story, values, and stats
- Apply form field set: **basic essentials only** — name, phone, email, date of birth, current situation (employed/looking), supervision status (yes/no)
- Apply form submits to Google Sheets
- Scroll animation intensity: **moderate** — sections fade in with slight upward slide, cards stagger in. Engaging but not flashy
- Scroll animation replay: **once only** — animate on first scroll-in, then stay visible
- Mobile sticky CTA: **both Call + Apply buttons** fixed at bottom of screen on mobile

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

### Deferred Ideas (OUT OF SCOPE)
- Phase 2 (Sanity CMS) — deferred by user decision. Content stays in constants.ts
- Team section on About page — blocked on client providing real team member info
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PAGE-01 | Home page — hero, values cards, how-it-works timeline, housing preview, impact stats, testimonials, partner logos, CTA | Design system homepage sections map 1:1; AnimatedSection + stagger pattern established in Phase 1 |
| PAGE-02 | About page — mission, story, team members (from Sanity) | No Sanity; team section deferred per CONTEXT.md decision; mission/story/values/stats from constants.ts |
| PAGE-03 | Housing page — listing cards with pricing, features, availability (from Sanity) | No Sanity; single HousingOption in constants.ts; Card component ready; design for future expansion |
| PAGE-04 | Program page — program details, rules, what's included, timeline | services[] + faq[] in constants.ts; original program.html is reference; no additional lib needed |
| PAGE-05 | Partners page — partner logos/info (from Sanity), referral process, CTA | No Sanity; no partner data in constants.ts; page uses phone-first referral with partner phone number |
| PAGE-06 | Resources page — downloadable resources, FAQ accordion (from Sanity) | No Sanity; faq[] in constants.ts; accordion = client component with useState; no library needed |
| PAGE-07 | Contact page — contact info cards, Google Maps embed | siteConfig has both phone numbers + email; Maps embed is iframe (no API key needed for embed-only) |
| PAGE-08 | Apply page — full intake form with validation, Google Sheets submission via existing Apps Script URL | Apps Script URL known; fetch with no-cors; form fields decided (basic set); validation = native + state |
</phase_requirements>

---

## Summary

Phase 3 builds all 8 pages on top of the Phase 1 foundation. The stack is already installed and proven: Next.js 16 App Router, Tailwind 4 with CSS custom property tokens, Framer Motion 12, Lucide React, and the AnimatedSection/Button/Card/SectionHeader primitives. No new dependencies are required — every page can be built with what's already in `package.json`.

The most technically complex requirement is PAGE-08 (Apply form). Google Sheets submission uses `fetch` with `mode: 'no-cors'` to the existing Apps Script URL, which means the response cannot be read — success is assumed after the fetch resolves without throwing. The form must show a visible confirmation state and must validate all required fields client-side before submitting. The field set is smaller than the original HTML form (basic essentials only per CONTEXT.md), which simplifies implementation.

The second complexity is the mobile sticky CTA (both Call + Apply buttons fixed at bottom). This requires a client component that conditionally renders a fixed bottom bar on mobile (`md:hidden`), positioned below the main content with enough bottom padding on `<main>` to prevent content from being hidden behind it.

**Primary recommendation:** Build pages as React Server Components where possible; make client components only for interactive elements (accordion FAQ, apply form, sticky CTA bar). Use AnimatedSection with stagger delays of 0.1s between siblings. Reuse Card, Button, SectionHeader from Phase 1 consistently. No new libraries needed.

---

## Standard Stack

### Core (all already installed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.2.0 | App Router pages as RSC | Already installed; page.tsx in (site) route group |
| framer-motion | ^12.38.0 | AnimatedSection scroll reveals | Already installed; AnimatedSection built in Phase 1 |
| lucide-react | ^0.577.0 | All icons | Agency mandate; already installed |
| Tailwind 4 | ^4 | Styling via CSS custom props | Already configured; 17 tokens live in globals.css |

### No New Dependencies Required

All 8 pages can be built with zero new `npm install` calls. Specifically:
- **Form validation**: Native HTML5 + React state (no react-hook-form, zod, or formik needed for a 6-field form)
- **FAQ accordion**: `useState` toggle in a client component (no headlessui, radix, or accordion library)
- **Google Maps**: `<iframe>` embed (no `@react-google-maps/api` — no API key needed)
- **Google Sheets submit**: `fetch()` with `mode: 'no-cors'` (no server action, no API route)
- **Sticky mobile CTA**: `fixed bottom-0` div in a client component (no portal library)

---

## Architecture Patterns

### Recommended File Structure

```
src/app/(site)/
├── page.tsx                  # Home (PAGE-01) — RSC
├── about/
│   └── page.tsx              # About (PAGE-02) — RSC
├── housing/
│   └── page.tsx              # Housing (PAGE-03) — RSC
├── program/
│   └── page.tsx              # Program (PAGE-04) — RSC
├── partners/
│   └── page.tsx              # Partners (PAGE-05) — RSC
├── resources/
│   └── page.tsx              # Resources (PAGE-06) — RSC
├── contact/
│   └── page.tsx              # Contact (PAGE-07) — RSC
└── apply/
    └── page.tsx              # Apply (PAGE-08) — RSC shell wrapping client form

src/components/
├── layout/
│   ├── Header.tsx            # Exists — Phase 1
│   ├── Footer.tsx            # Exists — Phase 1
│   └── MobileCtaBar.tsx      # NEW — sticky Call + Apply buttons (mobile only)
├── ui/
│   ├── AnimatedSection.tsx   # Exists — Phase 1
│   ├── Button.tsx            # Exists — Phase 1
│   ├── Card.tsx              # Exists — Phase 1
│   └── SectionHeader.tsx     # Exists — Phase 1
├── home/
│   └── (optional section components if HomePage gets large)
└── apply/
    └── ApplyForm.tsx         # NEW — "use client" form with validation + fetch
```

### Pattern 1: RSC Page Shell + Client Island

Pages are Server Components by default. Only interactive parts are client components.

```typescript
// src/app/(site)/resources/page.tsx — Server Component
import { faq } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/resources/FaqAccordion"; // "use client"

export default function ResourcesPage() {
  return (
    <div>
      {/* Static content as RSC */}
      <AnimatedSection>
        <SectionHeader label="Resources" title="Common Questions" />
      </AnimatedSection>
      {/* Interactive island */}
      <FaqAccordion items={faq} />
    </div>
  );
}
```

### Pattern 2: AnimatedSection Stagger for Card Grids

Per CONTEXT.md decisions: stagger delays of 0.1s between sibling items, `once: true`.

```typescript
// Use delay prop from AnimatedSection
{services.map((service, i) => (
  <AnimatedSection key={service.id} delay={i * 0.1}>
    <Card>...</Card>
  </AnimatedSection>
))}
```

AnimatedSection already implements `viewport={{ once: true, margin: "-80px" }}` — locked in Phase 1.

### Pattern 3: Google Sheets Form Submission (no-cors)

The Apps Script URL is public; `no-cors` mode is required because the endpoint returns JSON but doesn't include CORS headers for arbitrary origins.

```typescript
// src/components/apply/ApplyForm.tsx
"use client";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyAGohOTYu96rDRWgylkdlCL0clrjcBmlAzEhROw-N_S5PVkpnB-GyPSihKRgIINWSt/exec";

async function submitToSheets(data: FormData) {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",                        // Required — cannot read response
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      fullName: data.get("fullName"),
      dob: data.get("dob"),
      phone: data.get("phone"),
      email: data.get("email"),
      currentSituation: data.get("currentSituation"),
      supervision: data.get("supervision"),
    }),
  });
  // With no-cors, no response can be read — treat fetch resolve as success
}
```

**Critical**: Because `no-cors` makes the response opaque, errors from the Apps Script side are invisible to the browser. Validate all fields client-side before submitting to minimize server-side failures.

### Pattern 4: FAQ Accordion (Client Component)

```typescript
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/constants";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-border bg-bg-card">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-foreground">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-primary shrink-0 transition-[transform] duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-muted text-sm leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### Pattern 5: Mobile Sticky CTA Bar

Fixed bottom bar visible only on mobile (`md:hidden`). Requires `pb-20` on `<main>` for mobile to prevent content clipping.

```typescript
// src/components/layout/MobileCtaBar.tsx
"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg-surface border-t border-border px-4 py-3 flex gap-3">
      <a
        href={`tel:${siteConfig.phoneResident}`}
        className="flex-1 flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold py-3 text-sm transition-[color,background-color,border-color] duration-200 hover:bg-primary-dim cursor-pointer"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        href="/apply"
        className="flex-1 flex items-center justify-center rounded-lg bg-primary text-bg-deep font-semibold py-3 text-sm transition-[color,background-color,transform] duration-200 hover:bg-primary-light cursor-pointer"
      >
        Apply Now
      </Link>
    </div>
  );
}
```

Add `MobileCtaBar` to the `(site)/layout.tsx` body, and add `pb-20 md:pb-0` to `<main>`.

### Pattern 6: Page Metadata (RSC export)

Each page exports its own metadata. Per Next.js App Router pattern:

```typescript
// src/app/(site)/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blu Manor | Second Chance Transitional Housing Tampa Bay",
  description: "...",
};
```

### Pattern 7: Google Maps Embed (Contact Page)

No API key needed for an embedded map using the `maps.google.com/maps?q=` embed URL:

```tsx
<iframe
  src="https://maps.google.com/maps?q=Tampa+Bay+FL&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Blu Manor service area map"
/>
```

Note: Exact property addresses are pending from client (STATE.md blocker). Use "Tampa Bay Area, FL" as the query until addresses are provided.

### Anti-Patterns to Avoid

- **`transition-all` anywhere** — specify exact properties (color, background-color, transform, border-color, box-shadow). MASTER.md and CLAUDE.md both prohibit this.
- **`"use client"` on page.tsx** — only the interactive leaf components need it. Keep page.tsx as RSC.
- **Reading fetch response on no-cors submit** — response is opaque; do not try `res.json()` after a no-cors fetch.
- **Not adding `pb-20 md:pb-0` to main** — sticky CTA bar will cover bottom content on mobile.
- **Default Tailwind blue/indigo** — use design system tokens only (primary gold, accent steel blue). Default blue is prohibited per CLAUDE.md.
- **Emojis as icons** — use Lucide React only (MASTER.md mandate).
- **No `cursor-pointer` on interactive elements** — MASTER.md pre-delivery checklist requires it on all clickable elements.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| FAQ accordion | Custom animation library | `useState` + CSS height/display | 6-7 items; full library is overkill |
| Form validation | Custom validator | Native HTML5 + React state | 6-field form; validation is straightforward |
| Scroll animations | Custom IntersectionObserver | `AnimatedSection` (already built) | Phase 1 delivered this; just use it |
| Icons | Custom SVGs | Lucide React (already installed) | Agency mandate; consistent icon set |
| Google Sheets submit | API route / server action | Direct `fetch` with `no-cors` | Apps Script handles server side; no Next.js backend needed |

**Key insight:** This phase is primarily composition work — assembling content from `constants.ts` into page layouts using already-built components. The only new components needed are `ApplyForm`, `FaqAccordion`, and `MobileCtaBar`.

---

## Common Pitfalls

### Pitfall 1: no-cors Form Submission Appears Broken
**What goes wrong:** Developer tries `const data = await res.json()` after a no-cors fetch, gets TypeError because response body is locked/opaque.
**Why it happens:** `mode: 'no-cors'` returns an opaque response — the body is unreadable by design.
**How to avoid:** After the `await fetch(...)` call resolves without throwing, transition the form to a success state. The absence of an exception IS the success signal.
**Warning signs:** `TypeError: Failed to fetch` (network error, different from opaque response) vs. silent resolve (opaque success).

### Pitfall 2: Mobile Content Hidden Under Sticky CTA Bar
**What goes wrong:** Last section of page content (especially Apply form submit button) sits behind the fixed bottom CTA bar on mobile.
**Why it happens:** `fixed` positioning takes the element out of flow; content behind it is unreachable.
**How to avoid:** Add `pb-20 md:pb-0` to the `<main>` element in `(site)/layout.tsx`. Also add it to Apply page specifically since the submit button is near the bottom.
**Warning signs:** Test at 375px — scroll to bottom and check that all content is accessible.

### Pitfall 3: Framer Motion SSR Mismatch
**What goes wrong:** Hydration error on `AnimatedSection` components when initial server render doesn't match client.
**Why it happens:** Framer Motion `whileInView` requires browser IntersectionObserver — divergence if not handled.
**How to avoid:** `AnimatedSection` already has `"use client"` directive (Phase 1 built it correctly). Ensure no one adds it to a server component without the directive.
**Warning signs:** Console error "Hydration failed because the initial UI does not match what was rendered on the server."

### Pitfall 4: Accordion Not Accessible
**What goes wrong:** Keyboard users can't navigate FAQ; screen readers don't announce open/closed state.
**How to avoid:** Use `<button>` (not `<div>`) for accordion triggers. Add `aria-expanded={open === i}` and `aria-controls` pointing to the content `id`.

### Pitfall 5: Form Required Fields Not Validated Before no-cors Submit
**What goes wrong:** Empty form submits to Google Sheets and creates a blank row. Since no response is readable, user gets a "success" message for empty data.
**How to avoid:** Validate all required fields with explicit checks before calling `submitToSheets()`. Show inline errors per field.

### Pitfall 6: Google Maps Embed Triggers Consent Issues in EU (Not Relevant Here)
**What goes wrong:** N/A for this site — blumanor.org is Tampa Bay-local, no EU traffic concerns. Plain `<iframe>` embed is fine.

---

## Code Examples

Verified patterns from official sources and Phase 1 codebase:

### Apply Form — Complete Field Set (per CONTEXT.md decision)

The "basic essentials only" field set:
```typescript
interface ApplyFormData {
  fullName: string;        // required
  phone: string;           // required
  email: string;           // required
  dob: string;             // required (date of birth)
  currentSituation: string; // required: "employed" | "looking"
  supervision: string;     // required: "yes" | "no"
}
```

Map to Apps Script columns: `fullName` → Full Name, `dob` → DOB, `phone` → Phone, `email` → Email, `currentSituation` → Employer field (closest existing column), `supervision` → Supervision Status. The existing Apps Script and sheet accept any JSON — column mapping is flexible.

### Input Styling (from MASTER.md Component Specs)

```tsx
<input
  className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-[border-color,box-shadow] duration-200"
/>
```

### Page Section Container Pattern

Consistent with the design system — every section gets alternating background:

```tsx
{/* bg-bg-deep sections — default page background */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">...</div>
</section>

{/* bg-bg-surface sections — elevated surface for contrast */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
  <div className="max-w-7xl mx-auto">...</div>
</section>
```

### Stats Section — Recommended Static (Not Count-Up)

Claude's discretion on stat counters. Recommendation: **static with gold styling**, not count-up animation. Rationale: count-up requires a separate library or custom IntersectionObserver hook; static rendering works in RSC; values like "5+" and "Days" don't benefit from counting animation. Revisit for v2 if client requests it.

```tsx
{stats.map((stat, i) => (
  <AnimatedSection key={stat.label} delay={i * 0.1}>
    <div className="text-center">
      <div className="text-4xl font-bold text-primary font-[family-name:var(--font-libre)]">
        {stat.value}
      </div>
      <div className="text-muted text-sm mt-1">{stat.label}</div>
    </div>
  </AnimatedSection>
))}
```

---

## Page-by-Page Implementation Notes

### PAGE-01: Home

Sections per MASTER.md homepage pattern:
1. **Hero** — Recommendation: full-section with dark gradient overlay, centered text, two CTAs (Apply Now + Call Us). grain CSS class already defined in globals.css. No image dependency — gradient-only hero avoids placeholder image issues.
2. **What We Offer** — `services[]` array (4 items) → 4 Card components in 2×2 grid
3. **How It Works** — 4-step horizontal timeline (Apply → Review → Documentation → Move In). Build as static component with numbered steps.
4. **Housing Preview** — `housing[]` array (1 item) → featured Card with link to /housing
5. **Stats / Trust Bar** — `stats[]` (3 items) → static gold numerals
6. **Testimonials** — `testimonials[]` (3 items) → Card grid
7. **CTA Section** — "Ready to Start?" with Apply Now + Contact buttons. grain class + bg-bg-surface.

### PAGE-02: About

Sections:
1. Page hero/banner — mission statement
2. Mission + Story — text content from constants.ts (siteConfig.description + expand with copy)
3. Values — can reuse services[] cards or create dedicated values content
4. Stats — same stats[] component as Home
5. **No team section** — locked decision per CONTEXT.md

Note: `constants.ts` doesn't have a dedicated `aboutContent` object. The planner will need to either (a) add about-specific copy to constants.ts as part of a task, or (b) write it inline in the page component. Recommendation: add to constants.ts for consistency.

### PAGE-03: Housing

Sections:
1. Page banner
2. Housing option card(s) — `housing[]` currently has 1 item. Use full Card with all features listed, availability badge, price prominently.
3. "Design for expansion" — use `housing.map()` even with 1 item so adding options later requires zero refactor
4. Eligibility section — brief copy on who qualifies
5. CTA — "Apply Now" or "Call to Check Availability"

### PAGE-04: Program

Sections:
1. Page banner
2. What's included — `services[]` cards (same as Home "What We Offer")
3. House rules — static content (from program.html reference)
4. What to expect timeline — same 4-step timeline pattern as Apply page intro
5. FAQ preview or link to Resources

### PAGE-05: Partners

Sections:
1. Page banner
2. Partner audience intro — "For probation officers, parole agents, reentry professionals..."
3. How referrals work — 3-step process (Contact us → Client applies → We coordinate)
4. Contact CTA — **partner phone number prominently**: 727-710-6930
5. No partner logos array in constants.ts — skip logos section or add placeholder

Note: `constants.ts` has no `partners` array. Per CONTEXT.md, referral approach is phone/email-only (no referral form). The planner should note this page is mostly static copy.

### PAGE-06: Resources

Sections:
1. Page banner
2. FAQ accordion — `faq[]` (7 items) → `FaqAccordion` client component
3. No downloadable resources in constants.ts — either skip or add placeholder with phone CTA
4. Quick links / helpful resources section (optional static links)

### PAGE-07: Contact

Sections:
1. Page banner
2. Two contact cards — Residents (727-563-6540) and Partners (727-710-6930). Audience-specific framing.
3. Email card — info@blumanor.org
4. Service area card — "Tampa Bay Area, FL" (address pending from client)
5. Google Maps embed — "Tampa Bay FL" search query until exact address provided
6. CTA to Apply

### PAGE-08: Apply

Sections:
1. Page banner + brief intro
2. What to expect timeline (4 steps — from original apply.html)
3. `ApplyForm` client component:
   - fullName (required)
   - dob (required, date input)
   - phone (required, tel input)
   - email (required, email input)
   - currentSituation (required, radio: Employed / Looking for Work)
   - supervision (required, radio: Yes / No)
4. Submit → success state (inline confirmation, not redirect)

---

## State of the Art

| Old Approach | Current Approach | Notes |
|--------------|------------------|-------|
| Static HTML + vanilla JS form | Next.js RSC + Client form component | Migration in progress |
| CDN-loaded fonts | `next/font/google` | Already implemented in Phase 1 |
| External CSS file | Tailwind 4 CSS custom properties | Already implemented in Phase 1 |
| Inline `transition: all` in CSS | Specific transition properties | MASTER.md mandate, hooks enforce |

---

## Open Questions

1. **About page copy content**
   - What we know: siteConfig.description exists; no dedicated aboutContent in constants.ts
   - What's unclear: What expanded mission/story copy should display?
   - Recommendation: Add `aboutContent` object to constants.ts with mission, story, and values blurbs as part of the About page task. Write placeholder copy now; client can update via their developer.

2. **Partners page — no partners array**
   - What we know: No `partners[]` in constants.ts; no partner logos from client
   - What's unclear: Does client have referring agency logos to show?
   - Recommendation: Skip logo grid entirely. Build the page as text-only referral info with prominent phone CTA. Add `partners[]` to constants.ts only if logos are provided.

3. **Resources page — no downloadable resources**
   - What we know: `resources.html` in original site had a section placeholder
   - What's unclear: Does client have actual PDFs/resources to link?
   - Recommendation: Build FAQ accordion as the primary content. Add a static "Need more help? Call us" CTA. Skip downloads section.

4. **Google Maps — exact address TBD**
   - What we know: `siteConfig.address` = "Tampa Bay Area, FL" (placeholder per STATE.md)
   - What's unclear: Client has 5+ properties — which address to show?
   - Recommendation: Embed a general Tampa Bay FL area map. Add a note in code comments that this should be updated when client provides primary address.

---

## Sources

### Primary (HIGH confidence)
- Phase 1 codebase: `src/components/ui/`, `src/app/(site)/layout.tsx`, `src/lib/constants.ts`, `src/app/globals.css` — verified implementation
- `design-system/blu-manor/MASTER.md` — authoritative design rules, component specs, shadow system, animation rules
- `google-apps-script.js` — Apps Script source; confirms field names and endpoint behavior
- MASTER.md Google Sheets section — confirms `no-cors` fetch pattern and Apps Script URL

### Secondary (MEDIUM confidence)
- Original HTML pages (`index.html`, `apply.html`, `contact.html`) — content reference for what sections each page should contain
- `apply.html` form — field reference for original form (simplified to basic essentials per CONTEXT.md)

### Tertiary (LOW confidence)
- Google Maps embed URL pattern (`maps.google.com/maps?q=...&output=embed`) — standard pattern, but Google occasionally changes embed behavior. Verify embed loads at build time.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified against installed package.json; no new deps needed
- Architecture: HIGH — RSC + client island pattern is Next.js App Router standard; Phase 1 already uses it
- Form submission: HIGH — Apps Script URL confirmed in MASTER.md; no-cors pattern confirmed in original js/apply.js
- Pitfalls: HIGH — most come from direct inspection of the codebase and original HTML
- Content gaps (about copy, partners, resources): MEDIUM — gaps are known; recommendations are conservative

**Research date:** 2026-03-18
**Valid until:** 2026-04-18 (stable stack; Framer Motion and Next.js APIs unlikely to change in 30 days)
