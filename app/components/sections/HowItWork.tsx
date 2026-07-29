import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { propertyPurchaseProcess } from "../../data/process";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";

export function HowItWorks() {
  return (
    <Section className="bg-black text-white">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            From choosing your plot to taking the next step.
          </h2>

          <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
            Our process is designed to help you understand the
            steps involved in securing your preferred plot at
            Shelter Africa Estate.
          </p>
        </div>

        {/* Desktop Process */}
        <div className="relative mt-16 hidden lg:block">
          {/* Connecting Line */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-8 h-px bg-white/15"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-4 gap-8">
            {propertyPurchaseProcess.map((step) => {
              const Icon = step.icon;

              return (
                <li key={step.id}>
                  {/* Icon */}
                  <div className="relative flex size-16 items-center justify-center rounded-full border border-white/15 bg-black text-brand-primary">
                    <Icon
                      size={23}
                      aria-hidden={true}
                    />
                  </div>

                  {/* Number */}
                  <p className="mt-7 text-xs font-bold tracking-[0.18em] text-brand-primary">
                    {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile / Tablet Process */}
        <ol className="relative mt-12 space-y-0 lg:hidden">
          {propertyPurchaseProcess.map((step, index) => {
            const Icon = step.icon;
            const isLast =
              index === propertyPurchaseProcess.length - 1;

            return (
              <li
                key={step.id}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {/* Timeline */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-black text-brand-primary">
                    <Icon
                      size={20}
                      aria-hidden={true}
                    />
                  </div>

                  {!isLast && (
                    <div
                      className="absolute top-12 h-full w-px bg-white/15"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-xs font-bold tracking-[0.18em] text-brand-primary">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-white/55">
            Have questions about the available plots or the
            purchase process? Our team is available to help you
            understand the next steps.
          </p>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Talk to Our Team

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}