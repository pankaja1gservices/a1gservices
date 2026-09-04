import { useState } from "react";
import { Briefcase, Building2, Car, Home, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import personalImg from "@/assets/loan-personal.jpg";
import businessImg from "@/assets/loan-business.jpg";
import homeImg from "@/assets/loan-home.jpg";
import carImg from "@/assets/loan-car.jpg";
import propertyImg from "@/assets/loan-property.jpg";

const TABS = [
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

export function LoanTabs() {
  const [active, setActive] = useState(0);
  const current = TABS[active]!;

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:-mt-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lift">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {TABS.map((tab, i) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "flex flex-col items-center gap-2 border-b border-r border-border/60 px-3 py-5 text-center text-xs font-semibold transition-colors sm:text-sm",
                i === active
                  ? "bg-card text-primary"
                  : "bg-secondary/60 text-muted-foreground hover:text-primary",
              )}
            >
              <tab.icon
                className={cn("size-6", i === active ? "text-gold" : "text-cyan-accent")}
              />
              {tab.title}
              <span
                className={cn(
                  "h-0.5 w-8 rounded-full transition-colors",
                  i === active ? "bg-gold" : "bg-transparent",
                )}
              />
            </button>
          ))}
        </div>

        <div className="grid items-center gap-6 p-6 sm:grid-cols-[220px_1fr] sm:p-9">
          <img
            src={current.image}
            alt={`${current.title} consulting`}
            loading="lazy"
            width={1024}
            height={768}
            className="h-40 w-full rounded-xl object-cover sm:h-44"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
              {current.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {current.description} Speak with our consultant to understand eligibility,
              documentation and the options relevant to your profile.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <a href="#enquiry">Apply Now</a>
              </Button>
              <Button asChild variant="outlineNavy" size="lg">
                <a href="#services">Know More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
