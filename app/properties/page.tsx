import type { Metadata } from "next";

import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { HowItWorks } from "../components/sections/HowItWork";
import { PropertiesHero } from "../components/sections/properties/PropertiesHero";
import { FeaturedDevelopment } from "../components/sections/properties/FeaturedDevelopment";
import { PlotOptions } from "../components/sections/properties/PlotOption";

export const metadata: Metadata = {
  title: "Properties | Shelter Africa Estate",
  description:
    "Explore available property developments and plot options from Shelter Africa Estate.",
};

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesHero />

      <FeaturedDevelopment />

      <PlotOptions />

      <HowItWorks />

      <FAQ />

      <FinalCTA />
    </main>
  );
}