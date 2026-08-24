import Image from "next/image";
import {
  RiTeamLine,
  RiRulerLine,
  RiCheckboxCircleLine,
} from "@remixicon/react";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";

const VALUE_BLOCKS = [
  {
    index: "01",
    title: "One Coordinated Team",
    body: "From structural changes to the final cabinet hinge, filter everything through one point of contact.",
    Icon: RiTeamLine,
  },
  {
    index: "02",
    title: "Architectural Precision",
    body: "Materials selected for beauty, designed specifically for the exact dimensions of your room.",
    Icon: RiRulerLine,
  },
  {
    index: "03",
    title: "Certainty Before Production",
    body: "See key design decisions mapped out clearly before any fabrication begins.",
    Icon: RiCheckboxCircleLine,
  },
] as const;

const MOSAIC = [
  {
    src: "/images/projects/custom-walk-in-closet-installation.jpg",
    alt: "Custom walk-in closet installation — Master Cabinets",
    span: "col-span-1",
  },
  {
    src: "/images/projects/bathroom_remodel_finished_01.jpg",
    alt: "Finished bathroom remodel — Master Cabinets",
    span: "col-span-1",
  },
  {
    src: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
    alt: "Custom kitchen cabinetry remodel — Master Cabinets",
    span: "col-span-2",
  },
  {
    src: "/images/projects/bathroom_remodel_finished_03.jpg",
    alt: "Master bathroom with custom vanity — Master Cabinets",
    span: "col-span-2",
  },
] as const;

/**
 * AboutTeamSection — Figma node 17:1855 (Who We Are / Single Team Advantage).
 *
 * Left: 2×3 photo mosaic (622px, 16px gaps — two 303px tiles on top, two
 * full-width tiles below). Right: heading lockup, supporting copy and three
 * bezelled value cards (icon chip · title · Times-italic numeral · body).
 */
export default function AboutTeamSection() {
  return (
    <section
      className="w-full bg-white px-4 py-12 sm:px-8 lg:px-16"
      aria-label="About Master Cabinets"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 xl:flex-row xl:gap-20">
        {/* Left: photo mosaic */}
        <div className="grid w-full min-w-0 grid-cols-2 gap-4 xl:w-[622px] xl:shrink-0">
          {MOSAIC.map((img) => (
            <div
              key={img.src}
              className={`relative h-[160px] overflow-hidden rounded-[21px] bg-[#E5DECD] shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:h-[220px] xl:h-[246px] ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 622px, 100vw"
              />
            </div>
          ))}
        </div>

        {/* Right: value proposition */}
        <div className="flex w-full min-w-0 flex-col gap-8 xl:max-w-[610px]">
          <SectionHeading
            line1="Made for Your Space."
            line2="Built for"
            accent="Your Life."
            subtitle="Renovations shouldn't mean managing five different contractors, confusing timelines, and miscommunication."
          />

          <div className="flex flex-col gap-4">
            {VALUE_BLOCKS.map(({ index, title, body, Icon }) => (
              <div
                key={index}
                className="rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_0_0_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start gap-5 rounded-[26px] bg-white p-7 shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/[0.04]"
                    aria-hidden="true"
                  >
                    <Icon className="h-[17px] w-[17px] text-[#403023]" />
                  </span>

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-clash text-[16px] font-medium text-[#403023]">
                        {title}
                      </span>
                      <span
                        className="font-serif italic text-[18px] text-[#958272]"
                        aria-hidden="true"
                      >
                        {index}
                      </span>
                    </div>
                    <p className="font-sans text-[16px] leading-[1.6] text-[#666666]">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ActionButtonGroup />
        </div>
      </div>
    </section>
  );
}
