"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiCloseLine,
  RiPhoneLine,
} from "@remixicon/react";
import { Button } from "@/presentation/components/atoms/ui/button";
import CompanyLogo from "@/presentation/components/atoms/CompanyLogo";
import type { INavItem } from "@/types/header";
import { cn } from "@/lib/utils";
import { useLeadModal } from "@/hooks/use-lead-modal";
import { useContactModal } from "@/hooks/use-contact-modal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: INavItem[];
}

const panelVariants = {
  enterFromRight: {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  exitToLeft: {
    initial: { x: 0, opacity: 1 },
    animate: { x: "-100%", opacity: 0 },
    exit: { x: "-100%", opacity: 0 },
  },
};

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const { openModal } = useLeadModal();
  const { openModal: openContactModal } = useContactModal();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) setActiveSection(null);
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname]);

  const activeItem = navItems.find((i) => i.title === activeSection);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col lg:hidden overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
              <AnimatePresence mode="wait">
                {activeSection ? (
                  <motion.button
                    key="back"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setActiveSection(null)}
                    className="flex items-center gap-1.5 text-gray-700 font-rubik font-semibold text-base"
                  >
                    <RiArrowLeftSLine className="size-5" />
                    {activeSection}
                  </motion.button>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CompanyLogo size="sm" />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <RiCloseLine className="size-6" />
              </button>
            </div>

            {/* Content - animated panels */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {!activeSection ? (
                  /* Root panel */
                  <motion.nav
                    key="root"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-30%", opacity: 0 }}
                    transition={{ type: "tween", duration: 0.22, ease: "easeInOut" }}
                    className="absolute inset-0 overflow-y-auto py-3 px-4"
                  >
                    {navItems.map((item, idx) => (
                      <div key={item.title}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <button
                            onClick={() => setActiveSection(item.title)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-3.5 text-base font-rubik font-medium text-gray-900 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors",
                              pathname.startsWith(item.href) && item.href !== "/" && "text-primary",
                            )}
                          >
                            {item.title}
                            <RiArrowRightSLine className="size-5 text-gray-400" />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center px-3 py-3.5 text-base font-rubik font-medium rounded-lg transition-colors",
                              pathname === item.href
                                ? "text-primary bg-primary/5"
                                : "text-gray-900 hover:text-primary hover:bg-gray-50",
                            )}
                          >
                            {item.title}
                          </Link>
                        )}
                        {idx < navItems.length - 1 && (
                          <div className="h-px bg-gray-100 mx-3" />
                        )}
                      </div>
                    ))}
                  </motion.nav>
                ) : (
                  /* Sub-items panel */
                  <motion.div
                    key={activeSection}
                    initial={{ x: "30%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "30%", opacity: 0 }}
                    transition={{ type: "tween", duration: 0.22, ease: "easeInOut" }}
                    className="absolute inset-0 overflow-y-auto py-3 px-4"
                  >
                    {activeItem?.dropdownItems && (() => {
                      const items = activeItem.dropdownItems;
                      const mid = Math.ceil(items.length / 2);
                      const isMega = items.length > 2;
                      const groups = isMega
                        ? [
                            { label: activeSection === "Services" ? "[Category A]" : "[Region A]", items: items.slice(0, mid) },
                            { label: activeSection === "Services" ? "[Category B]" : "[Region B]", items: items.slice(mid) },
                          ]
                        : [{ label: null, items }];

                      return groups.map((group, gIdx) => (
                        <div key={gIdx} className={gIdx > 0 ? "mt-4" : ""}>
                          {group.label && (
                            <p className="px-3 mb-1.5 text-[10px] font-rubik font-semibold text-gray-400 uppercase tracking-[2px]">
                              {group.label}
                            </p>
                          )}
                          {group.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                "group flex items-center justify-between px-3 py-3 rounded-lg text-sm font-rubik transition-colors",
                                pathname === subItem.href
                                  ? "text-primary bg-primary/5 font-medium"
                                  : "text-gray-700 hover:text-primary hover:bg-primary/5",
                              )}
                            >
                              {subItem.title}
                              <RiArrowRightSLine className="size-4 text-gray-300 group-hover:text-primary transition-colors" />
                            </Link>
                          ))}
                        </div>
                      ));
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer CTAs */}
            <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-3 shrink-0">
              <Button
                variant="brick-outline"
                size="lg"
                className="w-full text-sm font-bold uppercase tracking-wide"
                onClick={() => { onClose(); openModal(); }}
              >
                Book a Free Consultation
              </Button>
              <Button
                variant="brick"
                size="lg"
                className="w-full text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2"
                onClick={() => { onClose(); openContactModal(); }}
              >
                Contact Us <RiPhoneLine className="size-5" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
