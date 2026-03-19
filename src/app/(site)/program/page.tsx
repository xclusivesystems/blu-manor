import type { Metadata } from "next";
import {
  Circle,
  Clock,
  Briefcase,
  ClipboardList,
  Users,
  Ban,
  AlertTriangle,
  Phone,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Program — Structure, Support & Accountability | Blu Manor",
  description:
    "Blu Manor's structured reentry program promotes employment, supervision compliance, and long-term stability. Learn what to expect as a resident.",
};

const houseRules = [
  "Maintain employment or verified income",
  "Comply with all supervision requirements",
  "Follow curfew and property guidelines",
  "Maintain cleanliness of shared spaces",
  "Abstain from illegal activity or prohibited substances",
  "Violations may result in removal from housing",
];

const curfewItems = [
  {
    icon: Clock,
    text: (
      <>
        <strong>Standard Curfew:</strong> 10:00 PM nightly
      </>
    ),
  },
  {
    icon: Briefcase,
    text: "Adjustable for approved work schedules",
  },
  {
    icon: ClipboardList,
    text: "Curfew exceptions require prior written approval",
  },
];

const visitorItems = [
  {
    icon: Users,
    text: (
      <>
        Visitors permitted <strong>only with prior approval</strong>
      </>
    ),
  },
  {
    icon: Clock,
    text: "Allowed during designated hours only",
  },
  {
    icon: Ban,
    text: (
      <>
        Overnight guests are <strong>not allowed</strong>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    text: "Residents are responsible for approved visitor conduct",
  },
];

const conductItems = [
  "Maintain employment or verifiable income",
  "Respect roommates and property at all times",
  "Keep assigned areas clean and organized",
  "Follow all supervision requirements",
  "Avoid disruptive or threatening behavior",
  "Report any safety concerns to management immediately",
];

const disciplinarySteps = [
  {
    step: 1,
    title: "Verbal Warning",
    description: "Initial discussion about the violation and expectations.",
  },
  {
    step: 2,
    title: "Written Warning",
    description: "Formal documentation of the violation on record.",
  },
  {
    step: 3,
    title: "Probationary Review",
    description: "Review period with specific improvement requirements.",
  },
  {
    step: 4,
    title: "Removal from Program",
    description: "If necessary, discharge from housing program.",
  },
];

export default function ProgramPage() {
  return (
    <div className="bg-bg-deep text-foreground">
      {/* Page Banner */}
      <section className="relative py-24 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Program Details &amp; Policies
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-muted">
              <a href="/" className="hover:text-primary transition-[color] duration-200">Home</a>
              <span>/</span>
              <span className="text-foreground">Program</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-20 px-6 bg-bg-deep">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-wide text-primary font-medium">
                Expectations
              </span>
              <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-2 mb-4">
                House Rules
              </h2>
              <p className="text-muted leading-relaxed mb-8 max-w-[700px]">
                All residents agree to abide by the following rules to maintain a safe, respectful, and productive living environment.
              </p>
              <ul className="space-y-3">
                {houseRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <Circle size={8} className="text-primary shrink-0 mt-2 fill-primary" />
                    <span className="text-foreground leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Zero-Tolerance Drug Policy */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto rounded-xl border border-amber-600/40 bg-amber-950/20 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle size={22} className="text-amber-400 shrink-0 mt-0.5" />
                <h3 className="font-[family-name:var(--font-libre)] text-xl font-bold text-foreground">
                  Zero-Tolerance Drug-Free Policy
                </h3>
              </div>
              <p className="text-muted leading-relaxed">
                Blu Manor maintains a zero-tolerance policy for illegal drugs, unauthorized substances, and criminal activity. Residents may be subject to reasonable suspicion testing. Violation of this policy may result in{" "}
                <strong className="text-foreground">immediate removal</strong>{" "}
                from the housing program.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Curfew & Visitor Policy */}
      <section className="py-20 px-6 bg-bg-deep">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Curfew */}
            <AnimatedSection>
              <h3 className="font-[family-name:var(--font-libre)] text-2xl font-bold text-foreground tracking-tight mb-6">
                Curfew Policy
              </h3>
              <ul className="space-y-4">
                {curfewItems.map(({ icon: Icon, text }, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Visitor */}
            <AnimatedSection delay={0.1}>
              <h3 className="font-[family-name:var(--font-libre)] text-2xl font-bold text-foreground tracking-tight mb-6">
                Visitor Policy
              </h3>
              <ul className="space-y-4">
                {visitorItems.map(({ icon: Icon, text }, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-wide text-primary font-medium">
                Standards
              </span>
              <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-2 mb-4">
                Code of Conduct
              </h2>
              <p className="text-muted leading-relaxed mb-8 max-w-[700px]">
                All residents are expected to uphold the following standards of conduct throughout their stay.
              </p>
              <ul className="space-y-3">
                {conductItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Circle size={8} className="text-primary shrink-0 mt-2 fill-primary" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Disciplinary Process */}
      <section className="py-20 px-6 bg-bg-deep">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Fair & Transparent"
              title="Disciplinary Process"
              description="We follow a progressive approach to address rule violations. Serious violations may result in immediate discharge."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {disciplinarySteps.map(({ step, title, description }) => (
                <div
                  key={step}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-[0_4px_24px_rgba(201,168,76,0.2)] shrink-0">
                    <span className="font-[family-name:var(--font-libre)] font-bold text-bg-deep text-lg">
                      {step}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-libre)] text-base font-bold text-foreground mb-2">
                    {title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-6 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Questions About Our Program?
            </h2>
            <p className="text-muted text-lg mb-8">
              We&apos;re happy to discuss our policies and answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                <MessageSquare size={18} className="mr-2" />
                Contact Us
              </Button>
              <Button
                href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                variant="secondary"
                size="lg"
              >
                <Phone size={18} className="mr-2" />
                Call {siteConfig.phoneResident}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
