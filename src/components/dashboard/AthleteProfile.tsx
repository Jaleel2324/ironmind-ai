"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Trophy, Zap } from "lucide-react";

export default function AthleteProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-[35px] p-8 mt-10 card-shine"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="relative h-[220px] w-[220px] rounded-[30px] overflow-hidden border border-white/10 blue-glow">
          <Image
            src="/gym/gym-1.jpg"
            alt="Athlete"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-4xl font-black">
              Marcus Johnson
            </h3>

            <BadgeCheck className="text-blue-400" />
          </div>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Advanced physique athlete currently focused on hypertrophy,
            conditioning, and progressive overload optimization through
            AI-generated coaching systems.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {[
              {
                icon: Trophy,
                title: "Training Level",
                value: "Advanced",
              },
              {
                icon: Zap,
                title: "Goal",
                value: "Lean Mass",
              },
              {
                icon: BadgeCheck,
                title: "Consistency",
                value: "92%",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white/5 border border-white/10 p-5"
                >
                  <Icon className="text-blue-400 mb-4" />

                  <p className="text-zinc-500 text-sm">
                    {item.title}
                  </p>

                  <h4 className="text-2xl font-bold mt-2">
                    {item.value}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}