"use client"
import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="relative w-full bg-linear-to-br from-white via-gray-100 to-yellow-50 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-4 md:px-16 font-sans">
                {/* Left: Text & Content */}
                    <div className="flex-1 max-w-xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 mb-6 leading-tight tracking-tight drop-shadow-lg">
                        About Othniel Foundation
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                        Othniel Foundation is dedicated to empowering communities and supporting those in need. Our mission is to foster hope, provide resources, and create lasting impact through education, health, and social initiatives. Join us as we build a brighter future together.
                    </p>
                    {/* Founder Section */}
                                        <div className="flex flex-col items-center mb-10 w-full">
                                            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-4">
                                                <Image
                                                    src="/staff/CEO.jpg"
                                                    alt="Mr Jeremial Oluwaseun Adeniran, CEO Othniel Foundation"
                                                    fill
                                                    sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
                                                    className="rounded-full object-cover border-4 border-yellow-400 shadow-2xl bg-white w-full h-full"
                                                    priority
                                                />
                                                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-5 py-1 rounded-full text-xs font-bold shadow-md border border-white">CEO</span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-1 tracking-tight text-center">Mr Jeremial Oluwaseun Adeniran</h2>
                                            <p className="text-sm text-gray-500 mb-2 font-medium text-center">Chief Executive Officer</p>
                                            <p className="text-gray-700 text-base mb-2 text-center max-w-md">Mr Jeremial is a visionary leader, passionate humanitarian, and advocate for social change. With a heart for service and years of experience, he inspires hope and leads impactful projects that uplift communities.</p>
                                            <div className="mt-2 flex flex-wrap gap-2 justify-center">
                                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Visionary Leader</span>
                                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Community Builder</span>
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Humanitarian</span>
                                            </div>
                                        </div>
                                        {/* Connect with Us Button */}
                                        <div className="mb-8">
                                            <a href="/contact" className="inline-block bg-yellow-500 hover:bg-orange-400 text-black font-semibold px-7 py-3 rounded-full shadow-lg transition-colors text-base tracking-wide">
                                                Connect with Us
                                            </a>
                                        </div>
                                {/* End of Left Column */}
                                </div>
                {/* Right: Image */}
                    <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white border-4 border-orange-400 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden relative">
                        <Image
                            src="/images/Hero1.webp"
                            alt="Othniel Foundation Hero"
                            width={384}
                            height={384}
                            className="object-cover w-full h-full rounded-3xl"
                            priority
                        />
                        <div className="absolute bottom-4 left-4 bg-yellow-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">Empowering Change</div>
                    </div>
                </div>
                {/* Custom Animation Styles */}
                    {/* ...existing code... */}
            </section>

            {/* Who We Are Section */}
            <section className="w-full bg-white py-14 px-4 md:px-16 font-sans">
                <div className="max-w-6xl mx-auto rounded-3xl shadow-xl border border-gray-100 bg-linear-to-br from-white via-yellow-50 to-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Left Column: Text */}
                    <div className="flex-1 w-full">
                        {/* Accent Bar & Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="block w-2 h-10 bg-yellow-500 rounded-full"></span>
                            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h14" /></svg>
                            <h2 className="text-3xl md:text-4xl font-bold text-red-500 ml-2">Who We Are</h2>
                        </div>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">Othniel Foundation is a non-profit organization committed to transforming lives and communities through sustainable development, education, and health initiatives. We believe in the power of collective action and compassion to create lasting change.</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="text-gray-700">Driven by a vision of hope and empowerment for all.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-orange-400 rounded-full"></span>
                                <span className="text-gray-700">Focused on education, healthcare, and social welfare.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-red-400 rounded-full"></span>
                                <span className="text-gray-700">Partnering with local leaders and organizations for greater impact.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-gray-300 rounded-full"></span>
                                <span className="text-gray-700">Transparent, accountable, and community-centered in all we do.</span>
                            </li>
                        </ul>
                    </div>
                    {/* Right Column: Image */}
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="w-64 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 bg-gray-100 border-4 border-yellow-400 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/photo5.webp"
                                alt="Who We Are Othniel Foundation"
                                width={384}
                                height={256}
                                className="object-cover w-full h-full rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}