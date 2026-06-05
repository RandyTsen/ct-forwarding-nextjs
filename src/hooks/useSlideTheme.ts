"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useSlideTheme(): boolean {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsLight(false);
      return;
    }

    const LIGHT_SLIDES = new Set([1, 3, 5]);

    const update = () => {
      const container = (window as unknown as Record<string, unknown>).__ctScrollContainer as HTMLElement | undefined;
      if (!container) { setIsLight(false); return; }
      const prog = container.scrollTop / container.clientHeight;
      const idx  = Math.round(prog);
      setIsLight(LIGHT_SLIDES.has(idx));
    };

    const getContainer = () => (window as unknown as Record<string, unknown>).__ctScrollContainer as HTMLElement | undefined;
    const container = getContainer();
    container?.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      getContainer()?.removeEventListener("scroll", update);
    };
  }, [pathname]);

  return isLight;
}
