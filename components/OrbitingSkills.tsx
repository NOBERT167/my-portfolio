"use client";

import dynamic from "next/dynamic";

const HeroThreeScene = dynamic(
  () =>
    import("./hero-three-scene").then((module) => module.HeroThreeScene),
  { ssr: false },
);

const SYSTEM_LAYERS = [
  { label: "Experience", tech: "Product + UX" },
  { label: "Frontend", tech: "React + Next.js" },
  { label: "Services", tech: "Node + ASP.NET" },
  { label: "Data", tech: "APIs + SQL" },
] as const;

export function ProductSystem() {
  return (
    <figure className="three-hero-shell relative mx-auto h-56 w-full max-w-[31rem] overflow-hidden rounded-2xl sm:h-72 lg:aspect-square lg:h-auto">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="three-scene-fallback absolute inset-0" />
        <HeroThreeScene />

        <div className="three-scene-label">Product delivery system</div>

        <ol className="three-layer-list">
          {SYSTEM_LAYERS.map((layer) => (
            <li key={layer.label} className="three-layer-label">
              <span>
                <strong>{layer.label}</strong>
                <small>{layer.tech}</small>
              </span>
            </li>
          ))}
        </ol>

        <div className="three-system-summary">
          <strong>Architecture to production</strong>
        </div>
      </div>

      <figcaption className="sr-only">
        A four-layer product architecture showing data, services, frontend, and
        the final product experience connected as one delivery system.
      </figcaption>
    </figure>
  );
}
