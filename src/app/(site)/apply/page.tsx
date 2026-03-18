import type { Metadata } from "next";
import { ClipboardList, Search, FileText, Home } from "lucide-react";
import ApplyForm from "@/components/apply/ApplyForm";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Apply | Blu Manor — Start Your Application",
  description:
    "Apply for transitional housing at Blu Manor in Tampa Bay. Felon-friendly, move-in ready, $750/month all-inclusive. Complete the form to get started.",
};

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Apply",
    description: "Submit your application — takes less than 5 minutes.",
  },
  {
    icon: Search,
    step: "02",
    title: "Review",
    description: "We review your application and reach out within 1-2 business days.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Documentation",
    description: "Provide any required documents and complete final approval steps.",
  },
  {
    icon: Home,
    step: "04",
    title: "Move In",
    description: "Get your keys and start your next chapter in stable housing.",
  },
];

export default function ApplyPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="py-24 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight">
              Apply Now
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Start your journey to stable housing
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What To Expect — 4-step timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="The Process"
              title="What To Expect"
              description="We've made the application process as simple as possible."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      Step {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Application"
              title="Start Your Application"
              description="All fields are required. We keep your information confidential."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8 shadow-[0_4px_24px_rgba(15,22,35,0.4)]">
              <ApplyForm />
            </div>
          </AnimatedSection>

          {/* Need Help? */}
          <AnimatedSection delay={0.2} className="mt-6 text-center">
            <p className="text-muted text-sm">
              Having trouble with the form? Call us at{" "}
              <a
                href="tel:727-563-6540"
                className="text-primary font-medium cursor-pointer hover:text-primary-light transition-[color] duration-200"
              >
                727-563-6540
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
