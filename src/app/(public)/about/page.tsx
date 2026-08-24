import type { Metadata } from "next";
import { AboutPageView } from "@/presentation/pages/(public)/about/about.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { BreadcrumbJsonLd } from "@/presentation/components/templates/seo/json-ld";

export const metadata: Metadata = {
  title: `About Us | 25+ Years of Craftsmanship | ${COMPANY_NAME}`,
  description:
    "Learn about Master Cabinets LLC - over 25 years helping South Florida homeowners remodel kitchens, bathrooms, and complete interiors with one coordinated team.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${COMPANY_NAME}`,
    description:
      "For more than 25 years, Master Cabinets has helped South Florida homeowners remodel their homes end to end. Licensed & Insured.",
    url: `${SITE_URL}/about`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${COMPANY_NAME}`,
    description:
      "Over 25 years of custom cabinetry and home remodeling craftsmanship in South Florida.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ]}
      />
      <AboutPageView />
    </>
  );
}
