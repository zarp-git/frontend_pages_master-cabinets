// ---------------------------------------------------------------------------
// GITKEEP: This file is the Single Source of Truth (SSOT) for all business
// identity data used across the project. ALL NAP (Name, Address, Phone),
// URL, geo, social, and branding constants MUST be sourced from here.
//
// DO NOT duplicate this data in other constant files, JSON-LD schemas,
// page components, or config files. Import from this file instead.
// ---------------------------------------------------------------------------

/**
 * Canonical site URL. Used for SEO, JSON-LD, sitemap, robots, Open Graph, etc.
 * Falls back to the production domain when the env var is not set.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");

/** Legal / display company name */
export const COMPANY_NAME = "Master Cabinets" as const;

/** One-liner used in meta descriptions and schema */
export const COMPANY_DESCRIPTION =
  "Premium custom cabinet installation, remodeling, and design services for kitchens, bathrooms, closets, and living spaces in South Florida." as const;

/** Tagline used in the footer and about sections */
export const COMPANY_TAGLINE =
  "Remodeling, Cabinetry, and Everything Between." as const;

// ---------------------------------------------------------------------------
// NAP (Name, Address, Phone)
// ---------------------------------------------------------------------------
// TODO: Real street address needed — confirm with client before launch
export const ADDRESS = {
  label: "Master Cabinets LLC",
  street: "TODO: Real address needed",
  fullStreet: "Naples, FL 34102, US",
  city: "Naples",
  region: "FL",
  postalCode: "34102",
  country: "US",
} as const;

export const GEO = {
  latitude: 26.142,
  longitude: -81.7948,
} as const;

export const PHONE = {
  /** Display format for UI */
  display: "+1 (239) 255-2050",
  /** tel: href format */
  href: "tel:+12392552050",
  /** Raw digits with country code for WhatsApp, etc. */
  raw: "+12392552050",
  /** Schema.org / JSON-LD format */
  schema: "+1-239-255-2050",
} as const;

export const PHONE_SECONDARY = {
  display: "+1 (772) 828-7875",
  href: "tel:+17728287875",
  raw: "+17728287875",
  schema: "+1-772-828-7875",
} as const;

export const EMAIL = "mastercabinetsllc@gmail.com" as const;

export const BUSINESS_HOURS = {
  display: "Mon-Sun: 8:00 AM - 8:00 PM",
  footerDisplay: "MON - SUN : 8AM - 8PM",
  schema: "Mo-Su 08:00-20:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as readonly string[],
  opens: "08:00",
  closes: "20:00",
} as const;

// ---------------------------------------------------------------------------
// Social & Maps
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${PHONE.raw}`,
  instagram: "https://www.instagram.com/mastercabinetsllc/",
  facebook: "https://www.facebook.com/mastercabinetsllc/",
  googleMaps: "https://www.google.com/maps",
} as const;

export const GOOGLE_MAPS_EMBED_URL = "" as const;

// ---------------------------------------------------------------------------
// Convenience: Schema.org PostalAddress block (reusable in JSON-LD)
// ---------------------------------------------------------------------------
export const SCHEMA_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: ADDRESS.street,
  addressLocality: ADDRESS.city,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
} as const;

export const SCHEMA_GEO = {
  "@type": "GeoCoordinates" as const,
  latitude: GEO.latitude,
  longitude: GEO.longitude,
} as const;
