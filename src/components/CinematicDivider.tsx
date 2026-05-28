"use client";

import { motion } from "framer-motion";

export default function CinematicDivider() {
  return (
    <div className="relative h-[180px] bg-black overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="absolute top-1/2 left-0 h-[2px] w-full bg-blue-400/70 blue-glow"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <p className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm uppercase tracking-[0.5em]">
        IRONMIND SYSTEM TRANSITION
      </p>
    </div>
  );
}