"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Database,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const systems = [
  {
    title: "AI Core",
    status: "Online",
    icon: Brain,
  },
  {
    title: "Analytics Engine",
    status: "Active",
    icon: Activity,
  },
  {
    title: "Cloud Storage",
    status: "Connected",
    icon: Database,
  },
  {
    title: "Security Layer",
    status: "Protected",
    icon: ShieldCheck,
  },
];

export default function SystemStatus() {
  return (
    <section className="glass-panel rounded-[35px] p-8 mt-10 blue-glow">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-zinc-500 text-sm">
            System Monitoring
          </p>

          <h2 className="text-3xl font-bold mt-2">
            AI Status Center
          </h2>
        </div>

        <div className="flex items-center gap-3 text-blue-300">
          <Wifi size={20} />
          ONLINE
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {systems.map((system, i) => {
          const Icon = system.icon;

          return (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-sm">
                    {system.title}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {system.status}
                  </h3>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-blue-400/10 flex items-center justify-center">
                  <Icon className="text-blue-400" size={28} />
                </div>
              </div>

              <div className="mt-6 h-2 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  className="h-full bg-blue-400"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}