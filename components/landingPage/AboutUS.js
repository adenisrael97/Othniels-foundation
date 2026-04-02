import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <>
        <section className="bg-white py-16 px-4 md:px-0">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Content on the left */}
                <div className="order-2 md:order-1 md:w-1/2 w-full flex flex-col gap-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Othniel Foundation</h2>
                    <p className="text-gray-600 text-lg">
                        The Othniel Foundation is dedicated to empowering communities through education, healthcare, and sustainable development initiatives. Our mission is to create opportunities, inspire hope, and transform lives by providing resources and support to those in need. We believe in the power of collective action and strive to make a lasting impact in every community we serve.
                    </p>
                    
                                </div>
                {/* Images on the right */}
                <div className="order-1 md:order-2 md:w-1/2 w-full flex flex-col gap-4">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/photo13.webp"
                            alt="Othniel Foundation community outreach"
                            fill
                            style={{ objectFit: "cover" }}
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
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                        <div className="relative w-1/2 h-32 rounded-lg overflow-hidden">
                            <Image
                                src="/images/photo3.webp"
                                alt="Healthcare initiative"
                                fill
                                loading="lazy"
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom About Us Button for professional UI/UX */}
            <div className="w-full flex justify-center mt-10">
                <Link href="/about" className="group inline-flex items-center gap-2 bg-red-400 hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-300 text-white hover:text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-orange-400">
                    Learn More
                    <svg className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
        
        {/* What We Do Section */}
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">What We Do</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                    Our impact programs are designed to uplift, empower, and transform communities. From food distribution to educational outreach, we are committed to making a real difference in the lives of those we serve.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Card 1: Food Distribution */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/photo14.webp"
                                alt="Food Distribution"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-yellow-400 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Distribution</h3>
                            <p className="text-gray-600 text-center mb-2">Delivering nutritious meals and groceries to families in need, ensuring no one goes hungry in our communities.</p>
                            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Food Aid</span>
                        </div>
                    </div>
                    {/* Card 2: Educational Outreach */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/education.webp"
                                alt="Educational Outreach"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Educational Outreach</h3>
                            <p className="text-gray-600 text-center mb-2">Providing scholarships, school supplies, and mentorship to empower the next generation of leaders.</p>
                            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Education</span>
                        </div>
                    </div>
                    {/* Card 3: Health Initiatives */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/Health.webp"
                                alt="Health Initiatives"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m9-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Initiatives</h3>
                            <p className="text-gray-600 text-center mb-2">Organizing free medical checkups, health education, and wellness programs for underserved communities.</p>
                            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Healthcare</span>
                        </div>
                    </div>
                    {/* Card 4: Women Empowerment */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/women.webp"
                                alt="Women Empowerment"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-pink-500 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Women Empowerment</h3>
                            <p className="text-gray-600 text-center mb-2">Supporting women through skills training, microloans, and leadership programs for gender equality.</p>
                            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Empowerment</span>
                        </div>
                    </div>
                    {/* Card 5: Youth Development */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/youth.webp"
                                alt="Youth Development"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-indigo-500 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Youth Development</h3>
                            <p className="text-gray-600 text-center mb-2">Mentoring and empowering youth with education, sports, and leadership opportunities.</p>
                            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Youth</span>
                        </div>
                    </div>
                    {/* Card 6: Community Clean-Up */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/images/community.webp"
                                alt="Community Clean-Up"
                                fill
                                loading="lazy"
                                className="object-cover w-full h-full"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 bg-teal-500 text-white rounded-full p-2 shadow-lg text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M9 21h6M4 6h16" /></svg>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Clean-Up</h3>
                            <p className="text-gray-600 text-center mb-2">Promoting environmental health through regular clean-up drives and awareness campaigns.</p>
                            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mt-auto">Program Type: Environment</span>
                        </div>
                    </div>
                </div>
                {/* View All Program Button at the end */}
        <div className="w-full flex justify-center mt-10 mb-8">
            <Link href="/programs" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-300 text-white hover:text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
                View All Program
                <svg className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
            </div>
        </section>
        </>
    );
}