import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { estateFeatures } from "../../data/features";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function WhyChooseUs() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-black">
              <Image
                src="/1.jpg"
                alt="Shelter Africa 2 estate entrance in Ogbomoso"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div
                className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="max-w-sm rounded-2xl border border-white/15 bg-black/30 p-5 text-white backdrop-blur-md sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                    Shelter Africa 2
                  </p>

                  <p className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    A place to begin building your future.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div
              className="absolute -bottom-5 -right-5 -z-10 hidden h-32 w-32 rounded-3xl bg-brand-primary lg:block"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div>
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                Why Shelter Africa
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-text-primary sm:text-4xl lg:text-5xl">
                More than land.
                <br />
                A foundation for what comes next.
              </h2>

              <p className="mt-6 text-base leading-7 text-text-secondary sm:text-lg">
                Shelter Africa Estate offers an opportunity to
                secure a plot of land with documentation and
                features designed to support your journey toward
                property ownership.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-10 divide-y divide-border border-y border-border">
              {estateFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="group flex gap-5 py-6"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary transition-colors duration-200 group-hover:bg-brand-primary group-hover:text-white">
                      <Icon
                        size={20}
                        aria-hidden={true}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-text-primary">
                        {feature.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-text-primary transition-colors hover:text-brand-primary"
            >
              Learn more about Shelter Africa

              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}