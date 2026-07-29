import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function AboutHero() {
  return (
    <Section className="relative overflow-hidden bg-black text-white">
      <Container>
        <div className="mx-auto max-w-4xl py-16 text-center lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            About Shelter Africa
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-7xl">
            Helping people take confident steps toward land ownership.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Shelter Africa Estate provides opportunities for
            individuals and families looking to secure land in
            Ogbomoso through clearly presented property options
            and documented ownership processes.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/properties"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-hover"
            >
              Explore Properties
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}