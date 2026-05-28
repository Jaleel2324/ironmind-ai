"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  ChevronRight,
  Dumbbell,
  Sparkles,
  Zap,
} from "lucide-react";
import { supabase } from "../../src/lib/supabase";

type WorkoutDay = {
  day: string;
  focus: string;
  intensity: string;
  exercises: string[];
};

export default function GeneratorPage() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("5");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [plan, setPlan] = useState<WorkoutDay[]>([]);

  async function generateWorkout() {
    setLoading(true);
    setSaved(false);

    const response = await fetch("/api/generate-workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ goal, days }),
    });

    const data = await response.json();

    setPlan(data.plan || []);
    setLoading(false);
  }

  async function saveWorkoutPlan() {
    if (plan.length === 0) return;

    setSaving(true);

    const rows = plan.map((day) => ({
      user_id: "demo-user",
      day: day.day,
      focus: day.focus,
      intensity: day.intensity,
      exercises: day.exercises,
    }));

    const { error } = await supabase.from("workouts").insert(rows);

    setSaving(false);

    if (error) {
      alert("Error saving workout plan: " + error.message);
      return;
    }

    setSaved(true);
  }

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
              AI Workout Generator
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              GENERATE
              <span className="text-blue-400"> TRAINING PLAN</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              Enter your goal and training schedule. IRONMIND generates a
              structured split and saves it into Supabase.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Brain className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Logic Active</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              This page calls your API and stores generated workouts.
            </p>
          </div>
        </div>

        <section className="grid lg:grid-cols-[420px_1fr] gap-8">
          <div className="glass-panel rounded-[35px] p-8 blue-glow">
            <Sparkles className="text-blue-400 mb-6" size={34} />

            <h2 className="text-3xl font-black mb-6">Plan Inputs</h2>

            <div className="space-y-5">
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Fitness Goal
                </label>

                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Example: I want to build chest, arms, and back while losing fat."
                  className="w-full min-h-[150px] rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400 resize-none"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Training Days
                </label>

                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                >
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                </select>
              </div>

              <button
                onClick={generateWorkout}
                disabled={loading}
                className="w-full px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading ? "Generating..." : "Generate Workout"}
                <ChevronRight size={18} />
              </button>

              {plan.length > 0 && (
                <button
                  onClick={saveWorkoutPlan}
                  disabled={saving}
                  className="w-full px-8 py-4 rounded-full border border-blue-400/30 hover:border-blue-400 transition font-bold flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {saving ? "Saving Plan..." : "Save Plan to Supabase"}
                </button>
              )}

              {saved && (
                <p className="text-blue-300 text-sm text-center">
                  Workout plan saved successfully.
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plan.length === 0 ? (
              <div className="glass-panel rounded-[35px] p-8 md:col-span-2 text-center">
                <Dumbbell className="text-blue-400 mx-auto mb-6" size={44} />

                <h3 className="text-3xl font-black">No plan generated yet</h3>

                <p className="text-zinc-500 mt-3">
                  Enter a goal and generate your AI workout split.
                </p>
              </div>
            ) : (
              plan.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel rounded-[32px] p-7 card-shine"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-blue-300 uppercase tracking-[0.25em] text-xs">
                        {day.day}
                      </p>

                      <h3 className="text-2xl font-black mt-2">
                        {day.focus}
                      </h3>
                    </div>

                    <Zap className="text-blue-400" />
                  </div>

                  <div className="rounded-2xl bg-blue-400/10 border border-blue-400/20 p-4 mb-5">
                    <p className="text-zinc-500 text-sm">Intensity</p>
                    <h4 className="text-xl font-bold">{day.intensity}</h4>
                  </div>

                  <div className="space-y-3">
                    {day.exercises.map((exercise) => (
                      <div
                        key={exercise}
                        className="rounded-2xl bg-white/5 border border-white/10 p-4"
                      >
                        {exercise}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}