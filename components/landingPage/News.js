import Image from "next/image";
import Link from "next/link";

export default function News() {
    const newsData = [
        {
            id: 9,
            title: "Empowering Youth Through Education",
            date: "2026-02-01",
            time: "10:30 AM",
            image: "/images/youth3.jpg",
        },
        {
            id: 10,
            title: "Community Health Outreach Success",
            date: "2026-01-28",
            time: "2:00 PM",
            image: "/images/photo1.jpg",
        },
        {
            id: 11,
            title: "Women in Tech Initiative Launched",
            date: "2026-01-20",
            time: "9:00 AM",
            image: "/images/womentech.jpg",
        },
        {
            id: 12,
            title: "Annual Fundraiser Exceeds Goals",
            date: "2026-01-15",
            time: "6:00 PM",
            image: "/images/fundraising.jpg",
        },
        {
            id: 13,
            title: "New Scholarship Program Announced",
            date: "2026-01-10",
            time: "11:00 AM",
            image: "/images/photo6.webp",
        },
        {
            id: 14,
            title: "Volunteer Spotlight: Making a Difference",
            date: "2026-01-05",
            time: "4:30 PM",
            image: "/images/photo15.jpg",
        },
    ];

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <section className="w-full py-12 px-4 bg-linear-to-br flex flex-col items-center justify-center">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-lg">Latest News & Updates</h2>
                <p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/90 rounded-xl px-6 py-4 shadow">
                    Stay informed about our latest initiatives, success stories, and upcoming events. Our news section highlights the impact we&#39;re making in communities, shares inspiring stories of change, and keeps you connected to the heart of our mission. Together, we can celebrate progress and inspire action for a better future.
                </p>
            </div>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-xl border border-orange-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
                    >
                        <div className="relative w-full">
                            {/* Use Next.js Image component for optimization */}
                            <Image
                                src={news.image}
                                alt={news.title}
                                width={612}
                                height={224}
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-orange-100 text-orange-700">
                                    {formatDate(news.date)}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-700">
                                    {news.time}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-red-600 mb-2 line-clamp-2">
                                {news.title}
                            </h3>
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
            <div className="w-full flex justify-center mt-12">
                <Link href="/blog" className="inline-flex items-center px-6 py-3 rounded-xl bg-orange-600 text-white font-bold text-lg shadow hover:bg-red-600 transition-colors duration-200 group">
                    View All Articles
                    <svg className="ml-3 w-6 h-6 text-yellow-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
            {/* Call-to-action section */}
            <div className="w-full mt-16 flex justify-center">
                <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/images/Hero1.webp"
                        alt="Make a Difference Background"
                        width={1200}
                        height={300}
                        className="object-cover w-full h-64 md:h-80"
                    />
                    {/* Removed background overlay from call-to-action image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 md:px-16 md:py-12">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg text-center">Ready to make a difference?</h3>
                        <p className="text-lg md:text-xl text-white/90 mb-6 text-center max-w-xl">Join us in creating lasting change. Whether you donate or volunteer, your support empowers communities and transforms lives.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <a href="/donate" className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-lg shadow hover:bg-orange-600 transition-colors duration-200">
                                Donate Now
                            </a>
                            <a href="/contact" className="px-6 py-3 rounded-xl bg-yellow-400 text-orange-700 font-bold text-lg shadow hover:bg-orange-500 hover:text-white transition-colors duration-200">
                                Become a Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}