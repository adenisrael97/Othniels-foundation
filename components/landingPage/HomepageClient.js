"use client";
import dynamic from "next/dynamic";
import News from "@/components/landingPage/News";

const Testimonial = dynamic(() => import("@/components/landingPage/Testimonial"));
const Gallery = dynamic(() => import("@/components/landingPage/Gallery"), { ssr: false });

export default function HomepageClient() {
  return (
    <>
      <Testimonial />
      <Gallery />
      <News />
    </>
  );
}
