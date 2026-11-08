export interface Project {
  id: number;
  name: string;
  imagePath: string;
  desc: string;
  link: string;
}

export interface TopProject {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  project: string;
  service: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  points: string[];
}

export const projects: Project[] = [
  {
    id: 19,
    name: "Cyberrey",
    imagePath: "/projects/Cyberrey/Cyberrey Mockup.png",
    desc: "Cyberrey is a cybersecurity website built to showcase trust and enterprise-grade protection.",
    link: "",
  },
  {
    id: 18,
    name: "CWESD",
    imagePath: "/projects/CWESD/CWESD - Mockup.png",
    desc: "CWESD is a modern, conversion-focused learning platform empowering women to learn, grow, and lead.",
    link: "",
  },
  {
    id: 30,
    name: "Pinnacle Development V2",
    imagePath: "/projects/Pinnacle-Mockup-V2.jpg",
    desc: "A modern construction and renovation experience focused on residential and commercial projects, including kitchen and bathroom improvements.",
    link: "",
  },
    {
    id: 36,
    name: "Light House",
    imagePath: "/projects/Lighthouse/Lighthouse-Mockup.png",
    desc: "Light House is a premium lighting brand offering decorative and architectural lighting solutions.",
    link: "",
  },
  {
    id: 24,
    name: "Pablo Marbles and Granite",
    imagePath: "/projects/Pablo Marbles and Granite/Pablo Granite and Marbles.png",
    desc: "A modern website redesign showcasing materials, projects, and services with a clean, user-focused experience.",
    link: "",
  },
   {
    id: 25,
    name: "Jibola x Fella Music",
    imagePath: "/projects/Jibola-Mockup.jpg",
    desc: "A unified music platform experience created by merging two distinct websites into one cohesive and engaging digital experience.",
    link: "",
  },
  {
    id: 13,
    name: "Axion Lighting Collection",
    imagePath: "/projects/Axion/Axion-Mockup.png",
    desc: "Axion is a sleek eCommerce platform showcasing curated lighting collections with an elegant and user-friendly shopping experience.",
    link: "",
  },
  {
    id: 26,
    name: "Edmonton Kitchen Countertops",
    imagePath: "/projects/Edmonton-Mockup.jpg",
    desc: "A premium countertop installation experience designed to showcase high-end kitchen surfaces and craftsmanship.",
    link: "",
  },
  {
    id: 29,
    name: "Pinnacle Development V1",
    imagePath: "/projects/Pinnacle-Mockup-V1.jpg",
    desc: "A modern construction and renovation experience focused on residential and commercial projects, including kitchen and bathroom improvements.",
    link: "",
  },
   {
    id: 27,
    name: "US4U - Italian",
    imagePath: "/projects/US4U-Mockup.jpg",
    desc: "An elegant Italian-focused experience designed to showcase premium costumes and their craftsmanship.",
    link: "",
  },

  {
    id: 33,
    name: "Prestige Deneigement",
    imagePath: "/projects/Prestige-Mockup.jpg",
    desc: "A professional snow removal service experience focused on reliable and efficient winter property maintenance.",
    link: "",
  },
  {
    id: 34,
    name: "Movewell",
    imagePath: "/projects/Movewell-Mockup.jpg",
    desc: "A compassionate elderly care service experience focused on comfort, companionship, and dependable support.",
    link: "",
  },
  {
    id: 15,
    name: "Synctom",
    imagePath: "/projects/Synctom/Synctom.png",
    desc: "Synctom is a sleek, responsive software house website designed for clear branding and seamless user experience.",
    link: "",
  },
  {
    id: 35,
    name: "Ian Bland",
    imagePath: "/projects/Ianbland-Mockup.jpg",
    desc: "A personal teacher portfolio designed to showcase teaching experience, expertise, and professional achievements.",
    link: "",
  },
  {
    id: 20,
    name: "Prime Renovations",
    imagePath: "/projects/Prime Renovations/Prime Renovations Mockup.png",
    desc: "Prime Renovations is a premium home renovation website reflecting precision and craftsmanship.",
    link: "",
  },
  {
    id: 32,
    name: "ME-UC 2026",
    imagePath: "/projects/Erfan-Mockup.jpg",
    desc: "A professional medical forum experience designed to connect cardiomyopathy experts through clinical innovation and regional collaboration in Dubai.",
    link: "",
  },
  {
    id: 28,
    name: "UrbanNest",
    imagePath: "/projects/UrbanNest-Mockup.jpg",
    desc: "A premium real estate website concept designed to showcase properties through a modern, elegant, and editorial experience.",
    link: "",
  },
  {
    id: 23,
    name: "FlowCubo",
    imagePath: "/projects/Flow Cubo Site Design.png",
    desc: "Flow Cubo is a Webflow agency website focused on high-performance design and conversions.",
    link: "",
  },
  {
    id: 14,
    name: "HomeHeaven",
    imagePath: "/projects/Real Estate Web design.png",
    desc: "Home Heaven is a user-friendly real estate platform that enables seamless buying and selling of homes.",
    link: "",
  },
  {
    id: 21,
    name: "Ikonic Dev",
    imagePath: "/projects/Ikonic Dev Web Design.png",
    desc: "Ikonic Dev is a software house website designed to attract and convert top-tier clients.",
    link: "",
  },
  {
    id: 12,
    name: "Reclaim",
    imagePath: "/projects/Reclaim-2.png",
    desc: "A sleek and reliable app design focused on effortlessly recovering lost files with speed and security.",
    link: "",
  },
  {
    id: 17,
    name: "NexusDash",
    imagePath: "/projects/NexusDash.png",
    desc: "The all-in-one responsive platform for seamless e-commerce analytics, profile management, and customer communication.",
    link: "",
  },
  {
    id: 31,
    name: "Surge Crypto",
    imagePath: "/projects/Surgecrypto-Mockup.jpg",
    desc: "A modern crypto platform designed to connect industry leaders and build influential networks for the future of Web3.",
    link: "",
  },
  {
    id: 5,
    name: "Fly High",
    imagePath: "/projects/Fly high.png",
    desc: "Inspiring aviation-themed graphic design project.",
    link: "",
  },
  {
    id: 22,
    name: "Teams App",
    imagePath: "/projects/Teams Project Mockup.png",
    desc: "Team is a collaboration app designed for seamless chatting, teamwork, and remote productivity.",
    link: "",
  },
  
  {
    id: 16,
    name: "LumiNova",
    imagePath: "/projects/LumiNova.png",
    desc: "LumiNova is a futuristic neon-themed landing page crafted to showcase a premium lighting collection with a bold, immersive aesthetic.",
    link: "",
  },
  {
    id: 11,
    name: "FrostyBite",
    imagePath: "/projects/FrostyBite.png",
    desc: "A cool and colorful ice cream web design that delivers a sweet, seamless user experience.",
    link: "",
  },
  {
    id: 1,
    name: "Console Web Design",
    imagePath: "/projects/Console Web Design.jpg",
    desc: "A modern web design for a gaming console interface.",
    link: "",
  },
  {
    id: 2,
    name: "CTA Design",
    imagePath: "/projects/CTA design.png",
    desc: "Eye-catching call-to-action button designs for improved user engagement.",
    link: "",
  },
  {
    id: 3,
    name: "Electric Bike Design",
    imagePath: "/projects/Electric Bike design.jpg",
    desc: "Sleek and futuristic electric bicycle concept design.",
    link: "",
  },
  {
    id: 4,
    name: "Flux - Figma Build Tutorial",
    imagePath: "/projects/Flux - Figma Build Tutorial (Starter) (Community).jpg",
    desc: "Step-by-step tutorial for building a Flux-inspired design in Figma.",
    link: "",
  },
  {
    id: 6,
    name: "Logitech G502 X",
    imagePath: "/projects/Logitech G502 X.jpg",
    desc: "Product showcase design for the Logitech G502 X gaming mouse.",
    link: "",
  },
  {
    id: 7,
    name: "Logo Quiz Icon Design",
    imagePath: "/projects/Logo Quiz Icon design.png",
    desc: "Creative icon design for a logo quiz mobile application.",
    link: "",
  },
  {
    id: 8,
    name: "Nike Air Max",
    imagePath: "/projects/Nike Air Max.png",
    desc: "Original design showcase for Nike Air Max footwear.",
    link: "",
  },
  {
    id: 9,
    name: "Nike Air Max Design 2",
    imagePath: "/projects/Nike Air Max design 2.jpg",
    desc: "Updated design concept for Nike Air Max sneakers.",
    link: "",
  },
  {
    id: 10,
    name: "Simple 3D Design",
    imagePath: "/projects/Simple 3D design.jpg",
    desc: "Minimalist 3D design project showcasing basic geometric shapes.",
    link: "",
  },
];

