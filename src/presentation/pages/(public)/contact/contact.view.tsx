"use client";

import React from "react";
import Link from "next/link";
import QuoteForm from "@/presentation/components/molecules/mc/QuoteForm";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";
import {
  COMPANY_NAME,
  PHONE,
  PHONE_SECONDARY,
  EMAIL,
  ADDRESS,
  BUSINESS_HOURS,
} from "@/constants/business-info";

/**
 * ContactPageView — Figma nodes 60:12187 + 17:1781 (Contact Section & Page)
 * Direct contact details + QuoteForm card + FAQ + CTA.
 * ZERO inline styles.
 */
export function ContactPageView() {
  return (
    <main className="w-full bg-white pt-24 md:pt-28">
      {/* ── Contact Hero & Form ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <span className="font-serif text-sm text-[#968272] uppercase tracking-wider">
              GET IN TOUCH
            </span>

            <h1 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight text-[#111827]">
              Let&apos;s Discuss Your Remodel
            </h1>

            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-relaxed text-[#4B5563] max-w-xl">
              Whether you are planning a full home transformation or custom cabinetry
              for a single room, our team is ready to walk your space and provide a
              clear, honest proposal.
            </p>

            {/* Contact details cards */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="p-5 rounded-[20px] bg-[#F9FAFB] border border-[#EFEFEF] flex flex-col gap-1">
                <span className="font-clash font-medium text-xs uppercase text-[#968272]">
                  Phone Numbers
                </span>
                <a
                  href={PHONE.href}
                  className="font-clash font-medium text-lg text-[#111827] hover:text-[#FF4C00] transition-colors"
                >
                  {PHONE.display} (Primary)
                </a>
                <a
                  href={PHONE_SECONDARY.href}
                  className="font-clash font-medium text-base text-[#4B5563] hover:text-[#FF4C00] transition-colors"
                >
                  {PHONE_SECONDARY.display} (Direct)
                </a>
              </div>

              <div className="p-5 rounded-[20px] bg-[#F9FAFB] border border-[#EFEFEF] flex flex-col gap-1">
                <span className="font-clash font-medium text-xs uppercase text-[#968272]">
                  Email Address
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-clash font-medium text-base sm:text-lg text-[#111827] hover:text-[#FF4C00] transition-colors"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="p-5 rounded-[20px] bg-[#F9FAFB] border border-[#EFEFEF] flex flex-col gap-1">
                <span className="font-clash font-medium text-xs uppercase text-[#968272]">
                  Working Hours &amp; Service Area
                </span>
                <p className="font-sans text-sm text-[#111827] font-medium">
                  {BUSINESS_HOURS.display}
                </p>
                <p className="font-sans text-xs text-[#4B5563]">
                  Serving Naples, Bonita Springs, Estero, Fort Myers, Marco Island, Miami, and surrounding South Florida areas.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Fast Quote Form Card */}
          <div className="w-full lg:w-[460px] xl:w-[480px] shrink-0">
            <QuoteForm
              variant="solid"
              showTitle={true}
              className="shadow-sm p-6 sm:p-8"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection />

      {/* ── Consultation CTA ── */}
      <PricingCTASection />
    </main>
  );
}
