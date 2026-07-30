import type { Metadata } from "next";

import { Documentation } from "../../components/sections/property/Documentation";
import { PropertyGallery } from "../../components/sections/property/PropertyGallery";
import { PropertyHero } from "../../components/sections/property/PropertyHero";

import { PropertyOverview } from "../../components/sections/PropertyOverview";
import { WhyChooseUs } from "../../components/sections/WhyChooseUs";
import { HowItWorks } from "../../components/sections/HowItWork";
import { LocationSection } from "../../components/sections/LocationSection";
import { FAQ } from "../../components/sections/FAQ";
import { FinalCTA } from "../../components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Shelter Africa 2 | Shelter Africa Estate",
  description:
    "Discover Shelter Africa 2, explore available plots, documentation, location, and learn how to reserve your preferred plot.",
};

export default function ShelterAfrica2Page() {
  return (
    <main>
      <PropertyHero />

      <PropertyGallery />

      <PropertyOverview />

      <WhyChooseUs />

      <Documentation />

      <LocationSection />

      <HowItWorks />

      <FAQ />

      <FinalCTA />
    </main>
  );
}