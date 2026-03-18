import type { Metadata } from "next";
import {
  CheckCircle,
  Check,
  Wifi,
  Tv,
  Shirt,
  Zap,
  Bed,
  Home,
} from "lucide-react";
import { housing, siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Housing | Blu Manor — Affordable Transitional Housing Tampa Bay",
  description:
    "Move-in ready transitional housing in Tampa Bay. Furnished shared rooms at $750/month — all-inclusive with utilities, Wi-Fi, and laundry. Felon-friendly, available now.",
};

const amenities = [
  { icon: Wifi, label: "Wi-Fi Included" },
  { icon: Tv, label: "Flat-Screen TV" },
  { icon: Shirt, label: "On-Site Laundry" },
  { icon: Zap, label: "All Utilities" },
  { icon: Bed, label: "Furnished Room" },
  { icon: Home, label: "Move-In Ready" },
];

const eligibilityItems = [
  "Adults 18 years of age or older",
  "Must maintain employment or verified income",
  "Must comply with all supervision requirements",
  "Committed to following house rules and policies",
  "Background check does not disqualify — felon-friendly",
];

export default function HousingPage() {
  return (
    <div className="bg-bg-deep text-foreground">
      {/* Page Banner */}
      <section className="relative py-24 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-sm uppercase tracking-wide text-primary font-medium">
              Safe &amp; Affordable
            </span>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3 mb-4">
              Our Housing
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Move-in ready, all-inclusive transitional housing in Tampa Bay. A
              stable, structured environment designed to help you rebuild.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Housing Listings */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Available Housing"
              title="Find Your Room"
              description="Choose from our available housing options. Each room is fully furnished and all-inclusive — no hidden fees."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {housing.map((option, index) => (
              <AnimatedSection
                key={option.id}
                delay={index * 0.1}
                className="md:col-span-2 max-w-2xl mx-auto w-full"
              >
                <Card className="p-8">
                  {/* Availability Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    <span className="text-sm text-green-400">
                      {option.availability}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary font-[family-name:var(--font-libre)]">
                      {option.price}
                    </span>
                    <span className="text-lg text-muted">{option.pricePeriod}</span>
                  </div>

                  {/* Room Type */}
                  <h2 className="font-[family-name:var(--font-libre)] text-2xl font-bold text-foreground tracking-tight mb-6">
                    {option.type}
                  </h2>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-primary shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Apply CTA */}
                  <Button href="/apply" size="lg" className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="All-Inclusive"
              title="Everything You Need"
              description="Your $750/month covers everything — no surprise bills, no nickel-and-diming. Move in and focus on what matters."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12">
            <p className="text-muted text-center max-w-2xl mx-auto leading-relaxed mb-10">
              Every room at Blu Manor includes all utilities, high-speed Wi-Fi,
              furnishings, a flat-screen TV, and access to our on-site laundry
              facilities. You just bring yourself and your essentials.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
            {amenities.map(({ icon: Icon, label }, index) => (
              <AnimatedSection key={label} delay={0.1 + index * 0.05}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-bg-card border border-border text-center hover:border-border-hover transition-[border-color] duration-300">
                  <Icon className="text-primary" size={28} />
                  <span className="text-sm text-foreground font-medium">
                    {label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Eligibility"
              title="Who Qualifies"
              description="We believe in second chances. Our criteria is straightforward — we look for commitment, not perfection."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ul className="mt-10 space-y-4">
              {eligibilityItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-bg-card border border-border"
                >
                  <Check
                    className="text-primary shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Ready to Apply?
            </h2>
            <p className="text-muted text-lg mb-8">
              Rooms are move-in ready. Start your application today or call us
              to check current availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" size="lg">
                Apply Now
              </Button>
              <Button
                href={`tel:${siteConfig.phoneResident}`}
                variant="secondary"
                size="lg"
              >
                Call Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
