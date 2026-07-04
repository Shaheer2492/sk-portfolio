import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/ui/SmoothScroll";
import type { ReactNode } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shaheer Khan — Data Scientist & Full-Stack Developer",
  description:
    "Portfolio of Shaheer Khan — UCSD Data Science graduate, co-founder of The Kaizen Academy, building at the intersection of machine learning and human impact.",
  metadataBase: new URL("https://shaheeralamkhan.com"),
  openGraph: {
    title: "Shaheer Khan — Data Scientist & Full-Stack Developer",
    description:
      "UCSD Data Science graduate, co-founder of The Kaizen Academy, building at the intersection of machine learning and human impact.",
    type: "website",
    url: "/",
    images: [{ url: "/images/grad.jpg", width: 1600, height: 1066, alt: "Shaheer Khan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaheer Khan — Data Scientist & Full-Stack Developer",
    images: ["/images/grad.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll />
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


