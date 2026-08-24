"use client";

import { useEffect, useState } from "react";
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
  { label: "Contact", href: "/contact" },
] as const;

/**
 * SiteHeader - Figma `Navigation` component (17:3549 and its page instances).
 *
 * A floating white pill inset from the top, overlaying the page. Left: the
 * Master Cabinets lockup. Centre: uppercase Segoe links on 1.8px tracking, the
 * active one wearing a #9CA3AF hairline pill. Right: the taupe phone pill.
 *
 * Responsive behaviour keeps the same language at every width - the logo
 * scales rather than wrapping, the phone CTA never disappears (it collapses to
 * an icon-only chip under `sm`), and the drawer uses the kit's bezel surface so
 * it matches the cards and FAQ rows.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A route change should never leave the drawer hanging open.
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex h-14 w-full max-w-[1376px] items-center justify-between gap-3",
          "rounded-full bg-white py-2 pl-4 pr-[7px] transition-shadow duration-300 sm:gap-4 sm:pl-5 sm:pr-[11px]",
          scrolled
            ? "shadow-[0_18px_50px_rgba(0,0,0,0.16),0_0_0_1px_rgba(0,0,0,0.06)]"
            : "shadow-[0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)]",
        )}
      >
        {/* Logo lockup - shrinks instead of forcing the pill wider */}
        <Link
          href="/"
          className="flex min-w-0 shrink items-center"
          aria-label="Master Cabinets - home"
        >
          <Image
            src="/images/mc-logo.svg"
            alt="Master Cabinets"
            width={295}
            height={25}
            priority
            className="h-5 w-auto max-w-full sm:h-[22px] lg:h-6"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-0.5 lg:flex xl:gap-1"
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
                  "rounded-full border px-3 py-2 font-sans text-[11px] uppercase leading-4 tracking-[1.4px] transition-colors xl:px-4 xl:tracking-[1.8px]",
                  active
                    ? "border-[#9CA3AF] font-semibold text-[#111827]"
                    : "border-transparent font-normal text-black/55 hover:text-[#403023]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Full phone pill from sm up */}
          <Link
            href={PHONE.href}
            className="hidden items-center gap-3 rounded-full bg-[#968272] py-1.5 pl-4 pr-1.5 transition-colors hover:bg-[#7F6E5F] sm:flex"
          >
            <span className="whitespace-nowrap font-sans text-[11px] uppercase leading-4 tracking-[1.8px] text-white">
              {PHONE.display.replace("+1 ", "")}
            </span>
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              <RiPhoneLine className="h-4 w-4 text-white" />
            </span>
          </Link>

          {/* Icon-only phone below sm, so the CTA never disappears */}
          <Link
            href={PHONE.href}
            aria-label={`Call ${PHONE.display}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#968272] transition-colors hover:bg-[#7F6E5F] sm:hidden"
          >
            <RiPhoneLine className="h-[18px] w-[18px] text-white" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 lg:hidden"
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

      {/* Mobile drawer - same bezel surface as the cards and FAQ rows */}
      <div
        className={cn(
          "pointer-events-auto mx-auto mt-2 w-full max-w-[1376px] overflow-hidden rounded-[32px] bg-black/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-300 lg:hidden",
          menuOpen
            ? "max-h-[460px] p-1.5 opacity-100"
            : "pointer-events-none max-h-0 p-0 opacity-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 rounded-[26px] bg-white p-4 shadow-[0_1px_1px_rgba(255,255,255,0.60)]"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-full px-4 py-3 font-sans text-[12px] uppercase tracking-[1.8px] transition-colors",
                isActive(link.href)
                  ? "bg-black/[0.04] font-semibold text-[#403023]"
                  : "text-black/55 hover:bg-black/[0.02]",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={PHONE.href}
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#403023] py-[7px] pl-5 pr-[7px] transition-colors hover:bg-[#2C1F14]"
          >
            <span className="font-sans text-[12px] uppercase leading-5 tracking-[1.8px] text-white">
              {PHONE.display.replace("+1 ", "")}
            </span>
            <span
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              <RiPhoneLine className="h-4 w-4 text-white" />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
