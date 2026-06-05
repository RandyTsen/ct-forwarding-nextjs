"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Layers, BadgeCheck, Users, Shield, MapPin } from "lucide-react";

const PILLARS = [
  {
    icon: <Award size={22} />, gold: false,
    title: "A Quarter-Century of Delivery",
    body: "CT was founded in 1999. What that means: our teams have solved problems your cargo will face before — and built the routes, relationships, and processes to handle them.",
  },
  {
    icon: <Layers size={22} />, gold: false,
    title: "One Partner, Full Coverage",
    body: "Land, sea, air, customs, warehousing, container depot. One call coordinates everything. No managing five vendors, no accountability gaps.",
  },
  {
    icon: <BadgeCheck size={22} />, gold: true,
    title: "CMILT-Certified at the Top",
    body: "Our directors hold Chartered Institute of Logistics & Transport membership. Internationally recognised logistics governance — not just local experience.",
  },
  {
    icon: <Users size={22} />, gold: true,
    title: "Industry's Own Leadership",
    body: "CT's directors lead PPLKKK, SFLA, and sit on the FMFF council. We don't just follow industry standards — we help write them.",
  },
  {
    icon: <Shield size={22} />, gold: false,
    title: "Every Unit Licensed",
    body: "200+ fleet units, every one carrying a valid LPKP commercial vehicle licence. No grey areas, no compliance risk for your cargo.",
  },
  {
    icon: <MapPin size={22} />, gold: false,
    title: "Sabah in Full",
    body: "KK · Keningau · Kudat · Lahad Datu · Sandakan · Tawau. CT's active routes cover every major Sabah commercial hub — not just the capital.",
  },
];

export function WhyCTSection() {
  return (
    <div className="bg-smoke flex flex-col justify-center overflow-hidden" style={{ height: "100dvh" }}>
      <div className="w-full max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 py-8">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-primary text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-2 flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />Why Choose CT
          </p>
          <h2 className="font-display font-extrabold text-carbon uppercase tracking-wide leading-none"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}>
            Where Precision <span className="text-primary">Meets</span> Partnership
          </h2>
          <p className="text-slate/50 font-body mt-3 max-w-xl" style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>
            CT&apos;s reputation was built through decades of consistent delivery, industry leadership, and genuine commitment — to every client, every shipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {PILLARS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate/10 rounded-sm hover:border-primary/25 hover:shadow-md transition-all duration-300 group"
              style={{ padding: "clamp(1rem,2vw,1.5rem)" }}
            >
              <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 transition-colors duration-300
                ${p.gold
                  ? "bg-gold/10 text-gold group-hover:bg-gold/20"
                  : "bg-primary/8 text-primary group-hover:bg-primary/15"}`}>
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-carbon uppercase tracking-wide mb-2.5 group-hover:text-primary transition-colors duration-200"
                style={{ fontSize: "clamp(0.85rem,1.3vw,1.05rem)" }}>
                {p.title}
              </h3>
              <p className="text-slate/55 font-body leading-relaxed"
                style={{ fontSize: "clamp(0.78rem,1vw,0.9rem)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip — quote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 pt-5 border-t border-slate/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate/40 font-body italic text-sm max-w-md leading-relaxed">
            &ldquo;Trusted by Telekom Malaysia, Petronas Carigali, and Ranhill Engineering — a decade of precision delivery.&rdquo;
          </p>
          <Link href="/about"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-primary/30 text-primary font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-all duration-200">
            Our Story <ArrowRight size={12} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
