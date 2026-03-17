import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Parinith Reddy — AI/ML Engineer & Backend Systems Builder",
  description:
    "Building intelligent systems, scalable backends, and research-driven machine learning solutions.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Backend Engineer",
    "NIT Delhi",
    "Parinith Reddy",
    "Computer Vision",
    "Portfolio",
  ],
  openGraph: {
    title: "Parinith Reddy — AI/ML Engineer",
    description:
      "Building intelligent systems, scalable backends, and research-driven machine learning solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var storedTheme = localStorage.getItem("theme");
                var systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                var theme = storedTheme || systemTheme;
                document.documentElement.setAttribute("data-theme", theme);
              } catch (error) {
                document.documentElement.setAttribute("data-theme", "dark");
              }
            })();
          `}
        </Script>
      </head>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
