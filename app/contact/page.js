import ContactPage from "@/components/Contact/Contactpage";
import FormPage from "@/components/Contact/FormPage";
import Map from "@/components/Contact/Map";

export const metadata = {
  title: "Contact Us | Othniel's Foundation",
  description: "Get in touch with Othniel's Foundation. Reach out for support, partnerships, volunteering, or general inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Othniel's Foundation",
    description: "Reach out to Othniel's Foundation for support, partnerships, or inquiries.",
    url: "/contact",
    images: [{ url: "/images/Hero1.webp", width: 1200, height: 630, alt: "Contact Othniel's Foundation" }],
  },
};

export default function Contact () {
    return (
        <section>
        <ContactPage />
        <FormPage />
        <Map />
        </section>
    )
}