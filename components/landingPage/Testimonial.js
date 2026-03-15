
"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Aisha Bello",
        text: "Othniel Foundation provided me with school supplies and mentorship. I now have hope for my future!",
    },
    {
        name: "Emeka Okafor",
        text: "Thanks to Othniel Foundation, my family received food support during tough times. Forever grateful!",
    },
    {
        name: "Fatima Sule",
        text: "I got a scholarship for my studies. Othniel Foundation changed my life!",
    },
    {
        name: "John Adeyemi",
        text: "The foundation helped me start my small business. Now I can provide for my family.",
    },
   
];

export default function Testimonial() {
    return (
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center py-10 px-2 bg-linear-to-br">
            <div className="w-full max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 tracking-tight drop-shadow-lg">Stories of Hope</h2>
                <p className="max-w-2xl mx-auto text-center text-yellow-900 text-lg md:text-xl mb-6 font-medium bg-white/90 rounded-xl px-6 py-4 shadow">
                    Every story here is a testament to the power of hope and community. <span className="font-semibold text-red-600">Othniel Foundation</span> uplifts lives, one act of kindness at a time. These voices reflect the real impact of compassion, support, and opportunity—reminding us that together, we can create a brighter future for all.
                </p>
            </div>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.slice(0, 4).map((t, idx) => (
                    <div
                        key={idx}
                        className="relative bg-linear-to-br from-white via-yellow-50 to-orange-50 rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center border border-orange-200 hover:shadow-2xl hover:border-orange-400 transition-all duration-300 group"
                        tabIndex={0}
                        aria-label={`Testimonial from ${t.name}`}
                    >
                        {/* Decorative quote icon */}
                        <svg className="absolute -top-5 left-6 w-10 h-10 text-orange-200 opacity-40 group-hover:opacity-70 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.001 5.001 0 0 0 2 11v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-2a5.001 5.001 0 0 0-4.83-4.83zm0 2.02A3.001 3.001 0 0 1 10 11v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2c0-1.3.84-2.4 2.17-2.81zM17.17 6.17A5.001 5.001 0 0 0 12 11v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-2a5.001 5.001 0 0 0-4.83-4.83zm0 2.02A3.001 3.001 0 0 1 20 11v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2c0-1.3.84-2.4 2.17-2.81z"/></svg>
                        {/* Avatar ring with subtle shadow and gradient */}
                                                <div className="mb-4">
                                                      <div className="w-16 h-16 rounded-full bg-linear-to-tr from-yellow-400 via-orange-300 to-red-400 p-1 flex items-center justify-center shadow-md">
                                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                                                            <span className="text-orange-700 text-2xl font-extrabold">
                                                                {t.name.split(' ')[0][0] + t.name.split(' ')[1][0]}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-orange-900 text-base mb-4 text-center font-medium leading-relaxed">
                                                    {t.text}
                                                </p>
                                                <span className="text-red-600 font-semibold text-base mt-2 tracking-wide">
                                                    {t.name}
                                                </span>
                    </div>
                ))}
            </div>
        </section>
    );
}