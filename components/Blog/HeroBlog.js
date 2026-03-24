"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function HeroBlog() {
		// Latest news data (featured)
		const latestNews = [
			{
				id: 'l1',
				image: "/Staff/picture8.jpg",
				date: "2026-02-05",
				type: "Impact",
				icon: "impact",
				   title: "Othniel Foundation Receives National Award",
				content: "We are honored to be recognized for our outstanding contribution to community development in Nigeria.",
			},
			{
				id: 'l2',
				image: "/images/fundraising.jpg",
				date: "2026-02-03",
				type: "Event",
				icon: "event",
				title: "Annual Fundraising Gala Success",
				content: "Our 2026 gala brought together supporters and partners, raising vital funds for our upcoming projects.",
			},
		];
	const newsData = [
		{
			id: 1,
			image: "/images/girls education.jpg",
			date: "2026-02-01",
			type: "Impact",
			icon: "impact",
			title: "Empowering Girls Through Education",
			content: "Our latest initiative is breaking barriers and opening doors for young girls in rural communities.",
		},
		{
			id: 2,
			image: "/images/Health.jpg",
			date: "2026-01-25",
			type: "Health",
			icon: "health",
			title: "Health Camp: Making a Difference",
			content: "Our recent health camp provided free checkups and medicines to over 500 families.",
		},
		{
			id: 3,
			image: "/Staff/picture3.jpg",
			date: "2026-01-20",
			type: "Volunteer",
			icon: "volunteer",
			title: "Volunteer Spotlight: Samuel",
			content: "Meet Samuel, one of our dedicated volunteers, and learn how he’s making a real impact in his community.",
		},
		{
			id: 4,
			image: "/outreach/picture6.jpg",
			date: "2026-01-15",
			type: "Event",
			icon: "event",
			title: "Community Event Success",
			content: "Our recent event brought together hundreds to celebrate progress and unity.",
		},
		{
			id: 5,
			image: "/images/mobile clinic.jpg",
			date: "2026-01-10",
			type: "Health",
			icon: "health",
			title: "Mobile Clinic Launch",
			content: "We launched a mobile clinic to reach remote communities with essential healthcare services.",
		},
		{
			id: 6,
			image: "/images/Scholarship.jpg",
			date: "2026-01-05",
			type: "Impact",
			icon: "impact",
			title: "Scholarship Awards Ceremony",
			content: "Celebrating the achievements of our scholarship recipients and their families.",
		},
		{
			id: 7,
			image: "/outreach/picture17.jpg",
			date: "2025-12-28",
			type: "Volunteer",
			icon: "volunteer",
			title: "Meet Our New Volunteers",
			content: "Welcoming new faces to our team and sharing their stories of service.",
		},
		{
			id: 8,
			image: "/outreach/picture1.jpg",
			date: "2025-12-20",
			type: "Event",
			icon: "event",
			title: "Women’s Initiative Workshop",
			content: "Empowering women through skills training and leadership development.",
		},
	];

	const [filter, setFilter] = React.useState("All");
	const typeIcons = {
		Impact: <svg className="w-5 h-5 text-yellow-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>,
		Health: <svg className="w-5 h-5 text-orange-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z" /></svg>,
		Volunteer: <svg className="w-5 h-5 text-red-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>,
		Event: <svg className="w-5 h-5 text-gray-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="12" r="10" /></svg>,
	};

	const filteredNews = filter === "All" ? newsData : newsData.filter(n => n.type === filter);

	return (
		<section className="w-full py-12 px-4 md:px-0 bg-white font-sans">
			<div className="max-w-3xl mx-auto text-center mb-10">
				<h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Blog & News</h1>
				   <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4 font-medium">Stay updated with the latest stories, news, and inspiring updates from Othniel Foundation and the communities we serve.</p>
			</div>
			{/* Latest News Section */}
			<div className="max-w-6xl mx-auto mb-12">
				<h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-left">Latest News</h2>
				   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					   {latestNews.map(news => (
						   <div key={news.id} className="flex flex-col gap-4 bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
							   <Image src={news.image} alt={news.title} width={900} height={420} className="object-cover w-full h-72 md:h-80 lg:h-96" />
							   <div className="px-4 pb-5 pt-4 flex flex-col flex-1">
								   <div className="flex items-center justify-between mb-2">
									   <span className="text-xs text-gray-400 flex items-center gap-1">
										   {typeIcons[news.type]}{news.type}
									   </span>
									   <span className="text-xs text-gray-400">{new Date(news.date).toLocaleDateString()}</span>
								   </div>
								   <h3 className="text-2xl font-bold text-orange-500 mb-2 line-clamp-2">{news.title}</h3>
								   <p className="text-gray-700 text-base leading-relaxed mb-5 flex-1 line-clamp-3">{news.content}</p>
								   <div className="mt-auto flex justify-end">
									   <Link
										   href={`/blog/${news.id}`}
										   className="px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-red-600 transition-colors duration-200 shadow"
									   >
										   Read More
									   </Link>
								   </div>
							   </div>
						   </div>
					   ))}
				   </div>
			</div>

			{/* Filter Buttons */}
			<div className="flex flex-wrap justify-center gap-3 mb-10">
				{['All', 'Impact', 'Health', 'Volunteer', 'Event'].map(type => (
					<button
						key={type}
						onClick={() => setFilter(type)}
						className={`px-5 py-2 rounded-full font-semibold border-2 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 ${filter === type ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-orange-500 border-orange-200 hover:bg-orange-50'}`}
					>
						{type}
					</button>
				))}
			</div>
			{/* News Cards */}
			   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
				   {filteredNews.map(news => (
					   <div key={news.id} className="flex flex-col gap-4 bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
						   <Image src={news.image} alt={news.title} width={700} height={340} className="object-cover w-full h-64 md:h-72" />
						   <div className="px-4 pb-5 pt-4 flex flex-col flex-1">
							   <div className="flex items-center justify-between mb-2">
								   <span className="text-xs text-gray-400 flex items-center gap-1">
									   {typeIcons[news.type]}{news.type}
								   </span>
								   <span className="text-xs text-gray-400">{new Date(news.date).toLocaleDateString()}</span>
							   </div>
						   	   <h3 className="text-xl font-bold text-orange-500 mb-2 line-clamp-2">{news.title}</h3>
						   	   <p className="text-gray-700 text-base leading-relaxed mb-5 flex-1 line-clamp-3">{news.content}</p>
							   <div className="mt-auto flex justify-end">
								   <Link
									   href={`/blog/${news.id}`}
									   className="px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-red-600 transition-colors duration-200 shadow"
								   >
									   Read More
								   </Link>
							   </div>
						   </div>
					   </div>
				   ))}
			   </div>
		</section>
	);
}
