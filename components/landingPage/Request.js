"use client";
import Image from "next/image";
import Link from "next/link";

export default function Request() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/photo4.jpg"
                    alt="Making a Difference"
                    fill
                    className="object-cover w-full h-full opacity-70"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/80" />
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center px-4 py-16 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    The Difference We Make
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 font-thin drop-shadow-md">
                    Every act of kindness creates a ripple of hope. Join us in touching lives, uplifting communities, and making a lasting impact. Whether you want to get involved or need support, together we can make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Get Involved
                    </Link>
                    <Link href="/request" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200 text-base focus:outline-none focus:ring-2 focus:ring-yellow-300">
                        Request Help
                    </Link>
                </div>
            </div>
                        
        </section>
    );
}
