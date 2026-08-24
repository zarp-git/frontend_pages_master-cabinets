"use client";

import Autoplay from "embla-carousel-autoplay";
import ReviewCard from "@/presentation/components/molecules/mc/ReviewCard";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentation/components/atoms/ui/carousel";
import { HOME_REVIEWS } from "@/constants/testimonials";

/**
 * ReviewsSection — Figma node 17:2789 (REVIEWS).
 *
 * Centered two-line heading with a Times-italic accent, then a 385px card rail
 * that is 1589px wide inside a 1376px container — i.e. it overflows and scrolls
 * horizontally by design. Mobile uses an autoplaying Embla carousel.
 */
export default function ReviewsSection() {
  return (
    <section
      className="w-full bg-white py-[30px]"
      aria-label="Customer reviews"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-4 sm:px-8">
        <SectionHeading
          line1="Designed With Care."
          line2="Remembered for the"
          accent="Experience."
          align="center"
          className="pt-8"
        />
      </div>

      {/* Desktop: horizontally scrollable card rail */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1440px] lg:block">
        <div className="-my-6 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth px-8 py-6 [scrollbar-color:#E5DECD_transparent] [scrollbar-width:thin]">
          <div className="flex w-max gap-4">
            {HOME_REVIEWS.map((review) => (
              <ReviewCard
                key={review.authorName}
                {...review}
                className="w-[385px] shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: swipeable carousel */}
      <div className="mt-8 lg:hidden">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pl-4" viewportClassName="-my-6 py-6">
            {HOME_REVIEWS.map((review) => (
              <CarouselItem
                key={review.authorName}
                className="basis-[85vw] max-w-[385px] pl-4"
              >
                <ReviewCard {...review} className="h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1440px] justify-center px-4 sm:px-8">
        <ActionButtonGroup className="justify-center" />
      </div>
    </section>
  );
}
