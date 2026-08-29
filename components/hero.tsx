"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import Link from "next/link";
import { ProductSystem } from "./OrbitingSkills";

const reveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100dvh-3.5rem)] items-center px-5 pb-10 pt-24 sm:px-8 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-14">
          <motion.div
            {...reveal}
            initial={false}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold text-[var(--neon)]">
              Nobert Langat / Full-stack engineer and UI/UX designer
            </p>

            <motion.h1
              id="hero-heading"
              className="mt-5 max-w-2xl text-[2.5rem] font-semibold leading-[1.02] sm:text-5xl lg:text-[3.5rem]"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
            >
              Complex systems. <span className="text-[var(--neon)]">Clear digital products.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5 }}
            >
              I design and build reliable web platforms across React, Next.js,
              Node.js, and ASP.NET Core.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
            >
              <Link
                href="/#projects"
                className="gradient-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold text-white active:scale-[0.98]"
              >
                Explore work
                <ArrowDownRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] px-5 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] active:scale-[0.98]"
              >
                <Download size={17} aria-hidden="true" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.65 }}
          >
            <ProductSystem />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
