"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaBlog, FaHandHoldingHeart, FaHome, FaHandsHelping } from "react-icons/fa";

// Hero section for Othniel Foundation
// Place a suitable image in public/hero-bg.jpg
export default function Hero() {
    return (
        <>
            <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Hero1.webp"
                        alt="Othniel Foundation - Empowering Lives"
                        fill
                        priority
                        className="object-cover w-full h-full brightness-100"
                        sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br opacity-70 mix-blend-multiply" />
                    {/* Subtle Pattern Overlay removed to prevent 404 error */}
                </div>

                {/* Content with glassmorphism card and accent */}
                <motion.div
                    className="relative z-10 flex flex-col items-center text-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Decorative accent */}
                    <motion.div
                        className="w-16 h-1 rounded-full bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 mb-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                        style={{ transformOrigin: 'left' }}
                    />
                    {/* Content without background, thin font */}
                    <div className="flex flex-col items-center max-w-2xl">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                        >
                            Empowering Lives, <span className="text-yellow-300">Building Futures</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-md font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                        >
                            Othniel Foundation is a non-profit organization dedicated to uplifting communities through <span className="text-orange-200 font-semibold">education</span>, <span className="text-yellow-200 font-semibold">health</span>, and <span className="text-red-200 font-semibold">empowerment</span> programs.<br className="hidden md:block" /> Join us in making a difference.
                        </motion.p>
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                        >
                            <Link
                                href="/donate"
                                className="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 text-base border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 flex items-center gap-2"
                            >
                                Donate Now
                                <FaArrowRight className="inline-block text-white text-lg mt-0.5" />
                            </Link>
                            <Link
                                href="/programs"
                                className="bg-white text-red-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-100 hover:scale-105 hover:shadow-xl transition-transform duration-200 text-base border-2 border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 flex items-center gap-2"
                            >
                                Our Programs
                                <FaArrowRight className="inline-block text-red-500 text-lg mt-0.5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            {/* Stats Section */}
            <section className="w-full py-6 md:py-8 bg-white -mt-8 relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
                    {/* Lives Touched */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <span className="text-4xl md:text-5xl text-red-600 mb-2">
                            <span className="inline-block"><FaHandHoldingHeart /></span>
                        </span>
                        <span className="text-3xl md:text-4xl font-extrabold text-black mb-1">12,000+</span>
                        <span className="text-lg md:text-xl text-black font-thin">Lives Touched</span>
                    </div>
                    {/* Communities */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <span className="text-4xl md:text-5xl text-red-600 mb-2">
                            <span className="inline-block"><FaHome /></span>
                        </span>
                        <span className="text-3xl md:text-4xl font-extrabold text-black mb-1">50+</span>
                        <span className="text-lg md:text-xl text-black font-thin">Communities</span>
                    </div>
                    {/* Volunteers */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <span className="text-4xl md:text-5xl text-orange-600 mb-2">
                            <span className="inline-block"><FaHandsHelping /></span>
                        </span>
                        <span className="text-3xl md:text-4xl font-extrabold text-black mb-1">300+</span>
                        <span className="text-lg md:text-xl text-black font-thin">Volunteers</span>
                    </div>
                    {/* Programs */}
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <span className="text-4xl md:text-5xl text-red-600 mb-2">
                            <span className="inline-block"><FaBlog /></span>
                        </span>
                        <span className="text-3xl md:text-4xl font-extrabold text-black mb-1">20+</span>
                        <span className="text-lg md:text-xl text-black font-thin">Programs</span>
                    </div>
                </div>
            </section>
        </>
    );
}

