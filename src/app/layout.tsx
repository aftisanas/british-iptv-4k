import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "British IPTV | UK IPTV Subscription From £8.66/mo — 37,000 Channels",
    template: "%s | British IPTV 4K",
  },
  description:
    "British IPTV built for UK homes. 37,000 live channels, 198,000 on-demand films and series, native 4K UHD and 24/7 UK support. From £8.66/month with a 30-day money-back guarantee.",
  keywords: [
    "british iptv",
    "iptv uk",
    "iptv subscription",
    "best iptv uk",
    "iptv providers",
    "iptv service",
    "iptv reviews",
    "buy iptv",
    "fast iptv",
    "cheap iptv subscription",
    "iptv uk 4k",
    "uk iptv subscription",
  ],
  authors: [{ name: "British IPTV 4K" }],
  creator: "British IPTV 4K",
  applicationName: "British IPTV 4K",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "British IPTV 4K",
    url: SITE_URL,
    title: "British IPTV — UK IPTV Subscription From £8.66/mo | 37,000 Channels",
    description:
      "British IPTV built for UK homes. 37,000 live channels, 198,000 films and series, native 4K UHD and five simultaneous screens — from £8.66/month with a 30-day money-back guarantee.",
    images: [
      {
        url: "/british-iptv.webp",
        width: 1024,
        height: 1024,
        alt: "British IPTV 4K logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "British IPTV — UK IPTV Subscription From £8.66/mo | 37,000 Channels",
    description:
      "British IPTV for UK homes. 37,000 live channels, 198,000 films and series, native 4K UHD and 24/7 UK support — from £8.66/month with a 30-day money-back guarantee.",
    images: ["/british-iptv.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
