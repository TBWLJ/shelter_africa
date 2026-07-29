// import { Button } from "@/components/ui/Button";
// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";
import { Section } from "./components/ui/Section";
import { SectionHeading } from "./components/ui/SectionHeading";
import { Hero } from "./components/sections/Hero";
import { PropertyOverview } from "./components/sections/PropertyOverview";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { PropertyShowcase } from "./components/sections/PropertyShowcase";
import { HowItWorks } from "./components/sections/HowItWork";
import { LocationSection } from "./components/sections/LocationSection";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <PropertyOverview />
      <WhyChooseUs />
      <PropertyShowcase />
      <HowItWorks />
      <LocationSection />
      <FAQ />
      <FinalCTA />

      {/* <Section spacing="large">
        <Container>
          <SectionHeading
            eyebrow="Shelter Africa Estate"
            title="Your future starts with a place to call your own."
            description="Discover land ownership opportunities in Ogbomoso, Nigeria, with thoughtfully positioned plots designed for your next chapter."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/properties">
              Explore Properties
            </Button>

            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section> */}
    </main>
  );
}