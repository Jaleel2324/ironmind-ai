"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gym-1.jpg",
  "/gym-2.jpg",
  "/gym-3.jpg",
  "/gym-4.jpg",
];

export default function ImageRail() {
  return (
    <section className="cinematic-section py-32 px-6 overflow-hidden">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-5">
            Elite Athlete Experience
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            TRAIN LIKE
            <span className="block text-blue-400">
              THE FUTURE
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {images.map((image, i) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="relative h-[500px] overflow-hidden rounded-[38px] group"
            >
              <Image
                src={image}
                alt="Gym"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 border border-white/10 rounded-[38px]" />

              <div className="absolute bottom-0 p-8 z-10">
                <p className="text-blue-300 uppercase tracking-[0.3em] text-xs mb-3">
                  IRONMIND
                </p>

                <h3 className="text-3xl font-black">
                  Elite Training
                </h3>

                <p className="text-zinc-300 mt-4 text-sm leading-relaxed">
                  AI-powered athlete optimization and transformation tracking.
                </p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[2px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}