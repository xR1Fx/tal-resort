"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide inertial smooth scroll. This is the foundation of the "premium"
 * feel — heavier scroll-driven sections (GSAP ScrollTrigger) will sync to the
 * same Lenis instance later. Disabled entirely under prefers-reduced-motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !reduce,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
