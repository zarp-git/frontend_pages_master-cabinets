"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

export default function AboutSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-rubik font-semibold text-gray-900 leading-tight">
            {/* Section heading — e.g. "Meet [Company Name]" or "About Us" */}
            [About section heading — introduce the company]
          </h2>
        </div>

        {/* Feature Block 1: Right Content, Left Image */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-24 mb-12 sm:mb-16 md:mb-24">
          {/* Left: Image with Angled Shape */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[6/3] drop-shadow-xl">
              {/* Accent Background/Border Layer — use brand primary color */}
              <div
                className="absolute inset-0 bg-primary rounded-l-3xl [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]"
              ></div>

              {/* Image Layer — replace src with a relevant about/team image */}
              <div
                className="absolute inset-0 right-2 bg-gray-200 rounded-l-3xl overflow-hidden [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]"
              >
                <Image
                  src="/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg"
                  alt="[Describe the image — e.g. the team at work]"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 w-full text-left">
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-rubik font-medium text-gray-900 mb-4 sm:mb-6 leading-tight">
              {/* Sub-heading — main value proposition or expertise statement */}
              [Sub-heading — e.g. "Trusted [Service] Experts in [Region]"]
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-rubik">
              {/* Paragraph describing the company: mission, specialties, service area, and differentiators */}
              [Description of the company: mission, specialties, service area, and key differentiators.]
            </p>
          </div>
        </div>

        {/* Feature Block 2: Left Content, Right Image */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 lg:gap-24 mb-10 sm:mb-12 md:mb-16">
          {/* Left: Content */}
          <div className="flex-1 w-full text-left">
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-rubik font-medium text-gray-900 mb-4 sm:mb-6 leading-tight">
              {/* Sub-heading 2 — e.g. expertise, certifications, or local presence */}
              [Sub-heading 2 — e.g. "Local Expertise, Guaranteed Quality"]
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-rubik">
              {/* Paragraph about experience, track record, and community ties */}
              [Paragraph about years of experience, completed projects, and commitment to quality and customer satisfaction.]
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-rubik">
              {/* Optional: highlight a certification, partnership, or brand endorsement */}
              <span className="font-bold text-primary">
                [Optional certification or partnership — e.g. "Authorized [Brand] Dealer & Contractor"]
              </span>{" "}
              [Brief description of what this certification means for the customer.]
            </p>
          </div>

          {/* Right: Image with Angled Shape */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[6/3] drop-shadow-xl">
              {/* Accent — use brand primary color */}
              <div
                className="absolute inset-0 bg-primary rounded-r-3xl [clip-path:polygon(10%_0,100%_0,100%_100%,10%_100%,0%_50%)]"
              ></div>

              {/* Image — replace src with a relevant local/expertise image */}
              <div
                className="absolute inset-0 left-2 bg-gray-200 rounded-r-3xl overflow-hidden [clip-path:polygon(10%_0,100%_0,100%_100%,10%_100%,0%_50%)]"
              >
                <Image
                  src="/images/projects/custom-white-kitchen-cabinetry.jpg"
                  alt="[Describe the image — e.g. company expertise]"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <CtaButton className="h-[52px] px-8 text-base font-bold tracking-wide" />
        </div>
      </div>
    </section>
  );
}
