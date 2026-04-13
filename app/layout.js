import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "../components/landingPage/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://othnielssupportfoundation.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Othniel's Foundation",
    template: "%s | Othniel's Foundation",
  },
  description: "Othniel's Foundation - Empowering communities through support and outreach programs.",

  openGraph: {
    siteName: "Othniel's Foundation",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Othniel's Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/Hero1.webp"],
  },
  alternates: {
    canonical: "/",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Othniel's Foundation",
              "url": "${siteUrl}",
              "logo": "${siteUrl}/images/logo.webp",
              "sameAs": [
                "https://www.facebook.com/OthnielsFoundation",
                "https://twitter.com/OthnielsFound",
                "https://www.instagram.com/OthnielsFoundation"
              ]
            }`
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {/* Sticky WhatsApp Button */}
        {typeof window !== "undefined" && (
          <div suppressHydrationWarning>
            {/* Avoid SSR hydration mismatch */}
            <Whatsapp />
          </div>
        )}
      </body>
    </html>
  );
}
