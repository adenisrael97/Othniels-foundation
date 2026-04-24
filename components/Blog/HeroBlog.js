"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const latestNews = [
  {
    id: "l1",
    image: "/Staff/picture8.webp",
    date: "2026-02-05",
    type: "Impact",
    title: "Othniel Foundation Receives National Award",
    content: "We are honored to be recognized for our outstanding contribution to community development in Nigeria.",
  },
  {
    id: "l2",
    image: "/images/fundraising.webp",
    date: "2026-02-03",
    type: "Event",
    title: "Annual Fundraising Gala Success",
    content: "Our 2026 gala brought together supporters and partners, raising vital funds for our upcoming projects.",
  },
];

const newsData = [
  { id: 1, image: "/images/girls education.webp", date: "2026-02-01", type: "Impact",    title: "Empowering Girls Through Education",  content: "Our latest initiative is breaking barriers and opening doors for young girls in rural communities." },
  { id: 2, image: "/images/Health.webp",           date: "2026-01-25", type: "Health",    title: "Health Camp: Making a Difference",     content: "Our recent health camp provided free checkups and medicines to over 500 families." },
  { id: 3, image: "/Staff/picture3.webp",          date: "2026-01-20", type: "Volunteer", title: "Volunteer Spotlight: Samuel",          content: "Meet Samuel, one of our dedicated volunteers, and learn how he's making a real impact in his community." },
  { id: 4, image: "/outreach/picture6.webp",       date: "2026-01-15", type: "Event",     title: "Community Event Success",             content: "Our recent event brought together hundreds to celebrate progress and unity." },
  { id: 5, image: "/images/mobile clinic.webp",    date: "2026-01-10", type: "Health",    title: "Mobile Clinic Launch",                content: "We launched a mobile clinic to reach remote communities with essential healthcare services." },
  { id: 6, image: "/images/Scholarship.webp",      date: "2026-01-05", type: "Impact",    title: "Scholarship Awards Ceremony",         content: "Celebrating the achievements of our scholarship recipients and their families." },
  { id: 7, image: "/outreach/picture17.webp",      date: "2025-12-28", type: "Volunteer", title: "Meet Our New Volunteers",             content: "Welcoming new faces to our team and sharing their stories of service." },
  { id: 8, image: "/outreach/picture1.webp",       date: "2025-12-20", type: "Event",     title: "Women's Initiative Workshop",         content: "Empowering women through skills training and leadership development." },
];

const typeIcons = {
  Impact: (
    <svg className="w-5 h-5 text-yellow-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Health: (
    <svg className="w-5 h-5 text-orange-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  ),
  Volunteer: (
    <svg className="w-5 h-5 text-red-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Event: (
    <svg className="w-5 h-5 text-gray-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

const filterTypes = ["All", "Impact", "Health", "Volunteer", "Event"];

export default function HeroBlog() {
  const [filter, setFilter] = useState("All");
  const filteredNews =
    filter === "All" ? newsData : newsData.filter((n) => n.type === filter);

  return (
    <section className="w-full py-12 px-4 md:px-0 bg-white font-sans">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Blog &amp; News
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4 font-medium">
          Stay updated with the latest stories, news, and inspiring updates from
          Othniel Foundation and the communities we serve.
        </p>
      </div>

      {/* Latest News */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-left">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {latestNews.map((news) => (
            <Card
              key={news.id}
              className="flex flex-col gap-4 border border-orange-100 overflow-hidden rounded-3xl"
            >
              <div className="relative w-full h-72 md:h-80 lg:h-96">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-4 pb-5 pt-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    {typeIcons[news.type]}{news.type}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-5 flex-1 line-clamp-3">
                  {news.content}
                </p>
                <div className="mt-auto flex justify-end">
                  <Button variant="link" size="sm" href={`/blog/${news.id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterTypes.map((type) => (
          <Button
            key={type}
            variant="filter"
            active={filter === type}
            onClick={() => setFilter(type)}
            type="button"
          >
            {type}
          </Button>
        ))}
      </div>

      {/* News Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredNews.map((news) => (
          <Card
            key={news.id}
            className="flex flex-col gap-4 border border-orange-100 overflow-hidden"
          >
            <div className="relative w-full h-64 md:h-72">
              <Image
                src={news.image}
                alt={news.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-5 pt-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  {typeIcons[news.type]}{news.type}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(news.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-2 line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-5 flex-1 line-clamp-3">
                {news.content}
              </p>
              <div className="mt-auto flex justify-end">
                <Button variant="link" size="sm" href={`/blog/${news.id}`}>
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
