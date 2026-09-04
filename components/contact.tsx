import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/constants";

const SOCIALS = [
  { label: "GitHub", href: SITE.socials.github },
  { label: "LinkedIn", href: SITE.socials.linkedin },
  { label: "Twitter", href: SITE.socials.twitter },
  { label: "Instagram", href: SITE.socials.instagram },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl border-t border-[var(--glass-border)] pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <h2
              id="contact-heading"
              className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl"
            >
              Have a complex product that needs a{" "}
              <span className="text-[var(--neon)]">clear way forward?</span>
            </h2>
            <a
              href={"mailto:" + SITE.email}
              className="mt-9 inline-flex max-w-full items-center gap-2 [overflow-wrap:anywhere] text-xl font-semibold transition-colors hover:text-[var(--neon)] sm:text-2xl"
            >
              {SITE.email}
              <ArrowUpRight className="shrink-0" size={22} aria-hidden="true" />
            </a>
          </div>

          <div className="border-l border-[var(--glass-border)] pl-6">
            <p className="inline-flex items-center gap-2 text-sm font-medium">
              <MapPin
                size={16}
                className="text-[var(--neon)]"
                aria-hidden="true"
              />
              {SITE.location}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Available for thoughtful product work and remote collaboration.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--glass-border)] pt-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--neon)]"
            >
              {social.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
        <p>Designed and built with ❤️ by Nobert.</p>
      </div>
    </footer>
  );
}
