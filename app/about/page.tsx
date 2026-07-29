import { Metadata } from "next";

import { AboutHero } from "..//components/sections/about/AboutHero";
import { AboutStory } from "..//components/sections/about/AboutStory";
import { AboutValues } from "..//components/sections/about/AboutValues";
import { FinalCTA } from "../components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Shelter Africa Estate",
  description:
    "Learn more about Shelter Africa Estate and our approach to helping individuals and families explore land ownership opportunities in Ogbomoso.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <AboutStory />

      <AboutValues />

      <FinalCTA />
    </main>
  );
}