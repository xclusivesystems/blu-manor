import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Partners | Blu Manor — Referral Partnership for Reentry Professionals",
  description:
    "Probation officers, parole agents, and reentry professionals: partner with Blu Manor to refer clients to structured, employment-focused transitional housing in Tampa Bay.",
};

export default function PartnersPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">
              For Professionals
            </p>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Partner With Us
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              For probation officers, parole agents, and reentry professionals
              who need structured, accountable housing for their clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="For Professionals"
              title="Why Work With Blu Manor"
              description="We make the referral process simple and maintain the standards that matter to you."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Structured Environment
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Our house rules enforce accountability — curfews, drug-free
                  premises, mandatory employment or income, and compliance with
                  all supervision requirements. Your clients know expectations
                  are clear and enforced.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Employment Focus
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Residents are required to maintain employment or verified
                  income. We actively support job stability as a condition of
                  housing — aligning with supervision goals and reducing the
                  risk of recidivism.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Open Communication
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We work directly with probation and parole officers. If you
                  need to verify a resident&apos;s status, confirm their address, or
                  discuss a concern, we&apos;re reachable and responsive.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How Referrals Work */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Referral Process"
              title="How It Works"
              description="A straightforward process designed to get your client housed quickly."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-primary mb-4">01</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Contact Us
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Call our partner line or email us with your client&apos;s details
                  — name, supervision status, and any specific requirements. We
                  respond promptly.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-primary mb-4">02</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Client Applies
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Your client completes our simple application — we keep it
                  straightforward so the process doesn&apos;t add unnecessary
                  barriers for someone working to rebuild.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-primary mb-4">03</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  We Coordinate
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We review the application, approve placement, and coordinate
                  move-in together. You stay informed throughout so there are no
                  surprises on your end.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeader
              label="Get In Touch"
              title="Ready to Make a Referral?"
              description="Reach out directly — no forms, no delays. Call or email and we'll take it from there."
            />

            <div className="mt-10 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted mb-1">
                  Partner Line
                </p>
                <a
                  href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                  className="text-3xl font-bold text-primary hover:text-primary-light transition-[color] duration-200 cursor-pointer"
                >
                  {siteConfig.phonePartner}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-muted mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg text-foreground hover:text-primary transition-[color] duration-200 cursor-pointer"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                variant="primary"
                size="lg"
              >
                Call Partner Line
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                size="lg"
              >
                Email Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resident Redirect */}
      <section className="py-8 px-6 bg-bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted text-sm">
            Are you looking for housing for yourself?{" "}
            <Link
              href="/apply"
              className="text-primary hover:text-primary-light transition-[color] duration-200 underline underline-offset-2"
            >
              Apply here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
