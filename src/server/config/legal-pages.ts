import { LegalPageConfig } from "@/types/legal-metadata";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

const LAST_UPDATED = "April 6, 2026";
const BASE_URL = SITE_URL;
const COMMON_KEYWORDS = [
  COMPANY_NAME,
  "[main service keyword]",
  "[service area / region]",
];

const createMetadata = (
  title: string,
  description: string,
  keywords: string[],
  path: string,
) => ({
  title: `${title} | ${COMPANY_NAME}`,
  description,
  keywords: [...COMMON_KEYWORDS, ...keywords],
  lastUpdated: LAST_UPDATED,
  canonical: `/${path}`,
});

export const legalPagesConfig: Record<string, LegalPageConfig> = {
  "terms-of-use": {
    title: "Terms of Use",
    description:
      "[Terms of Use description — conditions governing the use of the website and the company's services.]",
    lastUpdated: LAST_UPDATED,
    icon: "FileText",
    metadata: createMetadata(
      "Terms of Use",
      "[Meta description for Terms of Use page.]",
      [
        "terms of use",
        "terms and conditions",
        "website terms",
      ],
      "terms-of-use",
    ),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "[Privacy Policy description — how the company collects, uses, and protects personal data.]",
    lastUpdated: LAST_UPDATED,
    icon: "Shield",
    metadata: createMetadata(
      "Privacy Policy",
      "[Meta description for Privacy Policy page.]",
      [
        "privacy policy",
        "data protection",
        "personal data",
        "cookies",
        "privacy",
      ],
      "privacy-policy",
    ),
  },
};
