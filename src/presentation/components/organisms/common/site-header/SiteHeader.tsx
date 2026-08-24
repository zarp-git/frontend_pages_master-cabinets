"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RiPhoneLine, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import {
  COMPANY_NAME,
  PHONE,
} from "@/constants/business-info";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

interface SiteHeaderProps {
  /** Force a light (dark text) variant regardless of scroll. Defaults to transparent/dark overlay on scroll. */
  variant?: "transparent" | "light";
  activeHref?: string;
}

/**
 * SiteHeader — Figma nodes 17:3549 / 48:9373 / 48:10514 / 48:11498 / 60:12252 / 60:18573
 * Transparent overlay on hero, transitions to solid on scroll.
 * Mobile: collapses to hamburger with slide-down drawer.
 */
export default function SiteHeader({
  variant = "transparent",
  activeHref = "/",
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "transparent" && !scrolled;

  return (
    <>
      {/* ── Header bar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20",
          isDark
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm",
        )}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between pt-6 px-8 pb-0 h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Master Cabinets Home"
          >
            {/* Geometric monogram mark */}
            <span
              className={cn(
                "flex items-center justify-center w-6 h-6 rounded-sm text-xs font-bold leading-none font-clash",
                isDark ? "bg-white text-[#3F2F22]" : "bg-[#3F2F22] text-white"
              )}
              aria-hidden="true"
            >
              M
            </span>
            <span
              className={cn(
                "font-clash text-[27px] leading-[40.5px] font-medium",
                isDark ? "text-white" : "text-[#111827]"
              )}
            >
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[11px] leading-[16.5px] tracking-[0.05em] uppercase transition-opacity hover:opacity-70",
                  activeHref === link.href ? "font-semibold" : "font-normal",
                  isDark ? "text-white" : "text-[#4B5563]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Phone CTA pill */}
          <div className="flex items-center gap-3">
            {/* Desktop phone pill */}
            <Link
              href={`tel:${PHONE.href.replace("tel:", "")}`}
              className={cn(
                "hidden lg:flex items-center gap-3 rounded-[999px] transition-opacity hover:opacity-80 bg-[#3F2F22] font-sans",
                "px-4 py-1.5",
              )}
            >
              <RiPhoneLine
                className="shrink-0 w-4 h-4 text-white"
                aria-hidden="true"
              />
              <span className="text-white leading-[16.5px] text-[11px] font-normal">
                {PHONE.display.replace("+1 ", "")}
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? (
                <RiCloseLine
                  className={cn("w-6 h-6", isDark ? "text-white" : "text-[#111827]")}
                />
              ) : (
                <RiMenu3Line
                  className={cn("w-6 h-6", isDark ? "text-white" : "text-[#111827]")}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "fixed top-[80px] left-0 right-0 z-40 lg:hidden transition-all duration-300 bg-white shadow-lg",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <nav
          className="flex flex-col px-6 py-6 gap-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-[#111827] text-base py-2 border-b border-[#F3F4F6] tracking-[0.05em] uppercase font-sans",
                activeHref === link.href ? "font-semibold text-[#3F2F22]" : "font-normal",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`tel:${PHONE.href.replace("tel:", "")}`}
            className="flex items-center justify-center gap-2 mt-2 w-full rounded-[999px] py-3 bg-[#3F2F22] text-white font-sans text-[14px]"
            onClick={() => setMenuOpen(false)}
          >
            <RiPhoneLine className="w-4 h-4" aria-hidden="true" />
            {PHONE.display.replace("+1 ", "")}
          </Link>
        </nav>
      </div>

      {/* Header spacer — avoids content hiding under fixed header */}
      <div className="h-[80px]" aria-hidden="true" />
    </>
  );
}
