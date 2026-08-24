import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

const VALUE_BLOCKS = [
  {
    index: "01",
    title: "One Coordinated Team",
    body: "From structural changes to the final cabinet hinge, filter everything through one point of contact.",
  },
  {
    index: "02",
    title: "Architectural Precision",
    body: "Materials selected for beauty, designed specifically for the exact dimensions of your room.",
  },
  {
    index: "03",
    title: "Certainty Before Production",
    body: "See key design decisions mapped out clearly before any fabrication begins.",
  },
] as const;

const MOSAIC_IMAGES = [
  {
    src: "/images/about/about-1.webp",
    alt: "Craftsman workshop — Master Cabinets",
    className: "w-[303px] h-[246px]",
  },
  {
    src: "/images/about/about-2.webp",
    alt: "Material selection — Master Cabinets",
    className: "w-[303px] h-[246px]",
  },
  {
    src: "/images/about/about-3.webp",
    alt: "Installed cabinetry showcase — Master Cabinets",
    className: "w-[622px] h-[246px]",
  },
] as const;

/**
 * AboutTeamSection — Figma node 17:1855 (Who We Are / Single Team Advantage)
 * 2-col: left photo mosaic, right value proposition copy + 3 value blocks.
 */
export default function AboutTeamSection() {
  return (
    <section
      className="w-full bg-white px-8 md:px-16"
      aria-label="About Master Cabinets"
    >
      <div
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-20 py-15"
      >
        {/* Left: Photo mosaic */}
        <div
          className="shrink-0 hidden lg:flex flex-wrap gap-4 w-[622px]"
        >
          {/* Row 1: 2 small images side by side */}
          <div className="flex gap-4">
            {MOSAIC_IMAGES.slice(0, 2).map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-[20px] bg-[#E5DECD] ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="303px"
                />
              </div>
            ))}
          </div>
          {/* Row 2: wide panorama */}
          <div
            className="relative overflow-hidden rounded-[20px] bg-[#E5DECD] w-[622px] h-[246px]"
          >
            <Image
              src={MOSAIC_IMAGES[2].src}
              alt={MOSAIC_IMAGES[2].alt}
              fill
              className="object-cover"
              sizes="622px"
            />
          </div>
        </div>

        {/* Right: Value proposition */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2
              className="font-clash text-[clamp(28px,3.3vw,48px)] leading-[61.8px] font-medium text-[#111827]"
            >
              Made for Your Space. Built for Your Life.
            </h2>
            <p
              className="font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]"
            >
              Renovations shouldn&apos;t mean managing five different contractors,
              confusing timelines, and miscommunication.
            </p>
          </div>

          {/* 3 value blocks */}
          <div className="flex flex-col gap-6">
            {VALUE_BLOCKS.map((block) => (
              <div key={block.index} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className="font-clash text-[16px] font-medium text-[#111827]"
                  >
                    {block.title}
                  </span>
                  <span
                    className="font-serif text-[18px] text-[#968272]"
                    aria-hidden="true"
                  >
                    {block.index}
                  </span>
                </div>
                <p
                  className="font-sans text-[16px] leading-[26px] font-normal text-[#4B5563]"
                >
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <ActionButtonGroup />
        </div>
      </div>
    </section>
  );
}
