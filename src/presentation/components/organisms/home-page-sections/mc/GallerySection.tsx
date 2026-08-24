"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentation/components/atoms/ui/carousel";

/**
 * GallerySection — Figma node 48:9792 (GALLERY).
 *
 * 8-column × 2-row bento grid (186px cells, 192px rows, 12px gaps → 1572px wide)
 * inside a 1376px container, so the collage deliberately overflows and scrolls
 * horizontally. Each tile is a small Bezel (4px frame, radius 19/16).
 * Mobile falls back to a swipeable Embla carousel.
 */

const TILES = [
  {
    src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
    alt: "Luxury kitchen remodel with custom cabinetry — Master Cabinets",
    // col 1-2, row 1-2
    area: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    src: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
    alt: "Modern custom kitchen cabinetry — Master Cabinets",
    // col 3, row 1
    area: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    src: "/images/projects/dark-wood-flooring-installation.jpg",
    alt: "Dark wood flooring installation — Master Cabinets",
    // col 4-5, row 1
    area: "lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2",
  },
  {
    src: "/images/projects/bathroom_remodel_finished_02.jpg",
    alt: "Master bathroom remodel with custom vanity — Master Cabinets",
    // col 6, row 1
    area: "lg:col-start-6 lg:col-end-7 lg:row-start-1 lg:row-end-2",
  },
  {
    src: "/images/projects/painting_flooring_hallway_finished_01.jpg",
    alt: "Interior hallway painting and flooring — Master Cabinets",
    // col 7-8, row 1-2
    area: "lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-3",
  },
  {
    src: "/images/projects/gray-custom-kitchen-cabinetry.jpg",
    alt: "Gray custom kitchen cabinetry — Master Cabinets",
    // col 3-4, row 2
    area: "lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3",
  },
  {
    src: "/images/projects/remodeling_living-room_finished_01.jpg",
    alt: "Living room remodel with built-in storage — Master Cabinets",
    // col 5-6, row 2
    area: "lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-3",
  },
] as const;

export default function GallerySection() {
  return (
    <section
      className="w-full bg-white py-10 lg:py-[40px]"
      aria-label="Featured work gallery"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-4 sm:px-8">
        <SectionHeading
          line1="Featured Work"
          accent="Gallery"
          accentInline
          align="center"
          subtitle="A curated selection of our finest craftsmanship across different residential spaces — the meticulous detail in our materials and joinery."
        />
      </div>

      {/* Desktop: horizontally scrollable bento collage (1572px of content) */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1440px] lg:block">
        <div className="overflow-x-auto overflow-y-hidden px-8 pb-3 [scrollbar-width:thin]">
          <div className="grid w-[1572px] gap-3 [grid-template-columns:repeat(8,186px)] [grid-template-rows:repeat(2,192px)]">
            {TILES.map((tile) => (
              <div
                key={tile.src}
                className={`rounded-[19px] bg-black/[0.04] p-1 shadow-[0_0_0_rgba(0,0,0,0.05)] ${tile.area}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-[#E5DECD] shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    className="object-cover"
                    sizes="384px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: swipeable carousel */}
      <div className="mt-8 lg:hidden">
        <Carousel
          opts={{ align: "center", loop: true, dragFree: false }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pl-4">
            {TILES.map((tile) => (
              <CarouselItem
                key={tile.src}
                className="basis-[80vw] max-w-[320px] pl-4"
              >
                <div className="rounded-[19px] bg-black/[0.04] p-1">
                  <div className="relative h-[260px] w-full overflow-hidden rounded-[16px] bg-[#E5DECD]">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="mt-3 select-none text-center font-sans text-xs text-[#786F6C]">
          Swipe to explore →
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1440px] justify-center px-4 sm:px-8">
        <ActionButtonGroup className="justify-center" />
      </div>
    </section>
  );
}
