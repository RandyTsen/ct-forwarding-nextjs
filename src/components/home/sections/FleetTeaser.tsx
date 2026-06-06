"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ALL_FLEET = [
  { name: "Container Haulage",       spec: "20ft & 40ft · Prime Movers",   img: "/images/fleet/container-haulage.jpg", tag: "Core",       local: true },
  { name: "Container Side Loader",   spec: "Self-Loading · 40ft",           img: "/images/fleet/side-loader.jpg",       tag: "Specialist", local: true },
  { name: "Car Carrier",             spec: "Multi-Deck · 6 Units",          img: "/images/fleet/car-carrier.jpg",       tag: "Vehicle",    local: true },
  { name: "Platform / Conventional", spec: "Steel · Timber · Pipes",        img: "/images/fleet/platform-trailer.jpg",  tag: "General",    local: true },
  { name: "Low Loader",              spec: "Triple & Quad Axle · 7 Units",  img: "/images/fleet/low-loader.jpg",        tag: "Heavy Lift", local: true },
  { name: "Lorry Crane",             spec: "Lift & Place · 5 Units",        img: "/images/fleet/lorry-crane.jpg",       tag: "Project",    local: true },
  { name: "Pole / Extended Trailer", spec: "Long Cargo Specialist",         img: "/images/fleet/pole-trailer.jpg",      tag: "Oversize",   local: true },
  { name: "Box Truck",               spec: "Enclosed · Climate Safe",       img: "/images/fleet/box-truck.jpg",         tag: "Enclosed",   local: true },
  { name: "Tipping Truck",           spec: "Bulk Materials",
    img: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=900&q=80", tag: "Bulk", local: false },
  { name: "Self Loader",             spec: "Heavy Duty Retrieval",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80", tag: "Recovery", local: false },
];

const LOOP = [...ALL_FLEET, ...ALL_FLEET];

function FleetCard({ item }: { item: typeof ALL_FLEET[0] }) {
  return (
    <div
      className="flex-shrink-0 rounded-sm overflow-hidden border border-white/10 hover:border-primary/70 transition-all duration-400 group flex flex-col"
      style={{ width: "clamp(280px, 24vw, 360px)", height: "clamp(320px, 42vh, 500px)" }}
    >
      {/* Photo — takes most of the card height */}
      <div className="relative flex-1 overflow-hidden bg-slate/80">
        {item.local ? (
          <Image
            src={item.img}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 280px, 24vw"
            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            quality={80}
            loading="lazy"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.img} alt={item.name}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/95 via-carbon/10 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] text-primary-light tracking-[0.3em] uppercase font-body font-bold bg-carbon/65 backdrop-blur-sm px-3 py-1.5 rounded-sm">
          {item.tag}
        </span>
      </div>

      {/* Label strip */}
      <div className="flex-shrink-0 bg-carbon/95 px-5 py-4 border-t border-primary/15">
        <h3 className="font-display font-bold text-white uppercase tracking-wide group-hover:text-primary-light transition-colors duration-200"
          style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)" }}>
          {item.name}
        </h3>
        <p className="text-white/40 text-xs font-body mt-1 tracking-wide">{item.spec}</p>
      </div>
    </div>
  );
}

export function FleetTeaser() {
  return (
    <div className="bg-carbon flex flex-col overflow-hidden pt-36" style={{ height: "100dvh" }}>

      {/* Header — compact */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex-shrink-0 w-full max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 pt-7 pb-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="text-primary-light text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-1.5 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-light" />Fleet &amp; Equipment
            </p>
            <h2 className="font-display font-extrabold text-white uppercase tracking-wide leading-none"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              Built for Every <span className="text-primary-light">Challenge</span>
            </h2>
            <p className="text-white/38 font-body mt-1.5" style={{ fontSize: "clamp(0.82rem, 1vw, 0.9rem)" }}>
              200+ units · 10 specialised types · All LPKP licensed · Sabah-wide
            </p>
          </div>
          <Link href="/services/transportation"
            className="group inline-flex items-center gap-2 border border-white/20 text-white/65 hover:text-white hover:border-primary hover:bg-primary/10 font-body text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 flex-shrink-0 self-start sm:self-auto">
            View Full Fleet <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Fleet marquee — takes the rest of the slide */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex-1 flex items-center overflow-hidden"
        style={{ minHeight: 0 }}
      >
        <div
          className="flex gap-5 w-max h-full items-stretch"
          style={{ animation: "fleet-scroll 60s linear infinite", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {LOOP.map((item, i) => <FleetCard key={`fleet-${i}`} item={item} />)}
        </div>
      </motion.div>

      <style>{`
        @keyframes fleet-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
