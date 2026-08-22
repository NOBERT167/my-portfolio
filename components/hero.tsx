"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { PROJECTS, SITE } from "@/constants";
import { OrbitingSkills } from "./OrbitingSkills";

const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const HERO_STATS = [
  { value: `${PROJECTS.length}`, label: "Projects & products" },
  { value: "3+", label: "Open-source packages" },
  { value: "NBO", label: "Based in Nairobi" },
  { value: "EAT", label: "Available remotely" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center overflow-hidden px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32"
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-primary" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-secondary" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-12">
          <motion.div
            {...reveal}
            initial={false}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--surface-raised)] px-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md">
                <motion.span
                  className="size-2 rounded-full bg-[var(--neon)]"
                  animate={{ opacity: [0.55, 1, 0.55], scale: [0.85, 1.15, 0.85] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                Available for select projects
              </span>
              <span className="h-px w-12 bg-[var(--border-strong)]" aria-hidden="true" />
              <span className="font-mono text-xs text-muted-foreground">NBO / EAT</span>
            </div>

            <motion.p
              className="mb-4 text-sm font-semibold text-[var(--neon)]"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45 }}
            >
              Full-stack engineer &amp; UI/UX designer
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="max-w-2xl text-balance text-[clamp(2.35rem,3.75vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.048em]"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
            >
              I turn complex systems into{" "}
              <span className="hero-title-gradient">clear digital products.</span>
            </motion.h1>
            <motion.p
              className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.5 }}
            >
              I design and build reliable web platforms across React, Next.js,
              Node.js, and ASP.NET Core—combining product thinking with clean,
              maintainable engineering.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.5 }}
            >
              <Link
                href="/#projects"
                className="gradient-button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-[var(--neon-foreground)] hover:brightness-105 active:scale-[0.98]"
              >
                Explore selected work
                <ArrowDownRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] px-5 text-sm font-semibold backdrop-blur-md transition-colors duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
              >
                <Download size={17} aria-hidden="true" />
                Download résumé
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[var(--neon)]" aria-hidden="true" />
                {SITE.location}
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-raised)] transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                aria-label="View Nobert's GitHub profile"
              >
                <GithubIcon />
              </a>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-raised)] transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                aria-label="View Nobert's LinkedIn profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex min-h-10 items-center gap-1 font-semibold text-foreground transition-colors hover:text-[var(--neon)]"
              >
                Email me
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
          <OrbitingSkills />
        </div>

        <motion.dl
          className="mt-14 grid grid-cols-2 border-y border-[var(--glass-border)] sm:grid-cols-4 lg:mt-12"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.5 }}
        >
          {HERO_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-5 sm:px-5 ${
                index % 2 ? "border-l border-[var(--glass-border)] pl-5" : "pr-5"
              } ${index > 1 ? "border-t border-[var(--glass-border)] sm:border-t-0" : ""} ${
                index > 0 ? "sm:border-l sm:border-[var(--glass-border)]" : ""
              }`}
            >
              <dd className="text-2xl font-semibold tracking-[-0.04em]">{stat.value}</dd>
              <dt className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
