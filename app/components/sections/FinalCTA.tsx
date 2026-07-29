import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function FinalCTA() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="relative isolate overflow-hidden rounded-4xl bg-brand-primary px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Background Image */}
          <Image
            src="/images/properties/shelter-africa-2-entrance.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center opacity-20"
            aria-hidden="true"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 -z-10 bg-black/40"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              Take the Next Step
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl lg:text-6xl">
              Ready to secure your place?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Explore the available plot options at Shelter Africa
              2 or speak with our team to learn more about the
              property and the next steps.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
              >
                Reserve a Plot

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}