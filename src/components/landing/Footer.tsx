import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Solutions",
    links: ["Contractors", "Utilities", "Mechanical", "Oil & Gas", "Municipalities"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "SOC 2", "DPA"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight">WorkTrace</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Every Job. Every Hour. Every Document. Tracked.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WorkTrace, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            SOC 2 ready · GDPR · CCPA
          </p>
        </div>
      </div>
    </footer>
  );
}
