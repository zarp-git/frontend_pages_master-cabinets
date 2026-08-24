"use client";

import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import ReviewCard from "@/presentation/components/molecules/mc/ReviewCard";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

const REVIEWS_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Home remodel", value: "home-remodel" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Carpentry", value: "carpentry" },
  { label: "Living spaces", value: "living-spaces" },
  { label: "Tiling", value: "tiling" },
  { label: "Other", value: "other" },
] as const;

const CLIENT_REVIEWS = [
  {
    id: 1,
    authorName: "Emily R.",
    rating: 5,
    category: "kitchens",
    serviceTag: "KITCHEN REMODELING",
    locationTag: "BONITA, FL",
    quote:
      "Master Cabinets completely transformed our kitchen. The new cabinetry is beautiful, functional, and perfectly designed for our space. The team communicated clearly throughout the project and paid attention to every detail.",
  },
  {
    id: 2,
    authorName: "Daniel M.",
    rating: 5,
    category: "bathrooms",
    serviceTag: "BATHROOM REMODELING",
    locationTag: "BONITA, FL",
    quote:
      "Our bathroom renovation turned out better than we imagined. Master Cabinets helped us create a modern, comfortable space with excellent storage and high quality finishes. The entire process felt organized and professional.",
  },
  {
    id: 3,
    authorName: "Michael A.",
    rating: 5,
    category: "carpentry",
    serviceTag: "CABINETRY",
    locationTag: "BONITA, FL",
    quote:
      "The custom cabinets made a huge difference in both the appearance and functionality of our home. Master Cabinets listened to what we needed and delivered a solution that feels elegant, practical, and completely tailored to us.",
  },
  {
    id: 4,
    authorName: "Sarah T.",
    rating: 5,
    category: "bathrooms",
    serviceTag: "BATHROOM REMODELING",
    locationTag: "FORT MYERS, FL",
    quote:
      "We hired Master Cabinets for several areas of our home, including the kitchen, bathrooms, and custom storage. Everything feels cohesive, thoughtfully designed, and built to last. We are extremely happy with the final result.",
  },
  {
    id: 5,
    authorName: "David K.",
    rating: 5,
    category: "home-remodel",
    serviceTag: "WHOLE HOME",
    locationTag: "NAPLES, FL",
    quote:
      "Working with one contractor for our flooring, painting, and cabinetry saved us months of headaches. JB and his team delivered top tier craftsmanship on budget.",
  },
  {
    id: 6,
    authorName: "Jessica L.",
    rating: 5,
    category: "carpentry",
    serviceTag: "CUSTOM CLOSETS",
    locationTag: "MARCO ISLAND, FL",
    quote:
      "The precision on the closet joinery and integrated LED lighting is astonishing. Truly luxury quality.",
  },
];

/**
 * ReviewsPageView — Figma node 60:18380 (Page 6: REVIEWS)
 * 2-Line Display Header + Filter Tabs + 3-Column Reviews Grid + FAQ + CTA + Footer.
 * ZERO inline styles.
 */
export function ReviewsPageView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredReviews = useMemo(() => {
    if (activeCategory === "all") return CLIENT_REVIEWS;
    return CLIENT_REVIEWS.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="w-full bg-white pt-24 md:pt-28">
      {/* ── Section 2: Header & Category Filter Tabs (Node 60:18382) ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto pt-10 md:pt-16 pb-12 flex flex-col items-center text-center">
        {/* Header Title (2 Lines) */}
        <div className="flex flex-col gap-1 mb-8 md:mb-12">
          <h1 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[61.8px] text-[#111827]">
            Designed With Care.
          </h1>
          <span className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[61.8px] text-[#968272]">
            Remembered for the Experience.
          </span>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {REVIEWS_CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveCategory(tab.value)}
                className={cn(
                  "px-4 sm:px-5 py-2 rounded-[999px] font-clash font-medium text-[13px] leading-[19.5px] transition-all duration-200",
                  isActive
                    ? "bg-[#403023] text-white shadow-sm"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111827]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Section 3: Comprehensive Testimonial Card Grid ── */}
      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              authorName={review.authorName}
              rating={review.rating}
              quote={review.quote}
              serviceTag={review.serviceTag}
              locationTag={review.locationTag}
            />
          ))}
        </div>
      </section>

      {/* ── Section 4: FAQ Accordion Section (Node 60:19873) ── */}
      <FAQSection />

      {/* ── Section 5: Consultation CTA (Node 60:18575) ── */}
      <PricingCTASection />
    </main>
  );
}
