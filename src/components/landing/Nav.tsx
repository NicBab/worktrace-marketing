"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#pricing", label: "Pricing" },
  { href: "#customers", label: "Customers" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight">WorkTrace</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="hero" size="sm">
            Start free trial
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border glass px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <Button variant="ghost" size="sm" className="flex-1">
              Sign in
            </Button>
            <Button variant="hero" size="sm" className="flex-1">
              Start trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
