import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/constants/services";
import { ServiceDetailView } from "@/presentation/pages/(public)/services/service-detail.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { BreadcrumbJsonLd } from "@/presentation/components/templates/seo/json-ld";

// ---------------------------------------------------------------------------
// Static params — generates pages at build time for every known service slug
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata — SEO per service
// ---------------------------------------------------------------------------
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Service Not Found | ${COMPANY_NAME}` };
  }

  // Validate hero image — only use absolute URLs for OG images
  const ogImage = service.heroImage?.startsWith("http")
    ? service.heroImage
    : `${SITE_URL}${service.heroImage}`;

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: COMPANY_NAME,
      type: "website",
      ...(service.heroImage && {
        images: [{ url: ogImage, alt: service.seo.metaTitle }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      ...(service.heroImage && { images: [ogImage] }),
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          {
            name: service.breadcrumbLabel,
            url: `${SITE_URL}/services/${service.slug}`,
          },
        ]}
      />
      <ServiceDetailView service={service} />
    </>
  );
}
