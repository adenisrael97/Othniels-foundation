const testimonials = [
  {
    name: "Aisha Bello",
    role: "Scholarship Recipient",
    text: "Othniel Foundation provided me with school supplies and mentorship. I now have hope for my future.",
  },
  {
    name: "Emeka Okafor",
    role: "Food Aid Beneficiary",
    text: "Thanks to Othniel Foundation, my family received food support during tough times. Forever grateful.",
  },
  {
    name: "Fatima Sule",
    role: "Education Program",
    text: "I received a scholarship for my studies. Othniel Foundation changed my life in ways I never imagined.",
  },
  {
    name: "John Adeyemi",
    role: "Business Empowerment",
    text: "The foundation helped me start my small business. Now I can provide for my family with dignity.",
  },
];

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function Testimonial() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Stories of Hope
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Real voices from the communities we serve — every story a testament
            to what compassion and collective action can achieve.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote mark */}
              <svg
                className="w-7 h-7 text-amber-600 mb-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-gray-600">{initials(t.name)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
