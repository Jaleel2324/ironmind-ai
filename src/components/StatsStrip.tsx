"use client";

import { motion } from "framer-motion";

const stats = [
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
];

export default function StatsStrip() {
  return (
    <section className="cinematic-section py-28 overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      {/* MOVING BACKGROUND */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-4">
            Elite Performance Metrics
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            BUILT FOR
            <span className="block text-blue-400">
              ATHLETES
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="glass-panel rounded-[35px] p-10 text-center blue-glow card-shine"
            >
              <h3 className="text-6xl font-black text-blue-400">
                {stat.value}
              </h3>

              <p className="text-zinc-400 uppercase tracking-[0.25em] text-sm mt-5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}