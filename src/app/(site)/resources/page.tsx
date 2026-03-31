import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  FileText,
  Handshake,
  Briefcase,
  GraduationCap,
  Heart,
  Scale,
  Phone,
  Building2,
} from "lucide-react";
import { faq, siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/resources/FaqAccordion";

export const metadata: Metadata = {
  title: "Resources & Documents | Resident Handbook & Forms | Blu Manor",
  description:
    "Download Blu Manor's resident handbook, house rules, application forms, and partner packets. Employment, education, and mental health resources.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Resources &amp; Documents
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-muted mt-4">
              <Link href="/" className="hover:text-primary transition-[color] duration-200">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground">Resources</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Forms & Documents */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Downloads"
              title="Forms &amp; Documents"
              description="Download important documents, forms, and handbooks related to the Blu Manor housing program."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <BookOpen className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Resident Handbook
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Complete guide to policies, expectations, and resources for all residents.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  ↓ Download PDF
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <ClipboardList className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  House Rules
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Detailed rules and guidelines all residents are expected to follow.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  ↓ Download PDF
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <FileText className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Application Form
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Printable version of the housing application for offline submission.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  ↓ Download PDF
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Handshake className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Reentry Partner Packet
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Information packet for supervision officers and reentry professionals.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  ↓ Download PDF
                </a>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Helpful Links"
              title="External Resources"
              description="Additional resources for employment, reentry support, and community services."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <AnimatedSection delay={0.1}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Briefcase className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Employment Services
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Job search assistance, resume building, and career development resources.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  Visit Resource →
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <GraduationCap className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Education &amp; Training
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  GED programs, vocational training, and continuing education opportunities.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  Visit Resource →
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Heart className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Mental Health Services
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Counseling, substance abuse programs, and mental health support.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  Visit Resource →
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Scale className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Legal Aid
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Free and low-cost legal assistance for reentry-related matters.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  Visit Resource →
                </a>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Card className="flex flex-col">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Building2 className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  FL DOC Resource Directory
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  Florida Department of Corrections resource directory for reentry services, supervision offices, and community programs statewide.
                </p>
                <a
                  href="https://www.dc.state.fl.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm hover:text-primary-light transition-[color] duration-200 inline-flex items-center gap-1"
                >
                  Visit FL DOC →
                </a>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
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

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-bg-deep text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Need Help Finding Resources?
            </h2>
            <p className="text-muted text-lg mb-8">
              Our team can help connect you with the right support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
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
