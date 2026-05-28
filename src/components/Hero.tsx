"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* BLUE GLOW */}

      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

      {/* GRID */}

      <div className="absolute inset-0 grid-overlay opacity-20 z-10" />

      {/* CONTENT */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* TOP BADGE */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-300 text-sm uppercase tracking-[0.25em] mb-8 backdrop-blur-xl">
            <Sparkles size={16} />
            AI Fitness Intelligence
          </div>

          {/* MAIN TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none tracking-tight"
          >
            BUILD YOUR
            <br />

            <span className="text-blue-400">
              ULTIMATE
            </span>

            <br />

            PHYSIQUE
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto mt-10 text-lg md:text-xl text-zinc-300 leading-relaxed"
          >
            IRONMIND combines AI coaching, workout intelligence,
            transformation tracking, analytics, and premium athlete tools
            into one futuristic fitness platform.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
          >
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-400 hover:bg-blue-300 transition-all rounded-full font-semibold text-black blue-glow flex items-center gap-3"
            >
              Start Assessment
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-blue-400 transition flex items-center gap-3 backdrop-blur-xl bg-white/5"
            >
              <Play size={18} />
              View Demo
            </Link>
          </motion.div>

          {/* FLOATING STATS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              {
                value: "10K+",
                label: "Athletes",
              },
              {
                value: "94%",
                label: "Goal Accuracy",
              },
              {
                value: "24/7",
                label: "AI Coaching",
              },
              {
                value: "500+",
                label: "Workout Systems",
              },
            ].map((item) => (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={item.label}
                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[28px] p-6 card-shine"
              >
                <h3 className="text-4xl font-black text-blue-400">
                  {item.value}
                </h3>

                <p className="text-zinc-400 mt-3 text-sm uppercase tracking-[0.2em]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}