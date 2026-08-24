import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";

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
 * FeaturesSection — Figma node 17:2464 (FEATURES).
 *
 * Outer bezel (pad 60/64, radius 32, 0 24px 80px rgba(0,0,0,.18)) wrapping a
 * #968272 taupe panel (radius 26, pad 64, gap 48). Centered white heading,
 * single-column numbered list (Times italic numeral + Clash statement),
 * centered CTA pair.
 */
export default function FeaturesSection() {
  return (
    <section
      className="w-full bg-white px-4 py-10 sm:px-8 lg:px-16 lg:py-[60px]"
      aria-label="Why choose Master Cabinets"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[32px] bg-white/[0.06] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col items-center gap-12 rounded-[26px] bg-[#968272] px-6 py-12 shadow-[0_1px_1px_rgba(255,255,255,0.15)] sm:px-10 lg:px-16 lg:py-16">
            <SectionHeading
              line1="What Changes When Every"
              line2="Detail Has a"
              accent="Purpose"
              align="center"
              size={64}
              tone="white"
              className="max-w-[1024px] pt-4 lg:pt-8"
            />

            <ol className="flex w-full max-w-[1160px] flex-col gap-10 pt-6 lg:gap-12 lg:pt-16">
              {FEATURES.map((feature) => (
                <li
                  key={feature.number}
                  className="flex items-start gap-6 sm:gap-10 lg:gap-16"
                >
                  <span
                    className="shrink-0 font-serif italic text-[44px] leading-none text-white/35 sm:text-[56px] lg:text-[72px]"
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>
                  <p className="font-clash text-[clamp(20px,2.6vw,36px)] font-medium leading-[1.25] tracking-[-0.02em] text-white">
                    {feature.statement}
                  </p>
                </li>
              ))}
            </ol>

            <ActionButtonGroup className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
