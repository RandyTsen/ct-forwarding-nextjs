"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const FLEET = [
  { name: "Container Haulage",       category: "Core Fleet",        spec: "20ft & 40ft · Prime Movers",    capacity: "20ft / 40ft / 45ft", img: "/images/fleet/container-haulage.jpg",  local: true },
  { name: "Container Side Loader",   category: "Self-Loading",      spec: "Hydraulic Side-Lift · 40ft",    capacity: "Up to 30 tonnes",    img: "/images/fleet/side-loader.jpg",        local: true },
  { name: "Car Carrier",             category: "Vehicle Transport",  spec: "Multi-Deck · 6 Units",          capacity: "6–8 vehicles",       img: "/images/fleet/car-carrier.jpg",        local: true },
  { name: "Platform / Conventional", category: "Flatbed",            spec: "Steel · Timber · Pipes",        capacity: "40ft / 45ft deck",   img: "/images/fleet/platform-trailer.jpg",   local: true },
  { name: "Low Loader",              category: "Heavy Cargo",        spec: "Triple & Quad Axle · 7 Units",  capacity: "Up to 60 tonnes",    img: "/images/fleet/low-loader.jpg",         local: true },
  { name: "Lorry Crane",             category: "On-site Lifting",    spec: "Truck-Mounted Hydraulic Crane", capacity: "3–10 tonne lift",    img: "/images/fleet/lorry-crane.jpg",        local: true },
  { name: "Pole / Extended Trailer", category: "Extended Length",    spec: "Telescoping Pole Design",       capacity: "Up to 18m cargo",    img: "/images/fleet/pole-trailer.jpg",       local: true },
  { name: "Box Truck",               category: "General Cargo",      spec: "Enclosed · Climate Safe",       capacity: "5–15 tonnes",        img: "/images/fleet/box-truck.jpg",          local: true },
  { name: "Tipping Truck",           category: "Bulk Material",      spec: "Hydraulic Tipper",              capacity: "10–20 m³",           img: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=900&q=80", local: false },
  { name: "Self Loader",             category: "Recovery",           spec: "Heavy Duty Retrieval",          capacity: "Heavy duty",         img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80", local: false },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function FleetTeaser() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = FLEET.length;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const dur = prefersReduced ? 0.01 : 0.7;
  const contentDur = prefersReduced ? 0.01 : 0.45;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, active]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const item = FLEET[active];
  const idx  = String(active + 1).padStart(2, "0");
  const tot  = String(total).padStart(2, "0");

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0D1117]"
      style={{ height: "100dvh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background image crossfade ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: dur, ease: EASE }}
        >
          {item.local ? (
            <Image
              src={item.img}
              alt={item.name}
              fill
              sizes="100vw"
              className="object-cover"
              quality={85}
              priority={active === 0}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />

      {/* ── Top-left label ── */}
      <div className="absolute top-24 left-8 z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2FA85A]">Fleet & Equipment</p>
        <p className="text-[10px] text-white/30 mt-0.5">Use arrows or keyboard to explore</p>
      </div>

      {/* ── Left dot nav — desktop only, clear of all buttons ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-2.5">
        {FLEET.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show ${v.name}`}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <span className={`block rounded-full bg-[#2FA85A] transition-all duration-300 flex-shrink-0 ${
              i === active ? "h-1.5 w-1.5 opacity-100" : "h-1.5 w-1.5 opacity-30 scale-75"
            }`} />
            <span className={`text-[9px] font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 ${
              i === active ? "text-white/80 opacity-100" : "text-white/50 opacity-40"
            }`}>
              {v.name}
            </span>
          </button>
        ))}
      </div>

      {/* ── Main content — left-aligned, safe margin from dot nav ── */}
      <div className="relative z-10 flex items-center h-full">
        <div className="pl-8 sm:pl-24 lg:pl-52 pr-8 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: contentDur, ease: EASE }}
            >
              {/* Category pill */}
              <span className="inline-block rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2FA85A] mb-5">
                {item.category}
              </span>

              {/* Vehicle name */}
              <h2
                className="font-display font-bold text-white tracking-tight leading-none mb-4"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
              >
                {item.name}
              </h2>

              {/* Spec */}
              <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-md font-body mb-8">
                {item.spec}
              </p>

              {/* ── Bottom controls row — prev / counter / next / link ── */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Prev button */}
                <button
                  onClick={prev}
                  aria-label="Previous vehicle"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:bg-[#0B7A3A] hover:border-[#0B7A3A] transition-all duration-200 cursor-pointer flex-shrink-0"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Counter */}
                <span className="font-display text-white/50 text-sm tracking-widest select-none">
                  <span className="text-white font-bold">{idx}</span>
                  <span className="mx-1 text-white/20">/</span>
                  {tot}
                </span>

                {/* Next button */}
                <button
                  onClick={next}
                  aria-label="Next vehicle"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:bg-[#0B7A3A] hover:border-[#0B7A3A] transition-all duration-200 cursor-pointer flex-shrink-0"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Divider */}
                <span className="w-px h-5 bg-white/15 hidden sm:block" />

                {/* View Full Fleet link */}
                <Link
                  href="/services/transportation"
                  className="group inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 cursor-pointer hidden sm:inline-flex"
                >
                  View Full Fleet
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Mobile-only: View Full Fleet */}
              <Link
                href="/services/transportation"
                className="group inline-flex items-center gap-2 text-xs font-body font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 cursor-pointer sm:hidden mt-4"
              >
                View Full Fleet <ArrowRight size={12} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Spec card — bottom-right, desktop only ── */}
      <div className="hidden lg:block absolute bottom-12 right-8 z-10 w-64 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">
        <div className="px-5 pt-4 pb-1 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2FA85A]">Equipment Class</span>
          <span className="text-[9px] text-white/35">{idx} / {tot}</span>
        </div>
        <div className="px-5 pb-2">
          <p className="text-sm font-semibold text-white font-display tracking-wide">{item.category}</p>
        </div>
        <div className="mx-5 h-px bg-gradient-to-r from-[#0B7A3A] to-[#2FA85A]/25 mb-3" />
        <div className="px-5 pb-4">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 block mb-1">Capacity</span>
          <span className="text-sm font-medium text-white font-body">{item.capacity}</span>
        </div>
      </div>

      {/* ── Progress bar — bottom edge ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/8 z-10">
        <motion.div
          className="h-full bg-[#0B7A3A]"
          animate={{ width: `${((active + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      </div>
    </div>
  );
}
