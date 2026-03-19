import type { Metadata } from "next";
import { Shield, Scale, HandHeart, Home, BicepsFlexed, ClipboardList, Star, User } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Second Chance Housing in Tampa Bay, FL | Blu Manor",
  description:
    "Learn about Blu Manor's mission to provide safe, structured transitional housing for individuals reentering the Tampa Bay community. Employment-focused, supervision-compliant.",
};

const coreValues = [
  {
    icon: Shield,
    title: "Safety",
    description: "A secure, drug-free environment where every resident can feel safe and focused.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description: "Clear expectations and fair consequences that promote personal responsibility.",
  },
  {
    icon: HandHeart,
    title: "Support",
    description: "A professional team that works with residents, families, and supervision agencies.",
  },
  {
    icon: Home,
    title: "Stability",
    description: "Affordable, structured housing that creates the foundation for long-term success.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ===== PAGE BANNER ===== */}
      <section
        className="grain py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0F1623 0%, #162032 50%, #1D2B42 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
              About Blu Manor
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
              <a href="/" className="hover:text-primary transition-[color] duration-200">Home</a>
              <span>/</span>
              <span>About</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Mission"
              title="Building Pathways to Stability"
              className="mb-10"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <p className="text-lg text-muted leading-[1.9]">
                Our mission is to provide safe, structured, and affordable housing for individuals reentering the community. We promote accountability, employment readiness, and long-term stability in a supportive environment.
              </p>
              <p className="text-base text-muted leading-[1.9]">
                At Blu Manor, we understand that a stable home is the foundation for everything else — keeping a job, meeting supervision requirements, and building a better future. We provide that foundation with professionalism, compassion, and clear expectations.
              </p>
              <p className="text-base text-muted leading-[1.9]">
                We currently operate 5+ properties across Hillsborough and Pinellas Counties, serving residents in Tampa, St. Petersburg, Clearwater, and surrounding communities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Community"
              title="Who We Serve"
              description="We provide housing for individuals who are ready to take responsibility and work toward independence."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                  <BicepsFlexed size={22} className="text-primary" />
                </div>
                <h4 className="text-foreground font-semibold text-base mb-2">
                  Employment-Focused Individuals
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  People who are actively working or committed to securing employment. We believe financial independence is the key to lasting stability.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                  <ClipboardList size={22} className="text-primary" />
                </div>
                <h4 className="text-foreground font-semibold text-base mb-2">
                  Individuals Under Supervision
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Those on probation, parole, or pretrial supervision who need housing that meets compliance requirements and supports their reentry journey.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                  <Star size={22} className="text-primary" />
                </div>
                <h4 className="text-foreground font-semibold text-base mb-2">
                  Those Committed to Positive Change
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Anyone ready to follow a structured environment, respect fellow residents, and invest in building a better path forward.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="What We Stand For"
              title="Our Core Values"
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <Card className="h-full text-center">
                    <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={22} className="text-primary" />
                    </div>
                    <h4 className="text-foreground font-semibold text-base mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Avatar */}
            <AnimatedSection delay={0}>
              <div className="flex justify-center md:justify-start">
                <div className="w-48 h-48 rounded-full bg-bg-card border border-border flex items-center justify-center shadow-[0_4px_24px_rgba(15,22,35,0.5)]">
                  <User size={72} className="text-muted" />
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <span className="text-sm uppercase tracking-wide text-primary font-medium block mb-2">
                Our Leadership
              </span>
              <h3 className="font-[family-name:var(--font-libre)] text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-1">
                Meet the Founder
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                Founder &amp; Director, Blu Manor
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                With a deep commitment to helping individuals rebuild their lives, the founder of Blu Manor established this program to fill a critical gap in transitional housing — providing professionally managed, felon-friendly homes that emphasize structure, accountability, and genuine support.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Having witnessed firsthand the challenges of reentry, the vision for Blu Manor was simple: create a place where people can focus on what matters — getting back to work, meeting their obligations, and building toward independence — without worrying about where they&apos;ll sleep.
              </p>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        className="grain py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0F1623 0%, #162032 50%, #1D2B42 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Ready to Start Fresh?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Take the first step toward stable, supportive housing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/apply" size="lg">
                Start Your Application
              </Button>
              <Button href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`} variant="secondary" size="lg">
                Call {siteConfig.phoneResident}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
