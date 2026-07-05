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
    mobile?: string;
  };
  tags: string[];
  link: string;
  liveUrl?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "CyberRey — Cybersecurity Website Redesign",
    slug: "cyberrey-platform",
    overview: "CyberRey is a cybersecurity solutions provider redesigned to better communicate trust, clarity, and enterprise-grade protection to modern organizations.",
    challenge: "The existing website lacked a clear visual hierarchy and failed to communicate the credibility and trust expected from a cybersecurity brand. The interface felt outdated, with unclear messaging and weak value positioning, leading to low user engagement and poor conversion performance.",
    solution: "Redesigned the experience with a modern, security-focused approach centered on clarity and trust. Introduced strong typography, structured layouts, and refined iconography to guide users through key offerings. Established a consistent visual system with clear CTAs and improved content hierarchy. Built the site in Webflow with fully responsive behavior and subtle interactions to reinforce credibility without distraction.",
    results: [
      "Increased conversion rate by 45% through clearer messaging and optimized user flow",
      "IImproved user engagement by 60%, with better navigation and content structure",
      "Elevated brand perception, positioning CyberRey as a premium, enterprise-grade cybersecurity partner"
    ],
    gallery: ["/projects/Cyberrey/Cyberrey Mockup.png","/projects/Cyberrey/Cyberrey_typography.png","/projects/Cyberrey/Cyberrey_Colorpalette.webp","/projects/Cyberrey/Cyberrey_Navbars.webp","/projects/Cyberrey/Cyberrey_Vendor.webp","/projects/Cyberrey/Cyberrey_Solutions.webp","/projects/Cyberrey/Cyberrey_Abouts.webp","/projects/Cyberrey/Cyberrey_Blogs.webp","/projects/Cyberrey/Cyberrey_Contact.webp"],
    previews: {
      desktop: "/projects/Cyberrey/Cyberrey Landing Page.png",
      // mobile: "/projects/Cyberrey/Cyberrey Mockup.png"
    },
    tags: ["UI/UX", "Webflow", "Cybersecurity", "Redesign"],
    link: "https://www.figma.com/design/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=0-1&t=OZsJfQbaAWpAAWyH-1",
    featured: true,
    liveUrl: "https://cyberrey.com/"
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
    gallery: ["/projects/CWESD/CWESD - Mockup.png","/projects/CWESD/CWESD_typography.png","/projects/CWESD/CWESD_Colorpalette.webp","/projects/CWESD/CWESD_Landingpage.webp"],
    previews: {
      desktop: "/projects/CWESD/CWESD Landing Page.png",
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
    gallery: ["/projects/Axion/Axion-Mockup.png", "/projects/Axion/Axion_typography.png", "/projects/Axion/Axion_colorpalette.png","/projects/Axion/Axion_Products_Pages.webp","/projects/Axion/Axion_Projects_Pages.webp","/projects/Axion/Axion_Blogs_Pages.webp","/projects/Axion/Axion_AC_Pages.webp","/projects/Axion/Axion_Order_Pages.webp","/projects/Axion/Axion_Profile_Pages.webp","/projects/Axion/Axion_Mobile_View.webp","/projects/Axion/Axion_Dashboards.webp"],
    previews: {
      desktop: "/projects/Axion/Axion Main Landing Page.png",
      mobile: "/projects/Axion/axion Mobile Landing Page.png"
    },
    tags: ["E-Commerce", "UI/UX", "Product Design", "Conversion Optimization"],
    link: "https://www.figma.com/design/9f0Zx8QtkreC2pR7xTk6ut/Axion-Landing-Pages?node-id=99-88&t=x23Vp5gOW6NUTELI-1",
    featured: true,
    liveUrl: "https://axionlights.com/"
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
    gallery: ["/projects/Prime Renovations/Prime Renovations Mockup.png","/projects/Prime Renovations/Prime_Renovations_Typography.png","/projects/Prime Renovations/Prime_Colorpalette.webp","/projects/Prime Renovations/Prime_Projects.webp","/projects/Prime Renovations/Prime_Process.webp","/projects/Prime Renovations/Prime_Blogs.webp","/projects/Prime Renovations/Prime_About.webp"],
    previews: {
      desktop: "/projects/Prime Renovations/Prime Renovations Landing Page.png"
    },
    tags: ["Web Design", "Luxury Branding", "Lead Generation", "Portfolio"],
    link: "https://www.figma.com/design/FeOzf3wjda23O4VP7gkblb/Redesign-Prime-Renovations?node-id=0-1&t=NUTmH5mg5fhqMcwf-1",
    featured: false,
    liveUrl: "https://www.primerenovationsnyc.com/"
  },
  {
    id: 5,
    title: "Synctom - Digital Solutions That Drive Innovation",
    slug: "synctom-digital-solutions",
    overview: "Synctom is a software development company that wanted its website to better reflect the quality of its services and expertise. The project focused on redesigning their existing website into a complete digital experience that would strengthen their brand identity, showcase their capabilities, and encourage potential clients to get in touch.",
    challenge: "The existing website was limited to a single landing page with outdated visuals, minimal content, and little information about the company's services. It lacked the credibility, structure, and user experience needed to attract and convert potential clients, making it difficult for visitors to understand the value Synctom could provide.",
    solution: "I redesigned the website from the ground up, creating a modern and professional experience that aligned with Synctom's vision. The new design introduced a stronger visual identity, dedicated service pages, improved content hierarchy, clear calls-to-action, and a user-friendly layout that effectively communicated the company's expertise and built trust with visitors.",
    results: [
      "Established a stronger and more professional brand presence.",
      "Improved user engagement through a modern website experience.",
      "Increased client interest with clearer service presentation and messaging."
    ],
    gallery: ["/projects/Synctom/Synctom.png","/projects/Synctom/Synctom_typography.png","/projects/Synctom/Synctom_Colorpalette.webp","/projects/Synctom/Synctom_LandingPage.webp","/projects/Synctom/Synctom_ServicePage.webp","/projects/Synctom/Synctom_Project.webp","/projects/Synctom/Synctom_About.webp"],
    previews: {
      desktop: "/projects/Synctom/Landing-Page_Synctom.png",
    },
    tags: ["Web Design", "Figma", "Luxury Branding", "UI/UX"],
    link: "https://www.figma.com/design/5q5JMJqUHSxyByIGSiw25p/Pablo-Marbles?node-id=527-2221&t=zA0zz6kk9kOubyb5-1",
    featured: false,
    liveUrl: "https://www.synctom.com/"
  },
  {
    id: 6,
    title: "Pablo Marble & Granite",
    slug: "pablo-marbles-granite",
    overview: "A modern website redesign for a premium stone fabrication company, showcasing materials, projects, and services with a clean, luxury-focused experience.",
    challenge: "The old website felt outdated and cluttered, making it difficult to showcase materials, projects, and services in a premium and user-friendly way.",
    solution: "Redesigned the website with a clean layout, gallery-focused sections, modern typography, improved page structure, and a premium appointment booking experience aligned with the brand.",
    results: [
      "Created a modern and premium digital presence",
      "Improved navigation and overall user experience",
      "Enhanced project and material presentation with cleaner layouts"
    ],
    gallery: ["/projects/Pablo Marbles and Granite/Pablo Granite and Marbles.png", "/projects/Pablo Marbles and Granite/Pablo_typography.png", "/projects/Pablo Marbles and Granite/Pablo_Colorpalette.webp", "/projects/Pablo Marbles and Granite/Pablo_Product.webp", "/projects/Pablo Marbles and Granite/Pablo_About.webp", "/projects/Pablo Marbles and Granite/Pablo_Inventory.webp", "/projects/Pablo Marbles and Granite/Pablo_Blogs.webp", "/projects/Pablo Marbles and Granite/Pablo_Works.webp", "/projects/Pablo Marbles and Granite/Pablo_Contact.webp", "/projects/Pablo Marbles and Granite/Pablo_Remodeling.webp"],
    previews: {
      desktop: "/projects/Pablo Marbles and Granite/Pablo Landing Page.png",
    },
    tags: ["Web Design", "Figma", "Luxury Branding", "UI/UX"],
    link: "https://www.figma.com/design/5q5JMJqUHSxyByIGSiw25p/Pablo-Marbles?node-id=527-2221&t=zA0zz6kk9kOubyb5-1",
    featured: false
  },
];