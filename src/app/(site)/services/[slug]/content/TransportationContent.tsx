"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

const FLEET = [
  { name: "Container Haulage", spec: "20ft & 40ft", count: "51 Prime Movers" },
  { name: "Container Sideloader", spec: "Self-Loading · 40ft", count: "6 Units" },
  { name: "Car Carrier", spec: "Multi-Deck Transport", count: "6 Units" },
  { name: "Platform Trailer", spec: "Steel · Timber · Pipes", count: "Various" },
  { name: "Low Loader", spec: "Triple & Quad Axle", count: "7 Units" },
  { name: "Lorry Crane", spec: "Lift & Place Operations", count: "5 Units" },
  { name: "Pole Trailer", spec: "Extended Long Cargo", count: "Various" },
  { name: "Cargo Truck", spec: "Enclosed & Box", count: "Various" },
  { name: "Tipping Truck", spec: "Bulk Materials", count: "Various" },
];

const CITIES = ["Kota Kinabalu", "Keningau", "Kudat", "Lahad Datu", "Sandakan", "Tawau"];

const TRUST = [
  { v: "LPKP Licensed", sub: "Every vehicle, every route" },
  { v: "GPS Tracked", sub: "Real-time visibility" },
  { v: "24/7 Operations", sub: "No downtime" },
  { v: "25+ Years", sub: "Industry expertise" },
];

export function TransportationContent() {
  return (
    <InnerLayout>
      <PageHero
        label="Our Fleet"
        title="Transportation"
        subtitle="200+ units. 10 vehicle types. One LPKP-licensed fleet built to move anything Sabah demands."
        dark
      />

      {/* Fleet Arsenal */}
      <section className="bg-[#0D1117] py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold uppercase tracking-wide text-white mb-12 text-center"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Built for Every Load
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FLEET.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="border border-white/10 rounded-sm p-6 hover:border-[#2FA85A]/60 hover:shadow-lg hover:shadow-[#0B7A3A]/20 transition-all duration-300 group"
              >
                <h3 className="font-display font-extrabold uppercase tracking-wide text-white mb-1"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}>
                  {item.name}
                </h3>
                <p className="text-[#2FA85A] text-[11px] tracking-[0.3em] uppercase font-semibold font-body mb-4">
                  {item.spec}
                </p>
                <span className="inline-block bg-[#C9A84C] text-[#0D1117] text-xs font-body font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                  {item.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Strip */}
      <section className="bg-[#0B7A3A] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="font-display font-bold uppercase tracking-[0.3em] text-white/70 text-xs mb-4">
            Sabah-Wide Route Coverage
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4">
            {CITIES.map((city, i) => (
              <span key={city} className="flex items-center gap-3 sm:gap-6">
                <span className="font-display font-extrabold uppercase tracking-wide text-white"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                  {city}
                </span>
                {i < CITIES.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                )}
              </span>
            ))}
          </div>
          <p className="font-body text-white/60 text-sm tracking-wide">
            Every major commercial hub. One fleet.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F4F6F3] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRUST.map((item, i) => (
              <motion.div
                key={item.v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display font-extrabold uppercase tracking-wide text-[#0D1117] mb-1"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                  {item.v}
                </p>
                <p className="font-body text-[#1A2332]/50 text-xs tracking-widest uppercase">
                  {item.sub}
                </p>
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
            Move Your Cargo
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
