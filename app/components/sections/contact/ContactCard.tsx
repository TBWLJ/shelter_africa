import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

const cards = [
  {
    title: "Call Us",
    value: "+234 XXX XXX XXXX",
    subtitle: "Speak with our sales team",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@shelterafrica.com",
    subtitle: "We'll reply as soon as possible",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value: "Abogunde Road, Ogbomoso",
    subtitle: "Property location",
    icon: MapPin,
  },
];

export function ContactCards() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-4xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10">
                  <Icon
                    className="text-brand-primary"
                    size={24}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 font-semibold text-text-primary">
                  {card.value}
                </p>

                <p className="mt-2 text-sm text-text-secondary">
                  {card.subtitle}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}