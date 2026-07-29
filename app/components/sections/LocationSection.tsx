import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { shelterAfricaLocation } from "../../data/location";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function LocationSection() {
  const location = shelterAfricaLocation;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.mapQuery,
  )}`;

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-4xl bg-surface-muted">
              <Image
                src="/images/properties/shelter-africa-2-entrance.jpg"
                alt="Shelter Africa 2 estate entrance in Ogbomoso"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div
                className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/30 p-4 text-white backdrop-blur-md">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary">
                    <MapPin
                      size={20}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Property Location
                    </p>

                    <p className="mt-0.5 font-bold">
                      {location.address}, {location.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              Find Us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-text-primary sm:text-4xl lg:text-5xl">
              Your next chapter starts in Ogbomoso.
            </h2>

            <p className="mt-6 text-base leading-7 text-text-secondary sm:text-lg">
              {location.description}
            </p>

            {/* Address */}
            <div className="mt-8 border-y border-border py-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                Estate Address
              </p>

              <address className="mt-3 not-italic">
                <p className="text-lg font-bold text-text-primary">
                  {location.address}
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  {location.city}, {location.state}
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  {location.country}
                </p>
              </address>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Contact Us

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-text-primary transition-colors hover:border-black hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Get Directions

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}