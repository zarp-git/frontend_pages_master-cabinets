import type { INavItem } from "@/types/header";

/**
 * Navigation Items - Single Source of Truth (SSOT)
 *
 * This constant defines all navigation items used across the application.
 * Used by both desktop Navigation and MobileMenu components.
 */
export const NAV_ITEMS: INavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Locations",
    href: "/locations",
    hasDropdown: true,
    dropdownItems: [
      { title: "[City 1]", href: "/locations/city-1" },
      { title: "[City 2]", href: "/locations/city-2" },
      { title: "[City 3]", href: "/locations/city-3" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { title: "[Service 1]", href: "/services/service-1" },
      { title: "[Service 2]", href: "/services/service-2" },
      { title: "[Service 3]", href: "/services/service-3" },
      { title: "[Service 4]", href: "/services/service-4" },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
];
