import Image from "next/image";
import { FaUsers } from "react-icons/fa";

// Generic card shell
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}

// Stats counter card — two visual types:
//   type="default"  → white card, all-side gray border, optional icon (used in Hero)
//   type="accent"   → white/90 card, colored top-4 border, no icon (used in HeroPrograms)
export function StatsCard({
  type = "default",
  icon,
  iconColor = "text-red-600",
  value,
  valueColor = "text-black",
  label,
  labelColor = "text-black",
  labelWeight = "font-thin",
  accentColor = "border-yellow-400",
  className = "",
}) {
  const base =
    type === "accent"
      ? `flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 border-t-4 ${accentColor}`
      : "flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 border border-gray-200";

  return (
    <div className={`${base} ${className}`}>
      {icon && (
        <span className={`text-4xl md:text-5xl mb-2 ${iconColor}`}>
          {icon}
        </span>
      )}
      <span className={`text-3xl md:text-4xl font-extrabold mb-1 ${valueColor}`}>
        {value}
      </span>
      <span className={`text-lg md:text-xl ${labelColor} ${labelWeight}`}>
        {label}
      </span>
    </div>
  );
}

// Program / "What We Do" card — image + optional badge overlay + title + description + tag
export function ProgramCard({
  image,
  alt,
  badgeNode,
  title,
  description,
  tag,
  tagClassName = "bg-yellow-100 text-yellow-700",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={alt || title}
          fill
          loading="lazy"
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badgeNode && (
          <span className="absolute top-3 right-3">{badgeNode}</span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-2">{description}</p>
        {tag && (
          <span
            className={`inline-block text-xs font-bold px-3 py-1 rounded-full mt-auto ${tagClassName}`}
          >
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

// Detailed program card for OurPrograms — image + gradient badge + icon/name + beneficiaries + features
export function ProgramDetailCard({
  image,
  benefit,
  icon,
  name,
  description,
  beneficiaries,
  features,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full relative border-t-4 border-orange-200">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 right-3 bg-linear-to-r from-orange-400 via-yellow-400 to-red-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {benefit}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <span className="text-lg font-semibold text-orange-500">{name}</span>
        </div>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <div className="flex items-center gap-2 mb-2">
          <FaUsers className="text-gray-400 text-base" />
          <span className="text-xs text-gray-600">{beneficiaries} beneficiaries</span>
        </div>
        <div className="mt-auto">
          <span className="text-xs font-bold text-orange-400 mb-1">Features:</span>
          <ul className="list-disc list-inside text-xs text-gray-500">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Help / action card for "How You Can Help" section
export function HelpCard({ icon, title, description, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-orange-200">
      {icon}
      <h4 className="text-xl font-bold text-orange-500 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm mb-4 text-center">{description}</p>
      {children}
    </div>
  );
}
