import { siteConfig, faq } from "@/lib/constants";

/**
 * LocalBusiness + FAQPage structured data.
 *
 * The legacy root `index.html` carried both of these. The Next rebuild dropped
 * them, so the live site served zero JSON-LD and lost every rich result it had.
 * This restores them from `constants.ts` rather than from that old file, so the
 * markup can never disagree with the copy the page actually renders — the FAQ
 * text had already diverged between the two ("including men and women" was
 * added to the eligibility answer after the rebuild).
 *
 * Three claims from the legacy markup are deliberately NOT restored, because
 * nothing on the current site supports them and schema must not assert more
 * than the page does:
 *
 *   - `openingHoursSpecification` (Mon–Fri 9–6, Sat 10–2). Business hours
 *     appear nowhere in this codebase. Publishing hours nobody confirmed is
 *     how a visitor arrives at a locked door.
 *   - `geo` coordinates (27.9506, -82.4572). That is a generic downtown-Tampa
 *     point, not a property. `siteConfig.address` is still flagged in
 *     constants.ts as a placeholder pending exact addresses from the client.
 *   - `image: /images/og-image.png` and `logo: /images/logo.png`. The rebuild
 *     moved `images/` to `img/` and dropped the OG image entirely, so both
 *     URLs 404. Only the logo survives, at its real path.
 *
 * Add hours and geo here once the client confirms them, and `image` once an OG
 * image exists.
 */
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo.png`,
    email: siteConfig.email,
    // E.164, as the legacy markup had it — Google matches a business far more
    // reliably on +1XXXXXXXXXX than on a display-formatted number. Derived from
    // the display values so there is still one source of truth for the digits.
    telephone: [siteConfig.phoneResident, siteConfig.phonePartner].map(
      (p) => `+1${p.replace(/\D/g, "")}`,
    ),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      "Tampa, FL",
      "St. Petersburg, FL",
      "Clearwater, FL",
      "Bradenton, FL",
      "Hillsborough County, FL",
      "Pinellas County, FL",
    ],
    priceRange: "$850/month",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
