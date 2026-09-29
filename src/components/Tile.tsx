"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

type TileProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  spotlight?: boolean;
};

/** A single bento cell: rounded card that fades up on scroll with a cursor-following spotlight. */
export default function Tile({ children, className = "", delay = 0, spotlight = true }: TileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, var(--spot), transparent 70%)`;

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={spotlight ? handlePointerMove : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-border-hover ${className}`}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
