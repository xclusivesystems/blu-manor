import { siteConfig, faq, housing } from "@/lib/constants";

/**
 * Organization + Service + FAQPage structured data.
 *
 * The legacy root `index.html` carried LocalBusiness and FAQPage. The Next
 * rebuild dropped them, so the live site served zero JSON-LD and lost every
 * rich result it had. This restores them from `constants.ts` rather than from
 * that old file, so the markup can never disagree with the copy the page
 * actually renders — the FAQ text had already diverged between the two
 * ("including men and women" was added to the eligibility answer post-rebuild).
 *
 * NOT `LocalBusiness`, deliberately. That type models a business customers
 * visit, and Google pairs it with a street address and opening hours. Blu Manor
 * is a for-profit business, but not that shape of one: it is housing people
 * live in, reached by phone and referral, across 5+ properties. `Organization`
 * is the honest parent type. It is also NOT `NGO` — that asserts registered
 * charitable status, and this is for-profit.
 *
 * Two claims from the legacy markup are deliberately NOT restored, and neither
 * is pending anything:
 *
 *   - `openingHoursSpecification` (Mon–Fri 9–6, Sat 10–2). **Never add these.**
 *     There are no opening hours. The legacy markup modelled a storefront and
 *     that was simply wrong.
 *   - `geo` coordinates (27.9506, -82.4572). A generic downtown-Tampa point,
 *     not a property. With 5+ properties across Tampa Bay no single coordinate
 *     can be correct — and for reentry housing, resident privacy is a reason
 *     NOT to publish exact locations, not a detail awaiting the client. Treat
 *     `siteConfig.address`'s "Tampa Bay Area, FL" as the intended answer.
 *
 * `logo` and `image` point at `/img/`, not the legacy `/images/` — the rebuild
 * moved that directory, so both old URLs 404'd. The OG image was rebuilt rather
 * than restored: the legacy PNG read "$750/month All-Inclusive" when the real
 * rate is $850.
 */

const AREA_SERVED = [
  "Tampa, FL",
  "St. Petersburg, FL",
  "Clearwater, FL",
  "Bradenton, FL",
  "Hillsborough County, FL",
  "Pinellas County, FL",
];

// "Available" / "Limited" in constants.ts -> schema.org ItemAvailability.
const AVAILABILITY: Record<string, string> = {
  Available: "https://schema.org/InStock",
  Limited: "https://schema.org/LimitedAvailability",
};

/**
 * One Offer per room type, generated from `housing`.
 *
 * A price is emitted ONLY when the constants hold a real number. The private
 * room is "Call" / " for pricing", and inventing a figure for it — or copying
 * the shared-room rate across — would be exactly the fabrication this markup
 * exists to avoid. Such an offer carries availability and inclusions only.
 */
function offersFromHousing() {
  return housing.map((room) => {
    const amount = room.price.replace(/[^0-9.]/g, "");
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      name: room.type,
      itemOffered: {
        "@type": "Accommodation",
        name: room.type,
        amenityFeature: room.features.map((f) => ({
          "@type": "LocationFeatureSpecification",
          name: f,
          value: true,
        })),
      },
    };
    if (amount) {
      offer.priceCurrency = "USD";
      offer.priceSpecification = {
        "@type": "UnitPriceSpecification",
        price: amount,
        priceCurrency: "USD",
        unitCode: "MON", // per month
        unitText: "month",
      };
    }
    const availability = AVAILABILITY[room.availability];
    if (availability) offer.availability = availability;
    return offer;
  });
}

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo.png`,
    image: `${siteConfig.url}/img/og-image.png`,
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
    areaServed: AREA_SERVED,
  };

  // What the organisation actually offers. This is the block that answers
  // "reentry housing Tampa" for an AI search engine, which is how this
  // audience finds the site — so the eligibility and terms are stated here
  // rather than left implicit in the FAQ.
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Second Chance Transitional Housing",
    serviceType: "Transitional housing",
    description:
      "Furnished, all-inclusive transitional housing for adults reentering the community. " +
      "Felon-friendly, move-in ready, month-to-month with no long-term lease required.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: AREA_SERVED,
    audience: {
      "@type": "Audience",
      audienceType:
        "Adults 18 and older reentering the community, including individuals on probation, parole, or pretrial supervision",
    },
    offers: offersFromHousing(),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
