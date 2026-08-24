"use client";

import React from "react";
import Image from "next/image";
import { VideoPlayer } from "@/presentation/components/molecules/common/VideoPlayer";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

// ---------------------------------------------------------------------------
// Team/work photos — replace with your own project or team photos
// ---------------------------------------------------------------------------
const TEAM_PHOTOS = [
  { src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg", alt: "[Describe project photo 1]" },
  { src: "/images/projects/custom-kitchen-cabinetry-remodel.jpg", alt: "[Describe project photo 2]" },
  { src: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg", alt: "[Describe project photo 3]" },
  { src: "/images/projects/custom-white-kitchen-cabinetry.jpg", alt: "[Describe project photo 4]" },
  { src: "/images/projects/modern-custom-kitchen-cabinetry.jpg", alt: "[Describe project photo 5]" },
  { src: "/images/projects/bathroom_remodel_finished_01.jpg", alt: "[Describe project photo 6]" },
  { src: "/images/projects/dark-wood-flooring-installation.jpg", alt: "[Describe project photo 7]" },
];

// ---------------------------------------------------------------------------
// Marquee sub-component — single row, all photos
// ---------------------------------------------------------------------------
function PhotoMarquee({ photos }: { photos: typeof TEAM_PHOTOS }) {
  // Duplicate once for seamless loop
  const duplicated = [...photos, ...photos];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex gap-4 sm:gap-5 w-max animate-marquee-left [animation-duration:50s]"
      >
        {duplicated.map((photo, idx) => (
          <div
            key={`${photo.src}-${idx}`}
            className="relative h-36 sm:h-44 md:h-56 rounded-xl overflow-hidden shrink-0 group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={400}
              sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
              className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export function OurWorkSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white overflow-hidden">
      {/* ── Top block: Text + Video side-by-side on desktop ── */}
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-14">
          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow label — short descriptor above the heading */}
            <span className="inline-block text-primary font-rubik font-semibold text-sm sm:text-base tracking-widest uppercase mb-3">
              [Eyebrow label — e.g. "Our Team at Work"]
            </span>
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-rubik font-semibold text-gray-900 leading-tight">
              {/* Section heading — trust/quality statement */}
              [Section heading — e.g. "Craftsmanship You Can Trust"]
            </h2>
            <p className="max-w-xl mx-auto lg:mx-0 mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-rubik">
              {/* Description — describe the team's work, dedication, and service area */}
              [Description — describe the team's dedication, precision, and the regions or types of projects they work on.]
            </p>
            <div className="mt-6">
              <CtaButton label="[CTA label — e.g. 'CALL US NOW']" />
            </div>
          </div>

          {/* Right — Video Player (4:5 portrait) — replace src with your own video */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 lg:w-[320px] xl:w-[360px] shrink-0">
            <VideoPlayer
              src="/videos/company-about-us.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full rounded-2xl shadow-lg aspect-4/5!"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom block: Single marquee row (full-bleed) with edge fades ── */}
      <div className="mt-10 sm:mt-12 md:mt-16">
        <PhotoMarquee photos={TEAM_PHOTOS} />
      </div>
    </section>
  );
}
