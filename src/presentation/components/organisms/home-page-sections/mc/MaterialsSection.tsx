import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

const DETAIL_ITEMS = [
  { num: "01", label: "Wood species" },
  { num: "02", label: "Painted finishes" },
  { num: "03", label: "Natural veneers" },
  { num: "04", label: "Cabinet hardware" },
  { num: "05", label: "Interior accessories" },
  { num: "06", label: "Soft-close systems" },
  { num: "07", label: "Integrated lighting" },
  { num: "08", label: "Countertop coordination" },
  { num: "09", label: "Custom color matching" },
  { num: "10", label: "Drawer organization" },
] as const;

/**
 * MaterialsSection — Figma node 17:2537
 * 2-col: left heading + 10-item detail list, right showcase image.
 */
export default function MaterialsSection() {
  return (
    <section
      className="w-full bg-white px-8 sm:px-16 py-12"
      aria-label="Material craft and architectural details"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Copy + detail list */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-clash text-[clamp(28px,4.2vw,60px)] leading-[61.8px] font-medium text-[#111827]">
                The Difference Is in What You Notice Up Close
              </h2>
              <p className="font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]">
                The character of a space is shaped by the materials you see, the
                details you touch, and the decisions most people never notice.
              </p>
            </div>

            {/* 10-item detail list — 2 column sub-grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {DETAIL_ITEMS.map((item) => (
                <div key={item.num} className="flex items-center gap-3">
                  <span className="font-serif text-[14px] text-[#958272] min-w-[24px]">
                    {item.num}
                  </span>
                  <span className="font-sans text-[16px] text-[#111827]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Showcase image */}
          <div className="relative shrink-0 hidden lg:block rounded-[24px] overflow-hidden bg-[#E5DECD] w-[543px] h-[604px]">
            <Image
              src="/images/materials/wood-grain-detail.webp"
              alt="Wood grain and cabinet joinery close-up — Master Cabinets"
              fill
              className="object-cover"
              sizes="543px"
            />
          </div>
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
