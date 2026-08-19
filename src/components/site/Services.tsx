import { ArrowRight, Briefcase, Building2, Car, Home, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import personalImg from "@/assets/loan-personal.jpg";
import businessImg from "@/assets/loan-business.jpg";
import homeImg from "@/assets/loan-home.jpg";
import carImg from "@/assets/loan-car.jpg";
import propertyImg from "@/assets/loan-property.jpg";

const SERVICES = [
  {
    icon: Wallet,
    image: personalImg,
    title: "Personal Loan",
    description: "Flexible financing solutions for personal financial requirements.",
  },
  {
    icon: Briefcase,
    image: businessImg,
    title: "Business Loan",
    description: "Financing assistance designed around business and working-capital requirements.",
  },
  {
    icon: Home,
    image: homeImg,
    title: "Home Loan",
    description: "Guidance for individuals planning to purchase or finance their dream home.",
  },
  {
    icon: Car,
    image: carImg,
    title: "Car Loan",
    description: "Assistance with vehicle financing for new and pre-owned cars.",
  },
  {
    icon: Building2,
    image: propertyImg,
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
            subtitle="Consulting support across five core financing needs for clients in Mumbai and Palghar."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} as="article">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-accent/40 hover:shadow-lift">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 z-10 h-0.5 scale-x-0 bg-gradient-to-r from-cyan-accent to-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} consulting`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex size-11 items-center justify-center rounded-xl bg-card/90 text-primary backdrop-blur transition-colors duration-500 group-hover:bg-navy-gradient group-hover:text-navy-foreground">
                    <service.icon className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-lg font-semibold text-primary">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
