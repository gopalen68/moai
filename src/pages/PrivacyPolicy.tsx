import { ScrollToHash } from "@/lib/utils";
import React from "react";

const COMPANY = {
  name: "MoAi Tech Ltd",
  address: "[Company Address], Mauritius",
  privacyEmail: "info@moai.mu",
  generalEmail: "info@moai.mu",
  lastUpdated: "27 August 2025",
  effectiveDate: "27 August 2025",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "quick-summary", label: "Quick Summary" },
  { id: "scope", label: "Scope" },
  { id: "info-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "ai-training", label: "AI & Model Training" },
  { id: "legal-bases", label: "Legal Bases (GDPR)" },
  { id: "cookies", label: "Cookies & Similar Technologies" },
  { id: "sharing", label: "Sharing Your Information" },
  { id: "transfers", label: "International Transfers" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your Rights & Choices" },
  { id: "children", label: "Children’s Privacy" },
  { id: "third-parties", label: "Third-Party Links" },
  { id: "changes", label: "Changes to this Policy" },
  { id: "contact", label: "How to Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollToHash />
      {/* Hero / Header */}
      <section className="relative isolate bg-gradient-to-b from-black/70 to-black/30 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base/7 text-white/80">
              Last updated: <span className="font-medium">{COMPANY.lastUpdated}</span> • Effective date:{" "}
              <span className="font-medium">{COMPANY.effectiveDate}</span>
            </p>
            <p className="mt-6 text-lg text-white/90">
              {COMPANY.name} is committed to protecting your privacy. This policy explains what we collect,
              how we use it, and the choices you have when using our websites, apps, and services
              (the “Services”).
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
                By using the Services, you agree to this Privacy Policy. If you do not agree,
                please do not use the Services.
              </p>
            </section>

            {/* Quick Summary */}
            <section id="quick-summary" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Quick Summary</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "We collect only what we need to provide and improve the Services.",
                  "We do not sell your personal data.",
                  "You control your data: access, correct, delete, or export it (subject to applicable laws).",
                  "We apply reasonable security measures and limit retention.",
                  "For AI features, we minimize training on personal data unless we have a lawful basis and your choices are respected.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-foreground/10 bg-card p-4 text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Scope */}
            <section id="scope" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Scope</h2>
              <p className="mt-3 text-foreground/80">
                This Policy covers personal data processed by {COMPANY.name} through our Services.
                It does not cover third-party websites or services linked from our Services—those
                are governed by their own policies.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="info-we-collect" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <div className="mt-4 space-y-4 text-foreground/80">
                <div>
                  <h3 className="font-semibold">1) Information you provide</h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Account details (name, email, password, role)</li>
                    <li>Contact details (phone, company, job title)</li>
                    <li>Content you upload or submit (files, prompts, messages)</li>
                    <li>Support requests and feedback</li>
                    <li>Marketing preferences and survey responses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">2) Information collected automatically</h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Usage data (features used, timestamps, clicks, referring URLs)</li>
                    <li>Device &amp; log data (IP address, device type, OS, browser)</li>
                    <li>Cookies and similar technologies (see <a href="#cookies" className="underline hover:no-underline">Cookies</a>)</li>
                    <li>Approximate location (derived from IP, where permitted)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">3) Information from third parties</h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Single sign-on providers (SSO profile info)</li>
                    <li>Integration partners you connect (e.g., CRM, helpdesk, analytics)</li>
                    <li>Public sources (where lawful)</li>
                  </ul>
                </div>
                <p className="text-foreground/70">
                  We collect the minimum necessary and may de-identify or aggregate data for analytics and product
                  improvement.
                </p>
              </div>
            </section>

            {/* How We Use */}
            <section id="how-we-use" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                <li>Provide and operate the Services (account creation, authentication, core features)</li>
                <li>Operate AI functionality (generate outputs, recommendations, automations)</li>
                <li>Improve &amp; personalize (usage analytics, optimization, relevance)</li>
                <li>Security &amp; fraud prevention (access controls, intrusion detection)</li>
                <li>Customer support (troubleshooting, service notices)</li>
                <li>Legal compliance (record-keeping, responding to lawful requests)</li>
                <li>Marketing (with consent where required; opt out any time)</li>
              </ul>
              <p className="mt-3 text-foreground/70">
                We do not use your personal data for purposes incompatible with those stated above.
              </p>
            </section>

            {/* AI & Training */}
            <section id="ai-training" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">AI &amp; Model Training</h2>
              <div className="mt-3 space-y-3 text-foreground/80">
                <p>
                  <strong>Default:</strong> We do <em>not</em> use your identifiable personal data to train public models
                  unless we have a clear lawful basis (e.g., explicit consent or a legitimate interest balanced against
                  your rights) and strong safeguards.
                </p>
                <p>
                  <strong>Enterprise/custom models:</strong> For private deployments, training or fine-tuning is performed
                  only under contract, with data minimization, pseudonymization where possible, and strict access controls.
                </p>
                <p>
                  <strong>Content filtering &amp; safety:</strong> We may use automated systems to detect abuse, malware,
                  or policy violations.
                </p>
                <p>
                  You may request exclusion of your content from training where applicable (see{" "}
                  <a href="#rights" className="underline hover:no-underline">Your Rights</a>).
                </p>
              </div>
            </section>

            {/* Legal Bases */}
            <section id="legal-bases" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Legal Bases (where applicable, e.g., GDPR)</h2>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                <li><strong>Contract:</strong> To provide and perform the Services you request</li>
                <li><strong>Consent:</strong> For certain cookies, marketing, or optional data uses</li>
                <li><strong>Legitimate interests:</strong> To secure, improve, and personalize Services (balanced against your rights)</li>
                <li><strong>Legal obligation:</strong> To comply with applicable laws and requests</li>
                <li><strong>Vital/public interest:</strong> Where required</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Cookies &amp; Similar Technologies</h2>
              <p className="mt-3 text-foreground/80">
                We use cookies, local storage, and similar tools to remember preferences, maintain session state,
                analyze usage, and measure campaign performance.
              </p>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                <li>Manage cookies in your browser settings</li>
                <li>Use our cookie banner/settings (where available)</li>
                <li>Opt out of analytics/marketing cookies (where offered)</li>
              </ul>
            </section>

            {/* Sharing */}
            <section id="sharing" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Sharing Your Information</h2>
              <p className="mt-3 text-foreground/80">
                We do <strong>not</strong> sell personal data. We may share data with:
              </p>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                <li>Service providers / processors under confidentiality and data processing agreements</li>
                <li>Integrations you choose to connect (data flows as you configure)</li>
                <li>In connection with a merger, acquisition, or change of control</li>
                <li>To comply with law, prevent fraud, or enforce terms</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            {/* Transfers */}
            <section id="transfers" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">International Transfers</h2>
              <p className="mt-3 text-foreground/80">
                Your data may be processed in countries other than where you reside. When transferring data internationally,
                we use appropriate safeguards (e.g., Standard Contractual Clauses or equivalent mechanisms) and assess
                local laws to protect your rights.
              </p>
            </section>

            {/* Retention */}
            <section id="retention" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Data Retention</h2>
              <p className="mt-3 text-foreground/80">
                We keep personal data only as long as necessary to provide the Services, meet legal, accounting, or reporting
                requirements, and resolve disputes. When no longer needed, we delete or anonymize data.
              </p>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Security</h2>
              <p className="mt-3 text-foreground/80">
                We implement administrative, technical, and physical safeguards appropriate to the nature of the data, such as
                encryption in transit and at rest, least-privilege access, logging and monitoring, secure development practices,
                and vendor risk reviews. No method is 100% secure—please use strong passwords and keep them confidential.
              </p>
            </section>

            {/* Rights */}
            <section id="rights" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Your Rights &amp; Choices</h2>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 space-y-1.5">
                <li>Access your data</li>
                <li>Rectify inaccurate data</li>
                <li>Delete your data</li>
                <li>Portability (obtain your data in a usable format)</li>
                <li>Object / Restrict certain processing</li>
                <li>Withdraw consent (where processing is based on consent)</li>
                <li>Opt out of marketing communications</li>
                <li>Appeal automated decisions with legal or similarly significant effects (if applicable)</li>
              </ul>
              <p className="mt-3 text-foreground/80">
                To exercise rights, contact us at <a href={`mailto:${COMPANY.privacyEmail}`} className="underline hover:no-underline">{COMPANY.privacyEmail}</a>.
                We may need to verify your identity. You also have the right to contact your local data protection authority.
              </p>
              <div className="mt-4 rounded-lg border border-foreground/10 bg-card p-4">
                <h3 className="font-semibold">California Residents (CCPA/CPRA)</h3>
                <p className="mt-2 text-foreground/80">
                  You have rights to know, delete, correct, and limit use of sensitive data, and to opt out of “sharing”
                  for cross-context behavioral advertising. We do not sell personal information. Use your{" "}
                  <a href="#" className="underline hover:no-underline">Do Not Sell or Share My Personal Information</a>{" "}
                  controls (link/portal).
                </p>
              </div>
            </section>

            {/* Children */}
            <section id="children" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Children’s Privacy</h2>
              <p className="mt-3 text-foreground/80">
                Our Services are not directed to children under the age required by local law (e.g., 13 or 16). We do not
                knowingly collect their data. If you believe a child has provided data, contact us and we will take
                appropriate steps to delete it.
              </p>
            </section>

            {/* Third-Party Links */}
            <section id="third-parties" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Third-Party Links</h2>
              <p className="mt-3 text-foreground/80">
                Our Services may link to third-party sites. We are not responsible for their privacy practices. Review their
                policies.
              </p>
            </section>

            {/* Changes */}
            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">Changes to this Policy</h2>
              <p className="mt-3 text-foreground/80">
                We may update this Policy from time to time. Material changes will be notified via the Services or by direct
                notice where appropriate. The “Last updated” date shows the latest version.
              </p>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold">How to Contact Us</h2>
              <div className="mt-3 space-y-1 text-foreground/80">
                <p><span className="font-medium">{COMPANY.name}</span></p>
                <p>{COMPANY.address}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${COMPANY.privacyEmail}`} className="underline hover:no-underline">
                    {COMPANY.privacyEmail}
                  </a>
                </p>
                <p className="text-foreground/70">
                  General inquiries:{" "}
                  <a href={`mailto:${COMPANY.generalEmail}`} className="underline hover:no-underline">
                    {COMPANY.generalEmail}
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
