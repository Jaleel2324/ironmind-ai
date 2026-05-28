"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EditorialLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black tracking-tight"
            >
              IRON<span className="text-blue-400">MIND</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 260 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-[2px] bg-blue-400 mx-auto mt-8 blue-glow"
            />

            <p className="text-zinc-500 uppercase tracking-[0.4em] text-sm mt-6">
              Initializing Athlete System
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}