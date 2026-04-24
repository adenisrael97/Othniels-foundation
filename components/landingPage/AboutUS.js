import Image from "next/image";
import Button from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/Card";

const whatWeDo = [
  {
    image: "/images/photo14.webp",
    title: "Food Distribution",
    description: "Delivering nutritious meals and groceries to families in need, ensuring no one goes hungry in our communities.",
    tag: "Program Type: Food Aid",
    tagClassName: "bg-yellow-100 text-yellow-700",
    badgeNode: (
      <span className="bg-yellow-400 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      </span>
    ),
  },
  {
    image: "/images/education.webp",
    title: "Educational Outreach",
    description: "Providing scholarships, school supplies, and mentorship to empower the next generation of leaders.",
    tag: "Program Type: Education",
    tagClassName: "bg-blue-100 text-blue-700",
    badgeNode: (
      <span className="bg-blue-500 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" />
        </svg>
      </span>
    ),
  },
  {
    image: "/images/Health.webp",
    title: "Health Initiatives",
    description: "Organizing free medical checkups, health education, and wellness programs for underserved communities.",
    tag: "Program Type: Healthcare",
    tagClassName: "bg-green-100 text-green-700",
    badgeNode: (
      <span className="bg-green-500 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m9-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    ),
  },
  {
    image: "/images/women.webp",
    title: "Women Empowerment",
    description: "Supporting women through skills training, microloans, and leadership programs for gender equality.",
    tag: "Program Type: Empowerment",
    tagClassName: "bg-pink-100 text-pink-700",
    badgeNode: (
      <span className="bg-pink-500 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    ),
  },
  {
    image: "/images/youth.webp",
    title: "Youth Development",
    description: "Mentoring and empowering youth with education, sports, and leadership opportunities.",
    tag: "Program Type: Youth",
    tagClassName: "bg-indigo-100 text-indigo-700",
    badgeNode: (
      <span className="bg-indigo-500 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    ),
  },
  {
    image: "/images/community.webp",
    title: "Community Clean-Up",
    description: "Promoting environmental health through regular clean-up drives and awareness campaigns.",
    tag: "Program Type: Environment",
    tagClassName: "bg-teal-100 text-teal-700",
    badgeNode: (
      <span className="bg-teal-500 text-white rounded-full p-2 shadow-lg text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M9 21h6M4 6h16" />
        </svg>
      </span>
    ),
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="order-2 md:order-1 md:w-1/2 w-full flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Othniel Foundation
            </h2>
            <p className="text-gray-600 text-lg">
              The Othniel Foundation is dedicated to empowering communities through
              education, healthcare, and sustainable development initiatives. Our
              mission is to create opportunities, inspire hope, and transform lives
              by providing resources and support to those in need. We believe in
              the power of collective action and strive to make a lasting impact in
              every community we serve.
            </p>
          </div>
          <div className="order-1 md:order-2 md:w-1/2 w-full flex flex-col gap-4">
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/photo13.webp"
                alt="Othniel Foundation community outreach"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex gap-4 mt-2">
              <div className="relative w-1/2 h-32 rounded-lg overflow-hidden">
                <Image
                  src="/images/photo1.webp"
                  alt="Empowering youth"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-1/2 h-32 rounded-lg overflow-hidden">
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
        <div className="w-full flex justify-center mt-10">
          <Button variant="outline" href="/about">
            Learn More
            <svg
              className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Our impact programs are designed to uplift, empower, and transform
            communities. From food distribution to educational outreach, we are
            committed to making a real difference in the lives of those we serve.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {whatWeDo.map((item) => (
              <ProgramCard key={item.title} {...item} />
            ))}
          </div>
          <div className="w-full flex justify-center mt-10 mb-8">
            <Button variant="outline" href="/programs" className="bg-blue-600 group">
              View All Program
              <svg
                className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
