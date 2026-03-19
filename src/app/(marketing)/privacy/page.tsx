import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EconLearn privacy policy. How we collect, use, and protect your data when you use our free AP Economics study platform.",
  alternates: { canonical: "https://www.econlearn.org/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
        style={{ color: "var(--color-ink)" }}
      >
        Privacy Policy
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-ink-faint)" }}>
        Last updated: March 16, 2026
      </p>

      <div className="prose-custom space-y-8">
        <section>
          <h2>What We Collect</h2>
          <p>
            When you create an account, we store your email address and display
            name. If you sign in with Google, we receive your name and profile
            photo from Google. We do not request or store your Google password.
          </p>
          <p>
            As you use EconLearn, we track which modules you visit, your quiz
            scores, flashcard progress, and daily study activity. This data
            powers your dashboard, streaks, and achievements.
          </p>
        </section>

        <section>
          <h2>How We Use Your Data</h2>
          <p>
            Your data is used to personalize your learning experience: showing
            your progress, calculating streaks, recommending modules to review,
            and saving quiz history. We do not sell, rent, or share your personal
            information with third parties.
          </p>
        </section>

        <section>
          <h2>Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors find and use
            EconLearn. Google Analytics collects anonymous usage data such as
            pages visited, time on site, and general geographic region. This
            helps us improve the platform. You can opt out of Google Analytics by
            installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            EconLearn uses essential cookies to keep you signed in and remember
            your theme preference (light or dark mode). Google Analytics sets its
            own cookies for traffic measurement. We do not use advertising
            cookies.
          </p>
        </section>

        <section>
          <h2>Data Storage &amp; Security</h2>
          <p>
            Your data is stored securely in Supabase, which uses PostgreSQL with
            row-level security. All connections are encrypted with TLS.
            Authentication tokens are stored in secure, HTTP-only cookies. We
            follow industry-standard practices to protect your information.
          </p>
        </section>

        <section>
          <h2>Students Under 18</h2>
          <p>
            EconLearn is designed for AP Economics students, many of whom are
            under 18. We collect only the minimum data necessary for the
            platform to function. We do not knowingly collect sensitive personal
            information from minors. If you are a parent or guardian and believe
            your child has provided personal information beyond what is described
            here, please contact us.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You can delete your account and all associated data at any time from
            your{" "}
            <Link href="/profile" className="text-blue-600 hover:underline">
              profile settings
            </Link>
            . If you have questions about your data, reach out to us at{" "}
            <span style={{ color: "var(--color-ink)" }}>
              privacy@econlearn.org
            </span>
            .
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated date. Continued use of EconLearn
            after changes constitutes acceptance of the revised policy.
          </p>
        </section>
      </div>
    </div>
  );
}
