import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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
  title: "Shaheer Khan — Creative Developer",
  description: "A portfolio where deep tech meets clean design.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Shaheer Khan — Creative Developer",
    description: "Deep tech × clean design.",
    type: "website",
    url: "/",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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


