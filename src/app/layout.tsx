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
    default: "EconLearn - Free AP Economics Study Guide with Interactive Graphs",
    template: "%s | EconLearn",
  },
  description:
    "Free AP Microeconomics and Macroeconomics study guide. Interactive supply and demand graphs, 350+ practice questions, flashcards, and detailed explanations for every topic on the AP exam.",
  keywords: [
    "AP Economics",
    "AP Microeconomics",
    "AP Macroeconomics",
    "AP Econ study guide",
    "AP Economics practice questions",
    "supply and demand graph",
    "interactive economics",
    "AP Micro review",
    "AP Macro review",
    "economics flashcards",
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
    title: "EconLearn - Free AP Economics Study Guide with Interactive Graphs",
    description:
      "Master AP Micro and Macro with interactive graphs, 350+ practice questions, and flashcards. 100% free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EconLearn - Free AP Economics Study Guide",
    description:
      "Interactive graphs, 350+ AP-style questions, flashcards, and detailed explanations. Free forever.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EconLearn",
    url: BASE_URL,
    description:
      "Free interactive AP Economics study guide with graphs, practice questions, and flashcards.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/micro/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EconLearn",
    url: BASE_URL,
    description:
      "Free AP Economics learning platform with interactive graphs and practice questions.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
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
      </body>
    </html>
  );
}
