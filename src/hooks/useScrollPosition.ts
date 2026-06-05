"use client";

import { useState, useEffect } from "react";

/** Returns the current window.scrollY value, updated on every scroll event. */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

/** Returns true when page has scrolled past the given threshold (default: 80px). */
export function useScrolledPast(threshold = 80): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
