import Image from "next/image";

const contactItems = [
  {
    label: "Phone",
    value: "+234 803 111 7861",
    href: "tel:+2348031117861",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S9.5 12 12 14.5s4 3.5 4 3.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0124 18.72V22a2 2 0 01-2 2C10.716 24 0 13.284 0 2a2 2 0 012-2h3z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "othnielsfoundation@gmail.com",
    href: "mailto:othnielsfoundation@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "House 2, Jibia Street, Area 2, Abuja, Nigeria",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full h-[45vh] min-h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/outreach/picture1.webp"
            alt="Contact Othniel Foundation"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-950/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto">
            We&apos;re here to answer your questions and connect you with the right
            support. Your voice matters to us.
          </p>
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map((item) => {
            const inner = (
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-3">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.value}</p>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} className="block">
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
