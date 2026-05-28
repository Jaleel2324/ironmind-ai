"use client";

import { motion } from "framer-motion";
import { Activity, Flame, Target, Zap } from "lucide-react";

const metrics = [
  { label: "Weekly Output", value: "87%", icon: Activity },
  { label: "Calories", value: "2,650", icon: Flame },
  { label: "Goal Match", value: "94%", icon: Target },
  { label: "Intensity", value: "High", icon: Zap },
];

export default function DashboardPreview() {
  return (
    <section className="cinematic-section px-6 py-32 border-y border-blue-500/10">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-4">
            Intelligence Dashboard
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            REAL-TIME
            <span className="block text-blue-400">ATHLETE DATA</span>
          </h2>

          <h3 className="text-7xl md:text-[10rem] font-black text-stroke opacity-30 mt-6">
            SYSTEM
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -120, rotateY: 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[40px] p-8 blue-glow card-shine"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-zinc-500 text-sm">AI Generated Split</p>
                <h3 className="text-4xl font-black">Push / Pull / Legs</h3>
              </div>

              <span className="px-4 py-2 rounded-full bg-blue-400/10 text-blue-300 text-sm">
                Active Plan
              </span>
            </div>

            <div className="space-y-5">
              {[
                "Chest + Triceps",
                "Back + Biceps",
                "Leg Strength",
                "Core + Cardio",
              ].map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 p-5 border border-white/10"
                >
                  <div className="flex justify-between mb-3">
                    <span>{item}</span>
                    <span className="text-blue-300">{75 + i * 6}%</span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${75 + i * 6}%` }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                      className="h-full bg-blue-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="glass-panel rounded-[30px] p-6 card-shine"
                >
                  <Icon className="text-blue-400 mb-8" size={34} />

                  <h3 className="text-4xl font-black">{metric.value}</h3>

                  <p className="text-zinc-500 mt-2 text-sm">
                    {metric.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}