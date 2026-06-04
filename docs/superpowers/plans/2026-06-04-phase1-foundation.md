# Phase 1 — Foundation Build Plan
**Date:** 2026-06-04  
**Goal:** Scaffold the CT Forwarding Next.js 14 website with complete design system, animated navigation, footer, loading screen, and custom cursor — production-ready structure for all subsequent phases.

---

## Architecture Summary
- **Framework:** Next.js 14 App Router + TypeScript
- **Styling:** Tailwind CSS 3.4 with custom design tokens
- **Animation:** GSAP 3 + ScrollTrigger (scroll animations), Framer Motion 11 (page transitions + micro-interactions)
- **Fonts:** Barlow Condensed (headings, display) + Inter (body) via next/font/google
- **Deploy target:** Vercel (ctforwarding.com.my)

---

## File Structure (Phase 1)

```
ct-forwarding/
├── public/
│   └── images/logo/
│       ├── ct-logo.svg
│       ├── ct-logo-white.svg
│       └── ct-logo-green.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout: fonts, providers, cursor, loading screen
│   │   ├── page.tsx            ← Temporary homepage stub
│   │   └── globals.css         ← Tailwind directives + CSS custom properties
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Sticky nav: transparent → solid on scroll
│   │   │   ├── MobileMenu.tsx  ← Full-screen overlay mobile nav
│   │   │   └── Footer.tsx      ← Dark green 4-col footer
│   │   ├── ui/
│   │   │   ├── Button.tsx      ← Primary / outline / ghost variants
│   │   │   ├── Container.tsx   ← Max-width centering wrapper
│   │   │   └── Section.tsx     ← Padded section wrapper
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx    ← Magnetic cursor (desktop only)
│   │   │   └── LoadingScreen.tsx   ← CT logo reveal animation
│   │   └── logo/
│   │       └── CTLogo.tsx      ← SVG logo component (all variants)
│   ├── lib/
│   │   └── gsap.ts             ← GSAP + plugins init (client-side safe)
│   ├── hooks/
│   │   └── useScrollPosition.ts ← Scroll Y hook for navbar
│   └── types/
│       └── index.ts            ← Shared TypeScript types
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Tasks

### TASK 1 — Scaffold Next.js project
```powershell
cd "C:\Users\Randy\Documents\ct-forwarding"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```
**Verify:** `npm run dev` starts on localhost:3000 ✓

---

### TASK 2 — Install animation + utility dependencies
```powershell
npm install gsap @gsap/react framer-motion clsx tailwind-merge
npm install -D @types/gsap
```
**Verify:** `node -e "require('gsap'); require('framer-motion'); console.log('ok')"` ✓

---

### TASK 3 — Copy logo assets
Copy from `C:\Users\Randy\Downloads\Company_Documents\`:
- `ct-logo.svg` → `public/images/logo/ct-logo.svg`
- `ct-logo-white.svg` → `public/images/logo/ct-logo-white.svg`
- `ct-logo-green.svg` → `public/images/logo/ct-logo-green.svg`

---

### TASK 4 — tailwind.config.ts (design system tokens)
Full custom theme with CT brand colours, typography scale, animations.

---

### TASK 5 — globals.css (base styles + CSS variables)
Tailwind directives, custom properties, scrollbar, selection colour.

---

### TASK 6 — GSAP lib init (src/lib/gsap.ts)
Client-safe GSAP + ScrollTrigger registration.

---

### TASK 7 — useScrollPosition hook

---

### TASK 8 — CTLogo component

---

### TASK 9 — Button, Container, Section UI primitives

---

### TASK 10 — Navbar

---

### TASK 11 — MobileMenu

---

### TASK 12 — Footer

---

### TASK 13 — CustomCursor

---

### TASK 14 — LoadingScreen

---

### TASK 15 — Root layout.tsx (wires everything together)

---

### TASK 16 — Temporary homepage stub

---

## Verification
- `npm run build` completes with 0 errors
- `npm run dev` shows navbar + footer on localhost:3000
- Logo renders correctly in nav (white variant on dark hero bg)
- Navbar transitions transparent → solid on scroll
- Mobile hamburger opens full-screen overlay
- Custom cursor visible and tracking on desktop
- Loading screen plays on first load

## Git Commit
`feat: phase 1 foundation — Next.js scaffold, design system, navbar, footer, loading screen`
