import Image from "next/image";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";

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
 * MaterialsSection — Figma node 17:2537.
 *
 * Left: 60px heading lockup + a bezelled white card holding the 10 detail rows
 * in a 2-column grid (356×56 cells, 16/24 padding). Right: 555×616 bezel with a
 * raised 0 24px 80px shadow around the material close-up.
 */
export default function MaterialsSection() {
  return (
    <section
      className="w-full bg-white px-4 py-12 sm:px-8 lg:px-16"
      aria-label="Material craft and architectural details"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 xl:flex-row xl:gap-8">
        {/* Left: copy + detail card */}
        <div className="flex w-full min-w-0 flex-col gap-8 xl:max-w-[725px]">
          <SectionHeading
            line1="The Difference Is in"
            line2="What You Notice"
            accent="Up Close"
            size={60}
            subtitle="The character of a space is shaped by the materials you see, the details you touch, and the decisions most people never notice."
          />

          <div className="rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_0_0_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 rounded-[26px] bg-white shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:grid-cols-2">
              {DETAIL_ITEMS.map((item) => (
                <div
                  key={item.num}
                  className="flex h-14 items-center gap-4 px-6"
                >
                  <span
                    className="w-6 shrink-0 font-serif italic text-[14px] text-[#958272]"
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>
                  <span className="font-sans text-[16px] text-[#403023]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ActionButtonGroup />
        </div>

        {/* Right: showcase image */}
        <div className="hidden w-full rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] xl:block xl:w-[555px] xl:shrink-0">
          <div className="relative h-[604px] w-full overflow-hidden rounded-[26px] bg-[#F0F0F0] shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
            <Image
              src="/images/projects/various-wood-colors-options.png"
              alt="Wood species and finish samples — Master Cabinets"
              fill
              className="object-cover"
              sizes="543px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
