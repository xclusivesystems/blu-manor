// ============================================================
// Blu Manor — Site Content Constants
// Single source of truth for all site content until Sanity CMS
// is wired in Phase 2.
// ============================================================

// ============================================================
// Type Interfaces
// ============================================================

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phoneResident: string;
  phonePartner: string;
  address: string;
  ga4Id: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HousingOption {
  id: string;
  type: string;
  price: string;
  pricePeriod: string;
  features: string[];
  availability: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  initials: string;
  verified?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

// ============================================================
// Site Config
// ============================================================

export const siteConfig: SiteConfig = {
  name: "Blu Manor",
  tagline: "Second Chance Transitional Housing",
  description:
    "Safe, structured, and affordable transitional housing for individuals reentering the community in Tampa Bay, FL. Felon-friendly, move-in ready, $750/month all-inclusive.",
  url: "https://blumanor.org",
  email: "info@blumanor.org",
  phoneResident: "727-563-6540",
  phonePartner: "727-710-6930",
  address: "Tampa Bay Area, FL", // Placeholder — exact addresses pending from client
  ga4Id: "G-H8JCFW9RRT",
};

// ============================================================
// Navigation Links
// ============================================================

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Housing", href: "/housing" },
  { label: "Program", href: "/program" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Apply", href: "/apply" },
];

// ============================================================
// Services (Program Features)
// ============================================================

export const services: Service[] = [
  {
    id: "felon-friendly",
    title: "Felon-Friendly Housing",
    description:
      "We believe in second chances. Our housing welcomes individuals with criminal backgrounds who are committed to positive change.",
    icon: "Home",
  },
  {
    id: "employment-focused",
    title: "Employment-Focused",
    description:
      "Residents are expected to maintain employment or verified income, fostering financial independence and stability.",
    icon: "Briefcase",
  },
  {
    id: "supervision-compliance",
    title: "Supervision Compliance",
    description:
      "We support residents in meeting their supervision requirements, working alongside probation and parole officers.",
    icon: "Shield",
  },
  {
    id: "move-in-ready",
    title: "Move-In Ready",
    description:
      "Furnished shared bedrooms with everything you need from day one — beds, dressers, TV, utilities, and Wi-Fi included.",
    icon: "CheckCircle",
  },
];

// ============================================================
// Housing Options
// ============================================================

export const housing: HousingOption[] = [
  {
    id: "shared-room",
    type: "Shared Room",
    price: "$750",
    pricePeriod: "/month",
    features: [
      "Two twin beds",
      "Two dressers",
      "Flat-screen TV",
      "Utilities & Wi-Fi included",
      "On-site laundry",
      "Employment-focused environment",
      "Supervision compliance support",
    ],
    availability: "Available",
  },
  {
    id: "private-room",
    type: "Private Room",
    price: "Call",
    pricePeriod: " for pricing",
    features: [
      "Private bedroom",
      "Personal dresser & storage",
      "Flat-screen TV",
      "Utilities & Wi-Fi included",
      "On-site laundry",
      "Employment-focused environment",
      "Supervision compliance support",
    ],
    availability: "Limited",
  },
];

// ============================================================
// Team Members
// Founder name/bio pending from client — placeholder used
// ============================================================

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "TBD",
    role: "Founder & Executive Director",
    bio: "Coming soon — we're working on updating our team page with full bios.",
    initials: "BM",
  },
  {
    id: "staff-1",
    name: "TBD",
    role: "Property Manager",
    bio: "Coming soon.",
    initials: "PM",
  },
];

// ============================================================
// Testimonials
// ============================================================

