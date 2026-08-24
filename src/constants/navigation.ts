import type { INavItem } from "@/types/header";

/**
 * Navigation Items - Single Source of Truth (SSOT)
 *
 * This constant defines all navigation items used across the application.
 * Used by both desktop Navigation and MobileMenu components.
 */
export const NAV_ITEMS: INavItem[] = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "Reviews", href: "/reviews" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];
