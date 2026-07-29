import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { propertyFAQs } from "../../data/faq";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function FAQ() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-text-primary sm:text-4xl">
              Questions before you take the next step?
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">
              Find answers to some of the most common questions
              about Shelter Africa 2 and the property ownership
              process.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-text-primary transition-colors hover:text-brand-primary"
            >
              Still have questions?

              <ArrowUpRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-border border-y border-border">
            {propertyFAQs.map((faq) => (
              <details
                key={faq.id}
                className="group"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-bold text-text-primary sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-text-primary transition-all duration-200 group-open:rotate-45 group-open:bg-brand-primary group-open:text-white group-open:border-brand-primary"
                    aria-hidden="true"
                  >
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </summary>

                <div className="max-w-2xl pb-6 pr-12">
                  <p className="text-sm leading-7 text-text-secondary sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}