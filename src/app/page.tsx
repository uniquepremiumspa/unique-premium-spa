import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Waves, 
  Hand, 
  Users, 
  Heart, 
  Flower2, 
  ArrowRight,
  Calendar,
  Clock,
  BookOpen
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";

const homeFaqs = [
  {
    question: "What types of massage services are offered at Unique Premium Spa?",
    answer: "We offer Full Body Massage, Complete Sessions with aromatherapy, specialized B2B Massage, synchronous Four-Hand Sandwich Massage, Luxury Couple Suites, and traditional Authentic Thai Massage across all 7 Delhi NCR locations."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book easily by calling our 24/7 centralized helpline at +91 97188 92869 or messaging us on WhatsApp / Telegram. We allocate your preferred therapist and slot instantly."
  },
  {
    question: "Are private showers and amenities available?",
    answer: "Yes, every VIP treatment suite is sanitized, fully air-conditioned, and equipped with a private ensuite shower, steam amenities, fresh towels, disposable spa attire, and complimentary herbal tea."
  },
  {
    question: "Which locations in Delhi NCR can I visit?",
    answer: "Our branches are located in Aerocity, Connaught Place (CP), New Friends Colony (NFC), Gurgaon (DLF Phase / Golf Course Rd), Vasant Kunj, and nearby premier hubs."
  },
  {
    question: "What are your operating hours?",
    answer: "Our outlets operate 7 days a week from 10:00 AM to 10:30 PM. We recommend calling ahead to reserve peak evening and weekend slots."
  }
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Clean Centered Hero with Parallax Video */}
      <HeroSection />

      {/* Exact Magenta / Pink Stats Strip from Screenshot */}
      <section className="bg-[var(--color-primary)] text-white py-5 px-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base tracking-wide">Certified &amp; Foreign Therapists</h4>
              <p className="text-[11px] sm:text-xs text-white/80 font-light">Trained Indian &amp; Foreign specialists</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base tracking-wide">Premium Oils & Products</h4>
              <p className="text-[11px] sm:text-xs text-white/80 font-light">Pure, skin-friendly aromatherapy</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base tracking-wide">Hygiene & Comfort</h4>
              <p className="text-[11px] sm:text-xs text-white/80 font-light">Sanitised rooms, fresh linen</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Signature Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 bg-[#fdf8fa]">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1.5">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight">
              Our Signature Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mt-2 font-normal leading-relaxed">
              Six carefully curated treatments — from an everyday full-body massage to our signature two-therapist sandwich massage.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {/* 1. Full Body Massage */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/full-body-massage" className="absolute inset-0 z-10" aria-label="Full Body Massage" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/full-body-massage.jpg"
                  alt="Full Body Massage"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  Everyday Reset
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  Full Body Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>

            {/* 2. Complete Sessions */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/complete-sessions" className="absolute inset-0 z-10" aria-label="Complete Sessions" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/complete-sessions.jpg"
                  alt="Complete Sessions"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  Sensory Healing
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  Complete Sessions
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>

            {/* 3. B2B Massage */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/b2b-massage" className="absolute inset-0 z-10" aria-label="B2B Massage" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/b2b-massage.jpg"
                  alt="B2B Massage"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2.5 py-0.5 bg-[var(--color-primary)] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                  Popular
                </span>
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  Sensory Gliding
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  B2B Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>

            {/* 4. Sandwich Massage */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/sandwich-massage" className="absolute inset-0 z-10" aria-label="Sandwich Massage" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/sandwich-massage.jpg"
                  alt="Sandwich Massage"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2.5 py-0.5 bg-[var(--color-primary)] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                  Signature
                </span>
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  Four-Hand
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  Sandwich Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>

            {/* 5. Couple Massage */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/couple-massage" className="absolute inset-0 z-10" aria-label="Couple Massage" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/couple-massage.jpg"
                  alt="Couple Massage"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  VIP Suite
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  Couple Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>

            {/* 6. Thai Massage */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer">
              <Link href="/services/thai-massage" className="absolute inset-0 z-10" aria-label="Thai Massage" />
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                <Image
                  src="/services/thai-massage.jpg"
                  alt="Thai Massage"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border border-white/20">
                  Authentic Zen
                </span>
              </div>
              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1 sm:line-clamp-none">
                  Thai Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              View full pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-16 px-4 bg-white relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Media Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[540px]">
                {/* Decorative background glow badge */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-200/50 to-rose-100/50 rounded-2xl blur-lg -z-10" />
                
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-pink-100 bg-[#faeef4]">
                  <Image
                    src="/spa-oil-generated.png"
                    alt="Spa essential oil treatment"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white backdrop-blur-md bg-black/40 p-2.5 sm:p-3 rounded-lg border border-white/20">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold block leading-tight">100% Herbal Aromatherapy</span>
                        <span className="text-[9px] sm:text-[10px] text-white/80 font-normal">Pure cold-pressed therapeutic oils</span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-pink-200">Delhi NCR</span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-pink-100 shadow-lg items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-base shrink-0">
                    5★
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block leading-tight">Top Rated Spa Chain</span>
                    <span className="text-[10px] text-gray-500 font-normal">10,000+ Happy Guests</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 text-left">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[var(--color-primary)] block mb-1.5">
                ABOUT UNIQUE PREMIUM SPA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-primary)] leading-[1.2] mb-3 sm:mb-4">
                A Little Calm, Wherever You Are in Delhi NCR
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6 font-normal">
                Unique Premium Spa brings certified, hygienic and deeply rejuvenating massage therapies to 7 prime destinations across Delhi NCR — Aerocity, Connaught Place, Gurgaon, New Friends Colony and Vasant Kunj. Every private treatment suite features sanitized warm linen, steam showers, and experienced therapists committed to your peace of mind.
              </p>

              {/* 3 Key Feature Cards rounded-xl */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5 mb-5 sm:mb-7">
                <div className="bg-[#fdf3f8] border border-pink-100/70 rounded-xl p-2.5 sm:p-3.5 text-center transition-all hover:bg-white hover:shadow-md hover:border-pink-200">
                  <span className="text-xl sm:text-3xl font-extrabold text-[var(--color-primary)] block mb-0.5">7</span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-800 block leading-tight">Prime Outlets</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-normal hidden sm:block">Across Delhi &amp; Gurgaon</span>
                </div>
                <div className="bg-[#fdf3f8] border border-pink-100/70 rounded-xl p-2.5 sm:p-3.5 text-center transition-all hover:bg-white hover:shadow-md hover:border-pink-200">
                  <span className="text-xl sm:text-3xl font-extrabold text-[var(--color-primary)] block mb-0.5">25+</span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-800 block leading-tight">Expert Staff</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-normal hidden sm:block">Certified &amp; Verified</span>
                </div>
                <div className="bg-[#fdf3f8] border border-pink-100/70 rounded-xl p-2.5 sm:p-3.5 text-center transition-all hover:bg-white hover:shadow-md hover:border-pink-200">
                  <span className="text-xl sm:text-3xl font-extrabold text-[var(--color-primary)] block mb-0.5">100%</span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-800 block leading-tight">Hygiene</span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500 font-normal hidden sm:block">Private VIP Suites</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="/about"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm hover:scale-105"
                >
                  Know More About Us <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+919718892869"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-[11px] sm:text-xs tracking-wider uppercase hover:bg-pink-50 transition-all flex items-center gap-1.5 sm:gap-2"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 97188 92869
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Guest Favourites / Most Booked Sessions */}
      <section id="pricing" className="py-12 sm:py-16 px-4 bg-[#fdf2f7] relative">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1.5">
              GUEST FAVOURITES &amp; PRICING
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight">
              Most Booked Sessions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mt-2 font-normal leading-relaxed">
              Transparent, all-inclusive pricing with no hidden charges. Every session includes private suite amenities and fresh warm linen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
            {/* 1. Full Body Massage */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-pink-50 px-3 py-1 rounded-md">
                    Everyday Reset
                  </span>
                  <span className="text-xs text-gray-400 font-medium">60 MIN</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  Full Body Massage
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Gentle rhythmic head-to-toe strokes targeting stiff muscle knots and relieving daily work fatigue.
                </p>

                <div className="bg-[#fdf8fa] rounded-lg p-4 border border-pink-100/60 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">₹1,500</span>
                    <span className="text-xs text-gray-400 font-normal">/ all-inclusive</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-normal block mt-1">
                    Warm herbal oil + private ensuite shower
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-600 mb-6 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Indian &amp; Foreign therapist choice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Head, neck, back, limbs &amp; foot focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Complimentary herbal tea post-session</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-pink-100/80">
                <a
                  href="tel:+919718892869"
                  className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
                >
                  <Phone className="w-3.5 h-3.5" /> Book Session
                </a>
                <Link
                  href="/services/full-body-massage"
                  className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-gray-600 hover:text-[var(--color-primary)] hover:bg-pink-50 transition-colors block"
                >
                  View Details &amp; FAQs →
                </Link>
              </div>
            </div>

            {/* 2. B2B Massage (Featured / Popular) */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-lg shadow-pink-300/30 border-2 border-[var(--color-primary)] transition-all duration-300 flex flex-col justify-between group relative sm:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Most Popular Choice
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-pink-50 px-3 py-1 rounded-md">
                    Sensory Gliding
                  </span>
                  <span className="text-xs text-gray-400 font-medium">60 MIN</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  B2B Massage
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Sensory body-to-body therapy using warm aromatic organic oils for deep, immersive relaxation.
                </p>

                <div className="bg-[#fff0f6] rounded-lg p-4 border border-pink-200/80 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">₹2,999</span>
                    <span className="text-xs text-gray-400 font-normal">/ all-inclusive</span>
                  </div>
                  <span className="text-[11px] text-[var(--color-primary)] font-medium block mt-1">
                    VIP room + ensuite hot shower &amp; steam
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-600 mb-6 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Complete full-body therapeutic gliding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Indian or Foreign therapist available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Premium hypoallergenic massage oil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Private sanitized suite &amp; total discretion</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-pink-100/80">
                <a
                  href="tel:+919718892869"
                  className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-md shadow-pink-500/25 hover:scale-[1.02]"
                >
                  <Phone className="w-3.5 h-3.5" /> Book Session
                </a>
                <Link
                  href="/services/b2b-massage"
                  className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-gray-600 hover:text-[var(--color-primary)] hover:bg-pink-50 transition-colors block"
                >
                  View Details &amp; FAQs →
                </Link>
              </div>
            </div>

            {/* 3. Sandwich Massage */}
            <div className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-pink-100 hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-pink-50 px-3 py-1 rounded-md">
                    Four-Hand Signature
                  </span>
                  <span className="text-xs text-gray-400 font-medium">60 MIN</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  Sandwich Massage
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                  Two therapists synchronized in choreographed rhythm for an incomparable, multi-sensory bliss.
                </p>

                <div className="bg-[#fdf8fa] rounded-lg p-4 border border-pink-100/60 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)]">₹3,999</span>
                    <span className="text-xs text-gray-400 font-normal">/ all-inclusive</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-normal block mt-1">
                    2 therapists simultaneous + VIP room
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-600 mb-6 font-normal">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Choreographed dual-therapist pressure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Double the tension relief &amp; endorphin release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <span>Private shower, steam &amp; wellness drinks</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-pink-100/80">
                <a
                  href="tel:+919718892869"
                  className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
                >
                  <Phone className="w-3.5 h-3.5" /> Book Session
                </a>
                <Link
                  href="/services/sandwich-massage"
                  className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-gray-600 hover:text-[var(--color-primary)] hover:bg-pink-50 transition-colors block"
                >
                  View Details &amp; FAQs →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              See all packages <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Find Us Near You / Outlets Section */}
      <section id="outlets" className="py-12 sm:py-16 px-4 bg-white">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1.5">
            FIND US NEAR YOU
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight mb-3 sm:mb-4">
            10 Outlets Across Delhi NCR
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto mb-7 sm:mb-10 font-normal leading-relaxed">
            Conveniently located luxury spa centres across Delhi &amp; Gurgaon with VIP treatment suites and private showers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 text-left">
            {[
              {
                name: "The Ashok Hotel",
                area: "Chanakyapuri, New Delhi",
                tag: "Diplomatic Enclave",
                img: "/outlets/the-ashok-chanakyapuri.jpg",
              },
              {
                name: "Roseate House",
                area: "Aerocity, New Delhi",
                tag: "Ultra Luxury",
                img: "/outlets/roseate-house-aerocity.jpg",
              },
              {
                name: "Andaz Delhi (Hyatt)",
                area: "Aerocity, New Delhi",
                tag: "Hyatt Concept",
                img: "/outlets/andaz-hotel-aerocity.jpg",
              },
              {
                name: "Pullman & Novotel",
                area: "Aerocity, New Delhi",
                tag: "5-Star Luxury",
                img: "/outlets/pullman-aerocity.jpg",
              },
              {
                name: "Lemon Tree Premier",
                area: "Aerocity, New Delhi",
                tag: "Transit & Express",
                img: "/outlets/lemon-tree-aerocity.jpg",
              },
              {
                name: "ibis Hotel",
                area: "Aerocity, New Delhi",
                tag: "Hospitality Hub",
                img: "/outlets/ibis-aerocity.jpg",
              },
              {
                name: "The Royal Plaza",
                area: "Connaught Place (CP)",
                tag: "Central Delhi",
                img: "/outlets/the-royal-plaza.jpg",
              },
              {
                name: "The Suryaa",
                area: "New Friends Colony",
                tag: "South Delhi",
                img: "/outlets/the-suryaa-nfc.jpg",
              },
              {
                name: "Jaypee Vasant",
                area: "Vasant Kunj / Vihar",
                tag: "South Delhi Elite",
                img: "/outlets/jaypee-vasant-continental.jpg",
              },
              {
                name: "Radisson Hotel",
                area: "Udyog Vihar, Gurugram",
                tag: "Cyber City Vicinity",
                img: "/outlets/radisson-gurugram.jpg",
              },
            ].map((hotel, idx) => (
              <Link
                key={idx}
                href="/outlets"
                className="group relative rounded-xl overflow-hidden border border-pink-100 bg-[#fdfafb] hover:shadow-lg transition-all"
              >
                <div className="relative h-28 w-full overflow-hidden">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-2 left-2 text-[9px] font-bold bg-white/95 text-[var(--color-primary)] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {hotel.tag}
                  </span>
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[12px] sm:text-sm font-bold block leading-tight drop-shadow-sm">
                      {hotel.name}
                    </span>
                    <span className="text-[10px] text-pink-200 block truncate">
                      {hotel.area}
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            <Link
              href="/outlets"
              className="group p-4 rounded-xl border border-dashed border-pink-300 bg-pink-50/50 hover:bg-pink-100/60 transition-all flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <MapPin className="w-6 h-6 text-[var(--color-primary)] mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-[var(--color-primary)]">
                View All Outlets
              </span>
              <span className="text-[10px] text-gray-500">Addresses &amp; Timings →</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 p-1.5 px-4 rounded-full bg-pink-50 border border-pink-200 text-xs text-gray-700">
            <span>Call for nearest branch:</span>
            <a href="tel:+919718892869" className="text-[var(--color-primary)] font-bold hover:underline">
              +91 97188 92869
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Comprehensive SEO Content Section for Google Ranking - Full Width Luxury Editorial */}
      <section className="py-12 sm:py-16 px-4 bg-white border-t border-pink-100">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] font-semibold block mb-1.5">
              PREMIER WELLNESS &amp; SPA THERAPIES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight leading-tight mb-3">
              The Leading Luxury Spa &amp; Massage Destination in Delhi NCR
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              In the heart of India&apos;s most bustling metropolitan region, <strong className="text-gray-900 font-semibold">Unique Premium Spa</strong> stands as a serene sanctuary designed for comprehensive physical renewal and cognitive decompression across 7 prime locations.
            </p>
          </div>

          {/* 4 Cards Grid with Related Images - Mobile 2 Cols, Desktop 4 Cols */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* 1. Swedish & Full Body */}
            <div className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                  <Image
                    src="/services/full-body-massage.jpg"
                    alt="Swedish & Full Body Massage"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-md border border-white/20">
                    Effleurage
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                  Swedish Massage
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book
                </a>
              </div>
            </div>

            {/* 2. Deep Tissue & B2B */}
            <div className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                  <Image
                    src="/services/b2b-massage.jpg"
                    alt="Deep Tissue & B2B Therapy"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-md border border-white/20">
                    Myofascial
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                  B2B Therapy
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book
                </a>
              </div>
            </div>

            {/* 3. Sandwich Four-Hand */}
            <div className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                  <Image
                    src="/services/sandwich-massage.jpg"
                    alt="Sandwich Four-Hand Therapy"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-md border border-white/20">
                    Four-Hand
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                  Sandwich Flow
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book
                </a>
              </div>
            </div>

            {/* 4. VIP Couples Suite */}
            <div className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-pink-50">
                  <Image
                    src="/services/couple-massage.jpg"
                    alt="VIP Couples Suite Sessions"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-md border border-white/20">
                    VIP Suite
                  </span>
                </div>
              </div>

              <div className="p-2.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-white">
                <h3 className="text-xs sm:text-base font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                  Couples Suite
                </h3>
                <a
                  href="tel:+919718892869"
                  className="w-full sm:w-auto shrink-0 relative z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[var(--color-primary)] text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[var(--color-primary-hover)] transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105"
                >
                  <Phone className="w-3 h-3" /> Book
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Frequently Asked Questions Section on Homepage */}
      <section className="py-12 sm:py-16 px-4 bg-[#fdf8fa] border-t border-pink-100">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            items={homeFaqs}
            title="Frequently Asked Questions"
            subtitle="EVERYTHING YOU NEED TO KNOW"
          />
        </ScrollReveal>
      </section>

      {/* Latest 3 Blog Articles Section */}
      <section className="py-12 sm:py-16 px-4 bg-white border-t border-pink-100">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[var(--color-primary)] font-semibold block mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> WELLNESS &amp; SPA INSIGHTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">
                Latest from Our Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-pink-100 hover:border-[var(--color-primary)]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-pink-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] group-hover:underline">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
