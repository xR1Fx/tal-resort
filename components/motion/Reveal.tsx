"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds when several Reveals share a parent. */
  delay?: number;
  as?: ElementType;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Lightweight scroll-reveal (fade + rise) for entering content. Uses Motion's
 * whileInView — no ScrollTrigger needed. Reserve GSAP for real pin/scrub work.
 */
export function Reveal({ children, delay = 0, as = "div", ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion.create(as as ElementType);

  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
