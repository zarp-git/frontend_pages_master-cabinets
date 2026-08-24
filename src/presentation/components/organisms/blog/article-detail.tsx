"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogArticleSummary } from "@/types/blog.type";
import {
  getBlogReadingTime,
  getPrimaryBlogImage,
  cleanMarkdownContent,
} from "@/lib/blog-content";
import { formatBlogDate } from "@/lib/blog-date";

interface ArticleDetailProps {
  article: BlogArticleSummary;
}

/**
 * ArticleDetail — Figma node 48:10203 / 60:12812 (Page 3: BLOG ARTICLE)
 * Editorial typography using Master Cabinets tokens:
 * Clash Display title & headers, Times New Roman monogram, Segoe UI body.
 * ZERO inline styles.
 */
export function ArticleDetail({ article }: ArticleDetailProps) {
  const primaryImage = getPrimaryBlogImage(article.images);

  return (
    <article className="w-full flex flex-col gap-8">
      {/* ── Header Row & Feature Image ── */}
      <header className="flex flex-col gap-6">
        {/* Breadcrumb link */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#968272]">
          <Link href="/" className="hover:text-[#111827] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#111827] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#111827] font-medium truncate max-w-[200px] sm:max-w-[300px]">
            {article.title}
          </span>
        </div>

        {/* Feature Hero Image */}
        {primaryImage && (
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[400px] rounded-[20px] overflow-hidden bg-stone-100 shadow-sm">
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt || article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 736px"
            />
          </div>
        )}

        {/* Title & Metadata */}
        <div className="flex flex-col gap-4">
          <h1 className="font-clash font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[62.4px] text-[#111827]">
            {article.title}
          </h1>

          {/* Author / Journal badge */}
          <div className="flex items-center gap-3 pt-1 border-b border-[#EFEFEF] pb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#403023] text-white font-serif text-sm font-normal">
              M
            </span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-sans">
              <span className="font-semibold text-[#111827]">
                {article.author?.full_name || "Master Cabinets Studio"}
              </span>
              <span className="text-[#968272]">·</span>
              <span className="text-[#968272]">Studio Journal</span>
              <span className="text-[#968272]">·</span>
              <span className="text-[#968272]">
                {formatBlogDate(article.published_at)}
              </span>
              <span className="text-[#968272]">·</span>
              <span className="text-[#968272]">
                {getBlogReadingTime(article.content)} min read
              </span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        {article.meta_description && (
          <p className="font-sans font-normal text-lg sm:text-xl leading-relaxed sm:leading-[32.5px] text-[#4B5563]">
            {article.meta_description}
          </p>
        )}
      </header>

      {/* ── Main Editorial Content ── */}
      <div className="flex flex-col gap-6 font-sans text-base sm:text-lg leading-relaxed sm:leading-[32.5px] text-[#4B5563]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="font-clash font-medium text-2xl sm:text-3xl leading-snug md:leading-[41.2px] text-[#111827] mt-8 mb-3">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-clash font-medium text-xl sm:text-2xl leading-snug text-[#111827] mt-6 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="font-sans font-normal text-base sm:text-lg leading-relaxed sm:leading-[32.5px] text-[#4B5563] mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-4 text-[#4B5563] font-sans">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2 mb-4 text-[#4B5563] font-sans">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="font-sans leading-relaxed text-[#4B5563]">
                {children}
              </li>
            ),
          }}
        >
          {cleanMarkdownContent(article.content)}
        </ReactMarkdown>
      </div>

      {/* ── Author Bio Card ── */}
      {article.author && (
        <div className="mt-8 p-6 sm:p-8 rounded-[20px] bg-[#F9FAFB] border border-[#EFEFEF] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#403023] text-white font-serif text-xl font-normal shrink-0">
            M
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-clash font-medium text-base sm:text-lg text-[#111827]">
              Written by {article.author.full_name}
            </span>
            <p className="font-sans font-normal text-xs sm:text-sm leading-relaxed text-[#4B5563]">
              {article.author.biography ||
                "Architectural woodworkers and licensed remodeling specialists serving Naples, Bonita Springs, and South Florida for over 25 years."}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
