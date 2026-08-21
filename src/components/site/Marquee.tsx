import { Banknote, Building2, Car, Home, Landmark, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Banknote, label: "Personal Loan" },
  { icon: Building2, label: "Business Loan" },
  { icon: Home, label: "Home Loan" },
  { icon: Car, label: "Car Loan" },
  { icon: Landmark, label: "Loan Against Property" },
  { icon: ShieldCheck, label: "Transparent Process" },
  { icon: Sparkles, label: "Simple. Impartial. Vision." },
];

export function Marquee() {
  return (
    <div className="marquee-mask relative w-full overflow-hidden border-y border-border/60 bg-secondary/40 py-4">
      <div
        className="animate-marquee flex w-max items-center gap-10 pr-10 hover:[animation-play-state:paused]"
        aria-hidden
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10 pr-10">
            {ITEMS.map(({ icon: Icon, label }) => (
              <span
                key={`${copy}-${label}`}
                className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted-foreground"
              >
                <Icon className="size-4 text-cyan-accent" />
                {label}
                <span className="ml-8 h-1 w-1 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">
        {ITEMS.map((item) => item.label).join(", ")}
      </span>
    </div>
  );
}
