"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Bell,
  Shield,
  Palette,
  Save,
} from "lucide-react";

const settings = [
  { title: "Profile", text: "Athlete name, goal, training level", icon: User },
  { title: "Notifications", text: "Workout reminders and check-ins", icon: Bell },
  { title: "Privacy", text: "Photo visibility and account security", icon: Shield },
  { title: "Theme", text: "Silver blue AI interface", icon: Palette },
];

export default function SettingsPage() {
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

        <p className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-4">
          System Preferences
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-10">
          ATHLETE
          <span className="text-blue-400"> SETTINGS</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {settings.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-[32px] p-8 card-shine"
              >
                <Icon className="text-blue-400 mb-6" size={34} />
                <h2 className="text-3xl font-black">{item.title}</h2>
                <p className="text-zinc-500 mt-3">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <section className="glass-panel rounded-[35px] p-8 mt-10 blue-glow">
          <h2 className="text-3xl font-black mb-6">Profile Details</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {["Name", "Goal", "Training Level", "Weekly Training Days"].map(
              (label) => (
                <div key={label}>
                  <label className="text-zinc-500 text-sm">{label}</label>
                  <input
                    placeholder={label}
                    className="mt-2 w-full rounded-2xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-400"
                  />
                </div>
              )
            )}
          </div>

          <button className="mt-8 px-8 py-4 rounded-full bg-blue-400 text-black font-bold blue-glow flex items-center gap-3">
            <Save size={18} />
            Save Settings
          </button>
        </section>
      </div>
    </main>
  );
}