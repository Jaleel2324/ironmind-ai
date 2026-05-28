"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md glass-panel rounded-[40px] p-10 blue-glow"
      >
        <p className="text-blue-300 uppercase tracking-[0.35em] text-sm mb-4">
          Welcome Back
        </p>

        <h1 className="text-5xl font-black leading-none">
          LOGIN
        </h1>

        <p className="text-zinc-400 mt-5">
          Access your athlete dashboard and AI coaching system.
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-5">
          <div>
            <label className="text-zinc-400 text-sm mb-2 block">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4">
              <Mail className="text-blue-400" size={18} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="athlete@email.com"
                className="w-full bg-transparent outline-none py-4"
              />
            </div>
          </div>

          <div>
            <label className="text-zinc-400 text-sm mb-2 block">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4">
              <Lock className="text-blue-400" size={18} />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none py-4"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-8 py-4 rounded-full bg-blue-400 hover:bg-blue-300 transition text-black font-bold blue-glow flex items-center justify-center gap-3"
          >
            Enter Dashboard
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-zinc-500 text-sm text-center mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-300 hover:text-blue-200"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </main>
  );
}