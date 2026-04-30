import { ReactNode } from "react";

export const PageHero = ({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: string; children?: ReactNode }) => (
  <section className="relative overflow-hidden bg-radial-soft border-b">
    <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
      <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
    </div>
    <div className="container py-16 md:py-24 text-center animate-fade-in">
      {eyebrow && (
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
          {eyebrow}
        </span>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] max-w-4xl mx-auto">
        {title}
      </h1>
      {subtitle && <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
    </div>
  </section>
);
