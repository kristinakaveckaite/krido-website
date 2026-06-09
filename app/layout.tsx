import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
