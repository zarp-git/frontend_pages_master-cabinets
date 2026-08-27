import type { Metadata } from "next";
import HeroSection from "@/presentation/components/organisms/home-page-sections/mc/HeroSection";
import ReviewsSection from "@/presentation/components/organisms/home-page-sections/mc/ReviewsSection";
import GallerySection from "@/presentation/components/organisms/home-page-sections/mc/GallerySection";
import ServicesSection from "@/presentation/components/organisms/home-page-sections/mc/ServicesSection";
import FeaturesSection from "@/presentation/components/organisms/home-page-sections/mc/FeaturesSection";
import AboutTeamSection from "@/presentation/components/organisms/home-page-sections/mc/AboutTeamSection";
import MaterialsSection from "@/presentation/components/organisms/home-page-sections/mc/MaterialsSection";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

/**
 * Homepage - Figma node 17:1781
 * Implements all 10 sections per Helena's design spec (20260824):
 * Hero → Reviews → Gallery → Services → Features → About → Materials → FAQ → PricingCTA → Footer
 * Footer is rendered by the layout.
 */
export default function Home() {
  return (
    <main>
      {/* Section 1 covers its own header spacer via padding-top: 120px */}
      <HeroSection />
      {/* Section 2: Reviews */}
      <ReviewsSection />
      {/* Section 3: Gallery */}
      <GallerySection />
      {/* Section 4: Services interactive */}
      <ServicesSection />
      {/* Section 5: Differentiators 2x2 */}
      <FeaturesSection />
      {/* Section 6: Who We Are */}
      <AboutTeamSection />
      {/* Section 7: Material craft */}
      <MaterialsSection />
      {/* Section 8: FAQ */}
      <FAQSection />
      {/* Section 9+10: Pricing CTA (footer rendered by layout) */}
      <PricingCTASection />
    </main>
  );
}
