"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { contacts } from "@/content/resort";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Background drifts slower than the page — parallax depth as you scroll away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      {/* Placeholder for the hero video/photo. Swap this layer for a scrub-
          controlled <video> once originals are exported from Tilda. */}
      <motion.div
        aria-hidden
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#1b443c_0%,#0c1e1b_55%,#07140f_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(7,20,15,0.9),transparent_55%)]"
      />

      <motion.div
        style={{ opacity: fade }}
        className="container-tal pb-20 pt-32 md:pb-28"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-ember-300"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[14ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight text-bone-50 md:text-7xl lg:text-8xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[48ch] text-lg text-bone-300 md:text-xl"
        >
          {t("lead")}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-ember-500 px-7 py-3.5 text-base font-medium text-ink-950 transition-colors hover:bg-ember-400"
          >
            {t("cta")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
