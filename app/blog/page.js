import HeroBlog from "@/components/Blog/HeroBlog";

export const metadata = {
  title: "Blog & News | Othniel's Foundation",
  description: "Read the latest stories, updates, and news from Othniel's Foundation about our community impact, programs, and events.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & News | Othniel's Foundation",
    description: "Read the latest stories and updates from Othniel's Foundation.",
    url: "/blog",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Othniel's Foundation Blog" }],
  },
};

export default function Blog () {
    return (
        <HeroBlog />
    )
}