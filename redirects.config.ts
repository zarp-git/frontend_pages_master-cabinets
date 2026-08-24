import type { Redirect } from "next/dist/lib/load-custom-routes";

// ---------------------------------------------------------------------------
// Redirect rules for this fork.
//
// Add entries here when migrating from a previous site (WordPress, Wix, etc.)
// or when restructuring URLs. Use permanent: true (301) for all production
// redirects — permanent: false (302) only for temporary maintenance pages.
//
// Categories help keep the file scannable and avoid duplicate entries.
// ---------------------------------------------------------------------------

const blogRedirects: Redirect[] = [
  // Example: { source: "/post/:slug*", destination: "/blog/:slug*", permanent: true },
];

const serviceRedirects: Redirect[] = [
  // Example: { source: "/old-service-slug", destination: "/services/new-slug", permanent: true },
];

const locationRedirects: Redirect[] = [
  // Example: { source: "/service-areas", destination: "/locations/main-city", permanent: true },
];

const galleryRedirects: Redirect[] = [
  // Example: { source: "/old-gallery", destination: "/gallery", permanent: true },
];

const miscRedirects: Redirect[] = [
  // Pages with no equivalent — redirect to homepage
  // Example: { source: "/about-us", destination: "/", permanent: true },
  // Example: { source: "/contact-us", destination: "/", permanent: true },
];

export const allRedirects: Redirect[] = [
  ...blogRedirects,
  ...serviceRedirects,
  ...locationRedirects,
  ...galleryRedirects,
  ...miscRedirects,
];
