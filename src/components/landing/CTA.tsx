import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-glow -z-10" />
          <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gradient max-w-2xl mx-auto">
            Ready to run every job like your best one?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Start a 14-day trial today. Invite your team, import your data, and see the difference
            by the end of the week.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="xl" className="gap-2">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="subtle" size="xl">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
