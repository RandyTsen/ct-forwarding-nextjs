"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle, Truck, Hammer, Factory } from "lucide-react";
import { PageHero } from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import type { SanityProject } from "./types";

// ---------------------------------------------------------------------------
// Hardcoded fallback data
// ---------------------------------------------------------------------------

const FALLBACK_PROJECTS = [
  {
    id: "telekom",
    accentColor: "#0B7A3A",
    tag: "Telecommunications Infrastructure",
    client: "Telekom Malaysia Berhad",
    scope: "Lorry Crane Services — Sabah-wide Network",
    duration: "10+ Continuous Years",
    period: "2015 — Present",
    image: "/images/fleet/lorry-crane.jpg",
    imageAlt: "CT Forwarding lorry crane services for Telekom Malaysia",
    highlight: "10+ Years",
    highlightLabel: "Preferred Contractor",
    description:
      "Retained as preferred lorry crane contractor across Telekom Malaysia's entire Sabah infrastructure network for over a decade. A relationship built on flawless execution, round-the-clock availability, and zero-compromise reliability — making CT the backbone of Sabah's telecommunications physical infrastructure.",
    outcomes: [
      "100% uptime commitment across all contracted jobs",
      "Sabah-wide rapid response capability",
      "Dedicated fleet allocation for TM operations",
      "Zero incidents across 10+ year relationship",
    ],
    metrics: [
      { v: "10+", l: "Years" },
      { v: "100%", l: "Uptime" },
      { v: "Sabah", l: "Coverage" },
      { v: "Preferred", l: "Status" },
    ],
  },
  {
    id: "petronas",
    accentColor: "#C9A84C",
    tag: "Oil & Gas — National Energy",
    client: "Petronas Carigali Sdn Bhd",
    scope: "Carbon Steel Line Pipe Haulage",
    duration: "Major Infrastructure Project",
    period: "Multi-phase delivery",
    image: "/images/projects/project-wire-rods.jpg",
    imageAlt: "CT Forwarding steel pipe haulage for Petronas",
    highlight: "High-Stakes",
    highlightLabel: "Zero Damage Delivery",
    description:
      "Precision transport of carbon steel line pipes from Kota Kinabalu Port to KKIP storage — high-value cargo demanding specialist load-securing, route engineering, and exact delivery timing for Malaysia's national oil company. Every pipe delivered without damage, on schedule.",
    outcomes: [
      "Specialist load securing for pipe cargo",
      "Port-to-KKIP route engineering and permits",
      "Zero damage across full delivery scope",
      "Real-time delivery coordination with site teams",
    ],
    metrics: [
      { v: "0", l: "Cargo Damage" },
      { v: "100%", l: "On Schedule" },
      { v: "KK Port", l: "Origin" },
      { v: "KKIP", l: "Destination" },
    ],
  },
  {
    id: "ranhill",
    accentColor: "#2FA85A",
    tag: "Energy — Power Generation",
    client: "Ranhill Engineering & Construction",
    scope: "Power Station Project Cargo — Heavy Lift",
    duration: "Power Generation Infrastructure",
    period: "Sabah power station development",
    image: "/images/projects/project-mega-machines.jpg",
    imageAlt: "CT Forwarding heavy lift project cargo for Ranhill power station",
    highlight: "Complex Lift",
    highlightLabel: "Oversized Plant Equipment",
    description:
      "Complex heavy-lift and breakbulk management for Ranhill's Sabah power station development — oversized plant equipment demanding low-loader specialist transport, precision scheduling, and multi-agency coordination. CT's team engineered the entire movement plan, from route survey to final placement.",
    outcomes: [
      "Full movement plan engineering by CT team",
      "Low-loader specialist operations (triple & quad axle)",
      "Multi-agency coordination — JKR, police, port authority",
      "Precision placement at power station site",
    ],
    metrics: [
      { v: "7", l: "Low Loaders" },
      { v: "Multi", l: "Agency Coord." },
      { v: "0", l: "Incidents" },
      { v: "On-Site", l: "Engineering" },
    ],
  },
] as const;

