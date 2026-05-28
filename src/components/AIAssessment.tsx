"use client";

import { motion } from "framer-motion";
import { Brain, ChevronRight, ScanLine } from "lucide-react";

export default function AIAssessment() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute right-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-4">
            AI Assessment Engine
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            TRAINING BUILT
            <span className="text-blue-400"> AROUND YOU</span>
          </h2>

          <p className="text-zinc-400 mt-8 max-w-xl text-lg">
            Users answer a short performance assessment, upload progress photos,
            and IRONMIND generates a personalized training system.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow flex items-center gap-3">
            Start AI Scan
            <ChevronRight size={20} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[35px] p-8 blue-glow card-shine"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-2xl bg-blue-400/10 flex items-center justify-center">
              <ScanLine className="text-blue-400" />
            </div>

            <div>
              <h3 className="font-bold text-xl">AI Body Scan Preview</h3>
              <p className="text-zinc-500 text-sm">Demo assessment module</p>
            </div>
          </div>

          <div className="space-y-4">
            {["Goal: Build lean muscle", "Experience: Intermediate", "Training: 5 days/week"].map(
              (item) => (
                <div key={item} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-8 rounded-3xl bg-blue-400/10 border border-blue-400/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-blue-400" />
              <h4 className="font-bold">Generated Recommendation</h4>
            </div>

            <p className="text-zinc-300">
              5-day hypertrophy split with progressive overload, 2,650 calorie target,
              high protein intake, and weekly visual progress tracking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}