import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$79",
    desc: "For small crews getting off paper.",
    features: ["Up to 5 users", "Work orders & DLRs", "Customer portal", "Email support"],
    cta: "Start free trial",
    variant: "outline" as const,
  },
  {
    name: "Business",
    price: "$149",
    desc: "For growing service companies.",
    features: [
      "Up to 25 users",
      "Dispatch board & map",
      "Inventory & assets",
      "QuickBooks / Xero sync",
      "SMS & push notifications",
    ],
    cta: "Start free trial",
    variant: "outline" as const,
  },
  {
    name: "Professional",
    price: "$299",
    desc: "For teams running multi-site ops.",
    features: [
      "Up to 100 users",
      "Advanced analytics",
      "AI Copilot & OCR",
      "Sage / NetSuite sync",
      "SSO (Azure AD / Okta)",
      "Priority support",
    ],
    cta: "Start free trial",
    variant: "hero" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    desc: "For industrial operators at scale.",
    features: [
      "Unlimited users",
      "SOC 2 & audit logs",
      "Dedicated CSM",
      "Custom integrations",
      "99.9% SLA",
    ],
    cta: "Contact sales",
    variant: "subtle" as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            Simple plans. Serious value.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            14-day free trial. No credit card required.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "relative rounded-2xl border p-6 flex flex-col transition-all duration-300",
                t.featured
                  ? "border-primary/60 bg-gradient-card shadow-glow scale-[1.02]"
                  : "border-border bg-gradient-card hover:border-primary/30",
              )}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                  Most popular
                </div>
              )}
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={t.variant} className="mt-8 w-full">
                {t.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
