"use client";

import { useState } from "react";
import type { Faq } from "@/lib/services";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-sand border-y border-sand">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-forest">{item.q}</span>
              <span className="shrink-0 text-forest">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="space-y-3 pb-6 text-muted">
                {item.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
