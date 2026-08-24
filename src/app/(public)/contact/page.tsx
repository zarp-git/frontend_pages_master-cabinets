import type { Metadata } from "next";
import { ContactPageView } from "@/presentation/pages/(public)/contact/contact.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { BreadcrumbJsonLd } from "@/presentation/components/templates/seo/json-ld";

export const metadata: Metadata = {
  title: `Contact Us | Get a Free Quote | ${COMPANY_NAME}`,
  description:
    "Contact Master Cabinets LLC in Naples, FL for custom cabinetry and full home remodeling quotes. Call (239) 255-2050 or submit our free consultation form.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${COMPANY_NAME}`,
    description:
      "Get in touch with Master Cabinets LLC for custom cabinetry and home remodeling in South Florida.",
    url: `${SITE_URL}/contact`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${COMPANY_NAME}`,
    description:
      "Get in touch with Master Cabinets LLC for custom cabinetry and home remodeling in South Florida.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ]}
      />
      <ContactPageView />
    </>
  );
}
