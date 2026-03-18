import type { Metadata } from "next";
import { faq, siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/resources/FaqAccordion";

export const metadata: Metadata = {
  title: "Resources & FAQ | Blu Manor — Common Questions Answered",
  description:
    "Find answers to common questions about Blu Manor's transitional housing program — eligibility, pricing, house rules, move-in timeline, and how referrals work.",
};

export default function ResourcesPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
              Information
            </p>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Resources
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Find answers to common questions about our program, eligibility,
              pricing, and how to get started.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about living at or referring clients to Blu Manor."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <FaqAccordion items={faq} />
          </AnimatedSection>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Need Help?"
              title="We're Here For You"
              description="Can't find what you're looking for? Reach out directly and we'll get you an answer."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl border border-border bg-bg-card p-6">
                <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                  Residents &amp; Applicants
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Housing Inquiries
                </h3>
                <p className="text-muted text-sm mb-4">
                  For housing inquiries and applications
                </p>
                <a
                  href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                  className="text-2xl font-bold text-primary hover:text-primary-light transition-[color] duration-200 cursor-pointer"
                >
                  {siteConfig.phoneResident}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-xl border border-border bg-bg-card p-6">
                <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">
                  Professionals
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Partner &amp; Referral Line
                </h3>
                <p className="text-muted text-sm mb-4">
                  For referrals and professional inquiries
                </p>
                <a
                  href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                  className="text-2xl font-bold text-primary hover:text-primary-light transition-[color] duration-200 cursor-pointer"
                >
                  {siteConfig.phonePartner}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeader
              label="Next Steps"
              title="Ready to Take the Next Step?"
              description="Whether you're ready to apply or just want to learn more, we're here to help."
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
