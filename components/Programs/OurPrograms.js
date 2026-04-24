import { FaUsers, FaHeartbeat, FaBookOpen, FaFemale, FaChild, FaHandsHelping } from "react-icons/fa";
import { ProgramDetailCard } from "@/components/ui/Card";

const programs = [
  {
    name: "Youth Mentorship",
    icon: <FaBookOpen className="text-orange-500 text-2xl" />,
    image: "/images/youth.webp",
    beneficiaries: "1,200+",
    benefit: "Empowerment",
    description: "Guiding young minds through mentorship, leadership training, and skill development for a brighter future.",
    features: ["Leadership Workshops", "Career Guidance", "Skill Training"],
  },
  {
    name: "Health Outreach",
    icon: <FaHeartbeat className="text-red-500 text-2xl" />,
    image: "/images/mobile clinic.webp",
    beneficiaries: "2,500+",
    benefit: "Wellness",
    description: "Providing free medical checkups, health education, and support to underserved communities.",
    features: ["Medical Camps", "Health Talks", "Support Groups"],
  },
  {
    name: "Women's Empowerment",
    icon: <FaFemale className="text-yellow-500 text-2xl" />,
    image: "/images/women.webp",
    beneficiaries: "800+",
    benefit: "Independence",
    description: "Equipping women with skills, resources, and opportunities to thrive and lead.",
    features: ["Skill Acquisition", "Entrepreneurship", "Mentorship"],
  },
  {
    name: "Child Support",
    icon: <FaChild className="text-orange-400 text-2xl" />,
    image: "/images/photo6.webp",
    beneficiaries: "1,000+",
    benefit: "Care",
    description: "Ensuring children have access to education, nutrition, and safe environments.",
    features: ["Scholarships", "Nutrition", "Safe Spaces"],
  },
  {
    name: "Community Development",
    icon: <FaHandsHelping className="text-red-400 text-2xl" />,
    image: "/images/community2.webp",
    beneficiaries: "3,000+",
    benefit: "Growth",
    description: "Building sustainable communities through infrastructure, education, and empowerment.",
    features: ["Infrastructure", "Education", "Empowerment"],
  },
  {
    name: "Volunteer Engagement",
    icon: <FaUsers className="text-orange-400 text-2xl" />,
    image: "/outreach/picture17.webp",
    beneficiaries: "500+",
    benefit: "Support",
    description: "Mobilizing volunteers to drive change and support our mission across all programs.",
    features: ["Training", "Community Service", "Recognition"],
  },
];

export default function OurPrograms() {
  return (
    <section className="w-full py-10 md:py-16 bg-linear-to-br font-sans">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2 tracking-tight">
            WHAT WE DO
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
            Othniel Foundation delivers impactful programs that transform lives,
            empower communities, and foster sustainable growth.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 mt-6">
            Our Impact Programs
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8 font-normal">
            Explore our core initiatives designed to address critical needs and
            create lasting change.
          </p>
        </div>

        <div className="rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramDetailCard key={program.name} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