type ProjectData = {
  id: string;
  accentColor: string;
  tag: string;
  client: string;
  scope: string;
  duration: string;
  period: string;
  highlight: string;
  highlightLabel: string;
  description: string;
  outcomes: readonly string[];
  metrics: readonly { v: string; l: string }[];
  image: string;
  imageAlt: string;
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ProjectImage({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="relative w-full h-full bg-[#1A2332]/60 min-h-[300px] lg:min-h-0">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover opacity-60"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.opacity = "0";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1117]/60" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-md ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      {/* Image column — 40% */}
      <div className="lg:w-[40%] relative overflow-hidden">
        <ProjectImage image={project.image} imageAlt={project.imageAlt} />
        {/* Highlight badge */}
        <div className="absolute top-6 left-6 flex flex-col items-start gap-0.5">
          <span
            className="font-display text-3xl font-black leading-none text-white drop-shadow-lg"
          >
            {project.highlight}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80 drop-shadow">
            {project.highlightLabel}
          </span>
        </div>
      </div>

      {/* Content column — 60% */}
      <div className="lg:w-[60%] flex flex-col justify-center p-8 lg:p-12 gap-6">
        {/* Tag */}
        <span
          className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
          style={{ backgroundColor: project.accentColor + "1A", color: project.accentColor }}
        >
          {project.tag}
        </span>

        {/* Client + scope */}
        <div>
          <h2 className="font-display text-3xl lg:text-4xl font-black text-[#0D1117] leading-tight">
            {project.client}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#1A2332]/70 tracking-wide">
            {project.scope}
          </p>
          <p className="mt-0.5 text-xs text-[#1A2332]/50 uppercase tracking-wider">
            {project.period}
          </p>
        </div>

        {/* Description */}
        <p className="text-[#1A2332]/80 leading-relaxed text-sm lg:text-base">
          {project.description}
        </p>

        {/* Outcomes checklist */}
        <ul className="flex flex-col gap-2">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2.5 text-sm text-[#1A2332]/75">
              <CheckCircle
                className="shrink-0 mt-0.5"
                size={16}
                style={{ color: project.accentColor }}
              />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1A2332]/10">
          {project.metrics.map((m) => (
            <div key={m.l} className="flex flex-col items-center text-center">
              <span
                className="font-display text-xl lg:text-2xl font-black"
                style={{ color: project.accentColor }}
              >
                {m.v}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#1A2332]/50 mt-0.5">
                {m.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Fleet capability data
// ---------------------------------------------------------------------------

const FLEET_HIGHLIGHTS = [
  {
    title: "Prime Movers",
    desc: "40-tonne rated, 6×4 Volvo & Hino fleet for container haulage and breakbulk across Sabah.",
    icon: <Truck size={28} className="text-primary-light" />,
  },
  {
    title: "Low Loaders",
    desc: "Triple and quad-axle low-bed trailers for oversized plant equipment and heavy machinery.",
    icon: <Hammer size={28} className="text-primary-light" />,
  },
  {
    title: "Lorry Cranes",
    desc: "12–20 tonne capacity lorry cranes for precision lifts — the backbone of TM infrastructure works.",
    icon: <Factory size={28} className="text-primary-light" />,
  },
];

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface Props {
  sanityProjects: SanityProject[];
}

export function ProjectsPageContent({ sanityProjects }: Props) {
  // Use Sanity data if available, otherwise fall back to hardcoded projects
  const projects: ProjectData[] =
    sanityProjects.length > 0
      ? sanityProjects.map((p) => ({
          id: p.id,
          accentColor: p.accentColor ?? "#0B7A3A",
          tag: p.tag ?? "",
          client: p.client,
          scope: p.scope ?? "",
          duration: p.duration ?? "",
          period: p.period ?? "",
          highlight: p.highlight ?? "",
          highlightLabel: p.highlightLabel ?? "",
          description: p.description ?? "",
          outcomes: p.outcomes ?? [],
          metrics: p.metrics ?? [],
          image: p.image ?? "/images/hero/aerial-yard.jpg",
          imageAlt: p.imageAlt ?? p.client,
        }))
      : (FALLBACK_PROJECTS as unknown as ProjectData[]);
  return (
    <InnerLayout>
      {/* Hero */}
      <PageHero
        label="Notable Projects"
        title="Trusted By"
        titleAccent="Industry Leaders"
        subtitle="Real projects. Real stakes. CT Forwarding has delivered for Sabah's most demanding enterprise clients — on time, zero incidents, every time."
        bgImage="/images/hero/aerial-yard.jpg"
      />

      {/* Overview stats band */}
      <section className="bg-[#F4F6F3] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { v: "3", l: "Major Clients" },
              { v: "10+", l: "Years" },
              { v: "0", l: "Incidents" },
              { v: "100%", l: "On-Time" },
            ].map((stat) => (
              <motion.div key={stat.l} variants={fadeUp} className="flex flex-col items-center">
                <span className="font-display text-4xl lg:text-5xl font-black text-[#0B7A3A]">
                  {stat.v}
                </span>
                <span className="mt-1 text-xs uppercase tracking-widest text-[#1A2332]/60 font-semibold">
                  {stat.l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Fleet capability teaser */}
      <section className="bg-[#0D1117] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-widest text-[#0B7A3A] font-semibold mb-3">
              Fleet Capability
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-black text-white">
              The Fleet Behind Every Delivery
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {FLEET_HIGHLIGHTS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-[#1A2332]/60 p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/services/transportation"
              className="inline-flex items-center gap-2 text-[#0B7A3A] hover:text-[#2FA85A] font-semibold text-sm transition-colors"
            >
              View Full Fleet Capabilities
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A3A] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl lg:text-4xl font-black text-white"
            >
              Have a Complex Cargo Challenge?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 leading-relaxed">
              Our team has solved Sabah's toughest logistics problems for over a decade. Tell us what
              you need — we'll engineer the solution.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0B7A3A] hover:bg-[#F4F6F3] font-bold px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-widest"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </InnerLayout>
  );
}
