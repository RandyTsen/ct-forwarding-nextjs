"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero }    from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { SectionLabel } from "@/components/inner/SectionLabel";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─── */
const TIMELINE = [
  { year: "1999", event: "CT Forwarding & Transport Sdn Bhd founded in Kota Kinabalu, Sabah" },
  { year: "2003", event: "Expanded fleet to 50+ units, established core Sabah routes" },
  { year: "2007", event: "KKIP warehouse operations commenced — 120,000+ sq.ft facility" },
  { year: "2010", event: "Fleet grew to 100+ units, licensed as Customs Agent" },
  { year: "2015", event: "Awarded preferred lorry crane contractor by Telekom Malaysia" },
  { year: "2020", event: "Fleet exceeded 200 units, Petronas Carigali & Ranhill partnerships deepened" },
  { year: "2025", event: "Digital infrastructure upgrade, online platform launch" },
];

const DIRECTORS = [
  {
    name:  "Tsen Fun Min",
    title: "Operations Director",
    points: [
      "Oversees CT's 200+ vehicle fleet and day-to-day logistics operations",
      "30+ years in Sabah transportation and logistics",
      "Deep expertise in fleet management, route optimisation, and operational efficiency",
    ],
  },
  {
    name:  "Ricky Tsen",
    title: "Commercial Director",
    points: [
      "Leads client relationships, business development, and strategic partnerships",
      "Key architect of CT's enterprise client portfolio including Telekom Malaysia",
      "25+ years building Sabah's logistics commercial landscape",
    ],
  },
  {
    name:  "Joseph Chong CMILT",
    title: "Finance & Administration Director",
    points: [
      "Chartered Member, Chartered Institute of Logistics & Transport (CMILT)",
      "President, Persatuan Pengusaha Lori KK (PPLKKK)",
      "Deputy President, Sabah Freight Forwarders & Logistics Association (SFLA)",
      "Council Member, Federation of Malaysia Freight Forwarders (FMFF)",
      "Internationally recognised logistics leadership and governance expertise",
    ],
  },
];

const AFFILIATIONS = [
  { badge: "SSM",   label: "SSM Registered",       detail: "199901025995 (500895-V)" },
  { badge: "SST",   label: "SST Registered",        detail: "S10-1808-31012358" },
  { badge: "LPKP",  label: "LPKP Licensed Fleet",   detail: "All 200+ units" },
  { badge: "CA",    label: "Licensed Customs Agent", detail: "In-house capability" },
  { badge: "CMILT", label: "CMILT Certified",        detail: "Joseph Chong, Director" },
  { badge: "PPLKKK",label: "PPLKKK",                 detail: "Joseph Chong, President" },
  { badge: "SFLA",  label: "SFLA",                   detail: "Joseph Chong, Deputy President" },
  { badge: "FMFF",  label: "FMFF",                   detail: "Joseph Chong, Council Member" },
];

