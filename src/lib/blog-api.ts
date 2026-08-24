import type {
  BlogArticleSummary,
  BlogArticle,
  PaginatedArticles,
  BlogArticleImage,
  BlogArticleImageObject,
} from "@/types/blog.type";

const BLOG_API_BASE_URL = process.env.BLOG_API_BASE_URL || "";
const BLOG_SECRET = process.env.BLOG_SECRET || "";

export const DEMO_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "post-1",
    slug: "choosing-materials-that-age-beautifully",
    title: "Choosing Materials That Age Beautifully",
    language: "en_us",
    meta_description:
      "Why the best kitchens start with routines, not renderings — and how a single point of contact changes the entire remodel.",
    content: `The character of a space is shaped by the materials you see, the details you touch, and the decisions most people never notice. A finish that looks identical in a showroom can diverge dramatically after five years of sunlight, humidity, and daily use.

## Grain, tone, and movement

White oak reads calm and architectural; walnut brings warmth and depth. Rift-cut veneers keep lines quiet and linear, while plain-sawn faces show more expressive figure. We match the cut to the room — busier grain for accent pieces, restrained grain for large expanses.

Selecting timber goes beyond initial aesthetic appeal. We evaluate how the grain interacts with both natural morning light and evening accent illumination. By aligning veneer flitches across continuous cabinet banks, we achieve seamless horizontal continuity that mass-produced cabinetry simply cannot replicate.

## Finishes built for Florida

In South Florida, humidity and light are the real test. We specify finishes and construction that tolerate coastal conditions, and we coordinate countertops, hardware, and lighting so the palette resolves as one considered whole rather than a collection of separate choices.

We utilize industrial-grade conversion varnishes and polyurethane sealers formulated specifically to resist swelling, UV discoloration, and moisture intrusion. Every drawer box and interior shelf receives equal attention to ensure lifetime durability.

## The single-team advantage

When your cabinetry designers, carpenters, and installers operate under one roof, there is zero translation loss between the initial 3D design concept and the finished installation. Every measurement is verified on-site by the craftsman building your piece, guaranteeing millimeter-exact alignment.`,
    published_at: "2026-08-20T10:00:00.000Z",
    created_at: "2026-08-20T10:00:00.000Z",
    updated_at: "2026-08-20T10:00:00.000Z",
    display_order: 1,
    status: "published",
    images: [
      {
        id: "img-1",
        url: "/images/hero/image1.webp",
        alt: "Natural white oak cabinetry and marble surfaces",
        alt_text: "Natural white oak cabinetry and marble surfaces",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography:
        "Architectural woodworkers and licensed remodeling specialists serving Naples, Bonita Springs, and South Florida for over 25 years.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-2",
    slug: "living-room-refresh-open-floor-plan",
    title: "A living room refresh that works with an open floor plan",
    language: "en_us",
    meta_description:
      "Open concept homes need remodeling decisions that carry across rooms. Here's how we keep finishes, lighting, and flow consistent.",
    content: `Open concept living offers spacious entertaining, but without careful architectural coordination, adjacent spaces can feel disjointed. 

## Creating Visual Cohesion

When the kitchen, dining, and main living space share sightlines, cabinetry finishes and millwork profiles must speak the same language. We create unified color stories through custom wood staining and coordinated hardware selections.

## Integrated Entertainment & Millwork

Custom built-in media centers and architectural wall paneling anchor the living area while providing concealed storage for electronics, books, and accessories.`,
    published_at: "2026-08-18T10:00:00.000Z",
    created_at: "2026-08-18T10:00:00.000Z",
    updated_at: "2026-08-18T10:00:00.000Z",
    display_order: 2,
    status: "published",
    images: [
      {
        id: "img-2",
        url: "/images/hero/image2.webp",
        alt: "Open floor plan living room and custom built-in cabinetry",
        alt_text: "Open floor plan living room and custom built-in cabinetry",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-3",
    slug: "hiring-remodeler-southwest-florida-8-questions",
    title: "Hiring a remodeler in Southwest Florida: 8 questions worth asking",
    language: "en_us",
    meta_description:
      "From contractor licensing to subcontractor management, here is what protects your home and budget.",
    content: `Choosing the right contractor for your home renovation is the single most important decision in any remodeling journey.

## 1. Are all trades handled in-house?

Hiring general contractors who subcontract every element leads to communication breakdowns and scheduling delays. A dedicated single team guarantees consistent quality.

## 2. How do you prepare for Florida building codes?

Coastal wind and moisture requirements demand specialized knowledge in structural attachments, electrical upgrades, and humidity management.`,
    published_at: "2026-08-15T10:00:00.000Z",
    created_at: "2026-08-15T10:00:00.000Z",
    updated_at: "2026-08-15T10:00:00.000Z",
    display_order: 3,
    status: "published",
    images: [
      {
        id: "img-3",
        url: "/images/hero/image3.webp",
        alt: "Master Cabinets remodeling team at work",
        alt_text: "Master Cabinets remodeling team at work",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-4",
    slug: "cabinet-finishes-coastal-humidity",
    title: "Cabinet finishes that withstand coastal humidity",
    language: "en_us",
    meta_description:
      "Understanding conversion varnish, multi-layer polyurethane, and natural oil finishes for Florida homes.",
    content: `Coastal environments subject interior cabinetry to significant humidity swings and UV exposure.

## Conversion Varnish vs. Standard Lacquer

Post-catalyzed conversion varnishes create a chemical bond that is practically impervious to water spots, grease, and household cleaners.

## UV-Inhibiting Topcoats

South Florida sunshine can yellow clear coats over time. We use premium non-yellowing acrylic and polyurethane formulas to preserve authentic wood tones.`,
    published_at: "2026-08-12T10:00:00.000Z",
    created_at: "2026-08-12T10:00:00.000Z",
    updated_at: "2026-08-12T10:00:00.000Z",
    display_order: 4,
    status: "published",
    images: [
      {
        id: "img-4",
        url: "/images/hero/image4.webp",
        alt: "Durable custom cabinet finish details",
        alt_text: "Durable custom cabinet finish details",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-5",
    slug: "bathroom-storage-maximizing-square-footage",
    title: "Bathroom storage: maximizing square footage in master suites",
    language: "en_us",
    meta_description:
      "Clever vanity configurations, recessed medicine cabinets, and architectural niches that expand storage elegantly.",
    content: `Master bathrooms demand both spa-like serenity and relentless practical organization.

## Floating Vanities with Deep Drawers

Wall-hung vanities visually enlarge the floor footprint while offering plumbing-notched U-drawers that maximize usable internal volume.

## Recessed Medicine Cabinets & LED Niches

By framing storage into the wall stud bays, you gain valuable shelf depth without intruding into shower or vanity space.`,
    published_at: "2026-08-10T10:00:00.000Z",
    created_at: "2026-08-10T10:00:00.000Z",
    updated_at: "2026-08-10T10:00:00.000Z",
    display_order: 5,
    status: "published",
    images: [
      {
        id: "img-5",
        url: "/images/hero/image5.webp",
        alt: "Luxury master bathroom vanity and storage",
        alt_text: "Luxury master bathroom vanity and storage",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-6",
    slug: "custom-closets-luxury-hardware",
    title: "Custom closets: lighting, drawer inserts, and luxury hardware",
    language: "en_us",
    meta_description:
      "How personalized closet layout engineering turns chaotic morning routines into effortless luxury.",
    content: `A well-designed walk-in closet is more than storage — it is a private dressing boutique tailored to your daily routine.

## Integrated 3000K LED Illumination

Channel-recessed vertical lighting illuminates every garment without harsh glare or heat buildup.

## Velvet Jewelry & Accessory Trays

Custom velvet drawer dividers keep watches, jewelry, and eyewear protected and beautifully presented.`,
    published_at: "2026-08-08T10:00:00.000Z",
    created_at: "2026-08-08T10:00:00.000Z",
    updated_at: "2026-08-08T10:00:00.000Z",
    display_order: 6,
    status: "published",
    images: [
      {
        id: "img-6",
        url: "/images/hero/image6.webp",
        alt: "Custom walk-in closet with integrated lighting",
        alt_text: "Custom walk-in closet with integrated lighting",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
  {
    id: "post-7",
    slug: "outdoor-kitchens-weatherproofing",
    title: "Outdoor kitchens: weatherproofing cabinetry and stone surfaces",
    language: "en_us",
    meta_description:
      "Essential materials, ventilation requirements, and stainless hardware for resilient Florida outdoor entertaining spaces.",
    content: `Florida outdoor living demands materials built to withstand intense sun, tropical rainstorms, and salt air.

## Marine-Grade HDPE & Teak Cabinetry

High-density polyethylene polymer cabinetry never rots, delaminates, or requires repainting, making it the premier choice for outdoor kitchens.

## Marine-Grade 316 Stainless Steel Hardware

Every hinge, drawer slide, and handle must be marine-grade 316 stainless to prevent corrosion in humid coastal air.`,
    published_at: "2026-08-05T10:00:00.000Z",
    created_at: "2026-08-05T10:00:00.000Z",
    updated_at: "2026-08-05T10:00:00.000Z",
    display_order: 7,
    status: "published",
    images: [
      {
        id: "img-7",
        url: "/images/hero/image1.webp",
        alt: "Outdoor kitchen cabinetry and grill station",
        alt_text: "Outdoor kitchen cabinetry and grill station",
      },
    ],
    author: {
      id: "author-1",
      first_name: "Master",
      last_name: "Cabinets",
      full_name: "Master Cabinets Studio",
      biography: "Architectural woodworkers and licensed remodeling specialists in South Florida.",
      avatar: {
        url: "/images/hero/zarp-logomark-black.png",
        alt: "Master Cabinets Studio",
      },
    },
  },
];

function normalizeBlogImage(
  image: BlogArticleImage | undefined | null
): BlogArticleImageObject | null {
  if (!image) return null;
  if (typeof image === "string") {
    return { url: image, alt: null, alt_text: null };
  }
  const altVal = image.alt || image.altText || image.alt_text || null;
  return {
    id: image.id,
    url: image.url,
    alt: altVal,
    alt_text: altVal,
  };
}

function normalizeBlogArticle(article: any): BlogArticle {
  const rawCover = article.coverImage || article.cover_image;
  const normalizedCover = normalizeBlogImage(rawCover);
  const normalizedImages = Array.isArray(article.images)
    ? (article.images.map(normalizeBlogImage).filter(Boolean) as BlogArticleImageObject[])
    : [];

  const imagesList: BlogArticleImageObject[] = normalizedCover
    ? [normalizedCover, ...normalizedImages.filter((img: BlogArticleImageObject) => img.url !== normalizedCover.url)]
    : normalizedImages;

  const now = new Date().toISOString();
  return {
    id: article.id || "",
    title: article.title || "Untitled",
    language: article.language || "en_us",
    slug: article.slug || "",
    content: article.content || "",
    meta_description: article.metaDescription || article.meta_description || null,
    published_at: article.publishedAt || article.published_at || now,
    display_order: article.displayOrder ?? article.display_order ?? 0,
    images: imagesList,
    status: "published",
    created_at: article.createdAt || article.created_at || now,
    updated_at: article.updatedAt || article.updated_at || article.publishedAt || article.published_at || now,
    author: article.author
      ? {
          id: article.author.id || "",
          first_name: article.author.firstName || article.author.first_name || "",
          last_name: article.author.lastName || article.author.last_name || "",
          full_name: article.author.fullName || article.author.full_name || "",
          biography: article.author.biography || null,
          avatar: normalizeBlogImage(article.author.avatar),
        }
      : null,
  };
}

export async function getArticles(
  page: number = 1,
  limit: number = 10,
): Promise<PaginatedArticles> {
  if (!BLOG_API_BASE_URL || BLOG_API_BASE_URL === "https://api.example.com") {
    // Return rich demo data matching Master Cabinets brand
    const start = (page - 1) * limit;
    const end = start + limit;
    const slice = DEMO_BLOG_ARTICLES.slice(start, end);
    return {
      data: slice,
      meta: {
        page,
        limit,
        total: DEMO_BLOG_ARTICLES.length,
        total_pages: Math.ceil(DEMO_BLOG_ARTICLES.length / limit),
      },
    };
  }

  try {
    const url = new URL(`${BLOG_API_BASE_URL}/api/cms/public/articles`);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());

    const response = await fetch(url.toString(), {
      headers: {
        "x-blog-secret-key": BLOG_SECRET,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      data: Array.isArray(data.data)
        ? data.data.map(normalizeBlogArticle)
        : [],
      meta: {
        page: data.meta?.page || page,
        limit: data.meta?.limit || limit,
        total: data.meta?.total || 0,
        total_pages: data.meta?.totalPages ?? data.meta?.total_pages ?? 0,
      },
    };
  } catch (error) {
    console.warn("[Blog API] Error fetching live articles, falling back to demo articles:", error);
    const start = (page - 1) * limit;
    const end = start + limit;
    const slice = DEMO_BLOG_ARTICLES.slice(start, end);
    return {
      data: slice,
      meta: {
        page,
        limit,
        total: DEMO_BLOG_ARTICLES.length,
        total_pages: Math.ceil(DEMO_BLOG_ARTICLES.length / limit),
      },
    };
  }
}

export async function getArticleBySlug(
  slug: string,
): Promise<BlogArticle | null> {
  if (!BLOG_API_BASE_URL || BLOG_API_BASE_URL === "https://api.example.com") {
    const found = DEMO_BLOG_ARTICLES.find((a) => a.slug === slug);
    return found || null;
  }

  try {
    const url = new URL(`${BLOG_API_BASE_URL}/api/cms/public/articles/${slug}`);

    const response = await fetch(url.toString(), {
      headers: {
        "x-blog-secret-key": BLOG_SECRET,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        const found = DEMO_BLOG_ARTICLES.find((a) => a.slug === slug);
        return found || null;
      }
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.id) {
      const found = DEMO_BLOG_ARTICLES.find((a) => a.slug === slug);
      return found || null;
    }

    return normalizeBlogArticle(data);
  } catch (error) {
    console.warn("[Blog API] Error fetching article by slug, checking demo articles:", error);
    const found = DEMO_BLOG_ARTICLES.find((a) => a.slug === slug);
    return found || null;
  }
}
