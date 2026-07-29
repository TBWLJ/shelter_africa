import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "./../ui/Container";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/1.jpg"
        alt="Entrance gate of Shelter Africa 2 estate in Ogbomoso"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Image Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/45"
        aria-hidden="true"
      />

      {/* Bottom Gradient */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-black/80 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] items-end py-12 sm:py-16 lg:py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Main Content */}
          <div className="max-w-3xl text-white">
            {/* Location */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <MapPin
                size={16}
                className="text-brand-primary"
                aria-hidden="true"
              />

              <span>Abogunde Road, Ogbomoso</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Find your place.
              <br />
              <span className="text-brand-primary">
                Build your future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Discover land ownership opportunities with
              Shelter Africa Estate and take the next step
              toward building something of your own.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/properties"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore Properties

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Property Summary */}
          <div className="w-full lg:max-w-sm">
            <div className="rounded-2xl border border-white/15 bg-black/35 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                    Featured Development
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Shelter Africa 2
                  </h2>
                </div>

                <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white">
                  Available
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs font-medium text-white/60">
                    300 sqm
                  </p>

                  <p className="mt-1 text-xl font-extrabold">
                    ₦1.2M
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs font-medium text-white/60">
                    500 sqm
                  </p>

                  <p className="mt-1 text-xl font-extrabold">
                    ₦2M
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-white/60">
                  Initial deposit
                </span>

                <span className="text-sm font-bold">
                  ₦200,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}