export const topProjects: TopProject[] = [
  {
    title: "Cyberrey",
    image: "/projects/Cyberrey Mockup.png",
    description:
      "Cyberrey is a cybersecurity website built to showcase trust and enterprise-grade protection.",
    link: "https://www.figma.com/proto/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=330-2441&p=f&viewport=2571%2C260%2C0.03&t=iNsf4dFXvkq6qVSc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=330%3A2441&page-id=318%3A188",
  },
  {
    title: "CWESD",
    image: "/projects/CWESD - Mockup.png",
    description:
      "CWESD is a modern, conversion-focused learning platform empowering women to learn, grow, and lead.",
    link: "https://www.figma.com/proto/9Nv6z5mVXXUn2KzwMK1d5V/CWESD?node-id=124-707&viewport=431%2C25%2C0.1&t=W0hMRftf6JdoHNrR-1&scaling=min-zoom&content-scaling=fixed&page-id=13%3A2",
  },
  {
    title: "Synctom",
    description:
      "Synctom is a sleek, responsive software house website designed for clear branding and seamless user experience.",
    image: "/projects/Synctom.png",
    link: "https://www.synctom.com/",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "A creative and dedicated UI/UX Designer with strong attention to detail, a great eye for design, and a professional approach. Always cooperative, open to feedback, and committed to delivering quality work.",
    name: "Nimra Kanwal",
    role: "Recruitment Specialist · HR Operations",
    project: "Senior Colleague",
    service: "Recommendation",
  },
  {
    id: 2,
    quote:
      "Raja is a talented UI/UX Designer with good Figma/Webflow skills, attention to detail, and clear communication. He is reliable, professional, and consistently delivers thoughtful, high-quality design work.",
    name: "Jawad Yousaf",
    role: "Senior Android & Flutter Engineer",
    project: "Mentorship",
    service: "Recommendation",
  },
  {
    id: 3,
    quote:
      "Zubair combines creativity with user-focused thinking to create intuitive digital experiences. He understands people, solves design challenges, and is professional, collaborative, and committed to quality.",
    name: "Ali Taqi",
    role: "Founder @ Synctom",
    project: "Direct Manager",
    service: "Recommendation",
  },
];

