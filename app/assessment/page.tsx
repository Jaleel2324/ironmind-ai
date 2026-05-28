"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  ChevronRight,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Ruler,
  Scale,
  Sparkles,
  Target,
} from "lucide-react";
import { supabase } from "../../src/lib/supabase";

export default function AssessmentPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    height: "",
    weight: "",
    goal: "",
    training_level: "",
    weekly_training_days: "",
    injuries: "",
    main_focus: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("assessments").insert({
      user_id: "demo-user",
      height: form.height,
      weight: form.weight,
      goal: form.goal,
      training_level: form.training_level,
      weekly_training_days: form.weekly_training_days,
      injuries: form.injuries,
      main_focus: form.main_focus,
    });

    setLoading(false);

    if (error) {
      alert("Error saving assessment: " + error.message);
      return;
    }

    setSaved(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
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
              AI Athlete Onboarding
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              ATHLETE
              <span className="text-blue-400"> ASSESSMENT</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              Capture athlete goals, body metrics, training level, injury
              history, and weekly availability so IRONMIND can generate a
              personalized plan.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Brain className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Plan Engine</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              This form now saves real assessment data to Supabase.
            </p>
          </div>
        </div>

        <section className="grid lg:grid-cols-[1fr_380px] gap-8">
          <motion.form
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-[40px] p-8 blue-glow"
          >
            <div className="flex items-center gap-3 mb-8">
              <ClipboardList className="text-blue-400" />
              <h2 className="text-3xl font-black">Assessment Form</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <Ruler size={16} className="text-blue-400" />
                  Height
                </label>
                <input
                  value={form.height}
                  onChange={(e) => updateField("height", e.target.value)}
                  placeholder="6'0"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <Scale size={16} className="text-blue-400" />
                  Weight
                </label>
                <input
                  value={form.weight}
                  onChange={(e) => updateField("weight", e.target.value)}
                  placeholder="256 lbs"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <Target size={16} className="text-blue-400" />
                  Goal
                </label>
                <input
                  value={form.goal}
                  onChange={(e) => updateField("goal", e.target.value)}
                  placeholder="Build muscle / lose fat"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <Dumbbell size={16} className="text-blue-400" />
                  Training Level
                </label>
                <input
                  value={form.training_level}
                  onChange={(e) =>
                    updateField("training_level", e.target.value)
                  }
                  placeholder="Beginner / intermediate / advanced"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <ClipboardList size={16} className="text-blue-400" />
                  Weekly Training Days
                </label>
                <input
                  value={form.weekly_training_days}
                  onChange={(e) =>
                    updateField("weekly_training_days", e.target.value)
                  }
                  placeholder="5 days"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                  <HeartPulse size={16} className="text-blue-400" />
                  Injuries / Limitations
                </label>
                <input
                  value={form.injuries}
                  onChange={(e) => updateField("injuries", e.target.value)}
                  placeholder="Shoulder, knee, back, none"
                  className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-zinc-400 text-sm mb-2 block">
                Main Focus
              </label>

              <textarea
                value={form.main_focus}
                onChange={(e) => updateField("main_focus", e.target.value)}
                placeholder="Example: I want to build a stronger chest, arms, and back while dropping body fat."
                className="w-full min-h-[150px] rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400 resize-none"
              />
            </div>

            <button
              disabled={loading}
              className="mt-8 px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow flex items-center gap-3 disabled:opacity-60"
            >
              {loading ? "Saving Assessment..." : "Generate AI Assessment"}
              <ChevronRight size={18} />
            </button>
          </motion.form>

          <aside className="space-y-6">
            <div className="glass-panel rounded-[32px] p-7 card-shine">
              <Sparkles className="text-blue-400 mb-6" size={34} />
              <h3 className="text-3xl font-black">Output Preview</h3>
              <p className="text-zinc-500 mt-3">
                After submission, IRONMIND saves your profile and prepares the
                dashboard flow.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-7 blue-glow">
              <p className="text-blue-300 uppercase tracking-[0.3em] text-xs mb-4">
                Assessment Result
              </p>

              {saved ? (
                <div>
                  <h3 className="text-3xl font-black">
                    Assessment Saved
                  </h3>

                  <p className="text-zinc-400 mt-5 leading-relaxed">
                    Your data was saved to Supabase. Redirecting to dashboard...
                  </p>
                </div>
              ) : (
                <p className="text-zinc-500">
                  Complete the form to save your AI assessment.
                </p>
              )}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}