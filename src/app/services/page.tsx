import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Spa Services & Therapies — Unique Premium Spa Delhi NCR",
  description: "Explore our luxury massage therapies: Full Body, B2B, Sandwich four-hand, Couple suite, and Authentic Thai massage.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-2">
            PREMIER WELLNESS &amp; SPA THERAPIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-primary)] mb-3">
            Our Signature Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-normal leading-relaxed">
            Six carefully curated treatments across our Delhi NCR luxury suites — each performed by licensed Indian &amp; certified Foreign therapists.
          </p>
        </div>

        {/* Services Grid — 2 columns on mobile, 3 on desktop, matching home page */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
            >
              <Link
                href={`/services/${service.slug}`}
                className="absolute inset-0 z-10"
                aria-label={service.title}
              />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  {service.subtitle}
                </span>
                {service.badge && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-[var(--color-primary)] px-2 py-0.5 sm:py-1 rounded-md shadow-sm">
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <div>
                  <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                    {service.title}
                  </h3>
                  <span className="text-[10px] text-[var(--color-primary)] font-semibold flex items-center gap-1 mt-0.5">
                    ✨ Foreign &amp; Indian Therapist Available
                  </span>
                </div>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
