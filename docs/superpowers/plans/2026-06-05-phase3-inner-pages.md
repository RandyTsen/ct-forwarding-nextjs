# Phase 3 — Inner Pages + Homepage Pre-flight
**Date:** 2026-06-05  
**Goal:** Build all inner pages (/about, /services, /services/[slug]×6, /projects, /contact, /news) to production quality — 1M user ready, Lighthouse 90+, full SEO meta, mobile responsive.

---

## Architecture Summary
- **Framework:** Next.js 16 App Router — RSC for inner pages (server components by default, "use client" only for interactive parts)
- **Styling:** Tailwind v4 — all design tokens locked, no new tokens
- **Animation:** Framer Motion `whileInView` only (NOT GSAP ScrollTrigger — incompatible with custom scroll container on homepage)
- **Forms:** React Hook Form + Zod validation + Resend API (`/api/contact` route)
- **Images:** Next.js `<Image>` with `sizes` prop — all local assets from `public/images/`
- **SEO:** `export const metadata` per page, OG tags, canonical URLs
- **Performance:** Static generation (no `force-dynamic`), image lazy loading, minimal client bundle

---

## Design Tokens (locked — do not add new ones)
```
Primary:  #0B7A3A    (--color-primary)
Dark:     #065C2B    (--color-primary-dark)
Light:    #2FA85A    (--color-primary-light)
Gold:     #C9A84C    (--color-gold)
Carbon:   #0D1117    (--color-carbon)
Slate:    #1A2332    (--color-slate)
Smoke:    #F4F6F3    (--color-smoke)

font-display = Barlow Condensed
font-body    = Inter
```

---

## File Structure — All Files to Create/Modify

### New Files
```
src/
├── app/
│   ├── about/
│   │   └── page.tsx                     ← /about — company story, directors, timeline
│   ├── services/
│   │   ├── page.tsx                     ← /services hub — all 6 service cards
│   │   └── [slug]/
│   │       └── page.tsx                 ← /services/[slug] — individual service detail
│   ├── projects/
│   │   └── page.tsx                     ← /projects — case studies gallery
│   ├── contact/
│   │   └── page.tsx                     ← /contact — form + map + offices
│   ├── news/
│   │   └── page.tsx                     ← /news — static listing (Sanity-ready)
│   └── api/
│       └── contact/
│           └── route.ts                 ← POST handler — validates + sends via Resend
├── components/
│   ├── inner/
│   │   ├── PageHero.tsx                 ← Reusable dark hero banner for inner pages
│   │   ├── SectionLabel.tsx             ← "· Label ·" eyebrow text pattern
│   │   └── InnerLayout.tsx              ← Wrapper: pt-20 (navbar offset) + min-h-screen
│   └── contact/
│       └── ContactForm.tsx              ← "use client" — RHF form with Zod
└── lib/
    └── services-data.ts                 ← Single source of truth for all 6 services data
```

### Modified Files
```
src/components/layout/Navbar.tsx         ← Fix: useSlideTheme only on homepage; inner pages always dark-on-white
src/hooks/useSlideTheme.ts               ← Fix: return false (not-light) when not on homepage
src/components/home/sections/ServicesSection.tsx   ← Content density: add stats, CTA strip
src/components/home/sections/WhyCTSection.tsx      ← Content density: add bottom CTA
src/components/home/sections/ProjectsSection.tsx   ← Content density: add metrics row
src/components/home/sections/ClientsSection.tsx    ← No change needed (already dense)
```

---

## Parallelizable Workstreams

| Stream | Agent | Depends On |
|--------|-------|-----------|
| A | Pre-flight: Navbar fix + homepage density | nothing |
| B | Shared inner components + services-data.ts | nothing |
| C | /about page | B |
| D | /services hub + /services/[slug] | B |
| E | /projects page | B |
| F | /contact page + /api/contact route | B |
| G | /news page | B |
| R | Production review: all pages | C,D,E,F,G |

