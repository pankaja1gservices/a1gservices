import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Lock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EMAIL, PHONE, WHATSAPP_URL } from "./site-data";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const LOAN_TYPES = [
  "Personal Loan",
  "Business Loan",
  "Home Loan",
  "Car Loan",
  "Loan Against Property",
];
const EMPLOYMENT_TYPES = ["Salaried", "Self Employed", "Business Owner", "Other"];
const PREFERRED_LOCATIONS = [
  "Goregaon West, Mumbai",
  "Nalasopara East, Palghar",
  "Online / Phone Consultation",
];

export function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [employment, setEmployment] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: String(form.get("name") ?? "").trim(),
      mobile: String(form.get("mobile") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      loan_type: loanType || null,
      amount: String(form.get("amount") ?? "").trim() || null,
      employment: employment || null,
      location: location || null,
      message: String(form.get("message") ?? "").trim() || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("We couldn't submit your enquiry. Please try again or call us.");
      return;
    }
    setLoanType("");
    setEmployment("");
    setLocation("");
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Enquiry"
              title="Let's Find the Right Financial Solution for You."
              subtitle="Share a few details and our consultant will get in touch to understand your requirement and explain the options available."
            />
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`tel:${PHONE}`}
                className="block rounded-xl border border-border/70 bg-card px-5 py-4 font-medium text-primary shadow-soft transition-colors hover:border-cyan-accent/50"
              >
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block break-all rounded-xl border border-border/70 bg-card px-5 py-4 font-medium text-primary shadow-soft transition-colors hover:border-cyan-accent/50"
              >
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border/70 bg-card px-5 py-4 font-medium text-primary shadow-soft transition-colors hover:border-cyan-accent/50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-lift sm:p-9">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="size-8 text-primary" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-primary">
                    Thank you for your enquiry
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Your details have been recorded. Our consultant will contact you shortly to
                    discuss your requirement. For anything urgent, you can call us on {PHONE}.
                  </p>
                  <Button
                    variant="outlineNavy"
                    size="lg"
                    className="mt-7"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+ ]{10,15}"
                      required
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="loanType">Loan Type</Label>
                    <Select value={loanType} onValueChange={setLoanType} name="loanType" required>
                      <SelectTrigger id="loanType">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        {LOAN_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Approximate Loan Amount</Label>
                    <Input
                      id="amount"
                      name="amount"
                      inputMode="numeric"
                      placeholder="e.g. ₹ 10,00,000"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="employment">Employment Type</Label>
                    <Select value={employment} onValueChange={setEmployment} name="employment">
                      <SelectTrigger id="employment">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {EMPLOYMENT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select value={location} onValueChange={setLocation} name="location">
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {PREFERRED_LOCATIONS.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us briefly about your requirement"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <Send className="size-4" /> Request a Consultation
                        </>
                      )}
                    </Button>
                    <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Lock className="size-3.5" />
                      Your information is used only to respond to your enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
