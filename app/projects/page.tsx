"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, X } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/contact";

const ALL_TECHS = Array.from(new Set(PROJECTS.flatMap((p) => p.tech))).sort();

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesTech = !activeTech || p.tech.includes(activeTech);
      return matchesSearch && matchesTech;
    });
  }, [search, activeTech]);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen pt-28 pb-24 px-6">
        {/* Background orbs */}
        <div className="gradient-orb w-[500px] h-[500px] -top-32 -right-32 bg-purple-600/10" />
        <div
          className="gradient-orb w-[400px] h-[400px] bottom-1/4 -left-32 bg-indigo-500/10"
          style={{ animationDelay: "8s" }}
        />

        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back home
            </Link>

            <p className="text-xs tracking-[0.3em] uppercase text-[var(--neon)] mb-3">
              All work
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground max-w-lg mb-10">
              Everything I&apos;ve built — from open-source npm packages and
              full-stack apps to APIs and UI experiments.
            </p>
          </motion.div>

          {/* Search & filters */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-card text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon)]/30 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Tech filter pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTech(null)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-300 ${
                  !activeTech
                    ? "bg-[var(--neon)] text-white border-[var(--neon)]"
                    : "glass-card border-[var(--glass-border)] text-muted-foreground hover:border-[var(--neon)]/30"
                }`}
              >
                All
              </button>
              {ALL_TECHS.map((tech) => (
                <button
                  key={tech}
                  onClick={() =>
                    setActiveTech(activeTech === tech ? null : tech)
                  }
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-300 ${
                    activeTech === tech
                      ? "bg-[var(--neon)] text-white border-[var(--neon)]"
                      : "glass-card border-[var(--glass-border)] text-muted-foreground hover:border-[var(--neon)]/30"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-xs text-muted-foreground mb-6">
            Showing {filtered.length} of {PROJECTS.length} projects
            {activeTech && (
              <>
                {" "}
                filtered by{" "}
                <span className="text-[var(--neon)]">{activeTech}</span>
              </>
            )}
          </p>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isBento={false}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-lg font-medium mb-2">No projects found</p>
              <p className="text-sm text-muted-foreground">
                Try a different search term or filter.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
