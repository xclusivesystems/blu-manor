import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us — Blu Manor Transitional Housing",
  description:
    "Contact Blu Manor for housing inquiries or partner referrals. Resident line: 727-563-6540. Partner & referral line: 727-710-6930.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="py-20 bg-bg-surface grain">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight">
              Get In Touch
            </h1>
            <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-[color] duration-200">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Contact Us"
              title="We're Here to Help"
              description="Have questions about our housing program, the application process, or partnership opportunities? Reach out — we'd love to hear from you."
            />
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-16">
            {/* Call Us */}
            <AnimatedSection delay={0}>
              <Card className="h-full text-center">
                <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[var(--color-navy,#0f1623)] to-[var(--color-navy-light,#1a2540)] flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Call Us</h4>
                <p className="text-sm text-muted mb-3">Speak with us directly</p>
                <a
                  href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                  className="text-primary font-semibold text-lg hover:text-primary-light transition-[color] duration-200"
                >
                  {siteConfig.phoneResident}
                </a>
                <br />
                <span className="text-xs text-muted">Resident Inquiries</span>
                <br />
                <a
                  href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
                  className="text-primary font-semibold text-lg hover:text-primary-light transition-[color] duration-200 mt-2 inline-block"
                >
                  {siteConfig.phonePartner}
                </a>
                <br />
                <span className="text-xs text-muted">Partner &amp; Referral Line</span>
              </Card>
            </AnimatedSection>

            {/* Email Us */}
            <AnimatedSection delay={0.1}>
              <Card className="h-full text-center">
                <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[var(--color-navy,#0f1623)] to-[var(--color-navy-light,#1a2540)] flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Email Us</h4>
                <p className="text-sm text-muted mb-3">Send us a message anytime</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-semibold text-lg hover:text-primary-light transition-[color] duration-200"
                >
                  {siteConfig.email}
                </a>
              </Card>
            </AnimatedSection>

            {/* Office Hours */}
            <AnimatedSection delay={0.2}>
              <Card className="h-full text-center">
                <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[var(--color-navy,#0f1623)] to-[var(--color-navy-light,#1a2540)] flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Office Hours</h4>
                <p className="text-foreground font-medium">Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-foreground font-medium">Saturday: 10:00 AM – 2:00 PM</p>
                <p className="text-muted text-sm mt-1">Sunday: Closed</p>
              </Card>
            </AnimatedSection>

            {/* Location */}
            <AnimatedSection delay={0.3}>
              <Card className="h-full text-center">
                <div className="w-[72px] h-[72px] mx-auto mb-5 rounded-xl bg-gradient-to-br from-[var(--color-navy,#0f1623)] to-[var(--color-navy-light,#1a2540)] flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Location</h4>
                <p className="text-foreground font-medium">Tampa Bay Area, FL</p>
                <p className="text-muted text-sm">Serving Hillsborough &amp; Pinellas Counties</p>
                <p className="text-muted text-xs mt-2">Multiple locations — call for nearest availability</p>
              </Card>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-libre)] tracking-tight text-center mb-8">
              Our Area
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-[900px] mx-auto rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(15,22,35,0.5)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225486.95498563!2d-82.5943194!3d27.9944024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1707955200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blu Manor service area — Tampa Bay, FL"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-navy,#0f1623)] to-[var(--color-navy-light,#1a2540)]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-libre)] tracking-tight">
              Ready to Apply?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Complete our intake form online — it only takes a few minutes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now
              </Button>
              <Button
                href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                variant="secondary"
                size="lg"
              >
                ☎ Call {siteConfig.phoneResident}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
