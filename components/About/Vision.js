import Image from 'next/image';

export default function VisionMission() {
	return (
		<>
			{/* Mission & Vision Section */}
			<section className="w-full py-12 px-4 md:px-0 bg-white font-sans">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Mission Card */}
					<div className="bg-linear-to-br from-yellow-50 via-white to-gray-100 rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100">
							{/* Mission Icon */}
							<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
						</div>
						<h3 className="text-2xl font-bold text-yellow-600 mb-2">Our Mission</h3>
						<p className="text-gray-700 text-base leading-relaxed">
							To empower individuals and communities through education, healthcare, and sustainable development initiatives. We strive to create opportunities, foster hope, and inspire positive change for a brighter future.
						</p>
					</div>
					{/* Vision Card */}
					<div className="bg-linear-to-br from-orange-50 via-white to-gray-100 rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
							{/* Vision Icon */}
							<svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2v2H7m6 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2" /></svg>
						</div>
						<h3 className="text-2xl font-bold text-orange-600 mb-2">Our Vision</h3>
						<p className="text-gray-700 text-base leading-relaxed">
							To be a leading force in building resilient, inclusive, and thriving communities where every individual has the opportunity to reach their full potential and contribute to society.
						</p>
					</div>
				</div>
			</section>

			{/* Our Values & What Drives Us Section */}
			<section className="w-full py-12 px-4 md:px-0 bg-white font-sans">
				<div className="max-w-5xl mx-auto mb-10 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">Our Values & What Drives Us</h2>
					<p className="text-gray-700 text-lg max-w-2xl mx-auto">At Adeniran Foundation, our core values shape every decision and action. We are driven by compassion, integrity, empowerment, and collaboration—ensuring that every initiative uplifts, inspires, and creates lasting impact in the communities we serve.</p>
				</div>
				<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{/* Compassion Card */}
					<div className="bg-linear-to-br from-yellow-50 via-white to-gray-100 rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100">
							<svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4.04 13 5.09C13.5 4.04 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" /></svg>
						</div>
						<h3 className="text-lg font-bold text-yellow-600 mb-1">Compassion</h3>
						<p className="text-gray-700 text-sm">We act with empathy and kindness, putting people at the heart of everything we do.</p>
					</div>
					{/* Integrity Card */}
					<div className="bg-linear-to-br from-orange-50 via-white to-gray-100 rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
							<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z" /></svg>
						</div>
						<h3 className="text-lg font-bold text-orange-600 mb-1">Integrity</h3>
						<p className="text-gray-700 text-sm">We uphold honesty, transparency, and accountability in all our actions and partnerships.</p>
					</div>
					{/* Empowerment Card */}
					<div className="bg-linear-to-br from-red-50 via-white to-gray-100 rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
							<svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
						</div>
						<h3 className="text-lg font-bold text-red-600 mb-1">Empowerment</h3>
						<p className="text-gray-700 text-sm">We enable individuals and communities to realize their full potential and drive their own progress.</p>
					</div>
					{/* Collaboration Card */}
					<div className="bg-linear-to-br from-gray-100 via-white to-yellow-50 rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
						<div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
							<svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0zm6 4v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2h4a2 2 0 012 2z" /></svg>
						</div>
						<h3 className="text-lg font-bold text-gray-700 mb-1">Collaboration</h3>
						<p className="text-gray-700 text-sm">We work together with partners, communities, and stakeholders to maximize our impact.</p>
					</div>
				</div>
			</section>
			{/* Our Team Section */}
			<section className="w-full py-12 px-4 md:px-0 bg-white font-sans">
				<div className="max-w-5xl mx-auto mb-10 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Our Team</h2>
					<p className="text-gray-700 text-lg max-w-2xl mx-auto">Meet the passionate people behind our mission—dedicated professionals and volunteers who drive Adeniran Foundation&rsquo;s impact and vision every day.</p>
				</div>
				<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* Team Member 1 */}
					<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
						<Image
							src="/images/istockphoto-1213147119-612x612.jpg"
							alt="Dr. Adeniran"
							width={96}
							height={96}
							className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 mb-3"
						/>
						<h3 className="text-lg font-bold text-gray-800">Dr. Adeniran</h3>
						<p className="text-sm text-gray-500">Founder & President</p>
					</div>
					{/* Team Member 2 */}
					<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
						<Image
							src="/images/istockphoto-2257028065-612x612.jpg"
							alt="Grace Okafor"
							width={96}
							height={96}
							className="w-24 h-24 rounded-full object-cover border-4 border-orange-400 mb-3"
						/>
						<h3 className="text-lg font-bold text-gray-800">Grace Okafor</h3>
						<p className="text-sm text-gray-500">Programs Director</p>
					</div>
					{/* Team Member 3 */}
					<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
						<Image
							src="/images/istockphoto-888343166-612x612.webp"
							alt="Samuel Adeyemi"
							width={96}
							height={96}
							className="w-24 h-24 rounded-full object-cover border-4 border-red-400 mb-3"
						/>
						<h3 className="text-lg font-bold text-gray-800">Samuel Adeyemi</h3>
						<p className="text-sm text-gray-500">Community Lead</p>
					</div>
					{/* Team Member 4 */}
					<div className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
						<Image
							src="/images/istockphoto-1333790678-612x612.jpg"
							alt="Fatima Bello"
							width={96}
							height={96}
							className="w-24 h-24 rounded-full object-cover border-4 border-orange-400 mb-3"
						/>
						<h3 className="text-lg font-bold text-gray-800">Fatima Bello</h3>
						<p className="text-sm text-gray-500">Health Coordinator</p>
					</div>
				</div>
			</section>
		</>
	);
}
