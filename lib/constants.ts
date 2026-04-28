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
    imagePath: "/projects/Cyberrey Mockup.png",
    desc: "Cyberrey is a cybersecurity website built to showcase trust and enterprise-grade protection.",
    link: "https://www.figma.com/design/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=0-1&t=OZsJfQbaAWpAAWyH-1",
  },
  {
    id: 18,
    name: "CWESD",
    imagePath: "/projects/CWESD - Mockup.png",
    desc: "CWESD is a modern, conversion-focused learning platform empowering women to learn, grow, and lead.",
    link: "https://www.figma.com/design/9Nv6z5mVXXUn2KzwMK1d5V/CWESD?node-id=0-1&t=Bnl38CVdCQKy85JX-1",
  },
  {
    id: 13,
    name: "Axion Lighting Collection",
    imagePath: "/projects/Axion-Mockup.png",
    desc: "Axion is a sleek eCommerce platform showcasing curated lighting collections with an elegant and user-friendly shopping experience.",
    link: "https://www.figma.com/design/uqVa8WTG7FIBpBvQoGPPto/Axion-Selective-Part?node-id=0-1&t=KSUe2Mjwk15kkrK4-1",
  },
  {
    id: 20,
    name: "Prime Renovations",
    imagePath: "/projects/Prime Renovations Mockup.png",
    desc: "Prime Renovations is a premium home renovation website reflecting precision and craftsmanship.",
    link: "https://www.figma.com/design/FeOzf3wjda23O4VP7gkblb/Redesign-Prime-Renovations?node-id=0-1&t=NUTmH5mg5fhqMcwf-1",
  },
  {
    id: 23,
    name: "FlowCubo",
    imagePath: "/projects/Flow Cubo Site Design.png",
    desc: "Flow Cubo is a Webflow agency website focused on high-performance design and conversions.",
    link: "https://www.figma.com/design/jYn1GVKuJlp7Pqk7EpWU9l/FlowCubo-Design?node-id=55-298&t=L5WEHBMHZzA1Kjxg-1",
  },
  {
    id: 15,
    name: "Synctom",
    imagePath: "/projects/Synctom.png",
    desc: "Synctom is a sleek, responsive software house website designed for clear branding and seamless user experience.",
    link: "https://www.figma.com/design/QhYhGveD5HWhzDzln55eVb/Synctom-Selective-Part?node-id=0-1&t=CXtAEPU7zQDepI7G-1",
  },
  {
    id: 14,
    name: "HomeHeaven",
    imagePath: "/projects/Real Estate Web design.png",
    desc: "Home Heaven is a user-friendly real estate platform that enables seamless buying and selling of homes.",
    link: "https://www.figma.com/design/BRMMZEEZcASi8nGFVcJo6o/Real-Estate-Website-Design?node-id=0-1&t=yXeX4UW0hJRqoarq-1",
  },
  {
    id: 21,
    name: "Ikonic Dev",
    imagePath: "/projects/Ikonic Dev Web Design.png",
    desc: "Ikonic Dev is a software house website designed to attract and convert top-tier clients.",
    link: "https://www.figma.com/design/Mx1CXDgdzHok40g99y8ZTV/IKONIC-Landing-Page?node-id=62-2421&t=eige5ZkvQMzgsF26-1",
  },
  {
    id: 22,
    name: "Teams App",
    imagePath: "/projects/Teams Project Mockup.png",
    desc: "Team is a collaboration app designed for seamless chatting, teamwork, and remote productivity.",
    link: "https://www.figma.com/design/mmDFlqhHlD1HpWOquoDN0X/Course-Client-Project?node-id=21-460&t=fOTXeUVQzy6VO14U-1",
  },
  {
    id: 12,
    name: "Reclaim",
    imagePath: "/projects/Reclaim-2.png",
    desc: "A sleek and reliable app design focused on effortlessly recovering lost files with speed and security.",
    link: "#",
  },
  {
    id: 16,
    name: "LumiNova",
    imagePath: "/projects/LumiNova.png",
    desc: "LumiNova is a futuristic neon-themed landing page crafted to showcase a premium lighting collection with a bold, immersive aesthetic.",
    link: "https://www.figma.com/design/KhF5xGVXyiEHDe6Q9Kj1TU/LumiNova-Landing-Page?node-id=217-899&t=f9Emd43qonJpR2Ev-1",
  },
  {
    id: 11,
    name: "FrostyBite",
    imagePath: "/projects/FrostyBite.png",
    desc: "A cool and colorful ice cream web design that delivers a sweet, seamless user experience.",
    link: "https://www.figma.com/design/p9vyT1CgVfhZ22Mdd5HQ1A/Icecream-Design?node-id=2-2&t=j3Jx8Hnd8oIwpdiN-1",
  },
  {
    id: 17,
    name: "NexusDash",
    imagePath: "/projects/NexusDash.png",
    desc: "The all-in-one responsive platform for seamless e-commerce analytics, profile management, and customer communication.",
    link: "https://www.figma.com/design/N74WJ6qH8eZwhzQGocI9Yq/Dashboard-Design?node-id=3-60&t=OWcZgVNXwIUkp0HQ-1",
  },
  {
    id: 1,
    name: "Console Web Design",
    imagePath: "/projects/Console Web Design.jpg",
    desc: "A modern web design for a gaming console interface.",
    link: "https://www.figma.com/design/Mpb05lPZERQwgiKTLmGR98/Console-Web-Design?node-id=0-1&t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 2,
    name: "CTA Design",
    imagePath: "/projects/CTA design.png",
    desc: "Eye-catching call-to-action button designs for improved user engagement.",
    link: "https://www.figma.com/design/BO1ECcDOerx9O3lc1uQO2j/Design?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 3,
    name: "Electric Bike Design",
    imagePath: "/projects/Electric Bike design.jpg",
    desc: "Sleek and futuristic electric bicycle concept design.",
    link: "https://www.figma.com/design/Hwq4eeW9GWmyWicoIw8eHt/Electric-Bike-design?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 4,
    name: "Flux - Figma Build Tutorial",
    imagePath: "/projects/Flux - Figma Build Tutorial (Starter) (Community).jpg",
    desc: "Step-by-step tutorial for building a Flux-inspired design in Figma.",
    link: "https://www.figma.com/design/1XuOrvqIjXDyWzJGkoNBnT/Flux---Figma-Build-Tutorial-(Starter)-(Community)?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 5,
    name: "Fly High",
    imagePath: "/projects/Fly high.png",
    desc: "Inspiring aviation-themed graphic design project.",
    link: "https://www.figma.com/design/XFM3L9bTBe0TzMCQMQQAm0/Untitled?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 6,
    name: "Logitech G502 X",
    imagePath: "/projects/Logitech G502 X.jpg",
    desc: "Product showcase design for the Logitech G502 X gaming mouse.",
    link: "https://www.figma.com/design/JVB23Jntt6AY65RD3Dbx6T/Logitech-G502-X?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 7,
    name: "Logo Quiz Icon Design",
    imagePath: "/projects/Logo Quiz Icon design.png",
    desc: "Creative icon design for a logo quiz mobile application.",
    link: "https://www.figma.com/design/0LRiKxTVAckYDtQGwjBZJc/Logo-Quiz-Icon-design?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 8,
    name: "Nike Air Max",
    imagePath: "/projects/Nike Air Max.png",
    desc: "Original design showcase for Nike Air Max footwear.",
    link: "https://www.figma.com/design/9HWBsRNjrFzApSY4ikzC9a/Simple-web-design?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 9,
    name: "Nike Air Max Design 2",
    imagePath: "/projects/Nike Air Max design 2.jpg",
    desc: "Updated design concept for Nike Air Max sneakers.",
    link: "https://www.figma.com/design/74WVmShPvJ6j5HsOF5kLZM/Nike-Air-Max-design?t=nhFsB4Fz2qCUHGkO-1",
  },
  {
    id: 10,
    name: "Simple 3D Design",
    imagePath: "/projects/Simple 3D design.jpg",
    desc: "Minimalist 3D design project showcasing basic geometric shapes.",
    link: "https://www.figma.com/design/tcjqBYIXWbGRjfK29RKomt/Simple-3D-design?t=nhFsB4Fz2qCUHGkO-1",
  },
];

