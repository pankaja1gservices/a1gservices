import { ArrowRight, Briefcase, Building2, Home, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Wallet,
    title: "Personal Loan",
    description: "Flexible financing solutions for personal financial requirements.",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Financing assistance designed around business and working-capital requirements.",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Guidance for individuals planning to purchase or finance their dream home.",
  },
  {
    icon: Building2,
    title: "Loan Against Property",
    description: "Explore property-backed financing solutions based on your financial requirements.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Loan Solutions We Assist With"
            subtitle="Consulting support across four core financing needs for clients in Mumbai and Palghar."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} as="article">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-accent/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-cyan-accent to-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-navy-gradient group-hover:text-navy-foreground">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#enquiry"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-cyan-accent"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