export const experience: Experience[] = [
  {
    company: "Toptal",
    role: "Product Designer · Toptal Talent Network",
    period: "November 2026 – Present",
    type: "International · Remote",
    points: [
      "Selected to join Toptal's exclusive global talent network, recognized among the top 3% of talent worldwide, following successful completion of its talent evaluation process.",
    ],
  },
  {
    company: "DevCubix",
    role: "UI/UX Designer",
    period: "Aug 2026 - Sep 2026",
    type: "Full-Time · Onsite",
    points: [
      "Designed end-to-end UI/UX, from wireframes to high-fidelity Figma designs, for client and personal-brand projects including Jibola, Fela Studio, MoveWell, US4U, Ian Bland, Pinnacle Development, Surge, E, and Naveen Portfolio.",
      "Managed multiple concurrent design projects across different industries, from initial concept through developer-ready handoff.",
      "Worked closely with clients and the internal team to turn briefs into polished, on-brand interfaces.",
    ],
  },
  {
    company: "FlowCubo",
    role: "UI/UX Designer & Webflow Developer",
    period: "Feb 2025 - Present",
    type: "Project Basis · Nevada, USA",
    points: [
      "Working with an international Webflow agency based in Nevada, USA, designing and developing high-performance websites for clients across the globe.",
      "Responsible for the full pipeline — from wireframes and UI design in Figma through to production-ready Webflow builds, ensuring pixel-perfect fidelity at every stage.",
      "Collaborated on international client projects including Cyberrey, Prime Renovations, Pablo Marbles and Granite, and several others, delivering polished, conversion-focused digital experiences.",
      "Operated within a fast-paced agency environment, managing multiple projects simultaneously while maintaining consistent quality and meeting client deadlines.",
    ],
  },
  {
    company: "Synctom",
    role: "UI/UX Designer",
    period: "June 2025 - July 2026",
    type: "Full-Time · Islamabad, Pakistan",
    points: [
      "Worked as a UI/UX Designer at Synctom, a software house based in Islamabad, contributing to the design of multiple large-scale digital products.",
      "Designed Axion Lighting Solutions — a sleek eCommerce platform for a curated lighting brand, focused on elegant product presentation and seamless shopping flows.",
      "Led the UI design for the Synctom software house website, establishing a strong visual identity with clear service hierarchy and conversion-focused layouts.",
      "Contributed to several other internal and client-facing projects, consistently delivering responsive, production-ready designs with attention to detail and brand consistency.",
    ],
  },
];

export const skills: Skill[] = [
  { name: "Figma", icon: "/svgs/figma-svgrepo-com.svg" },
  { name: "Framer", icon: "/svgs/framer.svg" },
  { name: "Webflow", icon: "/svgs/webflow.svg" },
  { name: "Photoshop", icon: "/svgs/photoshop-cc-logo-svgrepo-com.svg" },
  { name: "Illustrator", icon: "/svgs/illustrator-svgrepo-com.svg" },
  { name: "Lovable", icon: "/svgs/lovable.svg" },
  { name: "Canva", icon: "/svgs/canva-icon.webp" },
  { name: "HTML", icon: "/svgs/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/svgs/css-3-svgrepo-com.svg" },
  { name: "Tailwind CSS", icon: "/svgs/Tailwind_CSS_Logo.svg.png" },
  { name: "ReactJS", icon: "/svgs/React_JS-Icon.png" },
];