---

## TASK A — Pre-flight: Navbar Fix + Homepage Content Density

### A1 — Fix useSlideTheme for inner pages
**File:** `src/hooks/useSlideTheme.ts`

The hook currently reads slide position. On inner pages there is no HomeSlideshow, so it should always return `false` (dark text on white nav) on non-homepage routes.

```tsx
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useSlideTheme(): boolean {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Inner pages always use solid white navbar (isLight = false = dark text)
    if (pathname !== "/") {
      setIsLight(false);
      return;
    }

    const LIGHT_SLIDES = new Set([1, 3, 5]);

    const update = () => {
      const container = (window as unknown as Record<string, unknown>).__ctScrollContainer as HTMLElement | undefined;
      if (!container) { setIsLight(false); return; }
      const prog = container.scrollTop / container.clientHeight;
      const idx  = Math.round(prog);
      setIsLight(LIGHT_SLIDES.has(idx));
    };

    const container = (window as unknown as Record<string, unknown>).__ctScrollContainer as HTMLElement | undefined;
    container?.addEventListener("scroll", update, { passive: true });
    update();
    return () => container?.removeEventListener("scroll", update);
  }, [pathname]);

  return isLight;
}
```

**Verify:** On /about, navbar shows solid white bg with dark text. On homepage slide 2 (ServicesSection = white bg), navbar switches to solid white.

### A2 — ServicesSection content density
Already dense enough (6 cards with descriptions). Add a subtle bottom stats strip:

Below the grid (before closing `</div></div>`), add:
```tsx
{/* Bottom metrics strip */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mt-5 pt-4 border-t border-slate/10 flex flex-wrap gap-6 items-center justify-between"
>
  <div className="flex flex-wrap gap-6">
    {[
      { v: "200+", l: "Fleet Units" },
      { v: "120,000+", l: "Sq.Ft Warehouse" },
      { v: "40+", l: "Years Experience" },
      { v: "6", l: "Sabah Coverage Zones" },
    ].map(s => (
      <div key={s.l}>
        <p className="font-display font-extrabold text-primary text-xl tracking-wide">{s.v}</p>
        <p className="text-slate/40 text-[10px] tracking-widest uppercase font-body">{s.l}</p>
      </div>
    ))}
  </div>
  <Link href="/services"
    className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-primary-dark transition-colors duration-200">
    All Services <ArrowUpRight size={12} />
  </Link>
</motion.div>
```

### A3 — WhyCTSection — add quote + CTA
After the pillars grid, add:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="mt-6 pt-5 border-t border-slate/10 flex flex-col sm:flex-row items-center justify-between gap-4"
>
  <p className="text-slate/40 font-body italic text-sm max-w-md">
    &ldquo;Trusted by Telekom Malaysia, Petronas Carigali, and Ranhill Engineering for over a decade.&rdquo;
  </p>
  <Link href="/about"
    className="flex-shrink-0 inline-flex items-center gap-2 border border-primary/30 text-primary font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-all duration-200">
    Our Story <ArrowRight size={12} />
  </Link>
</motion.div>
```

### A4 — ProjectsSection — add metrics row
After header, before grid:
```tsx
<div className="grid grid-cols-3 gap-3 mb-6">
  {[
    { v: "10+", l: "Years with Telekom" },
    { v: "3", l: "Major Enterprise Clients" },
    { v: "100%", l: "On-Time Delivery" },
  ].map(m => (
    <div key={m.l} className="bg-white/4 border border-white/8 rounded-sm py-4 px-5 text-center">
      <p className="font-display font-bold text-white text-2xl">{m.v}</p>
      <p className="text-white/35 text-[10px] tracking-widest uppercase font-body mt-1">{m.l}</p>
    </div>
  ))}
