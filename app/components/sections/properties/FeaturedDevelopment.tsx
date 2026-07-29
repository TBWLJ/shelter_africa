import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { shelterAfrica2 } from "../../../data/properties";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function FeaturedDevelopment() {
  return (
    <Section
      id="featured-development"
      className="bg-white"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
            <Image
              src={"/1.jpg"}
              alt={shelterAfrica2.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary">
              <MapPin size={16} />

              {shelterAfrica2.location}
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight">
              {shelterAfrica2.name}
            </h2>

            <p className="mt-6 leading-8 text-text-secondary">
              {shelterAfrica2.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {shelterAfrica2.features.map((feature) => (
                <span
                  key={feature.id}
                  className="rounded-full bg-surface-muted px-4 py-2 text-sm font-medium"
                >
                  {feature.label}
                </span>
              ))}
            </div>

            <Link
              href="/properties/shelter-africa-2"
              className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-primary"
            >
              View Development

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}