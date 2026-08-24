"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import type { INavItem } from "@/types/header";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  navItems?: INavItem[];
}

// Split dropdown items into two halves for mega menu columns
function splitIntoColumns<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

export default function Navigation({ className, navItems }: NavigationProps) {
  const items = navItems || NAV_ITEMS;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    if (!activeDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Close on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const handleToggle = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const getIsActive = (item: INavItem): boolean => {
    if (item.hasDropdown) {
      return pathname.startsWith(item.href) && item.href !== "/";
    }
    return pathname === item.href;
  };

  return (
    <nav ref={navRef} className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const isActive = getIsActive(item);
        const isOpen = activeDropdown === item.title;

        return (
          <div key={item.title} className="relative">
            {item.hasDropdown && item.dropdownItems ? (
              <>
                {/* Trigger */}
                <button
                  onClick={() => handleToggle(item.title)}
                  className={cn(
                    "relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium font-rubik transition-colors",
                    isOpen
                      ? "text-primary bg-primary/5"
                      : isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary hover:bg-gray-50",
                  )}
                >
                  {item.title}
                  <RiArrowDownSLine
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                  {/* Active indicator */}
                  <span
                    className={cn(
                      "absolute left-0 bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                      isActive ? "w-full" : "w-0",
                    )}
                  />
                </button>

                {/* Mega Menu Panel */}
                {isOpen && (() => {
                  const [col1, col2] = splitIntoColumns(item.dropdownItems);
                  const isMega = item.dropdownItems.length > 2;

                  return (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50",
                        "animate-in fade-in slide-in-from-top-2 duration-200",
                        isMega ? "w-[560px]" : "min-w-52",
                      )}
                    >
                      {isMega ? (
                        /* Two-column mega menu */
                        <div className="grid grid-cols-2 gap-0 p-2">
                          {[col1, col2].map((col, colIdx) => (
                            <div key={colIdx} className="p-3">
                              <p className="text-[10px] font-rubik font-semibold text-gray-400 uppercase tracking-[2px] mb-2 pb-2 border-b border-gray-100">
                                {colIdx === 0
                                  ? item.title === "Services"
                                    ? "[Category A]"
                                    : "[Region A]"
                                  : item.title === "Services"
                                    ? "[Category B]"
                                    : "[Region B]"}
                              </p>
                              <div className="flex flex-col gap-0.5">
                                {col.map((subItem) => {
                                  const isSubActive = pathname === subItem.href;
                                  return (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className={cn(
                                        "group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-rubik transition-colors",
                                        isSubActive
                                          ? "text-primary bg-primary/5 font-medium"
                                          : "text-gray-700 hover:text-primary hover:bg-primary/5",
                                      )}
                                    >
                                      {subItem.title}
                                      <RiArrowRightSLine className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Simple list */
                        <div className="p-2">
                          {item.dropdownItems.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "group flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-rubik transition-colors",
                                  isSubActive
                                    ? "text-primary bg-primary/5 font-medium"
                                    : "text-gray-700 hover:text-primary hover:bg-primary/5",
                                )}
                              >
                                {subItem.title}
                                <RiArrowRightSLine className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </>
            ) : (
              /* Regular link */
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center px-3 py-2 rounded-lg text-sm font-medium font-rubik transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary hover:bg-gray-50",
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
