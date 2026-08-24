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
              className="font-serif text-[clamp(36px,5.12vw,73.66px)] leading-[1.2] font-normal italic tracking-[-1.47px] text-white"
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

      {/* Bottom spacing */}
      <div className="relative z-10 h-8" aria-hidden="true" />
    </section>
  );
}
