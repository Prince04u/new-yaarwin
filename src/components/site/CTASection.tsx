import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = ({ title = "Ready to join the YaarWin community?", subtitle = "Create your account in minutes and explore the full platform.", primary = { to: "/yaarwin-register", label: "Create account" }, secondary = { to: "/how-to-play", label: "Learn how it works" } }) => (
  <section className="container py-16">
    <div className="relative overflow-hidden rounded-3xl bg-hero text-primary-foreground shadow-elegant">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
      <div className="relative p-10 md:p-14 grid gap-6 md:grid-cols-[1.4fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary-deep hover:bg-white/90">
            <Link to={primary.to}>{primary.label} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
            <Link to={secondary.to}>{secondary.label}</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
