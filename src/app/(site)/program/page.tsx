import type { Metadata } from "next";
import {
  Home,
  Briefcase,
  Shield,
  CheckCircle,
  ShieldCheck,
  FileText,
  Phone,
  UserCheck,
  LogIn,
} from "lucide-react";
import { services, faq, siteConfig } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Program | Blu Manor — Transitional Housing Program Details",
  description:
    "Learn how Blu Manor's transitional housing program works — services, house rules, what to expect, and FAQs. Structured support for successful reentry in Tampa Bay.",
};

const serviceIcons: Record<string, React.ElementType> = {
  Home,
  Briefcase,
  Shield,
  CheckCircle,
};

const houseRules = [
  "Rent due on your agreed-upon date each month",
  "Must maintain employment or verified income",
  "Must comply with all supervision requirements",
  "No illegal substances, drugs, or paraphernalia on premises",
  "Respect all residents, staff, and property at all times",
  "Curfew compliance as required by your supervision terms",
  "Participate in scheduled house meetings",
];

const timeline = [
  {
    step: 1,
    icon: FileText,
    title: "Apply",
    description:
      "Submit your application online in minutes or call us directly. We review every application with care — your background does not automatically disqualify you.",
  },
  {
    step: 2,
    icon: Phone,
    title: "Interview & Review",
    description:
      "A brief phone or in-person screening to learn more about your situation, goals, and supervision requirements. We want to make sure it's a good fit for you.",
  },
  {
    step: 3,
    icon: UserCheck,
    title: "Documentation",
    description:
      "Complete required paperwork, agreements, and any coordination with your probation or parole officer. We'll guide you through each step.",
  },
  {
    step: 4,
    icon: LogIn,
    title: "Move In",
    description:
      "Get settled in your furnished room. Everything is ready for you — bed, dresser, TV, utilities, and Wi-Fi. Start your fresh chapter.",
  },
];

export default function ProgramPage() {
  const faqPreview = faq.slice(0, 3);

  return (
    <div className="bg-bg-deep text-foreground">
      {/* Page Banner */}
      <section className="relative py-24 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-sm uppercase tracking-wide text-primary font-medium">
              Structured Support
            </span>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3 mb-4">
              Our Program
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              A structured, supportive environment designed to help individuals
              reenter the community with stability, accountability, and dignity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Program Features"
              title="What We Offer"
              description="Every aspect of the Blu Manor program is designed to remove barriers and help you focus on rebuilding your life."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? CheckCircle;
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary-dim shrink-0">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-libre)] text-lg font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted leading-relaxed text-sm">
                          {service.description}
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

      {/* House Rules */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Expectations"
              title="House Rules"
              description="Our rules exist to create a safe, stable environment where every resident can succeed. Consistency and respect are the foundation of our community."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ul className="mt-10 space-y-3">
              {houseRules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-bg-card border border-border"
                >
                  <ShieldCheck
                    className="text-primary shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-foreground leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* What To Expect — Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Your Journey"
              title="What To Expect"
              description="From application to move-in, we make the process as straightforward as possible. Here's how it works."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map(({ step, icon: Icon, title, description }, index) => (
              <AnimatedSection key={step} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Step Badge */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-[0_4px_24px_rgba(201,168,76,0.2)] shrink-0">
                    <span className="font-[family-name:var(--font-libre)] font-bold text-bg-deep text-lg">
                      {step}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-primary-dim mb-3">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-[family-name:var(--font-libre)] text-lg font-bold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Common Questions"
              title="Frequently Asked Questions"
              description="Quick answers to the questions we hear most often."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 space-y-6">
              {faqPreview.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <Button href="/resources" variant="secondary" size="md">
              See All FAQs
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted text-lg mb-8">
              Take the first step toward stable housing and a fresh start. Apply
              online or reach out — we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" size="lg">
                Apply Now
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
