"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Cog, CalendarDays } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const CAPABILITIES = [
  {
    icon: <Truck size={36} className="text-[#2FA85A]" />,
    title: "Transportation of Heavy & Oversized Items",
    desc: "Specialized transport for cargo that defies standard logistics. Low-loader fleet, route engineering, multi-axle coordination — CT moves what can't be refused.",
  },
  {
    icon: <Cog size={36} className="text-[#2FA85A]" />,
    title: "Unique Project Arrangements",
    desc: "No two project cargo jobs are the same. CT engineers bespoke logistics plans — from route survey to permit management to on-site placement.",
  },
  {
    icon: <CalendarDays size={36} className="text-[#2FA85A]" />,
    title: "Long-Term Project Partnerships",
    desc: "CT's enterprise clients don't change their logistics partner. Telekom Malaysia has worked with CT for 10+ consecutive years. That's what consistent excellence builds.",
  },
];

const PROJECTS = [
  {
    name: "Metal Rods",
    desc: "4,300 metric tonnes of metal rods transported from port to multiple delivery points. Full load-securing plan engineered by CT's team.",
    image: null,
  },
  {
    name: "Mega Machines",
    desc: "119,000 metric tonnes of industrial machinery transported port-to-Semporna. Sabah's most complex breakbulk operation of its year.",
    image: "/images/projects/project-mega-machines.jpg",
  },
  {
    name: "Wire Rod in Coils",
    desc: "83 bundles · 150 metric tonnes · wire rod in coils. Port to KKIP, zero cargo damage, precision handling throughout.",
    image: "/images/projects/project-wire-rods.jpg",
  },
  {
    name: "Tank Machines",
    desc: "Transport of industrial tank machinery. Multi-axle low-loader operations with site-access route planning.",
    image: null,
  },
  {
    name: "Tourist Cabin Modules",
    desc: "Prefabricated tourist cabin modules transported and placed on-site. Dimensional cargo requiring precision scheduling.",
    image: null,
  },
  {
    name: "England to KK to Labuan",
    desc: "International cargo movement from England to Kota Kinabalu, then onward to Labuan. Multi-modal coordination.",
    image: null,
  },
  {
    name: "Boat Transport to Labuan",
    desc: "Marine vessel transport. Heavy lift loading, sea crossing coordination, and final placement in Labuan.",
    image: null,
  },
];

export function BreakbulkContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Where Others Stop, CT Delivers"
        title="Breakbulk &"
        titleAccent="Project Cargo"
        subtitle="Heavy lift. Oversized loads. High-value cargo. CT has handled what others call impossible — with a 100% delivery record."
        bgImage="/images/projects/project-mega-machines.jpg"
        dark
      />

      {/* Capabilities */}
      <section className="bg-[#0D1117] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="border border-white/10 rounded-sm p-8 hover:border-[#2FA85A]/40 transition-colors"
              >
                <div className="mb-6">{cap.icon}</div>
                <h3 className="font-display font-bold uppercase tracking-wide text-white mb-4"
                  style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}>
                  {cap.title}
                </h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase font-body font-semibold text-[#0B7A3A] mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[#0B7A3A]" />
              Proven Track Record
            </p>
            <h2 className="font-display font-extrabold uppercase tracking-wide text-[#0D1117]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Jobs That Required More Than Standard Logistics
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="relative overflow-hidden rounded-sm group"
              >
                {/* Background */}
                {proj.image ? (
                  <div className="relative" style={{ minHeight: "260px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover absolute inset-0"
                      style={{ minHeight: "260px" }}
                    />
                    <div className="absolute inset-0 bg-[#0D1117]/80" />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 bg-[#0D1117]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 8px,
                        rgba(11,122,58,0.06) 8px,
                        rgba(11,122,58,0.06) 16px
                      )`,
                    }}
                  />
                )}

                <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: "260px" }}>
                  <span className="inline-block bg-[#1A2332] text-white/50 text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-sm w-fit mb-auto">
                    Classified
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold uppercase tracking-wide text-white mb-2"
                      style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}>
                      {proj.name}
                    </h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A3A] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-wide text-white mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Have a Complex Cargo Challenge?
          </h2>
          <p className="font-body text-white/65 mb-8 max-w-xl mx-auto">
            CT&apos;s team has handled it before. Get in touch for a bespoke project logistics consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B7A3A] font-body font-bold text-sm px-8 py-4 rounded-sm hover:bg-[#F4F6F3] transition-colors"
          >
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </InnerLayout>
  );
}
