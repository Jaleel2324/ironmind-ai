"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Upload,
  ImagePlus,
  Camera,
  Sparkles,
  Trash2,
} from "lucide-react";

export default function UploadsPage() {
  const [images, setImages] = useState<string[]>([]);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files) return;

    const uploaded = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...uploaded]);
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
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
              Transformation Uploads
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              ATHLETE PHOTO
              <span className="text-blue-400"> SYSTEM</span>
            </h1>

            <p className="text-zinc-400 max-w-2xl mt-6 text-lg">
              Upload gym photos, progress shots, or athlete images to preview
              how the transformation gallery will work.
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-6 blue-glow">
            <Sparkles className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold">AI Vision Layer</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Later this connects to AI photo analysis and Cloudinary storage.
            </p>
          </div>
        </div>

        <label className="glass-panel rounded-[40px] p-10 md:p-16 border border-blue-400/20 blue-glow card-shine cursor-pointer flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-3xl bg-blue-400/10 flex items-center justify-center mb-6">
            <Upload className="text-blue-400" size={38} />
          </div>

          <h2 className="text-4xl font-black mb-4">
            Upload Transformation Photos
          </h2>

          <p className="text-zinc-500 max-w-xl">
            Select multiple photos from your computer. They will instantly
            appear in a premium gallery preview.
          </p>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
          />

          <div className="mt-8 px-8 py-4 rounded-full bg-blue-400 text-black font-bold">
            Choose Photos
          </div>
        </label>

        {images.length === 0 ? (
          <div className="glass-panel rounded-[35px] p-10 mt-10 text-center">
            <ImagePlus className="text-blue-400 mx-auto mb-5" size={42} />

            <h3 className="text-2xl font-bold">No photos uploaded yet</h3>

            <p className="text-zinc-500 mt-3">
              Add photos to preview your transformation gallery.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-[420px] rounded-[32px] overflow-hidden border border-white/10 blue-glow group"
              >
                <Image
                  src={src}
                  alt="Uploaded athlete photo"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-5 right-5 h-11 w-11 rounded-full bg-black/60 backdrop-blur-xl flex items-center justify-center border border-white/10 hover:bg-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-blue-300 text-sm uppercase tracking-[0.2em]">
                    <Camera size={16} />
                    Upload {i + 1}
                  </div>

                  <h3 className="text-2xl font-black mt-2">
                    Progress Photo
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}