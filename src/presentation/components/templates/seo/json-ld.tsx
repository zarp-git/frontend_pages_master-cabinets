import {
  SITE_URL,
  COMPANY_NAME,
  PHONE,
  EMAIL,
  SCHEMA_ADDRESS,
  SCHEMA_GEO,
  SOCIAL_LINKS,
  BUSINESS_HOURS,
} from "@/constants/business-info";

interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

/**
 * Renders structured data as a native <script> on the server.
 *
 * next/script is built for loading and executing JavaScript: with its default
 * afterInteractive strategy it injects the tag client-side, so the markup was
 * absent from the SSR HTML that crawlers actually read. Next's own JSON-LD
 * guide calls a plain <script> the right tool here. `<` is escaped to keep a
 * string in the data from being able to close the tag.
 */
export const JsonLd = ({ data, id = "json-ld" }: JsonLdProps) => {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
};

// FAQ structured data - dynamically built from FAQ items
interface FAQJsonLdProps {
  faq: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
}

export const FAQJsonLd = ({ faq }: FAQJsonLdProps) => {
  if (!faq || faq.length === 0) return null;

  const validFaq = faq.filter(
    (item) =>
      item.question &&
      item.answer &&
      item.question.trim() !== "" &&
      item.answer.trim() !== "",
  );

  if (validFaq.length === 0) return null;

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaq.map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    })),
  };

  return <JsonLd data={faqStructuredData} id="faq-json-ld" />;
};

// Organization structured data - replace with your own company details
export const OrganizationJsonLd = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    description: "Master Cabinets LLC is a South Florida custom cabinetry and home remodeling company serving Naples, Bonita Springs, Fort Myers, and surrounding areas. We specialize in custom cabinets, kitchen and bathroom remodeling, flooring, and full home renovations.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/hero/logo.png`,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.googleMaps,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: PHONE.schema,
      availableLanguage: "English, Spanish",
    },
    address: SCHEMA_ADDRESS,
  };

  return <JsonLd data={organizationData} id="organization-json-ld" />;
};

// Breadcrumb structured data - dynamically built from breadcrumb items
export const BreadcrumbJsonLd = ({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={breadcrumbData} id="breadcrumb-json-ld" />;
};

