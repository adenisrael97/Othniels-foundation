"use client";
import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("@/components/landingPage/Testimonial"), { ssr: false });
const Gallery = dynamic(() => import("@/components/landingPage/Gallery"), { ssr: false });
const News = dynamic(() => import("@/components/landingPage/News"), { ssr: false });

export default function HomepageClient() {
  return (
    <>
      <Testimonial />
      <Gallery />
      <News />
    </>
  );
}
