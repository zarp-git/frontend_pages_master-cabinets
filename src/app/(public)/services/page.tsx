import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/constants/services";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

export const metadata: Metadata = {
  title: `Our Services | ${COMPANY_NAME}`,
  description: `Explore all services offered by ${COMPANY_NAME}. Click a service to learn more about what we offer.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Our Services | ${COMPANY_NAME}`,
    description: `Explore all services offered by ${COMPANY_NAME}.`,
    url: `${SITE_URL}/services`,
    siteName: COMPANY_NAME,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg text-gray-600 mb-12">
        We offer a wide range of professional services. Select a service below to learn more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {service.seo.metaDescription}
            </p>
            <span className="text-sm font-medium text-primary">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
