"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const HeroThreeScene = dynamic(
  () =>
    import("./hero-three-scene").then((module) => module.HeroThreeScene),
  { ssr: false },
);

export function OrbitingSkills() {
  return (
    <div
      className="three-hero-shell relative mx-auto aspect-square w-full max-w-[31rem] overflow-hidden"
      aria-hidden="true"
    >
      <div className="three-scene-fallback absolute inset-0" />
      <HeroThreeScene />

      <div className="three-scene-label">
        <span className="three-scene-status" />
        Live product system
      </div>
      <div className="three-scene-index">THREE / 01</div>

      <div className="three-identity-card">
        <Image
          src="/Nobert.png"
          alt=""
          width={52}
          height={52}
          sizes="52px"
          className="size-[3.25rem] rounded-xl object-cover object-top"
        />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c4b5fd]">
            Design × engineering
          </p>
          <p className="mt-1 text-sm font-medium text-white">
            Complexity, made clear.
          </p>
        </div>
      </div>

      <div className="three-signal-line" />
    </div>
  );
}
