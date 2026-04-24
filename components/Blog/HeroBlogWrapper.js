"use client";
import dynamic from "next/dynamic";

const HeroBlog = dynamic(() => import("./HeroBlog"), { ssr: false });

export default function HeroBlogWrapper() {
  return <HeroBlog />;
}
