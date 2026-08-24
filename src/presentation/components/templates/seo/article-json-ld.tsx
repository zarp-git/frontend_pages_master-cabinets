"use client";

import { JsonLd } from "./json-ld";
import {
  SITE_URL,
  COMPANY_NAME,
  PHONE,
  EMAIL,
  SCHEMA_ADDRESS,
  SCHEMA_GEO,
  BUSINESS_HOURS,
  SOCIAL_LINKS,
} from "@/constants/business-info";

// Article structured data — replace with content relevant to your business
export const ArticleJsonLd = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${COMPANY_NAME}: [Main article headline about the company's services]`,
    description: "[Article description — summarize the main services and service area.]",
    image: [
      `${SITE_URL}/images/hero/logo.png`,
    ],
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/hero/logo.png`,
      },
    },
    // Replace with actual publication dates — do not leave as hardcoded strings
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
    },
    keywords: [
      // Replace with keywords relevant to your business and service area
      "[company name]",
      "[main service keyword]",
      "[service keyword 2]",
      "[service keyword 3]",
      "[service keyword 4]",
      "[service keyword 5]",
      "[city/region keyword 1]",
      "[city/region keyword 2]",
      "[industry keyword]",
    ],
    articleSection: "[Article section — e.g. 'Home Improvement']",
    // wordCount omitted — do not hardcode a guess; omit or compute dynamically from real content
    inLanguage: "en-US",
  };

  return <JsonLd data={articleData} id="article-json-ld" />;
};

// Local business structured data — replace with your own business details
export const LocalBusinessJsonLd = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY_NAME,
    // legalName: used when the legal entity name differs from the display name (§18.7)
    legalName: "[Legal entity name — e.g. 'Acme Corporation LLC']",
    description: "[Description of the business: type, main services, and service area.]",
    url: SITE_URL,
    telephone: PHONE.schema,
    email: EMAIL,
    address: SCHEMA_ADDRESS,
    geo: SCHEMA_GEO,
    openingHours: BUSINESS_HOURS.schema,
    // foundingDate: contributes to entity trust in Knowledge Panel (§18.7)
    foundingDate: "[Founding year — e.g. '2015']",
    priceRange: "[Price range — e.g. $$]",
    paymentAccepted: "[Accepted payment methods]",
    currenciesAccepted: "[Currency — e.g. USD]",
    // sameAs: all active social profiles + Google Maps place URL (§18.7)
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.googleMaps,
    ],
    areaServed: [
      // Replace with the cities/regions your business serves — use AREAS_SERVED constant from SSOT
      { "@type": "City", name: "[City 1]" },
      { "@type": "City", name: "[City 2]" },
      { "@type": "City", name: "[City 3]" },
      { "@type": "City", name: "[City 4]" },
      { "@type": "City", name: "[City 5]" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "[Service catalog name — e.g. 'Our Services']",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "[Service 1 name]",
            description: "[Service 1 description — what it includes and who it's for.]",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "[Service 2 name]",
            description: "[Service 2 description.]",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "[Service 3 name]",
            description: "[Service 3 description.]",
          },
        },
      ],
    },
  };

  return <JsonLd data={localBusinessData} id="local-business-json-ld" />;
};

// Website structured data
export const WebSiteJsonLd = () => {
  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    // alternateName should be a DIFFERENT name people might search for (e.g. "Orlando Roofing")
    // Not a copy of name — replace the placeholder below with a real alternate search name
    alternateName: "[Alternate search name — e.g. 'Your City Service Name']",
    url: SITE_URL,
    description: "[Website description — services offered and service area.]",
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    // NOTE: potentialAction/SearchAction removed — only add back if a real /search route exists.
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/hero/logo.png`,
      },
    },
  };

  return <JsonLd data={webSiteData} id="website-json-ld" />;
};
