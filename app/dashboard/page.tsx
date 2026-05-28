"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Flame,
  Target,
  Dumbbell,
  ChevronRight,
  Settings,
} from "lucide-react";

import AnalyticsChart from "../../src/components/dashboard/AnalyticsChart";
import AthleteProfile from "../../src/components/dashboard/AthleteProfile";
import MobileDashboardNav from "../../src/components/dashboard/MobileDashboardNav";
import SystemStatus from "../../src/components/dashboard/SystemStatus";
import LogoutButton from "../../src/components/dashboard/LogoutButton";
import LatestAssessment from "../../src/components/dashboard/LatestAssessment";

const workouts = [
  { day: "Monday", focus: "Chest + Triceps", progress: 82 },
  { day: "Tuesday", focus: "Back + Biceps", progress: 76 },
  { day: "Wednesday", focus: "Leg Strength", progress: 91 },
];

const metrics = [
  { title: "Calories", value: "2,650", icon: Flame },
  { title: "Goal Match", value: "94%", icon: Target },
  { title: "Intensity", value: "High", icon: Activity },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative flex">
        <aside className="hidden lg:flex w-[280px] min-h-screen border-r border-white/10 p-6 flex-col">
          <div>
            <h1 className="text-3xl font-black tracking-[0.2em]">
              IRON<span className="text-blue-400">MIND</span>
            </h1>

            <p className="text-zinc-500 mt-2 text-sm">
              AI Fitness Intelligence
            </p>
          </div>

          <div className="mt-16 space-y-3">
            <Link href="/dashboard" className="block w-full text-left px-5 py-4 rounded-2xl bg-blue-400/10 border border-blue-400/20">
              Dashboard
            </Link>

            <Link href="/assessment" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Assessment
            </Link>

            <Link href="/coach" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              AI Coach
            </Link>

            <Link href="/workouts" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Workouts
            </Link>

            <Link href="/generator" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              AI Generator
            </Link>

            <Link href="/nutrition" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Nutrition
            </Link>

            <Link href="/uploads" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Progress Photos
            </Link>

            <Link href="/compare" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Compare Photos
            </Link>

            <Link href="/analytics" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Analytics
            </Link>

            <Link href="/settings" className="block w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-blue-400/10 transition border border-white/5 hover:border-blue-400/20">
              Settings
            </Link>

            <LogoutButton />
          </div>

          <div className="mt-auto glass-panel rounded-[30px] p-6 blue-glow">
            <Brain className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Coach Active</h3>
            <p className="text-zinc-500 text-sm mt-2">
              Adaptive recommendations enabled.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <MobileDashboardNav />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-4">
                Athlete Dashboard
              </p>

              <h2 className="text-5xl md:text-7xl font-black">
                PERFORMANCE
                <span className="text-blue-400"> CENTER</span>
              </h2>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/assessment"
                className="px-7 py-4 rounded-full bg-blue-400 text-black font-bold flex items-center gap-3 blue-glow"
              >
                Start Assessment
                <ChevronRight size={18} />
              </Link>

              <Link
                href="/settings"
                className="px-7 py-4 rounded-full border border-white/10 hover:border-blue-400 transition flex items-center gap-3"
              >
                <Settings size={18} />
                Settings
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-panel rounded-[30px] p-8 card-shine"
                >
                  <Icon className="text-blue-400 mb-8" size={38} />
                  <h3 className="text-5xl font-black">{metric.value}</h3>
                  <p className="text-zinc-500 mt-3">{metric.title}</p>
                </motion.div>
              );
            })}
          </div>

          <LatestAssessment />

          <div className="glass-panel rounded-[35px] p-8 mt-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-zinc-500 text-sm">Weekly Training Split</p>
                <h3 className="text-3xl font-bold mt-2">
                  AI Generated Program
                </h3>
              </div>

              <Dumbbell className="text-blue-400" />
            </div>

            <div className="space-y-6">
              {workouts.map((workout, i) => (
                <motion.div
                  key={workout.day}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-zinc-500 text-sm">{workout.day}</p>
                      <h4 className="text-2xl font-bold mt-1">
                        {workout.focus}
                      </h4>
                    </div>

                    <span className="text-blue-300 font-bold">
                      {workout.progress}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${workout.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-blue-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnalyticsChart />
          <SystemStatus />
          <AthleteProfile />
        </section>
      </div>
    </main>
  );
}