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
    overview:
      "I independently redesigned CyberRey's outdated cybersecurity website into a structured, professional digital experience that communicates its services and expertise with greater clarity.",
    challenge:
      "The original website had limited visual presentation and content structure. Service information, credibility signals, and next steps were present but difficult to scan, so the site did not clearly communicate what the company offered or why visitors should trust it.",
    solution:
      "I researched the client's requirements, organized the content into a clear sitemap, established the visual direction and design system, and designed the complete website in Figma. Flowcubo Studio developed the approved design in Webflow.",
    results: [
      "Clearer service communication across the delivered pages",
      "A more professional and credibility-focused visual system",
      "More visible inquiry and contact paths",
      "A complete Figma design handed off for Webflow development"
    ],
    gallery: ["/projects/Cyberrey/Cyberrey Mockup.png","/projects/Cyberrey/Cyberrey_typography.png","/projects/Cyberrey/Cyberrey_Colorpalette.webp","/projects/Cyberrey/Cyberrey_Navbars.webp","/projects/Cyberrey/Cyberrey_Vendor.webp","/projects/Cyberrey/Cyberrey_Solutions.webp","/projects/Cyberrey/Cyberrey_Abouts.webp","/projects/Cyberrey/Cyberrey_Blogs.webp","/projects/Cyberrey/Cyberrey_Contact.webp"],
    previews: {
      desktop: "/projects/Cyberrey/Cyberrey Landing Page.png",
    },
    tags: ["UI/UX Design", "Information Architecture", "Design System", "Figma"],
    link: "https://www.figma.com/proto/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=330-2441&p=f&viewport=2571%2C260%2C0.03&t=iNsf4dFXvkq6qVSc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=330%3A2441&page-id=318%3A188",
    featured: true,
    liveUrl: "https://cyberrey.com/"
  },
  {
    id: 9,
    title: "Moniva",
    slug: "moniva-financial-app",
    overview: "An all-in-one mobile financial experience designed to simplify wallet management, personal lending, and everyday bill payments.",
    challenge: "Combining wallet management, borrowing, and everyday payments within one application introduces different interaction requirements that must feel connected without overwhelming users.",
    solution: "Designed a unified mobile financial-services experience across onboarding, identity verification, wallet management, personal lending, bill payments, transaction records, and account settings with consistent patterns and clear feedback.",
    results: [
      "Unified financial experience across core money-management services",
      "Structured user journeys for account setup, funding, borrowing, and payments",
      "Clear financial information for balances, repayments, and transaction outcomes",
      "Consistent interface system across 88 mobile screens and states"
    ],
    gallery: [
      "/projects/Moniva/Moniva-Mockup.jpg",
      "/projects/Moniva/Home - Verified.png",
      "/projects/Moniva/Add moneysuccess.png",
      "/projects/Moniva/Loan Approved.png",
      "/projects/Moniva/Bills - Recent.png",
      "/projects/Moniva/Onboarding 4.png",
      "/projects/Moniva/Moniva-Fulldesign.png"
    ],
    previews: {
      desktop: "/projects/Moniva/Moniva-Mockup.jpg",
    },
    tags: ["UI/UX Design", "Fintech", "Mobile App", "Product Design"],
    link: "",
    featured: true
  },

