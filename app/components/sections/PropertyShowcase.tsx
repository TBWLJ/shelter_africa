import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";

import { shelterAfrica2 } from "../../data/properties";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function PropertyShowcase() {
  const property = shelterAfrica2;

  return (
    <Section className="overflow-hidden bg-white">
      <Container>
        <div className="relative">
          {/* Main Image */}
          <div className="relative min-h-150 overflow-hidden rounded-4xl bg-black sm:min-h-175 lg:min-h-190">
            <Image
              src="/1.jpg"
              alt={property.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10"
              aria-hidden="true"
            />

            {/* Top Location */}
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-12 lg:top-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <MapPin
                  size={16}
                  className="text-brand-primary"
                  aria-hidden="true"
                />

                <span>{property.location}</span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
              <div className="max-w-2xl text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Featured Development
                </p>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-7xl">
                  {property.name}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                  {property.description}
                </p>

                <Link
                  href="/properties/shelter-africa-2"
                  className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Explore Shelter Africa 2

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Details Card */}
          <div className="relative z-10 mx-5 -mt-8 rounded-2xl border border-border bg-white p-6 shadow-2xl sm:mx-8 sm:p-8 lg:absolute lg:bottom-8 lg:right-8 lg:mx-0 lg:w-95">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
              Property Highlights
            </p>

            <div className="mt-5 space-y-4">
              {property.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-3"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Check
                      size={15}
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-sm font-semibold text-text-primary">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Starting from
                </span>

                <span className="text-lg font-extrabold text-text-primary">
                  ₦1,200,000
                </span>
              </div>

              <Link
                href="/contact"
                className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Reserve Your Plot
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}