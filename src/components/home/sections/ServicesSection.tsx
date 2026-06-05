"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Truck, Warehouse, Package, Cog, Shield } from "lucide-react";

const SERVICES = [
  {
    id: "transportation",
    icon: <Truck size={22} className="text-primary" />,
    title: "Transportation",
    short: "51 Prime Movers · GPS-Tracked",
    description: "51 prime movers, 6 side loaders, 7 low loaders, 5 lorry cranes — GPS-tracked and LPKP licensed. Whatever your cargo profile, CT has the exact equipment to move it.",
    href: "/services/transportation",
  },
  {
    id: "freight-forwarding",
    icon: <Package size={22} className="text-primary" />,
    title: "Freight Forwarding & Customs Brokerage",
    short: "Licensed Agent · In-House",
    description: "In-house Licensed Customs Agent status delivers seamless port-to-warehouse clearance with no third-party delays. Full customs brokerage backed by 25+ years of Sabah port knowledge.",
    href: "/services/freight-forwarding",
  },
  {
    id: "warehousing",
    icon: <Warehouse size={22} className="text-primary" />,
    title: "Warehousing & Distribution",
    short: "120,000+ Sq.Ft at KKIP",
    description: "120,000+ sq.ft at KKIP — stuffing, unstuffing, inventory management, and distribution from Sabah's most strategically located logistics facility.",
    href: "/services/warehousing",
  },
  {
    id: "container-depot",
    icon: <Package size={22} className="text-primary" />,
    title: "Container Depot & Open Yard Storage",
    short: "Secure · Inspected · Managed",
    description: "Secure, bonded, professionally managed container storage at KKIP. Empty or laden — tracked, inspected, and ready when you need it.",
    href: "/services/container-depot",
  },
  {
    id: "breakbulk",
    icon: <Cog size={22} className="text-primary" />,
    title: "Breakbulk & Project Cargo",
    short: "Petronas · Telekom · Ranhill",
    description: "Trusted by Petronas, Telekom, and Ranhill for the jobs that cannot fail. Heavy lift, oversized, high-value — CT engineers the move, not just the transport.",
    href: "/services/breakbulk",
  },
  {
    id: "other",
    icon: <Shield size={22} className="text-primary" />,
    title: "Other Services",
    short: "Insurance · Advisory · Consolidation",
    description: "Marine cargo insurance, cargo consolidation, deconsolidation, and bespoke supply chain consultation. CT's expertise extends well beyond the vehicle and the warehouse.",
    href: "/services/other",
  },
];

export function ServicesSection() {
  return (
    <div className="bg-white flex flex-col justify-center overflow-hidden" style={{ height: "100dvh" }}>
      <div className="w-full max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 py-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-3"
        >
          <div>
            <p className="text-primary text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />What We Do
            </p>
            <h2 className="font-display font-extrabold text-carbon uppercase tracking-wide leading-none"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
              Total Logistics <span className="text-primary">Solution</span>
            </h2>
          </div>
          <p className="text-slate/55 font-body leading-relaxed lg:text-right lg:max-w-sm"
            style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}>
            Six services, one partner — port-to-door, managed by a team with
            <strong className="text-carbon"> 25+ years</strong> of Sabah logistics expertise.
          </p>
        </motion.div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} delay={i * 0.07} />
          ))}
        </div>

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
              { v: "25+", l: "Years in Sabah" },
              { v: "6", l: "Service Lines" },
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

      </div>
    </div>
  );
}

function ServiceCard({ svc, delay }: { svc: typeof SERVICES[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link href={svc.href}
        className="group relative flex flex-col justify-between rounded-sm border border-slate/12 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300 overflow-hidden h-full"
        style={{ padding: "clamp(1rem,2vw,1.5rem)" }}
      >
        {/* Subtle hover fill */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-sm bg-primary/8 flex items-center justify-center flex-shrink-0">
              {svc.icon}
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-body font-bold px-2 py-0.5 rounded-sm bg-primary/8 text-primary/70">
              {svc.short}
            </span>
          </div>
          <h3 className="font-display font-bold text-carbon uppercase tracking-wide leading-snug mb-2 group-hover:text-primary transition-colors"
            style={{ fontSize: "clamp(0.85rem,1.3vw,1.1rem)" }}>
            {svc.title}
          </h3>
          <p className="text-slate/55 font-body leading-relaxed"
            style={{ fontSize: "clamp(0.75rem,1vw,0.875rem)" }}>
            {svc.description}
          </p>
        </div>

        <div className="relative flex items-center gap-1.5 mt-4 text-[11px] font-body font-bold tracking-widest uppercase text-primary/60 group-hover:text-primary transition-colors">
          Explore <ArrowUpRight size={12} />
        </div>
      </Link>
    </motion.div>
  );
}
