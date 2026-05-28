"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Camera, Dumbbell, ScanLine } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function EditorialHome() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-screen p-4 md:p-8">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute right-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="relative z-10 min-h-[calc(100vh-4rem)] border border-blue-400/20 rounded-[35px] overflow-hidden bg-black/80">
          <div className="grid lg:grid-cols-[90px_1fr_170px] min-h-[calc(100vh-4rem)]">
            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:flex border-r border-blue-400/20 flex-col items-center justify-between py-8">
              <div className="text-xs tracking-[0.4em] rotate-[-90deg] mt-20 text-blue-300">
                IRONMIND
              </div>

              <div className="space-y-8 text-zinc-500 text-sm">
                <p>01</p>
                <p>02</p>
                <p>03</p>
              </div>

              <Link
                href="/login"
                className="text-xs tracking-[0.3em] rotate-[-90deg] mb-16 text-zinc-400 hover:text-blue-300"
              >
                LOGIN
              </Link>
            </aside>

            {/* CENTER */}
            <div className="relative p-6 md:p-10 lg:p-14">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-10"
              >
                <p className="uppercase tracking-[0.4em] text-blue-300 text-xs">
                  AI Fitness Operating System
                </p>

                <Link
                  href="/signup"
                  className="hidden md:flex px-5 py-3 rounded-full bg-blue-400 text-black font-bold items-center gap-2"
                >
                  Start
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <div className="grid xl:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                {/* TITLE */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-zinc-500 text-sm mb-5">
                    / 01 SYSTEM REVEAL
                  </p>

                  <h1 className="text-6xl md:text-8xl xl:text-[8.5rem] font-black leading-none">
                    TRAIN
                    <span className="block text-blue-400">LIKE</span>
                    FUTURE
                  </h1>

                  <p className="text-zinc-400 mt-8 max-w-xl text-lg leading-relaxed">
                    A cinematic AI fitness platform with coaching, assessments,
                    Supabase storage, workout generation, analytics, and visual
                    transformation tools.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <MagneticButton href="/signup">
                      Enter Platform
                    </MagneticButton>

                    <Link
                      href="/dashboard"
                      className="px-8 py-4 rounded-full border border-white/15 hover:border-blue-400 transition"
                    >
                      View Demo
                    </Link>
                  </div>
                </motion.div>

                {/* IMAGE LAYOUT */}
                <motion.div
                  initial={{ opacity: 0, x: 90 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  className="relative h-[720px]"
                >
                  {/* MAIN IMAGE */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute left-0 top-0 w-[62%] h-[520px] rounded-[38px] overflow-hidden border border-blue-400/20 z-20"
                  >
                    <Image
                      src="/gym-1.jpg"
                      alt="Athlete"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-8 left-8">
                      <p className="text-blue-300 text-xs tracking-[0.3em] uppercase">
                        PRIMARY SCAN
                      </p>

                      <h3 className="text-4xl font-black mt-2">
                        Elite Performance
                      </h3>
                    </div>
                  </motion.div>

                  {/* TOP RIGHT */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    className="absolute right-0 top-10 w-[34%] h-[260px] rounded-[32px] overflow-hidden border border-blue-400/20"
                  >
                    <Image
                      src="/gym-2.jpg"
                      alt="Athlete"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </motion.div>

                  {/* BOTTOM RIGHT */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    className="absolute right-10 bottom-0 w-[42%] h-[320px] rounded-[32px] overflow-hidden border border-blue-400/20 z-30"
                  >
                    <Image
                      src="/gym-3.jpg"
                      alt="Athlete"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </motion.div>

                  {/* FLOATING PANEL */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute left-[14%] bottom-10 glass-panel rounded-[30px] p-6 z-40 blue-glow"
                  >
                    <p className="text-zinc-500 text-sm">
                      System Status
                    </p>

                    <h3 className="text-3xl font-black text-blue-400 mt-2">
                      ACTIVE
                    </h3>
                  </motion.div>
                </motion.div>
              </div>

              {/* BOTTOM MODULES */}
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-4 gap-4 mt-20"
              >
                {[
                  { icon: Brain, title: "AI Coach" },
                  { icon: Dumbbell, title: "Workout Engine" },
                  { icon: Camera, title: "Photo System" },
                  { icon: ScanLine, title: "Analytics" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="glass-panel rounded-[25px] p-5 border border-blue-400/10"
                    >
                      <Icon className="text-blue-400 mb-4" />
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* RIGHT VERTICAL TITLE */}
            <aside className="hidden lg:flex border-l border-blue-400/20 items-center justify-center relative overflow-hidden">
              <motion.h2
                initial={{ y: 180, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                className="rotate-90 text-[7rem] font-black tracking-tight text-stroke whitespace-nowrap"
              >
                IRONMIND AI
              </motion.h2>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}