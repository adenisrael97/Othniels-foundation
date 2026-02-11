"use client";
import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("@/components/Page/Testimonial"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Page/Gallery"), { ssr: false });
const News = dynamic(() => import("@/components/Page/News"), { ssr: false });

export default function HomepageClient() {
  return (
    <>
      <Testimonial />
      <Gallery />
      <News />
    </>
  );
}
