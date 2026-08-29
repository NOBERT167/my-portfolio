import {
  ArrowUpRight,
  BriefcaseBusiness,
  Gauge,
  Package,
} from "lucide-react";
import { SITE } from "@/constants";

const PROOF_POINTS = [
  {
    icon: BriefcaseBusiness,
    label: "Production delivery",
    value: "Enterprise systems",
    description:
      "Procurement and self-service platforms shaped around real operational workflows.",
  },
  {
    icon: Package,
    label: "Open-source craft",
    value: "3 React packages",
    description:
      "Focused npm packages for reusable interface and interaction patterns.",
  },
  {
    icon: Gauge,
    label: "Measured efficiency",
    value: "~85% less scaffolding",
    description:
      "AI-assisted OData generation that reduces repetitive MVC development work.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section-band px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,1.05fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2
            id="testimonials-heading"
            className="max-w-xl text-4xl font-semibold leading-[1.06] sm:text-5xl"
          >
            Evidence over{" "}
            <span className="text-[var(--neon)]">empty promises.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            The strongest proof is shipped software, measurable improvements,
            and tools other developers can use.
          </p>
          <a
            href={"mailto:" + SITE.email + "?subject=Professional%20reference%20request"}
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[var(--neon)] transition-colors hover:text-foreground"
          >
            Request a professional reference
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="mt-3 max-w-md text-xs leading-5 text-muted-foreground">
            Client feedback remains private until publication is explicitly
            approved.
          </p>
        </div>

        <div className="divide-y divide-[var(--glass-border)] border-y border-[var(--glass-border)]">
          {PROOF_POINTS.map((point) => (
            <article
              key={point.label}
              className="grid gap-4 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
            >
              <span className="grid size-11 place-items-center rounded-lg bg-[var(--neon-muted)] text-[var(--neon)]">
                <point.icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  {point.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {point.value}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
