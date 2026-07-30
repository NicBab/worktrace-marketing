const quotes = [
  {
    q: "We cut invoice lag from 11 days to same-day. Cash flow completely changed.",
    a: "Danielle R.",
    r: "COO, Halcyon Mechanical",
  },
  {
    q: "The DLRs alone paid for the platform in the first month. Customers love getting the PDF before we're off the site.",
    a: "Marcus T.",
    r: "Operations Director, Meridian Utility Services",
  },
  {
    q: "Dispatch used to be six spreadsheets and a whiteboard. Now it's one screen and it's actually fun.",
    a: "Priya S.",
    r: "Dispatcher, Northwind Automation",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="relative py-24 sm:py-32 border-y border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Customers
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
            Built for the field.
            <br />
            <span className="text-muted-foreground">Loved by the office.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((t) => (
            <figure
              key={t.a}
              className="rounded-2xl border border-border bg-gradient-card p-8 flex flex-col"
            >
              <blockquote className="text-lg leading-relaxed text-foreground flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-semibold text-sm">{t.a}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
