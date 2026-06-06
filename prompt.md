# CT Forwarding & Transport — Website Project Handoff Document

> **Purpose:** This file is a complete project briefing for any AI assistant picking up this codebase. It covers the full history, technical architecture, current status, remaining work, and coding standards. Read this before making any changes.

---

## 1. Project Overview

**Client:** CT Forwarding & Transport Sdn Bhd  
**TIN:** C7877772000  
**Founded:** 1999, Kota Kinabalu, Sabah, Malaysia  
**Business:** Sabah's largest logistics company — land transportation, freight forwarding, customs brokerage, warehousing, container depot, breakbulk/project cargo  

**Goal:** Replace the old React/Bootstrap site at `https://ct-forwarding.web.app/` with a modern, premium Next.js website worthy of a market-leading logistics company. Think: dark industrial luxury — not a startup, not a simple brochure site. Every page should feel unique, confident, and cinematic.

**Repository:** `https://github.com/RandyTsen/ct-forwarding-nextjs`  
**Local path:** `C:\Users\Randy\.claude\Projects\CT Official Website`  
**Reference (old React site extracted):** `C:\Users\Randy\Downloads\ct-forwarding-website-main\ct-forwarding-website-main\`  
**Deployment target:** Vercel (auto-deploys from `master` branch)

---

## 2. Tech Stack (exact versions)

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.2.7 | App Router, server components |
| React | 19.2.4 | |
| TypeScript | strict | |
| Tailwind CSS | v4 | CSS-first config (`app/globals.css`), NOT `tailwind.config.js` |
| Framer Motion | ^12 | ALL page animations — no GSAP anywhere |
| Lucide React | latest | ALL icons — no Font Awesome, no emojis |
| React Hook Form | latest | Contact form |
| Zod | latest | Form validation |
| Resend | latest | Email API (contact form) |
| pnpm | preferred | (or npm) |

**Critical:** Tailwind v4 uses `@theme` block in `globals.css` — there is NO `tailwind.config.js`. All custom tokens (colors, fonts) live in `src/app/globals.css`.

---

## 3. Design System (Tailwind v4 tokens)

Defined in `src/app/globals.css` under `@theme { ... }`:

```css
/* Colors */
--color-primary: #2d6a4f        /* CT Green — primary brand */
--color-primary-dark: #1b4332   /* Darker green */
--color-primary-light: #74c69d  /* Accent green */
--color-carbon: #0a0a0a         /* Near-black background */
--color-smoke: #f8f9fa          /* Off-white sections */
--color-gold: #b8860b           /* Premium accent */

/* Fonts */
--font-display: 'Bebas Neue'    /* Headlines */
--font-body: 'Inter'            /* Body text */
```

**Visual language:** Dark carbon backgrounds, green accents, uppercase Bebas Neue headlines, generous whitespace. Each service page deliberately uses a different layout philosophy — avoid shared templates.

---

## 4. Project Architecture

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (Navbar + Footer + LoadingScreen)
│   ├── page.tsx                      # Homepage (HomeSlideshow)
│   ├── about/
│   │   ├── page.tsx                  # Server — exports metadata
│   │   └── AboutPageContent.tsx      # "use client" — animations
│   ├── contact/
│   │   ├── page.tsx
│   │   ├── ContactPageContent.tsx
│   ├── news/
│   │   ├── page.tsx
│   │   └── NewsPageContent.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── ProjectsPageContent.tsx
│   ├── services/
│   │   ├── page.tsx                  # Services index
│   │   ├── ServicesPageContent.tsx
│   │   └── [slug]/
│   │       ├── page.tsx              # Dynamic route — CONTENT_MAP router
│   │       ├── ServiceDetailContent.tsx
│   │       └── content/              # One unique file per service
│   │           ├── TransportationContent.tsx
│   │           ├── FreightForwardingContent.tsx
│   │           ├── WarehousingContent.tsx
│   │           ├── ContainerDepotContent.tsx
│   │           ├── BreakbulkContent.tsx
│   │           └── OtherServicesContent.tsx
│   └── api/
│       └── contact/route.ts          # POST — Zod + Resend + escapeHtml()
├── components/
│   ├── common/
│   │   ├── LoadingScreen.tsx         # Dispatches `ctLoadingComplete` event on exit
│   │   └── CustomCursor.tsx
│   ├── home/
│   │   ├── HomeSlideshow.tsx         # Custom snap-scroll engine (fixed, 100dvh)
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Listens for `ctLoadingComplete`, Framer Motion
│   │       ├── ServicesSection.tsx   # 6 service cards, 3x2 grid
│   │       ├── FleetTeaser.tsx
│   │       ├── WhyCTSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── ClientsSection.tsx
│   ├── inner/
│   │   ├── InnerLayout.tsx           # min-h-screen pt-20 (navbar offset)
│   │   ├── PageHero.tsx              # Reusable dark hero banner
│   │   └── SectionLabel.tsx         # Eyebrow text with rule
│   ├── contact/
│   │   └── ContactForm.tsx          # RHF + Zod + AnimatePresence states
│   ├── layout/
│   │   ├── Navbar.tsx               # 6 service links in dropdown
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       └── Section.tsx
├── lib/
│   └── services-data.ts             # SINGLE SOURCE OF TRUTH — 6 services
└── hooks/
    └── useSlideTheme.ts             # Transparent navbar on homepage only
```

