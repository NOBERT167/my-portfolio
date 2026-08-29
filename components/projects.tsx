"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CodeXml,
  ExternalLink,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import type { Project } from "@/constants";
import { cn } from "@/lib/utils";

const SHOWCASE_TITLES = [
  "Judiciary of Kenya Supplier Portal",
  "DevPulse",
  "AI-Powered OData MVC Code Generator",
  "React Spotlight Search",
  "React Confirm Dialog",
  "React 3D Icons",
] as const;

const SHOWCASE_SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

const CONTAINED_IMAGE_PATHS = new Set([
  "/projects/ppra-recruitment.png",
  "/projects/shop-yangu.png",
]);

function getProjectType(project: Project) {
  if (project.tech.includes("NPM")) return "Open-source package";
  if (project.tech.includes("ASP.NET Core")) return "Enterprise platform";
  if (project.tech.includes("Next.js")) return "Next.js product";
  return "Product build";
}

function ProjectActions({ project }: { project: Project }) {
  const isNpmPackage = project.tech.includes("NPM");

  return (
    <div className="flex min-h-11 flex-wrap items-center gap-2">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-white active:scale-[0.98]"
          aria-label={
            isNpmPackage
              ? "View " + project.title + " on npm"
              : "Visit " + project.title + " live site"
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
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] px-4 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] active:scale-[0.98]"
          aria-label={"Read " + project.title + " documentation"}
        >
          Docs
          <BookOpen size={15} aria-hidden="true" />
        </a>
      ) : null}

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] px-4 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
          aria-label={"View " + project.title + " source code on GitHub"}
        >
          <CodeXml size={15} aria-hidden="true" />
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
  const mediaHref = project.live || project.github;
  const shouldContainImage = Boolean(
    project.image && CONTAINED_IMAGE_PATHS.has(project.image),
  );

  return (
    <motion.article
      layout="position"
      data-collection={variant}
      className={cn(
        "project-card surface-card group isolate flex min-w-0 flex-col overflow-hidden rounded-2xl",
        variant === "showcase" && SHOWCASE_SPANS[index % SHOWCASE_SPANS.length],
      )}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: Math.min(index * 0.045, 0.18),
        duration: 0.46,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.35 },
      }}
    >
      <div className="project-media relative aspect-[16/9] overflow-hidden border-b border-[var(--glass-border)] bg-[var(--media-background)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={"Preview of " + project.title}
            fill
            sizes={
              variant === "archive"
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                : "(max-width: 1024px) 100vw, 58vw"
            }
            className={cn(
              "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              shouldContainImage
                ? "object-contain"
                : "object-cover group-hover:scale-[1.02]",
            )}
          />
        ) : (
          <div className="project-fallback absolute inset-0 flex items-end p-6">
            <span className="font-mono text-5xl font-semibold text-foreground/15">
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
            className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--neon)]"
            aria-label={
              "Open " +
              project.title +
              (project.live ? " project" : " source code")
            }
          >
            <span className="sr-only">Open {project.title}</span>
          </a>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase text-[var(--neon)]">
          {getProjectType(project)}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-[1.18] sm:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--glass-border)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
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

        <div className="mt-auto pt-6">
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
      className="px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2
            id="projects-heading"
            className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Products built for{" "}
            <span className="text-[var(--neon)]">real work.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Enterprise platforms, AI-assisted tooling, and focused open-source
            products, each grounded in a real workflow.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold transition-colors hover:text-[var(--neon)]"
          >
            Browse all {PROJECTS.length} projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] px-5 text-sm font-semibold transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] lg:hidden"
        >
          Browse project archive
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
