import Image from "next/image";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function AboutStory() {
  return (
    <Section>
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src="/1.jpg"
              alt="Shelter Africa Estate"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Building confidence through transparent land ownership.
            </h2>

            <p className="mt-6 leading-8 text-text-secondary">
              Shelter Africa Estate focuses on making land ownership
              easier to understand by presenting available plot
              options, property information, and documentation in a
              straightforward way.
            </p>

            <p className="mt-6 leading-8 text-text-secondary">
              Whether you're purchasing land for your future home,
              investment, or long-term plans, our goal is to provide
              clear information and guide you through the available
              purchasing process.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}