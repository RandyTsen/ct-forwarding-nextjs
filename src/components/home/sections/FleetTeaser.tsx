"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const contentDur = prefersReduced ? 0.01 : 0.5;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % total);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const item = FLEET[active];
  const idx = String(active + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0D1117]"
      style={{ height: "100dvh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image crossfade */}
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
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Top-left label */}
      <div className="absolute top-24 left-8 z-10 flex flex-col gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2FA85A]">Fleet & Equipment</span>
        <span className="text-[10px] text-white/30">Scroll to explore</span>
      </div>

      {/* Left dot navigation */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-2.5">
        {FLEET.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to ${v.name}`}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span
              className={`block rounded-full bg-[#2FA85A] transition-all duration-300 ${
                i === active ? "h-1.5 w-1.5 scale-100" : "h-1.5 w-1.5 scale-50"
              }`}
            />
            <span
              className={`text-[9px] text-white/60 whitespace-nowrap transition-opacity duration-300 ${
                i === active ? "opacity-100" : "opacity-25"
              }`}
            >
              {v.name}
            </span>
          </button>
        ))}
      </div>

      {/* Center-left content */}
      <div className="relative z-10 flex items-center h-full ml-0 sm:ml-16 lg:ml-20 px-8 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: contentDur, ease: EASE }}
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2FA85A] mb-4">
              {item.category}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-display leading-none mb-3">
              {item.name}
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-md mt-5 font-body">
              {item.spec}
            </p>
            <Link
              href="/services/transportation"
              className="inline-flex items-center gap-2 mt-8 text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              View Full Fleet <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom-right spec card — desktop */}
      <div className="hidden lg:block absolute bottom-8 right-8 z-10 w-64 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">Equipment Class</span>
          <span className="text-[9px] text-white/40">{idx} / {tot}</span>
        </div>
        <div className="px-4 pb-2">
          <p className="text-sm font-semibold text-white font-display">{item.category}</p>
        </div>
        <div className="mx-4 h-px bg-gradient-to-r from-[#0B7A3A] to-[#2FA85A]/30 mb-3" />
        <div className="px-4 pb-4">
          <span className="text-[9px] uppercase tracking-[0.12em] text-white/40 block mb-1">Capacity</span>
          <span className="text-sm text-white font-body">{item.capacity}</span>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="lg:hidden absolute bottom-8 left-8 z-10 flex items-center gap-4">
        <span className="text-xs text-white/50 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {idx} / {tot}
        </span>
        <Link
          href="/services/transportation"
          className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          View Full Fleet →
        </Link>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => setActive((a) => (a - 1 + total) % total)}
        aria-label="Previous vehicle"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm items-center justify-center hover:bg-[#0B7A3A]/60 hover:border-[#0B7A3A] transition-all cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => setActive((a) => (a + 1) % total)}
        aria-label="Next vehicle"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm items-center justify-center hover:bg-[#0B7A3A]/60 hover:border-[#0B7A3A] transition-all cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
