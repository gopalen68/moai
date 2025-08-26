import { ScrollToHash } from "@/lib/utils";
import React from "react";

const COMPANY = {
    name: "MoAi Tech Ltd",
    address: "[Company Address], Mauritius",
    contactEmail: "info@moai.mu",
    lastUpdated: "27 August 2025",
    effectiveDate: "27 August 2025",
};

const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "eligibility", label: "Eligibility" },
    { id: "accounts", label: "Accounts & Responsibilities" },
    { id: "use-of-services", label: "Use of Services" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "payments", label: "Payments & Subscriptions" },
    { id: "termination", label: "Termination" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "indemnification", label: "Indemnification" },
    { id: "governing-law", label: "Governing Law & Dispute Resolution" },
    { id: "changes", label: "Changes to Terms" },
    { id: "contact", label: "Contact Us" },
];

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollToHash />
            {/* Hero / Header */}
            <section className="relative isolate bg-gradient-to-b from-black/70 to-black/30 text-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Terms & Conditions
                        </h1>
                        <p className="mt-4 text-base/7 text-white/80">
                            Last updated:{" "}
                            <span className="font-medium">{COMPANY.lastUpdated}</span> •
                            Effective date:{" "}
                            <span className="font-medium">{COMPANY.effectiveDate}</span>
                        </p>
                        <p className="mt-6 text-lg text-white/90">
                            These Terms & Conditions (“Terms”) govern your use of the
                            services, websites, and applications provided by {COMPANY.name}.
                            Please read them carefully before using our Services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content + TOC */}
            <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-12">
                    {/* Sidebar TOC */}
                    <nav
                        aria-label="Table of contents"
                        className="lg:col-span-3 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-16"
                    >
                        <div className="rounded-xl border border-foreground/10 bg-card/60 backdrop-blur p-4">
                            <p className="mb-3 text-sm font-semibold text-foreground/75">
                                On this page
                            </p>
                            <ul className="space-y-2 text-sm">
                                {sections.map((s) => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className="inline-block rounded px-2 py-1 text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition"
                                        >
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <article className="lg:col-span-9 space-y-12">
                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Introduction</h2>
                            <p className="mt-3 text-foreground/80">
                                By accessing or using the Services, you agree to be bound by
                                these Terms. If you do not agree, you may not use the Services.
                            </p>
                        </section>

                        {/* Eligibility */}
                        <section id="eligibility" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Eligibility</h2>
                            <p className="mt-3 text-foreground/80">
                                You must be at least the age of majority in your jurisdiction
                                (or have parental/guardian consent) to use our Services. By
                                using the Services, you represent that you meet this
                                requirement.
                            </p>
                        </section>

                        {/* Accounts */}
                        <section id="accounts" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Accounts & Responsibilities</h2>
                            <p className="mt-3 text-foreground/80">
                                When creating an account, you must provide accurate and complete
                                information. You are responsible for maintaining the
                                confidentiality of your login credentials and for all activities
                                under your account.
                            </p>
                        </section>

                        {/* Use of Services */}
                        <section id="use-of-services" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Use of Services</h2>
                            <p className="mt-3 text-foreground/80">
                                You agree not to misuse the Services. Prohibited uses include:
                            </p>
                            <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                                <li>Violating laws or regulations</li>
                                <li>Infringing on intellectual property rights</li>
                                <li>Uploading malicious code or harmful content</li>
                                <li>Attempting unauthorized access to systems or data</li>
                                <li>Engaging in fraudulent or abusive practices</li>
                            </ul>
                        </section>

                        {/* IP */}
                        <section id="intellectual-property" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Intellectual Property</h2>
                            <p className="mt-3 text-foreground/80">
                                All content, trademarks, logos, and intellectual property in the
                                Services belong to {COMPANY.name} or its licensors. You may not
                                copy, modify, or distribute our content without written
                                permission.
                            </p>
                        </section>

                        {/* Payments */}
                        <section id="payments" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Payments & Subscriptions</h2>
                            <p className="mt-3 text-foreground/80">
                                If you purchase paid Services, you agree to pay all applicable
                                fees. Payments are non-refundable unless required by law. We may
                                change prices with reasonable prior notice.
                            </p>
                        </section>

                        {/* Termination */}
                        <section id="termination" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Termination</h2>
                            <p className="mt-3 text-foreground/80">
                                We may suspend or terminate your account if you violate these
                                Terms or misuse the Services. You may stop using the Services at
                                any time.
                            </p>
                        </section>

                        {/* Disclaimers */}
                        <section id="disclaimers" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Disclaimers</h2>
                            <p className="mt-3 text-foreground/80">
                                The Services are provided “as is” and “as available.” We make no
                                warranties, express or implied, regarding the Services,
                                including fitness for a particular purpose or non-infringement.
                            </p>
                        </section>

                        {/* Liability */}
                        <section id="liability" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                            <p className="mt-3 text-foreground/80">
                                To the maximum extent permitted by law, {COMPANY.name} shall not
                                be liable for indirect, incidental, consequential, or punitive
                                damages, or for lost profits or revenues, arising from your use
                                of the Services.
                            </p>
                        </section>

                        {/* Indemnification */}
                        <section id="indemnification" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Indemnification</h2>
                            <p className="mt-3 text-foreground/80">
                                You agree to indemnify and hold {COMPANY.name}, its affiliates,
                                and employees harmless from claims, damages, or expenses arising
                                from your misuse of the Services or violation of these Terms.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section id="governing-law" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">
                                Governing Law & Dispute Resolution
                            </h2>
                            <p className="mt-3 text-foreground/80">
                                These Terms are governed by the laws of Mauritius, without
                                regard to conflict of law principles. Disputes will be resolved
                                in the courts of Mauritius, unless otherwise required by
                                applicable law.
                            </p>
                        </section>

                        {/* Changes */}
                        <section id="changes" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Changes to Terms</h2>
                            <p className="mt-3 text-foreground/80">
                                We may update these Terms occasionally. Material changes will be
                                communicated through the Services or by direct notice where
                                appropriate. The “Last updated” date indicates the latest
                                version.
                            </p>
                        </section>

                        {/* Contact */}
                        <section id="contact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Contact Us</h2>
                            <div className="mt-3 space-y-1 text-foreground/80">
                                <p>
                                    <span className="font-medium">{COMPANY.name}</span>
                                </p>
                                <p>{COMPANY.address}</p>
                                <p>
                                    Email:{" "}
                                    <a
                                        href={`mailto:${COMPANY.contactEmail}`}
                                        className="underline hover:no-underline"
                                    >
                                        {COMPANY.contactEmail}
                                    </a>
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    );
}