/* ─── Component ─── */
export function AboutPageContent() {
  return (
    <InnerLayout>
      {/* 1 ─ Hero */}
      <PageHero
        label="Our Company"
        title="About CT"
        titleAccent="Forwarding & Transport"
        subtitle="Serving Sabah's logistics needs since 1999 — with a 200+ unit fleet, CMILT-certified leadership, and partnerships built on trust."
        dark
      />

      {/* 2 ─ Company Overview */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-smoke">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Story */}
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mt-3 mb-6 leading-tight">
                25 Years of Moving <span className="text-primary">Sabah Forward</span>
              </h2>
              <div className="space-y-5 text-slate/80 font-body leading-relaxed">
                <p>
                  CT Forwarding & Transport Sdn Bhd was founded in 1999 in Kota Kinabalu, Sabah — born from a vision
                  to provide reliable, professional logistics services to a state rich in resources but underserved in
                  modern transport capability.
                </p>
                <p>
                  Over the past 25 years, we have grown from a small haulage operator into Sabah&apos;s most trusted
                  integrated logistics provider. Today, our 200+ unit fleet covers every major corridor in Sabah —
                  from Kota Kinabalu to Tawau, Sandakan to Keningau.
                </p>
                <p>
                  Our 120,000+ sq.ft KKIP warehouse, in-house licensed customs agents, and CMILT-certified leadership
                  give clients a single-source solution for freight forwarding, container haulage, warehousing, and
                  project cargo.
                </p>
                <p>
                  We are proud to serve Telekom Malaysia (10+ years), Petronas Carigali, and Ranhill Engineering —
                  and hundreds of SME and commercial clients across Sabah.
                </p>
              </div>
            </motion.div>

            {/* Key Facts Card */}
            <motion.div variants={fadeUp}>
              <div className="bg-slate rounded-2xl p-8 lg:p-10 text-white shadow-2xl">
                <h3 className="font-display text-2xl font-bold text-gold mb-8 tracking-wide uppercase">
                  Key Facts
                </h3>
                <dl className="space-y-5">
                  {[
                    ["Founded",      "1999"],
                    ["Registration", "SSM 199901025995 (500895-V)"],
                    ["SST",          "S10-1808-31012358"],
                    ["Fleet",        "200+ units (51 prime movers, 6 side loaders, 7 low loaders, 6 car carriers, 5 lorry cranes)"],
                    ["Warehouse",    "120,000+ sq.ft at KKIP"],
                    ["Coverage",     "KK · Keningau · Kudat · Lahad Datu · Sandakan · Tawau"],
                    ["Phone",        "088-259663 / 258662"],
                    ["Email",        "contact@ctforwarding.com.my"],
                    ["HQ",           "Unit A905, 9th Floor, Wisma Merdeka Phase 1, Jalan Tun Razak, 88000 KK, Sabah"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <dt className="text-xs font-body font-semibold uppercase tracking-widest text-gold/80">{label}</dt>
                      <dd className="font-body text-white/90 text-sm leading-snug">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3 ─ Timeline */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mt-3">
              25 Years of <span className="text-primary">Milestones</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

            <div className="space-y-6">
              {TIMELINE.map(({ year, event }) => (
                <motion.div
                  key={year}
                  variants={fadeUp}
                  className="flex items-start gap-6 md:gap-8"
                >
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-24 md:w-28">
                    <div className="bg-primary text-white font-display text-xl font-bold rounded-sm px-3 py-2 text-center shadow-md shadow-primary/25">
                      {year}
                    </div>
                  </div>
                  {/* Event */}
                  <div className="flex-1 bg-smoke rounded-xl px-6 py-4 mt-1 shadow-sm">
                    <p className="font-body text-slate leading-relaxed">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 ─ Leadership */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-smoke">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mt-3">
              The Team Behind <span className="text-primary">CT</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {DIRECTORS.map(({ name, title, points }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="bg-slate px-6 py-6">
                  {/* Monogram avatar */}
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                    <span className="font-display text-white text-2xl font-bold">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white leading-tight">{name}</h3>
                  <p className="font-body text-gold text-sm mt-1 font-medium">{title}</p>
                </div>
                {/* Card body */}
                <div className="px-6 py-6 flex-1">
                  <ul className="space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body text-slate/80 text-sm leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5 ─ Affiliations */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <SectionLabel>Credentials & Affiliations</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mt-3">
              Recognised. <span className="text-primary">Certified. Trusted.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {AFFILIATIONS.map(({ badge, label, detail }) => (
              <motion.div
                key={badge}
                variants={fadeUp}
                className="bg-smoke border border-slate/10 rounded-xl px-5 py-6 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                  <span className="font-display text-white text-xs font-bold tracking-tight leading-tight text-center px-1">
                    {badge}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-slate text-sm leading-tight">{label}</p>
                  <p className="font-body text-slate/60 text-xs mt-1 leading-snug">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 ─ CTA */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-8"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel light>Get in Touch</SectionLabel>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-3 leading-tight">
                Ready to Partner <span className="text-gold">With Us?</span>
              </h2>
              <p className="font-body text-white/80 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                With 25+ years of Sabah expertise, a 200+ unit fleet, and a team of industry professionals —
                CT Forwarding is ready to move your cargo.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-body font-semibold rounded-sm hover:bg-smoke transition-colors duration-200 shadow-lg shadow-black/20"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-body font-semibold rounded-sm hover:bg-white/10 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/60 font-body text-sm">
              <span>088-259663 / 258662</span>
              <span className="hidden sm:inline">·</span>
              <span>contact@ctforwarding.com.my</span>
              <span className="hidden sm:inline">·</span>
              <span>Wisma Merdeka, Kota Kinabalu, Sabah</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </InnerLayout>
  );
}
