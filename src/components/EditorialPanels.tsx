"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Camera, Dumbbell } from "lucide-react";

const panels = [
  {
    number: "01",
    label: "AI COACHING",
    title: "ADAPTIVE TRAINING INTELLIGENCE",
    text: "IRONMIND turns athlete goals into personalized coaching flows, workout logic, and real-time recommendations.",
    image: "/gym-1.jpg",
    icon: Brain,
  },
  {
    number: "02",
    label: "WORKOUT SYSTEM",
    title: "GENERATED PROGRAMS THAT FEEL REAL",
    text: "Create training splits by goal, schedule, intensity, and body focus — then save them into Supabase.",
    image: "/gym-2.jpg",
    icon: Dumbbell,
  },
  {
    number: "03",
    label: "VISUAL PROGRESS",
    title: "PHOTO-BASED TRANSFORMATION TOOLS",
    text: "Upload, compare, and showcase transformation photos inside a cinematic athlete dashboard.",
    image: "/gym-3.jpg",
    icon: Camera,
  },
];

export default function EditorialPanels() {
  return (
    <section className="relative bg-black text-white px-4 md:px-8 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute left-[-240px] top-1/3 h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[170px]" />

      <div className="relative z-10 border border-blue-400/20 rounded-[35px] overflow-hidden">
        {panels.map((panel, i) => {
          const Icon = panel.icon;

          return (
            <motion.div
              key={panel.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[180px_1fr_0.85fr] min-h-[720px] border-b border-blue-400/20 last:border-b-0"
            >
              <aside className="hidden lg:flex border-r border-blue-400/20 items-center justify-center">
                <div className="rotate-[-90deg] flex items-center gap-8">
                  <span className="text-8xl font-black text-blue-400">
                    {panel.number}
                  </span>
                  <span className="uppercase tracking-[0.5em] text-zinc-500 text-sm whitespace-nowrap">
                    {panel.label}
                  </span>
                </div>
              </aside>

              <div className="p-8 md:p-14 flex flex-col justify-center">
                <motion.div
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  className="h-20 w-20 rounded-[28px] bg-blue-400/10 border border-blue-400/20 flex items-center justify-center mb-10 blue-glow"
                >
                  <Icon className="text-blue-400" size={40} />
                </motion.div>

                <p className="lg:hidden text-blue-300 tracking-[0.4em] text-sm mb-5">
                  {panel.number} / {panel.label}
                </p>

                <h2 className="text-5xl md:text-7xl font-black leading-none max-w-4xl">
                  {panel.title}
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mt-8">
                  {panel.text}
                </p>

                <Link
                  href="/signup"
                  className="mt-10 inline-flex w-fit px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow items-center gap-3"
                >
                  Enter System
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="relative min-h-[420px] lg:min-h-full">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent lg:bg-gradient-to-t lg:from-black/80 lg:to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 right-8 glass-panel rounded-[28px] p-6"
                >
                  <p className="text-blue-300 uppercase tracking-[0.35em] text-xs">
                    System Status
                  </p>

                  <h3 className="text-3xl font-black mt-3">
                    ONLINE
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}