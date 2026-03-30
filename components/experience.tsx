"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div
        className="gradient-orb w-75 h-75 top-0 right-0 bg-purple-500/10"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-neon mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Work{" "}
            <span className="bg-linear-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4.75 md:left-5.75 top-0 bottom-0 w-px bg-accent" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-4 top-2 w-3.75 h-3.75 rounded-full border-2 border-neon bg-background z-10" />

                <div
                  className="glass-card noise spotlight-card rounded-2xl p-6 md:p-8"
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
                  <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.1 + 0.15, duration: 0.4 }}
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs tracking-wider text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.1 + 0.25, duration: 0.4 }}
                    >
                      <span className="flex items-center gap-1.5 text-sm text-neon">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-neon transition-colors"
                        >
                          <ExternalLink size={14} />
                          Website
                        </a>
                      )}
                    </motion.div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            delay: idx * 0.1 + 0.35 + i * 0.07,
                            duration: 0.35,
                          }}
                        >
                          <span className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-(--neon)/50" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
