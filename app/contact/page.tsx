import type { Metadata } from "next";

import { ContactHero } from "../components/sections/contact/ContactHero";
import { ContactCards } from "../components/sections/contact/ContactCard";
import { ContactForm } from "../components/sections/contact/ContactForm";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | Shelter Africa Estate",
  description:
    "Get in touch with Shelter Africa Estate to learn more about our available plots and property opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactCards />

      <ContactForm />

      <FAQ />

      <FinalCTA />
    </main>
  );
}