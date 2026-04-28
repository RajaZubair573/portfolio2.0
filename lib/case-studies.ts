export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
  previews: {
    desktop: string;
    mobile: string;
  };
  tags: string[];
  link: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Cyberrey Platform Redesign",
    slug: "cyberrey-platform",
    overview: "Cyberrey is a cybersecurity platform that needed a complete redesign to better communicate trust, security, and enterprise-grade protection to potential clients.",
    challenge: "The previous design lacked visual hierarchy and failed to convey the seriousness and reliability expected from a cybersecurity brand. Users were not converting due to unclear value propositions and outdated aesthetics.",
    solution: "Implemented a dark, professional design with strong typography, security-focused iconography, and clear CTAs. Used Webflow for responsive development with custom animations to showcase trust indicators.",
    results: [
      "Increased conversion rate by 45%",
      "Improved user engagement metrics by 60%",
      "Enhanced brand perception as a premium cybersecurity solution"
    ],
    gallery: ["/projects/Cyberrey Mockup.png"],
    previews: {
      desktop: "/projects/Cyberrey Mockup.png",
      mobile: "/projects/Cyberrey Mockup.png"
    },
    tags: ["UI/UX", "Webflow", "Cybersecurity", "Redesign"],
    link: "https://www.figma.com/design/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=0-1&t=OZsJfQbaAWpAAWyH-1",
    featured: true
  },
  {
    id: 2,
    title: "CWESD Learning Platform",
    slug: "cwesd-learning-platform",
    overview: "CWESD is a modern learning platform designed to empower women in tech through comprehensive courses, mentorship, and community building.",
    challenge: "Create an inclusive, engaging platform that appeals to women in tech while maintaining professional credibility and ease of navigation for diverse user groups.",
    solution: "Developed a clean, feminine yet professional design with warm color palettes, intuitive navigation, and interactive elements. Focused on accessibility and mobile-first responsive design.",
    results: [
      "Achieved 78% user satisfaction rate",
      "Increased course enrollment by 120%",
      "Built a strong community with 5000+ active members"
    ],
    gallery: ["/projects/CWESD - Mockup.png"],
    previews: {
      desktop: "/projects/CWESD - Mockup.png",
      mobile: "/projects/CWESD - Mockup.png"
    },
    tags: ["UI/UX", "Education", "Community", "Mobile-First"],
    link: "https://www.figma.com/design/9Nv6z5mVXXUn2KzwMK1d5V/CWESD?node-id=0-1&t=Bnl38CVdCQKy85JX-1",
    featured: true
  },
  {
    id: 3,
    title: "Axion Lighting E-Commerce",
    slug: "axion-lighting-ecommerce",
    overview: "Axion is a premium lighting e-commerce platform showcasing curated collections with an elegant shopping experience.",
    challenge: "Design a luxurious yet user-friendly e-commerce experience that highlights product aesthetics while maintaining conversion optimization principles.",
    solution: "Created a sophisticated design with high-quality product imagery, smooth animations, and a streamlined checkout process. Implemented advanced filtering and personalization features.",
    results: [
      "Boosted average order value by 35%",
      "Reduced cart abandonment by 50%",
      "Achieved 4.8/5 customer satisfaction rating"
    ],
    gallery: ["/projects/Axion-Mockup.png"],
    previews: {
      desktop: "/projects/Axion-Mockup.png",
      mobile: "/projects/Axion-Mockup.png"
    },
    tags: ["E-Commerce", "UI/UX", "Product Design", "Conversion Optimization"],
    link: "https://www.figma.com/design/uqVa8WTG7FIBpBvQoGPPto/Axion-Selective-Part?node-id=0-1&t=KSUe2Mjwk15kkrK4-1",
    featured: true
  },
  {
    id: 4,
    title: "Prime Renovations Website",
    slug: "prime-renovations",
    overview: "Prime Renovations needed a website that reflects their precision craftsmanship and premium home renovation services.",
    challenge: "Communicate luxury and quality through design while making the booking process simple and trustworthy for high-value clients.",
    solution: "Designed a minimalist, elegant website with before/after galleries, testimonial integration, and a sophisticated booking system. Used subtle animations to showcase craftsmanship.",
    results: [
      "Increased qualified leads by 85%",
      "Improved brand positioning in premium market",
      "Reduced inquiry response time by 70%"
    ],
    gallery: ["/projects/Prime Renovations Mockup.png"],
    previews: {
      desktop: "/projects/Prime Renovations Mockup.png",
      mobile: "/projects/Prime Renovations Mockup.png"
    },
    tags: ["Web Design", "Luxury Branding", "Lead Generation", "Portfolio"],
    link: "https://www.figma.com/design/FeOzf3wjda23O4VP7gkblb/Redesign-Prime-Renovations?node-id=0-1&t=NUTmH5mg5fhqMcwf-1",
    featured: false
  }
];