"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg-surface border-t border-border px-4 py-3">
      <div className="flex gap-3">
        <a
          href={`tel:${siteConfig.phoneResident}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold py-3 text-sm cursor-pointer transition-[color,background-color,border-color] duration-200 hover:bg-primary-dim"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/apply"
          className="flex-1 flex items-center justify-center rounded-lg bg-primary text-bg-deep font-semibold py-3 text-sm cursor-pointer transition-[color,background-color,border-color] duration-200 hover:bg-primary-light"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
