import type { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "@/components/apply/ApplyForm";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Apply for Housing — Blu Manor Tampa Bay",
  description:
    "Apply for transitional housing at Blu Manor. Move-in ready rooms available across Tampa Bay. Felon-friendly, $750/month all-inclusive.",
};

const steps = [
  {
    number: 1,
    title: "Submit your application",
    description: "Takes about 5 minutes",
  },
  {
    number: 2,
    title: "We review and follow up",
    description: "Within 1 business day",
  },
  {
    number: 3,
    title: "Complete documentation & intake",
    description: "Finalize your paperwork",
  },
  {
    number: 4,
    title: "Move in",
    description: "Often within days of approval",
  },
];

export default function ApplyPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="py-20 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight">
              Comprehensive Referral &amp; Intake
            </h1>
            <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-[color] duration-200">Home</Link>
              <span>/</span>
              <span>Apply</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Apply for Housing"
              title="Referral &amp; Intake Packet"
              description="Complete the form below to apply for transitional housing at Blu Manor. All fields marked with * are required."
            />
          </AnimatedSection>

          {/* What to Expect Timeline */}
          <AnimatedSection delay={0.1}>
            <div className="mt-12 rounded-xl border border-border bg-bg-card p-8 shadow-[0_4px_24px_rgba(15,22,35,0.4)]">
              <h3 className="text-xl font-semibold text-foreground text-center mb-8">
                What to Expect
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 flex-1">
                    <div className="flex sm:flex-col items-center gap-4 sm:gap-0 w-full">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-bg-deep font-bold text-sm">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden sm:block h-px flex-1 bg-border mx-4 absolute" />
                      )}
                      <div className="sm:text-center sm:mt-3">
                        <strong className="block text-foreground text-sm font-semibold">
                          {step.title}
                        </strong>
                        <span className="text-muted text-xs mt-1 block">{step.description}</span>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden sm:hidden h-px w-8 bg-border self-stretch sm:w-px sm:h-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Application Form */}
          <AnimatedSection delay={0.2} className="mt-10">
            <div className="rounded-xl border border-border bg-bg-card p-6 md:p-10 shadow-[0_4px_24px_rgba(15,22,35,0.4)]">
              <ApplyForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
