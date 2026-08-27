"use client";

import { useState } from "react";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import HScroll from "@/presentation/components/atoms/ui/HScroll";
import { cn } from "@/lib/utils";
import { SERVICES_OFFERED as SERVICES } from "@/constants/services-offered";

/**
 * ServicesSection - Figma node 17:2200 (SERVICES).
 *
 * Left column: heading lockup plus the service pills - a snap-scrolling rail on
 * phones, the kit's two-column bezel grid from `sm` up (300×62 outer, 293×55
 * inner, radius 19/16; the active pill fills #E4E4E4).
 * Right column: the image panel with a #FFFDF7 label pill and prev/next
 * controls. It runs full width under `xl` and locks to 634×660 above it.
 */
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = SERVICES[activeIndex];

  const step = (delta: number) =>
    setActiveIndex((i) => (i + delta + SERVICES.length) % SERVICES.length);

  return (
    <section
      className="w-full bg-white px-4 py-10 sm:px-8 lg:px-16 lg:py-8"
      aria-label="Our services"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <div className="flex flex-col-reverse items-start gap-8 xl:flex-row xl:items-center">
          {/* Left: heading + service pills */}
          <div className="flex w-full min-w-0 flex-col gap-8 xl:max-w-[646px]">
            <SectionHeading
              line1="More Than Cabinets."
              line2="A Complete"
              accent="Transformation."
              subtitle="Interior or exterior, structural or cosmetic. If it is part of your home, it is part of our scope. There is nothing we cannot take on for our customers."
            />

            <HScroll
              ariaLabel="Choose a service"
              expandedClassName="sm:mx-0 sm:grid sm:grid-cols-2 sm:snap-none sm:overflow-visible sm:px-0"
            >
              {SERVICES.map((service, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={service.index}
                    className={cn(
                      "w-[230px] shrink-0 snap-start rounded-[19px] p-1 shadow-[0_0_0_rgba(0,0,0,0.05)] transition-colors",
                      "sm:w-auto sm:shrink",
                      isActive ? "bg-black/[0.07]" : "bg-black/[0.04]",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex h-[55px] w-full items-center gap-3 rounded-[16px] px-3.5 text-left",
                        "shadow-[0_1px_1px_rgba(255,255,255,0.60)] transition-colors",
                        isActive ? "bg-[#E4E4E4]" : "bg-white hover:bg-[#F7F7F7]",
                      )}
                    >
                      <span
                        className="shrink-0 font-serif italic text-[13px] text-[#958272]"
                        aria-hidden="true"
                      >
                        {service.index}
                      </span>
                      <span className="min-w-0 truncate font-clash text-[15px] font-medium leading-tight text-[#403023] sm:text-[16px]">
                        {service.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </HScroll>
          </div>

          {/* Image panel - visible at every width, and lifted above the
              pills by flex-col-reverse once the row stacks. */}
          <div className="relative aspect-[4/3] w-full min-w-0 shrink-0 overflow-hidden rounded-[26px] bg-[#E5DECD] shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:aspect-[16/10] xl:aspect-auto xl:h-[660px] xl:w-[634px]">
            <Image
              key={active.image}
              src={active.image}
              alt={`${active.label} - Master Cabinets`}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 634px, 100vw"
            />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 sm:inset-x-8 sm:bottom-8 sm:gap-4">
              <span className="min-w-0 truncate rounded-full bg-[#FFFDF7] px-4 py-2 font-sans text-[13px] font-medium text-[#0A1838] shadow-[0_3px_12px_rgba(0,39,112,0.06)] sm:px-5 sm:py-2.5 sm:text-[17px]">
                {active.label}
              </span>

              <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous service"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DECD] bg-white/90 transition-colors hover:bg-white sm:h-[46px] sm:w-[46px]"
                >
                  <RiArrowLeftLine className="h-5 w-5 text-[#403023]" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next service"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DECD] bg-white/90 transition-colors hover:bg-white sm:h-[46px] sm:w-[46px]"
                >
                  <RiArrowRightLine className="h-5 w-5 text-[#403023]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <ActionButtonGroup className="sm:justify-center" />
        </div>
      </div>
    </section>
  );
}
