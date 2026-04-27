import Image from "next/image";
import { FaUsers } from "react-icons/fa";

/* Generic card shell */
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/*
  StatsCard — impact metrics.
  type="default"  → icon + number + label (homepage hero strip)
  type="accent"   → borderless, number + label (programs page)
*/
export function StatsCard({
  type = "default",
  icon,
  value,
  label,
  className = "",
}) {
  if (type === "accent") {
    return (
      <div className={`flex flex-col items-center bg-white rounded-xl border border-gray-100 shadow-sm p-6 ${className}`}>
        <span className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tabular-nums">
          {value}
        </span>
        <span className="text-sm text-gray-500 text-center">{label}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center bg-white rounded-xl border border-gray-100 shadow-sm p-6 ${className}`}>
      {icon && (
        <span className="text-3xl text-amber-700 mb-3">{icon}</span>
      )}
      <span className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tabular-nums">
        {value}
      </span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}

/* ProgramCard — image + title + description + tag pill */
export function ProgramCard({ image, alt, title, description, tag, tagClassName = "" }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={alt || title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
        {tag && (
          <span className={`self-start text-xs font-medium px-3 py-1 rounded-full mt-auto ${tagClassName}`}>
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

/* ProgramDetailCard — full program listing card */
export function ProgramDetailCard({ image, benefit, icon, name, description, beneficiaries, features }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          {benefit}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2 text-amber-700">
          {icon}
          <span className="text-sm font-semibold text-gray-900">{name}</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
        <div className="flex items-center gap-2 mb-3">
          <FaUsers className="text-gray-400 text-sm" />
          <span className="text-xs text-gray-500">{beneficiaries} beneficiaries</span>
        </div>
        <ul className="mt-auto space-y-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* HelpCard — Donate / Volunteer / Partner action cards */
export function HelpCard({ icon, title, description, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center p-8 text-center hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-amber-700 text-2xl mb-4">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">{description}</p>
      {children}
    </div>
  );
}