export const topProjects: TopProject[] = [
  {
    title: "Cyberrey",
    image: "/projects/Cyberrey Mockup.png",
    description:
      "Cyberrey is a cybersecurity website built to showcase trust and enterprise-grade protection.",
    link: "https://www.figma.com/design/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=0-1&t=OZsJfQbaAWpAAWyH-1",
  },
  {
    title: "CWESD",
    image: "/projects/CWESD - Mockup.png",
    description:
      "CWESD is a modern, conversion-focused learning platform empowering women to learn, grow, and lead.",
    link: "https://www.figma.com/design/9Nv6z5mVXXUn2KzwMK1d5V/CWESD?node-id=0-1&t=Bnl38CVdCQKy85JX-1",
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
      "Raja understood the product fast and turned a messy brief into a site that felt clear, premium, and ready to sell. The final Webflow build matched the design without losing the small details.",
    name: "Cyberrey Team",
    role: "Cybersecurity Platform",
    project: "Cyberrey",
    service: "UI/UX + Webflow",
  },
  {
    id: 2,
    quote:
      "The design direction felt polished without becoming complicated. Every section had a purpose, and the final layout made our offer much easier to explain.",
    name: "CWESD Team",
    role: "Learning Platform",
    project: "CWESD",
    service: "Website Design",
  },
  {
    id: 3,
    quote:
      "He brought structure, taste, and speed to the process. The result felt modern, responsive, and much closer to the kind of brand experience we wanted.",
    name: "Synctom Team",
    role: "Software Company",
    project: "Synctom",
    service: "UI Design",
  },
];

