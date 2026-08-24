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
// TODO: Confirm legal entity name with client
export const COMPANY_NAME = "Master Cabinets" as const;

/** One-liner used in meta descriptions and schema */
// TODO: Confirm final description with client
export const COMPANY_DESCRIPTION =
  "Premium custom cabinet installation and design services for kitchens, bathrooms, and living spaces in South Florida." as const;

/** Tagline used in the footer and about sections */
// TODO: Confirm tagline with client
export const COMPANY_TAGLINE =
  "Crafting Beautiful Spaces, One Cabinet at a Time." as const;

// ---------------------------------------------------------------------------
// NAP (Name, Address, Phone)
// ---------------------------------------------------------------------------
// TODO: Verify all address details with client before launch
export const ADDRESS = {
  label: "Master Cabinets HQ",
  street: "2850 NW 27th Ave",
  fullStreet: "2850 NW 27th Ave, Miami, FL 33142, US",
  city: "Miami",
  region: "FL",
  postalCode: "33142",
  country: "US",
} as const;

// TODO: Verify GPS coordinates with client
export const GEO = {
  latitude: 25.7923,
  longitude: -80.2495,
} as const;

// TODO: Replace with real phone number before launch
export const PHONE = {
  /** Display format for UI */
  display: "+1 (786) 555-0182",
  /** tel: href format */
  href: "tel:+17865550182",
  /** Raw digits with country code for WhatsApp, etc. */
  raw: "+17865550182",
  /** Schema.org / JSON-LD format */
  schema: "+1-786-555-0182",
} as const;

// TODO: Replace with real email before launch
export const EMAIL = "info@mastercabinets.com" as const;

export const BUSINESS_HOURS = {
  display: "Mon-Sat: 9:00 AM - 5:00 PM",
  footerDisplay: "FROM MON TO SAT : 9AM - 5PM",
  schema: "Mo-Sa 09:00-17:00",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as readonly string[],
  opens: "09:00",
  closes: "17:00",
} as const;

// ---------------------------------------------------------------------------
// Social & Maps
// ---------------------------------------------------------------------------
// TODO: Update all social links with real handles before launch
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${PHONE.raw}`,
  instagram: "https://www.instagram.com/mastercabinets/",
  facebook: "https://www.facebook.com/mastercabinets/",
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
