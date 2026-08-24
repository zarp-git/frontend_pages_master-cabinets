import type {
  BlogArticleSummary,
  BlogArticle,
  PaginatedArticles,
  BlogAPIError,
  BlogArticleImage,
  BlogArticleImageObject,
} from "@/types/blog.type";

const BLOG_API_BASE_URL =
  process.env.BLOG_API_BASE_URL || "https://api.example.com";
const BLOG_SECRET = process.env.BLOG_SECRET || "";

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

function normalizeBlogArticle(
  article: any
): BlogArticle {
  const rawCover = article.coverImage || article.cover_image;
  const normalizedCover = normalizeBlogImage(rawCover);
  const normalizedImages = Array.isArray(article.images)
    ? article.images.map(normalizeBlogImage).filter(Boolean) as BlogArticleImageObject[]
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
    console.error("[Blog API] Error fetching articles:", error);
    throw error;
  }
}

export async function getArticleBySlug(
  slug: string,
): Promise<BlogArticle | null> {
  try {
    const url = new URL(`${BLOG_API_BASE_URL}/api/cms/public/articles/${slug}`);

    const response = await fetch(url.toString(), {
      headers: {
        "x-blog-secret-key": BLOG_SECRET,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.id) return null;

    return normalizeBlogArticle(data);
  } catch (error) {
    console.error("[Blog API] Error fetching article by slug:", error);
    throw error;
  }
}
