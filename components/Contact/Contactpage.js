import Image from "next/image";

export default function Contact() {
    return (
        <>
            <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden font-sans">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/photo12.jpg"
                        alt="Contact Othniel Foundation"
                        fill
                        priority
                        className="object-cover w-full h-full brightness-105 contrast-110 saturate-125"
                        sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br opacity-60 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-5 drop-shadow-lg tracking-tight">GET IN TOUCH</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-200 mt-4 mb-4">Contact Us</h2>
                    <p className="text-lg md:text-xl text-white/90 mt-4 mb-4 font-medium drop-shadow-md">
                        We’re here to answer your questions, listen to your concerns, and connect you with the right support. Reach out to Othniel Foundation today—your voice matters to us.
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="w-full py-8 font-sans">
                <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Phone Card */}
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-yellow-400">
                        <span className="text-3xl text-orange-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </span>
                        <h4 className="text-lg font-bold text-orange-500 mb-1">Phone</h4>
                        <p className="text-gray-700 text-sm">+234 800 123 4567</p>
                    </div>
                    {/* Email Card */}
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-orange-400">
                        <span className="text-3xl text-red-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
                        </span>
                        <h4 className="text-lg font-bold text-orange-500 mb-1">Email</h4>
                        <p className="text-gray-700 text-sm">othnielsfoundation@gmail.com</p>
                    </div>
                    {/* Address Card */}
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-yellow-500">
                        <span className="text-3xl text-yellow-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243-4.243a4 4 0 00-5.657 5.657l4.243 4.243z" /></svg>
                        </span>
                        <h4 className="text-lg font-bold text-orange-500 mb-1">Address</h4>
                        <p className="text-gray-700 text-sm">House 2, Jibia Street, Area 2, Abuja, Nigeria</p>
                    </div>
                    {/* Office Hours Card */}
                    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-red-400">
                        <span className="text-3xl text-red-400 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                        <h4 className="text-lg font-bold text-orange-500 mb-1">Office Hours</h4>
                        <p className="text-gray-700 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </section>
                </>
            );
        }