import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS_DATA } from "@/constants/locations";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

export const metadata: Metadata = {
  title: `Service Locations | ${COMPANY_NAME}`,
  description: `Find ${COMPANY_NAME} services near you. We serve multiple cities and regions — select your location to learn more.`,
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: `Service Locations | ${COMPANY_NAME}`,
    description: `Find ${COMPANY_NAME} services near you.`,
    url: `${SITE_URL}/locations`,
    siteName: COMPANY_NAME,
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Service Locations</h1>
      <p className="text-lg text-gray-600 mb-12">
        We proudly serve customers across multiple cities and regions. Select your location to see available services.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS_DATA.map((location) => (
          <Link
            key={location.slug}
            href={`/locations/${location.slug}`}
            className="group block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {location.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {location.seo.metaDescription}
            </p>
            <span className="text-sm font-medium text-primary">
              View services →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
