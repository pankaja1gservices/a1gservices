import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "./HeroVideo";
import { LoanTabs } from "./LoanTabs";
import { Marquee } from "./Marquee";
import consultantImg from "@/assets/hero-consultant.png";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative overflow-hidden bg-navy-gradient pt-28 pb-24 sm:pt-32 sm:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-cyan-accent/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-navy-foreground/85 backdrop-blur">
              <Sparkles className="size-3.5 text-gold" />
              Simple. Impartial. Vision.
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-[3.6rem]">
              Financial Solutions Built Around{" "}
              <span className="text-gold">Your Goals.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
              Personal, business and property-backed loan solutions with transparent guidance and a
              simple, impartial approach.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#enquiry">
                  Get a Free Consultation <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <a href="#services">Explore Our Loan Solutions</a>
              </Button>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-navy-foreground/75">
              <ShieldCheck className="size-4 text-gold" />
              <span>Personalized Guidance</span>
              <span className="text-navy-foreground/30">•</span>
              <span>Transparent Process</span>
              <span className="text-navy-foreground/30">•</span>
              <span>Multiple Loan Solutions</span>
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src={consultantImg}
              alt="A1 Global financial consultant ready to assist with loan enquiries"
              width={1024}
              height={1280}
              className="h-72 w-auto object-contain drop-shadow-2xl sm:h-96 lg:h-[30rem]"
            />
          </div>
        </div>
      </div>

      <LoanTabs />

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroVideo />
      </div>

      <div className="relative mt-16 sm:mt-20">
        <Marquee />
      </div>
    </section>
  );
}
