"use client";

import type { MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { SITE } from "@/constants";

const heroEase = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.75, ease: heroEase },
  }),
};

const handleSpotlight = (event: MouseEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--spotlight-x",
    `${event.clientX - rect.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--spotlight-y",
    `${event.clientY - rect.top}px`,
  );
};

const GithubIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { label: "GitHub", href: SITE.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: LinkedinIcon },
  { label: "Twitter", href: SITE.socials.twitter, icon: TwitterIcon },
];

const focusAreas = [
  "Next.js",
  "TypeScript",
  "ASP.NET Core",
  "Node.js",
  "UI systems",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: cardVariants,
      };

  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:pb-14 md:pt-32">
      {/* Living gradient orbs */}
      <div className="gradient-orb w-[500px] h-[500px] -top-32 -left-32 bg-purple-600/20 dark:bg-purple-600/10" />
      <div
        className="gradient-orb w-[400px] h-[400px] top-1/2 right-0 bg-indigo-500/20 dark:bg-indigo-500/10"
        style={{ animationDelay: "7s" }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] bottom-0 left-1/3 bg-pink-500/15 dark:bg-pink-500/8"
        style={{ animationDelay: "14s" }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(135deg,rgba(99,102,241,0.12),transparent_34%),var(--background)]" />
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 1100 560"
        className="absolute left-1/2 top-1/2 -z-10 h-[62rem] w-[78rem] -translate-x-1/2 -translate-y-1/2 opacity-45 dark:opacity-55"
        fill="none"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 0.5 }}
        transition={{ duration: 1.2, ease: heroEase }}
      >
        <path
          d="M65 355C196 214 328 508 476 309C611 127 719 277 843 214C930 170 987 182 1042 126"
          stroke="url(#hero-wave-a)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M112 250C249 106 332 339 470 232C588 140 682 57 804 171C901 262 983 226 1066 206"
          stroke="url(#hero-wave-b)"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <path
          d="M157 421C299 340 420 405 538 390C682 372 742 278 866 314C957 341 1002 284 1075 260"
          stroke="url(#hero-wave-c)"
          strokeLinecap="round"
          strokeWidth="1"
        />
        <defs>
          <linearGradient
            id="hero-wave-a"
            x1="65"
            x2="1042"
            y1="355"
            y2="126"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a855f7" stopOpacity="0" />
            <stop offset="0.46" stopColor="#a855f7" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="hero-wave-b"
            x1="112"
            x2="1066"
            y1="250"
            y2="206"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ec4899" stopOpacity="0.05" />
            <stop offset="0.55" stopColor="#ec4899" />
            <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="hero-wave-c"
            x1="157"
            x2="1075"
            y1="421"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366f1" stopOpacity="0" />
            <stop offset="0.48" stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <motion.div
            className="glass-card noise spotlight-card relative min-h-[28rem] overflow-hidden rounded-2xl p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8 md:col-span-8 md:min-h-[34rem] md:p-12 dark:shadow-[0_24px_90px_rgba(0,0,0,0.42)]"
            custom={0.05}
            onMouseMove={handleSpotlight}
            {...motionProps}
          >
            <div className="relative z-10 flex h-full flex-col justify-between gap-12">
              <div className="max-w-3xl">
                <h1 className="max-w-[9ch] text-2xl font-bold leading-[0.95] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                  Nobert Langat
                  <span className="text-[var(--neon)]">.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
                  {SITE.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a
                  href="/resume.pdf"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(168,85,247,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Download size={16} aria-hidden="true" />
                  Download resume
                </motion.a>
                <motion.a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface)]/55 px-5 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-[var(--neon)]/35 hover:bg-[var(--neon-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-white/5"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  View projects
                  <ArrowUpRight size={16} aria-hidden="true" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:col-span-4 md:gap-5">
            <motion.div
              className="glass-card noise spotlight-card relative overflow-hidden rounded-2xl p-6"
              custom={0.14}
              onMouseMove={handleSpotlight}
              {...motionProps}
            >
              <div className="relative z-10 flex h-full min-h-40 flex-col justify-between gap-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-40 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    Available for selected work
                  </span>
                </div>
                <div>
                  <p className="text-sm uppercase text-muted-foreground">
                    Current focus
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">
                    Full-stack products with a precise front end.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card noise spotlight-card relative overflow-hidden rounded-2xl p-6"
              custom={0.2}
              onMouseMove={handleSpotlight}
              {...motionProps}
            >
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin
                    aria-hidden="true"
                    className="text-[var(--neon)]"
                    size={16}
                  />
                  <span>{SITE.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg border border-[var(--glass-border)] bg-[var(--surface)]/70 px-3 py-1.5 text-sm text-foreground dark:bg-white/5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-[1fr_auto] gap-4"
              custom={0.26}
              {...motionProps}
            >
              <div
                className="glass-card noise spotlight-card relative overflow-hidden rounded-2xl p-6"
                onMouseMove={handleSpotlight}
              >
                <div className="relative z-10">
                  <p className="text-4xl font-bold tracking-tight text-[var(--neon)]">
                    3+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    npm packages
                  </p>
                </div>
              </div>
              <div
                className="glass-card noise spotlight-card relative flex items-center gap-2 overflow-hidden rounded-2xl p-3"
                onMouseMove={handleSpotlight}
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-11 items-center justify-center rounded-xl text-muted-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--neon-muted)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon)]"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex justify-center md:mt-10"
          custom={0.36}
          {...motionProps}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-[var(--neon)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Scroll
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--surface)]/60 transition group-hover:border-[var(--neon)]/40 dark:bg-white/5">
              <motion.span
                animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={14} aria-hidden="true" />
              </motion.span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
