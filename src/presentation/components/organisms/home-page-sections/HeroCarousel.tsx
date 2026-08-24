"use client";

import Image from "next/image";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

export default function HeroCarousel() {
  return (
    <section
      className="relative w-full min-h-svh flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-0 sm:pb-16 md:pb-20 bg-[radial-gradient(277.91%_109.76%_at_63.33%_38.87%,#FFFDF7_0%,#E8D9C8_100%)]"
    >
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-0">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4 md:gap-6 relative z-30">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-amber-100 rounded-full shadow-sm">
            <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              25+ Years
            </span>
            <span className="text-gray-600 text-xs font-medium pr-2">
              Trusted across South Florida
            </span>
          </div>

          <h1
            className="text-gray-900 text-center lg:text-left text-[clamp(2rem,5vw,74px)] font-medium leading-[1.1] font-['Clash_Display',sans-serif]"
          >
            Remodeling,
            <br />
            Cabinetry, and
            <br />
            <em
              className="font-serif italic font-normal text-[#3F2F22]"
            >
              Everything Between
            </em>
          </h1>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md text-center lg:text-left">
            Kitchens, closets, bathrooms, flooring, painting, electrical,
            outdoor living — we handle it all under one roof.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CtaButton
              label="Get Our Free Quote"
              className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold tracking-wide shadow-lg hover:shadow-xl transition-all"
            />
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
            <span>Licensed</span>
            <span className="text-gray-300">·</span>
            <span>Insured</span>
            <span className="text-gray-300">·</span>
            <span>Locally Trusted</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full max-w-lg">
          <Image
            src="/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg"
            alt="Master Cabinets — Custom Cabinetry and Home Remodeling in South Florida"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
