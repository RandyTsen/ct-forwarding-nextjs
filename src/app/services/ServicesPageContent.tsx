"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Package, Warehouse, Cog, Shield } from "lucide-react";
import { PageHero } from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { SERVICES_DATA } from "@/lib/services-data";
import type { ReactNode } from "react";

const ICON_MAP: Record<string, ReactNode> = {
  truck:     <Truck size={28} className="text-primary" />,
  package:   <Package size={28} className="text-primary" />,
  warehouse: <Warehouse size={28} className="text-primary" />,
  cog:       <Cog size={28} className="text-primary" />,
  shield:    <Shield size={28} className="text-primary" />,
};

export function ServicesPageContent() {
  return (
    <InnerLayout>
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="End-to-end logistics solutions across Sabah — from container haulage to complex project cargo, all under one trusted partner."
        bgImage="/images/hero/aerial-yard.jpg"
      />

      {/* Services grid */}
      <section className="bg-smoke py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.45em] uppercase font-body font-semibold text-primary flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-primary" />
              Full-Service Logistics
            </p>
            <h2
              className="font-display font-extrabold uppercase tracking-wide text-carbon leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Total Logistics Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate/12 rounded-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  style={{ padding: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  <div className="w-11 h-11 rounded-sm bg-primary/8 flex items-center justify-center mb-4">
                    {ICON_MAP[svc.icon] ?? <Package size={28} className="text-primary" />}
                  </div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-carbon text-xl mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.3em] uppercase font-body font-semibold text-primary mb-3">
                    {svc.tagline}
                  </p>
                  <p className="font-body text-sm text-slate/65 leading-relaxed flex-1 mb-5">
                    {svc.description.slice(0, 130)}…
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet stats band */}
      <section className="bg-carbon py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-center font-body text-white/40 tracking-[0.3em] uppercase text-xs mb-10">
            200+ Fleet Units · 10 Types · 100% LPKP Licensed
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {[
              { v: "200+", l: "Units" },
              { v: "10", l: "Types" },
              { v: "120,000+", l: "Sq.Ft" },
              { v: "40+", l: "Years" },
            ].map((stat) => (
              <div key={stat.l} className="text-center">
                <p
                  className="font-display font-extrabold text-white leading-none mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  {stat.v}
                </p>
                <p className="font-body text-white/40 tracking-[0.25em] uppercase text-xs">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services/transportation"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-body font-semibold text-sm px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              View Transportation Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose CT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Licensed Customs Agent",
                desc: "In-house customs brokerage — no third-party delays, direct port relationships.",
              },
              {
                label: "CMILT Leadership",
                desc: "Chartered Institute of Logistics & Transport membership underpins our professional standards.",
              },
              {
                label: "Sabah-Wide Coverage",
                desc: "200+ fleet units operating 24/7 across every corner of Sabah.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                <div className="w-8 h-1 bg-primary mb-2" />
                <h3 className="font-display font-bold uppercase tracking-wide text-carbon text-lg">
                  {item.label}
                </h3>
                <p className="font-body text-sm text-slate/65 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2
            className="font-display font-extrabold uppercase tracking-wide text-white leading-none mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Ready to Move Your Cargo?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-sm px-8 py-4 rounded-sm hover:bg-smoke transition-colors"
          >
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </InnerLayout>
  );
}
