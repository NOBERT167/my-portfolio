"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import type { Project } from "@/constants";

const SHOWCASE_TITLES = [
  "Judiciary of Kenya Supplier Portal",
  "DevPulse",
  "AI-Powered OData MVC Code Generator",
  "React Spotlight Search",
  "React Confirm Dialog",
  "React 3D Icons",
] as const;

const CONTAINED_IMAGE_PATHS = new Set([
  "/projects/ppra-recruitment.png",
  "/projects/shop-yangu.png",
]);

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

function ProjectActions({ project }: { project: Project }) {
  const isNpmPackage = project.tech.includes("NPM");

  return (
    <div className="flex min-h-11 flex-wrap items-end gap-2">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-[var(--neon-foreground)] hover:brightness-105 active:scale-[0.98]"
          aria-label={
            isNpmPackage
              ? `View ${project.title} on npm`
              : `Visit ${project.title} live site`
          }
        >
          {isNpmPackage ? "View on npm" : "View project"}
          {isNpmPackage ? (
            <Package size={15} aria-hidden="true" />
          ) : (
            <ExternalLink size={15} aria-hidden="true" />
          )}
        </a>
      ) : null}

      {isNpmPackage && project.docs ? (
        <a
          href={project.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] px-4 text-sm font-semibold text-foreground transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] active:scale-[0.98]"
          aria-label={`Read ${project.title} documentation`}
        >
          Documentation
          <BookOpen size={15} aria-hidden="true" />
        </a>
      ) : null}

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] px-4 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
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
  );
}

export function ProjectCard({
  project,
  index,
  variant = "showcase",
}: {
  project: Project;
  index: number;
  variant?: "showcase" | "archive";
}) {
  const visibleTech = project.tech.slice(0, 3);
  const remainingTech = project.tech.length - visibleTech.length;
  const projectNumber = String(index + 1).padStart(2, "0");
  const mediaHref = project.live || project.github;
  const shouldContainImage = project.image
    ? CONTAINED_IMAGE_PATHS.has(project.image)
    : false;

  return (
    <motion.article
      layout="position"
      className="project-card surface-card group isolate flex min-w-0 flex-col overflow-hidden rounded-[1.6rem]"
      initial={{ y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: Math.min(index * 0.055, 0.22),
        duration: 0.48,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.35 },
      }}
    >
      <div className="project-media relative aspect-video overflow-hidden border-b border-[var(--glass-border)] bg-[#090912]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              shouldContainImage
                ? "object-contain"
                : "object-cover group-hover:scale-[1.025]"
            }`}
          />
        ) : (
          <div className="project-fallback absolute inset-0 flex items-end p-6">
            <span className="font-mono text-5xl font-semibold tracking-[-0.04em] text-foreground/12">
              {project.title
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0])
                .join("")}
            </span>
          </div>
        )}

        {mediaHref ? (
          <a
            href={mediaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-[6] rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--neon)]"
            aria-label={`Open ${project.title} ${project.live ? "project" : "source code"}`}
          >
            <span className="sr-only">Open {project.title}</span>
          </a>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-3 sm:p-4">
          <span className="rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {getProjectType(project)}
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-black/70 font-mono text-[10px] tracking-[0.08em] text-white backdrop-blur-md">
            {projectNumber}
          </span>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-t from-black/55 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <span className="h-px w-8 bg-gradient-to-r from-[var(--neon)] to-[var(--blue)]" />
          {variant === "showcase" ? "Selected work" : "Project archive"}
        </div>

        <h3 className="min-h-[3.35rem] text-xl font-semibold leading-[1.18] tracking-[-0.03em] sm:text-[1.35rem]">
          {project.title}
        </h3>

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

        <div className="mt-auto border-t border-[var(--glass-border)] pt-5">
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const selectedProjects = SHOWCASE_TITLES.map((title) =>
    PROJECTS.find((project) => project.title === title),
  ).filter((project): project is Project => Boolean(project?.image));

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 grid gap-7 border-b border-[var(--glass-border)] pb-9 md:mb-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end"
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="eyebrow">Selected work</p>
            <h2
              id="projects-heading"
              className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl"
            >
              Products built for real people and{" "}
              <span className="gradient-text">real workflows.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              A focused selection spanning enterprise portals, AI-powered
              tooling, and developer products.
            </p>
          </div>

          <div className="hidden border-l border-[var(--glass-border)] pl-7 lg:block">
            <p className="font-mono text-4xl font-semibold tracking-[-0.04em] gradient-text">
              {String(selectedProjects.length).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Selected builds across enterprise systems, AI products, and open-source tools.
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-semibold text-foreground transition-colors hover:text-[var(--neon)]"
            >
              Browse all {PROJECTS.length}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 lg:hidden"
          initial={{ y: 16 }}
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
