import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { shelterAfricaPlotOptions } from "../../data/properties";
import { Container } from "../../components/ui/Container";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function PropertyOverview() {
  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Available Plots"
            title="Find the right space for your future."
          />

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-text-secondary sm:text-lg">
              Choose from available plot sizes at Shelter Africa
              Estate and take the first step toward securing your
              own piece of land in Ogbomoso.
            </p>
          </div>
        </div>

        {/* Property Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {shelterAfricaPlotOptions.map((property) => (
            <article
              key={property.id}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
                property.featured
                  ? "border-brand-primary bg-black text-white"
                  : "border-border bg-white text-text-primary hover:border-black/20 hover:shadow-xl hover:shadow-black/5"
              }`}
            >
              {/* Featured Label */}
              {property.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Popular Choice
                </div>
              )}

              {/* Plot Size */}
              <div className="flex min-h-55 flex-col justify-between">
                <div>
                  <p
                    className={`text-sm font-bold uppercase tracking-[0.16em] ${
                      property.featured
                        ? "text-white/50"
                        : "text-text-muted"
                    }`}
                  >
                    Plot Size
                  </p>

                  <h3 className="mt-4 text-5xl font-extrabold tracking-tighter sm:text-6xl">
                    {property.size}
                  </h3>
                </div>

                <div className="mt-10">
                  <p
                    className={`text-sm ${
                      property.featured
                        ? "text-white/60"
                        : "text-text-secondary"
                    }`}
                  >
                    Investment price
                  </p>

                  <p className="mt-1 text-3xl font-extrabold tracking-[-0.03em]">
                    {property.price}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  property.featured
                    ? "bg-white/10"
                    : "bg-border"
                }`}
              />

              {/* Description */}
              <p
                className={`max-w-md text-sm leading-6 ${
                  property.featured
                    ? "text-white/70"
                    : "text-text-secondary"
                }`}
              >
                {property.description}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className={`mt-7 inline-flex min-h-12 w-full items-center justify-between rounded-full px-5 py-3 text-sm font-bold transition-colors ${
                  property.featured
                    ? "bg-white text-black hover:bg-brand-primary hover:text-white"
                    : "bg-surface-muted text-text-primary hover:bg-black hover:text-white"
                }`}
              >
                Reserve this plot

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-border bg-surface-muted p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-bold text-text-primary">
              Secure your plot with an initial deposit.
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              Allocation is available on initial deposit.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-brand-primary">
            <Check
              size={18}
              aria-hidden="true"
            />

            <span>Initial deposit: ₦200,000</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}