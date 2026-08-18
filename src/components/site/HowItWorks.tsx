import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    description: "Share your financial objective and basic requirements.",
  },
  {
    number: "02",
    title: "Understand Your Options",
    description: "Discuss potential financing routes relevant to your situation.",
  },
  {
    number: "03",
    title: "Documentation & Application",
    description: "Get guidance on the required documentation and application process.",
  },
  {
    number: "04",
    title: "Move Forward With Confidence",
    description: "Receive continued assistance through the process.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A Simple, Four-Step Journey"
            subtitle="Clear steps, no jargon, and guidance at every stage."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[1.45rem] top-2 h-[calc(100%-1rem)] w-px bg-border lg:left-0 lg:top-[1.6rem] lg:h-px lg:w-full"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 110} as="li">
                <div className="relative flex gap-6 lg:block">
                  <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-gradient font-display text-sm font-semibold text-navy-foreground shadow-soft ring-8 ring-background">
                    {step.number}
                  </span>
                  <div className="lg:mt-7">
                    <h3 className="font-display text-base font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
