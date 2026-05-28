"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Activity,
  Dumbbell,
  Timer,
  Flame,
  Target,
  Zap,
  RefreshCcw,
} from "lucide-react";
import { supabase } from "../../src/lib/supabase";

type WorkoutDay = {
  id?: string;
  day: string;
  focus: string;
  intensity: string;
  exercises: string[];
};

const fallbackWorkouts: WorkoutDay[] = [
  {
    day: "Monday",
    focus: "Chest + Triceps",
    exercises: ["Incline Bench Press", "Cable Fly", "Dips", "Rope Pushdowns"],
    intensity: "High",
  },
  {
    day: "Tuesday",
    focus: "Back + Biceps",
    exercises: ["Lat Pulldown", "Barbell Row", "Seated Row", "Hammer Curls"],
    intensity: "High",
  },
  {
    day: "Wednesday",
    focus: "Leg Strength",
    exercises: ["Squat", "Leg Press", "RDL", "Calf Raises"],
    intensity: "Elite",
  },
];

const stats = [
  { label: "Weekly Volume", value: "68 Sets", icon: Dumbbell },
  { label: "Training Time", value: "75 Min", icon: Timer },
  { label: "Burn Target", value: "520 Cal", icon: Flame },
  { label: "Goal Match", value: "96%", icon: Target },
];

export default function WorkoutsPage() {
  const [workoutDays, setWorkoutDays] = useState<WorkoutDay[]>(fallbackWorkouts);
  const [loading, setLoading] = useState(true);

  async function loadWorkouts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .eq("user_id", "demo-user")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      setWorkoutDays(
        data.map((item) => ({
          id: item.id,
          day: item.day,
          focus: item.focus,
          intensity: item.intensity,
          exercises: item.exercises || [],
        }))
      );
    }

    setLoading(false);
  }

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 lg:p-10 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <button
            onClick={loadWorkouts}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition"
          >
            <RefreshCcw size={18} />
            Refresh
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-4">
              AI Workout System
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              TRAINING
              <span className="text-blue-400"> PROTOCOL</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              This page now pulls saved workout plans from Supabase. Generate
              and save a plan from the AI Generator to update this system.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Zap className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">
              {loading ? "Loading..." : "Live Data Active"}
            </h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Connected to your Supabase workouts table.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-[30px] p-7 card-shine"
              >
                <Icon className="text-blue-400 mb-6" size={34} />
                <h3 className="text-3xl font-black">{stat.value}</h3>
                <p className="text-zinc-500 mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <section className="grid lg:grid-cols-3 gap-6">
          {workoutDays.map((day, i) => (
            <motion.div
              key={day.id || `${day.day}-${i}`}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-[35px] p-7 blue-glow card-shine"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-blue-300 uppercase tracking-[0.25em] text-xs">
                    {day.day}
                  </p>

                  <h2 className="text-3xl font-black mt-2">{day.focus}</h2>
                </div>

                <Activity className="text-blue-400" />
              </div>

              <div className="space-y-4">
                {day.exercises.map((exercise, index) => (
                  <div
                    key={`${exercise}-${index}`}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="flex justify-between">
                      <span>{exercise}</span>
                      <span className="text-blue-300">{index + 3} x 10</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-blue-400/10 border border-blue-400/20 p-5">
                <p className="text-zinc-500 text-sm">Intensity</p>
                <h3 className="text-2xl font-bold mt-1">{day.intensity}</h3>
              </div>
            </motion.div>
          ))}
        </section>

        <div className="mt-10">
          <Link
            href="/generator"
            className="inline-flex px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow hover:bg-blue-300 transition"
          >
            Generate New Workout
          </Link>
        </div>
      </div>
    </main>
  );
}