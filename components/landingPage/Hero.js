"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBlog, FaHandHoldingHeart, FaHome, FaHandsHelping } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/Card";

const stats = [
  { icon: <FaHandHoldingHeart />, iconColor: "text-red-600", value: "12,000+", label: "Lives Touched" },
  { icon: <FaHome />, iconColor: "text-red-600", value: "50+", label: "Communities" },
  { icon: <FaHandsHelping />, iconColor: "text-orange-600", value: "300+", label: "Volunteers" },
  { icon: <FaBlog />, iconColor: "text-red-600", value: "20+", label: "Programs" },
];

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero1.webp"
            alt="Othniel Foundation - Empowering Lives"
            fill
            priority
            className="object-cover w-full h-full brightness-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br opacity-70 mix-blend-multiply" />
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-16 h-1 rounded-full bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <div className="flex flex-col items-center max-w-2xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Empowering Lives,{" "}
              <span className="text-yellow-300">Building Futures</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-white/90 mb-8 drop-shadow-md font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              Othniel Foundation is a non-profit organization dedicated to
              uplifting communities through{" "}
              <span className="text-orange-200 font-semibold">education</span>,{" "}
              <span className="text-yellow-200 font-semibold">health</span>, and{" "}
              <span className="text-red-200 font-semibold">empowerment</span> programs.
              <br className="hidden md:block" /> Join us in making a difference.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
            >
              <Button variant="primary" href="/donate">
                Donate Now
                <FaArrowRight className="inline-block text-white text-lg mt-0.5" />
              </Button>
              <Button variant="secondary" href="/programs">
                Our Programs
                <FaArrowRight className="inline-block text-red-500 text-lg mt-0.5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-6 md:py-8 bg-white -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map(({ icon, iconColor, value, label }) => (
            <StatsCard
              key={label}
              icon={icon}
              iconColor={iconColor}
              value={value}
              label={label}
            />
          ))}
        </div>
      </section>
    </>
  );
}