---

## 5. The 6 Services (locked — do not add or rename)

Defined in `src/lib/services-data.ts`. These are the exact slugs and titles:

| Slug | Title |
|------|-------|
| `transportation` | Transportation |
| `freight-forwarding` | Freight Forwarding & Customs Brokerage |
| `warehousing` | Warehousing & Distribution |
| `container-depot` | Container Depot & Open Yard Storage |
| `breakbulk` | Breakbulk & Project Cargo |
| `other` | Other Services |

**Never add more services** (sea-freight and air-freight were added and explicitly rejected — revert was required). The service count of 6 is a hard business requirement.

---

## 6. Key Technical Rules

### Next.js 16 — `params` must be awaited
```tsx
// CORRECT — page.tsx server component
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
```

### Server vs Client boundary
- `page.tsx` = Server Component → exports `metadata`, calls `await params`
- `*Content.tsx` = `"use client"` → all Framer Motion, hooks, state

### Animation — Framer Motion ONLY
```tsx
// Never use GSAP ScrollTrigger on inner pages
// Never use CSS @keyframes for entrance animations
// Always use whileInView or variants triggered by state
import { motion } from "framer-motion";
```

### Hero loading sequence
1. `LoadingScreen.tsx` exits → dispatches `window.dispatchEvent(new Event("ctLoadingComplete"))`
2. `HeroSection.tsx` listens: `window.addEventListener("ctLoadingComplete", onReady, { once: true })`
3. Fallback: `setTimeout(() => setReady(true), 2900)` — hero reveals anyway if event never fires
4. `ready ? "visible" : "hidden"` drives all `animate` props

### Contact form API (`/api/contact/route.ts`)
- Zod validation runs FIRST before any email call
- `escapeHtml()` applied to ALL user input before HTML construction
- Graceful fallback: console.log when `RESEND_API_KEY` is absent
- Returns only `{ success: true }` or `{ error: "..." }` — no secrets in response

### Icons — Lucide ONLY
```tsx
import { Truck, Package, Warehouse } from "lucide-react";
// No emojis. No Font Awesome. No Material Icons.
```

---

## 7. Current Status — What's Done

### Phase 1 — Foundation ✅
- Next.js 16 App Router setup, TypeScript strict, Tailwind v4 tokens
- Custom font loading (Bebas Neue + Inter via `next/font`)
- Navbar with dropdown, mobile menu, transparent-on-homepage behavior
- Footer with TIN legal line
- LoadingScreen with `ctLoadingComplete` event
- CustomCursor

### Phase 2 — Homepage ✅
- `HomeSlideshow.tsx` — custom snap-scroll engine with 6 full-screen slides
- Slide 1: `HeroSection` — Framer Motion variants, aerial yard background, dual CTAs, stats bar
- Slide 2: `ServicesSection` — 6 service cards, 3x2 grid, Lucide icons
- Slide 3: `FleetTeaser` — vehicle grid dark section
- Slide 4: `WhyCTSection` — 6 trust points with Lucide icon badges
- Slide 5: `ProjectsSection` — past project highlights
- Slide 6: `ClientsSection` — client logos strip

### Phase 3 — Inner Pages ✅
All 6 service pages with UNIQUE layouts (not templates):
- **Transportation** — "Fleet Arsenal" dark grid, 9 vehicle types, Sabah coverage strip
- **Freight Forwarding** — 5-step process timeline, 4 advantage cards
- **Warehousing** — Mega stat banner (120,000 sq.ft / KKIP / 24/7), gold KKIP callout
- **Container Depot** — 6 alternating image/text rows (editorial magazine style)
- **Breakbulk** — Dramatic dark hero, 3 capability cards, 7 real past projects with actual tonnage
- **Other Services** — 4 cards with distinct per-card background styling

