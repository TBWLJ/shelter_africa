import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { shelterAfrica2 } from "../../../data/properties";
import { Container } from "../../ui/Container";

export function PropertyHero() {
  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden bg-black text-white">
      {/* Background */}
      <Image
        src="/1.jpg"
        alt={shelterAfrica2.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <Container className="relative z-10 flex min-h-[85vh] items-end pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <MapPin size={16} />

            {shelterAfrica2.location}
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tighter sm:text-6xl lg:text-8xl">
            {shelterAfrica2.name}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            {shelterAfrica2.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-primary-hover"
            >
              Reserve a Plot

              <ArrowRight size={18} />
            </Link>

            <Link
              href="#gallery"
              className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}