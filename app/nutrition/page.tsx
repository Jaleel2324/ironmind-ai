"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Apple,
  Beef,
  Droplets,
  Flame,
  Salad,
  Sparkles,
  Target,
} from "lucide-react";

const macros = [
  { label: "Calories", value: "2,650", icon: Flame },
  { label: "Protein", value: "210g", icon: Beef },
  { label: "Carbs", value: "285g", icon: Apple },
  { label: "Water", value: "1 gal", icon: Droplets },
];

const meals = [
  {
    meal: "Meal 1",
    title: "Protein Oats Bowl",
    details: "Oats, whey protein, banana, almond butter",
    calories: "620 cal",
  },
  {
    meal: "Meal 2",
    title: "Chicken Power Plate",
    details: "Chicken breast, jasmine rice, broccoli, avocado",
    calories: "780 cal",
  },
  {
    meal: "Meal 3",
    title: "Lean Mass Dinner",
    details: "Salmon, sweet potato, asparagus, olive oil",
    calories: "820 cal",
  },
];

export default function NutritionPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 lg:p-10 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition mb-10"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-4">
              AI Nutrition System
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              MEAL PLAN
              <span className="text-blue-400"> INTELLIGENCE</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              A premium nutrition dashboard that turns goals into calories,
              macros, meals, hydration, and weekly AI recommendations.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Sparkles className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Macro Engine</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Later this connects to real user goals and generated meal plans.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {macros.map((macro, i) => {
            const Icon = macro.icon;

            return (
              <motion.div
                key={macro.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="glass-panel rounded-[30px] p-7 card-shine"
              >
                <Icon className="text-blue-400 mb-6" size={34} />
                <h3 className="text-4xl font-black">{macro.value}</h3>
                <p className="text-zinc-500 mt-2">{macro.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-10">
          <section className="glass-panel rounded-[35px] p-8 blue-glow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-zinc-500 text-sm">Generated Today</p>
                <h2 className="text-3xl font-bold mt-2">AI Meal Schedule</h2>
              </div>

              <Salad className="text-blue-400" size={34} />
            </div>

            <div className="space-y-5">
              {meals.map((meal, i) => (
                <motion.div
                  key={meal.meal}
                  initial={{ opacity: 0, x: -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6"
                >
                  <div className="flex justify-between gap-5">
                    <div>
                      <p className="text-blue-300 uppercase tracking-[0.25em] text-xs">
                        {meal.meal}
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        {meal.title}
                      </h3>

                      <p className="text-zinc-500 mt-2">
                        {meal.details}
                      </p>
                    </div>

                    <span className="text-blue-300 font-bold whitespace-nowrap">
                      {meal.calories}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <aside className="glass-panel rounded-[35px] p-8 card-shine">
            <div className="h-16 w-16 rounded-3xl bg-blue-400/10 flex items-center justify-center mb-8">
              <Target className="text-blue-400" size={34} />
            </div>

            <p className="text-blue-300 uppercase tracking-[0.35em] text-sm mb-4">
              Recommendation
            </p>

            <h2 className="text-4xl font-black leading-tight">
              Increase protein consistency by 12%
            </h2>

            <p className="text-zinc-400 mt-6 leading-relaxed">
              IRONMIND recommends keeping protein evenly distributed across all
              meals to improve recovery, support lean mass, and stabilize energy.
            </p>

            <div className="mt-8 rounded-3xl bg-blue-400/10 border border-blue-400/20 p-6">
              <p className="text-zinc-300">
                Suggested adjustment: add 25g protein to Meal 1 and reduce
                evening carbs slightly on rest days.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}