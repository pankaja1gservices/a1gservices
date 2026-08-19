import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { Locations } from "@/components/site/Locations";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq, FAQS } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";

const TITLE = "A1 Global Financial Consultant | Personal, Business, Home & Car Loans";
const DESCRIPTION =
  "A1 Global Financial Consultant provides personalized guidance for personal loans, business loans, home loans, car loans and loan against property in Mumbai and Palghar.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "A1 Global Financial Consultant",
  slogan: "Simple. Impartial. Vision.",
  description: DESCRIPTION,
  telephone: "+91-7620017562",
  email: "pankaj.a1gservices@gmail.com",
  founder: { "@type": "Person", name: "Pankaj Tiwari" },
  areaServed: ["Mumbai", "Palghar"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "614, Topiwala Center, Station Road, Goregaon (West)",
      addressLocality: "Mumbai",
      postalCode: "400104",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Reliable Prestige, 2nd Floor 245/246, Chandan Naka, Achole Road, Nalasopara (East)",
      addressLocality: "Palghar",
      postalCode: "401209",
      addressCountry: "IN",
    },
  ],
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "loan consultant Mumbai, personal loan consultant Mumbai, business loan consultant Mumbai, home loan consultant Mumbai, car loan consultant Mumbai, loan against property Mumbai, loan consultant Goregaon, loan consultant Nalasopara, financial consultant Palghar",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(structuredData) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <EnquiryForm />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Locations />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
