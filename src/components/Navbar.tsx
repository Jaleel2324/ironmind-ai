"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "System", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Assessment", href: "/assessment" },
  { label: "Analytics", href: "/analytics" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[999]"
    >
      <div className="flex items-center gap-3 rounded-full border border-blue-400/20 bg-black/40 backdrop-blur-2xl px-4 py-3 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
        {/* LOGO */}
        <div className="px-4 py-2 rounded-full bg-blue-400 text-black font-black tracking-[0.2em] text-sm">
          IRON
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="px-5 py-3 rounded-full text-sm uppercase tracking-[0.25em] text-zinc-300 hover:text-white hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-3 ml-2 rounded-full border border-blue-400/20 px-4 py-2">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="h-2 w-2 rounded-full bg-blue-400"
          />

          <span className="text-xs uppercase tracking-[0.3em] text-blue-300">
            Online
          </span>
        </div>
      </div>
    </motion.nav>
  );
}