import type { Metadata } from "next";
import { InnerLayout } from "@/components/inner/InnerLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CT Forwarding & Transport Sdn Bhd Privacy Policy — how we collect, use, and protect your personal data under Malaysia's Personal Data Protection Act 2010 (PDPA).",
};

export default function PrivacyPolicyPage() {
  return (
    <InnerLayout>
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">

          <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-carbon mb-2">
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-slate/50 mb-10">
            Last updated: June 2026 &nbsp;|&nbsp; CT Forwarding &amp; Transport Sdn Bhd (Co. No. 500895-V)
          </p>

          <div className="prose-ct space-y-10 font-body text-base leading-relaxed text-carbon/80">

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                1. Introduction
              </h2>
              <p>
                CT Forwarding &amp; Transport Sdn Bhd (&ldquo;CT Forwarding&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed
                to protecting the personal data of individuals who interact with our website and services.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
                data in accordance with the{" "}
                <strong>Personal Data Protection Act 2010 (PDPA)</strong> of Malaysia.
              </p>
              <p className="mt-3">
                By using our website at{" "}
                <a href="https://www.ctforwarding.com.my" className="text-primary underline underline-offset-2 hover:text-dark transition-colors">
                  www.ctforwarding.com.my
                </a>{" "}
                or submitting an enquiry through our contact form, you consent to the practices described
                in this policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                2. Personal Data We Collect
              </h2>
              <p>We collect only the data that is necessary to respond to your enquiry:</p>
              <ul className="mt-3 space-y-2 pl-2">
                {[
                  "Full name",
                  "Email address",
                  "Phone number (optional)",
                  "Company name (optional)",
                  "The content of your message or enquiry",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We do not collect sensitive personal data (as defined under the PDPA) through this website.
                We do not collect payment information through our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                3. How We Use Your Data
              </h2>
              <p>Your personal data is collected and used solely for the following purposes:</p>
              <ul className="mt-3 space-y-2 pl-2">
                {[
                  "To respond to your enquiry or request for a quote",
                  "To follow up on services you have expressed interest in",
                  "To fulfil contractual or pre-contractual obligations where applicable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We will not use your personal data for marketing purposes without your explicit consent,
                and we will not sell, rent, or trade your personal data to any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                4. Disclosure of Personal Data
              </h2>
              <p>
                Your personal data is accessed only by authorised CT Forwarding personnel who need it to
                respond to your enquiry. We do not share your data with third parties except:
              </p>
              <ul className="mt-3 space-y-2 pl-2">
                {[
                  "When required by Malaysian law, regulation, or a court order",
                  "To our email service provider (for the purpose of delivering your message to us) — bound by applicable data processing agreements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as is necessary to fulfil the purpose for
                which it was collected, or as required by applicable law. Enquiry data is typically retained
                for up to <strong>24 months</strong>. After this period, it is securely deleted or
                anonymised.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data
                against unauthorised access, loss, destruction, or alteration. Our website is served over
                HTTPS. Contact form submissions are encrypted in transit.
              </p>
              <p className="mt-3">
                No method of transmission over the internet is 100% secure. While we take all reasonable
                steps to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                7. Your Rights Under PDPA
              </h2>
              <p>Under the Personal Data Protection Act 2010, you have the right to:</p>
              <ul className="mt-3 space-y-2 pl-2">
                {[
                  "Access the personal data we hold about you",
                  "Correct any inaccurate or incomplete personal data",
                  "Withdraw consent for processing (where processing is based on consent)",
                  "Request that we cease processing your data for direct marketing purposes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at the address below. We will respond
                within 21 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                8. Cookies
              </h2>
              <p>
                Our website currently does not use tracking cookies or advertising cookies. We may use
                essential session data to ensure the website functions correctly. We do not use cookies
                to track you across third-party websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                legal requirements. The updated policy will be published on this page with a revised
                &ldquo;Last updated&rdquo; date. We recommend checking this page periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mb-3">
                10. Contact Us
              </h2>
              <p>
                For any questions, data access requests, or complaints regarding your personal data, please
                contact our Data Protection Officer:
              </p>
              <div className="mt-4 rounded-sm border border-slate/10 bg-smoke p-6 space-y-1.5 text-sm">
                <p className="font-semibold text-carbon">CT Forwarding &amp; Transport Sdn Bhd</p>
                <p>Unit A905, 9th Floor, Wisma Merdeka Phase 1</p>
                <p>Jalan Tun Razak, 88000 Kota Kinabalu, Sabah, Malaysia</p>
                <p className="mt-3">
                  <a href="mailto:contact@ctforwarding.com.my" className="text-primary underline underline-offset-2 hover:text-dark transition-colors">
                    contact@ctforwarding.com.my
                  </a>
                </p>
                <p>Tel: 088-259663</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </InnerLayout>
  );
}
