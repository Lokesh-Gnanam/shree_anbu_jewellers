export const SHOP_CONFIG = {
  name: "Sree Anbu Jewellers & Finance Shop",
  shortName: "Sree Anbu",
  tagline: "Elegance That Lasts Forever",
  subTagline: "Discover timeless jewellery, trusted gold services and exceptional craftsmanship at Sree Anbu Jewellers & Finance Shop.",
  
  // Configurable contact details
  phone: process.env.NEXT_PUBLIC_SHOP_PHONE || "+91 90429 51609",
  phoneDisplay: process.env.NEXT_PUBLIC_SHOP_PHONE_DISPLAY || "+91 90429 51609",
  whatsapp: process.env.NEXT_PUBLIC_SHOP_WHATSAPP || "+91 80722 48712",
  whatsappLink: process.env.NEXT_PUBLIC_SHOP_WHATSAPP 
    ? `https://wa.me/${process.env.NEXT_PUBLIC_SHOP_WHATSAPP.replace(/[^0-9]/g, "")}`
    : "https://wa.me/918072248712",
  email: process.env.NEXT_PUBLIC_SHOP_EMAIL || "chat.shreeanbujewellers@gmail.com",
  
  // Address & Hours
  address: {
    line1: process.env.NEXT_PUBLIC_SHOP_ADDRESS_1 || "Bus stand, Pudupalayam, Main Road",
    city: process.env.NEXT_PUBLIC_SHOP_CITY || "Tamil Nadu",
    pincode: process.env.NEXT_PUBLIC_SHOP_PINCODE || "606705",
    country: "India",
  },
  
  businessHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:00 PM",
    sunday: "Sunday: 9:00 AM – 1:00 PM",
    note: "Open on all festive days & auspicious muhurtham occasions",
  },

  // Map Embed (Placeholder or configured Google Maps embed)
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.922475432087!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",

  // Brand Pillars
  hallmarkTag: "100% BIS Hallmarked 916 Gold",
  establishedYear: "Trusted by Generations",
};

export const JEWELLERY_CATEGORIES = [
  {
    id: "gold-necklaces",
    title: "Gold Necklaces",
    subtitle: "Chokers, Haarams & Statement Pieces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Exquisite artisanal necklaces crafted with heritage motifs and modern grandeur.",
    badge: "Bestseller",
  },
  {
    id: "gold-chains",
    title: "Gold Chains",
    subtitle: "Daily Wear & Premium Rope Chains",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
    description: "Solid, durable and masterfully linked 22K gold chains suited for all occasions.",
    badge: "Classic",
  },
  {
    id: "bangles",
    title: "Bangles",
    subtitle: "Kadas, Valayal & Antique Bangles",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    description: "Traditional valayal craftsmanship paired with contemporary elegance.",
    badge: "Trending",
  },
  {
    id: "rings",
    title: "Rings",
    subtitle: "Solitaire, Cocktail & Signet Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Finely engraved pure gold and gemstone-studded statement rings.",
    badge: "Precious",
  },
  {
    id: "earrings",
    title: "Earrings",
    subtitle: "Jhumkas, Studs, Drops & Chandbalis",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "From intricate festive jhumkas to lightweight daily wear gold studs.",
    badge: "Handcrafted",
  },
  {
    id: "bridal-jewellery",
    title: "Bridal Jewellery",
    subtitle: "Complete Muhurtham Wedding Sets",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=800&q=80",
    description: "Regal bridal sets embodying South Indian heritage, temple art and matrimonial glory.",
    badge: "Bridal Heritage",
  },
  {
    id: "coins",
    title: "Coins & Bullion",
    subtitle: "24K 999 Pure Lakshmi & Ganesh Coins",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    description: "Tamper-proof assayed 24K pure gold coins, ideal for auspicious gifts and pure investment.",
    badge: "24K Assayed",
  },
  {
    id: "traditional-jewellery",
    title: "Traditional Jewellery",
    subtitle: "Antique, Temple & Kasu Malai",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Centuries-old nakshi and temple goldsmith techniques passed down through generations.",
    badge: "Heritage",
  },
];

export const TRUST_PILLARS = [
  {
    title: "Trusted Gold Services",
    description: "Over decades of community trust, providing transparent gold evaluations and ethical transactions.",
    icon: "ShieldCheck",
  },
  {
    title: "Transparent Pricing",
    description: "Every gram accounted for with clear breakdown of purity, current market rates, and no hidden surprises.",
    icon: "Scale",
  },
  {
    title: "100% BIS 916 Hallmark",
    description: "Every jewellery piece is certified with government-approved HUID laser hallmark stamps.",
    icon: "Award",
  },
  {
    title: "Customer-Focused Service",
    description: "Personalized assistance, custom design consultations, and warm welcoming hospitality.",
    icon: "HeartHandshake",
  },
  {
    title: "Reliable Gold Loan Assistance",
    description: "Confidential, respectful financial support against your gold with immediate evaluation at our shop.",
    icon: "Coins",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "S. Meenakshi Sundaram",
    location: "Loyal Customer for 12 Years",
    comment: "Sree Anbu Jewellers has been our family's trusted destination for every wedding and festival. Their honesty in gold testing and warmth in customer service is unmatched.",
    rating: 5,
    tag: "Verified Patron",
  },
  {
    id: 2,
    name: "Radhika Krishnan",
    location: "Bridal Customer",
    comment: "I purchased my complete wedding Kasu Malai and bridal jhumkas here. The finish, antique polish, and clarity in billing gave my entire family complete peace of mind.",
    rating: 5,
    tag: "Bridal Trousseau",
  },
  {
    id: 3,
    name: "V. Anand Kumar",
    location: "Gold Loan & Investment",
    comment: "The finance and gold valuation service is prompt, respectful, and crystal clear. You know your precious ornaments are handled with absolute security and care.",
    rating: 5,
    tag: "Valued Customer",
  },
];

export const FAQS = [
  {
    question: "How are the gold rates calculated at Sree Anbu Jewellers?",
    answer: "Our rates strictly align with prevailing bullion market standards. We clearly display indicative rates for 24K pure gold, 22K (916 jewellery gold), and 18K gold. For actual jewellery purchases, value is based on certified weight, purity, applicable making charges, and 3% statutory GST.",
  },
  {
    question: "Are all gold ornaments hallmarked?",
    answer: "Yes, 100% of our gold jewellery is certified under BIS (Bureau of Indian Standards) Hallmarking with unique HUID laser verification stamps, ensuring complete authenticity and resale security.",
  },
  {
    question: "What is the procedure for obtaining a Gold Loan?",
    answer: "Bring your gold ornaments along with valid government ID proof to our shop. Our certified appraisers will test the gold purity in front of you. Once evaluated, loan details are explained transparently and processing is completed swiftly.",
  },
  {
    question: "Do you undertake custom jewellery design orders?",
    answer: "Yes. Our master artisans can handcraft traditional temple designs, antique ornaments, or modern lightweight designs tailored to your required weight specifications and design preferences.",
  },
  {
    question: "Can I check live rates before visiting the showroom?",
    answer: "Yes, our website displays live indicative market rates updated in real-time. You can also reach our showroom directly via WhatsApp or phone call for instant confirmation.",
  },
];

