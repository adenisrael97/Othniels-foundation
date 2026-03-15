"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const images = [
    {
      src: "/images/community2.jpg",
      title: "Community Outreach Day",
    },
    {
      src: "/images/youth.jpg",
      title: "Youth Empowerment Workshop",
    },
    {
      src: "/images/education.jpg",
      title: "Back-to-School Drive",
    },
    {
      src: "/images/health.jpg",
      title: "Health & Wellness Fair",
    },
    {
      src: "/outreach/picture13.jpg",
      title: "Food Distribution Event",
    },
    {
      src: "/images/women2.jpg",
      title: "Women in Leadership Forum",
    },
  ];

  const [modal, setModal] = useState(null);

  return (
    <section className="w-full py-12 px-4 bg-linear-to-br  flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-lg">Our Gallery</h2>
        <p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/90 rounded-xl px-6 py-4 shadow">
          <span className="text-orange-600 font-semibold">Explore</span> moments of impact, joy, and transformation. Our gallery showcases the heart of <span className="text-red-600 font-semibold">Othniel Foundation</span>—capturing the smiles, events, and milestones that define our journey of hope and service. Every photo tells a story of lives touched and communities uplifted.
        </p>
      </div>
      {/* Responsive grid for gallery */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-xl border border-orange-200 bg-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-orange-400"
            onClick={() => setModal(img)}
            tabIndex={0}
            aria-label={`View ${img.title}`}
            style={{ height: '220px' }}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={400}
              height={220}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              priority={idx < 2}
            />
            {/* Overlay for title and color accent */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-orange-700/80 via-orange-400/30 to-transparent px-4 py-3 flex items-end z-10">
              <span className="text-white text-base md:text-lg font-bold tracking-wide drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                {img.title}
              </span>
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-linear-to-br from-yellow-400 via-orange-300 to-red-400 rounded-bl-2xl opacity-60 z-10"></div>
          </div>
        ))}
      </div>
      {/* Lightbox modal for image preview */}
      {modal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setModal(null)}>
          <div className="relative max-w-2xl w-full mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
            <Image
              src={modal.src}
              alt={modal.title}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-orange-700/90 via-orange-400/60 to-transparent px-6 py-4 flex items-end">
              <span className="text-white text-xl font-bold drop-shadow-lg tracking-wide">
                {modal.title}
              </span>
            </div>
            <button
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-lg hover:bg-red-700 transition-colors duration-200"
              onClick={() => setModal(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}