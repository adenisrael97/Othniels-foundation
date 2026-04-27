import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Request() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-72 flex items-center">
          {/* Background image */}
          <Image
            src="/images/photo4.webp"
            alt="Community outreach"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          {/* Flat dark overlay — no gradient */}
          <div className="absolute inset-0 bg-gray-950/65" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center px-6 py-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">
              Get Involved
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto mb-8">
              Every act of kindness creates a ripple of hope. Join us in
              touching lives, uplifting communities, and making a lasting
              impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="brand" size="lg" href="/donate">
                Donate Now
              </Button>
              <Button variant="ghost" size="lg" href="/contact">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
