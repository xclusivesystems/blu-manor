import type { Metadata } from "next";
import { Phone, Users, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | Blu Manor — Reach Out Today",
  description:
    "Contact Blu Manor for transitional housing in Tampa Bay. Residents call 727-563-6540. Partners and probation officers call 727-710-6930. We're here to help.",
};

const contactCards = [
  {
    icon: Phone,
    title: "For Residents & Applicants",
    value: siteConfig.phoneResident,
    href: `tel:${siteConfig.phoneResident}`,
    description: "Questions about housing, applications, or move-in",
  },
  {
    icon: Users,
    title: "For Partners & Referrals",
    value: siteConfig.phonePartner,
    href: `tel:${siteConfig.phonePartner}`,
    description:
      "Referral inquiries for probation officers and reentry professionals",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "We typically respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: siteConfig.address,
    href: null,
    description:
      "Multiple properties across Tampa, St. Petersburg, and Clearwater",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              We&apos;re here to help — reach out anytime
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Get In Touch"
              title="How To Reach Us"
              description="Whether you're looking for housing or referring a client, we have dedicated contact points for each audience."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title} delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {card.title}
                        </h3>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="text-primary font-semibold cursor-pointer hover:text-primary-light transition-[color] duration-200 block mt-1"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="text-primary font-semibold mt-1">
                            {card.value}
                          </p>
                        )}
                        <p className="text-muted text-sm mt-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Location"
              title="Our Service Area"
              description="We serve the greater Tampa Bay region with multiple properties across three cities."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-xl border border-border">
              {/* TODO: Update map query when client provides primary property address */}
              <iframe
                src="https://maps.google.com/maps?q=Tampa+Bay+FL&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blu Manor service area — Tampa Bay, FL"
                className="rounded-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight">
              Ready to Apply?
            </h2>
            <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
              Take the first step toward stable housing today. We review
              applications quickly and rooms are move-in ready.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now
              </Button>
              <Button
                href={`tel:${siteConfig.phoneResident}`}
                variant="secondary"
                size="lg"
              >
                Call Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
