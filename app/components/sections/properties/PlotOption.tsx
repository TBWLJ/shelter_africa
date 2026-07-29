import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { shelterAfrica2 } from "../../../data/properties";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function PlotOptions() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Available Plot Sizes
          </p>

          <h2 className="mt-4 text-4xl font-extrabold">
            Choose the option that fits your plans.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {shelterAfrica2.plotOptions.map((plot) => (
            <article
              key={plot.id}
              className={`rounded-4xl border bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl ${
                plot.featured
                  ? "border-brand-primary"
                  : "border-border"
              }`}
            >
              {plot.featured && (
                <span className="rounded-full bg-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-4xl font-extrabold">
                {plot.size}
              </h3>

              <p className="mt-2 text-2xl font-bold text-brand-primary">
                {plot.price}
              </p>

              <p className="mt-5 leading-7 text-text-secondary">
                {plot.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-black hover:text-brand-primary"
              >
                Reserve this plot

                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}