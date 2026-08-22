"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Boxes } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-[var(--neon)] mb-3"
            variants={fadeUp}
            custom={0}
          >
            About me
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
            variants={fadeUp}
            custom={1}
          >
            Crafting code with
            <br />
            <span className="gradient-text">
              intention & care
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Bio card — spans 2 cols */}
          <motion.div
            className="md:col-span-2 glass-card noise spotlight-card rounded-3xl p-8"
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
            <div className="relative z-10 space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  full-stack web developer and UI/UX designer
                </span>{" "}
                based in Nairobi, Kenya. I specialize in building modern,
                performant web applications using React, Next.js, TypeScript,
                Node.js, and ASP.NET Core.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I&apos;ve published{" "}
                <span className="text-foreground font-medium">
                  open-source npm packages
                </span>{" "}
                used by developers worldwide, and I love creating tools that
                make other developers&apos; lives easier. When I&apos;m not
                coding, I&apos;m exploring new design patterns and contributing
                to the open-source community.
              </p>
            </div>
          </motion.div>

          {/* Side cards */}
          <div className="flex flex-col gap-4 md:gap-5">
            {[
              {
                icon: Code2,
                label: "Clean Code",
                desc: "Typed, tested, maintainable",
              },
              {
                icon: Palette,
                label: "Design Eye",
                desc: "Pixel-perfect interfaces",
              },
              {
                icon: Boxes,
                label: "Full-Stack",
                desc: "Frontend to deployment",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card noise spotlight-card rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--neon)]/20 transition-colors duration-300"
                initial={{ x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
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
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-[var(--neon-muted)]">
                    <item.icon size={18} className="text-[var(--neon)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
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
