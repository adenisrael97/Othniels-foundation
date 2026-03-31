import GalleryImage from "@/components/Gallery/GalleryImage";
import Introduction from "@/components/landingPage/Gallery";

export const metadata = {
  title: "Gallery | Othniel's Foundation",
  description: "Explore moments of hope, impact, and community from Othniel's Foundation's outreach programs and events.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Othniel's Foundation",
    description: "Explore moments of hope and impact from Othniel's Foundation.",
    url: "/gallery",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Othniel's Foundation Gallery" }],
  },
};

export default function GalleryPage() {
    return (
        <section>
            <Introduction  />
            <GalleryImage />
        </section>
    );
}