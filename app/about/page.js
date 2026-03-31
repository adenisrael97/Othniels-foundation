import HeroAbout from "@/components/About/HeroAbout";
import Vision from "@/components/About/Vision";
import OurJourney from "@/components/About/OurJourney";

export const metadata = {
  title: "About Us | Othniel's Foundation",
  description: "Learn about Othniel's Foundation — our mission, vision, team, and journey empowering communities through education, healthcare, and social initiatives.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Othniel's Foundation",
    description: "Learn about Othniel's Foundation — our mission, vision, team, and journey empowering communities.",
    url: "/about",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "About Othniel's Foundation" }],
  },
};

export default function About() {
    return (
        <section>
            <HeroAbout />
            <Vision />
            <OurJourney />
        </section>
    )
}