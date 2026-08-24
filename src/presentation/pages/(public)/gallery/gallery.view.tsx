"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/presentation/components/atoms/ui/button";
import {
  RiPhoneLine,
  RiArrowRightLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMapPinLine,
  RiZoomInLine,
} from "@remixicon/react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/constants/gallery";
import { useLeadModal } from "@/hooks/use-lead-modal";
import { PageHero } from "@/presentation/components/organisms/common/PageHero";
import type { GalleryCategory, GalleryItem } from "@/types/gallery.type";

// ===========================================================================
// Root view
// ===========================================================================
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
    <main>
      <GalleryHero />
      <GalleryGrid
        items={filteredItems}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onImageClick={openLightbox}
      />
      <GalleryCta />

      {/* Lightbox */}
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

// ===========================================================================
// 1 -- Hero
// ===========================================================================
function GalleryHero() {
  return (
    <PageHero
      image="/images/hero/zarp-logomark-black.png"
      imageAlt="Project gallery"
      eyebrow="[Gallery eyebrow — e.g. 'Our Work Speaks for Itself']"
      heading="Project Gallery"
      subheading="[Gallery sub-heading — describe the projects shown and what they reflect about the company's quality and commitment.]"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Gallery" },
      ]}
    />
  );
}

// ===========================================================================
// 2 -- Gallery Grid with Filters
// ===========================================================================
interface GalleryGridProps {
  items: GalleryItem[];
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
  onImageClick: (index: number) => void;
}

function GalleryGrid({
  items,
  activeCategory,
  onCategoryChange,
  onImageClick,
}: GalleryGridProps) {
  return (
    <section id="gallery-grid" className="py-14 lg:py-20 bg-gray-50">
      <div className="section-container">
        {/* Category filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-xl border border-primary overflow-x-auto scrollbar-hide">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => onCategoryChange(cat.value)}
                className={cn(
                  "px-3 py-2 rounded-lg text-xs md:text-sm font-normal font-rubik leading-tight whitespace-nowrap transition-all cursor-pointer",
                  activeCategory === cat.value
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-gray-500 text-sm font-rubik mb-6">
          Showing{" "}
          <span className="font-semibold text-gray-700">{items.length}</span>{" "}
          {items.length === 1 ? "project" : "projects"}
        </p>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => onImageClick(index)}
            />
          ))}
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-rubik">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ===========================================================================
// 2a -- Gallery Card
// ===========================================================================
function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  const isPlaceholder = item.src.includes("zarp-logomark-black");
  const height = item.featured ? 500 : 400;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full break-inside-avoid rounded-xl overflow-hidden cursor-pointer block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div
        className={isPlaceholder ? "bg-gray-700 flex items-center justify-center" : ""}
        style={{ height: isPlaceholder ? height : undefined }}
      >
        <Image
          src={item.src}
          alt={item.title}
          width={600}
          height={height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={
            isPlaceholder
              ? "w-32 h-auto object-contain opacity-30"
              : "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          }
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <h3 className="text-white text-base font-semibold font-hanken uppercase leading-tight mb-1">
          {item.title}
        </h3>
        {item.location && (
          <div className="flex items-center gap-1.5">
            <RiMapPinLine className="size-3.5 text-secondary" />
            <span className="text-neutral-300 text-sm font-rubik">
              {item.location}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 size-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <RiZoomInLine className="size-5 text-white" />
        </div>
      </div>
    </button>
  );
}

// ===========================================================================
// 3 -- Lightbox
// ===========================================================================
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
      className="fixed inset-0 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={(el) => el?.focus()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
      >
        <RiCloseLine className="size-7 text-white" />
      </button>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
      >
        <RiArrowLeftSLine className="size-7 text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
      >
        <RiArrowRightSLine className="size-7 text-white" />
      </button>

      {/* Image + info */}
      <div className="relative z-10 max-w-5xl w-full mx-4 flex flex-col items-center gap-4">
        <div className="relative w-full max-h-[80vh] flex items-center justify-center">
          <Image
            src={current.src}
            alt={current.title}
            width={1200}
            height={800}
            sizes="90vw"
            className="object-contain max-h-[80vh] w-auto rounded-lg"
          />
        </div>

        {/* Caption */}
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold font-hanken uppercase">
            {current.title}
          </h3>
          {current.location && (
            <div className="flex items-center justify-center gap-1.5 mt-1">
              <RiMapPinLine className="size-4 text-secondary" />
              <span className="text-neutral-400 text-sm font-rubik">
                {current.location}
              </span>
            </div>
          )}
          <span className="text-neutral-500 text-sm font-rubik mt-2 block">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

// ===========================================================================
// 4 -- CTA Close
// ===========================================================================
function GalleryCta() {
  const { openModal } = useLeadModal();

  return (
    <section id="gallery-cta" className="py-14 lg:py-20 bg-white">
      <div className="section-container">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <Image
            src="/images/hero/zarp-logomark-black.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 flex flex-col items-start gap-6">
            <h2 className="text-white text-2xl md:text-3xl font-semibold font-rubik leading-tight md:leading-10 max-w-lg">
              {/* Gallery CTA headline — invite the user to start their own project */}
              [Gallery CTA headline — e.g. "Like What You See?"]{" "}
              <span className="font-normal">
                {/* Gallery CTA sub-line — reinforce the next step */}
                [Gallery CTA sub-line — e.g. "Let&apos;s bring your vision to life."]
              </span>
            </h2>

            <Button
              variant="brick-outline"
              size="lg"
              className="h-12 px-8 py-4 rounded-lg border-2 border-white bg-transparent text-white hover:bg-white/10 flex items-center gap-4"
              onClick={openModal}
            >
              <span className="uppercase text-base font-medium">
                book a free consultation
              </span>
              <RiPhoneLine className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
