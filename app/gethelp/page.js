import HeroHelp from "@/components/GetHelp/HeroHelp";

export const metadata = {
  title: "Get Help | Othniel's Foundation",
  description: "If you or someone you know needs support, Othniel's Foundation is here to help. Request assistance through our programs.",
  alternates: { canonical: "/gethelp" },
  openGraph: {
    title: "Get Help | Othniel's Foundation",
    description: "Request assistance and support from Othniel's Foundation.",
    url: "/gethelp",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Get Help from Othniel's Foundation" }],
  },
};

export default function Gethelp () {
    return (
       <section>
 <HeroHelp />  
       </section>
         
       
    )
}