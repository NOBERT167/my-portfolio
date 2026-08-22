"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { NAV_LINKS, SITE } from "@/constants";
import { useDarkMode } from "@/hooks/use-darkmode";

export function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (
        !menuPanelRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const handleSectionNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);

    const targetId = href.split("#")[1];
    if (pathname !== "/" || !targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${targetId}`);
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <nav
          aria-label="Primary navigation"
          className="glass-card top-navbar"
        >
          <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-xl px-2 focus-visible:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark grid size-9 place-items-center rounded-xl font-mono text-sm font-bold text-[var(--neon-foreground)]">
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
                onClick={(event) => handleSectionNavigation(event, link.href)}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-[var(--surface-raised)] hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              ref={menuButtonRef}
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
              onClick={(event) =>
                handleSectionNavigation(event, "/#contact")
              }
              className="gradient-button hidden min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-[var(--neon-foreground)] hover:brightness-105 active:scale-[0.98] sm:flex"
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
          </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              ref={menuPanelRef}
              id="mobile-navigation"
              className="mx-auto max-w-6xl overflow-hidden border-t border-[var(--glass-border)] bg-card/95 px-5 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-8 lg:hidden"
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
                  onClick={(event) =>
                    handleSectionNavigation(event, link.href)
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="gradient-button mt-1 flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold text-[var(--neon-foreground)]"
                onClick={(event) =>
                  handleSectionNavigation(event, "/#contact")
                }
              >
                Start a conversation
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
