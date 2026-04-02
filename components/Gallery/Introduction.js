import Image from "next/image";

const outreachImages = Array.from({ length: 21 }, (_, i) => `/outreach/picture${i + 1}.webp`);

export default function Gallery() {
	return (
		<section className="w-full min-h-screen bg-linear-to-br from-yellow-50 via-orange-50 to-red-50 py-16 px-4 flex flex-col items-center justify-center">
			<div className="max-w-3xl mx-auto text-center mb-10">
				<h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-4 drop-shadow-lg tracking-tight">Our Gallery</h1>
				<p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/90 rounded-xl px-6 py-4 shadow">
					Welcome to our gallery—a vibrant showcase of hope, impact, and transformation. Here, every photo tells a story: of lives uplifted, communities empowered, and dreams realized. Explore the moments that define Othniel Foundation’s journey, from joyful outreach events to inspiring volunteer efforts. Let these images spark your passion to join us in making a difference!
				</p>
			</div>
			{/* Gallery images removed as requested */}
		</section>
	);
}
