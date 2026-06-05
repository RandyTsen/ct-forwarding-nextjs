"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export const SLIDE_IDS = [
  "slide-hero", "slide-services", "slide-fleet",
  "slide-why-ct", "slide-projects", "slide-clients",
];
const SLIDE_LABELS = ["Home", "What We Do", "Our Fleet", "Why CT", "Projects", "Connect"];

// Slides with light (white/smoke) backgrounds — nav elements need dark colour
const LIGHT_SLIDES = new Set([1, 3, 5]);

interface HomeSlideshowProps { children: React.ReactNode; }

export function HomeSlideshow({ children }: HomeSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const jumping = useRef(false);
  const slides  = React.Children.toArray(children);
  const count   = slides.length;

  const isLight = LIGHT_SLIDES.has(active);

  // Theme-aware colours for nav elements
  const dotInactive  = isLight ? "rgba(30,35,50,0.22)"  : "rgba(255,255,255,0.28)";
  const dotActive    = "#0B7A3A";
  const labelColor   = isLight ? "text-carbon/50"        : "text-white/50";
  const btnBase      = isLight
    ? "bg-carbon/8 border-carbon/20 text-carbon hover:bg-primary hover:border-primary hover:text-white"
    : "bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary";

  // Expose scroll container globally
  useEffect(() => {
    document.body.style.overflow = "hidden";
    (window as unknown as Record<string, unknown>).__ctScrollContainer = containerRef.current;
    return () => {
      document.body.style.overflow = "";
      delete (window as unknown as Record<string, unknown>).__ctScrollContainer;
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let snapTimer: ReturnType<typeof setTimeout>;
    let lastScrollY = el.scrollTop;
    let velocity = 0;

    const onScroll = () => {
      velocity = el.scrollTop - lastScrollY;
      lastScrollY = el.scrollTop;

      // Update active slide (for dot indicator)
      const prog  = el.scrollTop / el.clientHeight;      // e.g. 1.3 = between slide 1 and 2
      const floor = Math.floor(prog);
      const frac  = prog - floor;
      // Show "next" slide as active only if >50% there
      const idx   = frac >= 0.5 ? floor + 1 : floor;
      setActive(Math.min(Math.max(idx, 0), count - 1));

      if (jumping.current) return;

      // Only snap when very close to a boundary (within 10% of a slide edge).
      // Mid-scroll positions (10%–90%) are left alone — user decides where to stop.
      clearTimeout(snapTimer);
      snapTimer = setTimeout(() => {
        if (jumping.current) return;
        const h   = el.clientHeight;
        const pos = el.scrollTop;
        const f   = pos / h;
        const fl  = Math.floor(f);
        const fr  = f - fl;  // fraction: 0 = at slide fl, 1 = at slide fl+1

        // Only snap in the "nearly there" zones
        if (fr < 0.10) {
          // <10% into next → snap back to current
          const target = fl * h;
          if (Math.abs(pos - target) > 6) {
            jumping.current = true;
            el.scrollTo({ top: target, behavior: "smooth" });
            setTimeout(() => { jumping.current = false; }, 600);
          }
        } else if (fr > 0.90) {
          // >90% into next → finish the scroll forward
          const target = (fl + 1) * h;
          if (Math.abs(pos - target) > 6) {
            jumping.current = true;
            el.scrollTo({ top: target, behavior: "smooth" });
            setTimeout(() => { jumping.current = false; }, 600);
          }
        }
        // 10%–90%: do nothing — leave where user stopped
      }, 500);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); clearTimeout(snapTimer); };
  }, [count]);

  const jumpTo = useCallback((idx: number) => {
    const el = containerRef.current;
    if (!el || jumping.current) return;
    jumping.current = true;
    el.scrollTo({ top: idx * el.clientHeight, behavior: "smooth" });
    setTimeout(() => { jumping.current = false; }, 900);
  }, []);

  // Mobile swipe — snap to next/prev slide on vertical swipe ≥60px
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const delta = startY - e.changedTouches[0].clientY;
      if (Math.abs(delta) >= 60) {
        jumpTo(delta > 0 ? Math.min(active + 1, count - 1) : Math.max(active - 1, 0));
      }
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend",   onTouchEnd);
    };
  }, [active, count, jumpTo]);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__ctScrollToSlide = jumpTo;
    return () => { delete (window as unknown as Record<string, unknown>).__ctScrollToSlide; };
  }, [jumpTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); jumpTo(Math.min(active + 1, count - 1)); }
      if (e.key === "ArrowUp"   || e.key === "PageUp"  ) { e.preventDefault(); jumpTo(Math.max(active - 1, 0)); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, count, jumpTo]);

  return (
    <div ref={containerRef} className="overflow-y-scroll"
      style={{ position: "fixed", inset: 0, zIndex: 10, scrollBehavior: "auto" }}>

      {slides.map((child, i) => (
        <div key={SLIDE_IDS[i] ?? i} id={SLIDE_IDS[i]}
          style={{ height: "100dvh", overflow: "hidden", position: "relative" }}>
          {child}
        </div>
      ))}

      {/* ── Dot indicators (right edge) — theme-aware ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {SLIDE_LABELS.map((label, i) => (
          <button key={i} onClick={() => jumpTo(i)} aria-label={`Go to ${label}`}
            className="group flex items-center justify-end gap-0 hover:gap-2.5 transition-all duration-250">
            <span className={`max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 ease-out text-[10px] font-body tracking-widest uppercase whitespace-nowrap ${labelColor}`}>
              {label}
            </span>
            <motion.div className="rounded-full flex-shrink-0"
              animate={{ width: active === i ? 22 : 6, height: 6, backgroundColor: active === i ? dotActive : dotInactive }}
              transition={{ duration: 0.25 }}
            />
          </button>
        ))}
      </div>

      {/* ── Up / Down buttons — theme-aware, hidden on hero ── */}
      <div className="fixed bottom-7 right-5 z-50 flex flex-col gap-2">
        <AnimatePresence>
          {active > 0 && (
            <motion.button key="up"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
              onClick={() => jumpTo(active - 1)} aria-label="Previous section"
              className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${btnBase}`}>
              <ChevronUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active > 0 && active < count - 1 && (
            <motion.button key="down"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              onClick={() => jumpTo(active + 1)} aria-label="Next section"
              className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${btnBase}`}>
              <ChevronDown size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
