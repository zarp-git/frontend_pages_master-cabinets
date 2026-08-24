"use client";

import React from "react";
import Image from "next/image";
import { ComparisonSlider } from "@/presentation/components/atoms/ui/comparison-slider";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

export const ComparisonSection = () => {
  return (
    <section
      id="comparison"
      className="py-10 sm:py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="section-container flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <h2 className="text-foreground text-2xl sm:text-3xl font-black font-hanken uppercase leading-tight tracking-wide text-center">
          [COMPARISON SECTION HEADING]
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-105 xl:w-125 flex flex-col justify-center items-start gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="text-foreground text-xl font-bold font-hanken uppercase leading-tight tracking-tight">
                [Sub-heading]
              </h3>

              <div className="text-muted-foreground text-base font-normal font-rubik leading-6">
                <p>[Paragraph 1]</p>
                <br />
                <p>[Paragraph 2]</p>
              </div>

              <div>
                <span className="text-primary text-base font-bold font-rubik leading-6">
                  [Optional certification]
                </span>
                <span className="text-muted-foreground text-base font-normal font-rubik leading-6">
                  {" "}
                  – [Description]
                </span>
              </div>
            </div>

            <CtaButton />
          </div>

          {/* Slider */}
          <div className="relative w-full">
            <ComparisonSlider
              beforeImage="/images/hero/zarp-logomark-black.png"
              afterImage="/images/hero/zarp-logomark-black.png"
              beforeLabel="Before"
              afterLabel="After"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[420px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};