import { ArrowDownRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      // className="flex min-h-[calc(100dvh-3.5rem)] items-center border-b border-[var(--glass-border)] px-5 pb-14 pt-24 sm:px-8 sm:pb-16"
      className="flex min-h-[100vh] items-center border-b border-[var(--glass-border)] px-5 pb-14 pt-24 sm:px-8 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-stage max-w-5xl">
          <h1
            id="hero-heading"
            className="text-[2.85rem] font-semibold leading-[0.98] sm:text-6xl lg:text-[5.25rem]"
          >
            <span className="hero-line">
              <span>Nobert Langat.</span>
            </span>
            <span className="hero-line text-[var(--neon)]">
              <span>Clear digital products.</span>
            </span>
          </h1>

          <p className="hero-support mt-7 max-w-[52rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Full-stack engineer and UI/UX designer building complex web
            platforms with React, Next.js, Node.js, and ASP.NET Core.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="hero-work-action gradient-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold text-white active:scale-[0.98]"
            >
              Explore work
              <ArrowDownRight
                className="hero-action-icon"
                size={17}
                aria-hidden="true"
              />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="hero-resume-action motion-pressable inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--surface)] px-5 text-sm font-semibold hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] active:scale-[0.98]"
            >
              <Download
                className="hero-action-icon"
                size={17}
                aria-hidden="true"
              />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
