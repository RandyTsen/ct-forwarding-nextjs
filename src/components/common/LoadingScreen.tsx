"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/**
 * Loading screen — plays once per browser session.
 * CT logo fades in from above while a green truck drives
 * left-to-right across a progress track at the bottom.
 * After the truck completes its run the screen slides up and away.
 */
export function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Show on every hard page load / refresh
    setShow(true);
    const timer = setTimeout(() => setExit(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading"
          className="loading-screen flex-col gap-8"
          initial={{ y: 0 }}
          animate={{ y: exit ? "-100%" : 0 }}
          transition={exit
            ? { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
            : { duration: 0 }
          }
          onAnimationComplete={() => {
            if (exit) {
              // Signal hero section to start its GSAP animation
              window.dispatchEvent(new Event("ctLoadingComplete"));
              setShow(false);
            }
          }}
        >
          {/* CT Logo */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Image
              src="/images/logo/ct-logo-white.svg"
              alt="CT Forwarding & Transport"
              width={96}
              height={94}
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="text-white text-xs tracking-[0.4em] uppercase font-body"
          >
            Forwarding · Transport · Logistics
          </motion.p>

          {/* ── Truck progress track ── */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Road / track line */}
            <div className="relative h-[3px] w-full bg-white/10 overflow-hidden">
              {/* Green fill bar */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.7, ease: "easeInOut", delay: 0.3 }}
              />
            </div>

            {/* Truck SVG riding on the track */}
            <motion.div
              className="absolute"
              style={{ bottom: "2px" }}
              initial={{ left: "-80px" }}
              animate={{ left: "calc(100% + 10px)" }}
              transition={{ duration: 1.7, ease: "easeInOut", delay: 0.3 }}
            >
              {/* Green truck silhouette — inline SVG, no external file needed */}
              <svg
                width="72"
                height="32"
                viewBox="0 0 72 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Trailer body */}
                <rect x="0" y="4" width="46" height="20" rx="2" fill="#0B7A3A" />
                {/* Cab */}
                <path
                  d="M46 10 L46 24 L60 24 L60 16 L54 10 Z"
                  fill="#065C2B"
                />
                {/* Cab window */}
                <path
                  d="M48 11.5 L48 16 L57 16 L53 11.5 Z"
                  fill="#2FA85A"
                  opacity="0.7"
                />
                {/* Exhaust stack */}
                <rect x="55" y="6" width="3" height="5" rx="1" fill="#065C2B" />
                {/* Front bumper */}
                <rect x="59" y="19" width="3" height="5" rx="1" fill="#043D1C" />
                {/* Rear wheel */}
                <circle cx="10" cy="26" r="5" fill="#1A2332" />
                <circle cx="10" cy="26" r="2.5" fill="#2FA85A" />
                {/* Middle wheel */}
                <circle cx="28" cy="26" r="5" fill="#1A2332" />
                <circle cx="28" cy="26" r="2.5" fill="#2FA85A" />
                {/* Front wheel */}
                <circle cx="56" cy="26" r="5" fill="#1A2332" />
                <circle cx="56" cy="26" r="2.5" fill="#2FA85A" />
                {/* CT text on trailer */}
                <text
                  x="16"
                  y="18"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="Arial, sans-serif"
                  fill="white"
                  textAnchor="middle"
                  letterSpacing="1"
                >
                  CT
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
