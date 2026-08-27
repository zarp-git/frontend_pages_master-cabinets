import type { Metadata } from "next";
import { Rubik, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import SiteHeader from "@/presentation/components/organisms/common/site-header/SiteHeader";
import SiteFooter from "@/presentation/components/organisms/common/site-footer/SiteFooter";
import { LeadCollectModal } from "@/presentation/components/organisms/common/lead-collect-modal/LeadCollectModal";
import { ContactModal } from "@/presentation/components/organisms/common/contact-modal/ContactModal";
import { MaintenanceModal } from "@/presentation/components/organisms/common/MaintenanceModal";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/presentation/components/templates/seo/article-json-ld";
import { OrganizationJsonLd } from "@/presentation/components/templates/seo/json-ld";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../../../public/fonts/ClashDisplay-Variable.woff2", weight: "100 900" },
  ],
  display: "swap",
  variable: "--font-clash",
});

// NOTE: Do NOT add alternates.canonical here - canonicals belong only in leaf page.tsx files.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Master Cabinets - Custom Cabinetry & Home Remodeling in Naples, FL",
    template: "%s | Master Cabinets",
  },
  description:
    "Master Cabinets LLC offers premium custom cabinetry, kitchen & bathroom remodeling, flooring, and full home renovations in Naples, Bonita Springs, Fort Myers, and South Florida. Free quotes. 25+ years experience.",
  keywords: ["custom cabinets Naples FL", "kitchen remodeling Naples", "bathroom remodeling South Florida", "cabinet installation Fort Myers", "Master Cabinets LLC"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Master Cabinets",
    title: "Master Cabinets - Custom Cabinetry & Remodeling in South Florida",
    description:
      "Premium custom cabinets and full home remodeling in Naples, Bonita Springs, Fort Myers, and across South Florida. 25+ years of craftsmanship. Free quotes.",
    images: [
      {
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Master Cabinets - Custom Cabinetry and Home Remodeling in South Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Cabinets | Custom Cabinetry & Home Remodeling",
    description:
      "Premium custom cabinets and full home remodeling in Naples, Bonita Springs, Fort Myers, and across South Florida.",
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${hankenGrotesk.variable} ${clashDisplay.variable} antialiased`}
      >
        {/* Global JSON-LD schemas - rendered on every page */}
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
        <LeadCollectModal />
        <ContactModal />
        <MaintenanceModal />
      </body>
    </html>
  );
}
