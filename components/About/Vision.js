import Image from "next/image";

const values = [
  {
    title: "Compassion",
    description: "We act with empathy and kindness, putting people at the heart of everything we do.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4.04 13 5.09C13.5 4.04 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We uphold honesty, transparency, and accountability in all our actions and partnerships.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    description: "We enable individuals and communities to realise their full potential.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "We work together with partners, communities, and stakeholders to maximise our impact.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 4v2m0 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2" />
      </svg>
    ),
  },
];

const team = [
  { name: "Mr Jeremiah Oluwaseun Adeniran", role: "Founder & President",  src: "/Staff/CEO.webp" },
  { name: "Mrs Adebola Adetona Adeniran",   role: "Vice President",       src: "/Staff/CoFounder.webp" },
  { name: "Mrs Josephine Aifuwa",           role: "Secretary",            src: "/Staff/Secretary.webp" },
  { name: "Miss Gift",                      role: "Program Director",     src: "/Staff/picture5.webp" },
];

export default function VisionMission() {
  return (
    <>
      {/* ── Mission & Vision ── */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow">Purpose</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-8">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower individuals and communities through education,
                healthcare, and sustainable development initiatives — creating
                opportunities, fostering hope, and inspiring positive change
                for a brighter future.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-8">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a leading force in building resilient, inclusive, and
                thriving communities where every individual has the opportunity
                to reach their full potential and contribute to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
              Our core values shape every decision and action — ensuring every
              initiative uplifts and creates lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow">The People</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Team
            </h2>
            <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
              Meet the dedicated professionals and volunteers who drive
              Othniel Foundation&rsquo;s mission every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, 144px"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{member.name}</p>
                <p className="text-xs text-gray-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