Additional inner pages built:
- `/about` — Company background, timeline, leadership
- `/contact` — RHF form with Zod validation, Resend API integration
- `/projects` — Past project showcase
- `/news` — News/updates placeholder
- `/services` — Services index overview

### Infrastructure ✅
- `src/app/sitemap.ts` — 12 routes for SEO
- `.gitignore` — excludes Pictures/, .claude/, MOV/HEIC/MP4 binaries
- GitHub: `https://github.com/RandyTsen/ct-forwarding-nextjs`
- Vercel deployment: connected to GitHub master branch

---

## 8. Known Bugs Fixed (do not reintroduce)

| Bug | Root Cause | Fix |
|-----|-----------|-----|
| Hero content not showing | GSAP `gsap.context()` passed wrong scope | Replaced entirely with Framer Motion + event listener |
| TypeScript params error | Next.js 16 `params` is `Promise<{slug}>` | Must be typed and awaited |
| HTML injection in email | Raw string interpolation in Resend HTML | Added `escapeHtml()` to API route |
| Metadata descriptions > 155 chars | 5 pages over limit | All trimmed to ≤155 chars |
| 7-service layout | sea-freight + air-freight added | Reverted — hard-locked at 6 services |
| Mobile flex override | `style={{ flexDirection }}` overriding Tailwind mobile | Changed to conditional Tailwind classes |

---

## 9. v0 Reference Design — UI/UX Learnings

Randy has a v0-generated design prototype at:
- **Vercel:** `https://v0-logistics-website-design-1dckjzpvv.vercel.app`
- **Vercel project:** `v0-logistics-website-design` (team: `randytsen-ymailcoms-projects`)

This was studied in full. Key patterns observed and their applicability:

### Patterns to Adopt

**1. Scroll-jacked Fleet Section ("900vh sticky")**
- Fleet section uses `height: 900vh` with `position: sticky; top: 0` — scroll drives which vehicle is shown
- Each vehicle = full-screen background image with left-aligned text, Lucide icon badge, category pill
- Bottom-right: frosted glass spec card (`backdrop-blur-xl`, `rounded-2xl`, `border-white/10`) showing "01/09", category, capacity
- Left sidebar: vertical dot nav with vehicle names, active dot is full-size green, inactive are dimmed 25%
- **Apply to:** Upgrade `FleetTeaser` homepage slide from static grid → this cinematic scroll-driven reveal

**2. Blur-In Entrance Animations**
- Initial state: `filter: blur(8px); transform: translateY(40px); opacity: 0`
- Animated to: `filter: blur(0); transform: none; opacity: 1`
- Creates a premium "camera focus" effect, more sophisticated than plain fade-up
- **Apply to:** Inner page section entrances — replace basic `opacity + y` with `blur + y`

**3. Film Grain Texture**
- Entire page wrapped in `<div class="grain">` — a CSS class that adds a subtle noise texture overlay
- Makes the dark sections feel tactile, less "flat screen" digital
- **Apply to:** Add grain CSS to `globals.css` and wrap dark sections or the root layout

**4. `aspect-[3/4]` Service Cards with Hover Scale**
- Services shown as portrait cards with full-bleed background images
- Icon top-left: `bg-white/10 backdrop-blur-md` → `bg-[#1D6347]/80` on hover
- Text bottom: title + short descriptor, gradient fade from bottom
- `group-hover:scale-110` on image with `overflow-hidden` container
- **Apply to:** ServicesSection on homepage — upgrade from icon+text cards to image-backed portrait cards

**5. Capabilities Accordion (expandable rows)**
- 3 capability rows: each is a full-width card with image on left (hidden on mobile), icon + title + chevron on right
- Clicking expands to reveal details — no full page navigation needed for quick reference
- Image thumbnail `hover:scale-105` transition
- **Apply to:** Could replace or supplement the current ServicesSection homepage slide

**6. Contact Section — 3-Location Selector + Embedded Map**
- Left side: 3 clickable location cards (KK HQ active with green left-border accent, Sandakan + Tawau branches)
- Active card: `border-[#1D6347]/30 bg-[#1D6347]/5 shadow-[#1D6347]/5` + left `w-1` green bar
- Right side: Google Maps iframe (5:3 grid split) that updates based on selected location
- Each card includes: phone, email, WhatsApp `wa.me` link
- **Apply to:** Contact page — upgrade current form-only page with this location selector + map layout. Also need to add real phone numbers and WhatsApp links.

