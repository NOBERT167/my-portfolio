"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
import { PROJECTS } from "@/constants";
import type { Project } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectCard({
  project,
  index,
  isBento = true,
}: {
  project: Project;
  index: number;
  isBento?: boolean;
}) {
  const isFeatured = project.featured;

  return (
    <motion.div
      className={`glass-card noise spotlight-card relative group
        ${isBento && isFeatured ? "md:col-span-2 rounded-3xl p-8" : "rounded-2xl p-6"}
        hover:border-[var(--neon)]/20 transition-all duration-500`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          "--spotlight-x",
          `${e.clientX - rect.left}px`,
        );
        e.currentTarget.style.setProperty(
          "--spotlight-y",
          `${e.clientY - rect.top}px`,
        );
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {isFeatured && (
              <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--neon-muted)] text-[var(--neon)] mb-2 border border-[var(--neon)]/20">
                Featured
              </span>
            )}
            <h3
              className={`font-bold tracking-tight ${isFeatured ? "text-xl md:text-2xl" : "text-lg"}`}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[var(--neon-muted)] transition-colors duration-300"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[var(--neon-muted)] transition-colors duration-300"
                aria-label={`${project.title} live`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-[var(--surface)] border border-[var(--glass-border)] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      {/* Background orb */}
      <div
        className="gradient-orb w-[400px] h-[400px] top-1/2 -right-48 bg-purple-500/10"
        style={{ animationDelay: "10s" }}
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--neon)] mb-3">
            Selected work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mb-12">
            A curated selection of my work — from open-source npm packages to
            full-stack applications.
          </p>
        </motion.div>

        {/* Bento projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {PROJECTS.filter((p) => p.featured)
            .concat(PROJECTS.filter((p) => !p.featured).slice(0, 4))
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
        </div>

        {/* View all link */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-[var(--neon)]/20 text-sm font-medium transition-all duration-300 hover:bg-[var(--neon-muted)]"
          >
            View all projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
