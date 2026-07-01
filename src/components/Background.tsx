"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Background() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      mx.set((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2));
      my.set((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2));
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mx, my]);

  const blob1X = useTransform(springX, (v) => v * -50);
  const blob1Y = useTransform(springY, (v) => v * -40);
  const blob2X = useTransform(springX, (v) => v * 40);
  const blob2Y = useTransform(springY, (v) => v * 50);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* glows — drift with the cursor and breathe on their own */}
      <motion.div
        className="absolute -left-24 -top-32 h-[500px] w-[500px] rounded-full bg-[#7c5cff] blur-[120px]"
        style={{ opacity: "var(--glow-1)", x: blob1X, y: blob1Y }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-[18%] h-[450px] w-[450px] rounded-full bg-[#00d4ff] blur-[120px]"
        style={{ opacity: "var(--glow-2)", x: blob2X, y: blob2Y }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
