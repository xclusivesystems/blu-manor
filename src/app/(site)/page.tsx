import type { Metadata } from "next";
import { Home, Briefcase, Shield, CheckCircle, Phone, Building2, BicepsFlexed, ClipboardList, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/resources/FaqAccordion";
import { siteConfig, services, housing, testimonials, faq } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blu Manor | Felon-Friendly Transitional Housing in Tampa Bay, FL",
  description:
    "Safe, structured, and affordable transitional housing for individuals reentering the community in Tampa Bay, FL. Felon-friendly, move-in ready, rooms starting at $750/month all-inclusive. Private rooms available. Call 727-563-6540.",
  alternates: { canonical: "/" },
};

const serviceIcons = {
  Home,
  Briefcase,
  Shield,
  CheckCircle,
} as const;

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="grain min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0F1623 0%, #162032 50%, #1D2B42 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <div className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">
              Professionally Managed Housing
            </div>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4">
              Second Chance Transitional Housing
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Safe &bull; Structured &bull; Affordable Living
            </p>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Shared and private rooms starting at $750/month with utilities and Wi-Fi included. Professionally managed, felon-friendly housing designed to help you rebuild and thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`} size="lg">
                <Phone size={18} className="mr-2" />
                Resident Inquiries: {siteConfig.phoneResident}
              </Button>
              <Button href="/apply" variant="secondary" size="lg">
                Apply Now
              </Button>
            </div>
            <div className="text-muted text-sm mb-4 space-x-1">
              <Phone size={14} className="inline -mt-0.5" />
              <a href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`} className="text-primary hover:text-primary-light transition-[color] duration-200">
                {siteConfig.phoneResident}
              </a>
              <span className="text-muted">— Resident Inquiries</span>
              <span className="text-muted px-1">|</span>
              <Phone size={14} className="inline -mt-0.5" />
              <a href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`} className="text-primary hover:text-primary-light transition-[color] duration-200">
                {siteConfig.phonePartner}
              </a>
              <span className="text-muted">— Partner &amp; Referral Line</span>
            </div>
            <p className="text-muted text-sm italic">
              Limited rooms available across our properties — call to confirm current openings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TRUST STAT BAR ===== */}
      <section className="bg-bg-card border-y border-border py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 text-center">
            <div className="flex items-center gap-2 sm:flex-1 sm:justify-center text-foreground font-medium">
              <Building2 size={18} className="text-primary shrink-0" />
              <span>5+ Properties Across Tampa Bay</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2 sm:flex-1 sm:justify-center text-foreground font-medium">
              <CheckCircle size={18} className="text-primary shrink-0" />
              <span>Move-In Within Days</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2 sm:flex-1 sm:justify-center text-foreground font-medium">
              <Briefcase size={18} className="text-primary shrink-0" />
              <span>Employment-Focused Program</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM FEATURES ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="What We Offer"
              title="Program Features"
              description="Everything you need for a stable, structured transition back to independent living."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <Card className="h-full text-center">
                    {IconComponent && (
                      <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={22} className="text-primary" />
                      </div>
                    )}
                    <h4 className="text-foreground font-semibold text-base mb-2">
                      {service.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOUSING SNAPSHOT ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Housing"
              title="Rooms Starting at $750/month"
              description="Shared and private rooms available — fully furnished with everything included. No hidden fees, no surprises."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {housing.map((option, i) => (
              <AnimatedSection key={option.id} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="flex items-end justify-between mb-6">
                    <h3 className="text-foreground font-semibold text-xl">{option.type}</h3>
                    <div>
                      <span className="text-3xl font-bold text-primary font-[family-name:var(--font-libre)]">
                        {option.price}
                      </span>
                      <span className="text-muted text-sm">{option.pricePeriod}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted text-sm">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${option.availability === "Available" ? "bg-success" : "bg-primary"}`} />
                    <span className={`text-sm font-medium ${option.availability === "Available" ? "text-success" : "text-primary"}`}>
                      {option.availability}
                    </span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <p className="text-muted text-base leading-relaxed mb-5 max-w-2xl mx-auto">
                One simple rate so you can focus on rebuilding your life. Call to check current availability and pricing for private rooms.
              </p>
              <Button href="/housing">
                View Full Details
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Our Community"
              title="Who We Serve"
              description="We provide housing solutions for individuals ready to take the next step toward stability and independence."
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
                  Those who are actively working or committed to securing and maintaining employment.
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
                  Residents on probation, parole, or pretrial who need stable, compliant housing.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card className="h-full text-center">
                <div className="w-12 h-12 rounded-full bg-primary-dim flex items-center justify-center mx-auto mb-4">
                  <Star size={22} className="text-primary" />
                </div>
                <h4 className="text-foreground font-semibold text-base mb-2">
                  Those Committed to Change
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Anyone ready to follow structured guidelines and work toward long-term self-sufficiency.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Success Stories"
              title="What Our Residents Say"
              description="Hear from people who've experienced the Blu Manor difference."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.id} delay={i * 0.1}>
                <Card className="h-full flex flex-col">
                  <p className="text-4xl text-primary font-[family-name:var(--font-libre)] leading-none mb-3">
                    &ldquo;
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-dim flex items-center justify-center shrink-0">
                      <span className="text-primary text-sm font-semibold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-foreground text-sm font-medium">
                          {testimonial.name}
                        </span>
                        {testimonial.verified && (
                          <span className="text-xs bg-primary-dim text-primary px-2 py-0.5 rounded-full font-medium">
                            ✓ Verified Partner
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

      {/* ===== REENTRY PROFESSIONALS ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-bg-card p-8 md:p-12 shadow-[0_4px_24px_rgba(15,22,35,0.4)]">
              <span className="text-sm uppercase tracking-wide text-primary font-medium block mb-3">
                For Reentry Professionals
              </span>
              <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                Partnering With Reentry Professionals
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8 max-w-2xl">
                We work directly with probation and parole officers, case managers, and reentry organizations across Tampa Bay. Our structured program meets supervision compliance requirements — making us a trusted placement option for your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/partners">
                  Submit a Referral
                </Button>
                <Button href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`} variant="secondary">
                  <Phone size={16} className="mr-2" />
                  Partner Line: {siteConfig.phonePartner}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-deep">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Common Questions"
              title="Frequently Asked Questions"
              className="mb-10"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FaqAccordion items={faq} />
          </AnimatedSection>
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Safe, structured, affordable housing is just a call or click away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button href="/apply" size="lg">
                Start Your Application
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
            <div className="text-muted text-sm space-x-1">
              <a
                href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                className="text-primary hover:text-primary-light transition-[color] duration-200 font-medium"
              >
                <Phone size={14} className="inline -mt-0.5 mr-1" />
                {siteConfig.phoneResident}
              </a>
              <span className="text-muted">Resident Inquiries</span>
              <span className="text-muted px-2">|</span>
              <a
                href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                className="text-primary hover:text-primary-light transition-[color] duration-200 font-medium"
              >
                <Phone size={14} className="inline -mt-0.5 mr-1" />
                {siteConfig.phonePartner}
              </a>
              <span className="text-muted">Partner Line</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
