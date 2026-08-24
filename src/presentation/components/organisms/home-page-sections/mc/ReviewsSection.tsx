import ReviewCard from "@/presentation/components/molecules/mc/ReviewCard";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

const REVIEWS = [
  {
    authorName: "Sarah M.",
    rating: 5,
    quote:
      "Master Cabinets completely transformed our kitchen. The craftsmanship is flawless, and the team was professional from day one to final walk-through.",
    serviceTag: "KITCHEN REMODELING",
    locationTag: "NAPLES, FL",
  },
  {
    authorName: "David & Elena R.",
    rating: 5,
    quote:
      "Having one team handle the cabinets, tile, and electrical made our whole-home remodel so much smoother than we expected. Outstanding quality.",
    serviceTag: "FULL HOME REMODEL",
    locationTag: "BONITA SPRINGS, FL",
  },
  {
    authorName: "Michael T.",
    rating: 5,
    quote:
      "The custom closet they built maximized every inch of our master suite. Beautiful finishes and smooth soft-close hardware throughout.",
    serviceTag: "CUSTOM CLOSETS",
    locationTag: "FORT MYERS, FL",
  },
  {
    authorName: "Jennifer L.",
    rating: 5,
    quote:
      "Their 1-year warranty gave us total confidence, but honestly the build quality is so high we haven't needed to call them once. Highly recommend.",
    serviceTag: "BATHROOM VANITY",
    locationTag: "MIAMI, FL",
  },
] as const;

/**
 * ReviewsSection — Figma node 17:2385 (REVIEWS)
 * 2-line display heading + 4-card horizontal carousel.
 */
export default function ReviewsSection() {
  return (
    <section
      className="w-full bg-white px-8 py-7.5"
      aria-label="Customer reviews"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Section heading */}
        <div className="flex flex-col gap-0">
<<<<<<< Updated upstream
          <h2 className="font-clash text-[clamp(32px,3.3vw,48px)] leading-none font-medium text-[#111827]">
            Designed With Care.
          </h2>
          <span className="font-clash text-[clamp(32px,3.3vw,48px)] leading-[1.2] font-medium text-[#958272]">
=======
          <h2
            className="font-clash text-[clamp(32px,3.3vw,48px)] leading-none font-medium text-[#111827]"
          >
            Designed With Care.
          </h2>
          <span
            className="font-clash text-[clamp(32px,3.3vw,48px)] leading-[1.2] font-medium text-[#968272]"
          >
>>>>>>> Stashed changes
            Remembered for the Experience.
          </span>
        </div>

        {/* Cards — snap scroll on mobile, flex row on desktop */}
<<<<<<< Updated upstream
        <div className="flex gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none]">
=======
        <div
          className="flex gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none]"
        >
>>>>>>> Stashed changes
          {REVIEWS.map((review) => (
            <div
              key={review.authorName}
              className="shrink-0 [scroll-snap-align:start] w-[min(385px,85vw)]"
            >
              <ReviewCard {...review} className="h-full" />
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
