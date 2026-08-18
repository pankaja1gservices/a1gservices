import { Compass, HandCoins, HeartHandshake, Layers, Route, UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const BENEFITS = [
  {
    icon: UserRound,
    title: "Personal Attention",
    description: "Understand your requirement before recommending a direction.",
  },
  {
    icon: Compass,
    title: "Impartial Guidance",
    description: "A clear and straightforward approach to financial options.",
  },
  {
    icon: Layers,
    title: "Multiple Loan Solutions",
    description: "Support across personal, business, home and property-backed financing.",
  },
  {
    icon: Route,
    title: "Simple Process",
    description: "Reduce confusion and make the journey easier to understand.",
  },
  {
    icon: HandCoins,
    title: "Professional Assistance",
    description: "Guidance throughout the financing process.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Approach",
    description: "Solutions centered around the customer's financial objectives.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="border-y border-border/60 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Why Clients Work With A1 Global"
            subtitle="A consulting approach built on clarity, availability and respect for your decision."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-cyan-accent transition-colors duration-500 group-hover:border-cyan-accent/50">
                  <benefit.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
