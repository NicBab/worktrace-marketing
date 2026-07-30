import { Radio, Wrench, FileSignature, CheckCircle2, Receipt, LineChart } from "lucide-react";

const steps = [
  { icon: Radio, title: "Dispatch", desc: "Route the right crew to the right site." },
  { icon: Wrench, title: "Execute", desc: "Offline-first mobile. Photos, GPS, checklists." },
  { icon: FileSignature, title: "Report", desc: "DLRs written and signed on-site." },
  { icon: CheckCircle2, title: "Approve", desc: "Customer approves in one tap." },
  { icon: Receipt, title: "Invoice", desc: "Auto-generated and synced to your GL." },
  { icon: LineChart, title: "Analyze", desc: "Margin, utilization, retention — live." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 border-y border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The workflow
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            One connected lifecycle.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nothing retyped. Nothing rescanned. Nothing lost between systems.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-surface-elevated border border-border shadow-elegant">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
