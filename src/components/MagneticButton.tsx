"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function MagneticButton({
  href,
  children,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group inline-flex items-center gap-3 rounded-full bg-blue-400 px-8 py-4 font-bold text-black blue-glow transition hover:bg-blue-300"
      >
        {children}
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}