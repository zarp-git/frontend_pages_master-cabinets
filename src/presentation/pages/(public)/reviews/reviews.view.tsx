"use client";

import { useMemo, useState } from "react";
import ReviewCard from "@/presentation/components/molecules/mc/ReviewCard";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import FilterChips from "@/presentation/components/molecules/mc/FilterChips";
import LoadMoreButton from "@/presentation/components/molecules/mc/LoadMoreButton";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";
import {
  MC_REVIEWS,
  MC_FILTER_CATEGORIES,
  type McFilterCategory,
} from "@/constants/testimonials";

const PAGE_SIZE = 9;

const CHIP_OPTIONS = MC_FILTER_CATEGORIES.map((c) => ({ label: c, value: c }));

/**
 * ReviewsPageView — Figma node 60:18380 (REVIEWS).
 *
 * Centered heading lockup → filter chips → 3-column review grid (385px cards,
 * 16px gutters) → Load More pill → the shared FAQ block → quote CTA.
 */
export function ReviewsPageView() {
  const [active, setActive] = useState<McFilterCategory>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (active === "All") return MC_REVIEWS;
    return MC_REVIEWS.filter((r) => r.category === active);
  }, [active]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  return (
    <main className="w-full bg-white pt-[92px] sm:pt-[104px] lg:pt-[120px]">
      <section
        className="mx-auto flex max-w-[1360px] flex-col items-center px-4 pb-20 pt-16 sm:px-8 lg:px-16"
        aria-label="Customer reviews"
      >
        <SectionHeading
          line1="Designed With Care."
          line2="Remembered for the"
          accent="Experience."
          align="center"
          tone="black"
        />

        <FilterChips
          options={CHIP_OPTIONS}
          active={active}
          onChange={(v) => {
            setActive(v);
            setVisible(PAGE_SIZE);
          }}
          ariaLabel="Filter reviews by service"
          className="mt-8"
        />

        <div className="mt-8 grid w-full max-w-[1232px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((review) => (
            <ReviewCard
              key={`${review.authorName}-${review.serviceTag}`}
              {...review}
              className="h-full max-w-none"
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-sans text-lg text-[#666666]">
            No reviews in this category yet.
          </p>
        )}

        {hasMore && (
          <div className="pt-10">
            <LoadMoreButton onClick={() => setVisible((v) => v + PAGE_SIZE)} />
          </div>
        )}
      </section>

      <FAQSection />
      <PricingCTASection showPillars={false} />
    </main>
  );
}

export default ReviewsPageView;
