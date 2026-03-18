import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-[family-name:var(--font-libre)] font-bold text-foreground tracking-tight mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-primary mb-3">{siteConfig.tagline}</p>
            <p className="text-sm text-muted leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-[color] duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Resources
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-[color] duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phoneResident}`}
                    className="hover:text-primary transition-[color] duration-200"
                  >
                    {siteConfig.phoneResident}{" "}
                    <span className="text-subtle text-xs">(Residents)</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phonePartner}`}
                    className="hover:text-primary transition-[color] duration-200"
                  >
                    {siteConfig.phonePartner}{" "}
                    <span className="text-subtle text-xs">(Partners)</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-[color] duration-200"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://xclusivesystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-[color] duration-200"
            >
              XclusiveSystems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
