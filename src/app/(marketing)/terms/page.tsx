import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "EconLearn terms of service. Rules and guidelines for using our free AP Economics study platform.",
  alternates: { canonical: "https://econlearn.org/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
        style={{ color: "var(--color-ink)" }}
      >
        Terms of Service
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-ink-faint)" }}>
        Last updated: March 16, 2026
      </p>

      <div className="prose-custom space-y-8">
        <section>
          <h2>Using EconLearn</h2>
          <p>
            EconLearn is a free educational platform for AP Economics students.
            By using the site, you agree to these terms. You may browse all
            content without creating an account. Creating an account gives you
            access to progress tracking, quiz history, and achievements.
          </p>
        </section>

        <section>
          <h2>Accounts</h2>
          <p>
            You are responsible for keeping your account credentials secure. One
            account per person. Do not share your login with others or create
            multiple accounts. We reserve the right to suspend accounts that
            violate these terms.
          </p>
        </section>

        <section>
          <h2>Content &amp; Intellectual Property</h2>
          <p>
            All content on EconLearn, including text, graphics, interactive
            graphs, quiz questions, and flashcards, is owned by EconLearn and
            protected by copyright. You may use the content for personal study.
            You may not copy, redistribute, or sell any content without written
            permission.
          </p>
        </section>

        <section>
          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Scrape, crawl, or programmatically access the site beyond normal browsing</li>
            <li>Attempt to gain unauthorized access to other users&apos; accounts or data</li>
            <li>Use the platform for any commercial purpose without permission</li>
            <li>Interfere with the operation of the site or its infrastructure</li>
          </ul>
        </section>

        <section>
          <h2>Accuracy</h2>
          <p>
            We strive to provide accurate, up-to-date AP Economics content.
            EconLearn is a supplementary study tool and should not be your only
            resource. We do not guarantee specific exam scores or outcomes.
            Content may contain errors; if you spot one, please let us know.
          </p>
        </section>

        <section>
          <h2>Availability</h2>
          <p>
            EconLearn is provided &ldquo;as is.&rdquo; We aim for high uptime
            but do not guarantee uninterrupted access. We may modify or
            discontinue features at any time. We are not liable for any loss of
            data or study progress due to service interruptions.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            EconLearn is provided free of charge for educational purposes. To
            the fullest extent permitted by law, EconLearn and its creators are
            not liable for any damages arising from your use of the platform.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms at any time. Changes take effect when
            posted. Continued use of EconLearn after changes constitutes
            acceptance. Check this page periodically for updates.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms? Reach out at{" "}
            <span style={{ color: "var(--color-ink)" }}>
              support@econlearn.org
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
