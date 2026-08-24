import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocationBySlug, getAllLocationSlugs } from "@/constants/locations";
import { LocationDetailView } from "@/presentation/pages/(public)/locations/location-detail.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import {
  BreadcrumbJsonLd,
  LocationLocalBusinessJsonLd,
} from "@/presentation/components/templates/seo/json-ld";

// ---------------------------------------------------------------------------
// Static params — generates pages at build time for every known location slug
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata — SEO per location
// ---------------------------------------------------------------------------
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: `Location Not Found | ${COMPANY_NAME}` };
  }

  // Validate hero image — only use absolute URLs for OG images
  const ogImage = location.heroImage?.startsWith("http")
    ? location.heroImage
    : `${SITE_URL}${location.heroImage}`;

  return {
    title: location.seo.metaTitle,
    description: location.seo.metaDescription,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
      url: `${SITE_URL}/locations/${location.slug}`,
      siteName: COMPANY_NAME,
      type: "website",
      ...(location.heroImage && {
        images: [{ url: ogImage, alt: location.seo.metaTitle }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
      ...(location.heroImage && { images: [ogImage] }),
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Locations", url: `${SITE_URL}/locations` },
          {
            name: location.breadcrumbLabel,
            url: `${SITE_URL}/locations/${location.slug}`,
          },
        ]}
      />
      <LocationLocalBusinessJsonLd
        slug={location.slug}
        cityName={location.title}
        metaDescription={location.seo.metaDescription}
      />
      <LocationDetailView location={location} />
    </>
  );
}
