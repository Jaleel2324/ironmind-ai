"use client";

import { useEffect, useState } from "react";
import { Brain, ClipboardList, Dumbbell, HeartPulse, Ruler, Scale, Target } from "lucide-react";
import { supabase } from "../../lib/supabase";

type Assessment = {
  height: string | null;
  weight: string | null;
  goal: string | null;
  training_level: string | null;
  weekly_training_days: string | null;
  injuries: string | null;
  main_focus: string | null;
};

export default function LatestAssessment() {
  const [assessment, setAssessment] = useState<Assessment | null>(null);

  useEffect(() => {
    async function loadAssessment() {
      const { data } = await supabase
        .from("assessments")
        .select("*")
        .eq("user_id", "demo-user")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data) setAssessment(data);
    }

    loadAssessment();
  }, []);

  if (!assessment) return null;

  const items = [
    { label: "Height", value: assessment.height, icon: Ruler },
    { label: "Weight", value: assessment.weight, icon: Scale },
    { label: "Goal", value: assessment.goal, icon: Target },
    { label: "Level", value: assessment.training_level, icon: Dumbbell },
    { label: "Days", value: assessment.weekly_training_days, icon: ClipboardList },
    { label: "Limits", value: assessment.injuries, icon: HeartPulse },
  ];

  return (
    <section className="glass-panel rounded-[35px] p-8 mt-10 blue-glow">
      <div className="flex items-center gap-3 mb-8">
        <Brain className="text-blue-400" />
        <h2 className="text-3xl font-black">Latest Assessment</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="rounded-3xl bg-white/5 border border-white/10 p-5">
              <Icon className="text-blue-400 mb-4" />
              <p className="text-zinc-500 text-sm">{item.label}</p>
              <h3 className="text-xl font-bold mt-2">{item.value || "Not set"}</h3>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-3xl bg-blue-400/10 border border-blue-400/20 p-6">
        <p className="text-zinc-500 text-sm mb-2">Main Focus</p>
        <p className="text-zinc-300">{assessment.main_focus || "No focus added yet."}</p>
      </div>
    </section>
  );
}