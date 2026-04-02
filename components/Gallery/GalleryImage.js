"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const outreachImages = [
  "picture1.webp", "picture2.webp", "picture3.webp", "picture4.webp", "picture5.webp",
  "picture6.webp", "picture7.webp", "picture8.webp", "picture9.webp", "picture10.webp",
  "picture11.webp", "picture12.webp", "picture13.webp", "picture14.webp", "picture15.webp",
  "picture16.webp", "picture17.webp", "picture18.webp", "picture19.webp", "picture20.webp",
  "picture21.webp"
];

const PAGE_SIZE = 9;

export default function GalleryImage() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(outreachImages.length / PAGE_SIZE);
  const visibleImages = outreachImages.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className="w-full min-h-screen bg-linear-to-br py-10 px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-3 drop-shadow-lg tracking-tight">
            Our Outreach Gallery
          </h1>
          <p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/80 rounded-xl px-4 py-3 shadow inline-block">
            Explore the heart of our mission through these moments of hope, service, and transformation.
            Each photo captures the spirit of Othniel Foundation outreach—empowering communities,
            spreading joy, and making a difference together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visibleImages.map((img, idx) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-3xl shadow-lg bg-white/90 h-52 group"
            >
              <Image
                src={`/outreach/${img}`}
                alt={`Outreach ${page * PAGE_SIZE + idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => { setPage((p) => Math.max(0, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              disabled={page === 0}
              className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">Page {page + 1} of {totalPages}</span>
            <button
              onClick={() => { setPage((p) => Math.min(totalPages - 1, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              disabled={page === totalPages - 1}
              className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
