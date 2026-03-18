"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type FaqItem } from "@/lib/constants";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-bg-card"
        >
          <button
            type="button"
            onClick={() => toggle(i)}
            aria-expanded={open === i}
            aria-controls={`faq-${i}`}
            className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
          >
            <span className="font-medium text-foreground pr-4">
              {item.question}
            </span>
            <ChevronDown
              className="text-primary flex-shrink-0 transition-[transform] duration-200"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
              size={20}
              aria-hidden="true"
            />
          </button>

          {open === i && (
            <div
              id={`faq-${i}`}
              role="region"
              className="px-6 pb-4 text-muted text-sm leading-relaxed"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
