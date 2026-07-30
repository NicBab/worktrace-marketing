import {
  ClipboardList,
  Truck,
  Boxes,
  FileText,
  BarChart3,
  Wallet,
  Users,
  Bell,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Daily Labor Reports",
    desc: "Paperless DLRs with hours, materials, equipment, weather, photos, GPS, and multi-party signatures — emailed to the customer before the crew leaves site.",
  },
  {
    icon: Truck,
    title: "Real-time Dispatch",
    desc: "Drag-and-drop board across calendar, map, list, and kanban. Assign by skill, certification, availability, and distance.",
  },
  {
    icon: Boxes,
    title: "Assets & Inventory",
    desc: "Trucks, tools, and consumables with barcodes, VIN, maintenance history, calibration, warranties, and low-stock alerts.",
  },
  {
    icon: FileText,
    title: "Document Vault",
    desc: "Permits, SOPs, MSDS, certificates. Versioning, expiration alerts, OCR search, and full audit trails.",
  },
  {
    icon: Wallet,
    title: "Billing & Invoicing",
    desc: "DLRs become invoices automatically. Syncs with QuickBooks, Sage, NetSuite, and Xero.",
  },
  {
    icon: BarChart3,
    title: "Analytics that matter",
    desc: "Revenue, gross margin, utilization, retention, and downtime — all in real-time dashboards.",
  },
  {
    icon: Users,
    title: "Customer Portal",
    desc: "Customers approve work, review DLRs, download invoices, and pay online — branded to your company.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Email, SMS, push, Slack, and Teams. Alerts for late jobs, safety, inventory, and approvals.",
  },
  {
    icon: Sparkles,
    title: "AI Copilot",
    desc: "AI job summaries, voice-to-report, predictive inventory, smart scheduling, and natural-language search.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The platform
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            Everything the field needs.
            <br />
            <span className="text-muted-foreground">Nothing the office doesn't.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Purpose-built for contractors, utilities, mechanical, automation, oil & gas, and
            municipal teams — with the polish of modern SaaS.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
