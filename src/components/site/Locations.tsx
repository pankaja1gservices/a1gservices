import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { LOCATIONS, PHONE } from "./site-data";

export function Locations() {
  return (
    <section id="locations" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Locations"
            title="Visit Us in Mumbai or Palghar"
            subtitle="Two offices for in-person consultations — Goregaon (West) and Nalasopara (East)."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((location, i) => (
            <Reveal key={location.title} delay={i * 110}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-44 bg-navy-gradient">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--navy-foreground)_35%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--navy-foreground)_35%,transparent)_1px,transparent_1px)] [background-size:38px_38px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-navy-foreground/15 ring-1 ring-navy-foreground/25 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <MapPin className="size-6 text-navy-foreground" />
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold text-primary">
                    {location.title}
                  </h3>
                  <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-muted-foreground">
                    {location.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="hero" size="lg">
                      <a href={location.maps} target="_blank" rel="noopener noreferrer">
                        <Navigation className="size-4" /> Get Directions
                      </a>
                    </Button>
                    <Button asChild variant="outlineNavy" size="lg">
                      <a href={`tel:${PHONE}`}>
                        <Phone className="size-4" /> Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
