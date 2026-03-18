"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/img/logo.png"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-[family-name:var(--font-libre)] font-bold text-foreground tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-muted">{siteConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-[color] duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="cursor-pointer bg-primary text-bg-deep font-semibold rounded-lg px-4 py-2 text-sm hover:bg-primary-light transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-4 pb-4 border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 border-b border-border text-sm font-medium text-muted hover:text-primary transition-[color] duration-200 cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="mt-4 cursor-pointer text-center bg-primary text-bg-deep font-semibold rounded-lg px-4 py-3 text-sm hover:bg-primary-light transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5"
            onClick={() => setMobileOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
