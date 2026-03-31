import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Handshake, Home, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "For Reentry Professionals — Partner With Blu Manor",
  description:
    "Probation officers, parole officers, and case managers: partner with Blu Manor to place clients in structured, supervision-compliant transitional housing across Tampa Bay.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              For Reentry Professionals &amp; Supervision Officers
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-muted mt-4">
              <Link href="/" className="hover:text-primary transition-[color] duration-200">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground">Partners</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Partnership"
              title="Collaborate With Blu Manor"
              description="We work directly with probation officers, parole officers, and reentry organizations to provide stable housing for your clients."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <Card>
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <ClipboardList className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Direct Referral Process
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Submit referrals quickly using our online intake form below. We review and respond within 48 hours.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Handshake className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Agency Collaboration
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  We maintain open communication with supervision officers and provide compliance updates as needed.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Home className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Structured Environment
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Our housing includes curfew enforcement, drug-free policies, and employment requirements — supporting your client&apos;s reentry plan.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-20 px-6 bg-bg-surface" id="referral-form">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeader
              label="Submit a Referral"
              title="Refer a Client for Housing"
              description="Use our comprehensive intake form to refer a client for transitional housing at Blu Manor. The form includes fields for agency and officer information."
            />

            <div className="mt-10">
              <Button href="/apply" variant="primary" size="lg">
                Complete Intake Form
              </Button>
              <p className="mt-4 text-sm text-muted">
                <strong className="text-foreground">Urgent placement?</strong> Call us directly at{" "}
                <a
                  href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                  className="text-primary font-bold hover:text-primary-light transition-[color] duration-200"
                >
                  {siteConfig.phoneResident}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                  className="text-primary font-bold hover:text-primary-light transition-[color] duration-200"
                >
                  {siteConfig.phonePartner}
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-bg-deep text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Want to Learn More About Partnering?
            </h2>
            <p className="text-muted text-lg mb-8">
              Download our Reentry Partner Packet or call to discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/resources" variant="primary" size="lg">
                Download Partner Packet
              </Button>
              <a
                href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-8 py-4 text-lg font-medium hover:bg-primary-dim transition-[color,background-color,border-color] duration-200"
              >
                <Phone size={18} aria-hidden="true" />
                Call {siteConfig.phoneResident}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
