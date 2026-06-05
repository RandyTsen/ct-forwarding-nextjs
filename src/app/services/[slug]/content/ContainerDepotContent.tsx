"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const INTRO =
  "CT specialises in container depot services for containers, general bulk cargo, and machinery. Our KKIP-based depot serves as temporary storage for unladen containers, ensuring they're ready for loading or transshipment — always in optimal condition.";

const SERVICES = [
  {
    title: "Open Storage",
    desc: "Safe and organised storage for empty containers, protected from damage and environmental factors. Your containers stay in top condition until the next shipment.",
  },
  {
    title: "Efficient Handling",
    desc: "Expert handling — loading, unloading, repositioning. Our team uses standard industrial equipment, conducted smoothly and safely every time.",
  },
  {
    title: "Maintenance & Inspection",
    desc: "Regular inspections and maintenance keep containers in optimal condition. This proactive approach prevents issues before they cost you time.",
  },
  {
    title: "Flexible Solutions",
    desc: "Short-term or long-term — CT's depot adapts to your operational requirements. Choose the service level that fits your timeline.",
  },
  {
    title: "Strategic Location",
    desc: "KKIP-based for direct access to major transportation routes. Fast movement to Sabah Port or onward destinations.",
  },
  {
    title: "Sale & Hire of Used Containers",
    desc: "Looking for additional storage or project materials? CT offers used containers for hire or purchase — various sizes, cost-effective, ready now.",
  },
];

export function ContainerDepotContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Container Management"
        title="Container Depot &"
        titleAccent="Open Yard Storage"
        subtitle="Secure. Bonded. Professionally managed. CT's KKIP depot keeps your container fleet in prime condition."
        dark
      />

      {/* Intro */}
      <section className="bg-[#0D1117] py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-white/65 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
          >
            {INTRO}
          </motion.p>
        </div>
      </section>

      {/* Alternating rows */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {SERVICES.map((svc, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: 0.05, duration: 0.55 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
              >
                {/* Image card */}
                <div
                  className="rounded-sm overflow-hidden relative"
                  style={{ minHeight: "220px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/fleet/side-loader.jpg"
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    style={{
                      minHeight: "220px",
                      filter: `brightness(${0.4 + (i % 3) * 0.15}) saturate(${0.6 + (i % 2) * 0.3})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-[#0D1117]/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-extrabold uppercase tracking-wide text-white"
                      style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Text */}
                <div className="py-4">
                  <div className="w-8 h-1 bg-[#0B7A3A] mb-4" />
                  <h3 className="font-display font-bold uppercase tracking-wide text-[#0D1117] mb-3"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                    {svc.title}
                  </h3>
                  <p className="font-body text-[#1A2332]/60 leading-relaxed"
                    style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}>
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A3A] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display font-extrabold uppercase tracking-wide text-white mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Manage Your Containers With CT
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
