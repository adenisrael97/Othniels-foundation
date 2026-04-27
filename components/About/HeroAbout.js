import Image from "next/image";
import Button from "@/components/ui/Button";

const pillars = [
  {
    title: "Education Support",
    description: "Scholarships, learning materials, and mentorship.",
  },
  {
    title: "Health Outreach",
    description: "Medical care, awareness, and community wellness.",
  },
  {
    title: "Empowerment",
    description: "Skills training, youth development, and opportunity.",
  },
];

export default function About() {
  return (
    <>
      {/* ── Hero intro ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <span className="eyebrow">About Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              About Othniel Foundation
            </h1>
            <div className="mt-3 w-10 h-0.5 bg-amber-600" />
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Othniel Foundation is dedicated to empowering communities and
              supporting those in need. Our mission is to foster hope, provide
              resources, and create lasting impact through education, health,
              and social initiatives.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Founded on compassion and service, we work alongside families,
              schools, faith communities, and local leaders to solve real
              challenges with practical solutions — restoring dignity and
              unlocking potential.
            </p>

            {/* Pillar chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  <p className="text-xs font-semibold text-gray-900 mb-1">{p.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="brand" href="/contact">Connect with Us</Button>
            </div>
          </div>

          {/* Image + CEO card */}
          <div className="flex flex-col items-center gap-6">
            {/* Hero image */}
            <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src="/images/Hero1.webp"
                alt="Othniel Foundation impact"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            {/* CEO card */}
            <div className="w-full max-w-sm bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-amber-200">
                <Image
                  src="/Staff/CEO.webp"
                  alt="Mr Jeremiah Oluwaseun Adeniran"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Mr Jeremiah Oluwaseun Adeniran</p>
                <p className="text-xs text-gray-500">Founder &amp; President</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Visionary leader and passionate humanitarian driving community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src="/images/photo5.webp"
              alt="Who We Are — Othniel Foundation"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="eyebrow">Our Approach</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Who We Are
            </h2>
            <div className="mt-3 w-10 h-0.5 bg-amber-600" />
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Othniel Foundation is a non-profit organisation committed to
              transforming lives and communities through sustainable
              development, education, and health initiatives.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Our approach is community-centred and impact-driven. We listen
              first, collaborate deeply, and implement programs that address
              both immediate needs and long-term growth — building communities
              that thrive independently.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Driven by a vision of hope and empowerment for all.",
                "Focused on education, healthcare, and social welfare.",
                "Partnering with local leaders for greater impact.",
                "Transparent, accountable, and community-centred in all we do.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
