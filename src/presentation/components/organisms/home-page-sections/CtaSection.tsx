"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function CtaSection() {
  return (
    <section
      id="cta"
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="section-container">
        {/* ── Card wrapper (relative for the absolute image) ── */}
        <div className="relative">
          {/* ── Dark card with texture ── */}
          <div
            className="relative rounded-3xl px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-8 overflow-hidden border border-zinc-500/20 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05),0px_17px_17px_0px_rgba(0,0,0,0.04),0px_37px_22px_0px_rgba(0,0,0,0.03),0px_67px_27px_0px_rgba(0,0,0,0.01)]"
          >
            {/* Background texture layer */}
            <Image
              src="/images/projects/gray-custom-kitchen-cabinetry.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover pointer-events-none"
              aria-hidden="true"
              priority={false}
            />

            {/* ── Text content ── */}
            <div className="relative z-10 max-w-full sm:max-w-xl md:max-w-sm lg:max-w-2xl text-center sm:text-left">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-rubik leading-snug md:leading-10">
                {/* CTA section main headline — create urgency or social proof */}
                [CTA headline — e.g. "Your neighbors already upgraded."]
                <br />
                <span className="font-normal">
                  {/* CTA sub-line — reinforce the offer or next step */}
                  [CTA sub-line — e.g. "Get a free quote and see what's possible."]
                </span>
              </h2>
            </div>

            {/* ── CTA Button ── */}
            <CtaButton
              label="BOOK A FREE CONSULTATION"
              variant="brick-outline"
              className="relative z-10 h-12 px-6 sm:px-8 py-4 rounded-lg border-2 border-white bg-transparent text-white hover:bg-white/10 w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
