import type { Metadata } from "next";
import { Rubik, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/presentation/components/organisms/common/header/Header";
import Footer from "@/presentation/components/organisms/common/footer/Footer";
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
    { path: "../../public/fonts/ClashDisplay-Variable.woff2", weight: "100 900" },
  ],
  display: "swap",
  variable: "--font-clash",
});

// NOTE: Do NOT add alternates.canonical here — canonicals belong only in leaf page.tsx files.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} - [Site title and main description]`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "[Site meta description — up to 160 characters about the company's services, service area, and value proposition.]",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} - [Open Graph title]`,
    description:
      "[Open Graph description — summary of the site for social media sharing.]",
    images: [
      {
        url: `${SITE_URL}/images/hero/logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - [Short description of the hero image]`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | [Twitter Card title]`,
    description:
      "[Twitter Card description — summary of the site for sharing on Twitter/X.]",
    images: [`${SITE_URL}/images/hero/logo.png`],
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
        {/* Global JSON-LD schemas — rendered on every page */}
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Analytics />
        <Header />
        {children}
        <Footer />
        <LeadCollectModal />
        <ContactModal />
        <MaintenanceModal />
      </body>
    </html>
  );
}
