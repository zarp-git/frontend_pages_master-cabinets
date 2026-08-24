"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiPhoneLine, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { PHONE } from "@/constants/business-info";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

/**
 * SiteHeader — Figma `Navigation` component (17:3549 and its per-page instances).
 *
 * A floating white pill (1376×56, radius full, 0 24px 80px rgba(0,0,0,.18))
 * inset 24px from the top and 32px from each side, overlaying the page.
 * Left: the Master Cabinets lockup. Centre: uppercase Segoe links with 1.8px
 * tracking — the active one gets a #9CA3AF hairline pill. Right: the taupe
 * #968272 phone pill with a white/15 icon chip.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
        <div
          className={cn(
            "pointer-events-auto mx-auto flex h-14 max-w-[1376px] items-center justify-between gap-4",
            "rounded-full bg-white py-2 pl-5 pr-[11px]",
            "shadow-[0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)]",
          )}
        >
          {/* Logo lockup */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Master Cabinets — home"
          >
            <Image
              src="/images/mc-logo.svg"
              alt="Master Cabinets"
              width={295}
              height={25}
              priority
              className="h-[22px] w-auto sm:h-6"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 font-sans text-[11px] uppercase leading-4 tracking-[1.8px] transition-colors",
                    active
                      ? "border border-[#9CA3AF] font-semibold text-[#111827]"
                      : "border border-transparent font-normal text-black/55 hover:text-[#403023]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: phone pill + hamburger */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={PHONE.href}
              className="hidden items-center gap-3 rounded-full bg-[#968272] py-1.5 pl-4 pr-1.5 transition-opacity hover:opacity-90 sm:flex"
            >
              <span className="font-sans text-[11px] uppercase leading-4 tracking-[1.8px] text-white">
                {PHONE.display.replace("+1 ", "")}
              </span>
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
                aria-hidden="true"
              >
                <RiPhoneLine className="h-4 w-4 text-white" />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full p-2 transition-colors hover:bg-black/5 lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <RiCloseLine className="h-6 w-6 text-[#403023]" />
              ) : (
                <RiMenu3Line className="h-6 w-6 text-[#403023]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "pointer-events-auto mx-auto mt-2 max-w-[1376px] overflow-hidden rounded-[26px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-300 lg:hidden",
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-3 font-sans text-[12px] uppercase tracking-[1.8px]",
                  isActive(link.href)
                    ? "bg-black/[0.04] font-semibold text-[#403023]"
                    : "text-black/55",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={PHONE.href}
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#968272] py-3 font-sans text-[12px] uppercase tracking-[1.8px] text-white"
            >
              <RiPhoneLine className="h-4 w-4" aria-hidden="true" />
              {PHONE.display.replace("+1 ", "")}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
