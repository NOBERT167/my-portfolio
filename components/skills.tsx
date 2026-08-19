"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

const categoryMap: Record<string, { label: string; color: string }> = {
  language: { label: "Languages", color: "#a855f7" },
  frontend: { label: "Frontend", color: "#6366f1" },
  backend: { label: "Backend", color: "#ec4899" },
  tools: { label: "Tools", color: "#f59e0b" },
  testing: { label: "Testing", color: "#10b981" },
  cloud: { label: "Cloud", color: "#3b82f6" },
  database: { label: "Databases", color: "#14b8a6" },
  devops: { label: "DevOps", color: "#f97316" },
};

export function Skills() {
  const grouped = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <div
        className="gradient-orb left-0 top-0 h-[300px] w-[300px] bg-[var(--neon-muted)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--neon)] mb-3">
            Tech stack
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {Object.entries(grouped).map(([category, skills], groupIdx) => {
            // Bento pattern: alternate wide (2-col) and narrow (1-col)
            const spanPattern = [2, 1, 1, 2, 2, 1, 1, 2];
            const span = spanPattern[groupIdx % spanPattern.length];

            return (
              <motion.div
                key={category}
                className={`glass-card noise spotlight-card rounded-2xl p-6 ${
                  span === 2 ? "md:col-span-2" : "md:col-span-1"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
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
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: categoryMap[category]?.color }}
                    />
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      {categoryMap[category]?.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm rounded-xl border border-(--neon)/30 bg-(--neon-muted) text-foreground hover:bg-(--neon)/20 hover:border-(--neon)/60 hover:text-(--neon) hover:shadow-[0_0_12px_var(--neon-muted)] transition-all duration-300 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: groupIdx * 0.1 + i * 0.04,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
