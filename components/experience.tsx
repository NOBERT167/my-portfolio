import { ExternalLink, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/constants";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="experience-heading"
            className="text-4xl font-semibold leading-[1.06] sm:text-5xl"
          >
            Experience
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
            Product engineering across enterprise delivery, public-service
            platforms, and community organizations.
          </p>
        </div>

        <div className="border-t border-[var(--glass-border)]">
          {EXPERIENCES.map((experience) => {
            const primaryHighlights = experience.highlights.slice(0, 3);
            const additionalHighlights = experience.highlights.slice(3);

            return (
              <article
                key={experience.company + experience.period}
                className="border-b border-[var(--glass-border)] py-8 first:pt-0"
              >
                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--neon)]">
                      {experience.company}
                    </p>
                  </div>
                  <p className="font-mono text-xs leading-6 text-muted-foreground">
                    {experience.period}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    {experience.location}
                  </span>
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--neon)]"
                    >
                      Website
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3">
                  {primaryHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span
                        className="mt-[0.68rem] h-px w-3 bg-[var(--neon)]"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {additionalHighlights.length > 0 ? (
                  <details className="group mt-5 text-sm">
                    <summary className="cursor-pointer font-semibold text-foreground transition-colors hover:text-[var(--neon)]">
                      More responsibilities
                    </summary>
                    <ul className="mt-4 space-y-3">
                      {additionalHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span
                            className="mt-[0.68rem] h-px w-3 bg-[var(--neon)]"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
