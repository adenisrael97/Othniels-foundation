"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandHoldingHeart, FaHome, FaHandsHelping, FaBlog } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/Card";

const stats = [
  { icon: <FaHandHoldingHeart />, value: "12,000+", label: "Lives Touched" },
  { icon: <FaHome />,             value: "50+",     label: "Communities" },
  { icon: <FaHandsHelping />,     value: "300+",    label: "Volunteers" },
  { icon: <FaBlog />,             value: "20+",     label: "Programs" },
];

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full h-[88vh] min-h-140 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero1.webp"
            alt="Othniel Foundation — Empowering Lives"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark scrim — no gradient, just a flat dark overlay for legibility */}
          <div className="absolute inset-0 bg-gray-950/55" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Non-Profit Organisation · Abuja, Nigeria
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Empowering Lives,
            <br />
            Building Futures
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Othniel Foundation uplifts communities through education, health,
            and empowerment programs. Join us in making a lasting difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button variant="brand" size="lg" href="/donate">
              Donate Now
              <FaArrowRight className="text-sm" />
            </Button>
            <Button variant="ghost" size="lg" href="/programs">
              Our Programs
            </Button>
          </motion.div>
        </motion.div>

      </section>

      {/* ── Stats strip ── */}
      <section className="w-full bg-white py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {stats.map(({ icon, value, label }) => (
            <StatsCard key={label} icon={icon} value={value} label={label} />
          ))}
        </div>
      </section>
    </>
  );
}
