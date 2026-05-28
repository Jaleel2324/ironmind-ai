"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function LaunchCTA() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-300 text-sm uppercase tracking-[0.25em] mb-8 backdrop-blur-xl">
            <Sparkles size={16} />
            Enter The Future
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none">
            TRAIN
            <span className="block text-blue-400">
              DIFFERENT
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="max-w-3xl mx-auto mt-10 text-lg md:text-xl text-zinc-300 leading-relaxed"
          >
            IRONMIND combines cinematic UI, AI systems, athlete analytics,
            transformation tracking, and real SaaS architecture into one
            futuristic fitness experience.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14"
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
              Launch Demo
            </Link>
          </motion.div>

          {/* FLOATING PANEL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24 glass-panel rounded-[40px] p-8 blue-glow card-shine max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Coaching",
                  value: "Adaptive",
                },
                {
                  title: "Cloud Backend",
                  value: "Supabase",
                },
                {
                  title: "System Status",
                  value: "Online",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6"
                >
                  <p className="text-zinc-500 text-sm">
                    {item.title}
                  </p>

                  <h3 className="text-3xl font-black text-blue-400 mt-3">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}