import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const newsData = [
  { id: 9,  title: "Empowering Youth Through Education",    date: "2026-02-01", time: "10:30 AM", image: "/images/Youth3.webp" },
  { id: 10, title: "Community Health Outreach Success",     date: "2026-01-28", time: "2:00 PM",  image: "/images/photo1.webp" },
  { id: 11, title: "Women in Tech Initiative Launched",     date: "2026-01-20", time: "9:00 AM",  image: "/images/womentech.webp" },
  { id: 12, title: "Annual Fundraiser Exceeds Goals",       date: "2026-01-15", time: "6:00 PM",  image: "/images/fundraising.webp" },
  { id: 13, title: "New Scholarship Program Announced",     date: "2026-01-10", time: "11:00 AM", image: "/images/photo6.webp" },
  { id: 14, title: "Volunteer Spotlight: Making a Difference", date: "2026-01-05", time: "4:30 PM", image: "/outreach/picture18.webp" },
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
    <section className="w-full py-12 px-4 bg-linear-to-br flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-lg">
          Latest News &amp; Updates
        </h2>
        <p className="text-lg md:text-xl font-medium text-yellow-900 bg-white/90 rounded-xl px-6 py-4 shadow">
          Stay informed about our latest initiatives, success stories, and upcoming
          events. Our news section highlights the impact we&apos;re making in
          communities, shares inspiring stories of change, and keeps you connected
          to the heart of our mission. Together, we can celebrate progress and
          inspire action for a better future.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <Card
            key={news.id}
            className="hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group border border-orange-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={news.image}
                alt={news.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                <Button variant="link" size="sm" href={`/blog/${news.id}`}>
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="w-full flex justify-center mt-12">
        <Button variant="link" size="lg" href="/blog" className="rounded-xl group">
          View All Articles
          <svg
            className="ml-3 w-6 h-6 text-yellow-400 group-hover:text-white transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>

      <div className="w-full mt-16 flex justify-center">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl h-64 md:h-80">
          <Image
            src="/images/Hero1.webp"
            alt="Make a Difference Background"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 md:px-16 md:py-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
              Ready to make a difference?
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-6 text-center max-w-xl">
              Join us in creating lasting change. Whether you donate or volunteer,
              your support empowers communities and transforms lives.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="danger" href="/donate" className="rounded-xl">
                Donate Now
              </Button>
              <Button
                variant="nav"
                href="/contact"
                className="rounded-xl text-orange-700 bg-yellow-400 hover:bg-orange-500 hover:text-white"
              >
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
