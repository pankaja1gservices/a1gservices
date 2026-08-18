import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const POINTS = [
  "Personalized consultation for every requirement",
  "Clear communication at each stage",
  "Impartial guidance, without pressure",
  "Assistance throughout the loan process",
  "Focus on finding suitable financing options",
];

export function Trust() {
  return (
    <section className="border-y border-border/60 bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title="Your Financial Goals. Our Guidance."
            subtitle="A1 Global Financial Consultant helps individuals, salaried professionals, entrepreneurs and property owners navigate suitable financing options with clarity. We start by understanding your requirement, then explain the routes available to you in plain language — so you can decide with confidence."
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our role is advisory and practical: comparing what is relevant to your profile,
            preparing you for documentation, and staying available through the process.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 rounded-3xl border border-border/70 bg-card p-6 shadow-soft sm:p-8">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl px-2 py-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-accent" />
                <span className="text-sm leading-relaxed text-foreground sm:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