{
  id: 8,
  title: "Reclaim — Data Recovery App",
  slug: "reclaim-data-recovery-app",
  overview: "Reclaim is a mobile data recovery application designed to help users recover lost or accidentally deleted files. The experience focuses on making file discovery, scanning, previewing, and recovery simple through an intuitive and approachable interface.",

  challenge: "Recovering deleted files can be confusing, especially for users who are unfamiliar with file systems and recovery tools. The challenge was to create an interface that makes file discovery and recovery understandable without overwhelming users with technical complexity.",

  solution: "Designed the core mobile application experience across onboarding, file discovery, scanning, file previews, recovery interactions, and supporting interface states, supported by a reusable visual system and an interactive prototype.",

  results: [
    "Structured recovery journey from discovery to recovery outcome",
    "Clear organization for different file categories and recovery interactions",
    "Consistent mobile interface across core flows and supporting states",
    "Comprehensive UI coverage with 25+ mobile screens, a design system, and an interactive prototype"
  ],

  gallery: [
    "/projects/Reclaim/Reclaim-Mockup.png",
    "/projects/Reclaim/Screen-1.png",
    "/projects/Reclaim/Screen-2.png",
    "/projects/Reclaim/Screen-3.png",
    "/projects/Reclaim/Design-System.png",
    "/projects/Reclaim/Full-Design.png"
  ],

  previews: {
    desktop: "/projects/Reclaim/Reclaim-Mockup.png",
  },

  tags: [
    "UI/UX Design",
    "Mobile App",
    "Data Recovery",
    "Product Design"
  ],

  link: "",
  featured: false
},

  {
    id: 7,
    title: "Light House E-commerce Website",
    slug: "light-house-ecommerce-website",
    overview: "Light House is a premium lighting brand offering decorative and architectural lighting solutions. The website was designed to showcase its products, highlight completed lighting projects, and provide customers with a seamless online shopping experience.",
    challenge: "Design a sophisticated e-commerce experience that communicates the brand's premium identity while making it easy for customers to discover lighting products, explore categories, view project inspirations, and navigate the purchasing journey across devices.",
    solution: "Designed a premium, responsive website featuring a visually immersive landing page, structured product categories, detailed product pages with selectable variants, project showcases, editorial blog layouts, and dedicated brand and contact pages. Developed a consistent visual language using deep navy tones, warm lighting imagery, refined typography, and spacious layouts. Also designed the shopping journey, including cart, checkout, payment, order review, and confirmation screens.",
    results: [
      "Created a cohesive visual identity across the website's key pages",
      "Designed a responsive experience for desktop and mobile users",
      "Developed a complete e-commerce interface covering product discovery through order confirmation"
    ],
    gallery: [
      "/projects/Lighthouse/Lighthouse-Mockup.png",
      "/projects/Lighthouse/Lighthouse-Desktop.png",
      "/projects/Lighthouse/Lighthouse-Mobile.png",
      "/projects/Lighthouse/Lighthouse-Colorpalette.webp",
      "/projects/Lighthouse/Lighthouse-Typography.webp",
      "/projects/Lighthouse/Landing-Page_Lighthouse.png"
    ],
    previews: {
      desktop: "/projects/Lighthouse/Landing-Page_Lighthouse.png",
    },
    tags: ["UI/UX Design", "E-commerce", "Web Design", "Responsive Design", "Lighting"],
    link: "https://www.figma.com/proto/xpokrtxgP4akM88XI3Rcej/Lighthouse-isb?node-id=187-2543&p=f&viewport=-403%2C50%2C0.06&t=9JasNXrElqMa9Kwu-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=187%3A2543&page-id=4%3A44",
    featured: true
  },
  {
    id: 2,
    title: "CWESD Learning Platform",
    slug: "cwesd-learning-platform",
    overview: "CWESD is a learning platform designed to empower women in technology through educational opportunities, structured learning experiences, mentorship, and community building.",
    challenge: "Create an inclusive, engaging platform that appeals to women in tech while maintaining professional credibility and ease of navigation for diverse user groups.",
    solution: "Designed a welcoming, responsive website experience with clear content presentation, intuitive navigation, and a cohesive visual direction to help visitors explore learning opportunities and community-related information.",
    results: [
      "Clearer Content Presentation — organized platform information into a more structured visual experience",
      "Consistent Visual Identity — established a cohesive presentation through typography, color, and layout",
      "Improved Information Discoverability — focused on making important learning and platform information easier to explore",
      "Responsive Design Direction — designed the website experience with consideration for different screen sizes"
    ],
    gallery: ["/projects/CWESD/CWESD - Mockup.png","/projects/CWESD/CWESD_typography.png","/projects/CWESD/CWESD_Colorpalette.webp","/projects/CWESD/CWESD_Landingpage.webp"],
    previews: {
      desktop: "/projects/CWESD/CWESD Landing Page.png",
    },
    tags: ["UI/UX Design", "Education", "Web Design", "Mobile-First", "Community"],
    link: "https://www.figma.com/proto/9Nv6z5mVXXUn2KzwMK1d5V/CWESD?node-id=124-707&viewport=431%2C25%2C0.1&t=W0hMRftf6JdoHNrR-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A2",
    featured: true
  },
  {
    id: 3,
    title: "Axion Lighting E-Commerce",
    slug: "axion-lighting-ecommerce",
    overview: "Axion is a premium lighting e-commerce platform with a complete digital ecosystem spanning brand identity, a full online store, a responsive mobile experience, and a dashboard.",
    challenge: "Design a complete digital experience from scratch, establishing the brand before extending it across a storefront, mobile experience, and dashboard.",
    solution: "Built the brand foundation first, then designed the e-commerce website, responsive mobile experience, and dashboard around one consistent visual language and a connected shopping journey.",
    results: [
      "A complete brand identity and visual foundation",
      "A full e-commerce website covering product discovery through purchase",
      "A responsive mobile experience with consistent brand expression",
      "A complete dashboard interface within the same ecosystem",
      "A consistent design language across the digital experience",
      "A website that now serves as a source of new client acquisition"
    ],
    gallery: ["/projects/Axion/Axion-Mockup.png", "/projects/Axion/Axion_colorpalette.png", "/projects/Axion/Axion_typography.png", "/projects/Axion/Axion_Products_Pages.webp", "/projects/Axion/Axion_Projects_Pages.webp", "/projects/Axion/Axion_Blogs_Pages.webp", "/projects/Axion/Axion_AC_Pages.webp", "/projects/Axion/Axion_Order_Pages.webp", "/projects/Axion/Axion_Profile_Pages.webp", "/projects/Axion/Axion_Mobile_View.webp", "/projects/Axion/Axion_Dashboards.webp", "/projects/Axion/Axion Main Landing Page.png", "/projects/Axion/axion Mobile Landing Page.png"],
    previews: {
      desktop: "/projects/Axion/Axion Main Landing Page.png",
    },
    tags: ["Brand Identity", "E-commerce", "UI/UX Design", "Product Design", "Responsive Design", "Dashboard Design"],
    link: "https://www.figma.com/proto/9f0Zx8QtkreC2pR7xTk6ut/Axion-Landing-Pages?node-id=622-4523&p=f&viewport=261%2C279%2C0.02&t=wWShF8wyKCKlWKpL-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=622%3A4523&page-id=99%3A88",
    featured: true,
    liveUrl: "https://axionlights.com/"
  },
  {
    id: 4,
    title: "Prime Renovations Website",
    slug: "prime-renovations",
    overview: "Prime Renovations is a New York-based renovation company specializing in high-end residential work. The website was designed to present the craftsmanship, process, and brand story behind that work with the clarity and restraint expected by high-value clients.",
    challenge: "Communicate luxury and quality through design while keeping the inquiry process clear and trustworthy for high-value clients.",
    solution: "Designed a refined, image-led website that presents completed renovation work, explains the project process, supports the brand story, and provides a direct path for prospective clients to request a consultation or quote.",
    results: [
      "A refined digital presentation aligned with premium renovation work",
      "Clearer project and process storytelling across the website",
      "A more direct and approachable inquiry path",
      "Consistent visual language across project, process, about, and editorial pages",
      "A responsive foundation verified across desktop and mobile widths"
    ],
    gallery: ["/projects/Prime Renovations/Prime Renovations Mockup.png","/projects/Prime Renovations/Prime_Colorpalette.webp","/projects/Prime Renovations/Prime_Renovations_Typography.png","/projects/Prime Renovations/Prime_Projects.webp","/projects/Prime Renovations/Prime_Process.webp","/projects/Prime Renovations/Prime_Blogs.webp","/projects/Prime Renovations/Prime_About.webp","/projects/Prime Renovations/Prime Renovations Landing Page.png"],
    previews: {
      desktop: "/projects/Prime Renovations/Prime Renovations Landing Page.png"
    },
    tags: ["Web Design", "Luxury Branding", "Webflow", "Portfolio"],
    link: "https://www.figma.com/proto/FeOzf3wjda23O4VP7gkblb/Redesign-Prime-Renovations?node-id=160-661&viewport=-25%2C190%2C0.03&t=ZgO5iDSbZORmOcOt-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=160%3A661&page-id=111%3A273",
    featured: false,
    liveUrl: "https://www.primerenovationsnyc.com/"
  },
  {
    id: 5,
    title: "Synctom - Digital Solutions That Drive Innovation",
    slug: "synctom-digital-solutions",
    overview: "Synctom needed a stronger brand presence and a complete website experience to communicate its software development services and expertise. I handled the full visual and design experience, from the logo, typography, color palette, and visual identity through the complete website design.",
    challenge: "The existing website was limited to a single landing page with outdated visuals, minimal content, and insufficient information about the company's services, making it difficult for potential clients to understand Synctom's capabilities, explore its services, recognize its expertise, build confidence in the brand, and find clear ways to get in touch.",
    solution: "I established the brand identity first, then translated it into a complete website with dedicated service pages, improved content hierarchy and navigation, clear calls-to-action, consistent UI styling, and a professional presentation of Synctom's software development expertise.",
    results: [
      "A stronger and more professional brand presence",
      "A modern website experience with clearer service presentation",
      "A more complete digital presence built on a consistent visual identity",
      "Clearer navigation and calls-to-action for prospective clients",
      "A coherent brand foundation carried through the full website"
    ],
    gallery: ["/projects/Synctom/Synctom.png","/projects/Synctom/Synctom_Colorpalette.webp","/projects/Synctom/Synctom_typography.png","/projects/Synctom/Synctom_LandingPage.webp","/projects/Synctom/Synctom_ServicePage.webp","/projects/Synctom/Synctom_Project.webp","/projects/Synctom/Synctom_About.webp"],
    previews: {
      desktop: "/projects/Synctom/Landing-Page_Synctom.png",
    },
    tags: ["Brand Identity", "Web Design", "UI/UX", "Figma"],
    link: "https://www.figma.com/proto/nNVEhHLiLztlMH6HROW7be/Synctom?node-id=583-5127&p=f&viewport=40%2C81%2C0.06&t=x82BWFAlISZ7RFjV-1&scaling=scale-down-width&content-scaling=fixed&page-id=583%3A3746",
    featured: false,
    liveUrl: "https://www.synctom.com/"
  },
  {
    id: 6,
    title: "Pablo Marble & Granite",
    slug: "pablo-marbles-granite",
    overview: "A website redesign for a premium stone fabrication company, created to present materials, craftsmanship, completed projects, and services through a cleaner, more polished digital experience.",
    challenge: "The old website felt outdated and cluttered, making it difficult to showcase materials, projects, and services in a premium and user-friendly way.",
    solution: "Redesigned the experience with a clean layout, gallery-focused sections, clearer page structure, stronger material and project presentation, and a dedicated appointment form as the next step.",
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
    link: "https://www.figma.com/proto/5q5JMJqUHSxyByIGSiw25p/Pablo-Marbles?node-id=527-2221&p=f&viewport=340%2C-55%2C0.02&t=PMT0eEGkyrYPjK1D-1&scaling=min-zoom&content-scaling=fixed&page-id=28%3A491",
    featured: false
  },
];