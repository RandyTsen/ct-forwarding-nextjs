"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Truck, Ship, Plane, Package, Warehouse, Cog, Shield } from "lucide-react";
import type { ReactNode } from "react";

const ICON_MAP: Record<string, ReactNode> = {
  truck:     <Truck size={24} className="text-primary" />,
  ship:      <Ship size={24} className="text-primary" />,
  plane:     <Plane size={24} className="text-primary" />,
  package:   <Package size={24} className="text-primary" />,
  warehouse: <Warehouse size={24} className="text-primary" />,
  cog:       <Cog size={24} className="text-primary" />,
  shield:    <Shield size={24} className="text-primary" />,
};
import { PageHero } from "@/components/inner/PageHero";
import { InnerLayout } from "@/components/inner/InnerLayout";
import type { ServiceData } from "@/lib/services-data";

interface Props {
  service: ServiceData;
  allServices: ServiceData[];
}

export function ServiceDetailContent({ service: svc, allServices }: Props) {
  const related = allServices.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <InnerLayout>
      <PageHero label={svc.tagline} title={svc.title} bgImage={svc.image} />

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: description + features */}
            <div>
              <p
                className="font-body text-slate/70 leading-relaxed mb-8"
                style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
              >
                {svc.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                    className="flex items-start gap-2.5"
                  >
                    <Check
                      size={15}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-slate/70 font-body text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: image + stats bar */}
            <div className="flex flex-col gap-0">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-px bg-slate/10 mt-px">
                {svc.stats.map((stat) => (
                  <div
                    key={stat.l}
                    className="bg-carbon px-5 py-4 text-center"
                  >
                    <p
                      className="font-display font-extrabold text-white leading-none mb-1"
                      style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                    >
                      {stat.v}
                    </p>
                    <p className="font-body text-white/40 tracking-[0.2em] uppercase text-[10px]">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-carbon py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {svc.stats.map((stat) => (
              <div key={stat.l} className="text-center">
                <p
                  className="font-display font-extrabold text-white leading-none mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {stat.v}
                </p>
                <p className="font-body text-white/40 tracking-[0.25em] uppercase text-xs">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-smoke py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-[11px] tracking-[0.45em] uppercase font-body font-semibold text-primary flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-primary" />
              Explore More
            </p>
            <h2
              className="font-display font-extrabold uppercase tracking-wide text-carbon leading-none"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Other Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate/12 rounded-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  style={{ padding: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  <div className="w-11 h-11 rounded-sm bg-primary/8 flex items-center justify-center mb-4">
                    {ICON_MAP[s.icon] ?? <Package size={24} className="text-primary" />}
                  </div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-carbon text-xl mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.3em] uppercase font-body font-semibold text-primary mb-3">
                    {s.tagline}
                  </p>
                  <p className="font-body text-sm text-slate/65 leading-relaxed flex-1 mb-5">
                    {s.description.slice(0, 120)}…
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
