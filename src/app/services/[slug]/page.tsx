import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Clock, 
  Phone, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Heart,
  Award,
  Check
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { servicesData } from "@/data/servicesData";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found — Unique Premium Spa",
    };
  }

  return {
    title: `${service.title} in Delhi NCR — Unique Premium Spa`,
    description: service.desc,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} in Delhi NCR — Unique Premium Spa`,
      description: service.desc,
      url: `/services/${slug}`,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="bg-[var(--color-background)] min-h-screen text-[var(--color-foreground)]">
      
      {/* Cinematic Hero Section - Styled exactly like Home Page Hero */}
      <section className="relative overflow-hidden min-h-[52vh] sm:min-h-[62vh] flex items-center justify-center text-center">
        {/* Background Image with Dark & Rose Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/50 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center">
          {/* Back Navigation Pill */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 transition-all mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </Link>

          {/* Subtitle & Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-pink-200 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              {service.subtitle}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-pink-100 bg-[var(--color-primary)]/80 backdrop-blur-md px-3 py-1 rounded-full border border-pink-300/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-yellow-300" /> Foreign &amp; Indian Therapist Available
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-pink-300" /> {service.duration}
            </span>
            {service.badge && (
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[var(--color-primary)] px-3 py-1 rounded-full shadow-sm">
                {service.badge}
              </span>
            )}
          </div>

          {/* Majestic Hero Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-4 max-w-3xl drop-shadow-xl">
            {service.title}
          </h1>

          <p className="text-xs sm:text-base text-white/90 max-w-2xl mx-auto mb-7 font-normal leading-relaxed drop-shadow">
            {service.desc}
          </p>

          {/* Quick Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            <a
              href="tel:+919718892869"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-xl shadow-pink-900/35 hover:scale-105"
            >
              <Phone className="w-4 h-4" /> Book at {service.price}
            </a>
            <a
              href="https://wa.me/919718892869"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-white/80 text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all backdrop-blur-xs flex items-center justify-center gap-2 hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Signature Magenta / Pink Stats Ribbon - Exact Home Page Style */}
      <section className="bg-[var(--color-primary)] text-white py-4 px-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm tracking-wide">Certified &amp; Foreign Therapists</h4>
              <p className="text-[10px] sm:text-[11px] text-white/80 font-light">Trained Indian &amp; Foreign specialists</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm tracking-wide">100% Herbal Aromatherapy</h4>
              <p className="text-[10px] sm:text-[11px] text-white/80 font-light">Pure skin-nourishing essential oils</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm tracking-wide">Private VIP Suites</h4>
              <p className="text-[10px] sm:text-[11px] text-white/80 font-light">Sanitised rooms &amp; ensuite shower</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout: Detailed Information + Sticky Booking Summary */}
      <section className="py-12 sm:py-16 px-4">
        <ScrollReveal className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 8 Columns: About, Health Benefits & What to Expect */}
            <div className="lg:col-span-8 space-y-8">
              {/* About This Treatment */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-pink-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-pink-100">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-[var(--color-primary)] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    About This Treatment
                  </h2>
                </div>
                {service.longDesc.map((p, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {p}
                  </p>
                ))}
              </div>

              {/* Foreign & Indian Certified Therapists Highlight Box */}
              <div className="bg-gradient-to-r from-pink-50 to-[#fff0f6] rounded-xl p-6 border border-pink-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white px-2 py-0.5 rounded-sm">
                      Special Privilege
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">
                      Foreign &amp; Indian Therapist Choice
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    This therapy is available with certified Indian specialists as well as high-profile <strong>Foreign / International therapists</strong> (European, Russian &amp; Oriental). Let our concierge know your therapist preference while reserving your private suite.
                  </p>
                </div>
              </div>

              {/* Proven Health Benefits */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-pink-100 shadow-sm">
                <div className="flex items-center gap-2.5 pb-2 mb-4 border-b border-pink-100">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-[var(--color-primary)] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Proven Health Benefits
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#fdf8fa] border border-pink-100/60">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-light leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect During Your Session */}
              <div className="bg-[#fdf2f7] rounded-xl p-6 sm:p-8 border border-pink-100">
                <div className="mb-6">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1">
                    THE SPA EXPERIENCE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                    What to Expect During Your Session
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.whatToExpect.map((step, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-pink-100/80 shadow-xs flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed font-light pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sticky Quick Booking Summary Card */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-xl p-6 border-2 border-[var(--color-primary)]/30 shadow-xl shadow-pink-100/60">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                  OFFICIAL ALL-INCLUSIVE RATE
                </span>
                <div className="flex items-baseline gap-2 mb-3 pb-3 border-b border-pink-100">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">
                    {service.price}
                  </span>
                  <span className="text-xs text-gray-500 font-normal">/ {service.duration}</span>
                </div>

                <div className="space-y-2.5 mb-6 text-xs text-gray-600 font-light">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Private sanitized VIP suite with shower</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Fresh sterilized towels &amp; disposable kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-medium text-pink-900">Foreign &amp; Indian therapist option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-pink-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Warm herbal detox tea post-session</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="tel:+919718892869"
                    className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
                  >
                    <Phone className="w-3.5 h-3.5" /> Book Session Instantly
                  </a>
                  <a
                    href="https://wa.me/919718892869"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-xs uppercase tracking-wider hover:bg-pink-50 transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Concierge
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-pink-100/70 text-center">
                  <p className="text-[11px] text-gray-500">
                    Open 7 Days: <strong>10:00 AM – 10:30 PM</strong>
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Available across Aerocity, CP, Gurgaon, NFC &amp; Vasant Kunj
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Explore Other Signature Services - Home Page 2-Col Mobile / 4-Col Desktop Grid */}
      <section className="py-12 sm:py-16 px-4 bg-white border-t border-pink-100">
        <ScrollReveal className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1.5">
              EXPLORE MORE THERAPIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">
              Other Recommended Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mt-2 font-normal leading-relaxed">
              Discover other tailored therapies across our 7 Delhi NCR locations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
            {otherServices.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
              >
                <Link
                  href={`/services/${item.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={item.title}
                />
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                    {item.subtitle}
                  </span>
                </div>
                <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                  <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h3>
                  <a
                    href="tel:+919718892869"
                    className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                  >
                    <Phone className="w-3 h-3" /> Book
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              View all 6 spa treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-12 sm:py-16 px-4 bg-[#fdf8fa] border-t border-pink-100">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            items={service.faqs}
            title={`${service.title} FAQs`}
            subtitle="EVERYTHING YOU NEED TO KNOW"
          />
        </ScrollReveal>
      </section>

    </div>
  );
}
