import { ScrollToHash } from "@/lib/utils";
import React from "react";

/**
 * Cookie Policy Page (React + TailwindCSS)
 * ----------------------------------------
 * - Same structure as the Privacy Policy page you’re using
 * - Hero header with dates
 * - Sticky Table of Contents (left)
 * - Anchored sections (right), mobile-friendly
 *
 * Replace COMPANY details and the example cookie list with your actual setup.
 */

const COMPANY = {
    name: "MoAi Tech Ltd",
    address: "[Company Address], Mauritius",
    contactEmail: "info@moai.mu",
    lastUpdated: "27 August 2025",
    effectiveDate: "27 August 2025",
};

const sections = [
    { id: "overview", label: "Overview" },
    { id: "what-are-cookies", label: "What Are Cookies?" },
    { id: "types-of-cookies", label: "Types of Cookies We Use" },
    { id: "similar-tech", label: "Similar Technologies" },
    { id: "how-we-use", label: "How We Use Cookies" },
    { id: "cookie-list", label: "Cookie List (Examples)" },
    { id: "managing-preferences", label: "Managing Your Preferences" },
    { id: "consent", label: "Consent & Withdrawal" },
    { id: "third-parties", label: "Third-Party Cookies" },
    { id: "retention", label: "Retention & Lifetimes" },
    { id: "do-not-track", label: "Do Not Track" },
    { id: "changes", label: "Changes to this Cookie Policy" },
    { id: "contact", label: "Contact Us" },
];

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollToHash />
            {/* Hero / Header */}
            <section className="relative isolate bg-gradient-to-b from-black/70 to-black/30 text-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Cookie Policy
                        </h1>
                        <p className="mt-4 text-base/7 text-white/80">
                            Last updated: <span className="font-medium">{COMPANY.lastUpdated}</span> • Effective date:{" "}
                            <span className="font-medium">{COMPANY.effectiveDate}</span>
                        </p>
                        <p className="mt-6 text-lg text-white/90">
                            This Cookie Policy explains how {COMPANY.name} (“we”, “our”, “us”) uses cookies and
                            similar technologies when you visit our websites, apps, and services (the “Services”).
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
                            <p className="mb-3 text-sm font-semibold text-foreground/75">On this page</p>
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
                        {/* Overview */}
                        <section id="overview" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Overview</h2>
                            <p className="mt-3 text-foreground/80">
                                We use cookies and similar technologies to operate, secure, and improve our Services, remember your
                                preferences, and measure performance. Where required by law, we will ask for your consent before
                                placing non-essential cookies on your device.
                            </p>
                        </section>

                        {/* What Are Cookies */}
                        <section id="what-are-cookies" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">What Are Cookies?</h2>
                            <p className="mt-3 text-foreground/80">
                                Cookies are small text files stored on your device when you visit a website. They can be “first-party”
                                (set by us) or “third-party” (set by others), and can be “session” (deleted when you close your browser)
                                or “persistent” (remain until they expire or you delete them).
                            </p>
                        </section>

                        {/* Types of Cookies */}
                        <section id="types-of-cookies" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-lg border border-foreground/10 bg-card p-4">
                                    <h3 className="font-semibold">Strictly Necessary</h3>
                                    <p className="mt-2 text-foreground/80">
                                        Required for core site functions like navigation, security, and session management. These
                                        cannot be turned off in our systems (but you can block them in your browser, which may break the site).
                                    </p>
                                </div>
                                <div className="rounded-lg border border-foreground/10 bg-card p-4">
                                    <h3 className="font-semibold">Performance / Analytics</h3>
                                    <p className="mt-2 text-foreground/80">
                                        Help us understand how visitors use the Services (pages visited, time on page) so we can improve usability
                                        and content. Collected in aggregate where possible.
                                    </p>
                                </div>
                                <div className="rounded-lg border border-foreground/10 bg-card p-4">
                                    <h3 className="font-semibold">Functional</h3>
                                    <p className="mt-2 text-foreground/80">
                                        Remember choices (e.g., language, region) and personalization settings to provide enhanced features.
                                    </p>
                                </div>
                                <div className="rounded-lg border border-foreground/10 bg-card p-4">
                                    <h3 className="font-semibold">Advertising / Targeting</h3>
                                    <p className="mt-2 text-foreground/80">
                                        Used to deliver relevant ads and measure ad performance. These may track your activity across sites.
                                        We request consent where legally required.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Similar Technologies */}
                        <section id="similar-tech" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Similar Technologies</h2>
                            <p className="mt-3 text-foreground/80">
                                We may also use local storage, SDKs, pixels, tags, and beacons that function like cookies. These help with
                                things like authentication, remembering preferences, analytics, and security.
                            </p>
                        </section>

                        {/* How We Use */}
                        <section id="how-we-use" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">How We Use Cookies</h2>
                            <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                                <li>Operate and secure the Services (authentication, fraud prevention)</li>
                                <li>Remember preferences (language, region, display settings)</li>
                                <li>Measure performance and improve features/content</li>
                                <li>Personalize experiences and, where applicable, deliver or measure advertising</li>
                            </ul>
                        </section>

                        {/* Cookie List (Examples) */}
                        <section id="cookie-list" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Cookie List (Examples)</h2>
                            <p className="mt-3 text-foreground/80">
                                The table below shows common categories and example entries. Replace with your actual cookie inventory.
                            </p>

                            <div className="mt-4 overflow-x-auto rounded-xl border border-foreground/10">
                                <table className="min-w-full border-collapse text-left text-sm">
                                    <thead className="bg-foreground/5 text-foreground">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">Name</th>
                                            <th className="px-4 py-3 font-semibold">Provider</th>
                                            <th className="px-4 py-3 font-semibold">Purpose</th>
                                            <th className="px-4 py-3 font-semibold">Type</th>
                                            <th className="px-4 py-3 font-semibold">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-foreground/10">
                                        {[
                                            {
                                                name: "moai_session",
                                                provider: "MoAi Tech Ltd",
                                                purpose: "Maintains logged-in session and security state",
                                                type: "Strictly necessary (first-party)",
                                                duration: "Session",
                                            },
                                            {
                                                name: "_ga",
                                                provider: "Google Analytics",
                                                purpose: "Analytics on page usage and interactions",
                                                type: "Performance (third-party)",
                                                duration: "13 months",
                                            },
                                            {
                                                name: "locale_pref",
                                                provider: "MoAi Tech Ltd",
                                                purpose: "Stores language/region preferences",
                                                type: "Functional (first-party)",
                                                duration: "6 months",
                                            },
                                            {
                                                name: "_fbp",
                                                provider: "Meta",
                                                purpose: "Ad delivery/retargeting and measurement",
                                                type: "Advertising (third-party)",
                                                duration: "3 months",
                                            },
                                        ].map((c) => (
                                            <tr key={c.name} className="text-foreground/80">
                                                <td className="px-4 py-3">{c.name}</td>
                                                <td className="px-4 py-3">{c.provider}</td>
                                                <td className="px-4 py-3">{c.purpose}</td>
                                                <td className="px-4 py-3">{c.type}</td>
                                                <td className="px-4 py-3">{c.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="mt-3 text-sm text-foreground/60">
                                Note: Third-party providers may change their cookies and durations. Refer to their documentation for the most
                                current details.
                            </p>
                        </section>

                        {/* Managing Preferences */}
                        <section id="managing-preferences" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Managing Your Preferences</h2>
                            <p className="mt-3 text-foreground/80">
                                You can manage cookie settings through:
                            </p>
                            <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                                <li>
                                    Our cookie banner or{" "}
                                    <a href="#manage-preferences" className="underline hover:no-underline">
                                        Preferences Center
                                    </a>{" "}
                                    (where available)
                                </li>
                                <li>Browser settings (block/delete cookies; see help for your browser)</li>
                                <li>Opt-outs provided by third parties (e.g., analytics or ad providers)</li>
                            </ul>
                            <p className="mt-3 text-foreground/70">
                                Blocking some cookies may impact site functionality or your personalized experience.
                            </p>
                        </section>

                        {/* Consent */}
                        <section id="consent" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Consent & Withdrawal</h2>
                            <p className="mt-3 text-foreground/80">
                                Where required, we request your consent before using non-essential cookies. You can withdraw consent at any
                                time via the cookie banner or Preferences Center. Your withdrawal does not affect the lawfulness of processing
                                before the withdrawal.
                            </p>
                        </section>

                        {/* Third-Party Cookies */}
                        <section id="third-parties" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
                            <p className="mt-3 text-foreground/80">
                                Some cookies are set by third parties to provide analytics, advertising, and social media features. We do not
                                control these technologies; please review the respective providers’ policies and settings.
                            </p>
                        </section>

                        {/* Retention */}
                        <section id="retention" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Retention & Lifetimes</h2>
                            <p className="mt-3 text-foreground/80">
                                Cookies may persist for different periods depending on their purpose. Session cookies are deleted when you
                                close your browser; persistent cookies remain until they expire or are deleted by you.
                            </p>
                        </section>

                        {/* Do Not Track */}
                        <section id="do-not-track" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Do Not Track</h2>
                            <p className="mt-3 text-foreground/80">
                                Some browsers offer a “Do Not Track” (DNT) signal. Because no common standard exists, our Services may not
                                respond to DNT at this time. We will review updates to standards and may adapt our approach as they evolve.
                            </p>
                        </section>

                        {/* Changes */}
                        <section id="changes" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Changes to this Cookie Policy</h2>
                            <p className="mt-3 text-foreground/80">
                                We may update this Cookie Policy from time to time. Material changes will be communicated via the Services or
                                by direct notice where appropriate. The “Last updated” date reflects the latest version.
                            </p>
                        </section>

                        {/* Contact */}
                        <section id="contact" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold">Contact Us</h2>
                            <div className="mt-3 space-y-1 text-foreground/80">
                                <p><span className="font-medium">{COMPANY.name}</span></p>
                                <p>{COMPANY.address}</p>
                                <p>
                                    Email:{" "}
                                    <a href={`mailto:${COMPANY.contactEmail}`} className="underline hover:no-underline">
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
