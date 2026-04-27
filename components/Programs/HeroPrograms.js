import Image from "next/image";
import Button from "@/components/ui/Button";
import { StatsCard } from "@/components/ui/Card";

const stats = [
  { value: "5,000+", label: "Lives Transformed" },
  { value: "120+",   label: "Communities Reached" },
  { value: "8",      label: "Core Programs" },
  { value: "300+",   label: "Active Volunteers" },
];

export default function HeroPrograms() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full h-[50vh] min-h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/outreach/picture3.webp"
            alt="Othniel Foundation Programs"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-950/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Programs
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-lg mb-8">
            From youth mentorship and women&apos;s empowerment to health outreach
            and community development — programs built for lasting impact.
          </p>
          <Button variant="brand" href="/contact">
            Support Our Programs
          </Button>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="w-full bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <StatsCard key={label} type="accent" value={value} label={label} />
          ))}
        </div>
      </section>
    </>
  );
}
