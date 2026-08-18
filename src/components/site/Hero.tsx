import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-finance.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-64 h-96 w-96 rounded-full bg-secondary blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-soft">
            <Sparkles className="size-3.5 text-gold" />
            Simple. Impartial. Vision.
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
            Financial Solutions Built Around{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-accent bg-clip-text text-transparent">
              Your Goals.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Personal, business and property-backed loan solutions with transparent guidance and a
            simple, impartial approach.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#enquiry">Get a Free Consultation</a>
            </Button>
            <Button asChild variant="outlineNavy" size="xl">
              <a href="#services">Explore Our Loan Solutions</a>
            </Button>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-cyan-accent" />
            <span>Personalized Guidance</span>
            <span className="text-border">•</span>
            <span>Transparent Process</span>
            <span className="text-border">•</span>
            <span>Multiple Loan Solutions</span>
          </p>
        </div>

        <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="overflow-hidden rounded-3xl border border-border/70 shadow-lift">
            <img
              src={heroImage}
              alt="Abstract premium financial growth illustration"
              width={1280}
              height={1280}
              className="h-[22rem] w-full object-cover sm:h-[30rem]"
            />
          </div>
          <div className="mx-auto -mt-14 w-[92%] rounded-2xl border border-border/70 bg-card/95 p-6 shadow-lift backdrop-blur-xl sm:absolute sm:-bottom-10 sm:-left-8 sm:mx-0 sm:mt-0 sm:w-80">
            <h2 className="font-display text-lg font-semibold text-primary">Need the right loan?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us what you need and our consultant will help you understand your options.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-5 w-full">
              <a href="#enquiry">
                Start Your Enquiry <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
