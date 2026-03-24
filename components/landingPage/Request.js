"use client";
import Image from "next/image";
import Link from "next/link";

export default function Request() {
    return (
        <section className="relative w-full min-h-screen flex items-start justify-center overflow-hidden bg-gray-900">
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
                <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/90" />
            </div>
            {/* Content */}
            <div className="relative z-10 w-full max-w-2xl mx-auto text-center px-4 py-12 sm:py-20 flex flex-col items-center" style={{zIndex:2}}>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300 mb-2 sm:mb-4 drop-shadow-lg tracking-wide">
                    Ready to make a difference?
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
                    The Difference We Make
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-thin drop-shadow-md max-w-xs sm:max-w-xl mx-auto">
                    Every act of kindness creates a ripple of hope. Join us in touching lives, uplifting communities, and making a lasting impact. Whether you want to get involved or need support, together we can make a difference.
                </p>
                <div className="flex flex-col gap-3 w-full sm:flex-row sm:gap-4 sm:justify-center">
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow transition-colors duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto">
                        Get Involved
                    </Link>
                </div>
            </div>
        </section>
    );
}
