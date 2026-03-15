
export const metadata = {
  title: "Othniel's Foundation - Home",
  description: "Empowering lives through outreach, support, and community programs.",
  openGraph: {
    title: "Othniel's Foundation",
    description: "Empowering lives through outreach, support, and community programs.",
    url: "https://yourdomain.com",
    siteName: "Othniel's Foundation",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Othniel's Foundation Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Othniel's Foundation",
    description: "Empowering lives through outreach, support, and community programs.",
    images: ["/images/og-image.jpg"],
  },
};

import Hero from "@/components/landingPage/Hero";
import AboutUs from "@/components/landingPage/AboutUS";
import Request from "@/components/landingPage/Request";
import HomepageClient from "@/components/landingPage/HomepageClient";
import Whatsapp from "@/components/landingPage/Whatsapp";

export default function Homepage () {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Request />
      <HomepageClient />
      <Whatsapp />
    </section>
  );
}