</div>
```

---

## TASK B — Shared Inner Components + Data

### B1 — src/lib/services-data.ts
Single source of truth used by /services hub and /services/[slug]:

```ts
export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
  stats: { v: string; l: string }[];
  image: string;
  imageAlt: string;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "transportation",
    title: "Transportation",
    tagline: "Sabah's Largest Private Fleet",
    icon: "🚛",
    short: "200+ Fleet Units · LPKP Licensed",
    description: "CT Forwarding operates Sabah's most comprehensive private logistics fleet — 200+ units across 10 specialised vehicle types. From 20ft container haulage to oversized low-loader transport, every vehicle is LPKP licensed, GPS-tracked, and matched precisely to cargo requirements.",
    features: [
      "51 prime movers — 20ft & 40ft containers",
      "6 side loaders — self-loading container handling",
      "7 low loaders — triple & quad axle for heavy lift",
      "6 car carriers — multi-deck vehicle transport",
      "5 lorry cranes — lift-and-place project services",
      "Platform, pole, and specialised trailers",
      "GPS tracking on all units",
      "24/7 operations across Sabah",
    ],
    stats: [
      { v: "200+", l: "Fleet Units" },
      { v: "10", l: "Vehicle Types" },
      { v: "100%", l: "LPKP Licensed" },
      { v: "24/7", l: "Operations" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding prime mover container haulage",
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding & Customs Brokerage",
    tagline: "Licensed Customs Agent — Port to Warehouse",
    icon: "🚢",
    short: "Sea · Air · Customs Clearance",
    description: "CT Forwarding holds in-house Licensed Customs Agent status — a credential that delivers seamless port-to-warehouse clearance with no third-party delays. Sea freight, air freight, and full customs brokerage under one roof, backed by deep Sabah port knowledge built over 25+ years.",
    features: [
      "In-house Licensed Customs Agent",
      "Sea freight (FCL & LCL)",
      "Air freight handling",
      "Customs clearance & documentation",
      "Import/export regulatory compliance",
      "Dangerous goods handling certification",
      "Consolidation & deconsolidation",
      "Direct port relationships at KK Port",
    ],
    stats: [
      { v: "25+", l: "Years Port Experience" },
      { v: "FCL+LCL", l: "Sea Freight" },
      { v: "100%", l: "Compliance Rate" },
      { v: "In-House", l: "Customs Agent" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding freight forwarding customs clearance",
  },
  {
    slug: "warehousing",
    title: "Warehousing & Distribution",
    tagline: "120,000+ Sq.Ft at KKIP",
    icon: "🏭",
    short: "KKIP Strategic Location · Full-Service",
    description: "CT Forwarding's 120,000+ sq.ft warehouse at Kota Kinabalu Industrial Park is positioned at the strategic centre of Sabah's port and industrial logistics network. Full-service stuffing, unstuffing, inventory management, and precision last-mile distribution — all from one controlled facility.",
    features: [
      "120,000+ sq.ft at KKIP",
      "Container stuffing & unstuffing",
      "Inventory management systems",
      "Bonded warehouse capability",
      "Forklift & handling equipment on-site",
      "24/7 security & CCTV",
      "Last-mile distribution across KK",
      "Direct access to KKIP port infrastructure",
    ],
    stats: [
      { v: "120,000+", l: "Sq.Ft Total" },
      { v: "KKIP", l: "Strategic Location" },
      { v: "24/7", l: "Secure Operations" },
      { v: "Full", l: "Service Suite" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding KKIP warehouse facility",
  },
  {
    slug: "container-depot",
    title: "Container Depot & Open Yard",
    tagline: "Professionally Managed Container Storage",
    icon: "📦",
    short: "Secure · Inspected · Managed",
    description: "CT Forwarding's container depot and open yard at KKIP provides professionally managed container storage, inspection, and maintenance — positioned at the core of Sabah's port and industrial logistics network. Empty and laden containers handled with full documentation and chain of custody.",
    features: [
      "Container storage (20ft & 40ft)",
      "Empty container management",
      "Container inspection services",
      "Minor repair & maintenance",
      "Customs bonded yard",
      "Open yard for oversized cargo",
      "Full documentation & chain of custody",
      "Direct integration with port operations",
    ],
    stats: [
      { v: "KKIP", l: "Location" },
      { v: "20ft+40ft", l: "Container Types" },
      { v: "Bonded", l: "Yard Status" },
      { v: "Full", l: "Documentation" },
    ],
    image: "/images/fleet/side-loader.jpg",
    imageAlt: "CT Forwarding container depot open yard",
  },
  {
    slug: "breakbulk",
    title: "Breakbulk & Project Cargo",
    tagline: "Trusted by Petronas, Telekom & Ranhill",
    icon: "⚙️",
    short: "Heavy Lift · Oversized · High-Value",
    description: "CT Forwarding specialises in complex, high-value, and oversized project cargo — the category that demands the most from a logistics partner. Trusted by Sabah's largest infrastructure and energy players for over a decade, CT delivers precision-engineered transport plans for cargo that can't fail.",
    features: [
      "Heavy lift & oversized cargo transport",
      "Low-loader specialist operations",
      "Route survey & permit management",
      "Multi-axle load distribution planning",
      "Marine & cargo insurance coordination",
      "Multi-agency coordination",
      "Precision scheduling & delivery windows",
      "Site-to-site project cargo management",
    ],
    stats: [
      { v: "10+", l: "Years Project Cargo" },
      { v: "3", l: "Major Enterprise Clients" },
      { v: "7", l: "Low Loaders" },
      { v: "0", l: "Failed Deliveries" },
    ],
    image: "/images/projects/project-mega-machines.jpg",
    imageAlt: "CT Forwarding breakbulk project cargo heavy lift",
  },
  {
    slug: "other",
    title: "Specialised & Advisory Services",
    tagline: "Insurance · Consultation · Consolidation",
    icon: "🛡️",
    short: "Marine Insurance · Supply Chain Advisory",
    description: "Beyond transport and storage, CT Forwarding provides specialised services that complete the logistics picture — marine and inland cargo insurance, cargo consolidation and deconsolidation, and bespoke supply chain consultation for complex logistics challenges.",
    features: [
      "Marine cargo insurance",
      "Inland transit insurance",
      "Cargo consolidation services",
      "Deconsolidation & distribution",
      "Supply chain consultation",
      "Logistics optimisation advisory",
      "Regulatory & compliance guidance",
      "Customs advisory services",
    ],
    stats: [
      { v: "Full", l: "Insurance Cover" },
      { v: "Bespoke", l: "Advisory Plans" },
      { v: "25+", l: "Years Knowledge" },
      { v: "End-to-End", l: "Solutions" },
    ],
    image: "/images/fleet/lorry-crane.jpg",
    imageAlt: "CT Forwarding specialised advisory services",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find(s => s.slug === slug);
}

export const ALL_SLUGS = SERVICES_DATA.map(s => s.slug);
```

### B2 — src/components/inner/PageHero.tsx
```tsx
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage?: string;
  dark?: boolean;
  className?: string;
}

export function PageHero({ label, title, titleAccent, subtitle, bgImage, dark = true, className }: PageHeroProps) {
  return (
    <section
      className={cn("relative flex items-end pb-16 pt-40 overflow-hidden", dark ? "bg-carbon text-white" : "bg-smoke text-carbon", className)}
      style={{ minHeight: "38vh" }}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bgImage} alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/60 to-carbon/95" />
        </>
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <p className="text-primary-light text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-primary-light/60" />{label}
        </p>
        <h1 className="font-display font-extrabold uppercase tracking-wide leading-none mb-4"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}>
          {title}{titleAccent && <><br /><span className="text-primary-light">{titleAccent}</span></>}
        </h1>
        {subtitle && (
          <p className={cn("font-body leading-relaxed max-w-2xl", dark ? "text-white/55" : "text-slate/55")}
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
```

### B3 — src/components/inner/SectionLabel.tsx
```tsx
interface SectionLabelProps { children: React.ReactNode; light?: boolean; }

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p className={`text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-3 flex items-center gap-2 ${light ? "text-primary-light" : "text-primary"}`}>
      <span className={`w-8 h-px ${light ? "bg-primary-light" : "bg-primary"}`} />
      {children}
    </p>
  );
}
```

---

## TASK C — /about Page

**File:** `src/app/about/page.tsx`

Structure:
1. `export const metadata` — SEO title/description/OG
2. PageHero — dark, bgImage from aerial-yard.jpg
3. Company overview — 2-col: story paragraph + key facts card
4. Timeline — 1999 founding → 2010s growth → 2020s expansion
5. Directors section — 3 cards (Tsen Fun Min, Ricky Tsen, Joseph Chong)
6. Industry affiliations — PPLKKK, SFLA, FMFF badges
7. Footer (imported from ClientsSection bottom or standalone)

All animations: `motion.div whileInView`. No GSAP.

**SEO metadata:**
```tsx
export const metadata: Metadata = {
  title: "About Us | CT Forwarding & Transport Sdn Bhd",
  description: "Founded in 1999 in Kota Kinabalu, CT Forwarding & Transport is Sabah's premier logistics company — 200+ fleet units, CMILT-certified leadership, and 40+ years of combined expertise.",
  openGraph: {
    title: "About CT Forwarding & Transport",
    description: "Sabah's trusted logistics partner since 1999.",
    url: "https://ctforwarding.com.my/about",
  },
};
```

---

## TASK D — /services Hub + /services/[slug]

### D1 — /services hub page
**File:** `src/app/services/page.tsx`

Structure:
1. metadata (SEO)
2. PageHero
3. Services grid (3×2) — cards linking to /services/[slug], using SERVICES_DATA
4. Fleet teaser banner (link to transportation slug)
5. CTA section

### D2 — /services/[slug] page
**File:** `src/app/services/[slug]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import { getServiceBySlug, ALL_SLUGS, SERVICES_DATA } from "@/lib/services-data";

export async function generateStaticParams() {
  return ALL_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | CT Forwarding & Transport`,
    description: svc.description.slice(0, 155),
  };
}
```

Structure per slug:
1. PageHero with service title + tagline
2. Overview — full description paragraph
3. Features list — 2-col checklist with primary-coloured check icons
4. Stats bar — 4 stats from service data
5. Related services — 3 other service cards
6. CTA — "Get a Quote" → /contact

---

## TASK E — /projects Page

**File:** `src/app/projects/page.tsx`

Structure:
1. metadata
2. PageHero — "Our Projects · Trusted by Industry Leaders"
3. Featured projects — 3 full-width case study cards (Telekom, Petronas, Ranhill) with:
   - Large image (local file)
   - Client logo area / name
   - Scope + duration
   - Full description
   - Outcome / highlight metric
4. Fleet showcase band — link to /services/transportation
5. CTA

**Image mapping:**
- Telekom → `/images/fleet/lorry-crane.jpg`
- Petronas → `/images/projects/project-wire-rods.jpg`
- Ranhill → `/images/projects/project-mega-machines.jpg`

---

## TASK F — /contact Page + API Route

### F1 — Contact page
**File:** `src/app/contact/page.tsx`

Structure:
1. metadata
2. PageHero — "Contact Us · Let's Move Your Cargo"
3. 2-col layout:
   - Left: ContactForm (client component)
   - Right: contact info cards (phone, email, address, hours)
4. Office locations — KK HQ + KKIP Warehouse cards
5. Map embed placeholder (static image fallback)

### F2 — ContactForm component
**File:** `src/components/contact/ContactForm.tsx`

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email:   z.string().email("Please enter a valid email"),
  phone:   z.string().optional(),
  service: z.enum(["transportation","freight-forwarding","warehousing","container-depot","breakbulk","other","general"]),
  message: z.string().min(10, "Please provide more detail (min 10 characters)").max(1000),
});

type FormData = z.infer<typeof schema>;
```

Fields: name, company, email, phone, service (select), message, submit button.
States: idle → submitting → success / error.

### F3 — /api/contact/route.ts
```ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  service: z.string(),
  message: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  // Resend integration — requires RESEND_API_KEY env var
  const { name, company, email, phone, service, message } = parsed.data;
  
  if (!process.env.RESEND_API_KEY) {
    // Dev mode: log and return success (Resend not configured yet)
    console.log("[Contact form]", { name, email, service, message });
    return NextResponse.json({ success: true });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const { error } = await resend.emails.send({
    from: "CT Website <noreply@ctforwarding.com.my>",
    to: ["contact@ctforwarding.com.my"],
    replyTo: email,
    subject: `[CT Website] Enquiry from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <h2>New Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  return NextResponse.json({ success: true });
}
```

---

## TASK G — /news Page (Static)

**File:** `src/app/news/page.tsx`

Structure:
1. metadata
2. PageHero — "News & Updates"
3. Category tabs — Announcements / Careers / Resources
4. Static placeholder cards (3 articles per category — hardcoded, Sanity-ready structure)
5. "Full CMS coming soon" note for Careers tab
6. CTA — join the team

---

## Production Checklist (Review Agent runs this)

### Build
- [ ] `npm run build` exits with code 0, 0 type errors, 0 ESLint errors
- [ ] No `any` types introduced
- [ ] No hardcoded secrets

### SEO
- [ ] Every page has `export const metadata` with title, description, openGraph
- [ ] `src/app/sitemap.ts` updated to include all new routes
- [ ] `robots.ts` unchanged (already correct)

### Performance
- [ ] All images use `<Image>` with `sizes` prop (or explicit `fill` + `sizes`)
- [ ] No unoptimized external images in inner pages
- [ ] No unused imports
- [ ] Client components are leaf nodes — no "use client" on layout wrappers

### Accessibility
- [ ] All interactive elements have `aria-label` or visible label
- [ ] Form fields have associated `<label>` elements
- [ ] Focus styles visible (Tailwind `focus-visible:ring`)
- [ ] Color contrast passes WCAG AA

### Mobile
- [ ] All pages tested at 375px, 768px, 1280px viewports
- [ ] No horizontal overflow
- [ ] Touch targets ≥ 44px
- [ ] Font sizes ≥ 14px on mobile

### Security
- [ ] Contact form: Zod validation server-side in API route
- [ ] API route: no secrets in response
- [ ] No `dangerouslySetInnerHTML` used
- [ ] No SQL / injection vectors

### Routing
- [ ] /services/[slug] has `generateStaticParams` — all 6 slugs pre-rendered
- [ ] All nav links resolve correctly (no 404s)
- [ ] 404 page exists (Next.js default is fine)

---

## Dependencies to Install

```powershell
npm install react-hook-form @hookform/resolvers zod resend
```

**Verify:** `node -e "require('react-hook-form'); require('zod'); console.log('ok')"`

---

## Sitemap Update

`src/app/sitemap.ts` — add all Phase 3 routes:
```ts
const phase3Routes = [
  "/about",
  "/services",
  "/services/transportation",
  "/services/freight-forwarding",
  "/services/warehousing",
  "/services/container-depot",
  "/services/breakbulk",
  "/services/other",
  "/projects",
  "/contact",
  "/news",
];
```

---

## Git Commit Sequence

```
feat: phase 3 pre-flight — fix navbar theme on inner pages, homepage content density
feat: phase 3 shared — inner page components, services data layer
feat: phase 3 about — /about page with directors, timeline, affiliations  
feat: phase 3 services — /services hub and all 6 individual service pages
feat: phase 3 projects — /projects case studies gallery
feat: phase 3 contact — /contact page, ContactForm, /api/contact route
feat: phase 3 news — /news static listing
feat: phase 3 sitemap — add all new routes to sitemap
```
