import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

export default {
	title: `[Main SEO title] | ${COMPANY_NAME}`,
	blog_title: `Blog | ${COMPANY_NAME}`,
	description:
		"[Main SEO description — up to 160 characters about the company's services, service area, and value proposition.]",
	keywords: "[keyword 1], [keyword 2], [keyword 3], [service area]",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		title: `[Open Graph title] | ${COMPANY_NAME}`,
		description:
			"[Open Graph description — summary of the site for social media sharing.]",
		siteName: COMPANY_NAME,
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
		images: [
			`${SITE_URL}/images/hero/logo.png`,
		],
	},
	// NOTE: alternates.canonical intentionally omitted here.
	// Setting a global canonical causes every page that spreads this config to emit
	// canonical="/" — silently marking every route as a duplicate of the homepage.
	// Canonicals must be set per page in each leaf page.tsx via generateMetadata.
};
