"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import GallerySection from "@/presentation/components/organisms/home-page-sections/mc/GallerySection";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

const PRINCIPLES = [
  {
    number: "01",
    title: "One Point of Contact",
    body: "From the first measurement to the final hinge, one coordinated team is accountable for the entire project.",
  },
  {
    number: "02",
    title: "Architectural Precision",
    body: "Materials are selected for beauty, then engineered for the exact dimensions and climate of your room.",
  },
  {
    number: "03",
    title: "Certainty Before Production",
    body: "We map out and review every key design decision with you before any fabrication begins.",
  },
  {
    number: "04",
    title: "Designed Around You",
    body: "We start with how your household actually lives, not with a rendering, so the space works in daily life.",
  },
  {
    number: "05",
    title: "Materials That Last",
    body: "Finishes and construction chosen to age beautifully through South Florida sun and humidity.",
  },
  {
    number: "06",
    title: "Support After Install",
    body: "A one-year installation warranty and dedicated post-sales support keep your space performing.",
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    body: "We listen to what is not working and how you imagine the finished space — no pressure, no generic sales pitch.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    body: "We measure carefully, produce clear 3D drawings, and provide a comprehensive proposal with transparent pricing.",
  },
  {
    step: "03",
    title: "Fabrication & Preparation",
    body: "Custom cabinets are precision-built in our shop while site prep, electrical, and flooring are coordinated in parallel.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    body: "Our master installers fit every piece with millimeter precision, complete final adjustments, and review the 1-year warranty with you.",
  },
] as const;

/**
 * AboutPageView — Figma node 48:8801 (Page 2: ABOUT US)
 * Hero & Studio Story + Principles + Bento Gallery + Step-by-Step Process + FAQ + CTA.
 * ZERO inline styles.
 */
export function AboutPageView() {
  return (
    <main className="w-full bg-white pt-24 md:pt-28">
      {/* ── Section 2: Hero & Studio Story (Node 48:8809) ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto pt-10 md:pt-16 pb-16">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Hero Image Banner (Node 48:8849) */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[546px] rounded-[24px] overflow-hidden bg-stone-100 shadow-md">
            <Image
              src="/images/hero/image2.webp"
              alt="Master Cabinets Workshop and Studio"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1288px"
            />
          </div>

          {/* Headline & Narrative Block */}
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55.3px] leading-tight md:leading-[53.1px] text-[#111827]">
              A Single Team for the Home You{" "}
              <span className="font-serif italic font-normal text-[#111827]">
                Imagine
              </span>
            </h1>

            <p className="font-sans font-light text-lg sm:text-xl md:text-[24px] leading-relaxed md:leading-[39px] text-[#4B5563]">
              For more than 25 years, Master Cabinets has helped South Florida
              homeowners remodel their homes end to end cabinetry, flooring,
              painting, electrical, and outdoor work, coordinated through one
              dedicated point of contact. Licensed &amp; Insured.
            </p>

            <div className="pt-2">
              <ActionButtonGroup ctaLabel="Get Our Free Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Core Craftsmanship Principles (Node 48:8944) ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto py-12 md:py-16">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm text-[#968272]">02</span>
              <span className="font-sans text-xs uppercase tracking-wider text-[#968272] font-semibold">
                HOW WE WORK
              </span>
            </div>
            <h2 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[61.8px] text-[#111827]">
              Principles Behind Every Project
            </h2>
          </div>

          {/* 6 Principle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="flex flex-col gap-4 p-8 rounded-[24px] bg-[#F9FAFB] border border-[#EFEFEF] hover:border-[#DEDBD8] hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-clash font-medium text-xl md:text-2xl text-[#111827]">
                    {principle.title}
                  </h3>
                  <span className="font-serif text-2xl text-[#968272]">
                    {principle.number}
                  </span>
                </div>
                <p className="font-sans font-normal text-sm sm:text-base leading-[26px] text-[#4B5563]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <ActionButtonGroup />
        </div>
      </section>

      {/* ── Section 4: Featured Gallery Section (Node 48:9893) ── */}
      <GallerySection />

      {/* ── Section 5: The Step-by-Step Remodeling Process (Node 48:9093) ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto py-12 md:py-16">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm text-[#968272]">03</span>
              <span className="font-sans text-xs uppercase tracking-wider text-[#968272] font-semibold">
                THE PROCESS
              </span>
            </div>
            <h2 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[60.6px] text-[#111827]">
              From First Call to Final Installation
            </h2>
          </div>

          {/* 4 Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 p-6 sm:p-8 rounded-[24px] bg-[#F9FAFB] border border-[#EFEFEF]"
              >
                <span className="font-serif text-5xl md:text-6xl text-[#968272]">
                  {step.step}
                </span>
                <h3 className="font-clash font-medium text-xl md:text-2xl text-[#111827]">
                  {step.title}
                </h3>
                <p className="font-sans font-normal text-sm sm:text-base leading-relaxed text-[#4B5563]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: FAQ Section (Node 48:10021) ── */}
      <FAQSection />

      {/* ── Section 7: Consultation CTA (Node 48:9957) ── */}
      <PricingCTASection />
    </main>
  );
}
