"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/constants";
import { useDarkMode } from "@/hooks/use-darkmode";

export function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <nav
          aria-label="Primary navigation"
          className="glass-card mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:px-4"
        >
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-xl px-2 focus-visible:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[var(--neon)] font-mono text-sm font-bold text-[var(--accent-foreground)]">
              NL
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {SITE.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-[var(--surface-raised)] hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggle}
              className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors duration-200 hover:bg-[var(--surface-raised)] hover:text-foreground"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
            </button>

            <Link
              href="/#contact"
              className="hidden min-h-11 items-center gap-2 rounded-xl bg-[var(--neon)] px-4 text-sm font-semibold text-[var(--accent-foreground)] transition-[filter,transform] duration-200 hover:brightness-95 active:scale-[0.98] sm:flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors duration-200 hover:bg-[var(--surface-raised)] hover:text-foreground lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-card p-2 shadow-[0_18px_50px_rgba(0,0,0,0.2)] lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--surface-raised)] hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-1 flex min-h-12 items-center justify-between rounded-xl bg-[var(--neon)] px-4 text-sm font-semibold text-[var(--accent-foreground)]"
                onClick={() => setMenuOpen(false)}
              >
                Start a conversation
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
