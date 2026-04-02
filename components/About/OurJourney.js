import Image from "next/image";

export default function OurJourney() {
	return (
		<>
			<section className="w-full py-16 px-4 md:px-0 bg-linear-to-br from-white via-yellow-50 to-gray-100 font-sans">
				<div className="max-w-5xl mx-auto text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow-lg">Our Journey</h2>
					   <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6 font-medium">From humble beginnings to a beacon of hope, Othniel Foundation’s journey is a story of passion, resilience, and impact. Every milestone reflects our commitment to empowering lives and building stronger communities.</p>
				</div>
				{/* Timeline */}
				<div className="relative max-w-4xl mx-auto">
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 rounded-full"></div>
					<div className="space-y-12">
						{/* Timeline Item 1 */}
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
							<div className="shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white mx-auto md:mx-0">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
							</div>
							<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
								<h3 className="text-xl font-bold text-yellow-600 mb-2">2009: Foundation Established</h3>
								   <p className="text-gray-700">Othniel Foundation was born out of a vision to uplift the underserved, starting with grassroots education and health programs in local communities.</p>
							</div>
						</div>
						{/* Timeline Item 2 */}
						<div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10 relative z-10">
							<div className="shrink-0 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white mx-auto md:mx-0">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="12" r="10" /></svg>
							</div>
							<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
								<h3 className="text-xl font-bold text-orange-500 mb-2">2014: Expanding Our Reach</h3>
								<p className="text-gray-700">With growing support, we launched new initiatives in women’s empowerment, youth mentorship, and community health, impacting thousands more lives.</p>
							</div>
						</div>
						{/* Timeline Item 3 */}
						<div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 relative z-10">
							<div className="shrink-0 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white mx-auto md:mx-0">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
							</div>
							<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
								<h3 className="text-xl font-bold text-red-500 mb-2">2018: National Recognition</h3>
								<p className="text-gray-700">Our impact was recognized nationwide, earning awards for innovation in social development and partnerships with leading organizations.</p>
							</div>
						</div>
						{/* Timeline Item 4 */}
						<div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10 relative z-10">
							<div className="shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white mx-auto md:mx-0">
								<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2v2H7m6 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2" /></svg>
							</div>
							<div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
								<h3 className="text-xl font-bold text-gray-700 mb-2">2024: Looking Ahead</h3>
								   <p className="text-gray-700">Today, Othniel Foundation continues to innovate, inspire, and expand—driven by a vision of a brighter, more equitable future for all.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="w-full py-16 px-4 md:px-0 bg-white font-sans">
				<div className="max-w-6xl mx-auto text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 drop-shadow-lg">Gallery</h2>
					   <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6 font-medium">A glimpse into our impact—explore moments of hope, change, and community from Othniel Foundation’s journey.</p>
				</div>
				<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Gallery Item 1 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-yellow-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/images/photo15.jpg" alt="School Outreach" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-yellow-600">School Outreach</h3>
						</div>
					</div>
					{/* Gallery Item 2 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-orange-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/images/Health.jpg" alt="Health Mission" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-orange-500">Health Mission</h3>
						</div>
					</div>
					{/* Gallery Item 3 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-red-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/images/community.jpg" alt="Community Event" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-red-500">Community Event</h3>
						</div>
					</div>
					{/* Gallery Item 4 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-yellow-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/images/youth.jpg" alt="Youth Empowerment" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-yellow-600">Youth Empowerment</h3>
						</div>
					</div>
					{/* Gallery Item 5 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-orange-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/images/women.jpg" alt="Women's Initiative" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-orange-500">Women’s Initiative</h3>
						</div>
					</div>
					{/* Gallery Item 6 */}
					<div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-red-100 hover:scale-105 transition-transform duration-200">
						<div className="relative w-full h-48">
							<Image src="/outreach/picture8.jpg" alt="Celebration Day" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
						</div>
						<div className="p-4 w-full text-center">
							<h3 className="text-lg font-bold text-red-500">Celebration Day</h3>
						</div>
					</div>
				</div>
			</section>
			{/* Join Our Mission Section */}
			<section className="w-full py-12 px-4 md:px-0 bg-linear-to-br from-yellow-50 via-white to-orange-50 font-sans">
				<div className="max-w-3xl mx-auto flex flex-col items-center text-center rounded-3xl shadow-xl border border-yellow-100 p-8 md:p-12">
					<h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-4 drop-shadow-lg">Join Our Mission</h2>
					<p className="text-lg md:text-xl text-gray-700 mb-8 font-medium max-w-xl">Be a part of something bigger—your support, time, and passion can help us reach more lives and create lasting change. Together, we can build a brighter future for all.</p>
					<a href="/contact" className="inline-block bg-yellow-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-full shadow-lg transition-colors text-lg tracking-wide border-2 border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
						Get Involved
					</a>
				</div>
			</section>
		</>
	);
}
