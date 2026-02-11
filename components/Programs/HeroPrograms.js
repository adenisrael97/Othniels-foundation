import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroPrograms() {
	return (
		<>
			<section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden font-sans">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/istockphoto-640305394-612x612.jpg"
					alt="Adeniran Foundation Programs"
					fill
					priority
					   className="object-cover w-full h-full brightness-105"
				/>
				{/* Gradient Overlay */}
				   <div className="absolute inset-0 bg-linear-to-br from-yellow-400 via-orange-400 to-red-500 opacity-50 mix-blend-multiply" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">OUR PROGRAMS</h1>
				<p className="text-lg md:text-xl text-white/90 mb-6 font-thin drop-shadow-md">
					At Adeniran Foundation, our programs are designed to empower, educate, and uplift. From youth mentorship and women’s empowerment to health outreach and community development, we are committed to creating lasting impact and brighter futures for all.
				</p>
				<Link
					href="/contact"
					className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all text-base tracking-wide border-0 mt-10 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
				>
					Support Our Programs
					<FiArrowRight className="ml-1 text-lg" />
				</Link>
			</div>
		</section>

		{/* Stats Section */}
		<section className="w-full bg-linear-to-r from-yellow-50 via-orange-50 to-red-50 py-10 md:py-16 font-sans">
			<div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{/* Stat Card */}
				<div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border-t-4 border-yellow-400">
					<span className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">5,000+</span>
					<span className="text-gray-700 text-lg font-semibold">Lives Transformed</span>
				</div>
				<div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border-t-4 border-orange-400">
					<span className="text-4xl md:text-5xl font-extrabold text-red-500 mb-2">120+</span>
					<span className="text-gray-700 text-lg font-semibold">Communities Reached</span>
				</div>
				<div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border-t-4 border-yellow-500">
					<span className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-2">8</span>
					<span className="text-gray-700 text-lg font-semibold">Core Programs</span>
				</div>
				<div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border-t-4 border-orange-500">
					<span className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">300+</span>
					<span className="text-gray-700 text-lg font-semibold">Active Volunteers</span>
				</div>
			</div>
		</section>
		</>
	);
}
