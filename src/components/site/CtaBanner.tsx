import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { PHONE } from "./site-data";

export function CtaBanner() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy-gradient px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-cyan-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-16 size-72 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-navy-foreground sm:text-4xl">
              Have a Financial Requirement? Let's Talk.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/75">
              Get straightforward guidance for your personal, business or property financing needs.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href={`tel:${PHONE}`}>
                  <Phone className="size-4" /> Call {PHONE}
                </a>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <a href="#enquiry">
                  <MessageSquare className="size-4" /> Send an Enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
