import type { Metadata } from "next";
import { ReviewsPageView } from "@/presentation/pages/(public)/reviews/reviews.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { BreadcrumbJsonLd } from "@/presentation/components/templates/seo/json-ld";

export const metadata: Metadata = {
  title: `Client Reviews & Testimonials | ${COMPANY_NAME}`,
  description:
    "Read real client reviews and testimonials for Master Cabinets LLC. Trusted by homeowners across Naples, Bonita Springs, and South Florida for over 25 years.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: `Client Reviews & Testimonials | ${COMPANY_NAME}`,
    description:
      "Read real client reviews and testimonials for Master Cabinets LLC. 25+ years of craftsmanship in South Florida.",
    url: `${SITE_URL}/reviews`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Client Reviews | ${COMPANY_NAME}`,
    description:
      "Read real client reviews and testimonials for Master Cabinets LLC.",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Reviews", url: `${SITE_URL}/reviews` },
        ]}
      />
      <ReviewsPageView />
    </>
  );
}
