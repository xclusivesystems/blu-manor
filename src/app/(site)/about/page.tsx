import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutContent, stats, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Blu Manor — Second Chance Transitional Housing",
  description:
    "Learn about Blu Manor's mission to provide safe, structured, and affordable transitional housing in the Tampa Bay area for individuals reentering the community.",
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. Page Banner */}
      <section
        className="grain py-24 px-4 sm:px-6 lg:px-8 bg-bg-surface"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
              Our Story
            </span>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
              About Blu Manor
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Mission"
              title="Why We Exist"
              className="mb-10"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto text-center">
              {aboutContent.mission}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Story"
              title="How It Started"
              className="mb-10"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-muted text-base leading-relaxed max-w-3xl mx-auto">
              {aboutContent.story}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Values"
              title="What We Stand For"
              description="These principles guide everything we do at Blu Manor."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="text-foreground font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Impact"
              title="By the Numbers"
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

      {/* 6. CTA — Get Involved */}
      <section className="grain py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Get Involved
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whether you are a resident looking for housing or a professional referring clients,
              Blu Manor is here to help. Take the next step today.
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
