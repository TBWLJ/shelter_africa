import { CheckCircle2 } from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

const docs = [
  "Registered Survey",
  "Deed of Assignment",
];

export function Documentation() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
              Documentation
            </p>

            <h2 className="mt-4 text-4xl font-extrabold">
              Documents referenced for this development.
            </h2>

            <p className="mt-6 leading-8 text-text-secondary">
              Based on the information supplied for Shelter Africa
              2, the following documentation is referenced for the
              development. Contact our team for full details and
              confirmation.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-10 shadow-sm">
            <div className="space-y-6">
              {docs.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-brand-primary"
                    size={22}
                  />

                  <span className="font-semibold">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}