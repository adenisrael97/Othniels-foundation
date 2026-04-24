import { Suspense } from "react";
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

function ProgramsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-lg">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-5 flex flex-col gap-3">
              <div className="h-5 bg-orange-100 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <>
      <HeroPrograms />
      <Suspense fallback={<ProgramsSkeleton />}>
        <OurPrograms />
      </Suspense>
      <HelpPrograms />
    </>
  );
}