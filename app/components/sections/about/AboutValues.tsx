import {
    FileCheck,
    MapPinned,
    ShieldCheck,
    Users
} from "lucide-react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

const values = [
    {
        title: "Transparency",
        icon: FileCheck,
        text: "Providing clear information about available plots and documentation."
    },
    {
        title: "Trust",
        icon: ShieldCheck,
        text: "Helping buyers make informed property decisions."
    },
    {
        title: "Location",
        icon: MapPinned,
        text: "Offering land opportunities in Ogbomoso."
    },
    {
        title: "Support",
        icon: Users,
        text: "Guiding prospective buyers throughout their enquiry."
    }
];

export function AboutValues() {
    return (
        <Section className="bg-surface-muted">
            <Container>

                <div className="max-w-3xl">
                    <p className="text-brand-primary font-bold uppercase tracking-[0.18em] text-sm">
                        What We Value
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold">
                        Built around trust and clarity.
                    </h2>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {values.map((value) => {

                        const Icon = value.icon;

                        return (
                            <div
                                key={value.title}
                                className="rounded-3xl bg-white p-8 shadow-sm"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                    <Icon size={24}/>
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {value.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-text-secondary">
                                    {value.text}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </Container>
        </Section>
    );
}