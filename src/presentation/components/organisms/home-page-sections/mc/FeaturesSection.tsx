import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

const FEATURES = [
  {
    number: "01",
    statement:
      "Make better use of every inch of your home without making rooms feel crowded.",
  },
  {
    number: "02",
    statement:
      "Work with one coordinated team from the first measurements through installation.",
  },
  {
    number: "03",
    statement:
      "Replace generic finishes with materials selected specifically for your architecture.",
  },
  {
    number: "04",
    statement:
      "Reduce uncertainty by seeing key design decisions before any fabrication begins.",
  },
] as const;

/**
 * FeaturesSection — Figma node 17:2464 (FEATURES / Key Differentiators)
 * Section heading + 2x2 grid of large numbered feature blocks.
 */
export default function FeaturesSection() {
  return (
    <section
      className="w-full bg-[#F9FAFB] px-8 sm:px-16 py-[60px]"
      aria-label="Why choose Master Cabinets"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div>
          <h2 className="font-clash text-[clamp(36px,4.4vw,64px)] leading-[72px] font-medium text-[#111827]">
            What Changes When Every
          </h2>
          <span className="font-clash text-[clamp(36px,4.4vw,64px)] leading-[72px] font-medium text-[#958272]">
            Detail Has a Purpose
          </span>
        </div>

        {/* 2x2 Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.number} className="flex flex-col gap-4">
              <span
                className="font-serif text-[72px] font-normal text-[#958272] leading-none"
                aria-hidden="true"
              >
                {feature.number}
              </span>
              <p className="font-clash text-[clamp(22px,2.5vw,36px)] leading-[45px] font-medium text-[#111827]">
                {feature.statement}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <ActionButtonGroup />
      </div>
    </section>
  );
}
