"use client";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.cookie = "ironmind_demo_auth=true; path=/; max-age=86400";
    window.location.href = "/dashboard";
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <p className="text-zinc-500 tracking-[0.3em] uppercase">
        Entering Dashboard...
      </p>
    </main>
  );
}