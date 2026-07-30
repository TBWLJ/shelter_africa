import Image from "next/image";

import { shelterAfricaGallery } from "../../../data/gallery";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function PropertyGallery() {
  return (
    <Section
      id="gallery"
      className="bg-white"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-extrabold">
            Explore the development.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {shelterAfricaGallery.map((image) => (
            <div
              key={image.id}
              className="relative aspect-4/3 overflow-hidden rounded-4xl"
            >
              <Image
                src={image.image}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}