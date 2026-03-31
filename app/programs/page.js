import HeroPrograms from "@/components/Programs/HeroPrograms";
import OurPrograms from "@/components/Programs/OurPrograms";
import HelpPrograms from "@/components/Programs/HelpPrograms";

export const metadata = {
  title: "Our Programs | Othniel's Foundation",
  description: "Discover Othniel's Foundation programs in education, healthcare, youth mentorship, women's empowerment, and community development.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "Our Programs | Othniel's Foundation",
    description: "Explore our programs in education, healthcare, and community empowerment.",
    url: "/programs",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Othniel's Foundation Programs" }],
  },
};

export default function Programs() {
    return (
        <>
            <HeroPrograms />
            <OurPrograms />     
            <HelpPrograms />
        </>
    )
}