import type { Metadata } from "next";
import {
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig, housing } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Housing Locations — Transitional Housing Across Tampa Bay | Blu Manor",
  description:
    "Blu Manor operates 5+ transitional housing properties across the Tampa Bay area. Fully furnished shared rooms at $750/month, all utilities included. Felon-friendly and move-in ready.",
};

const amenities = [
  "Furnished shared room",
  "Twin bed & dresser",
  "Flat-screen TV",
  "Utilities & Wi-Fi",
  "On-site laundry",
];

const feeSchedule = [
  { item: "Shared Room Rate", details: "Starting at $750 per month" },
  { item: "Utilities", details: "Included" },
  { item: "Wi-Fi", details: "Included" },
  { item: "Laundry", details: "On-site, Included" },
  { item: "Payment Due", details: "On agreed-upon date each month" },
  { item: "Late Fees", details: "May apply for late payments" },
  { item: "Non-Payment", details: "May result in discharge from housing" },
];

export default function HousingPage() {
  return (
    <div className="bg-bg-deep text-foreground">
      {/* Page Banner */}
      <section className="relative py-24 bg-bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-libre)] text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Housing Options
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-muted">
              <a href="/" className="hover:text-primary transition-[color] duration-200">Home</a>
              <span>/</span>
              <span className="text-foreground">Housing</span>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Header + Property Card */}
      <section className="py-20 px-6 bg-bg-deep">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="What's Included"
              title="Fully Furnished Rooms"
              description="Shared and private rooms starting at $750/month across the Tampa Bay area. All-inclusive — no hidden fees, no surprises."
            />
            <p className="text-center text-sm text-muted mt-4">
              Call{" "}
              <a
                href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                className="text-primary font-semibold hover:text-primary-light transition-[color] duration-200"
              >
                {siteConfig.phoneResident}
              </a>{" "}
              to check current room availability.
            </p>
          </AnimatedSection>

          {/* Property Card */}
          <AnimatedSection delay={0.1} className="mt-12">
            <div className="max-w-[480px] mx-auto rounded-xl bg-bg-card border border-border shadow-[0_4px_24px_rgba(15,22,35,0.4)] overflow-hidden">
              {/* Card Image */}
              <div className="relative w-full h-56 bg-bg-surface">
                <Image
                  src="/images/bedroom-shared.jpg"
                  alt="Blu Manor — furnished shared room with twin beds"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-libre)] text-2xl font-bold text-foreground tracking-tight mb-1">
                  Shared Room
                </h3>
                <p className="flex items-center gap-1.5 text-sm text-muted mb-3">
                  <MapPin size={14} className="text-primary shrink-0" />
                  Tampa Bay Area, FL
                </p>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Structured, supportive housing with everything you need from day one. Close to employment corridors, public transit, and supervision offices.
                </p>

                <ul className="space-y-2 mb-6">
                  {amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-5">
                  <p className="text-foreground font-semibold mb-4">
                    <span className="text-2xl font-bold text-primary font-[family-name:var(--font-libre)]">$750</span>
                    /month — All Inclusive
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-bg-deep font-semibold px-6 py-3 rounded-lg hover:bg-primary-light hover:-translate-y-0.5 transition-[color,background-color,transform] duration-200"
                  >
                    <Phone size={16} />
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fee Schedule */}
      <section className="py-20 px-6 bg-bg-surface">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              label="Transparent Pricing"
              title="Fee Schedule"
              description="No hidden costs. Here's exactly what you can expect."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-12">
            <div className="max-w-[700px] mx-auto overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-bg-card border border-border">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground uppercase tracking-wide">
                      Item
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground uppercase tracking-wide">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeSchedule.map((row, index) => (
                    <tr
                      key={row.item}
                      className={
                        index % 2 === 0
                          ? "bg-bg-deep border-x border-border"
                          : "bg-bg-card border-x border-border"
                      }
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-foreground border-b border-border">
                        {row.item}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted border-b border-border">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-6 bg-bg-deep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-libre)] text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Ready to Move In?
            </h2>
            <p className="text-muted text-lg mb-8">
              Rooms are move-in ready. Apply today or call for availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" size="lg">
                Apply Now
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
