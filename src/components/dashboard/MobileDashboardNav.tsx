"use client";

import Link from "next/link";
import {
  BarChart3,
  Brain,
  Camera,
  Dumbbell,
  Home,
  Menu,
  Settings,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Assessment", href: "/assessment", icon: Brain },
  { label: "AI Coach", href: "/coach", icon: Brain },
  { label: "Workouts", href: "/workouts", icon: Dumbbell },
  { label: "AI Generator", href: "/generator", icon: Dumbbell },
  { label: "Nutrition", href: "/nutrition", icon: Utensils },
  { label: "Photos", href: "/uploads", icon: Camera },
  { label: "Compare", href: "/compare", icon: Camera },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function MobileDashboardNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full glass-panel rounded-2xl p-4 flex items-center justify-between blue-glow"
      >
        <span className="font-black tracking-[0.2em]">
          IRON<span className="text-blue-400">MIND</span>
        </span>

        <Menu className="text-blue-400" />
      </button>

      {open && (
        <div className="mt-4 grid gap-3 glass-panel rounded-3xl p-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:border-blue-400/30 transition"
              >
                <Icon className="text-blue-400" size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}