import { SKILLS } from "@/constants";
import { cn } from "@/lib/utils";

const CATEGORY_LABELS: Record<string, string> = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  devops: "DevOps and cloud",
  tools: "Tools",
  testing: "Testing",
};

const CATEGORY_ORDER = [
  "language",
  "frontend",
  "backend",
  "database",
  "devops",
  "tools",
  "testing",
] as const;

export function Skills() {
  const grouped = SKILLS.reduce<Record<string, typeof SKILLS>>((groups, skill) => {
    groups[skill.category] ??= [];
    groups[skill.category].push(skill);
    return groups;
  }, {});

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-band border-y border-[var(--glass-border)] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-[var(--glass-border)] pb-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1.2fr)] lg:items-end">
          <h2
            id="skills-heading"
            className="text-4xl font-semibold leading-[1.06] sm:text-5xl"
          >
            A practical stack for{" "}
            <span className="text-[var(--neon)]">shipping products.</span>
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
            Strongest across TypeScript, React, ASP.NET Core, API design, and
            the delivery systems that keep production work dependable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ORDER.map((category, index) => {
            const categorySkills = grouped[category];
            if (!categorySkills?.length) return null;

            return (
              <article
                key={category}
                className={cn(
                  "border-b border-[var(--glass-border)] py-7 md:pr-7 lg:pr-8",
                  index % 2 === 0
                    ? "md:border-l-0 md:pl-0"
                    : "md:border-l md:pl-7",
                  index % 3 === 0
                    ? "lg:border-l-0 lg:pl-0"
                    : "lg:border-l lg:pl-8",
                )}
              >
                <h3 className="text-sm font-semibold">
                  {CATEGORY_LABELS[category]}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-[var(--glass-border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
