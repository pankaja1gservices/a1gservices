import { Mail, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EMAIL, PHONE } from "./site-data";

export function About() {
  return (
    <section id="about" className="border-y border-border/60 bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-8">
        <Reveal>
          {/* Placeholder portrait — replace the image below with Pankaj Tiwari's photograph. */}
          <figure className="relative mx-auto w-full max-w-sm">
            <div className="aspect-4/5 overflow-hidden rounded-3xl border border-border/70 bg-navy-gradient shadow-lift">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="flex size-24 items-center justify-center rounded-full border border-navy-foreground/25 font-display text-3xl font-semibold text-navy-foreground">
                  PT
                </span>
                <p className="text-sm text-navy-foreground/70">
                  Professional photograph placeholder
                </p>
              </div>
            </div>
            <figcaption className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-border/70 bg-card px-5 py-3 text-center shadow-soft">
              <p className="font-display text-sm font-semibold text-primary">Pankaj Tiwari</p>
              <p className="text-xs text-muted-foreground">Founder / Financial Consultant</p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Meet Your Financial Consultant"
            subtitle="Pankaj Tiwari founded A1 Global Financial Consultant with a straightforward belief: borrowing decisions become easier when the guidance is honest and the process is explained clearly."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              He works directly with each client — listening to the requirement first, then
              outlining the financing routes that are genuinely relevant to that situation, along
              with what each one involves.
            </p>
            <p>
              The approach is client-first and impartial: no pressure, no jargon, and no promises
              that depend on a lender's assessment. What you get is practical support from the first
              conversation through documentation and follow-up.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <Quote className="size-5 text-gold" />
            <p className="mt-3 font-display text-lg leading-snug text-primary">
              Simple. Impartial. Vision.
            </p>
            <footer className="mt-2 text-sm text-muted-foreground">
              The philosophy behind every consultation.
            </footer>
          </blockquote>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href={`tel:${PHONE}`}>
                <Phone className="size-4" /> Call {PHONE}
              </a>
            </Button>
            <Button asChild variant="outlineNavy" size="xl">
              <a href={`mailto:${EMAIL}`}>
                <Mail className="size-4" /> Email Us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