**7. Stats Section with SVG Grid Pattern Background**
- Dark `#070f0c` bg with SVG `<pattern>` grid lines at 5% opacity using brand green
- 4 metric cards: `rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm`
- Clean, minimal — number + label only
- **Apply to:** Could enhance the current stats bar in HeroSection or add a dedicated stats section

**8. "Sabah, Malaysia" Hero Pill Badge**
- `rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2`
- MapPin Lucide icon + location text
- Sits above headline — adds geographic authority instantly
- **Apply to:** HeroSection eyebrow — replace current rule+text with this pill badge style

**9. Real Contact Data (extracted from v0)**
Use these in the actual Contact page and Footer:
- **KK HQ:** Unit A905, 9th Floor, Phase 1, Wisma Merdeka, Jalan Tun Razak, 88000 KK — Tel: 088-259663 / 088-258662, Fax: 088-261662, Email: contact@ctforwarding.com.my
- **Sandakan:** KM 8, Jalan Batu Sapi, Karamunting, 90000 Sandakan — Tel: 089-613881
- **Tawau:** Mile 3 1/2, Jalan Apas, P.O. Box 61377, 91023 Tawau — Tel: 012-8021662
- WhatsApp: `https://wa.me/6088259663`

**10. `rounded-2xl` / `rounded-3xl` Design Language**
- v0 uses very rounded corners throughout (cards, buttons, nav items, badges)
- Feels more modern and approachable vs. the current `rounded-sm` / `rounded` in our codebase
- **Consider:** Updating button and card border-radius tokens to align with this more modern style

### What v0 Does NOT Have (Our Advantage)
- No Bebas Neue display font — our typography hierarchy is more dramatic
- No snap-scroll homepage — our immersive slide experience is unique
- No loading screen / brand entry animation
- Single-page app (no inner pages) — our multi-page architecture with unique service layouts is superior
- No `ctLoadingComplete` sequencing — our animation timing is more controlled

---

## 10. Project Phase Plan (Full Roadmap)

### Phase 1 — Foundation ✅ COMPLETE
Stack setup, design tokens, Navbar, Footer, LoadingScreen, CustomCursor.

### Phase 2 — Homepage ✅ COMPLETE
6-slide snap-scroll homepage with Hero, Services, Fleet, WhyCT, Projects, Clients sections.

### Phase 3 — Inner Pages ✅ COMPLETE
All 6 unique service pages + About, Contact, Projects, News pages. Each service page uses a deliberately different layout philosophy — no shared templates.

