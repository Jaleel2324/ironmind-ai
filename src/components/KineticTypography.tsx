"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function KineticTypography() {
  const { scrollYProgress } = useScroll();

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-25%", "10%"]);

  return (
    <section className="relative bg-black py-28 overflow-hidden border-y border-blue-400/10">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <motion.h2
        style={{ x: xLeft }}
        className="text-[18vw] font-black leading-none whitespace-nowrap text-blue-400/20"
      >
        IRONMIND // AI FITNESS SYSTEM //
      </motion.h2>

      <motion.h2
        style={{ x: xRight }}
        className="text-[18vw] font-black leading-none whitespace-nowrap text-stroke"
      >
        TRAINING // ANALYTICS // TRANSFORMATION //
      </motion.h2>
    </section>
  );
}