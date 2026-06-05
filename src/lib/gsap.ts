"use client";

// GSAP + plugins — safe client-side initialisation
// Import this file in components that need scroll animations.
// Registration happens once (guarded by typeof window check).

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Smooth ScrollTrigger defaults
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

export { gsap, ScrollTrigger, TextPlugin };
