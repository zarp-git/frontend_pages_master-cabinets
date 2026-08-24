"use client";

import React from "react";
import Image from "next/image";
import { CyclingText } from "@/presentation/components/molecules/common/CyclingText";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
// [Services section cycling cities — replace with the cities/regions your business serves]
const CITIES = [
  "[City 1]",
  "[City 2]",
  "[City 3]",
  "[City 4]",
  "[City 5]",
];

// [Services cards — replace with your actual services, descriptions, and images]
const SERVICES: ServiceItem[] = [
  {
    title: "[Service 1]",
    description:
      "[Description of service 1 — highlight the main benefit and who it's for.]",
    image: "/images/hero/image4.jpg",
  },
  {
    title: "[Service 2]",
    description:
      "[Description of service 2 — highlight the main benefit and who it's for.]",
    image: "/images/hero/image5.jpg",
  },
  {
    title: "[Service 3]",
    description:
      "[Description of service 3 — highlight the main benefit and who it's for.]",
    image: "/images/hero/image6.jpg",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-14 lg:py-20 bg-gray-50">
      <div className="section-container flex flex-col justify-center items-center gap-6 sm:gap-8">
        {/* ── Heading ── */}
        <div className="flex flex-col justify-start items-center gap-2.5 text-center">
          <h2 className="text-gray-800 text-2xl md:text-3xl font-black font-hanken uppercase leading-tight tracking-wide">
            {/* Services section heading — cycling city names from the CITIES array above */}
            [Services heading — e.g. "Services Designed for"]{" "}
            <CyclingText
              items={CITIES}
              className="text-primary"
              interval={2500}
              direction="up"
            />{" "}
            [Heading suffix — e.g. "Homes &amp; Businesses"]
          </h2>
          <p className="text-gray-600 text-base font-normal font-rubik leading-6 max-w-xl">
            {/* Sub-heading — brief description of the services and their context */}
            [Sub-heading — describe what makes your services suited to the local context or customer needs.]
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* ── CTA Button ── */}
        <CtaButton />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ServiceCard
// ---------------------------------------------------------------------------
function ServiceCard({ title, description, image }: ServiceItem) {
  return (
    <div className="relative w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 pt-5 sm:pt-7 pb-3 sm:pb-4 bg-neutral-700/90 backdrop-blur-xs flex flex-col justify-start items-start gap-1.5 sm:gap-2.5">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium font-hanken capitalize leading-6">
          {title}
        </h3>
        <p className="text-white text-sm md:text-base font-normal font-rubik leading-6">
          {description}
        </p>
      </div>
    </div>
  );
}
