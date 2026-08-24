import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

export default {
	title: `Custom Cabinets & Home Remodeling in South Florida | ${COMPANY_NAME}`,
	blog_title: `Blog | ${COMPANY_NAME}`,
	description:
		"Master Cabinets LLC — licensed home remodeling, custom cabinetry, bathroom renovations, flooring & outdoor living in Naples, Bonita Springs, Fort Myers & South Florida. 25+ years experience. Free quotes.",
	keywords: "custom cabinets, home remodeling, kitchen renovation, bathroom remodeling, Naples FL, Bonita Springs, Fort Myers, South Florida, walk-in closets, flooring installation",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		title: `Custom Cabinets & Remodeling in South Florida | ${COMPANY_NAME}`,
		description:
			"Remodeling, Cabinetry, and Everything Between. Master Cabinets LLC serves Naples, Bonita Springs, Fort Myers & all of South Florida with 25+ years of craftsmanship.",
		siteName: COMPANY_NAME,
		images: [
			{
				url: `${SITE_URL}/images/projects/cabinetry_kitchen_finished_01.png`,
				width: 1200,
				height: 630,
				alt: `${COMPANY_NAME} — Custom Cabinetry & Home Remodeling in South Florida`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${COMPANY_NAME} | Custom Cabinets & Home Remodeling`,
		description:
			"Remodeling, Cabinetry, and Everything Between. Licensed & insured home remodeling in Naples, Fort Myers, Bonita Springs & South Florida.",
		images: [
			`${SITE_URL}/images/projects/cabinetry_kitchen_finished_01.png`,
		],
	},
	// NOTE: alternates.canonical intentionally omitted here.
	// Setting a global canonical causes every page that spreads this config to emit
	// canonical="/" — silently marking every route as a duplicate of the homepage.
	// Canonicals must be set per page in each leaf page.tsx via generateMetadata.
};
