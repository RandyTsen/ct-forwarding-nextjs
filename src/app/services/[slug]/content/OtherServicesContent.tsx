"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Package, Boxes, MessageSquare } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const SERVICES = [
  {
    icon: <Shield size={24} className="text-[#0B7A3A]" />,
    title: "Marine Cargo Insurance",
    desc: "Protect your shipment from port to destination. CT coordinates marine and inland cargo insurance — ensuring your cargo value is covered at every point in the chain.",
    cardStyle: "bg-white border-l-4 border-l-[#0B7A3A] border border-[#1A2332]/10",
    textStyle: "text-[#0D1117]",
  },
  {
    icon: <Package size={24} className="text-[#0B7A3A]" />,
    title: "Cargo Consolidation",
    desc: "Smaller consignments, optimised as a group. CT's consolidation service combines compatible cargo to reduce per-unit transport costs without compromising delivery schedules.",
    cardStyle: "bg-[#F4F6F3] border border-[#1A2332]/10",
    textStyle: "text-[#0D1117]",
  },
  {
    icon: <Boxes size={24} className="text-[#0B7A3A]" />,
    title: "Deconsolidation & Distribution",
    desc: "Arriving cargo split and distributed to multiple receivers. CT manages the entire deconsolidation process — tracking, documentation, and delivery coordination.",
    cardStyle: "bg-white border-l-4 border-l-[#C9A84C] border border-[#1A2332]/10",
    textStyle: "text-[#0D1117]",
  },
  {
    icon: <MessageSquare size={24} className="text-white" />,
    title: "Supply Chain Consultation",
    desc: "25+ years in Sabah logistics means CT has seen — and solved — most supply chain challenges. Advisory sessions available for route planning, cost optimisation, and regulatory navigation.",
    cardStyle: "bg-[#0D1117] border border-white/10",
    textStyle: "text-white",
  },
];

const WHY = [
  {
    title: "Single Supplier",
    desc: "One relationship covers all your logistics needs. No coordination overhead between separate providers.",
  },
  {
    title: "25+ Years Context",
    desc: "CT's advisory recommendations come backed by real Sabah market experience — not textbook logistics theory.",
  },
  {
    title: "Transparent Pricing",
    desc: "CT's consultative approach means you understand exactly what you're getting and what it costs. No hidden charges.",
  },
];

export function OtherServicesContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Beyond Transport"
        title="Other Services"
        subtitle="Insurance, consolidation, and supply chain advisory — CT's expertise extends beyond the vehicle and the warehouse."
        dark={false}
      />

      {/* Services Grid */}
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
              Specialist Services
            </p>
            <h2 className="font-display font-extrabold uppercase tracking-wide text-[#0D1117]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Expert Advisory & Support
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`rounded-sm p-7 ${svc.cardStyle}`}
              >
                <div className={`w-11 h-11 rounded-sm flex items-center justify-center mb-5 ${svc.cardStyle.includes("bg-[#0D1117]") ? "bg-white/10" : "bg-[#0B7A3A]/8"}`}>
                  {svc.icon}
                </div>
                <h3 className={`font-display font-bold uppercase tracking-wide mb-3 ${svc.textStyle}`}
                  style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}>
                  {svc.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${svc.cardStyle.includes("bg-[#0D1117]") ? "text-white/60" : "text-[#1A2332]/60"}`}>
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Extend With CT */}
      <section className="bg-[#F4F6F3] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold uppercase tracking-wide text-[#0D1117] mb-10"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
          >
            Why Extend Your Services With CT
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-8 h-1 bg-[#0B7A3A] mb-4" />
                <h3 className="font-display font-bold uppercase tracking-wide text-[#0D1117] mb-2"
                  style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}>
                  {item.title}
                </h3>
                <p className="font-body text-[#1A2332]/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1117] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-wide text-white mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Let&apos;s Discuss Your Requirements
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B7A3A] text-white font-body font-bold text-sm px-8 py-4 rounded-sm hover:bg-[#065C2B] transition-colors"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </InnerLayout>
  );
}
