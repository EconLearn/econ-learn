import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import ThemeInitializer from "@/components/providers/ThemeInitializer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

const BASE_URL = "https://econlearn.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AP Economics Study Guide - Free Interactive Graphs & Questions",
    template: "%s | EconLearn",
  },
  description:
    "Free AP Micro & Macro study guide with interactive graphs, 350+ practice questions, flashcards, and free-response tips. Study supply and demand, monopoly, fiscal policy, and every AP exam topic.",
  keywords: [
    "AP Economics",
    "AP Microeconomics",
    "AP Macroeconomics",
    "AP microeconomics study guide",
    "AP macro review",
    "AP Economics practice questions",
    "supply and demand explained",
    "monopoly graph AP econ",
    "AP econ flashcards",
    "AP micro free response tips",
    "economics graphs interactive",
    "AP economics teacher resources",
    "classroom economics tools",
    "interactive economics",
    "AP exam prep",
    "free AP Economics",
    "fiscal policy",
    "monetary policy",
    "elasticity",
    "market structures",
    "aggregate demand and supply",
  ],
  authors: [{ name: "EconLearn" }],
  creator: "EconLearn",
  publisher: "EconLearn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "EconLearn",
    title: "AP Economics Study Guide - Free Interactive Graphs & Questions",
    description:
      "Free AP Micro & Macro study guide with interactive graphs, 350+ practice questions, and flashcards for every exam topic.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Economics Study Guide - Free Graphs & Questions",
    description:
      "Interactive economics graphs, 350+ AP-style questions, flashcards, and free-response tips. 100% free.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EconLearn",
    url: BASE_URL,
    description:
      "Free interactive AP Economics study tools with graphs, practice questions, flashcards, and free-response tips for AP Micro and Macro exam prep.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "EconLearn",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    description:
      "Free AP Economics learning platform with interactive graphs, practice questions, flashcards, and comprehensive study guides for AP Micro and Macro.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@econlearn.org",
      contactType: "customer support",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('econ-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');else if(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.setAttribute('data-theme','dark');}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeInitializer />
        <AuthProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          {children}
        </AuthProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
