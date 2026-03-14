import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import ThemeInitializer from "@/components/providers/ThemeInitializer";

export const metadata: Metadata = {
  title: "EconLearn — Interactive AP Economics",
  description:
    "Master AP Microeconomics and Macroeconomics through interactive graphs, visual explanations, and practice questions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </body>
    </html>
  );
}
