"use client";

import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentation/components/atoms/ui/carousel";

/**
 * GallerySection — Figma node 48:9792 (GALLERY)
 * 7-tile bento masonry grid. Each tile uses next/image with object-fit cover.
 * On mobile (<768px): horizontal swipeable Embla carousel, snap-center.
 * On desktop: bento grid.
 */

const TILES = [
  {
    src: "/images/projects/cabinetry_kitchen_finished_01.png",
    alt: "Custom kitchen cabinetry — Master Cabinets",
    gridClass: "row-span-2",
  },
  {
    src: "/images/projects/custom-white-kitchen-cabinetry.jpg",
    alt: "White kitchen cabinetry remodel — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/projects/custom-walk-in-closet-installation.jpg",
    alt: "Walk-in closet installation — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/projects/dark-wood-flooring-installation.jpg",
    alt: "Dark wood flooring installation — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/projects/residential-flooring-installation.jpg",
    alt: "Residential flooring — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/projects/custom-outdoor-kitchen-cabinetry.jpg",
    alt: "Outdoor kitchen cabinetry — Master Cabinets",
    gridClass: "col-span-2",
  },
  {
    src: "/images/projects/bathroom_remodel_finished_02.jpg",
    alt: "Luxury master bathroom remodel — Master Cabinets",
    gridClass: "row-span-2",
  },
] as const;

export default function GallerySection() {
  return (
    <section
      className="w-full bg-white px-8 py-10"
      aria-label="Featured work gallery"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Section header */}
        <div className="flex flex-col gap-4">
          <h2
            className="font-clash text-[clamp(32px,3.3vw,48px)] leading-[61.8px] font-medium text-[#111827]"
          >
            Featured Work Gallery
          </h2>
          <p
            className="max-w-[720px] font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]"
          >
            A curated selection of our finest craftsmanship across different
            residential spaces — the meticulous detail in our materials and joinery.
          </p>
        </div>

        {/* Bento grid — desktop 4-col / mobile single col */}
        <div className="hidden lg:grid gap-4 grid-cols-[377px_377px_179px_179px_377px] grid-rows-[185px_185px]">
          {/* Tile 1: tall left portrait (spans 2 rows) */}
          <div className="row-span-2 relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/cabinetry_kitchen_finished_01.png" alt="Custom kitchen cabinetry — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 2: center top */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/custom-white-kitchen-cabinetry.jpg" alt="White kitchen cabinetry remodel — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 4: right small A */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/dark-wood-flooring-installation.jpg" alt="Dark wood flooring installation — Master Cabinets" fill className="object-cover" sizes="179px" />
          </div>
          {/* Tile 5: right small B */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/residential-flooring-installation.jpg" alt="Residential flooring — Master Cabinets" fill className="object-cover" sizes="179px" />
          </div>
          {/* Tile 7: tall right portrait (spans 2 rows) — absolute last col */}
          <div className="row-span-2 relative rounded-[20px] overflow-hidden bg-[#E5DECD] col-start-5 row-start-1 row-end-3">
            <Image src="/images/projects/bathroom_remodel_finished_02.jpg" alt="Luxury master bathroom remodel — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 3: center bottom */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/custom-walk-in-closet-installation.jpg" alt="Walk-in closet installation — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 6: wide bottom (spans 2 small cols) */}
          <div className="col-span-2 relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/projects/custom-outdoor-kitchen-cabinetry.jpg" alt="Outdoor kitchen cabinetry — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
        </div>

        {/* Mobile: horizontal swipeable carousel */}
        <div className="lg:hidden -mx-8">
          <Carousel
            opts={{ align: "start", loop: true, dragFree: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pl-8">
              {TILES.map((tile) => (
                <CarouselItem
                  key={tile.src}
                  className="pl-4 basis-[80vw] max-w-[320px]"
                >
                  <div className="relative h-[260px] w-full rounded-[20px] overflow-hidden bg-[#E5DECD]">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Swipe hint */}
          <p className="text-center text-xs text-[#786F6C] mt-3 font-sans select-none">
            Swipe to explore →
          </p>
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
