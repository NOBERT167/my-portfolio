"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { Footer } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projects";
import { PROJECTS } from "@/constants";

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
        className="relative min-h-dvh px-5 pb-24 pt-32 sm:px-8 sm:pt-36"
      >
        <div className="hero-grid opacity-50" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/"
              className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-xl pr-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Back to home
            </Link>

            <div className="grid gap-6 border-b border-[var(--glass-border)] pb-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="eyebrow">Project archive</p>
                <h1 className="mt-3 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl md:text-7xl">
                  Work across products, platforms, and open source.
                </h1>
              </div>
              <p className="max-w-md text-base leading-7 text-muted-foreground md:col-span-4 md:justify-self-end">
                Explore {PROJECTS.length} projects—from production enterprise
                systems to focused experiments and reusable developer tools.
              </p>
            </div>
          </motion.header>

          <motion.section
            aria-label="Project filters"
            className="surface-card sticky top-24 z-30 my-8 rounded-2xl p-3 sm:p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="filter-scroll flex min-w-0 items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                <SlidersHorizontal
                  size={17}
                  className="mr-1 shrink-0 text-muted-foreground"
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
                      className={`min-h-11 shrink-0 rounded-xl px-4 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-[var(--neon)] text-[var(--neon-foreground)]"
                          : "text-muted-foreground hover:bg-[var(--surface-raised)] hover:text-foreground"
                      }`}
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
                  className="h-12 w-full rounded-xl border border-[var(--glass-border)] bg-[var(--surface-raised)] pl-11 pr-11 text-base text-foreground placeholder:text-muted-foreground focus:border-[var(--neon)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-muted)]"
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
                className="min-h-11 rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Reset filters
              </button>
            ) : null}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isBento={false}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="surface-card flex min-h-72 flex-col items-center justify-center rounded-[1.75rem] px-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="status"
            >
              <p className="text-xl font-semibold">No matching projects</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                Try a broader search or reset the active category.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 min-h-11 rounded-xl bg-[var(--neon)] px-4 text-sm font-semibold text-[var(--neon-foreground)]"
              >
                Show all projects
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
