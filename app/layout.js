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
  title: "Othniel's Foundation",
  description: "Othniel's Foundation - Empowering communities through support and outreach programs.",
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
              "logo": "${siteUrl}/images/logo.jpg"
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
