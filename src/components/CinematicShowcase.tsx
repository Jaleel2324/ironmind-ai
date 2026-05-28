"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Camera, Dumbbell, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Coach",
    text: "Generate training and nutrition systems around the athlete.",
  },
  {
    icon: Dumbbell,
    title: "Workout Engine",
    text: "Build structured splits based on goals, days, and focus areas.",
  },
  {
    icon: Camera,
    title: "Visual Progress",
    text: "Upload, compare, and track transformation photos.",
  },
];

export default function CinematicShowcase() {
  return (
    <section className="cinematic-section px-6 py-32">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-6"
        >
          <Sparkles className="inline mr-3" size={16} />
          Cinematic AI Platform
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-none"
        >
          EVERY SYSTEM
          <span className="block text-blue-400">MOVES WITH PURPOSE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-zinc-300 text-lg mt-8"
        >
          IRONMIND blends cinematic visuals with real SaaS architecture:
          protected routes, Supabase storage, AI generation, analytics, and
          premium transformation workflows.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-panel rounded-[35px] p-8 blue-glow card-shine"
              >
                <Icon className="text-blue-400 mb-8" size={42} />
                <h3 className="text-3xl font-black">{card.title}</h3>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <Link
          href="/signup"
          className="inline-flex mt-16 px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow items-center gap-3"
        >
          Enter IRONMIND
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}