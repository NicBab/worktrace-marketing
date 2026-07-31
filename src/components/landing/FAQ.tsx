"use client";

import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/constants/faq"
import { useState } from "react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  }
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Answers, upfront.</h2>
        </div>

        <div className="mt-12 w-full">
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.question} className="group border-b border-border/60 last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
