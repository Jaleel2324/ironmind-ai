"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ScanLine, Sparkles } from "lucide-react";

const photos = ["/gym-1.jpg", "/gym-2.jpg", "/gym-3.jpg", "/gym-4.jpg"];

export default function TransformationGallery() {
  return (
    <section className="cinematic-section py-32 px-6">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-5">
            Visual Progress System
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            TRANSFORMATION
            <span className="block text-blue-400">INTELLIGENCE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {photos.map((photo, i) => (
              <motion.div
                key={photo}
                whileHover={{ scale: 1.04, y: -8 }}
                className={`relative h-[320px] rounded-[32px] overflow-hidden blue-glow ${
                  i === 1 || i === 3 ? "translate-y-10" : ""
                }`}
              >
                <Image src={photo} alt="Transformation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-blue-300 text-xs uppercase tracking-[0.25em]">
                    Week {i + 1}
                  </p>
                  <h3 className="text-xl font-black mt-1">Progress Scan</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[40px] p-10 blue-glow card-shine"
          >
            <ScanLine className="text-blue-400 mb-8" size={48} />

            <h3 className="text-5xl font-black leading-tight">
              AI reads progress like a coach.
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Upload athlete photos, compare before/after results, and track
              transformation changes inside a cinematic AI-powered visual system.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[
                { icon: Camera, label: "Upload" },
                { icon: Sparkles, label: "Analyze" },
                { icon: ScanLine, label: "Compare" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white/5 border border-white/10 p-5"
                  >
                    <Icon className="text-blue-400 mb-4" />
                    <p className="font-bold">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}