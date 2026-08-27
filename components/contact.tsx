"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative px-5 py-24 sm:px-8 md:py-32"
    >
      <div
        className="gradient-orb bottom-0 right-0 h-[400px] w-[400px] bg-[var(--neon-muted)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Get in touch</p>
          <h2
            id="contact-heading"
            className="mb-4 mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl"
          >
            Let&apos;s work{" "}
            <span className="gradient-text">
              together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-12">
            Have a project in mind or just want to connect? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* CTA card */}
          <motion.a
            href={`mailto:${SITE.email}`}
            className="md:col-span-7 glass-card noise spotlight-card rounded-3xl p-8 md:p-10 group block hover:border-[var(--neon)]/20 transition-all duration-500"
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
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
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[var(--neon-muted)]">
                  <Mail size={20} className="text-[var(--neon)]" />
                </div>
                <span className="text-sm text-muted-foreground">Email me</span>
              </div>
              <p className="[overflow-wrap:anywhere] text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--neon)] group-focus-visible:text-[var(--neon)] sm:text-2xl md:text-3xl">
                {SITE.email}
                <ArrowUpRight
                  size={24}
                  className="inline ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                />
              </p>
            </div>
          </motion.a>

          {/* Location card */}
          <motion.div
            className="md:col-span-5 glass-card noise spotlight-card rounded-3xl p-8 flex flex-col justify-between"
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[var(--neon-muted)]">
                  <MapPin size={20} className="text-[var(--neon)]" />
                </div>
                <span className="text-sm text-muted-foreground">Location</span>
              </div>
              <p className="text-xl font-bold">{SITE.location}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Open to remote opportunities
              </p>
            </div>
          </motion.div>

          {/* Social links row */}
          {[
            { icon: GithubIcon, label: "GitHub", href: SITE.socials.github },
            {
              icon: LinkedinIcon,
              label: "LinkedIn",
              href: SITE.socials.linkedin,
            },
            { icon: TwitterIcon, label: "Twitter", href: SITE.socials.twitter },
            {
              icon: InstagramIcon,
              label: "Instagram",
              href: SITE.socials.instagram,
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 glass-card noise spotlight-card rounded-2xl p-5 flex items-center gap-3 group hover:border-[var(--neon)]/20 transition-all duration-500"
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
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
              <div className="relative z-10 flex w-full items-center gap-3">
                <span className="text-muted-foreground transition-colors group-hover:text-[var(--neon)] group-focus-visible:text-[var(--neon)]">
                  <social.icon size={18} />
                </span>
                <span className="text-sm font-medium">{social.label}</span>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-[var(--neon)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { icon: GithubIcon, label: "GitHub", href: SITE.socials.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: SITE.socials.linkedin },
    { icon: TwitterIcon, label: "Twitter", href: SITE.socials.twitter },
    { icon: InstagramIcon, label: "Instagram", href: SITE.socials.instagram },
  ];

  return (
    <footer className="border-t border-[var(--glass-border)] py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors duration-300 hover:bg-[var(--surface-raised)] hover:text-[var(--neon)]"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${SITE.email}`}
          className="text-xs text-muted-foreground/60 hover:text-[var(--neon)] transition-colors duration-300"
        >
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}
