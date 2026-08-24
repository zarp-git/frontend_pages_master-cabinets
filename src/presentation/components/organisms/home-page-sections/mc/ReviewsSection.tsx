import ReviewCard from "@/presentation/components/molecules/mc/ReviewCard";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

const REVIEWS = [
  {
    authorName: "Emily R.",
    rating: 5,
    quote:
      "Master Cabinets completely transformed our kitchen. The new cabinetry is beautiful, functional, and perfectly designed for our space. The team communicated clearly throughout the project and paid attention to every detail.",
    serviceTag: "KITCHEN REMODELING",
    locationTag: "BONITA, FL",
  },
  {
    authorName: "Daniel M.",
    rating: 5,
    quote:
      "Our bathroom renovation turned out better than we imagined. Master Cabinets helped us create a modern, comfortable space with excellent storage and high quality finishes. The entire process felt organized and professional.",
    serviceTag: "BATHROOM REMODELING",
    locationTag: "BONITA, FL",
  },
  {
    authorName: "Michael A.",
    rating: 5,
    quote:
      "The custom cabinets made a huge difference in both the appearance and functionality of our home. Master Cabinets listened to what we needed and delivered a solution that feels elegant, practical, and completely tailored to us.",
    serviceTag: "CABINETRY",
    locationTag: "BONITA, FL",
  },
  {
    authorName: "Sarah T.",
    rating: 5,
    quote:
      "We hired Master Cabinets for several areas of our home, including the kitchen, bathrooms, and custom storage. Everything feels cohesive, thoughtfully designed, and built to last. We are extremely happy with the final result.",
    serviceTag: "BATHROOM REMODELING",
    locationTag: "FORT MYERS, FL",
  },
] as const;

/**
 * ReviewsSection — Figma node 17:2789 (REVIEWS)
 * Section heading, 4 review cards carousel/grid, bottom CTA.
 * Mobile: horizontal swipeable carousel with snap. Desktop: 4-col flex row.
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
          <h2 className="font-clash text-[clamp(32px,3.3vw,48px)] leading-none font-medium text-[#111827]">
            Designed With Care.
          </h2>
          <span className="font-clash text-[clamp(32px,3.3vw,48px)] leading-[1.2] font-medium text-[#968272]">
            Remembered for the Experience.
          </span>
        </div>

        {/* Cards — snap scroll on mobile, flex row on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none]">
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
