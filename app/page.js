
import Hero from "@/components/Page/Hero";
import AboutUs from "@/components/Page/AboutUS";
import Request from "@/components/Page/Request";
import HomepageClient from "@/components/Page/HomepageClient";

export default function Homepage () {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Request />
      <HomepageClient />
    </section>
  );
}