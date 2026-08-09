import Script from "next/script";

/**
 * GA4.
 *
 * The legacy root `index.html` loaded gtag directly. The Next rebuild dropped
 * it and left the measurement id sitting unused in `constants.ts`, so the site
 * has been recording nothing since the rebuild — not merely hardcoding an id.
 *
 * The id now comes from `NEXT_PUBLIC_GA_ID`. A GA4 measurement id is public by
 * design (it ships in the page either way), so `NEXT_PUBLIC_` is correct here
 * and this is not a secret being exposed — the point is that the value stops
 * being baked into committed source.
 *
 * Renders nothing when the variable is unset, so a preview or a local build
 * without env does not pollute production analytics.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
