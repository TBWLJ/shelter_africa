"use client";

import { Send } from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

export function ContactForm() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr]">
          {/* FORM */}
          <div className="rounded-4xl border border-border bg-white p-8 shadow-sm lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                Send an Enquiry
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                We'd love to hear from you.
              </h2>

              <p className="mt-4 text-text-secondary">
                Complete the form below and a member of our team
                will get back to you.
              </p>
            </div>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Full Name"
                  placeholder="John Doe"
                />

                <Field
                  label="Phone Number"
                  placeholder="+234..."
                />
              </div>

              <Field
                label="Email Address"
                type="email"
                placeholder="john@email.com"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Select
                  label="Property"
                  options={[
                    "Shelter Africa 2",
                  ]}
                />

                <Select
                  label="Preferred Plot Size"
                  options={[
                    "300 SQM",
                    "500 SQM",
                  ]}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition focus:border-brand-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-primary"
              >
                Send Enquiry

                <Send size={18} />
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="rounded-4xl bg-black p-8 text-white lg:p-10">
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-8">
              <Info
                title="Office"
                value="Abogunde Road
Ogbomoso, Oyo State"
              />

              <Info
                title="Working Hours"
                value="Monday – Saturday
8:00 AM – 5:00 PM"
              />

              <Info
                title="Response Time"
                value="Usually within 24 hours."
              />
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-border px-5 outline-none transition focus:border-brand-primary"
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <select className="h-14 w-full rounded-2xl border border-border bg-white px-5 outline-none transition focus:border-brand-primary">
        <option>Select</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-white/50">
        {title}
      </p>

      <p className="mt-2 whitespace-pre-line text-lg leading-8">
        {value}
      </p>
    </div>
  );
}