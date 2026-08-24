"use client";

import { useState } from "react";
import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import { cn } from "@/lib/utils";

const SERVICES = [
  { index: "01", label: "Home Remodeling" },
  { index: "02", label: "Custom Cabinetry" },
  { index: "03", label: "Walk-In Closets & Storage" },
  { index: "04", label: "Bathrooms & Vanities" },
  { index: "05", label: "Flooring" },
  { index: "06", label: "Interior & Exterior Painting" },
  { index: "07", label: "Custom Outdoor Living" },
  { index: "08", label: "Electrical & Structural Work" },
  { index: "09", label: "Architectural Millwork" },
] as const;

/**
 * ServicesSection — Figma node 17:2200 (SERVICES)
 * 2-col: left accordion tab list (9 services), right dynamic image panel.
 */
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // "Custom Cabinetry" active by default

  return (
    <section
      className="w-full bg-white px-8 sm:px-16 py-8"
      aria-label="Our services"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-clash text-[clamp(28px,3.3vw,48px)] leading-[61.8px] font-medium text-[#111827]">
            More Than Cabinets. A Complete Transformation.
          </h2>
          <p className="max-w-[720px] font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]">
            Interior or exterior, structural or cosmetic. If it is part of your
            home, it is part of our scope. There is nothing we cannot take on for
            our customers.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Service accordion tabs */}
          <div className="flex-1 max-w-[600px] flex flex-col">
            {SERVICES.map((service, i) => (
              <button
                key={service.index}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex items-center gap-4 text-left w-full transition-colors h-14 border-b border-[#EFEFEF]",
                  activeIndex === i ? "bg-[#403023]/[0.04] pl-3 rounded-lg" : "bg-transparent pl-0 rounded-none"
                )}
                aria-pressed={activeIndex === i}
              >
                <span className="font-serif text-[10.8px] text-[#968272] min-w-[28px]">
                  {service.index}
                </span>
                <span
                  className={cn(
                    "font-clash text-[18px] leading-[21.6px] font-medium",
                    activeIndex === i ? "text-[#403023]" : "text-[#111827]"
                  )}
                >
                  {service.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Dynamic image panel */}
          <div className="relative hidden lg:flex items-end shrink-0 overflow-hidden w-[634px] h-[660px] rounded-[24px] bg-[#E5DECD]">
            <Image
              src="/images/services/service-cabinetry.webp"
              alt={`${SERVICES[activeIndex].label} — Master Cabinets`}
              fill
              className="object-cover"
              sizes="634px"
            />
            {/* Floating pill badge */}
            <div
              className="absolute bottom-4 left-4 right-4 flex items-center"
              aria-hidden="true"
            >
              <span className="px-5 py-2 rounded-[999px] text-white bg-[#403023]/85 backdrop-blur-md font-['Raleway',system-ui,sans-serif] text-[17.3px] font-medium">
                {SERVICES[activeIndex].label}
              </span>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
