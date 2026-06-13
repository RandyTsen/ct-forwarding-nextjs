"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CLIENTS = [
  {
    name: "Telekom Malaysia",
    abbr: "TM",
    sector: "Telecommunications",
    detail: "10+ year preferred contractor",
  },
  {
    name: "Petronas Carigali",
    abbr: "PC",
    sector: "Oil & Gas",
    detail: "Steel pipe haulage, multi-phase",
  },
  {
    name: "Ranhill Engineering",
    abbr: "RE",
    sector: "Energy & Power",
    detail: "Power station project cargo",
  },
  {
    name: "Sabah Electricity Sdn Bhd",
    abbr: "SESB",
    sector: "Utilities",
    detail: "Equipment haulage & logistics",
  },
  {
    name: "Jabatan Kerja Raya",
    abbr: "JKR",
    sector: "Government Infrastructure",
    detail: "Route coordination & permits",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

export function TrustedBySection() {
  return (
    <div
      className="bg-smoke flex flex-col justify-center"
      style={{ height: "100dvh", overflowY: "auto" }}
    >
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-16">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-primary text-[10px] tracking-[0.45em] uppercase font-body font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />Social Proof<span className="w-6 h-px bg-primary" />
          </p>
          <h2
            className="font-display font-extrabold text-carbon uppercase tracking-wide leading-tight"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
          >
            Trusted by Sabah&apos;s{" "}
            <span className="text-primary">Leading Organisations</span>
          </h2>
          <p className="font-body text-slate/60 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            From telecommunications to energy, CT Forwarding supports Malaysia&apos;s
            largest infrastructure projects.
          </p>
        </motion.div>

        {/* Client cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="flex gap-4 overflow-x-auto pb-2 md:justify-center md:flex-wrap md:overflow-x-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {CLIENTS.map(({ name, abbr, sector, detail }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex-shrink-0 w-52 md:w-56 bg-white border border-slate/12 rounded-sm px-6 py-7 flex flex-col gap-3 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
            >
              {/* Monogram */}
              <div className="w-12 h-12 rounded-sm bg-carbon flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                <span className="font-display font-black text-white text-sm tracking-tight">
                  {abbr}
                </span>
              </div>

              {/* Name + sector */}
              <div>
                <p className="font-display font-bold text-carbon text-sm uppercase tracking-wide leading-tight">
                  {name}
                </p>
                <p className="font-body text-xs text-primary font-semibold mt-0.5 tracking-wider uppercase">
                  {sector}
                </p>
              </div>

              {/* Detail */}
              <p className="font-body text-xs text-slate/55 leading-relaxed border-t border-slate/10 pt-3">
                {detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="text-center mt-14"
        >
          <p className="font-body text-slate/50 text-sm mb-5">
            Trusted by enterprise and government clients across Sabah for 25+ years.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-carbon text-white font-body font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-primary transition-colors duration-200 tracking-wide"
          >
            View Case Studies →
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