### Phase 4 — Polish & UI Upgrades ✅ COMPLETE
All v0 reference learnings + premium UI/UX upgrades applied:
- [x] **FleetTeaser** → cinematic auto-advancing vehicle carousel (AnimatePresence crossfade, 10 vehicles, full-screen bg, left dot nav, frosted spec card, arrow buttons, keyboard nav, auto-advance 4s, pause on hover, prefers-reduced-motion safe)
- [x] **ServicesSection** → premium dark cards on `bg-carbon`, per-service accent gradient top-bar (green/blue/gold/purple/red/cyan), blur-in whileInView animations, hover glow effect
- [x] **HeroSection eyebrow** → pill badge with MapPin icon + "Sabah, Malaysia · Est. 1999" (backdrop-blur, rounded-full)
- [x] **Film grain texture** → `.grain` CSS class on `<body>`, fixed `::before` pseudo-element at 2.8% opacity
- [x] **Blur-in animations** → `@keyframes blur-in` utility + `@media (prefers-reduced-motion: reduce)` override in globals.css
- [x] **Contact page** → full overhaul: 3-location selector (KK HQ / Sandakan / Tawau), interactive Google Maps embed (changes per location), WhatsApp button, real addresses + phone numbers for all 3 offices, contact form wrapped in white card with rounded-3xl
- [x] **Footer** → WhatsApp link added (MessageCircle icon, #25D366 green)
- [x] **404 page** → on-brand dark page: giant 404 watermark, MapPin pill badge, "This route has gone off the map." heading, grid background, glow blob, Back to Home + Contact Us CTAs

### Phase 5 — Production Readiness 🔜
- [ ] Real photography — replace all stock/placeholder images with actual CT Forwarding photos
- [ ] OG/Social meta images for WhatsApp/Facebook link previews
- [ ] Mobile QA pass — 375px, 390px, 430px viewports
- [ ] Lighthouse audit — target 90+ performance score
- [ ] robots.txt (`src/app/robots.ts`)
- [ ] Resend API key in Vercel for live contact form emails
- [ ] Analytics (Vercel Analytics or Google Analytics)
- [ ] About page depth — real timeline, leadership profiles, mission/values

### Phase 6 — Launch 🔜
- [ ] Point `ctforwarding.com.my` DNS to Vercel
- [ ] Final UAT review with Randy
- [ ] Redirect old Firebase site or update DNS

### Future / Optional
- [ ] News/Blog CMS (Sanity or Contentlayer) for self-service content updates
- [ ] Bahasa Malaysia language toggle
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cookie/Privacy banner

---

### High Priority
- [ ] **Real images** — most service pages use placeholder/stock. Need actual CT Forwarding photography loaded into `public/images/`
- [ ] **About page depth** — needs company timeline, leadership profiles, mission/values section with real content
- [ ] **News page** — currently a shell/placeholder; needs either real articles or a CMS integration
- [ ] **OG / Social meta images** — `opengraph-image.png` needed per page for WhatsApp/Facebook link previews
- [ ] **Mobile QA pass** — full review at 375px, 390px, 430px (iPhone SE, 14, 15 Plus)
- [ ] **Resend API key** — set in Vercel environment variables for contact form emails to work

### Medium Priority
- [ ] **Performance audit** — run Lighthouse, target 90+ on all pages; optimize image sizes/formats
- [ ] **404 page** — `src/app/not-found.tsx` with on-brand design
- [ ] **Loading states** — skeleton screens or suspense boundaries on dynamic content
- [ ] **robots.txt** — `src/app/robots.ts` for search engine crawl control
- [ ] **Analytics** — Google Analytics or Vercel Analytics integration
- [ ] **Domain** — point `ctforwarding.com.my` DNS to Vercel

### Lower Priority
- [ ] **Cookie/Privacy banner** — if targeting EU or collecting any data
- [ ] **Accessibility audit** — keyboard nav, ARIA labels, color contrast check
- [ ] **i18n** — Bahasa Malaysia toggle (optional, future phase)
- [ ] **CMS** — Sanity or Contentlayer for news/blog if client wants to self-update content

---

## 10. Git & Deployment Workflow

### Branching Strategy
- `master` — production-ready code, auto-deploys to Vercel
- `dev` — active development branch (recommended: create this, work here, PR to master)
- Feature branches: `feat/about-page`, `fix/mobile-hero`, etc.

### Recommended flow going forward:
```bash
git checkout -b dev              # create dev branch
# make changes
git add <files>
git commit -m "feat: ..."
git push origin dev
# When ready → PR dev → master on GitHub → Vercel auto-deploys
```

### Environment Variables (Vercel dashboard)
```
RESEND_API_KEY=re_xxxxxxxxxxxx   # Required for contact form emails
```

---

## 11. Coding Standards (non-negotiable)

- **Immutability** — always create new objects/arrays, never mutate
- **File size** — 200–400 lines typical, hard max 800 lines
- **Function size** — max 50 lines
- **No speculation** — only build what's explicitly requested
- **Surgical changes** — touch only what's necessary; don't improve adjacent code
- **No emojis** in code or UI (unless Randy explicitly asks)
- **No GSAP** — Framer Motion only for animations
- **No inline styles** unless absolutely required (use Tailwind classes)
- Server components export `metadata`; client components handle all interactivity

---

## 12. Business Facts (use in copy)

- Founded: 1999 in Kota Kinabalu, Sabah
- 25+ years in operation
- Fleet: 200+ vehicles (prime movers, side loaders, specialized trailers)
- Warehouse: 120,000+ sq.ft (includes KKIP Halal Hub expansion)
- Offices: Kota Kinabalu (HQ), Tawau, Sandakan
- Serves all major towns across Sabah
- Partners with Malaysia's key ports (Klang, Bintulu, etc.)
- Specializes in heavy/oversized/project cargo (breakbulk)
- Real projects: 4,300T metal rods, 119,000T mega machines, 150T wire rods
- TIN: C7877772000
- Website domain: ctforwarding.com.my

---

## 13. What Randy Wants (owner preferences)

- Premium, cinematic feel — not generic corporate
- **Every page must feel unique** — different layout, different section philosophy
- Marketing-grade copy — confident, non-repetitive, hooks the reader
- No boring templates — variety in grid/layout/color approach per page
- Mobile-first review — shared with friends on mobile browser
- Production-level quality before review — no half-finished states
- Use Lucide icons only — no emojis anywhere
- Keep animations smooth but purposeful — not flashy for the sake of it

---

*Last updated: 2026-06-06 | Phase 4 complete | Branch: master*
