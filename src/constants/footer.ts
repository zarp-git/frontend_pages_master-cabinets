import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  ADDRESS,
  PHONE,
  BUSINESS_HOURS,
} from "./business-info";

export const FOOTER_COMPANY_INFO = {
  name: COMPANY_NAME,
  tagline: COMPANY_TAGLINE,
  address: {
    label: ADDRESS.label,
    street: ADDRESS.street,
  },
  contact: {
    hours: BUSINESS_HOURS.footerDisplay,
    phone: PHONE.display,
    phoneDisplay: PHONE.display,
  },
} as const;

export const FOOTER_LOCATIONS = [
  { label: "Naples", href: "/locations/naples" },
  { label: "Bonita Springs", href: "/locations/bonita-springs" },
  { label: "Fort Myers", href: "/locations/fort-myers" },
  { label: "Estero", href: "/locations/estero" },
  { label: "Marco Island", href: "/locations/marco-island" },
  { label: "Miami", href: "/locations/miami" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Faq", href: "/faq" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Home Remodeling", href: "/services/home-remodeling" },
  { label: "Custom Cabinetry", href: "/services/custom-cabinetry" },
  { label: "Bathrooms & Vanities", href: "/services/bathrooms-vanities" },
  { label: "Walk-In Closets", href: "/services/walk-in-closets" },
  { label: "Flooring", href: "/services/flooring" },
  { label: "Painting", href: "/services/painting" },
  { label: "Outdoor Living", href: "/services/outdoor-living" },
  { label: "Architectural Millwork", href: "/services/millwork" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
] as const;
