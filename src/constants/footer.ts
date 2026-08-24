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
  { label: "[City 1]", href: "/locations/city-1" },
  { label: "[City 2]", href: "/locations/city-2" },
  { label: "[City 3]", href: "/locations/city-3" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Faq", href: "/faq" },
] as const;

export const FOOTER_SERVICES = [
  { label: "[Service 1]", href: "/services/service-1" },
  { label: "[Service 2]", href: "/services/service-2" },
  { label: "[Service 3]", href: "/services/service-3" },
  { label: "[Service 4]", href: "/services/service-4" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
] as const;