export const testimonials: Testimonial[] = [
  {
    id: "james-d",
    name: "James D.",
    quote:
      "Blu Manor gave me the stability I needed to get back on my feet. The structure and support helped me focus on my job and staying on track with my supervision.",
    role: "Former Resident",
    initials: "JD",
  },
  {
    id: "marcus-t",
    name: "Marcus T.",
    quote:
      "Having everything included made it so much easier. I didn't have to worry about bills — I just focused on working and rebuilding. This place changed my life.",
    role: "Former Resident",
    initials: "MT",
  },
  {
    id: "sarah-r",
    name: "Sarah R.",
    quote:
      "As a parole officer, I appreciate partnering with Blu Manor. Their structured environment and accountability standards make a real difference for my clients.",
    role: "Reentry Professional",
    initials: "SR",
    verified: true,
  },
];

// ============================================================
// FAQ
// ============================================================

export const faq: FaqItem[] = [
  {
    question: "Who is eligible to live at Blu Manor?",
    answer:
      "We welcome adults 18 and older who are committed to maintaining employment or verified income, following house rules, and working toward stability. We are felon-friendly and work with individuals on probation, parole, or pretrial supervision.",
  },
  {
    question: "What does the $750/month include?",
    answer:
      "Your monthly rate covers a fully furnished shared room (twin bed, dresser, flat-screen TV), all utilities, Wi-Fi, and access to on-site laundry. There are no hidden fees — everything is included in one simple payment.",
  },
  {
    question: "Is there a lease or minimum stay requirement?",
    answer:
      "Our housing operates on a month-to-month basis with rent due on your agreed-upon date. There is no long-term lease required, giving you flexibility as you transition to full independence.",
  },
  {
    question: "What happens if I violate house rules?",
    answer:
      "We follow a fair disciplinary process: verbal warning, written warning, probationary review, and removal from the program if necessary. Serious violations (illegal activity, drug use) may result in immediate discharge. Our goal is always to support your success.",
  },
  {
    question: "Can my probation or parole officer refer me?",
    answer:
      "Yes! We actively work with supervision officers and reentry professionals. They can submit a referral intake form on your behalf through our Partners page, or call us directly at 727-563-6540.",
  },
  {
    question: "How quickly can I move in?",
    answer:
      "Rooms are move-in ready. Once your application is approved and all documentation is completed, move-in can happen quickly — often within days. Call us at 727-563-6540 to check current availability.",
  },
  {
    question: "Do you have multiple locations?",
    answer:
      "Yes — Blu Manor operates 5+ properties across the Tampa Bay area, including locations in Tampa, St. Petersburg, and Clearwater. Call us at 727-563-6540 and we'll help match you with the nearest available room.",
  },
];

// ============================================================
// About Page Content
// ============================================================

export interface AboutContent {
  mission: string;
  story: string;
  values: { title: string; description: string }[];
}

export const aboutContent: AboutContent = {
  mission:
    "Blu Manor provides safe, structured, and affordable transitional housing for individuals reentering the community. We believe everyone deserves a second chance and a stable foundation to rebuild their lives.",
  story:
    "Founded in the Tampa Bay area, Blu Manor was created to fill a critical gap in transitional housing for individuals with criminal backgrounds. Traditional housing options often close their doors to those who need support the most. We opened ours. Our properties offer more than just a roof — they provide structure, accountability, and a community of people working toward the same goal: a fresh start.",
  values: [
    {
      title: "Second Chances",
      description:
        "Everyone deserves the opportunity to rebuild. We welcome individuals that other housing providers turn away.",
    },
    {
      title: "Structure & Accountability",
      description:
        "Our program combines stable housing with clear expectations — employment, supervision compliance, and mutual respect.",
    },
    {
      title: "Community Support",
      description:
        "Living alongside others on the same journey creates natural accountability and encouragement.",
    },
    {
      title: "Dignity & Respect",
      description:
        "Every resident is treated with the dignity they deserve, regardless of their past.",
    },
  ],
};

// ============================================================
// Stats (Trust Bar)
// ============================================================

export const stats: Stat[] = [
  { label: "Properties Across Tampa Bay", value: "5+" },
  { label: "Move-In Timeline", value: "Days" },
  { label: "Employment-Focused Program", value: "100%" },
];
