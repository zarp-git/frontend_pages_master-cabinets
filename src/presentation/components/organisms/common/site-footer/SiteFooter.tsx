import Link from "next/link";
import CurrentYear from "@/presentation/components/atoms/CurrentYear";
import {
  COMPANY_NAME,
  EMAIL,
  PHONE,
  SOCIAL_LINKS,
  BUSINESS_HOURS,
} from "@/constants/business-info";

const NAV_LINKS = [
  { label: "Work", href: "/gallery" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

const SERVICE_AREAS = {
  counties: [
    { name: "Collier County", cities: "Naples, Bonita Springs, Estero, Marco Island" },
    { name: "Miami-Dade County", cities: "Miami, Sea Ranch Lakes" },
    { name: "Broward County", cities: "Fort Myers, Lehigh Acres, Parkland, Southwest Ranches" },
  ],
} as const;

/**
 * SiteFooter — Figma nodes 48:9427 / 48:9596 / 48:10415 / 48:11521 / 60:12255 / 60:18576
 * Full #968272 Warm Earth Taupe background.
 * Structure: Giant brand banner → 4-col nav grid → legal bar.
 */
export default function SiteFooter() {
  return (
    <footer
      className="w-full"
      style={{ background: "#968272" }}
    >
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: "96px 64px 48px 64px" }}
      >
        {/* ── Giant Brand Banner ── */}
        <div className="flex flex-col gap-1 mb-12">
          <h2
            className="text-white leading-[1.5] tracking-tight"
            style={{
              fontFamily: "var(--font-clash, sans-serif)",
              fontSize: "clamp(48px, 8.3vw, 119.6px)",
              fontWeight: 500,
              lineHeight: "1.5",
            }}
          >
            {COMPANY_NAME}
          </h2>
          <span
            className="text-white text-[12px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            Licensed &amp; Insured
          </span>
        </div>

        {/* ── 4-Column Navigation Grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "48px",
          }}
        >
          {/* Col 1: Brand summary */}
          <div className="flex flex-col gap-4">
            <p
              className="text-white text-[16px] leading-[26px] font-normal"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Full home remodeling, architectural cabinetry, and custom interiors.
              Everything filtered into one expert team.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] uppercase tracking-wider"
              style={{
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-white text-[14px] leading-[20px] hover:opacity-75 transition-opacity"
                  style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] uppercase tracking-wider"
              style={{
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="text-white text-[14px] leading-[20px] hover:opacity-75 transition-opacity"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {EMAIL}
              </a>
              <a
                href={PHONE.href}
                className="text-white text-[14px] leading-[20px] hover:opacity-75 transition-opacity"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {PHONE.display.replace("+1 ", "")}
              </a>
              <span
                className="text-white text-[12px]"
                style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
              >
                {BUSINESS_HOURS.footerDisplay}
              </span>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[12px] hover:opacity-75 transition-opacity"
                  style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[12px] hover:opacity-75 transition-opacity"
                  style={{ fontFamily: "Raleway, system-ui, sans-serif" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Service Areas */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[10px] uppercase tracking-wider"
              style={{
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Service Areas
            </h3>
            <div className="flex flex-col gap-3">
              {SERVICE_AREAS.counties.map((county) => (
                <div key={county.name} className="flex flex-col gap-0.5">
                  <span
                    className="text-white font-bold text-[14px]"
                    style={{
                      fontFamily: "'Segoe UI', system-ui, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {county.name}
                  </span>
                  <span
                    className="text-[12px] leading-[19.5px]"
                    style={{
                      fontFamily: "'Segoe UI', system-ui, sans-serif",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {county.cities}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Legal Bar ── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: "48px" }}
        >
          <p
            className="text-white text-[10px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
          >
            &copy; <CurrentYear /> {COMPANY_NAME} LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-white text-[10px] hover:opacity-75 transition-opacity"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-white text-[10px] hover:opacity-75 transition-opacity"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
