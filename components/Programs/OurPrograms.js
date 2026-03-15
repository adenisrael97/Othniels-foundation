import Image from "next/image";
import { FaUsers, FaHeartbeat, FaBookOpen, FaFemale, FaChild, FaHandsHelping } from "react-icons/fa";

const programs = [
    {
        name: "Youth Mentorship",
        icon: <FaBookOpen className="text-orange-500 text-2xl" />,
        image: "/images/photo12.jpg",
        beneficiaries: "1,200+",
        benefit: "Empowerment",
        description: "Guiding young minds through mentorship, leadership training, and skill development for a brighter future.",
        features: ["Leadership Workshops", "Career Guidance", "Skill Training"],
    },
    {
        name: "Health Outreach",
        icon: <FaHeartbeat className="text-red-500 text-2xl" />,
        image: "/images/photo15.jpg",
        beneficiaries: "2,500+",
        benefit: "Wellness",
        description: "Providing free medical checkups, health education, and support to underserved communities.",
        features: ["Medical Camps", "Health Talks", "Support Groups"],
    },
    {
        name: "Women’s Empowerment",
        icon: <FaFemale className="text-yellow-500 text-2xl" />,
        image: "/images/photo5.webp",
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
        image: "/images/photo13.jpg",
        beneficiaries: "3,000+",
        benefit: "Growth",
        description: "Building sustainable communities through infrastructure, education, and empowerment.",
        features: ["Infrastructure", "Education", "Empowerment"],
    },
    {
        name: "Volunteer Engagement",
        icon: <FaUsers className="text-orange-400 text-2xl" />,
        image: "/images/photo17.jpg",
        beneficiaries: "500+",
        benefit: "Support",
        description: "Mobilizing volunteers to drive change and support our mission across all programs.",
        features: ["Training", "Community Service", "Recognition"],
    },
];

export default function OurPrograms() {
    return (
        <section className="w-full py-10 md:py-16 bg-linear-to-br from-yellow-50 via-orange-50 to-red-50 font-sans">
            <div className="max-w-5xl mx-auto px-4">
                {/* Section Intro */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2 tracking-tight">WHAT WE DO</h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4 font-medium">
                        Othniel Foundation delivers impactful programs that transform lives, empower communities, and foster sustainable growth.
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 mt-6">Our Impact Programs</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-8 font-normal">
                        Explore our core initiatives designed to address critical needs and create lasting change.
                    </p>
                </div>

                                {/* Program Cards */}
                                <div className="bg-orange-50 rounded-3xl p-6 md:p-10 shadow-xl">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                        {programs.slice(0, 6).map((program, idx) => (
                                            <div key={program.name + '-' + idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full relative border-t-4 border-orange-200">
                                                {/* Program Image with Benefit Badge */}
                                                <div className="relative w-full h-48 md:h-56">
                                                    <Image
                                                        src={program.image}
                                                        alt={program.name}
                                                        fill
                                                        className="object-cover w-full h-full"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                    <span className="absolute top-3 right-3 bg-linear-to-r from-orange-400 via-yellow-400 to-red-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                        {program.benefit}
                                                    </span>
                                                </div>
                                                {/* Program Info */}
                                                <div className="flex flex-col flex-1 p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        {program.icon}
                                                        <span className="text-lg font-semibold text-orange-500">{program.name}</span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm mb-2">{program.description}</p>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <FaUsers className="text-gray-400 text-base" />
                                                        <span className="text-xs text-gray-600">{program.beneficiaries} beneficiaries</span>
                                                    </div>
                                                    {/* Features */}
                                                    <div className="mt-auto">
                                                        <span className="text-xs font-bold text-orange-400 mb-1">Features:</span>
                                                        <ul className="list-disc list-inside text-xs text-gray-500">
                                                            {program.features.map((feature) => (
                                                                <li key={feature}>{feature}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
            </div>
        </section>
    );
}