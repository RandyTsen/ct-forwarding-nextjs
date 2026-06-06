"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsDown, MapPin } from "lucide-react";

function scrollToNext() {
  const fn = (window as unknown as Record<string, unknown>).__ctScrollToSlide as ((i: number) => void) | undefined;
  fn?.(1);
}

// Animation variants — triggered after loading screen exits
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
});

const WORD = (delay = 0) => ({
  hidden: { opacity: 0, y: 56, skewY: 3 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.75, ease: EASE, delay } },
});

export function HeroSection() {
  // Wait for loading screen to finish before animating
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onReady = () => setReady(true);
    window.addEventListener("ctLoadingComplete", onReady, { once: true });

    // Fallback: if loading screen has already finished (or no loading screen), reveal after 2.9s
    const fallback = setTimeout(() => setReady(true), 2900);

    return () => {
      window.removeEventListener("ctLoadingComplete", onReady);
      clearTimeout(fallback);
    };
  }, []);

  const animate = ready ? "visible" : "hidden";

  return (
    <div className="relative flex flex-col bg-carbon overflow-hidden" style={{ height: "100dvh" }}>

      {/* ── Background: DJI aerial via Next.js Image ── */}
      <div className="absolute inset-0 scale-[1.04]">
        <Image
          src="/images/hero/aerial-yard.jpg"
          alt="CT Forwarding aerial logistics yard"
          fill
          sizes="100vw"
          quality={82}
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/55 to-carbon/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/50 via-transparent to-transparent" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Green glow accent */}
      <div className="absolute top-1/4 left-1/3 w-[480px] h-[480px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8">
        <div className="text-center max-w-5xl mx-auto">

          {/* Eyebrow */}
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={animate}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm mb-8"
          >
            <MapPin size={14} className="text-primary-light flex-shrink-0" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 font-body">Sabah, Malaysia</span>
            <span className="w-px h-3 bg-white/20 mx-1" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/55 font-body">Est. 1999</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-white leading-[0.9] tracking-wide uppercase mb-8"
            style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                variants={WORD(0.08)}
                initial="hidden"
                animate={animate}
                className="inline-block"
              >
                Sabah&apos;s&nbsp;
              </motion.span>
              <motion.span
                variants={WORD(0.16)}
                initial="hidden"
                animate={animate}
                className="inline-block text-primary-light"
              >
                Premier
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={WORD(0.24)}
                initial="hidden"
                animate={animate}
                className="inline-block"
              >
                Logistics&nbsp;
              </motion.span>
              <motion.span
                variants={WORD(0.32)}
                initial="hidden"
                animate={animate}
                className="inline-block"
              >
                Partner
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={FADE_UP(0.42)}
            initial="hidden"
            animate={animate}
            className="text-white/60 text-base sm:text-lg max-w-xl mx-auto font-body leading-relaxed mb-10"
          >
            From a single container to full project cargo — CT Forwarding moves
            what matters most across Sabah, with zero compromise on reliability since 1999.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={FADE_UP(0.52)}
            initial="hidden"
            animate={animate}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-primary text-white font-body font-semibold px-10 py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:gap-5"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/25 text-white/75 hover:text-white hover:border-white/50 font-body font-semibold px-10 py-4 rounded-sm text-sm tracking-widest uppercase transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        variants={FADE_UP(0.62)}
        initial="hidden"
        animate={animate}
        className="relative z-10 border-t border-white/10 bg-carbon/75 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { v: "1999",    s: "",  l: "Year Established" },
              { v: "200",     s: "+", l: "Fleet & Equipment" },
              { v: "120,000", s: "+", l: "Sq.Ft Warehouse" },
              { v: "25",      s: "+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="py-5 px-3 lg:px-8 text-center">
                <p className="font-display font-bold text-2xl lg:text-3xl text-white tracking-wide">
                  {s.v}<span className="text-primary-light">{s.s}</span>
                </p>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1 font-body">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 3.5 }}
        className="absolute left-1/2 -translate-x-1/2 z-20 text-white/25 hover:text-primary-light transition-colors duration-200"
        style={{ bottom: "calc(4rem + 4px)" }}
        aria-label="Scroll to next section"
      >
        <ChevronsDown size={20} />
      </motion.button>
    </div>
  );
}
