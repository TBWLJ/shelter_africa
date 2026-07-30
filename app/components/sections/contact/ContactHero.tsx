import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function ContactHero() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Let's help you secure your preferred plot.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Whether you're making your first enquiry or you're
            ready to reserve a plot, our team is here to answer
            your questions.
          </p>
        </div>
      </Container>
    </Section>
  );
}