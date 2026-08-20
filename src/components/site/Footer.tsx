import { Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/a1-logo-v2.png.asset.json";
const logo = logoAsset.url;
import { FOOTER_EMAIL, PHONE } from "./site-data";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#enquiry" },
];

const SERVICES = ["Personal Loan", "Business Loan", "Home Loan", "Loan Against Property"];

export function Footer() {
  return (
    <footer className="bg-navy-gradient pb-24 pt-20 text-navy-foreground md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy-foreground/95 p-1.5">
                <img
                  src={logo}
                  alt="A1 Global Financial Consultant logo"
                  width={816}
                  height={816}
                  loading="lazy"
                  className="h-full w-auto"
                />
              </span>
              <span className="font-display text-base font-semibold">A1 Global</span>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/70">A1 Global Financial Consultant</p>
            <p className="mt-2 font-display text-sm tracking-wide text-gold">
              Simple. Impartial. Vision.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-navy-foreground/90">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-navy-foreground/90">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-navy-foreground/90">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-navy-foreground"
                >
                  <Phone className="size-4" /> {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER_EMAIL}`}
                  className="inline-flex items-start gap-2 break-all transition-colors hover:text-navy-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" /> {FOOTER_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  Goregaon West, Mumbai
                  <br />
                  Nalasopara East, Palghar
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-foreground/15 pt-8">
          <p className="text-xs leading-relaxed text-navy-foreground/55">
            <strong className="font-semibold text-navy-foreground/75">Disclaimer:</strong> Loan
            availability, eligibility, interest rates, terms and approval are subject to the
            respective lender's policies and assessment. A1 Global Financial Consultant provides
            financial consultation and assistance and does not guarantee loan approval.
          </p>
          <p className="mt-6 text-xs text-navy-foreground/55">
            © 2026 A1 Global Financial Consultant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
