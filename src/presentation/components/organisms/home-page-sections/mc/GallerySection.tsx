import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

/**
 * GallerySection — Figma node 48:9792 (GALLERY)
 * 7-tile bento masonry grid. Each tile uses next/image with object-fit cover.
 * On mobile: single-column card stack.
 */

// Tile config: {src, alt, className for grid placement}
const TILES = [
  {
    src: "/images/gallery/gallery-1.webp",
    alt: "Custom kitchen cabinetry — Master Cabinets",
    gridClass: "row-span-2",
  },
  {
    src: "/images/gallery/gallery-2.webp",
    alt: "Bathroom vanity remodel — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/gallery/gallery-3.webp",
    alt: "Walk-in closet installation — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/gallery/gallery-4.webp",
    alt: "Cabinet hardware detail — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/gallery/gallery-5.webp",
    alt: "Wood grain cabinetry detail — Master Cabinets",
    gridClass: "",
  },
  {
    src: "/images/gallery/gallery-6.webp",
    alt: "Outdoor kitchen cabinetry — Master Cabinets",
    gridClass: "col-span-2",
  },
  {
    src: "/images/gallery/gallery-7.webp",
    alt: "Luxury master bathroom — Master Cabinets",
    gridClass: "row-span-2",
  },
] as const;

// Placeholder tile component for missing images
function GalleryTile({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full rounded-[20px] overflow-hidden bg-[#E5DECD] h-[250px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 377px"
      />
    </div>
  );
}

export default function GallerySection() {
  return (
    <section
      className="w-full bg-white px-8 py-10"
      aria-label="Featured work gallery"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Section header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-clash text-[clamp(32px,3.3vw,48px)] leading-[61.8px] font-medium text-[#111827]">
            Featured Work Gallery
          </h2>
          <p className="max-w-[720px] font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]">
            A curated selection of our finest craftsmanship across different
            residential spaces — the meticulous detail in our materials and joinery.
          </p>
        </div>

        {/* Bento grid — desktop 4-col / mobile single col */}
        <div className="hidden lg:grid gap-4 grid-cols-[377px_377px_179px_179px_377px] grid-rows-[185px_185px]">
          {/* Tile 1: tall left portrait (spans 2 rows) */}
          <div className="row-span-2 relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-1.webp" alt="Custom kitchen cabinetry — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 2: center top */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-2.webp" alt="Bathroom vanity remodel — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 4: right small A */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-4.webp" alt="Cabinet hardware detail — Master Cabinets" fill className="object-cover" sizes="179px" />
          </div>
          {/* Tile 5: right small B */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-5.webp" alt="Wood grain cabinetry detail — Master Cabinets" fill className="object-cover" sizes="179px" />
          </div>
          {/* Tile 7: tall right portrait (spans 2 rows) — absolute last col */}
          <div className="row-span-2 col-start-5 row-start-1 relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-7.webp" alt="Luxury master bathroom — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 3: center bottom */}
          <div className="relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-3.webp" alt="Walk-in closet installation — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
          {/* Tile 6: wide bottom (spans 2 small cols) */}
          <div className="col-span-2 relative rounded-[20px] overflow-hidden bg-[#E5DECD]">
            <Image src="/images/gallery/gallery-6.webp" alt="Outdoor kitchen cabinetry — Master Cabinets" fill className="object-cover" sizes="377px" />
          </div>
        </div>

        {/* Mobile: single column stacked */}
        <div className="lg:hidden flex flex-col gap-4">
          {TILES.map((tile) => (
            <GalleryTile key={tile.src} src={tile.src} alt={tile.alt} />
          ))}
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
