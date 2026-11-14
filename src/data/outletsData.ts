export interface OutletData {
  slug: string;
  name: string;
  shortName: string;
  area: string;
  zone: string;
  address: string;
  landmark: string;
  timing: string;
  phone: string;
  image: string;
  tag: string;
  price?: string;
  foreignTherapistAvailable?: boolean;
  therapistImage?: string;
  description: string;
  features: string[];
  specialties: string[];
  directions: string;
}

export const outletsData: OutletData[] = [
  {
    slug: "pullman-hotel-aerocity",
    name: "Pullman Hotel (Aerocity)",
    shortName: "Pullman Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Near IGI Airport T3",
    address: "Asset No 2, Aerocity Hospitality District, IGI Airport, New Delhi 110037",
    landmark: "Worldmark Hospitality District & Delhi Aerocity Metro Station",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/pullman-aerocity.jpg",
    tag: "5-Star Ultra Luxury",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Our premier 5-star flagship outlet located at Pullman New Delhi Aerocity delivers world-class rejuvenation right in the heart of Delhi's luxury airport hospitality district. Featuring grand private therapy suites, state-of-the-art steam & shower facilities, and discreet VIP access.",
    features: [
      "Discreet VIP suite with attached jacuzzi and private rain shower",
      "Prime Aerocity location — 5 mins from IGI Airport Terminal 3",
      "Full valet parking and round-the-clock five-star concierge access",
      "Elite Foreign & Certified Indian therapists available (Expat Russian, European & Oriental specialists)",
      "Imported therapeutic aroma essential oils and herbal steam treatments",
    ],
    specialties: [
      "B2B Massage Therapy",
      "Sandwich Massage (Four-Hand)",
      "Deep Tissue Sports Massage",
      "Swedish Relaxation Therapy",
      "Jacuzzi Hydro-Soak Bath",
    ],
    directions:
      "Conveniently situated in Asset No. 2 of the Aerocity Hospitality District, directly accessible from Delhi-Gurgaon Expressway (NH-48) and just 300 meters from Delhi Aerocity Metro Station (Airport Express Line).",
  },
  {
    slug: "lemon-tree-premier",
    name: "Lemon Tree Premier",
    shortName: "Lemon Tree Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Airport Hospitality Hub",
    address: "Asset No 6, Aerocity Hospitality District, IGI Airport, New Delhi 110037",
    landmark: "Opposite Worldmark 2, Aerocity",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/lemon-tree-aerocity.jpg",
    tag: "Express & Transit Bliss",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Located at Lemon Tree Premier in Aerocity, this upscale spa outlet is designed for discerning travelers, business executives, and transit visitors needing instant jet lag recovery and soothing relaxation.",
    features: [
      "Instant walk-in and priority call reservations for transit travelers",
      "Sound-insulated peaceful therapy chambers with aroma diffusers",
      "Private hot showers, steam, and fresh sanitised organic linen",
      "Foreign expat therapists & certified Indian specialists available",
      "Zero hassle parking and smooth contactless hospitality check-in",
    ],
    specialties: [
      "Jet Lag Revitalizing Therapy",
      "Full Body Aromatherapy Massage",
      "Synchronized Four-Hand Massage",
      "Hot Oil Deep Tissue Relief",
      "Herbal Steam & Detox Wrap",
    ],
    directions:
      "Located at Asset No. 6, directly facing Worldmark 2 in the Aerocity Hospitality District. Easy walk from Aerocity Metro or a 4-minute cab ride from T3/T1 terminals.",
  },
  {
    slug: "ibis-hotel",
    name: "ibis Hotel",
    shortName: "ibis Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Central Aerocity",
    address: "Asset No 9, Hospitality District, Delhi Aerocity, New Delhi 110037",
    landmark: "Hospitality District, Near Aerocity Metro Station",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/ibis-aerocity.jpg",
    tag: "Popular Comfort Spa",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "A peaceful oasis in Aerocity at ibis Hotel, offering top-tier relaxation treatments at approachable pricing. Ideal for both routine wellness sessions and spontaneous stress-relief visits.",
    features: [
      "Modern, immaculate treatment rooms with soft mood lighting",
      "High hygiene standards with disposable kits and sanitized rooms",
      "Choice of International Foreign therapists & expert Indian therapists",
      "Complete privacy and zero disturbance guarantee",
      "Complimentary detox green tea and post-therapy refreshment",
    ],
    specialties: [
      "Swedish Relaxation Therapy",
      "Signature B2B Full Body Therapy",
      "Traditional Thai Dry Massage",
      "Back, Neck & Shoulder Tension Relief",
      "Sensory Essential Oil Healing",
    ],
    directions:
      "Situated in Asset No. 9, Aerocity, close to the Delhi Aerocity Metro Station and adjacent to the Aerocity corporate towers corridor.",
  },
  {
    slug: "the-royal-plaza",
    name: "The Royal Plaza",
    shortName: "The Royal Plaza CP",
    area: "Connaught Place (CP), Central Delhi",
    zone: "Ashoka Road / Central Business District",
    address: "19, Ashoka Road, Janpath, Connaught Place, New Delhi 110001",
    landmark: "Ashoka Road, Near Patel Chowk & Rajiv Chowk Metro",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/the-royal-plaza.jpg",
    tag: "4-Star Luxury Boutique",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Situated on prestigious Ashoka Road in the heart of Connaught Place, our luxury spa outlet at Hotel The Royal Plaza offers an indulgent royal oasis for travelers, business executives, and wellness seekers looking for soothing comfort in Central Delhi.",
    features: [
      "Ultra-luxurious royal spa chambers with peaceful ambient lighting",
      "Heart-of-Delhi prime location on Ashoka Road with secure valet parking",
      "Attached private rain shower, aromatic steam, and plush fresh linen",
      "Skilled Foreign therapists & certified Indian professionals",
      "Discreet VIP suites with 100% privacy and confidentiality guaranteed",
    ],
    specialties: [
      "Royal Four-Hand Signature Therapy",
      "Deep Muscular Release & Acupressure",
      "Executive Stress Detox Massage",
      "Warm Stone Holistic Healing",
      "B2B Sensual Relaxation",
    ],
    directions:
      "Located at 19, Ashoka Road near Janpath and Connaught Place, just 2 minutes from Patel Chowk Metro Station (Yellow Line) and 5 minutes from Rajiv Chowk interchange.",
  },
  {
    slug: "the-suryaa",
    name: "The Suryaa",
    shortName: "The Suryaa NFC",
    area: "New Friends Colony (NFC), South Delhi",
    zone: "South Delhi Elite",
    address: "New Friends Colony Community Centre, New Delhi 110025",
    landmark: "Community Centre, Near Mathura Road & Friends Club",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/the-suryaa-nfc.jpg",
    tag: "South Delhi Oasis",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Nestled inside the iconic 5-star The Suryaa New Delhi at New Friends Colony, this boutique luxury spa caters to South Delhi's refined residents, expats, and visiting guests seeking quiet, restorative indulgence.",
    features: [
      "Serene private suites overlooking hotel greens & swimming pool",
      "Private hydrotherapy bathtubs and eucalyptus steam rooms",
      "Foreign expat therapists & certified Indian senior practitioners",
      "Discreet and dignified environment with high guest confidentiality",
      "Ample dedicated hotel parking with valet assistance",
    ],
    specialties: [
      "Aromatherapy Muscle Soothe",
      "Sandwich Massage Dual-Therapist",
      "Deep Tissue Recovery",
      "Hydro-Soak Mineral Bath Therapy",
      "Full Body Polish & Oil Ritual",
    ],
    directions:
      "Located within the New Friends Colony Community Centre complex, easily reachable via Mathura Road, Ring Road, and Ashram Chowk flyovers.",
  },
  {
    slug: "jaypee-vasant-continental",
    name: "Jaypee Vasant Continental",
    shortName: "Jaypee Vasant",
    area: "Vasant Kunj / Vasant Vihar, South Delhi",
    zone: "South Delhi Diplomatic Hub",
    address: "Basant Lok, Vasant Vihar, Near Vasant Kunj, New Delhi 110057",
    landmark: "Basant Lok Community Centre, Near DLF Promenade & Ambience Mall",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/jaypee-vasant-continental.jpg",
    tag: "5-Star Heritage Luxury",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Located within the lush green enclave of Jaypee Vasant Continental near Vasant Kunj and Vasant Vihar, this luxury spa provides a calm sanctuary away from city chaos, surrounded by sprawling foliage and heritage hospitality.",
    features: [
      "Quiet garden-facing luxury therapy suites with ambient music",
      "Close to major South Delhi malls (DLF Promenade, Ambience, Emporio)",
      "Premium cold-pressed organic botanical oils and herbal blends",
      "Complete wellness amenities including steam, sauna, and shower",
      "International Foreign therapists & verified certified female therapists",
    ],
    specialties: [
      "Botanical Herbal Oil Massage",
      "Complete Couple Therapy Sessions",
      "Swedish Lymphatic Detoxification",
      "Deep Tissue Tension Melting",
      "Signature B2B Full Body Harmony",
    ],
    directions:
      "Conveniently positioned in Basant Lok, Vasant Vihar, minutes away from Nelson Mandela Marg, Vasant Kunj malls, and the diplomatic enclave.",
  },
  {
    slug: "radisson-hotel",
    name: "Radisson Hotel",
    shortName: "Radisson Gurugram",
    area: "Gurugram (Gurgaon), Haryana",
    zone: "Cyber City & NH-8 Corridor",
    address: "Adjacent to Plot 406, Udyog Vihar Phase III, Gurugram 122016",
    landmark: "Udyog Vihar Phase III, Near DLF Cyber City & Ambience Mall",
    timing: "10:00 AM – 11:00 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/radisson-gurugram.jpg",
    tag: "Cyber City Corporate Bliss",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Strategically situated adjacent to DLF Cyber City at Radisson Gurugram Udyog Vihar, this high-end spa outlet serves corporate titans, entrepreneurs, and busy professionals needing quick revitalization and prolonged deep relaxation.",
    features: [
      "Extended operating hours until 11:00 PM for late evening decompression",
      "Ultra-modern acoustic-insulated private suites with attached showers",
      "Foreign therapist choice & certified Indian wellness therapists",
      "Direct NH-8 access with secure underground parking & valet",
      "Private VIP reservations with total identity privacy guaranteed",
    ],
    specialties: [
      "Corporate Stress & Posture Release",
      "Signature Four-Hand Sandwich Therapy",
      "Warm Herbal Oil Deep Tissue",
      "Sensory Aromatherapy Body Treatment",
      "Steam, Rain Shower & Detox Ritual",
    ],
    directions:
      "Located directly off NH-48 in Udyog Vihar Phase III, adjacent to Cyber City, DLF Phase 2, and right behind Ambience Mall Gurgaon.",
  },
  {
    slug: "the-ashok-hotel-chanakyapuri",
    name: "The Ashok Hotel",
    shortName: "The Ashok Chanakyapuri",
    area: "Chanakyapuri, Central / South Delhi",
    zone: "Diplomatic Enclave",
    address: "50-B, Diplomatic Enclave, Chanakyapuri, New Delhi 110021",
    landmark: "Diplomatic Enclave, Near Embassy of the United States & Shanti Path",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/the-ashok-chanakyapuri.jpg",
    tag: "Grand Diplomatic Heritage",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Located inside the iconic 5-star The Ashok Hotel in Chanakyapuri's prestigious Diplomatic Enclave, this premier wellness outlet offers palatial tranquility, world-class privacy, and royal spa therapies designed for elite diplomats, dignitaries, and connoisseurs of luxury.",
    features: [
      "Palatial private therapy suites with luxury marble finishes & serene lighting",
      "Prime Diplomatic Enclave location with tight security and total VIP privacy",
      "Comprehensive hydro-facilities including steam rooms, sauna & rain showers",
      "Prestigious Foreign therapists & verified 5-star certified therapists",
      "Dedicated 5-star hotel valet parking and effortless arrival experience",
    ],
    specialties: [
      "Royal Ayurvedic & Herbal Therapies",
      "Signature B2B Full Body Therapy",
      "Synchronized Four-Hand Body Ritual",
      "Deep Tissue Muscular Rejuvenation",
      "Aromatherapy Herbal Steam Bath",
    ],
    directions:
      "Situated at 50-B Diplomatic Enclave, Chanakyapuri on Shanti Path, minutes away from Prime Minister's residence, Race Course, and Central Secretariat.",
  },
  {
    slug: "roseate-house-aerocity",
    name: "Roseate House",
    shortName: "Roseate House Aerocity",
    area: "Aerocity, New Delhi",
    zone: "IGI Airport Hospitality District",
    address: "Asset 10, Hospitality District, Delhi Aerocity, New Delhi 110037",
    landmark: "Worldmark Aerocity & Delhi Aerocity Metro Station",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/roseate-house-aerocity.jpg",
    tag: "Contemporary Ultra-Luxury",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Set in the ultra-chic and contemporary Roseate House New Delhi, our luxury Aerocity spa outlet delivers cutting-edge wellness treatments in an ambiance of understated opulence, curated especially for jet-setters and discerning lifestyle guests.",
    features: [
      "Architecturally stunning treatment rooms with calming acoustic design",
      "Steps away from Terminal 3 & Terminal 1 with swift VIP lounge access",
      "Exquisite private jacuzzi baths, eucalyptus steam, and rainfall showers",
      "International Foreign therapists & certified global wellness experts",
      "Valet parking with discreet hotel elevator access to spa floor",
    ],
    specialties: [
      "Jet-Lag Ultimate Recovery Therapy",
      "Aroma-Infused Full Body Massage",
      "Sandwich Four-Hand Dual Massage",
      "Swedish Holistic Muscular Relaxation",
      "Eucalyptus Steam & Jacuzzi Soak",
    ],
    directions:
      "Positioned at Asset 10 in the Delhi Aerocity Hospitality District, walking distance from Delhi Aerocity Metro Station and minutes from IGI Airport terminals.",
  },
  {
    slug: "andaz-hotel-aerocity",
    name: "Andaz Delhi (by Hyatt)",
    shortName: "Andaz Aerocity",
    area: "Aerocity, New Delhi",
    zone: "IGI Airport Hospitality District",
    address: "Asset No. 1, Aerocity Hospitality District, IGI Airport, New Delhi 110037",
    landmark: "Asset 1, Next to Worldmark 1, Aerocity",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/andaz-hotel-aerocity.jpg",
    tag: "Hyatt Concept Luxury",
    price: "₹12,999",
    foreignTherapistAvailable: true,
    therapistImage: "/therapists/foreign-therapist.jpg",
    description:
      "Experience bespoke mindful therapies at our luxury wellness outlet in Andaz Delhi, Aerocity. Blending artisanal craft with modern rejuvenation techniques, this sanctuary offers unmatched indulgence, utmost discretion, and customized full-body wellness.",
    features: [
      "Expansive private therapy chambers with custom mood lighting and ambient sound",
      "Prime Asset 1 location right at the entrance of Aerocity Hospitality District",
      "Organic apothecary massage oils and herbal concoctions",
      "Foreign expat therapists & certified master wellness therapists",
      "Complete discreet VIP entrance with multi-level private valet parking",
    ],
    specialties: [
      "Artisanal Essential Oil Massage",
      "Signature Four-Hand Synchronization",
      "Deep Pressure Sports & Spine Therapy",
      "Hot Stone Holistic Vitality Treatment",
      "B2B Sensual Relaxing Ritual",
    ],
    directions:
      "Situated at Asset No. 1, Aerocity, adjacent to Worldmark 1 and NH-48, offering swift 5-minute access from IGI Airport Terminal 3.",
  },
];
