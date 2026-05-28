"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart3, Camera, Dumbbell } from "lucide-react";

const scenes = [
  {
    number: "01",
    title: "AI ATHLETE SYSTEM",
    label: "ASSESS",
    text: "Capture goals, training level, body metrics, and schedule inside a premium onboarding flow.",
    image: "/gym-1.jpg",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "GENERATED WORKOUTS",
    label: "TRAIN",
    text: "Create structured workout plans using demo AI logic and save training days into Supabase.",
    image: "/gym-2.jpg",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "VISUAL PROGRESS",
    label: "TRACK",
    text: "Upload, compare, and showcase progress photos inside a cinematic transformation system.",
    image: "/gym-3.jpg",
    icon: Camera,
  },
];

export default function HorizontalShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);

  return (
    <section ref={ref} className="relative min-h-[120vh] bg-black overflow-hidden py-32">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto mb-16">
          <p className="text-blue-300 uppercase tracking-[0.4em] text-sm mb-5">
            Cinematic Workflow
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            SCROLL THROUGH
            <span className="block text-blue-400">THE SYSTEM</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 w-max">
          {scenes.map((scene) => {
            const Icon = scene.icon;

            return (
              <motion.article
                key={scene.number}
                whileHover={{ y: -14, scale: 1.01 }}
                className="relative w-[86vw] md:w-[720px] xl:w-[840px] h-[620px] rounded-[42px] overflow-hidden border border-blue-400/20 bg-zinc-950"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(max-width: 768px) 86vw, 840px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
                <div className="absolute inset-0 grid-overlay opacity-20" />

                <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
                  <span className="text-8xl font-black text-blue-400/40">
                    {scene.number}
                  </span>

                  <div className="h-16 w-16 rounded-2xl bg-blue-400/10 border border-blue-400/20 backdrop-blur-xl flex items-center justify-center">
                    <Icon className="text-blue-400" />
                  </div>
                </div>

                <div className="absolute bottom-10 left-8 right-8 max-w-xl">
                  <p className="text-blue-300 uppercase tracking-[0.35em] text-xs mb-4">
                    {scene.label}
                  </p>

                  <h3 className="text-5xl md:text-6xl font-black leading-none">
                    {scene.title}
                  </h3>

                  <p className="text-zinc-300 mt-6 text-lg leading-relaxed">
                    {scene.text}
                  </p>

                  <Link
                    href="/signup"
                    className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow"
                  >
                    Enter Flow
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}