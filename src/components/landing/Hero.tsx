import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-glow" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-up">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            New — AI-generated Daily Labor Reports
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.05]">
            Every Job. Every Hour.
            <br />
            <span className="text-gradient-primary">Every Document. Tracked.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            WorkTrace is the modern field service platform for contractors, utilities, and
            industrial teams. Dispatch, execute, report, invoice — all in one auditable workflow.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Button variant="hero" size="xl" className="gap-2">
              Start 14-day free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="subtle" size="xl" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Watch demo
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            No credit card required · SOC 2 ready · Cancel anytime
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mt-16 sm:mt-24 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-x-16 -top-16 h-64 bg-primary/20 blur-3xl -z-10" />
          <div className="relative rounded-2xl border border-border bg-surface-elevated p-1.5 shadow-elegant">
            <div className="rounded-xl overflow-hidden ring-1 ring-border">
              <Image
                src="/images/dashboard-preview.jpg"
                alt="WorkTrace dashboard showing revenue, active jobs, dispatch map, and today's work orders"
                width={1600}
                height={1104}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-8 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Logos */}
        <div className="mt-20 sm:mt-28">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by teams running mission-critical field work
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Halcyon", "Meridian", "Northwind", "Ironclad", "Vertex", "Summit"].map((n) => (
              <div key={n} className="text-center text-lg font-bold tracking-tight text-muted-foreground">
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
