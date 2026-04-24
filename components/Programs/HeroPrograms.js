import Image from "next/image";
import Button from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/Card";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "5,000+", label: "Lives Transformed",    accentColor: "border-yellow-400", valueColor: "text-orange-500" },
  { value: "120+",   label: "Communities Reached",  accentColor: "border-orange-400", valueColor: "text-red-500" },
  { value: "8",      label: "Core Programs",        accentColor: "border-yellow-500", valueColor: "text-yellow-500" },
  { value: "300+",   label: "Active Volunteers",    accentColor: "border-orange-500", valueColor: "text-orange-500" },
];

export default function HeroPrograms() {
  return (
    <>
      <section className="relative w-full min-h-80 h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden font-sans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/outreach/picture3.webp"
            alt="Othniel Foundation Programs"
            fill
            priority
            className="object-cover w-full h-full brightness-105 sm:object-top object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br opacity-50 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-3xl font-extrabold text-white mt-8 mb-4 drop-shadow-lg tracking-tight">
            OUR PROGRAMS
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 font-thin drop-shadow-md leading-relaxed">
            At Othniel Foundation, our programs are designed to empower, educate,
            and uplift. From youth mentorship and women&apos;s empowerment to health
            outreach and community development, we are committed to creating lasting
            impact and brighter futures for all.
          </p>
          <Button variant="primary" href="/contact" className="mt-10">
            Support Our Programs
            <FiArrowRight className="ml-1 text-lg" />
          </Button>
        </div>
      </section>

      <section className="w-full bg-linear-to-r py-10 md:py-16 font-sans">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, accentColor, valueColor }) => (
            <StatsCard
              key={label}
              type="accent"
              value={value}
              label={label}
              accentColor={accentColor}
              valueColor={valueColor}
              labelColor="text-gray-700"
              labelWeight="font-semibold"
            />
          ))}
        </div>
      </section>
    </>
  );
}
