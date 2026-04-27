import Image from "next/image";
import Button from "@/components/ui/Button";

const newsData = [
  { id: 9,  title: "Empowering Youth Through Education",       date: "2026-02-01", image: "/images/Youth3.webp" },
  { id: 10, title: "Community Health Outreach Success",        date: "2026-01-28", image: "/images/photo1.webp" },
  { id: 11, title: "Women in Tech Initiative Launched",        date: "2026-01-20", image: "/images/womentech.webp" },
  { id: 12, title: "Annual Fundraiser Exceeds Goals",          date: "2026-01-15", image: "/images/fundraising.webp" },
  { id: 13, title: "New Scholarship Program Announced",        date: "2026-01-10", image: "/images/photo6.webp" },
  { id: 14, title: "Volunteer Spotlight: Making a Difference", date: "2026-01-05", image: "/outreach/picture18.webp" },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function News() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">Latest Updates</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              News &amp; Stories
            </h2>
          </div>
          <Button variant="outline" href="/blog" size="sm">
            View All Articles
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <time
                  dateTime={news.date}
                  className="text-xs text-gray-400 mb-2"
                >
                  {formatDate(news.date)}
                </time>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-4 line-clamp-2">
                  {news.title}
                </h3>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" href={`/blog/${news.id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
