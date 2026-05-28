"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Activity,
  Brain,
  Dumbbell,
  Flame,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

const weightData = [
  { week: "W1", weight: 242 },
  { week: "W2", weight: 238 },
  { week: "W3", weight: 235 },
  { week: "W4", weight: 231 },
  { week: "W5", weight: 227 },
  { week: "W6", weight: 224 },
];

const strengthData = [
  { lift: "Bench", strength: 82 },
  { lift: "Squat", strength: 91 },
  { lift: "Deadlift", strength: 88 },
  { lift: "Rows", strength: 76 },
];

const insights = [
  { title: "Consistency", value: "92%", icon: Target },
  { title: "Strength Trend", value: "+14%", icon: Dumbbell },
  { title: "Fat Loss Pace", value: "Optimal", icon: Flame },
  { title: "Recovery Score", value: "86%", icon: Zap },
];

export default function AnalyticsPage() {
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
              Progress Intelligence
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              ATHLETE
              <span className="text-blue-400"> ANALYTICS</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              Track weight trends, strength progress, consistency, recovery,
              and AI-generated transformation insights.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Brain className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Insight Engine</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Later this will read real training data and generate weekly reports.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {insights.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-[30px] p-7 card-shine"
              >
                <Icon className="text-blue-400 mb-6" size={34} />
                <h3 className="text-3xl font-black">{item.value}</h3>
                <p className="text-zinc-500 mt-2">{item.title}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <section className="glass-panel rounded-[35px] p-8 blue-glow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-zinc-500 text-sm">Bodyweight Trend</p>
                <h2 className="text-3xl font-bold mt-2">
                  Transformation Curve
                </h2>
              </div>

              <TrendingUp className="text-blue-400" size={34} />
            </div>

            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
                  <XAxis dataKey="week" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#60a5fa"
                    strokeWidth={4}
                    dot={{ r: 6, fill: "#60a5fa" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="glass-panel rounded-[35px] p-8 blue-glow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-zinc-500 text-sm">Strength Output</p>
                <h2 className="text-3xl font-bold mt-2">
                  Lift Performance
                </h2>
              </div>

              <Activity className="text-blue-400" size={34} />
            </div>

            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={strengthData}>
                  <XAxis dataKey="lift" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip />
                  <Bar dataKey="strength" fill="#60a5fa" radius={[14, 14, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <section className="glass-panel rounded-[35px] p-8 mt-10 card-shine">
          <p className="text-blue-300 uppercase tracking-[0.35em] text-sm mb-4">
            AI Weekly Report
          </p>

          <h2 className="text-4xl font-black leading-tight">
            Your transformation pace is strong.
          </h2>

          <p className="text-zinc-400 mt-6 max-w-4xl leading-relaxed">
            IRONMIND detects steady weight reduction, stable strength retention,
            and strong weekly consistency. Continue the current training split,
            keep protein intake high, and add one recovery-focused mobility
            session this week.
          </p>
        </section>
      </div>
    </main>
  );
}
