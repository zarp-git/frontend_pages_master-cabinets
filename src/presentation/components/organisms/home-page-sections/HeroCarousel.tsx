"use client";

import Image from "next/image";
import { RiArrowDownSLine } from "@remixicon/react";
import { CyclingText } from "@/presentation/components/molecules/common/CyclingText";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

const CITIES = [
  "[CITY 1]",
  "[CITY 2]",
  "[CITY 3]",
  "[CITY 4]",
  "[CITY 5]",
];

const SERVICES = [
  "[SERVICE 1]",
  "[SERVICE 2]",
  "[SERVICE 3]",
  "[SERVICE 4]",
];

export default function HeroCarousel() {
  return (
    <section
      className="relative w-full min-h-svh flex flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-0 sm:pb-16 md:pb-20"
      style={{
        background:
          "radial-gradient(277.91% 109.76% at 63.33% 38.87%, #FFF 0%, #D9D9D9 100%)",
      }}
    >
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-0">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4 md:gap-6 relative z-30">
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="bg-[#dcfce7] text-[#064e3b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              [Badge Label]
            </span>
            <span className="text-gray-600 text-xs font-medium pr-2">
              [Short announcement or highlight text]
            </span>
          </div>

          <h1 className="h1 text-gray-900 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            [Headline intro — e.g. "The Best Specialists for"]{" "}
            <span className="text-primary block">
              <CyclingText items={SERVICES} interval={3000} direction="up" />
            </span>
            {"in "}
            <CyclingText
              items={CITIES}
              className="text-gray-900"
              interval={2500}
              direction="up"
            />
          </h1>

          <p className="text-gray-600 font-rubik text-sm md:text-base lg:text-lg leading-relaxed max-w-md text-center lg:text-left">
            [Short description of the company's value proposition, service area, and years of experience.]
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CtaButton className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold tracking-wide shadow-lg hover:shadow-xl transition-all" />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-lg">
          <Image
            src="/images/hero/zarp-logomark-black.png"
            alt="Company logo"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 animate-bounce">
        <span className="text-gray-400 font-rubik text-xs md:text-sm">
          Scroll down
        </span>
        <RiArrowDownSLine className="text-gray-400 size-4 md:size-5" />
      </div>
    </section>
  );
}
