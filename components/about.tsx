import { Boxes, Code2, Palette } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Code2,
    title: "Engineering clarity",
    description:
      "Typed, maintainable systems with decisions that stay legible as products grow.",
  },
  {
    icon: Palette,
    title: "Product judgment",
    description:
      "Interfaces shaped around the work people need to complete, not decoration.",
  },
  {
    icon: Boxes,
    title: "End-to-end ownership",
    description:
      "Frontend, services, data, and delivery considered as one connected system.",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-band border-y border-[var(--glass-border)] px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:gap-20">
        <div>
          <h2
            id="about-heading"
            className="max-w-xl text-4xl font-semibold leading-[1.06] sm:text-5xl"
          >
            I turn operational complexity into{" "}
            <span className="text-[var(--neon)]">usable software.</span>
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              I&apos;m a full-stack developer and UI/UX designer based in
              Nairobi, Kenya. I build modern web applications with React,
              Next.js, TypeScript, Node.js, and ASP.NET Core.
            </p>
            <p>
              My work spans enterprise platforms and open-source tools. I care
              about reliable architecture, clear interfaces, and making complex
              workflows easier to understand.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[var(--glass-border)] border-y border-[var(--glass-border)]">
            {PRINCIPLES.map((principle) => (
              <article
                key={principle.title}
                className="grid gap-3 py-6 sm:grid-cols-[2.75rem_10rem_minmax(0,1fr)] sm:items-start sm:gap-5"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-[var(--neon-muted)] text-[var(--neon)]">
                  <principle.icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold leading-6">
                  {principle.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
