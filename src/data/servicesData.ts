export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  badge?: string;
  desc: string;
  longDesc: string[];
  benefits: string[];
  whatToExpect: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "full-body-massage",
    title: "Full Body Massage",
    subtitle: "Everyday Full-Body Reset",
    duration: "60 / 90 Mins",
    price: "₹1,500",
    image: "/services/full-body-massage.jpg",
    desc: "A soothing head-to-toe therapy using gentle pressure to release muscular tension, improve circulation, and renew your energy levels.",
    longDesc: [
      "Our Signature Full Body Massage is crafted to relieve physical fatigue, soothe overworked joints, and melt away emotional stress. Using long, fluid strokes along the contours of your body, certified therapists stimulate lymphatic drainage and boost healthy blood circulation.",
      "Whether you are dealing with everyday exhaustion from office work or general bodily fatigue, this treatment restores calm and revitalizes your system."
    ],
    benefits: [
      "Releases deep muscular tension and stiffness",
      "Boosts lymphatic flow and eliminates lactic acid build-up",
      "Choice of certified Indian or skilled Foreign / International therapists",
      "Improves blood circulation and restores natural vitality",
      "Reduces cortisol stress levels while promoting restful sleep"
    ],
    whatToExpect: [
      "A brief consultation with our specialist to address your specific pressure preferences.",
      "Choice of qualified Indian or experienced Foreign therapist according to your preference.",
      "Custom application of warm, hypoallergenic aromatherapy essential oils.",
      "A systematic head-to-toe session targeting shoulders, back, limbs, and feet.",
      "Complimentary herbal tea and private shower amenities post-therapy."
    ],
    faqs: [
      {
        question: "What is included in a Full Body Massage?",
        answer: "A full body massage covers the back, shoulders, neck, arms, legs, hands, and feet using specialized gliding strokes and warm herbal oils."
      },
      {
        question: "Are Foreign therapists available for this service?",
        answer: "Yes, we provide certified Indian as well as skilled Foreign / International therapists across our Delhi NCR outlets. You can request your preferred therapist while booking."
      },
      {
        question: "Can I choose my preferred pressure level?",
        answer: "Yes, you can request light, medium, or firm pressure at the beginning and adjust it at any point during your session."
      },
      {
        question: "Do I need to make an appointment in advance?",
        answer: "We recommend booking in advance by calling or WhatsApping +91 97188 92869 to secure your preferred slot and therapist."
      },
      {
        question: "Are shower facilities available after the massage?",
        answer: "Yes, all our luxury suites include clean, sanitized shower and steam amenities with fresh towels and toiletries."
      }
    ]
  },
  {
    slug: "complete-sessions",
    title: "Complete Sessions",
    subtitle: "Deep Sensory Relaxation",
    duration: "60 / 90 Mins",
    price: "₹2,499",
    image: "/services/complete-sessions.jpg",
    desc: "Our comprehensive multi-technique therapy integrating hot compress, organic aromatic oils, and customized pressure point healing.",
    longDesc: [
      "Complete Sessions are designed for those seeking an all-inclusive luxury spa package. This therapy blends Swedish effleurage, deep tissue trigger point release, and warm herbal compress therapy into one cohesive rejuvenating experience.",
      "Carefully chosen organic essential oils nourish the dermal barrier while soothing tired central nerves, leaving you in a state of tranquil peace."
    ],
    benefits: [
      "Multi-modality approach combining pressure relief with soothing aromatherapy",
      "Option to choose trained Foreign / Expat or Indian female therapists",
      "Relieves stubborn chronic tension around the neck, spine, and lower back",
      "Deeply hydrates and nourishes the skin with pure organic botanical extracts",
      "Clears mental fog and induces profound meditative calm"
    ],
    whatToExpect: [
      "A personalized consultation to select tailored organic aromatherapy blends.",
      "Therapist selection: request Indian or certified Foreign therapists prior to session.",
      "Steamed herbal compress therapy applied to key meridians and muscle groups.",
      "Continuous synchronized strokes targeting upper and lower body knots.",
      "Private relaxation lounge with herbal refreshments."
    ],
    faqs: [
      {
        question: "How does a Complete Session differ from a standard massage?",
        answer: "Complete Sessions integrate multiple therapeutic techniques including hot compress, acupressure points, and customized organic aromatherapy oils for a holistic reset."
      },
      {
        question: "Can I book a Foreign therapist for Complete Sessions?",
        answer: "Yes, Foreign therapists (including European, Russian, and Thai certified specialists) are available upon advance request at all our prime Delhi NCR outlets."
      },
      {
        question: "How long does a Complete Session last?",
        answer: "You can book either a 60-minute or an extended 90-minute session depending on your wellness requirements."
      },
      {
        question: "Are the oils skin-friendly and hypoallergenic?",
        answer: "Yes, we use 100% pure, natural, and dermatologically tested botanical oils that hydrate the skin safely."
      }
    ]
  },
  {
    slug: "b2b-massage",
    title: "B2B Massage",
    subtitle: "Deep, Immersive Body Work",
    duration: "60 / 90 Mins",
    price: "₹2,999",
    badge: "Popular",
    image: "/services/b2b-massage.jpg",
    desc: "Intensive body-to-body gliding strokes delivering the highest tier of relaxation and therapeutic stress relief.",
    longDesc: [
      "B2B Massage is our premier luxury therapy focused on total sensory surrender and intense tactile relaxation. Skilled therapists employ seamless, gliding body-to-body movements using warm aromatic oils.",
      "The uninterrupted gliding strokes provide consistent soothing pressure across large muscle surfaces, helping disconnect active mental chatter and creating unprecedented deep physical calm."
    ],
    benefits: [
      "Unmatched sensory decompression and psychological detachment from stress",
      "Available with premium Foreign therapists as well as expert Indian therapists",
      "Continuous, fluid gliding strokes that soothe large muscle groups effortlessly",
      "Enhances peripheral blood circulation and cellular rejuvenation",
      "Complete privacy in our VIP soundproof suites"
    ],
    whatToExpect: [
      "Private suite entry with 100% confidentiality and discretion.",
      "Therapist selection: Indian or elite Foreign therapist as per your booking preference.",
      "Warm aromatic oil bath preparation with ambient calming lighting.",
      "Fluid, rhythmic bodywork conducted by licensed, certified therapists.",
      "Private ensuite bathroom and refreshment service."
    ],
    faqs: [
      {
        question: "Is B2B massage conducted in private suites?",
        answer: "Yes, all our B2B sessions take place in dedicated, soundproof VIP private suites ensuring total privacy and confidentiality."
      },
      {
        question: "Are Foreign therapists available for B2B massage?",
        answer: "Yes, elite Foreign therapists are available for B2B Massage. You can easily specify your preference for a foreign therapist over phone or WhatsApp."
      },
      {
        question: "What oils are used during the B2B session?",
        answer: "We use warm, non-sticky organic essential oils enriched with botanical extracts that leave your skin deeply hydrated."
      },
      {
        question: "How can I book a B2B massage session in Delhi NCR?",
        answer: "You can book directly via phone or WhatsApp at +91 97188 92869. Our concierge will allocate the nearest available branch."
      }
    ]
  },
  {
    slug: "sandwich-massage",
    title: "Sandwich Massage",
    subtitle: "Two Therapists, Four Hands",
    duration: "60 / 90 Mins",
    price: "₹3,999",
    badge: "Signature",
    image: "/services/sandwich-massage.jpg",
    desc: "Synchronised four-hand massage where two certified therapists work simultaneously to create deep restorative harmony.",
    longDesc: [
      "Experience our most exclusive treatment: the Sandwich (Four-Hand) Massage. Two certified therapists synchronize their movements, working simultaneously on both sides of your body in harmonious rhythm.",
      "Because your conscious mind cannot easily follow two sets of fluid movements at once, sensory analysis drops away rapidly. Your brain slips into restorative theta wave relaxation within minutes."
    ],
    benefits: [
      "Double the therapeutic relief in a single session",
      "Option to choose dual Foreign therapists, dual Indian, or combination pairs",
      "Neurological decompression as synchronized strokes override active mental focus",
      "Intense muscle relief across both left and right muscular chains simultaneously",
      "Fastest relief for chronic burnout and high cognitive stress"
    ],
    whatToExpect: [
      "Coordination by two senior therapists trained in synchronized touch.",
      "Therapist choice: request two Foreign therapists or combination therapist preference upon booking.",
      "Dual application of warm essential oils across symmetrical energy pathways.",
      "Seamless choreographed flow covering back, legs, arms, and head concurrently.",
      "Post-massage VIP lounge relaxation."
    ],
    faqs: [
      {
        question: "What exactly is a Sandwich / Four-Hand Massage?",
        answer: "It is a synchronized massage therapy performed by two therapists at the same time in mirrored harmony, doubling the relaxation impact."
      },
      {
        question: "Can I request Foreign therapists for a Sandwich 4-Hand Massage?",
        answer: "Yes, you can request two Foreign therapists or an Indian-Foreign combo for our signature four-hand massage session."
      },
      {
        question: "Why is it considered more effective for mental stress?",
        answer: "Because two therapists move in synchronization, the brain cannot track both motions at once, prompting fast cognitive surrender and meditative theta-wave relaxation."
      },
      {
        question: "Can I specify individual pressure preferences?",
        answer: "Yes, both therapists coordinate closely and will match their pressure to your exact preference throughout the treatment."
      }
    ]
  },
  {
    slug: "couple-massage",
    title: "Couple Massage",
    subtitle: "Side-by-Side Luxury Retreat",
    duration: "60 / 90 Mins",
    price: "₹6,000",
    image: "/services/couple-massage.jpg",
    desc: "Share serene wellness side-by-side in our private VIP couple suite, accented with floral aromatherapy and warm oil therapy.",
    longDesc: [
      "Create unforgettable shared memories of tranquil healing with our Luxury Couple Massage. You and your partner relax side-by-side on dual treatment tables within an opulent private suite.",
      "Each individual chooses their own preferred therapy modality, aroma, and pressure intensity. The suite is dressed with soft ambient lighting, calming music, and subtle floral fragrances."
    ],
    benefits: [
      "Shared tranquil bonding experience free from daily digital distractions",
      "Individualized treatments tailored to each partner's distinct pressure preferences",
      "Option to choose expert Indian or international Foreign therapists for each partner",
      "Private VIP suite with exclusive hydrotherapy and steam amenities",
      "Perfect celebration for anniversaries, birthdays, or weekend getaways"
    ],
    whatToExpect: [
      "Welcome herbal tea upon arrival in our private couples consultation suite.",
      "Therapist preference selection for each partner (Indian or Foreign therapist available).",
      "Selection of distinct organic massage oils and pressure preferences for each partner.",
      "Simultaneous side-by-side massage by two dedicated therapists.",
      "Private soak, shower, and relaxation time in the ensuite suite."
    ],
    faqs: [
      {
        question: "Do both partners have to get the same massage therapy?",
        answer: "Not at all. One partner can opt for deep tissue therapy while the other chooses Swedish relaxation or aromatherapy."
      },
      {
        question: "Can we request Foreign therapists for the Couple Massage?",
        answer: "Yes, both partners can choose their preferred therapists—including certified Foreign and Indian therapists—to accompany their session."
      },
      {
        question: "Is the couple suite completely private?",
        answer: "Yes, our couples suites are 100% private and equipped with dual massage beds, private shower, and ambient relaxing decor."
      },
      {
        question: "How far in advance should we reserve a couple suite?",
        answer: "We recommend reserving at least 3-4 hours ahead, especially on weekends, by calling +91 97188 92869."
      }
    ]
  },
  {
    slug: "thai-massage",
    title: "Authentic Thai Massage",
    subtitle: "Traditional Body Realignment",
    duration: "60 / 90 Mins",
    price: "₹2,500",
    image: "/services/thai-massage.jpg",
    desc: "Ancient passive stretching and deep acupressure techniques conducted on traditional mats without oil for flexibility and posture.",
    longDesc: [
      "Rooted in centuries-old Eastern healing traditions, our Authentic Thai Massage combines assisted yoga stretches, rhythmic compression, and targeted energy meridian (Sen lines) stimulation.",
      "Conducted on comfortable floor mats without oil, loose comfortable clothing is worn throughout the session. It opens up tight joints, realigns skeletal posture, and restores dynamic flexibility."
    ],
    benefits: [
      "Dramatically improves joint mobility and muscular flexibility",
      "Conducted by authentic Native Thai & Foreign certified therapists",
      "Assists in natural spinal alignment and corrects sedentary posture",
      "Stimulates internal energy channels and relieves stiffness",
      "Invigorating and energizing without leaving any oily residue"
    ],
    whatToExpect: [
      "Comfortable traditional massage attire provided on arrival.",
      "Authentic treatment conducted by certified Thai / Foreign practitioners.",
      "Session conducted on an authentic plush Thai floor futon.",
      "Passive stretching movements combined with gentle palm and thumb acupressure.",
      "A feeling of lightness, flexibility, and recharged energy afterwards."
    ],
    faqs: [
      {
        question: "Do I need to take off my clothes for Thai Massage?",
        answer: "No, authentic Thai massage is performed fully clothed in loose, comfortable cotton garments that we provide upon arrival."
      },
      {
        question: "Are Foreign / Native Thai therapists available for this session?",
        answer: "Yes, our Authentic Thai Massage is administered by authentic Thai and Foreign certified practitioners specialized in ancient Bangkok & Chiang Mai techniques."
      },
      {
        question: "Are oils used in Thai Massage?",
        answer: "Traditional Thai massage is completely oil-free, utilizing acupressure and assisted stretching techniques instead."
      },
      {
        question: "Is Thai massage painful or too intense?",
        answer: "Our therapists customize the stretching intensity to match your natural flexibility range, ensuring it remains deeply restorative and safe."
      }
    ]
  }
];
