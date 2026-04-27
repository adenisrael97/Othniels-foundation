import Image from "next/image";
import Button from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/Card";

const whatWeDo = [
  {
    image: "/images/photo14.webp",
    title: "Food Distribution",
    description: "Delivering nutritious meals and groceries to families in need, ensuring no one goes hungry in our communities.",
    tag: "Food Aid",
    tagClassName: "bg-gray-100 text-gray-600",
  },
  {
    image: "/images/education.webp",
    title: "Educational Outreach",
    description: "Providing scholarships, school supplies, and mentorship to empower the next generation of leaders.",
    tag: "Education",
    tagClassName: "bg-gray-100 text-gray-600",
  },
  {
    image: "/images/Health.webp",
    title: "Health Initiatives",
    description: "Organising free medical checkups, health education, and wellness programs for underserved communities.",
    tag: "Healthcare",
    tagClassName: "bg-gray-100 text-gray-600",
  },
  {
    image: "/images/women.webp",
    title: "Women Empowerment",
    description: "Supporting women through skills training, microloans, and leadership programs for gender equality.",
    tag: "Empowerment",
    tagClassName: "bg-gray-100 text-gray-600",
  },
  {
    image: "/images/youth.webp",
    title: "Youth Development",
    description: "Mentoring and empowering youth with education, sports, and leadership opportunities.",
    tag: "Youth",
    tagClassName: "bg-gray-100 text-gray-600",
  },
  {
    image: "/images/community.webp",
    title: "Community Clean-Up",
    description: "Promoting environmental health through regular clean-up drives and awareness campaigns.",
    tag: "Environment",
    tagClassName: "bg-gray-100 text-gray-600",
  },
];

export default function AboutUs() {
  return (
    <>
      {/* ── About intro ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              About Othniel Foundation
            </h2>
            <div className="mt-2 w-10 h-0.5 bg-amber-600" />
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              The Othniel Foundation is dedicated to empowering communities
              through education, healthcare, and sustainable development
              initiatives. Our mission is to create opportunities, inspire hope,
              and transform lives by providing resources and support to those in
              need.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              We believe in the power of collective action and strive to make a
              lasting impact in every community we serve — working alongside
              families, schools, and local leaders to solve real challenges with
              practical solutions.
            </p>
            <div className="mt-8">
              <Button variant="outline" href="/about">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Image mosaic */}
          <div className="order-1 md:order-2 flex flex-col gap-3">
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/photo13.webp"
                alt="Othniel Foundation community outreach"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-36 rounded-xl overflow-hidden">
                <Image
                  src="/images/photo1.webp"
                  alt="Empowering youth"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-36 rounded-xl overflow-hidden">
                <Image
                  src="/images/photo3.webp"
                  alt="Healthcare initiative"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow">Our Impact</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              What We Do
            </h2>
            <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              Our programs are designed to uplift, empower, and transform
              communities — from food distribution to educational outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <ProgramCard key={item.title} {...item} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="primary" href="/programs">
              View All Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
