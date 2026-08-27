import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { HeroBreadcrumb } from "@/presentation/components/atoms/ui/HeroBreadcrumb";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Background image path */
  image: string;
  /** Alt text for the background image */
  imageAlt?: string;
  /** Small uppercase label above the heading */
  eyebrow?: string;
  /** Main heading */
  heading: string;
  /** Optional subheading below the main heading */
  subheading?: string;
  /** Breadcrumb items - last item is always the current page (no link) */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional CTA buttons rendered below the heading */
  cta?: React.ReactNode;
  /** Min height variant: "md" = 400px, "lg" = 480px (default), "xl" = 560px */
  size?: "md" | "lg" | "xl";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function PageHero({
  image,
  imageAlt = "",
  eyebrow,
  heading,
  subheading,
  breadcrumbs,
  cta,
  size = "lg",
}: PageHeroProps) {
  const minHeight = {
    md: "min-h-[320px] lg:min-h-[400px]",
    lg: "min-h-[400px] lg:min-h-[480px]",
    xl: "min-h-[480px] lg:min-h-[560px]",
  }[size];

  return (
    <section
      className={`relative ${minHeight} flex flex-col justify-center overflow-hidden`}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt || heading}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-gray-300 text-sm md:text-base font-rubik uppercase tracking-[3px]">
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-hanken uppercase leading-tight max-w-4xl">
          {heading}
        </h1>

        {/* Subheading */}
        {subheading && (
          <p className="text-gray-300 font-rubik text-base md:text-lg max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <HeroBreadcrumb items={breadcrumbs} />
        )}

        {/* CTA */}
        {cta && <div className="flex flex-wrap items-center justify-center gap-4">{cta}</div>}
      </div>
    </section>
  );
}
