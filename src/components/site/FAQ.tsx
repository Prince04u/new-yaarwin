import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = ({ faqs, title = "Frequently Asked Questions" }: { faqs: { q: string; a: string }[]; title?: string }) => (
  <section className="container py-16">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">{title}</h2>
      <p className="text-center text-muted-foreground mb-10">Clear answers to the questions our community asks most.</p>
      <Accordion type="single" collapsible className="rounded-xl border bg-card shadow-soft divide-y">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="px-5">
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
