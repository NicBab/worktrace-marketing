import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most teams are live in under two weeks. Enterprise migrations with data import from ServiceTitan, Procore, or spreadsheets typically take 3–6 weeks with a dedicated CSM.",
  },
  {
    q: "Does WorkTrace work offline?",
    a: "Yes. The mobile experience is offline-first. Crews can capture hours, materials, photos, and signatures without signal — everything syncs automatically when connectivity returns.",
  },
  {
    q: "Which accounting systems do you integrate with?",
    a: "QuickBooks Online, QuickBooks Desktop, Sage, NetSuite, and Xero. Invoices generated from approved DLRs sync automatically.",
  },
  {
    q: "Is my data isolated from other companies?",
    a: "Yes. WorkTrace is multi-tenant with hard organization isolation, row-level security, encrypted storage, and full audit logs. SOC 2 controls are in place.",
  },
  {
    q: "Can we customize forms and DLRs?",
    a: "Absolutely. Custom fields, custom checklists, custom DLR templates, and branded PDFs are supported on Business and above.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — 14 days, no credit card required. You can invite your whole team and import real data during the trial.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Answers, upfront.</h2>
        </div>

        <div className="mt-12 w-full">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border/60 last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