export const experience: Experience[] = [
  {
    company: "Freelance",
    role: "UI/UX Designer & Webflow Developer",
    period: "2022 - Present",
    type: "Independent",
    points: [
      "Designed landing pages, portfolio sites, SaaS pages, and business websites with a focus on clarity, trust, and conversion.",
      "Built responsive Webflow experiences that preserve the design details while staying easy for clients to update.",
      "Worked directly with clients from brief to final handoff, shaping structure, visuals, interactions, and launch polish.",
    ],
  },
  {
    company: "Cyberrey",
    role: "Website Designer",
    period: "2025",
    type: "Client project",
    points: [
      "Created a cybersecurity website direction that communicates enterprise trust without feeling heavy or generic.",
      "Structured sections around security, credibility, and product clarity so visitors could understand the offer quickly.",
      "Delivered a refined visual system with dark UI, precise spacing, and modern interaction-ready layouts.",
    ],
  },
  {
    company: "CWESD",
    role: "UI Designer",
    period: "2024",
    type: "Client project",
    points: [
      "Designed a clean learning platform experience for women-focused education, growth, and leadership programs.",
      "Organized content-heavy pages into simple flows that feel approachable while still looking professional.",
      "Balanced warm brand communication with a polished interface system across key website sections.",
    ],
  },
  {
    company: "Synctom",
    role: "Website Designer",
    period: "2024",
    type: "Client project",
    points: [
      "Shaped a modern software company website with stronger hierarchy, clearer service messaging, and sharper visual rhythm.",
      "Designed responsive sections for service discovery, brand trust, and conversion-focused contact paths.",
      "Prepared polished layouts that could translate cleanly into a production-ready website build.",
    ],
  },
];

export const skills: Skill[] = [
  { name: "Figma", icon: "/svgs/figma-svgrepo-com.svg" },
  { name: "Framer", icon: "/svgs/framer.svg" },
  { name: "Webflow", icon: "/svgs/webflow.svg" },
  { name: "Photoshop", icon: "/svgs/photoshop-cc-logo-svgrepo-com.svg" },
  { name: "Illustrator", icon: "/svgs/illustrator-svgrepo-com.svg" },
  { name: "Lightroom", icon: "/svgs/adobe-lightroom-svgrepo-com.svg" },
  { name: "Canva", icon: "/svgs/canva-icon.webp" },
  { name: "HTML", icon: "/svgs/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/svgs/css-3-svgrepo-com.svg" },
  { name: "Tailwind CSS", icon: "/svgs/Tailwind_CSS_Logo.svg.png" },
  { name: "ReactJS", icon: "/svgs/React_JS-Icon.png" },
];
