"use client";
import dynamic from "next/dynamic";

const Whatsapp = dynamic(() => import("./Whatsapp"), { ssr: false });

export default function WhatsappWrapper() {
  return <Whatsapp />;
}
