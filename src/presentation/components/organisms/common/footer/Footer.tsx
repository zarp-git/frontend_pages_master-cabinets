"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  RiMapPinLine,
  RiTimeLine,
  RiPhoneLine,
  RiStarLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import { Button } from "@/presentation/components/atoms/ui/button";
import CurrentYear from "@/presentation/components/atoms/CurrentYear";
import {
  FOOTER_COMPANY_INFO,
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICES,
  FOOTER_LEGAL_LINKS,
} from "@/constants/footer";
import { SOCIAL_LINKS } from "@/constants";
import CompanyLogo from "@/presentation/components/atoms/CompanyLogo";
import { useLeadModal } from "@/hooks/use-lead-modal";
import { useMaintenanceModal } from "@/hooks/use-maintenance-modal";

export type FooterVariant = "default" | "simplified";

interface FooterProps {
  variant?: FooterVariant;
  navLinks?: { label: string; href: string }[];
}

// Google Maps embed URL — replace with your own business location query
const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=[YOUR+BUSINESS+NAME]&t=&z=9&ie=UTF8&iwloc=&output=embed";

export default function Footer({ variant = "default" }: FooterProps) {
  const { openModal } = useLeadModal();
  const { openModal: openMaintenanceModal } = useMaintenanceModal();
  if (variant === "simplified") {
    return (
      <footer className="w-full bg-black border-t border-gray-900">
        <div className="section-container py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm md:text-base font-normal font-rubik leading-5">
            {FOOTER_COMPANY_INFO.name} &copy; Copyright <CurrentYear /> - All Rights
            Reserved.
          </p>
          <Link
            href="https://www.zarpstudio.com?utm_source=zarp-project&utm_medium=footer&utm_campaign=website-credit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <span className="text-gray-500 text-sm md:text-base font-normal font-rubik underline leading-5">
              Developed and Maintained by
            </span>
            <motion.div
              animate={{ scale: [1, 1.12, 1.04, 1.1, 1], opacity: [0.85, 1, 0.95, 1, 0.85] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: [0.45, 0, 0.55, 1], times: [0, 0.3, 0.5, 0.7, 1] }}
            >
              <Image
                src="/images/brands/zarp-logomark.svg"
                alt="Zarp Studio"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </motion.div>
          </Link>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full">
      {/* ── Main Footer Section ── */}
      <div className="bg-white py-8 lg:py-16 w-full flex flex-col items-center gap-6 lg:gap-12">
        <div className="section-container flex flex-col items-center gap-6 sm:gap-8">
          {/* ── Top Card (bordered) ── */}
          <div className="w-full rounded-[10px] border border-secondary overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Column · Business Info */}
              <div className="flex-1 px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-12 lg:py-16 border-b md:border-b-0 md:border-r border-secondary">
                <div className="flex flex-col gap-6">
                  <CompanyLogo size="xl" />

                  <p className="text-gray-700 text-base font-normal font-rubik leading-6">
                    {FOOTER_COMPANY_INFO.tagline}
                  </p>

                  <address
                    className="flex flex-col gap-3 not-italic"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <div className="flex items-center gap-2.5">
                      <RiMapPinLine
                        className="w-5 h-5 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 text-lg font-bold font-hanken uppercase leading-4 tracking-tight">
                        {FOOTER_COMPANY_INFO.address.label}
                      </span>
                    </div>
                    <p
                      className="text-gray-700 text-sm font-normal font-rubik leading-5"
                      itemProp="streetAddress"
                    >
                      {FOOTER_COMPANY_INFO.address.street}
                    </p>
                  </address>
                </div>
              </div>

              {/* Right Column · Contact & Map */}
              <div className="flex-1 px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row justify-between items-start gap-6 lg:gap-12">
                {/* Contact Us */}
                <div className="flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-800 text-lg font-bold font-hanken uppercase leading-4 tracking-tight">
                      CONTACT US NOW
                    </h3>
                    <div className="w-10 h-0.5 bg-primary rounded-lg" />
                  </div>

                  <div className="w-56 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <RiTimeLine className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-gray-700 text-xs font-rubik">
                        <span className="font-medium">FROM MON TO SAT</span>
                        <span className="font-bold"> : </span>
                        <span className="font-normal">9AM - 5PM</span>
                      </p>
                    </div>

                    <Link
                      href={`tel:${FOOTER_COMPANY_INFO.contact.phone}`}
                      className="text-neutral-600 text-2xl font-semibold font-rubik leading-5 hover:text-primary transition-colors"
                    >
                      {FOOTER_COMPANY_INFO.contact.phoneDisplay}
                    </Link>
                  </div>

                  <Button
                    variant="brick"
                    size="lg"
                    className="w-full h-10 px-5 py-4 rounded-lg flex justify-between items-center"
                    onClick={openModal}
                  >
                    <span className="uppercase">CALL US NOW</span>
                    <RiPhoneLine className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Service area heading — replace with your own region/city */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-800 text-lg font-bold font-hanken uppercase leading-4 tracking-tight">
                      {/* e.g. "Serving [Your Region]" */}
                      [SERVING YOUR REGION]
                    </h3>
                    <div className="w-10 h-0.5 bg-primary rounded-lg" />
                  </div>

                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    className="w-full md:w-72 h-44 rounded-[10px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="[Company name] location on Google Maps"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Section · Navigation Links ── */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-20">
            {/* Link Columns */}
            <nav
              aria-label="Footer Directory"
              className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-16"
            >
              {/* Company Links */}
              <FooterLinkColumn
                title="COMPANY"
                links={FOOTER_COMPANY_LINKS}
                onLinkClick={openMaintenanceModal}
              />

              {/* Services */}
              <FooterLinkColumn
                title="SERVICES"
                links={FOOTER_SERVICES}
                onLinkClick={openMaintenanceModal}
              />

              {/* Legal */}
              <FooterLinkColumn
                title="LEGAL"
                links={FOOTER_LEGAL_LINKS}
                onLinkClick={openMaintenanceModal}
              />
            </nav>

            {/* Find Us On */}
            <div className="w-full md:w-60 shrink-0 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-800 text-lg font-bold font-hanken uppercase leading-4 tracking-tight">
                  FIND US ON
                </h3>
                <div className="w-10 h-0.5 bg-primary rounded-lg" />
              </div>

              {/* Social Icons */}
              <ul className="flex items-center gap-6 list-none m-0 p-0">
                <li>
                  <Link
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="transition-transform hover:scale-110 block"
                  >
                    <Image
                      src="/images/brands/whatsapp-icon.svg"
                      alt="WhatsApp"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="transition-transform hover:scale-110 block"
                  >
                    <Image
                      src="/images/brands/instagram-icon.svg"
                      alt="Instagram"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="transition-transform hover:scale-110 block"
                  >
                    <Image
                      src="/images/brands/facebook-icon.svg"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={SOCIAL_LINKS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find us on Google Maps"
                    className="transition-transform hover:scale-110 block"
                  >
                    <Image
                      src="/images/brands/google-maps-icon.svg"
                      alt="Google Maps"
                      width={28}
                      height={40}
                      className="w-7 h-10"
                    />
                  </Link>
                </li>
              </ul>

              {/* Leave a Review */}
              <Button
                variant="default"
                size="lg"
                className="w-full h-10 px-5 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex justify-between items-center"
                asChild
              >
                <Link
                  href={SOCIAL_LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="uppercase text-white text-base font-medium font-rubik">
                    LEAVE US A REVIEW
                  </span>
                  <RiStarLine className="w-5 h-5 text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div className="w-full bg-black border-t border-gray-900 mt-8 sm:mt-10">
        <div className="px-4 md:px-28 max-w-[1440px] mx-auto py-10 sm:py-16 flex flex-col items-center gap-6 lg:gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/brands/zarp-logomark.svg"
                alt="Zarp Studio"
                width={160}
                height={48}
                className="h-14 w-auto brightness-0 invert"
              />
            </motion.div>
            <Link
              href="https://www.zarpstudio.com?utm_source=zarp-project&utm_medium=footer&utm_campaign=website-credit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors animate-radar-pulse"
            >
              <span className="text-black text-sm sm:text-base font-medium font-rubik uppercase tracking-wide">Built & Maintained by Zarp Studio</span>
              <RiArrowRightUpLine className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm sm:text-base font-normal font-rubik text-center">
            {FOOTER_COMPANY_INFO.name} &copy; Copyright <CurrentYear /> - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Reusable footer link column ── */
interface FooterLinkColumnProps {
  title: string;
  links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  onLinkClick: () => void;
}

function FooterLinkColumn({
  title,
  links,
  onLinkClick,
}: FooterLinkColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-800 text-lg font-bold font-hanken uppercase leading-4 tracking-tight">
          {title}
        </h3>
        <div className="w-10 h-0.5 bg-primary rounded-lg" />
      </div>
      <ul className="flex flex-col gap-4 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => onLinkClick()}
              className="text-gray-700 text-base font-normal font-rubik hover:text-primary transition-colors block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
