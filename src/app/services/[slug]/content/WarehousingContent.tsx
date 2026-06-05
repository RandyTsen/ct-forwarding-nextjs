"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Warehouse, Package, Truck, ClipboardList, Star } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const MEGA_STATS = [
  { v: "120,000+", l: "Sq.Ft Facility" },
  { v: "KKIP", l: "Strategic Location" },
  { v: "24/7", l: "Secure Operations" },
];

const SERVICES = [
  {
    icon: <Warehouse size={22} className="text-[#0B7A3A]" />,
    title: "Storage Solutions",
    desc: "Secure, adaptable storage for any inventory type. Short-term or long-term — CT's facility scales to your needs.",
  },
  {
    icon: <Package size={22} className="text-[#0B7A3A]" />,
    title: "Cargo Consolidation",
    desc: "Cargo prepared for transshipment with precision. We consolidate and optimise before it moves.",
  },
  {
    icon: <Truck size={22} className="text-[#0B7A3A]" />,
    title: "Product Distribution",
    desc: "Scheduled delivery of your products to end receivers. Last-mile coordination across Kota Kinabalu.",
  },
  {
    icon: <ClipboardList size={22} className="text-[#0B7A3A]" />,
    title: "Inventory Control",
    desc: "Real-time tracking of stock in and out. CT maintains ideal inventory levels so you never run short or overstock.",
  },
  {
    icon: <Star size={22} className="text-[#0B7A3A]" />,
    title: "Enhanced Services",
    desc: "Labelling, quality control inspections, and bespoke solutions for specific business requirements.",
  },
];

const KKIP_BULLETS = [
  "Direct port access — faster cargo movement",
  "Industrial park infrastructure — reliable utilities",
  "24/7 security with CCTV coverage",
];

export function WarehousingContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Sabah's Strategic Hub"
        title="Warehousing &"
        titleAccent="Distribution"
        subtitle="120,000+ sq.ft at KKIP. Positioned at the centre of Sabah's port and industrial network."
        dark
      />

      {/* Mega Stat Banner */}
      <section className="bg-[#0B7A3A] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {MEGA_STATS.map((stat, i) => (
              <motion.div
                key={stat.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display font-extrabold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
                  {stat.v}
                </p>
                <p className="font-body text-white/60 tracking-[0.25em] uppercase text-xs">
                  {stat.l}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-28"
              >
                <p className="text-[11px] tracking-[0.45em] uppercase font-body font-semibold text-[#0B7A3A] mb-3">
                  Full Service Suite
                </p>
                <h2 className="font-display font-extrabold uppercase tracking-wide text-[#0D1117] leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  What We Do Inside
                </h2>
              </motion.div>
            </div>

            {/* Right — service rows */}
            <div className="lg:col-span-8 space-y-6">
              {SERVICES.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-5 p-5 border border-[#1A2332]/10 rounded-sm hover:border-[#0B7A3A]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#0B7A3A]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wide text-[#0D1117] mb-1"
                      style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}>
                      {svc.title}
                    </h3>
                    <p className="font-body text-[#1A2332]/60 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KKIP Callout */}
      <section className="bg-[#0D1117] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] tracking-[0.45em] uppercase font-body font-semibold text-[#2FA85A] mb-4">
                Location Advantage
              </p>
              <h2 className="font-display font-extrabold uppercase tracking-wide text-white mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Why KKIP?
              </h2>
              <ul className="space-y-3">
                {KKIP_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-white/65 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A3A] flex-shrink-0 mt-2" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-right"
            >
              <p className="font-display font-extrabold uppercase tracking-wide text-[#C9A84C] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
                Strategic.<br />Secure.<br />Sabah&apos;s Best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F6F3] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-wide text-[#0D1117] mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Store and Distribute With CT
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B7A3A] text-white font-body font-bold text-sm px-8 py-4 rounded-sm hover:bg-[#065C2B] transition-colors"
          >
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </InnerLayout>
  );
}
