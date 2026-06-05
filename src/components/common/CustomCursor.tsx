"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight custom cursor — desktop only (pointer: fine).
 * Single small green dot, zero-lag via direct RAF + DOM writes.
 * No spring, no delay. Scales slightly on hoverable elements.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.body.classList.add("custom-cursor-active");

    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        dot.style.opacity = "1";
      });
      const target = e.target as HTMLElement;
      const hovering = !!target.closest("a, button, [role='button']");
      dot.style.width  = hovering ? "14px" : "10px";
      dot.style.height = hovering ? "14px" : "10px";
    };

    const hide = () => { dot.style.opacity = "0"; };
    const show = () => { dot.style.opacity = "1"; };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#E8A020",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.1s ease, height 0.1s ease",
        willChange: "transform",
      }}
    />
  );
}
