"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Zap } from "lucide-react";

const messages = [
  {
    role: "IRONMIND",
    text: "Your chest volume increased 12% this week.",
  },
  {
    role: "IRONMIND",
    text: "Recovery metrics suggest reducing intensity tomorrow.",
  },
  {
    role: "IRONMIND",
    text: "AI recommends incline-focused upper session.",
  },
];

export default function AICoachPreview() {
  return (
    <section className="cinematic-section px-6 py-32">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-4">
            AI Coaching Engine
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            REAL-TIME
            <span className="block text-blue-400">AI FEEDBACK</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[40px] p-8 blue-glow"
          >
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-blue-400" />
              <h3 className="text-3xl font-black">
                AI Athlete Assistant
              </h3>
            </div>

            <div className="space-y-5">
              {messages.map((message, i) => (
                <motion.div
                  key={message.text}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6"
                >
                  <p className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-3">
                    {message.role}
                  </p>

                  <p className="text-zinc-300 leading-relaxed">
                    {message.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Zap,
                title: "Adaptive Intelligence",
                text: "Training recommendations evolve with performance.",
              },
              {
                icon: Sparkles,
                title: "Recovery Tracking",
                text: "AI monitors fatigue and recovery patterns.",
              },
              {
                icon: Brain,
                title: "Live Optimization",
                text: "Plans update dynamically as the athlete progresses.",
              },
            ].map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="glass-panel rounded-[32px] p-7 card-shine"
                >
                  <Icon className="text-blue-400 mb-5" size={34} />

                  <h3 className="text-2xl font-black">
                    {card.title}
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}