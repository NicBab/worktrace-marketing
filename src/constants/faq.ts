import type { FAQItem } from "@/types/marketing"


export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does implementation take?",
    answer: "Most teams are live in under two weeks. Enterprise migrations with data import from ServiceTitan, Procore, or spreadsheets typically take 3–6 weeks with a dedicated CSM.",
  },
  {
    question: "Does WorkTrace work offline?",
    answer: "Yes. The mobile experience is offline-first. Crews can capture hours, materials, photos, and signatures without signal — everything syncs automatically when connectivity returns.",
  },
  {
    question: "Which accounting systems do you integrate with?",
    answer: "QuickBooks Online, QuickBooks Desktop, Sage, NetSuite, and Xero. Invoices generated from approved DLRs sync automatically.",
  },
  {
    question: "Is my data isolated from other companies?",
    answer: "Yes. WorkTrace is multi-tenant with hard organization isolation, row-level security, encrypted storage, and full audit logs. SOC 2 controls are in place.",
  },
  {
    question: "Can we customize forms and DLRs?",
    answer: "Absolutely. Custom fields, custom checklists, custom DLR templates, and branded PDFs are supported on Business and above.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes — 14 days, no credit card required. You can invite your whole team and import real data during the trial.",
  },
];