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
    window.history.pushState(null, "", "#" + targetId);
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
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--glass-border)] bg-background/90 backdrop-blur-xl">
        <nav aria-label="Primary navigation">
          <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
            <Link
              href="/"
              className="flex min-h-11 items-center gap-3 rounded-lg pr-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="brand-mark grid size-9 place-items-center rounded-lg font-mono text-sm font-bold text-white">
                NL
              </span>
              <span className="hidden text-sm font-semibold sm:block">
                {SITE.name}
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) =>
                    handleSectionNavigation(event, link.href)
                  }
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggle}
                className="grid size-11 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground"
                aria-label={"Switch to " + (isDark ? "light" : "dark") + " mode"}
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
                className="gradient-button hidden min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-white active:scale-[0.98] sm:flex"
              >
                Email me
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-11 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground lg:hidden"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
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
                className="border-t border-[var(--glass-border)] bg-background px-5 py-3 shadow-lg sm:px-8 lg:hidden"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mx-auto max-w-6xl">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex min-h-12 items-center rounded-lg px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-[var(--surface-hover)] hover:text-foreground"
                      onClick={(event) =>
                        handleSectionNavigation(event, link.href)
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/#contact"
                    className="gradient-button mt-1 flex min-h-12 items-center justify-between rounded-lg px-4 text-sm font-semibold text-white"
                    onClick={(event) =>
                      handleSectionNavigation(event, "/#contact")
                    }
                  >
                    Email me
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
