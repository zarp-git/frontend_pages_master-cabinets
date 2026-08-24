export * from "./footer";
export * from "./navigation";
export * from "./services";
export * from "./locations";
export * from "./testimonials";
export * from "./service-images";
export * from "./business-info";

import {
  PHONE,
  EMAIL,
  BUSINESS_HOURS,
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  SITE_URL,
} from "./business-info";

// Site configuration (derived from SSOT)
export const SITE_CONFIG = {
  name: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  url: SITE_URL,
  logo: "/images/hero/logo.png",
} as const;

// Contact convenience object (derived from SSOT)
export const CONTACT = {
  email: EMAIL,
  phoneDisplay: PHONE.display,
  phoneHref: PHONE.href,
  phoneRaw: PHONE.raw,
  hours: BUSINESS_HOURS.display,
} as const;

// Consent & privacy
export const CONSENT_STORAGE_KEY = "zarp_consent_choice_v1" as const;
