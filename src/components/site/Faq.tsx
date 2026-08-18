import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EMAIL, PHONE } from "./site-data";

export const FAQS = [
  {
    q: "What types of loans do you assist with?",
    a: "We provide consultation and assistance for personal loans, business loans, home loans and loan against property (LAP).",
  },
  {
    q: "How do I start a loan enquiry?",
    a: "Fill in the enquiry form on this page, call us, or send a WhatsApp message. We will get in touch to understand your requirement and explain the options relevant to you.",
  },
  {
    q: "What documents may be required?",
    a: "Requirements vary by loan type and lender, and commonly include identity proof, address proof, income or business documents and property papers where applicable. We will share a checklist based on your specific case.",
  },
  {
    q: "Can self-employed individuals enquire?",
    a: "Yes. Salaried professionals, self-employed individuals and business owners are all welcome to enquire. Eligibility is assessed by the respective lender.",
  },
  {
    q: "Can I enquire about a loan against property?",
    a: "Yes. Share your property and financing details and we will explain the property-backed options that may be relevant to your requirement.",
  },
  {
    q: "How long does the process take?",
    a: "Timelines depend on the loan type, documentation and the lender's own assessment process, so we do not promise a fixed duration. We keep you informed at every stage.",
  },
  {
    q: "How can I contact A1 Global Financial Consultant?",
    a: `You can call or WhatsApp us on ${PHONE}, or email ${EMAIL}.`,
  },
  {
    q: "Where are your offices located?",
    a: "We have offices at Topiwala Center, Station Road, Goregaon (West), Mumbai - 400 104, and Reliable Prestige, Chandan Naka, Achole Road, Nalasopara (East), Palghar - 401 209.",
  },
];

export function Faq() {
  return (
    <section className="border-y border-border/60 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, Answered Clearly"
            subtitle="Straightforward answers about how our consultation works."
          />
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border/70 bg-card px-5 shadow-soft transition-colors hover:border-cyan-accent/40"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
