import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function PropertiesHero() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Properties
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-7xl">
            Discover land opportunities built for your future.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Explore the available property developments from
            Shelter Africa Estate and find the plot that matches
            your goals.
          </p>

          <Link
            href="#featured-development"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-hover"
          >
            Explore Development

            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}