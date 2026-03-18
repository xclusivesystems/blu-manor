import type { Metadata } from "next";
import { Home, Briefcase, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig, services, housing, stats, testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blu Manor | Second Chance Transitional Housing Tampa Bay",
  description: siteConfig.description,
};

const serviceIcons = {
  Home,
  Briefcase,
  Shield,
  CheckCircle,
} as const;

const howItWorksSteps = [
  {
    number: "01",
    title: "Apply",
    description: "Complete our short application with your basic info, employment status, and supervision details.",
  },
  {
    number: "02",
    title: "Review",
    description: "Our team reviews your application and contacts you within 24 hours to discuss next steps.",
  },
  {
    number: "03",
    title: "Documentation",
    description: "Provide required documents including ID, supervision paperwork, and proof of income or employment.",
  },
  {
    number: "04",
    title: "Move In",
    description: "Complete your intake, sign your residency agreement, and move into your fully furnished room.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <section
        className="grain min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0F1623 0%, #162032 50%, #1D2B42 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
              {siteConfig.tagline}
            </span>
            <h1 className="font-[family-name:var(--font-libre)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
              {siteConfig.name}
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/apply" size="lg">
                Apply Now
              </Button>
              <Button href={`tel:${siteConfig.phoneResident}`} variant="secondary" size="lg">
                Call Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Services"
              title="What We Offer"
              description="Everything you need to rebuild your life in one supportive environment."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      {IconComponent && (
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-dim flex items-center justify-center">
                          <IconComponent size={20} className="text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-foreground font-semibold text-lg mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
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

      {/* 3. How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Process"
              title="How It Works"
              description="Getting into stable housing is simpler than you think. Here is what to expect."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary font-[family-name:var(--font-libre)] mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Housing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Housing"
              title="Your New Home"
              description="Move-in ready rooms with everything included from day one."
              className="mb-12"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-lg mx-auto">
              <Card className="text-center">
                <div className="mb-2">
                  <span className="text-sm uppercase tracking-wide text-muted font-medium">
                    {housing[0].type}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-3xl text-primary font-bold font-[family-name:var(--font-libre)]">
                    {housing[0].price}
                  </span>
                  <span className="text-muted text-sm">{housing[0].pricePeriod}</span>
                </div>
                <ul className="text-left space-y-2 mb-6">
                  {housing[0].features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted text-sm">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-success text-sm font-medium">{housing[0].availability}</span>
                </div>
                <Button href="/housing" className="w-full">
                  View Details
                </Button>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Stats / Trust Bar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="By the Numbers"
              title="Trusted Housing, Real Results"
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary font-[family-name:var(--font-libre)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Testimonials"
              title="Stories of Change"
              description="Hear from the people whose lives have been shaped by Blu Manor."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.id} delay={i * 0.1}>
                <Card className="h-full flex flex-col">
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-dim flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm font-semibold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground text-sm font-medium">
                          {testimonial.name}
                        </span>
                        {testimonial.verified && (
                          <span className="text-xs bg-primary-dim text-primary px-2 py-0.5 rounded-full font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-muted text-xs">{testimonial.role}</span>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="grain py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              A stable home is the first step. Take it today — apply online or call us to check
              availability and get your questions answered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
