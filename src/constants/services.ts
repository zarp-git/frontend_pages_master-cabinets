import type { ServiceData, ServiceFeature } from "@/types/service.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Shared — reused across all services
// ---------------------------------------------------------------------------

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Simple Process",
    subtitle: "Streamlined From Day One",
    description:
      "One team handles everything from design to installation, so you're never managing multiple contractors.",
  },
  {
    title: "Transparent Pricing",
    subtitle: "No Hidden Costs",
    description:
      "We give you a detailed written quote before any work begins — no surprises, no vague estimates.",
  },
  {
    title: "Custom Work",
    subtitle: "Built for Your Space",
    description:
      "Every cabinet, countertop, and finish is selected and crafted to fit your home's specific dimensions and style.",
  },
  {
    title: "Expert Design",
    subtitle: "25+ Years of Craftsmanship",
    description:
      "Our team brings over two decades of experience to every project, from small bathroom updates to full home remodels.",
  },
];

export const SERVICE_SIDEBAR_INFO = {
  title: "Who Are We?",
  description:
    "Master Cabinets LLC is a South Florida remodeling and cabinetry company with over 25 years of experience. We serve Naples, Bonita Springs, Fort Myers, Estero, Marco Island, Miami, and surrounding communities — delivering quality craftsmanship with no subcontractors, no surprises.",
} as const;

