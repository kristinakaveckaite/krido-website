import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Swap these for the exact Framer fonts once identified — only this block changes.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "KRIDO Wellness in St. Petersburg, FL offers non-invasive body sculpting, cryo-slimming, cryo-facials, and 3D body scanning to help you slim, tighten, and rejuvenate naturally. Book your consultation today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kridowellness.com"),
  title: "KRIDO Wellness",
  description,
  openGraph: {
    title: "KRIDO Wellness",
    description,
    url: "https://www.kridowellness.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRIDO Wellness",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E5E47",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
