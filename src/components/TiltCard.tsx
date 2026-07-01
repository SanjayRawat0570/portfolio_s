"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glow?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  glow = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 250, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springConfig);
  const spotlightX = useTransform(px, (v) => `${v * 100}%`);
  const spotlightY = useTransform(py, (v) => `${v * 100}%`);
  const spotlightBg = useMotionTemplate`radial-gradient(480px circle at ${spotlightX} ${spotlightY}, rgba(124,92,255,0.16), transparent 65%)`;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ scale: springConfig }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative overflow-hidden ${className}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />
      )}
      {children}
    </motion.div>
  );
}
