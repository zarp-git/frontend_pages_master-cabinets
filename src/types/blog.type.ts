export interface BlogArticleImageObject {
  id?: string;
  url: string;
  alt?: string | null;
  alt_text?: string | null;
  altText?: string | null;
}

export type BlogArticleImage = string | BlogArticleImageObject;

export interface BlogArticleAuthor {
  id: string;
  first_name?: string;
  firstName?: string;
  last_name?: string;
  lastName?: string;
  full_name: string;
  fullName?: string;
  biography: string | null;
  avatar: BlogArticleImageObject | null;
}

export interface BlogArticleSummary {
  id: string;
  title: string;
  language: string;
  slug: string;
  content: string;
  meta_description?: string | null;
  metaDescription?: string | null;
  published_at: string;
  publishedAt?: string;
  display_order: number;
  displayOrder?: number;
  images?: BlogArticleImage[];
  cover_image?: BlogArticleImage;
  coverImage?: BlogArticleImage;
  author: BlogArticleAuthor | null;
}

export interface BlogArticle extends BlogArticleSummary {
  status: "published";
  created_at: string;
  updated_at: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
  totalPages?: number;
}

export interface PaginatedArticles {
  data: BlogArticleSummary[];
  meta: PaginationMeta;
}

export class BlogAPIError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string
  ) {
    super(message);
    this.name = "BlogAPIError";
    Object.setPrototypeOf(this, BlogAPIError.prototype);
  }
}
