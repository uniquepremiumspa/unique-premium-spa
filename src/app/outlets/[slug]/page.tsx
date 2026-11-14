import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Navigation,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { outletsData } from "@/data/outletsData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return outletsData.map((outlet) => ({
    slug: outlet.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const outlet = outletsData.find((o) => o.slug === slug);
  if (!outlet) {
    return {
      title: "Outlet Not Found — Unique Premium Spa",
    };
  }

  return {
    title: `${outlet.name} — Luxury Spa in ${outlet.area} | Unique Premium Spa`,
    description: `Visit our 5-star spa outlet at ${outlet.name}, ${outlet.area}. ${outlet.description.slice(0, 150)}...`,
    alternates: {
      canonical: `/outlets/${slug}`,
    },
    openGraph: {
      title: `${outlet.name} — Luxury Spa in ${outlet.area}`,
      description: outlet.description.slice(0, 150),
      url: `/outlets/${slug}`,
      images: [outlet.image],
    },
  };
}

export default async function OutletDetailPage({ params }: Props) {
  const { slug } = await params;
  const outlet = outletsData.find((o) => o.slug === slug);

  if (!outlet) {
    notFound();
  }

  const otherOutlets = outletsData.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <div className="bg-[var(--color-background)] min-h-screen text-[var(--color-foreground)]">
      {/* Hero Header */}
      <section className="relative overflow-hidden min-h-[48vh] sm:min-h-[58vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={outlet.image}
            alt={outlet.name}
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/50 z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 flex flex-col items-center">
          <Link
            href="/outlets"
            className="inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 transition-all mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Outlets
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-pink-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              {outlet.tag} • {outlet.zone}
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              Hotel Rate: {outlet.price || "₹12,999"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {outlet.name}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/90 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-pink-300" /> {outlet.area}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-pink-300" /> {outlet.timing}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919718892869"
              className="px-6 sm:px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4" /> Call +91 97188 92869
            </a>
            <a
              href={`https://wa.me/919718892869?text=Hi%2C%20I%20want%20to%20book%20a%20spa%20session%20at%20${encodeURIComponent(outlet.name)}.`}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Outlet */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1">
                LOCATION OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Welcome to {outlet.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed font-light mb-6">
                {outlet.description}
              </p>

              {/* Foreign Therapist Special Feature */}
              <div className="pt-2 pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-pink-200 shadow-xs shrink-0">
                    <Image
                      src={outlet.therapistImage || "/therapists/foreign-therapist.jpg"}
                      alt="Foreign Therapist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                        Special Feature
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs font-semibold text-gray-700">
                        Foreign Therapist Available
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Foreign &amp; Certified Indian Therapists
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      Professional therapies conducted by certified <strong>Foreign / Expat therapists</strong> (European, Russian &amp; Oriental) and expert Indian therapists in our hotel suites at <strong>{outlet.price || "₹12,999"}</strong> per session.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                Outlet Amenities &amp; Standards
              </h3>
              <ul className="space-y-3">
                {outlet.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Therapies Offered Here */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1">
                SIGNATURE TREATMENTS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Popular Therapies at this Branch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {outlet.specialties.map((specialty, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-pink-100 bg-[#fdfafb] flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {specialty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions & Access */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1">
                EASY REACH
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                How to Reach
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                {outlet.directions}
              </p>
              <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-100 text-xs text-gray-700">
                <span className="font-semibold text-gray-900">Landmark: </span>
                {outlet.landmark}
              </div>
            </div>
          </div>

          {/* Right Sidebar (1 Col) */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-4 text-[var(--color-primary)]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Verified 5-Star Outlet
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Reserve Your Suite
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-light">
                Same-day walk-in or advance booking available. VIP suites with private showers guaranteed.
              </p>

              <div className="py-2 mb-4 border-b border-pink-100 pb-4">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-0.5">
                  Hotel Suite Rate
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[var(--color-primary)]">
                    {outlet.price || "₹12,999"}
                  </span>
                  <span className="text-xs text-gray-500 font-normal">/ session</span>
                </div>
                <p className="text-[11px] text-gray-600 mt-1">
                  Foreign &amp; Indian therapist choice included
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs text-gray-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{outlet.address}</span>
                </div>
                <div className="text-xs text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span>{outlet.timing}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`tel:${outlet.phone}`}
                  className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Call Direct
                </a>
                <a
                  href={`https://wa.me/919718892869?text=Hi%2C%20I%20want%20to%20book%20a%20spa%20session%20at%20${encodeURIComponent(outlet.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp Reservation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Outlets Navigation */}
        <div className="max-w-6xl mx-auto mt-14 pt-10 border-t border-pink-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Other Luxury Outlets in Delhi NCR
            </h3>
            <Link
              href="/outlets"
              className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherOutlets.map((other, idx) => (
              <Link
                key={idx}
                href={`/outlets/${other.slug}`}
                className="group relative rounded-xl overflow-hidden border border-pink-100 aspect-[16/10] bg-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[10px] text-pink-200 block font-semibold uppercase">
                    {other.area}
                  </span>
                  <span className="text-sm font-bold block leading-tight">
                    {other.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
