"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const paths = [
    "M 0 200 C 100 100, 200 300, 400 150 S 600 50, 800 200",
    "M 0 300 C 150 200, 250 400, 450 250 S 650 100, 800 300",
    "M 0 150 C 120 50, 280 250, 400 100 S 550 200, 800 120",
    "M 0 350 C 180 250, 320 450, 500 300 S 680 150, 800 350",
    "M 0 250 C 100 350, 250 150, 400 280 S 600 320, 800 250",
  ];

  const colors = ["#a855f7", "#6366f1", "#ec4899", "#8b5cf6", "#a855f7"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06060a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Gradient orbs in loader */}
          <div className="gradient-orb w-64 h-64 top-1/4 left-1/4 bg-purple-500/20" />
          <div
            className="gradient-orb w-48 h-48 bottom-1/4 right-1/4 bg-indigo-500/20"
            style={{ animationDelay: "5s" }}
          />

          <svg
            viewBox="0 0 800 500"
            className="w-[80vw] max-w-2xl h-auto"
            fill="none"
          >
            {paths.map((d, i) => (
              <path
                key={i}
                d={d}
                stroke={colors[i]}
                strokeWidth={2}
                strokeLinecap="round"
                className={`loader-path loader-path-delay-${i}`}
                style={{ animationDelay: `${i * 0.3}s` }}
                opacity={0.7}
              />
            ))}
          </svg>

          {/* Center text */}
          <motion.div
            className="absolute flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Nobert<span className="text-[#a855f7]">.</span>
            </span>
            <span className="text-xs tracking-[0.3em] uppercase text-white/40">
              Full-stack Developer
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
