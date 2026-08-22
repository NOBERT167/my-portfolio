"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Gauge,
  Package,
  Quote,
} from "lucide-react";
import { SITE } from "@/constants";

const PROOF_POINTS = [
  {
    icon: BriefcaseBusiness,
    label: "Production delivery",
    value: "Enterprise systems",
    description:
      "Procurement and self-service platforms shaped around real operational workflows.",
  },
  {
    icon: Package,
    label: "Open-source craft",
    value: "3 React packages",
    description:
      "Focused npm packages for reusable interface and interaction patterns.",
  },
  {
    icon: Gauge,
    label: "Measured efficiency",
    value: "~85% less scaffolding",
    description:
      "AI-assisted OData generation that reduces repetitive MVC development work.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative px-5 py-24 sm:px-8 md:py-32"
    >
      <div
        className="gradient-orb -left-32 top-16 h-80 w-80 bg-[var(--blue-muted)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-3xl md:mb-12"
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">Testimonials</p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl"
          >
            Trust is built in the work, then{" "}
            <span className="gradient-text">confirmed by people.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-6">
          <motion.div
            className="testimonial-feature surface-card noise relative overflow-hidden rounded-[2rem] p-7 sm:p-9 lg:p-11"
            initial={{ y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex min-h-9 items-center rounded-full border border-[var(--glass-border)] bg-[var(--surface-raised)] px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Verified feedback only
                </span>
                <Quote
                  size={36}
                  strokeWidth={1.35}
                  className="text-[var(--neon)]"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-10 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl">
                Professional references are available on request.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                Client feedback stays private until there is explicit permission
                to publish it. For serious project conversations, I can share an
                appropriate professional reference directly.
              </p>

              <div className="mt-10 border-t border-[var(--glass-border)] pt-6 lg:mt-auto">
                <a
                  href={"mailto:" + SITE.email + "?subject=Professional%20reference%20request"}
                  className="gradient-button inline-flex min-h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white hover:brightness-105 active:scale-[0.98]"
                >
                  Request a reference
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {PROOF_POINTS.map((point, index) => (
              <motion.article
                key={point.label}
                className="surface-card interactive-card relative overflow-hidden rounded-3xl p-6"
                initial={{ x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--neon-muted)] text-[var(--neon)]">
                    <point.icon size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {point.label}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.025em]">
                      {point.value}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
