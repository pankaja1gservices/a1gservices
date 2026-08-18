import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/a1-logo.png";
import { NAV_LINKS, PHONE } from "./site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="A1 Global Financial Consultant logo"
            width={816}
            height={816}
            className={cn("w-auto transition-all duration-300", scrolled ? "h-9" : "h-11")}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[0.95rem] font-semibold tracking-tight text-primary sm:text-base">
              A1 Global
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground sm:text-[0.65rem]">
              Financial Consultant
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-cyan-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="lg" className="hidden md:inline-flex">
            <a href="#enquiry">Get a Free Consultation</a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="md:hidden" aria-label="Call now">
            <a href={`tel:${PHONE}`}>
              <Phone />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 pb-2 pt-3">
            <Button asChild variant="hero" size="xl" className="w-full">
              <a href="#enquiry" onClick={() => setOpen(false)}>
                Get a Free Consultation
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
