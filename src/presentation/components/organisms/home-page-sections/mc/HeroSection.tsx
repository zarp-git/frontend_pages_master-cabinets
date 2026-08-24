"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import QuoteForm from "@/presentation/components/molecules/mc/QuoteForm";

/**
 * HeroSection - Figma node 17:1784
 * 2-column split: left copy/trust badges, right glassmorphism quote card.
 * Background: #403023 with the hero photo behind a single 42% scrim.
 * Mobile: background auto-rotates through 3 luxury kitchen photos (4s interval).
 */

const HERO_IMAGES = [
  {
    src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
    alt: "Luxury kitchen remodel - Master Cabinets",
  },
  {
    src: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
    alt: "Full kitchen remodel - Master Cabinets",
  },
  {
    src: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
    alt: "Modern custom kitchen cabinetry - Master Cabinets",
  },
  {
    src: "/images/projects/custom-white-kitchen-cabinetry.jpg",
    alt: "Custom white kitchen cabinetry - Master Cabinets",
  },
] as const;

const TRUST_BADGES = ["Licensed", "Insured", "Locally trusted"] as const;

/** The espresso check bubble that precedes each trust badge. */
function TrustCheck() {
  return (
    <span
      className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#403023]"
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
        className="h-2.5 w-2.5"
      >
        <polyline points="2 6 5 9 10 3" />
      </svg>
    </span>
  );
}

/** One clamp and one ratio, so all three headline lines scale together. */
const HEADLINE_LINE =
  "font-clash text-[clamp(34px,5.12vw,73.66px)] font-medium leading-[1.06] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(24,16,10,0.55)]";

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
                  className="object-cover"
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
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      )}

      {/* Scrim - one layer at 42% so the photo stays readable behind the copy */}
      <div className="absolute inset-0 bg-[#403023]/42" aria-hidden="true" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4 pb-10 pt-[104px] sm:px-8 sm:pb-12 sm:pt-[120px] lg:flex-row lg:items-center lg:gap-12 lg:pb-8"
      >
        {/* ── Left column: Copy ── */}
        <div className="flex w-full min-w-0 max-w-[863px] flex-1 flex-col gap-5 sm:gap-6">
          {/* H1 Display Headline Stack - Figma node 17:1787 */}
          <h1 className="flex flex-col" aria-label="Remodeling, Cabinetry, and Everything Between">
            <span className={HEADLINE_LINE}>Remodeling,</span>
            <span className={HEADLINE_LINE}>Cabinetry, and</span>
            <em className={`${HEADLINE_LINE} font-serif italic`}>
              Everything Between
            </em>
          </h1>

          {/* Subtext - Figma node 17:1802 */}
          <p className="max-w-[512px] font-sans text-[16px] font-normal leading-[1.62] text-white sm:text-[18px] [text-shadow:0_2px_18px_rgba(24,16,10,0.55)]">
            Kitchens, closets, bathrooms, flooring, painting, electrical, outdoor
            living. Our licensed team handles your entire remodel, from the interior
            of the house to the outside.
          </p>

          {/* Trust badges - Figma node 48:5423.
              Phones get a single-line marquee (the JB of SWFL pattern) so the
              three claims never wrap into a second row; from sm up they sit in
              a normal wrapped row. The list is duplicated because the
              marquee-left keyframe travels -50%. */}
          <div className="overflow-hidden sm:hidden">
            <ul className="flex w-max animate-marquee-left gap-5 [animation-duration:16s] motion-reduce:animate-none">
              {[...TRUST_BADGES, ...TRUST_BADGES].map((badge, i) => (
                <li
                  key={`${badge}-${i}`}
                  className="flex shrink-0 items-center gap-2"
                  aria-hidden={i >= TRUST_BADGES.length}
                >
                  <TrustCheck />
                  <span className="whitespace-nowrap font-clash text-[13px] font-medium text-white [text-shadow:0_2px_18px_rgba(24,16,10,0.55)]">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden flex-wrap items-center gap-x-5 gap-y-3 sm:flex">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <TrustCheck />
                <span className="whitespace-nowrap font-clash text-[14.4px] font-medium text-white [text-shadow:0_2px_18px_rgba(24,16,10,0.55)]">
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
