"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  {
    src: "/images/projects/custom-white-kitchen-cabinetry.jpg",
    alt: "Custom white kitchen cabinetry — Master Cabinets",
  },
] as const;

/** One clamp and one ratio, so all three headline lines scale together. */
const HEADLINE_LINE =
  "font-clash text-[clamp(34px,5.12vw,73.66px)] font-medium leading-[1.06] tracking-[-0.02em] text-white";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's 'lg' breakpoint is 1024px
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  return (
    <section
      className="relative w-full overflow-visible bg-[#3F2F22]" // Changed to overflow-visible
    >
      {isMobile ? (
        // Mobile Embla Carousel
        <div className="embla absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="embla__container h-full">
            {HERO_IMAGES.map((img, idx) => (
              <div className="embla__slide relative h-full w-full flex-[0_0_100%]" key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover opacity-40"
                  sizes="100vw"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop single image
        <Image
          src={HERO_IMAGES[0].src}
          alt={HERO_IMAGES[0].alt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
          aria-hidden="true"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3F2F22]/60" aria-hidden="true" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4 pb-10 pt-[104px] sm:px-8 sm:pb-12 sm:pt-[120px] lg:flex-row lg:items-center lg:gap-12 lg:pb-8"
      >
        {/* ── Left column: Copy ── */}
        <div className="flex w-full min-w-0 max-w-[863px] flex-1 flex-col gap-5 sm:gap-6">
          {/* H1 Display Headline Stack — Figma node 17:1787 */}
          <h1 className="flex flex-col" aria-label="Remodeling, Cabinetry, and Everything Between">
            <span className={HEADLINE_LINE}>Remodeling,</span>
            <span className={HEADLINE_LINE}>Cabinetry, and</span>
            <em className={`${HEADLINE_LINE} font-serif italic`}>
              Everything Between
            </em>
          </h1>

          {/* Subtext — Figma node 17:1802 */}
          <p className="max-w-[512px] font-sans text-[16px] font-normal leading-[1.62] text-[#E5E7EB] sm:text-[18px]">
            Kitchens, closets, bathrooms, flooring, painting, electrical, outdoor
            living. Our licensed team handles your entire remodel, from the interior
            of the house to the outside.
          </p>

          {/* Trust Badges Row — Figma node 48:5423 */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
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
                <span className="whitespace-nowrap font-clash text-[13px] font-medium text-white sm:text-[14.4px]">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: Glass Quote Form ── */}
        <div className="w-full min-w-0 max-w-[437px] lg:shrink-0">
          <QuoteForm variant="glass" showTitle={false} />
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="relative z-10 h-4 sm:h-8" aria-hidden="true" />
    </section>
  );
}
