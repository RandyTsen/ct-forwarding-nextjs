"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "telekom", color: "#0B7A3A", tag: "Telecommunications",
    client: "Telekom Malaysia",
    scope: "Lorry Crane Services — Sabah-wide",
    duration: "10+ Continuous Years",
    img: "/images/fleet/lorry-crane.jpg",
    description: "Retained as preferred lorry crane contractor across Telekom Malaysia's entire Sabah infrastructure network for over a decade. A relationship built on flawless execution, round-the-clock availability, and zero-compromise reliability.",
    highlight: "10+ Years",
  },
  {
    id: "petronas", color: "#C9A84C", tag: "Oil & Gas",
    client: "Petronas Carigali",
    scope: "Carbon Steel Line Pipe Haulage",
    duration: "Major Infrastructure",
    img: "/images/projects/project-wire-rods.jpg",
    description: "Precision transport of carbon steel line pipes from Kota Kinabalu Port to KKIP storage — high-value cargo demanding specialist load-securing, route engineering, and exact delivery timing for Malaysia's national oil company.",
    highlight: "High-Stakes",
  },
  {
    id: "ranhill", color: "#2FA85A", tag: "Energy",
    client: "Ranhill Engineering",
    scope: "Power Station Project Cargo",
    duration: "Power Generation",
    img: "/images/projects/project-mega-machines.jpg",
    description: "Complex heavy-lift and breakbulk management for Ranhill's Sabah power station development — oversized plant equipment demanding low-loader specialist transport, precision scheduling, and multi-agency coordination.",
    highlight: "Complex Lift",
  },
];

export function ProjectsSection() {
  return (
    <div className="bg-carbon flex flex-col justify-center overflow-hidden" style={{ height: "100dvh" }}>
      <div className="w-full max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 py-8">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4"
        >
          <div>
            <p className="text-primary-light text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-light" />Notable Projects
            </p>
            <h2 className="font-display font-extrabold text-white uppercase tracking-wide leading-none"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
              Trusted by<br className="hidden sm:block" />
              <span className="text-primary-light"> Industry Leaders</span>
            </h2>
          </div>
          <Link href="/projects"
            className="group inline-flex items-center gap-2 text-white/40 hover:text-white font-body text-xs tracking-widest uppercase transition-colors self-start lg:self-end">
            View All Projects <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { v: "10+", l: "Years with Telekom" },
            { v: "3", l: "Major Enterprise Clients" },
            { v: "100%", l: "On-Time Delivery" },
          ].map(m => (
            <div key={m.l} className="bg-white/4 border border-white/8 rounded-sm py-4 px-5 text-center">
              <p className="font-display font-bold text-white text-2xl tracking-wide">{m.v}</p>
              <p className="text-white/35 text-[10px] tracking-widest uppercase font-body mt-1">{m.l}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: "clamp(100px,12vw,160px)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.client}
                  className="w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display="none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-carbon/90" />
                {/* Highlight badge */}
                <span className="absolute top-3 right-3 text-[9px] font-body font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                  style={{ backgroundColor: `${p.color}25`, color: p.color }}>
                  {p.highlight}
                </span>
              </div>

              <div className="flex flex-col flex-1 relative" style={{ padding: "clamp(1rem,1.8vw,1.4rem)" }}>
                <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: p.color }} />

                <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-body font-bold px-2.5 py-1 rounded-sm mb-4 self-start"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}>
                  {p.tag}
                </span>

                <h3 className="font-display font-bold text-white uppercase tracking-wide leading-tight mb-1 group-hover:text-primary-light transition-colors duration-200"
                  style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)" }}>
                  {p.client}
                </h3>
                <p className="text-white/35 font-body mb-3" style={{ fontSize: "clamp(0.7rem,0.9vw,0.8rem)" }}>{p.scope}</p>
                <p className="text-white/60 font-body leading-relaxed flex-1" style={{ fontSize: "clamp(0.8rem,1vw,0.9rem)" }}>
                  {p.description}
                </p>
                <p className="text-white/20 font-body tracking-widest uppercase mt-4" style={{ fontSize: "0.65rem" }}>{p.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
