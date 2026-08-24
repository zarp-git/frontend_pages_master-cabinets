import type { Metadata } from "next";
import IntroSection from "@/presentation/components/organisms/home-page-sections/IntroSection";
import DifferentialsSection from "@/presentation/components/organisms/home-page-sections/DifferentialsSection";
import GalleryComparison from "@/presentation/components/organisms/home-page-sections/GalleryComparison";
import HeroCarousel from "@/presentation/components/organisms/home-page-sections/HeroCarousel";
import FeedbackSection from "@/presentation/components/organisms/home-page-sections/FeedbackSection";
import FaqSection from "@/presentation/components/organisms/home-page-sections/FaqSection";
import AboutSection from "@/presentation/components/organisms/home-page-sections/AboutSection";
import { ComparisonSection } from "@/presentation/components/organisms/home-page-sections/ComparisonSection";
import { InstallationTrustSection } from "@/presentation/components/organisms/home-page-sections/InstallationTrustSection";
import { ServicesSection } from "@/presentation/components/organisms/home-page-sections/ServicesSection";
import { CtaSection } from "@/presentation/components/organisms/home-page-sections/CtaSection";
import { OurWorkSection } from "@/presentation/components/organisms/home-page-sections/OurWorkSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <IntroSection />
      <AboutSection />
      <DifferentialsSection />
      <ServicesSection />
      <FeedbackSection />
      <ComparisonSection />
      <InstallationTrustSection />
      <OurWorkSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
