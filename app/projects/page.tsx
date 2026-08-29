"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { Footer } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projects";
import { PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "All work", matches: () => true },
  {
    id: "enterprise",
    label: "Enterprise",
    matches: (tech: string[]) => tech.includes("ASP.NET Core"),
  },
  {
    id: "react",
    label: "React",
    matches: (tech: string[]) => tech.includes("React"),
  },
  {
    id: "nextjs",
    label: "Next.js",
    matches: (tech: string[]) => tech.includes("Next.js"),
  },
  {
    id: "open-source",
    label: "Open source",
    matches: (tech: string[]) => tech.includes("NPM"),
  },
] as const;

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const selectedFilter =
    FILTERS.find((filter) => filter.id === activeFilter) ?? FILTERS[0];

  const filtered = PROJECTS.filter((project) => {
    const searchableText = [
      project.title,
      project.description,
      ...project.tech,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!deferredSearch || searchableText.includes(deferredSearch)) &&
      selectedFilter.matches(project.tech)
    );
  });

  const clearFilters = () => {
    setSearch("");
    setActiveFilter("all");
  };

  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main
        id="main-content"
        className="min-h-dvh px-5 pb-24 pt-28 sm:px-8 sm:pt-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.header
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/"
              className="mb-9 inline-flex min-h-11 items-center gap-2 rounded-lg pr-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Back to home
            </Link>

            <div className="max-w-4xl border-b border-[var(--glass-border)] pb-10">
              <p className="eyebrow">Project archive</p>
              <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.04] sm:text-5xl md:text-6xl">
                Work across products, platforms, and{" "}
                <span className="text-[var(--neon)]">open source.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                Explore {PROJECTS.length} projects, from production enterprise
                systems to focused experiments and reusable developer tools.
              </p>
            </div>
          </motion.header>

          <motion.section
            aria-label="Project filters"
            className="surface-card my-8 rounded-2xl p-3 sm:p-4"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="filter-scroll flex min-w-0 items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
                <SlidersHorizontal
                  size={17}
                  className="mr-2 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      type="button"
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "min-h-11 shrink-0 rounded-lg px-4 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[var(--neon)] text-white"
                          : "text-muted-foreground hover:bg-[var(--surface-hover)] hover:text-foreground",
                      )}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative min-w-0 lg:w-[340px] lg:shrink-0">
                <label htmlFor="project-search" className="sr-only">
                  Search projects by name, description, or technology
                </label>
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  id="project-search"
                  type="search"
                  autoComplete="off"
                  placeholder="Search projects or technology"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="h-12 w-full rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] pl-11 pr-11 text-base text-foreground placeholder:text-muted-foreground focus:border-[var(--neon)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-muted)]"
                />
                {search ? (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground"
                    aria-label="Clear project search"
                  >
                    <X size={17} aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>
          </motion.section>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "project" : "projects"}
            </p>
            {search || activeFilter !== "all" ? (
              <button
                type="button"
                onClick={clearFilters}
                className="min-h-11 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Reset filters
              </button>
            ) : null}
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.length > 0 ? (
              <motion.div
                key="project-grid"
                layout
                className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      variant="archive"
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="empty-projects"
                className="surface-card flex min-h-72 flex-col items-center justify-center rounded-2xl px-6 text-center"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="status"
              >
                <p className="text-xl font-semibold">No matching projects</p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                  Try a broader search or reset the active category.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="gradient-button mt-6 min-h-11 rounded-lg px-4 text-sm font-semibold text-white"
                >
                  Show all projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
