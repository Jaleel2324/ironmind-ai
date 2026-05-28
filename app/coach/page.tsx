"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  User,
  Send,
  Brain,
  Dumbbell,
  Flame,
  Target,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type Message = {
  role: "ai" | "user";
  text: string;
};

const starterMessages: Message[] = [
  {
    role: "ai",
    text: "Welcome to IRONMIND Coach. Tell me your goal, training schedule, and current fitness level.",
  },
  {
    role: "user",
    text: "I want to build muscle, lose fat, and train 5 days per week.",
  },
  {
    role: "ai",
    text: "Perfect. I recommend a 5-day hypertrophy split, 2 cardio sessions, 2,650 calories daily, and weekly progress photo tracking.",
  },
];

export default function CoachPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        role: "ai",
        text: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        role: "ai",
        text: "Something went wrong connecting to the AI coach system.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
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

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <section className="glass-panel rounded-[40px] p-6 md:p-8 blue-glow">
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-blue-400/10 flex items-center justify-center">
                  <Bot className="text-blue-400" size={28} />
                </div>

                <div>
                  <h1 className="text-3xl font-black">IRONMIND Coach</h1>
                  <p className="text-zinc-500 text-sm">
                    Adaptive fitness intelligence
                  </p>
                </div>
              </div>

              <div className="h-3 w-3 rounded-full bg-blue-400 blue-glow" />
            </div>

            <div className="space-y-6 min-h-[520px]">
              {messages.map((message, i) => {
                const isAI = message.role === "ai";

                return (
                  <motion.div
                    key={`${message.text}-${i}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex gap-3 ${
                      isAI ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAI && (
                      <div className="h-10 w-10 rounded-full bg-blue-400/10 flex items-center justify-center shrink-0">
                        <Bot className="text-blue-400" size={18} />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-3xl p-5 leading-relaxed ${
                        isAI
                          ? "bg-white/5 border border-white/10 text-zinc-300"
                          : "bg-blue-400 text-black font-medium"
                      }`}
                    >
                      {message.text}
                    </div>

                    {!isAI && (
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <User className="text-zinc-300" size={18} />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="h-10 w-10 rounded-full bg-blue-400/10 flex items-center justify-center shrink-0">
                    <Bot className="text-blue-400" size={18} />
                  </div>

                  <div className="rounded-3xl p-5 bg-white/5 border border-white/10 text-zinc-400">
                    IRONMIND is analyzing...
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-full bg-white/5 border border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask IRONMIND to build your plan..."
                className="flex-1 bg-transparent outline-none px-4 text-sm text-white placeholder:text-zinc-600"
              />

              <button
                onClick={sendMessage}
                className="h-12 w-12 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-300 transition"
              >
                <Send className="text-black" size={18} />
              </button>
            </div>
          </section>

          <aside className="space-y-6">
            {[
              {
                icon: Brain,
                title: "AI Focus",
                text: "Hypertrophy + fat loss",
              },
              {
                icon: Dumbbell,
                title: "Training Split",
                text: "5 days per week",
              },
              {
                icon: Flame,
                title: "Calories",
                text: "2,650 daily target",
              },
              {
                icon: Target,
                title: "Goal Match",
                text: "94% optimized",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass-panel rounded-[28px] p-6 card-shine"
                >
                  <Icon className="text-blue-400 mb-5" size={30} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-zinc-500 mt-2">{item.text}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </main>
  );
}