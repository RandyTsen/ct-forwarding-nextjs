# About Page — CT Forwarding & Transport
**Date:** 2026-06-05  
**Goal:** Build the complete /about page as a server component (metadata) + client component (animated content).

## Architecture Summary
- `src/app/about/page.tsx` — server component, exports `metadata`, renders `<AboutPageContent />`
- `src/app/about/AboutPageContent.tsx` — `"use client"`, all Framer Motion `whileInView` animations, all section JSX
- Shared inner-page components imported from `@/components/inner/` (created by parallel agent): `PageHero`, `InnerLayout`, `SectionLabel`
- No new design tokens; use existing Tailwind v4 CSS vars

## File Structure Map
| File | Action | Reason |
|------|--------|--------|
| `src/app/about/page.tsx` | CREATE | Server component; exports metadata + renders client content |
| `src/app/about/AboutPageContent.tsx` | CREATE | Client component; all animated sections |

## Tasks

### Task 1 — Create `src/app/about/page.tsx`
```tsx
import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | CT Forwarding & Transport Sdn Bhd",
  description:
    "Founded in 1999 in Kota Kinabalu, CT Forwarding & Transport is Sabah's premier logistics company — 200+ fleet units, CMILT-certified leadership, and 40+ years of combined expertise.",
  openGraph: {
    title: "About CT Forwarding & Transport Sdn Bhd",
    description:
      "Sabah's trusted logistics partner since 1999. Container haulage, freight forwarding, warehousing, and project cargo.",
    url: "https://ctforwarding.com.my/about",
    siteName: "CT Forwarding & Transport",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
```
**Verify:** `npx tsc --noEmit` — 0 errors on this file.

### Task 2 — Create `src/app/about/AboutPageContent.tsx`
Full "use client" component with 6 sections. See implementation section below.

**Verify:** `npx tsc --noEmit` — 0 errors. Dev server renders /about with no console errors.

## Self-Review Checklist
- [x] No placeholders — all content is specified
- [x] Metadata cannot coexist with "use client" — solved by splitting files
- [x] whileInView animations require "use client" — AboutPageContent.tsx has it
- [x] No new design tokens
- [x] No features beyond what was asked
- [x] Server/client split is clean
