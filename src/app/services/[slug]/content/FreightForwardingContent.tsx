"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, FileText, Tag, ShieldCheck, MessageSquare } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const STEPS = [
  { n: 1, title: "Cargo Arrives at Port", desc: "Vessel docks at Kota Kinabalu Port. CT's team coordinates with port authority on arrival." },
  { n: 2, title: "Documentation Prepared", desc: "Invoices, packing lists, and customs declarations assembled in-house with zero handovers." },
  { n: 3, title: "Customs Declaration Filed", desc: "CT's Licensed Customs Agent files directly with Royal Malaysian Customs Department." },
  { n: 4, title: "Duties & Taxes Cleared", desc: "All applicable duties and taxes settled. Full regulatory compliance at every step." },
  { n: 5, title: "Released for Delivery", desc: "Cargo released and coordinated to final destination — warehouse or direct delivery." },
];

const ADVANTAGES = [
  "No third-party delays — we file directly",
  "Full regulatory compliance, every shipment",
  "Documentation prepared in-house",
  "Direct liaison with customs authorities",
];

const SERVICES_CARDS = [
  {
    icon: <FileText size={20} className="text-[#0B7A3A]" />,
    title: "Documentation Preparation",
    desc: "Invoices, packing lists, customs declarations — prepared accurately, submitted on time.",
  },
  {
    icon: <Tag size={20} className="text-[#0B7A3A]" />,
    title: "Tariff Classification",
    desc: "Correct HS codes, optimal duty rates. Our team ensures you never overpay.",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#0B7A3A]" />,
    title: "Compliance Management",
    desc: "Regulations change. We track every update so your cargo doesn't face surprises at the gate.",
  },
  {
    icon: <MessageSquare size={20} className="text-[#0B7A3A]" />,
    title: "Consultation & Support",
    desc: "From first enquiry to final clearance — one point of contact, always available.",
  },
];

export function FreightForwardingContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Seamless Clearance"
        title="Freight Forwarding"
        titleAccent="& Customs Brokerage"
        subtitle="In-house Licensed Customs Agent. Port to warehouse, no handovers, no surprises."
        dark
      />

      {/* Process Flow */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold uppercase tracking-wide text-[#0D1117] mb-14"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            How CT Clears Your Cargo
          </motion.h2>

          {/* Horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#0B7A3A]/20" style={{ top: "2rem" }} />

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 flex flex-col items-start lg:items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0B7A3A] flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                    <span className="font-display font-extrabold text-white text-xl">{step.n}</span>
                  </div>
                  <div className="lg:text-center">
                    <h3 className="font-display font-bold uppercase tracking-wide text-[#0D1117] mb-2"
                      style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}>
                      {step.title}
                    </h3>
                    <p className="font-body text-[#1A2332]/55 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CT Advantage */}
      <section className="bg-[#0D1117] py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold uppercase tracking-wide text-white mb-12"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
          >
            Why CT&apos;s In-House Agent Changes Everything
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-display font-extrabold uppercase tracking-wide text-[#2FA85A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}>
                One Call. One Team. Zero Handovers.
              </p>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {ADVANTAGES.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <Check size={18} className="text-[#2FA85A] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/70 leading-relaxed">{adv}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
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
            Services Offered
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-[#1A2332]/10 rounded-sm p-6"
              >
                <div className="w-10 h-10 rounded-sm bg-[#0B7A3A]/8 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold uppercase tracking-wide text-[#0D1117] mb-2"
                  style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}>
                  {card.title}
                </h3>
                <p className="font-body text-[#1A2332]/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A3A] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-wide text-white mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Clear Your Cargo With CT
          </h2>
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
