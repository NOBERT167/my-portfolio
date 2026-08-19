"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import type { Project } from "@/constants";

const GithubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function getProjectType(project: Project) {
  if (project.tech.includes("NPM")) return "Open-source package";
  if (project.tech.includes("ASP.NET Core")) return "Enterprise platform";
  if (project.tech.includes("Next.js")) return "Next.js product";
  return "Product build";
}

export function ProjectCard({
  project,
  index,
  isBento = true,
}: {
  project: Project;
  index: number;
  isBento?: boolean;
}) {
  const visibleTech = project.tech.slice(0, 4);
  const remainingTech = project.tech.length - visibleTech.length;

  return (
    <motion.article
      className={`project-card surface-card group flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] ${
        isBento && index === 0 ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.45 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--glass-border)] bg-[var(--surface-raised)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            sizes={
              isBento && index === 0
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <div className="project-fallback absolute inset-0 flex items-end p-6">
            <span className="font-mono text-5xl font-semibold tracking-[-0.08em] text-foreground/12">
              {project.title
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0])
                .join("")}
            </span>
          </div>
        )}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {getProjectType(project)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
            {project.title}
          </h3>
          {project.featured ? (
            <span className="mt-1 size-2 shrink-0 rounded-full bg-[var(--neon)]" title="Featured project">
              <span className="sr-only">Featured project</span>
            </span>
          ) : null}
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--glass-border)] bg-[var(--surface-raised)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 ? (
            <span className="rounded-full border border-[var(--glass-border)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              +{remainingTech}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex min-h-11 items-end gap-2 border-t border-[var(--glass-border)] pt-4">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--neon)] px-4 text-sm font-semibold text-[var(--neon-foreground)] transition-[filter,transform] duration-200 hover:brightness-95 active:scale-[0.98]"
              aria-label={`Visit ${project.title} live site`}
            >
              View project
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--glass-border)] px-4 text-sm font-semibold transition-colors hover:bg-[var(--surface-raised)]"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon />
              Source
            </a>
          ) : null}

          {!project.live && !project.github ? (
            <span className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground">
              <BriefcaseBusiness size={16} aria-hidden="true" />
              Private client work
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const selectedProjects = PROJECTS.filter(
    (project) => project.featured && project.image,
  ).slice(0, 5);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="eyebrow">Selected work</p>
            <h2
              id="projects-heading"
              className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl"
            >
              Products built for real people and real workflows.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A focused selection spanning enterprise portals, AI-powered
              tooling, and developer products.
            </p>
          </div>

          <Link
            href="/projects"
            className="hidden min-h-12 shrink-0 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] px-5 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] md:inline-flex"
          >
            Browse all {PROJECTS.length}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 md:hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] px-5 text-sm font-semibold"
          >
            Browse all {PROJECTS.length} projects
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
