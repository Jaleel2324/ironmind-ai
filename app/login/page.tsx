"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <p className="text-zinc-500 tracking-[0.3em] uppercase">
        Entering Dashboard...
      </p>
    </main>
  );
}