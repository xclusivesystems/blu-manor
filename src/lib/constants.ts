// ============================================================
// Blu Manor — Site Constants
// ============================================================
// NOTE: This is the minimal bootstrap created in Plan 02 for
// Header/Footer. Plan 03 will expand this file with complete
// content: services, housing options, team, testimonials, FAQ,
// stats, and social links.
// ============================================================

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phoneResident: string;
  phonePartner: string;
  address: string;
  ga4Id: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig: SiteConfig = {
  name: "Blu Manor",
  tagline: "Second Chance Housing",
  description:
    "Blu Manor provides safe, felon-friendly transitional housing in the Tampa Bay area. We help individuals reenter the community with dignity through stable housing, employment support, and supervision compliance.",
  url: "https://blumanor.org",
  email: "info@blumanor.org",
  phoneResident: "(813) 555-0100",
  phonePartner: "(813) 555-0101",
  address: "Tampa Bay Area, FL",
  ga4Id: "G-H8JCFW9RRT",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Housing", href: "/housing" },
  { label: "Program", href: "/program" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