// ---------------------------------------------------------------------------
// Individual service content — SSOT
// ---------------------------------------------------------------------------

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "home-remodeling",
    title: "Home Remodeling",
    breadcrumbLabel: "Home Remodeling",
    heroSubtitle: "Complete Home Transformation",
    heroImage: "/images/hero/image1.webp",
    content: {
      heading: "Full-Scale Home Remodeling Tailored to Your Vision",
      paragraphs: [
        "Master Cabinets LLC brings over 25 years of remodeling experience to every project across South Florida. Whether you're updating a single room or transforming your entire home, our team handles every aspect of the process — from design through final installation — so you don't have to coordinate multiple contractors.",
        "We specialize in kitchen and bathroom renovations, flooring upgrades, custom cabinetry, and structural improvements. Every detail is planned carefully with you before a single tool is picked up. Our process starts with a free in-home consultation, followed by a transparent written quote covering all materials and labor.",
        "Our licensed and insured crew works efficiently and cleanly, respecting your home and schedule throughout the project. We've completed hundreds of residential remodels across Naples, Bonita Springs, Fort Myers, and the surrounding region, and we stand behind our work with a 1-year workmanship warranty.",
        "Ready to transform your home? Contact Master Cabinets today for a free consultation and let's turn your vision into reality.",
      ],
    },
    galleryImages: [
      "/images/hero/image1.webp",
      "/images/hero/image4.webp",
      "/images/hero/image7.webp",
    ],
    faqs: [
      {
        question: "How long does a full home remodel take?",
        answer:
          "Project timelines depend on scope and complexity. A kitchen remodel typically takes 2–4 weeks, while a full home renovation may take 6–12 weeks. We'll give you a detailed timeline during the planning phase and keep you updated throughout.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "Yes. For projects that require permits — such as structural changes, electrical work, or major additions — we manage the permitting process on your behalf. We work with local authorities in Naples, Bonita Springs, Fort Myers, and surrounding areas.",
      },
      {
        question: "Can you work while we're living in the home?",
        answer:
          "Absolutely. We schedule work in phases and take precautions to minimize disruption to your daily life. Our crews are clean, professional, and considerate of your home environment throughout the project.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Licensed & Insured" },
    ],
    seo: {
      metaTitle: `Home Remodeling in Naples, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Licensed home remodeling contractor serving Naples, Bonita Springs, Fort Myers & South Florida. Custom kitchens, bathrooms, flooring & full renovations. Free quotes.",
    },
  },
  {
    slug: "custom-cabinetry",
    title: "Custom Cabinetry",
    breadcrumbLabel: "Custom Cabinetry",
    heroSubtitle: "Handcrafted to Fit Your Space",
    heroImage: "/images/hero/image2.webp",
    content: {
      heading: "Custom Cabinet Design and Installation in South Florida",
      paragraphs: [
        "At Master Cabinets LLC, custom cabinetry is at the heart of everything we do. We design and install cabinets built specifically for your kitchen, bathroom, laundry room, or any other space — no stock units, no compromises on fit or finish.",
        "Our team works with a wide range of materials, including solid wood, plywood, and premium finishes in hundreds of styles and colors. Whether you prefer a sleek modern look or a classic raised-panel design, we'll craft cabinets that match your home's aesthetic and meet your storage needs exactly.",
        "Every project begins with a full measurement and design consultation. We create detailed 3D renderings before any fabrication begins, so you can see exactly how the finished product will look in your space. From frameless Euro-style to traditional face-frame construction, we build to last.",
        "Contact us today for a free in-home consultation. We serve Naples, Bonita Springs, Estero, Fort Myers, Marco Island, Miami, and the entire South Florida region.",
      ],
    },
    galleryImages: [
      "/images/hero/image2.webp",
      "/images/hero/image5.webp",
      "/images/hero/image6.webp",
    ],
    faqs: [
      {
        question: "How long does custom cabinet installation take?",
        answer:
          "A typical kitchen cabinet installation takes 3–7 days for fabrication and 1–2 days for installation, depending on the scope. We'll provide a clear timeline before any work begins.",
      },
      {
        question: "What materials do you use for cabinets?",
        answer:
          "We use premium plywood boxes with solid wood or MDF doors in your choice of finish. All hardware is soft-close as standard. We offer painted, stained, or thermofoil options across dozens of door styles.",
      },
      {
        question: "Can I choose my own hardware and handles?",
        answer:
          "Yes. We offer a full selection of hardware including hinges, pulls, knobs, and organizers. If you have something specific in mind, we can usually accommodate it — just let us know during the design consultation.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Custom Built" },
    ],
    seo: {
      metaTitle: `Custom Cabinetry in Naples & South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Fully custom kitchen and bathroom cabinets designed and installed by Master Cabinets LLC. Serving Naples, Fort Myers, Bonita Springs & South Florida. Free quotes.",
    },
  },
  {
    slug: "walk-in-closets",
    title: "Walk-In Closets & Storage",
    breadcrumbLabel: "Walk-In Closets & Storage",
    heroSubtitle: "Organized Spaces, Built for Life",
    heroImage: "/images/hero/image3.webp",
    content: {
      heading: "Custom Walk-In Closets and Storage Solutions",
      paragraphs: [
        "A well-designed walk-in closet transforms how you start your day. Master Cabinets LLC designs and installs fully custom closet systems that maximize every square inch of your space — from reach-in closets to large master walk-in suites.",
        "We offer a complete range of closet solutions including hanging sections at single and double height, drawer towers, shoe shelving, and integrated lighting. All components are built to your exact measurements and finished in your choice of color and material.",
        "Our design process starts with a free in-home measurement and a 3D rendering of your finished closet before we fabricate anything. This ensures the final result matches your expectations and your lifestyle perfectly.",
        "Whether you need a single wall of shelving or a full custom suite with island and vanity, we handle the entire project. Contact Master Cabinets today to schedule your free design consultation.",
      ],
    },
    galleryImages: [
      "/images/hero/image3.webp",
      "/images/hero/image6.webp",
      "/images/hero/image1.webp",
    ],
    faqs: [
      {
        question: "How much does a custom walk-in closet cost?",
        answer:
          "Pricing depends on the size, materials, and features you choose. We provide a detailed written quote after the free in-home design consultation. There are no hidden fees or add-ons after the quote is agreed upon.",
      },
      {
        question: "Do you install closets in new construction and existing homes?",
        answer:
          "Yes. We work in both new construction projects and existing homes. Whether you're building new or upgrading a current closet, we'll design a system that fits the space and your budget.",
      },
      {
        question: "What storage accessories do you offer?",
        answer:
          "We offer a full range of accessories including velvet-lined jewelry drawers, pull-out laundry hampers, integrated LED lighting, shoe racks, belt and tie organizers, and more — all custom-fitted to your closet layout.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Custom Designed" },
    ],
    seo: {
      metaTitle: `Walk-In Closets & Custom Storage in South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Custom walk-in closet systems and storage solutions in Naples, Bonita Springs, Fort Myers & South Florida. Designed and installed by Master Cabinets LLC. Free consultation.",
    },
  },
  {
    slug: "bathrooms-vanities",
    title: "Bathrooms & Vanities",
    breadcrumbLabel: "Bathrooms & Vanities",
    heroSubtitle: "Spa-Quality Bathroom Renovations",
    heroImage: "/images/hero/image4.webp",
    content: {
      heading: "Custom Bathroom Remodeling and Vanity Installation",
      paragraphs: [
        "Your bathroom should be a place of comfort and style. Master Cabinets LLC delivers complete bathroom remodeling services in South Florida — from a simple vanity swap to a full bathroom transformation with custom tile, new fixtures, and bespoke cabinetry.",
        "We handle every aspect of your bathroom project including demo, plumbing rough-in coordination, tile installation, custom vanity fabrication, mirror framing, and final touches. All work is done by our in-house team — no third-party subcontractors.",
        "Our custom vanities are built to your exact specifications. Choose from a wide selection of door styles, countertop materials including quartz and marble, undermount sinks, and hardware. We also offer frameless shower enclosures and freestanding tub installations.",
        "Get started with a free in-home consultation. We serve homeowners across Naples, Bonita Springs, Fort Myers, Estero, Marco Island, and Miami.",
      ],
    },
    galleryImages: [
      "/images/hero/image4.webp",
      "/images/hero/image2.webp",
      "/images/hero/image5.webp",
    ],
    faqs: [
      {
        question: "How long does a bathroom remodel take?",
        answer:
          "A typical bathroom renovation takes 1–3 weeks depending on the scope of work. A full gut-and-replace with custom tile and cabinetry may take up to 4 weeks. We provide a clear project timeline before starting.",
      },
      {
        question: "Do you do both full bathroom remodels and small vanity replacements?",
        answer:
          "Yes. We handle everything from a single vanity installation to a complete bathroom renovation. No project is too small or too large — we provide the same quality craftsmanship regardless of scope.",
      },
      {
        question: "Can you match existing tile or finishes in my bathroom?",
        answer:
          "We'll do our best to source matching or complementary materials. During the design consultation, we'll review your existing finishes and recommend options that blend seamlessly or create a cohesive updated look.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Licensed & Insured" },
    ],
    seo: {
      metaTitle: `Bathroom Remodeling & Custom Vanities in South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Full bathroom renovations and custom vanity installation in Naples, Fort Myers, Bonita Springs & South Florida. Master Cabinets LLC — licensed, insured, free quotes.",
    },
  },
  {
    slug: "flooring",
    title: "Flooring",
    breadcrumbLabel: "Flooring",
    heroSubtitle: "Premium Flooring Installation",
    heroImage: "/images/hero/image5.webp",
    content: {
      heading: "Professional Flooring Installation Across South Florida",
      paragraphs: [
        "New flooring can completely transform the look and feel of your home. Master Cabinets LLC installs a wide range of flooring materials including hardwood, luxury vinyl plank (LVP), porcelain tile, ceramic tile, and laminate — all installed with precision and care.",
        "We handle the full process from subfloor preparation and demo of existing flooring to final installation and transitions. Our team works in kitchens, bathrooms, bedrooms, living areas, and commercial spaces throughout the South Florida region.",
        "With 25+ years of experience, we know how to handle the challenges unique to Florida homes — including humidity-resistant materials, proper underlayment selection for slab foundations, and seamless transitions between rooms and flooring types.",
        "Schedule your free in-home consultation today. We'll assess your space, walk you through material options, and provide a transparent, written quote with no hidden costs.",
      ],
    },
    galleryImages: [
      "/images/hero/image5.webp",
      "/images/hero/image3.webp",
      "/images/hero/image7.webp",
    ],
    faqs: [
      {
        question: "What flooring types do you install?",
        answer:
          "We install hardwood, luxury vinyl plank (LVP), laminate, porcelain tile, ceramic tile, and natural stone. We'll recommend the best option based on your space, usage, and budget.",
      },
      {
        question: "How long does flooring installation take?",
        answer:
          "Most flooring jobs are completed in 1–3 days depending on the square footage and material. Large or complex projects may take longer. We'll give you a precise timeline upfront.",
      },
      {
        question: "Do I need to move my furniture?",
        answer:
          "Yes, the space needs to be clear before installation begins. We can assist with light furniture moves as part of the project — just let us know during the consultation.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Satisfaction Guaranteed" },
    ],
    seo: {
      metaTitle: `Flooring Installation in Naples & South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Professional flooring installation — hardwood, LVP, tile, and laminate — in Naples, Fort Myers, Bonita Springs & South Florida. Master Cabinets LLC. Free quotes.",
    },
  },
  {
    slug: "painting",
    title: "Interior & Exterior Painting",
    breadcrumbLabel: "Interior & Exterior Painting",
    heroSubtitle: "Flawless Finish, Every Time",
    heroImage: "/images/hero/image6.webp",
    content: {
      heading: "Professional Interior and Exterior Painting Services",
      paragraphs: [
        "A fresh coat of paint is one of the most cost-effective ways to refresh your home. Master Cabinets LLC provides professional interior and exterior painting services throughout South Florida — delivered with the same attention to detail that defines every project we touch.",
        "Our painters handle full prep work including surface cleaning, sanding, patching holes and cracks, and priming before any paint is applied. We use premium paints and primers suited to Florida's climate, ensuring a long-lasting, beautiful finish on both interior and exterior surfaces.",
        "For interior projects, we paint walls, ceilings, trim, doors, and cabinets. For exteriors, we treat stucco, wood siding, trim, shutters, and fences. We're meticulous about masking and protecting your surfaces, furniture, and landscaping during every project.",
        "Whether you're refreshing a single room or repainting your entire home, contact us for a free in-home quote. We serve Naples, Bonita Springs, Fort Myers, Estero, Marco Island, Miami, and surrounding areas.",
      ],
    },
    galleryImages: [
      "/images/hero/image6.webp",
      "/images/hero/image1.webp",
      "/images/hero/image4.webp",
    ],
    faqs: [
      {
        question: "Do you provide the paint or do I need to buy it?",
        answer:
          "We can supply premium paint as part of the project cost, or you can purchase your own paint if you have a specific brand or color in mind. Both options are available — we'll discuss during the quote.",
      },
      {
        question: "How long does interior painting take?",
        answer:
          "A single room typically takes 1 day. A full interior repaint of a home may take 3–7 days depending on size, number of coats, and surface condition. We provide accurate timelines in our written quote.",
      },
      {
        question: "Do you paint kitchen cabinets?",
        answer:
          "Yes. Cabinet painting is one of our specialties. We do full sanding, priming, and finish painting to achieve a smooth, durable result that looks like factory paint.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Licensed & Insured" },
    ],
    seo: {
      metaTitle: `Interior & Exterior Painting in South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Professional painting services for homes in Naples, Bonita Springs, Fort Myers & South Florida. Interior, exterior, cabinets. Master Cabinets LLC. Free quotes.",
    },
  },
  {
    slug: "outdoor-living",
    title: "Custom Outdoor Living",
    breadcrumbLabel: "Custom Outdoor Living",
    heroSubtitle: "Outdoor Spaces Built to Impress",
    heroImage: "/images/hero/image7.webp",
    content: {
      heading: "Custom Outdoor Living Spaces Designed for Florida Life",
      paragraphs: [
        "Florida's year-round sunshine makes outdoor living an extension of your home. Master Cabinets LLC designs and builds custom outdoor spaces that let you enjoy that lifestyle to the fullest — from covered lanais and summer kitchens to pergolas and outdoor bar areas.",
        "We build outdoor kitchens with custom cabinetry, countertops, built-in grills, refrigerators, and sinks. Our outdoor spaces are designed with weather-resistant materials that stand up to Florida's heat and humidity, so your investment looks great for years to come.",
        "Every outdoor project starts with a full design consultation. We create custom plans and present all material options before construction begins. Our team handles all phases including structural work, cabinetry fabrication, tile, and finishing.",
        "Ready to create your dream outdoor space? Contact us today for a free consultation and let's design something exceptional together.",
      ],
    },
    galleryImages: [
      "/images/hero/image7.webp",
      "/images/hero/image2.webp",
      "/images/hero/image5.webp",
    ],
    faqs: [
      {
        question: "What materials do you use for outdoor cabinetry?",
        answer:
          "We use marine-grade stainless steel, powder-coated aluminum, and weather-resistant polymer materials designed specifically for outdoor use. All products are selected to withstand Florida's heat, humidity, and salt air.",
      },
      {
        question: "Can you build a full outdoor kitchen with appliances?",
        answer:
          "Yes. We design and build complete outdoor kitchens including built-in grills, side burners, refrigerators, sinks, ice makers, and custom countertops. We work with leading outdoor appliance brands and coordinate all installation.",
      },
      {
        question: "How long does an outdoor living project take?",
        answer:
          "Timeline depends on the complexity of the project. A basic summer kitchen typically takes 2–3 weeks. A full outdoor living area with structure, kitchen, and tile may take 4–8 weeks. We'll give you a precise schedule upfront.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Weather-Resistant Materials" },
    ],
    seo: {
      metaTitle: `Custom Outdoor Living Spaces in South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Custom outdoor kitchens, summer kitchens, and outdoor living spaces in Naples, Fort Myers, Bonita Springs & South Florida. Master Cabinets LLC. Free quotes.",
    },
  },
  {
    slug: "electrical-structural",
    title: "Electrical & Structural Work",
    breadcrumbLabel: "Electrical & Structural Work",
    heroSubtitle: "Safe, Code-Compliant Work",
    heroImage: "/images/hero/image1.webp",
    content: {
      heading: "Licensed Electrical and Structural Work for Your Renovation",
      paragraphs: [
        "Remodeling projects often require electrical upgrades, structural modifications, or load-bearing wall removal. Master Cabinets LLC handles these critical aspects in-house with our licensed team, ensuring all work is code-compliant and properly permitted.",
        "Our electrical services include panel upgrades, circuit additions for new appliances, under-cabinet lighting, recessed lighting installation, and kitchen and bathroom outlet additions. We coordinate with local inspectors and ensure all electrical work meets Florida building code.",
        "For structural work, we handle non-load-bearing and load-bearing wall removal, beam installation, and structural reinforcements needed for open-concept renovations. All structural changes are engineered and permitted as required.",
        "Having one team handle both the remodel and the structural or electrical work saves you time, reduces cost, and eliminates coordination headaches. Contact us today to discuss your project.",
      ],
    },
    galleryImages: [
      "/images/hero/image1.webp",
      "/images/hero/image3.webp",
      "/images/hero/image6.webp",
    ],
    faqs: [
      {
        question: "Are you licensed for electrical work?",
        answer:
          "Yes. All electrical work is performed by our licensed electricians in compliance with Florida state requirements. We handle all permit applications and inspections as part of the project.",
      },
      {
        question: "Can you remove a load-bearing wall?",
        answer:
          "Yes. We work with licensed structural engineers when required to design proper beam and post solutions for load-bearing wall removal. All work is permitted and inspected to ensure safety and code compliance.",
      },
      {
        question: "Do you handle panel upgrades for new appliances?",
        answer:
          "Yes. If your remodel includes high-draw appliances like double ovens, induction cooktops, or HVAC units, we can upgrade your electrical panel and run dedicated circuits to support them safely.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Licensed & Permitted" },
    ],
    seo: {
      metaTitle: `Electrical & Structural Work for Remodels in South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Licensed electrical and structural services for home renovations in Naples, Fort Myers, Bonita Springs & South Florida. Master Cabinets LLC. Fully permitted. Free quotes.",
    },
  },
  {
    slug: "millwork",
    title: "Architectural Millwork",
    breadcrumbLabel: "Architectural Millwork",
    heroSubtitle: "Crafted Architectural Details",
    heroImage: "/images/hero/image2.webp",
    content: {
      heading: "Custom Architectural Millwork That Elevates Every Space",
      paragraphs: [
        "Architectural millwork is the art of custom woodwork that adds character, elegance, and craftsmanship to your home. Master Cabinets LLC designs and installs custom molding, wainscoting, coffered ceilings, built-in bookshelves, fireplace surrounds, and decorative panels — the finishing details that make a house feel truly custom.",
        "Our millwork team specializes in both traditional and contemporary profiles. Whether you're looking for rich crown molding throughout your home, a custom built-in entertainment wall, or detailed panel work for a formal dining room, we fabricate everything to your exact specifications and install with precision.",
        "Architectural millwork is typically the last stage of a renovation, and we approach it with the patience and craftsmanship it demands. We use premium materials, precision tooling, and skilled finishing techniques to deliver results that look like they were always part of the original architecture.",
        "Contact Master Cabinets today to discuss your millwork vision. We serve homeowners across Naples, Bonita Springs, Fort Myers, Estero, Marco Island, Miami, and the greater South Florida area.",
      ],
    },
    galleryImages: [
      "/images/hero/image2.webp",
      "/images/hero/image4.webp",
      "/images/hero/image7.webp",
    ],
    faqs: [
      {
        question: "What types of millwork do you install?",
        answer:
          "We install crown molding, base molding, chair rail, wainscoting, coffered ceilings, beamed ceilings, built-in bookshelves, entertainment walls, fireplace mantels and surrounds, window and door casings, and decorative paneling.",
      },
      {
        question: "Do you paint or stain the millwork as part of the job?",
        answer:
          "Yes. Our millwork projects include full painting or staining as part of the scope. We prime, caulk, sand, and finish every piece to achieve a smooth, professional result. You choose the paint color or stain tone.",
      },
      {
        question: "Can you match existing millwork in my home?",
        answer:
          "In most cases, yes. We'll take measurements of your existing profiles and either source matching molding or have it custom-milled to match. Consistency throughout your home is a priority for us.",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Custom Fabricated" },
    ],
    seo: {
      metaTitle: `Architectural Millwork in Naples & South Florida | ${COMPANY_NAME}`,
      metaDescription:
        "Custom architectural millwork including crown molding, built-ins, coffered ceilings, and wainscoting in Naples, Fort Myers & South Florida. Master Cabinets LLC. Free quotes.",
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Retrieves service data by slug. Returns undefined when the slug has no match. */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

/** Returns all service slugs — useful for `generateStaticParams`. */
export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
