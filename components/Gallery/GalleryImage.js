"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const outreachImages = [
	"picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg", "picture5.jpg", "picture6.jpg", "picture7.jpg", "picture8.jpg", "picture9.jpg", "picture10.jpg", "picture11.jpg", "picture12.jpg", "picture13.jpg", "picture14.jpg", "picture15.jpg", "picture16.jpg", "picture17.jpg", "picture18.jpg", "picture19.jpg", "picture20.jpg", "picture21.jpg"
];

export default function GalleryImage() {

							       return (
											   <section className="w-full min-h-screen bg-linear-to-br py-10 px-2 flex flex-col items-center justify-center">
											       <div className="w-full max-w-6xl mx-auto">
												       <div className="text-center mb-10">
													       <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-3 drop-shadow-lg tracking-tight">Our Outreach Gallery</h1>
													       <p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/80 rounded-xl px-4 py-3 shadow inline-block">
														       Explore the heart of our mission through these moments of hope, service, and transformation. Each photo captures the spirit of Othniel Foundation’s outreach—empowering communities, spreading joy, and making a difference together.
													       </p>
												       </div>
												       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
													       {outreachImages.map((img, idx) => (
													       	   <motion.div
													       	   	   key={img}
													       	   	   initial={{ opacity: 0, scale: 0.98 }}
													       	   	   animate={{ opacity: 1, scale: 1 }}
													       	   	   transition={{ duration: 0.5, delay: idx * 0.04 }}
													       	   	   className="relative overflow-hidden rounded-3xl shadow-lg bg-white/90 h-44 md:h-52 group"
													       	   >
													       	   	   <Image
													       	   	   	   src={`/outreach/${img}`}
													       	   	   	   alt={`Outreach ${idx + 1}`}
													       	   	   	   fill
													       	   	   	   className="object-cover w-full h-full block transition-transform duration-300 group-hover:scale-105"
													       	   	   	   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
													       	   	   	   loading={img === "picture20.jpg" ? "eager" : "lazy"}
													       	   	   	   unoptimized
													       	   	   />
													       </motion.div>
													       ))}
												       </div>
											       </div>
										       </section>
									       );
									}
