"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Brain,
  Lock,
  Mail,
  User,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  function handleSignup() {
    document.cookie =
      "ironmind_demo_auth=true; path=/; max-age=86400";

    router.push("/assessment");
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 lg:p-10 overflow-hidden flex items-center">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition mb-10"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">
          <section>
            <p className="uppercase tracking-[0.4em] text-blue-300 text-sm mb-4">
              Create Athlete Profile
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              JOIN
              <span className="text-blue-400"> IRONMIND</span>
            </h1>

            <p className="text-zinc-400 max-w-xl mt-8 text-lg">
              Create your demo athlete account and enter the full AI fitness
              dashboard experience.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[
                { icon: Brain, title: "AI Plans" },
                { icon: Sparkles, title: "Photo Tools" },
                { icon: ShieldCheck, title: "Secure Demo" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="glass-panel rounded-[26px] p-5 card-shine"
                  >
                    <Icon className="text-blue-400 mb-4" />

                    <h3 className="font-bold">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-[40px] p-8 blue-glow"
          >
            <h2 className="text-4xl font-black mb-2">
              Create Account
            </h2>

            <p className="text-zinc-500 mb-8">
              Demo signup screen.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Name
                </label>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4">
                  <User className="text-blue-400" size={18} />

                  <input
                    placeholder="Athlete name"
                    className="w-full bg-transparent outline-none py-4"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-400 text-sm mb-2 block">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4">
                  <Mail className="text-blue-400" size={18} />

                  <input
                    type="email"
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
                    placeholder="••••••••"
                    className="w-full bg-transparent outline-none py-4"
                  />
                </div>
              </div>

              <button
                onClick={handleSignup}
                className="w-full flex items-center justify-center rounded-full bg-blue-400 text-black font-bold py-4 blue-glow hover:bg-blue-300 transition"
              >
                Create Account
              </button>
            </div>

            <p className="text-zinc-500 text-sm mt-8 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-400 hover:underline"
              >
                Login
              </Link>
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
}