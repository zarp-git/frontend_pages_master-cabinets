"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import QuoteForm from "@/presentation/components/molecules/mc/QuoteForm";

/**
 * HeroSection — Figma node 17:1784
 * 2-column split: left copy/trust badges, right glassmorphism quote card.
 * Background: #3F2F22 with hero image fill + dark overlay.
 * Mobile: background auto-rotates through 3 luxury kitchen photos (4s interval).
 */

const HERO_IMAGES = [
  {
    src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
    alt: "Luxury kitchen remodel — Master Cabinets",
  },
  {
    src: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
    alt: "Full kitchen remodel — Master Cabinets",
  },
  {
    src: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
    alt: "Modern custom kitchen cabinetry — Master Cabinets",
  },
] as const;

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-rotate every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#3F2F22]"
    >
      {/* Hero background images — crossfade on mobile */}
      {HERO_IMAGES.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt=""
          fill
          priority={idx === 0}
          className={[
            "object-cover transition-opacity duration-1000",
            idx === activeIdx ? "opacity-40" : "opacity-0",
          ].join(" ")}
          sizes="100vw"
          aria-hidden="true"
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3F2F22]/60" aria-hidden="true" />

      {/* Dot indicators — mobile only */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 lg:hidden"
        aria-hidden="true"
      >
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={[
              "w-2 h-2 rounded-full transition-all duration-300",
              idx === activeIdx
                ? "bg-[#F7AF14] w-4"
                : "bg-white/50",
            ].join(" ")}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 pt-[120px] px-8 pb-8"
      >
        {/* ── Left column: Copy ── */}
        <div className="flex-1 flex flex-col gap-6 max-w-[863px]">
          {/* H1 Display Headline Stack — Figma node 17:1787 */}
          <h1 className="flex flex-col" aria-label="Remodeling, Cabinetry, and Everything Between">
            <span
              className="text-white tracking-[-1.47px] font-clash text-[clamp(36px,5.12vw,73.66px)] leading-[70px] font-medium"
            >
              Remodeling,
            </span>
            <span
              className="text-white tracking-[-1.47px] font-clash text-[clamp(36px,5.12vw,73.66px)] leading-[70px] font-medium"
            >
              Cabinetry, and
            </span>
            <em
              className="font-serif not-italic text-[clamp(36px,5.12vw,73.66px)] leading-[88.4px] font-normal italic tracking-[-1.47px] text-white"
            >
              Everything Between
            </em>
          </h1>

          {/* Subtext — Figma node 17:1802 */}
          <p
            className="max-w-[512px] font-sans text-[18px] leading-[29.2px] font-normal text-[#E5E7EB]"
          >
            Kitchens, closets, bathrooms, flooring, painting, electrical, outdoor
            living. Our licensed team handles your entire remodel, from the interior
            of the house to the outside.
          </p>

          {/* Trust Badges Row — Figma node 48:5423 */}
          <div
            className="flex flex-wrap items-center gap-5"
          >
            {["Licensed", "Insured", "Locally trusted"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                {/* Green check circle */}
                <span
                  className="flex items-center justify-center shrink-0 w-[19px] h-[19px] rounded-full bg-[#3F2F22]"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-2.5 h-2.5"
                  >
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </span>
                <span
                  className="text-white font-clash text-[14.4px] font-medium"
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: Glass Quote Form ── */}
        <div
          className="w-full lg:shrink-0 max-w-[437px]"
        >
          <QuoteForm variant="glass" showTitle={false} />
        </div>
      </div>

      {/* Bottom spacing so header spacer isn't needed */}
      <div className="relative z-10 h-8" aria-hidden="true" />
    </section>
  );
}
