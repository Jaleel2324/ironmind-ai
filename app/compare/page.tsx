"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  ImagePlus,
  ScanLine,
  Sparkles,
  Upload,
} from "lucide-react";

export default function ComparePage() {
  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);

  function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>,
    type: "before" | "after"
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (type === "before") {
      setBefore(imageUrl);
    } else {
      setAfter(imageUrl);
    }
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
              Transformation Comparison
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              BEFORE / AFTER
              <span className="text-blue-400"> SCAN</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              Upload a before and after photo to preview a cinematic
              transformation comparison system.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Sparkles className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Visual Notes</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Later this will generate progress summaries from photo changes.
            </p>
          </div>
        </div>

        <section className="grid lg:grid-cols-2 gap-8">
          {[
            { label: "Before Photo", value: before, type: "before" as const },
            { label: "After Photo", value: after, type: "after" as const },
          ].map((item) => (
            <label
              key={item.type}
              className="relative min-h-[560px] glass-panel rounded-[40px] border border-blue-400/20 blue-glow card-shine cursor-pointer overflow-hidden flex items-center justify-center"
            >
              {item.value ? (
                <Image
                  src={item.value}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center p-10">
                  <div className="h-20 w-20 rounded-3xl bg-blue-400/10 flex items-center justify-center mx-auto mb-6">
                    <Upload className="text-blue-400" size={38} />
                  </div>

                  <h2 className="text-4xl font-black">{item.label}</h2>

                  <p className="text-zinc-500 mt-4">
                    Click to upload {item.type} transformation image.
                  </p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => handleImageUpload(event, item.type)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="text-blue-300 uppercase tracking-[0.25em] text-xs">
                    {item.type}
                  </p>
                  <h3 className="text-2xl font-black">{item.label}</h3>
                </div>

                <Camera className="text-blue-400" />
              </div>
            </label>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-[35px] p-8 mt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <ScanLine className="text-blue-400" />
            <h2 className="text-3xl font-black">AI Comparison Notes</h2>
          </div>

          {before && after ? (
            <p className="text-zinc-300 leading-relaxed">
              Both photos are loaded. IRONMIND can now compare posture,
              conditioning, muscle fullness, and visual progress. Later we will
              connect this to real AI image analysis.
            </p>
          ) : (
            <p className="text-zinc-500">
              Upload both photos to activate the comparison preview.
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {["Muscle Definition", "Body Composition", "Progress Quality"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white/5 border border-white/10 p-5"
                >
                  <ImagePlus className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold">{item}</h3>
                  <p className="text-zinc-500 mt-2 text-sm">
                    Awaiting AI scan data.
                  </p>
                </div>
              )
            )}
          </div>
        </motion.section>
      </div>
    </main>
  );
}