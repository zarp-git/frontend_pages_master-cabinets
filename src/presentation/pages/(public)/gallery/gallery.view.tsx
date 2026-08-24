"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMapPinLine,
} from "@remixicon/react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/constants/gallery";
import PageHeading from "@/presentation/components/molecules/mc/PageHeading";
import FilterChips from "@/presentation/components/molecules/mc/FilterChips";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";
import type { GalleryCategory, GalleryItem } from "@/types/gallery.type";

/**
 * GalleryPageView — Figma node 60:12187 (GALLERY).
 *
 * Centered page lockup → filter chips → 3-column card grid (356×345 cards,
 * white, #E5DECD hairline, radius 24, espresso badge over the image) → the shared
 * "We Handle Everything" quote block.
 */
export function GalleryPageView() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <main className="w-full bg-white pt-[92px] sm:pt-[104px] lg:pt-[120px]">
      <section
        className="mx-auto flex max-w-[1360px] flex-col items-center px-4 pb-20 pt-16 sm:px-8"
        aria-label="Project gallery"
      >
        <PageHeading
          kicker="DON'T JUST TAKE OUR WORD FOR IT"
          display="See The BEST of Our Work"
        />

        <FilterChips
          options={GALLERY_CATEGORIES}
          active={activeCategory}
          onChange={(v) => setActiveCategory(v)}
          ariaLabel="Filter projects by category"
          className="mt-12"
        />

        <div className="mt-8 grid w-full max-w-[1100px] grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-20 text-center font-sans text-lg text-[#666666]">
            No projects in this category yet.
          </p>
        )}
      </section>

      <PricingCTASection showPillars={false} />

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onChange={setLightboxIndex}
        />
      )}
    </main>
  );
}

// ---------------------------------------------------------------------------
// Card — Figma `Button` 356×345
// ---------------------------------------------------------------------------
function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full flex-col overflow-hidden rounded-[24px] border border-[#E5DECD] bg-white text-left transition-shadow hover:shadow-[0_9px_22px_rgba(40,31,19,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#958272]"
    >
      <div className="relative h-[266px] w-full overflow-hidden bg-[#E8DFC8]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 354px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-clash text-[11px] font-medium uppercase leading-4 tracking-[0.7px] text-[#403023]">
          {item.badge}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="font-clash text-[20px] font-medium uppercase leading-5 tracking-[-0.2px] text-[#2C1F14]">
          {item.title}
        </h3>
        <span className="flex items-center gap-1.5">
          <RiMapPinLine className="h-[13px] w-[13px] shrink-0 text-[#8A7D6F]" />
          <span className="font-clash text-[13px] font-medium leading-5 text-[#8A7D6F]">
            {item.location}
          </span>
        </span>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------
interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

function Lightbox({ items, currentIndex, onClose, onChange }: LightboxProps) {
  const current = items[currentIndex];
  if (!current) return null;

  const prev = () =>
    onChange(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const next = () =>
    onChange(currentIndex === items.length - 1 ? 0 : currentIndex + 1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={(el) => el?.focus()}
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
      >
        <RiCloseLine className="h-7 w-7 text-white" />
      </button>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
      >
        <RiArrowLeftSLine className="h-7 w-7 text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
      >
        <RiArrowRightSLine className="h-7 w-7 text-white" />
      </button>

      <div className="relative z-10 mx-4 flex w-full max-w-5xl flex-col items-center gap-4">
        <Image
          src={current.src}
          alt={current.title}
          width={1200}
          height={800}
          sizes="90vw"
          className="max-h-[80vh] w-auto rounded-lg object-contain"
        />
        <div className="text-center">
          <h3 className="font-clash text-lg font-medium uppercase text-white">
            {current.title}
          </h3>
          <span className="mt-1 flex items-center justify-center gap-1.5">
            <RiMapPinLine className="h-4 w-4 text-[#958272]" />
            <span className="font-sans text-sm text-neutral-400">
              {current.location}
            </span>
          </span>
          <span className="mt-2 block font-sans text-sm text-neutral-500">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
