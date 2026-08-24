import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function HeroBreadcrumb({ items }: HeroBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
    >
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          {idx > 0 && <RiArrowRightLine className="size-4 text-gray-400" />}
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors font-rubik"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-rubik font-semibold">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
