"use client";

import dynamic from "next/dynamic";

const HeroThreeScene = dynamic(
  () =>
    import("./hero-three-scene").then((module) => module.HeroThreeScene),
  { ssr: false },
);

const SYSTEM_LAYERS = [
  { index: "01", label: "Experience", tech: "Product + UX" },
  { index: "02", label: "Frontend", tech: "React + Next.js" },
  { index: "03", label: "Services", tech: "Node + ASP.NET" },
  { index: "04", label: "Data", tech: "APIs + SQL" },
] as const;

export function ProductSystem() {
  return (
    <figure className="three-hero-shell relative mx-auto aspect-square w-full max-w-[31rem] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="three-scene-fallback absolute inset-0" />
        <HeroThreeScene />

        <div className="three-scene-label">
          <span className="three-scene-status" />
          End-to-end product system
        </div>
        <div className="three-scene-index">SYSTEM / 04</div>

        <ol className="three-layer-list">
          {SYSTEM_LAYERS.map((layer) => (
            <li key={layer.index} className="three-layer-label">
              <span className="three-layer-index">{layer.index}</span>
              <span>
                <strong>{layer.label}</strong>
                <small>{layer.tech}</small>
              </span>
            </li>
          ))}
        </ol>

        <div className="three-system-summary">
          <div>
            <p>Delivery pipeline</p>
            <strong>Architecture to production</strong>
          </div>
          <div className="three-system-pipeline">
            <span>Design</span>
            <i />
            <span>Build</span>
            <i />
            <span>Ship</span>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        A four-layer product architecture showing data and APIs connected to
        application services, a React and Next.js frontend, and the final
        product experience. Animated signals move through the system from data
        to delivery.
      </figcaption>
    </figure>
  );
}
