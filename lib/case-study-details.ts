export interface CaseStudyMetaItem {
  label: string;
  value: string;
}

export interface CaseStudyFigure {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
}

export interface PersonaGroup {
  title: string;
  icon: "goals" | "frustrations" | "needs";
  items: string[];
}

export interface CaseStudyDetail {
  intro: string;
  meta: CaseStudyMetaItem[];
  overview: {
    title: string;
    paragraphs: string[];
    responsibilities: string[];
    information: CaseStudyMetaItem[];
  };
  challenge: {
    title: string;
    points: { title: string; body: string }[];
    objective: string;
  };
  persona: {
    name: string;
    role: string;
    industry: string;
    experience: string;
    bio: string;
    groups: PersonaGroup[];
    consideration: string;
    authenticity: string;
  };
  direction: {
    title: string;
    intro: string;
    principles: { title: string; body: string }[];
    colors: { name: string; hex: string; role: string }[];
    paletteNote: string;
    typographyImage: string;
    typographyCaption: string;
    typographyRoles: string[];
    componentsImage: string;
    componentsCaption: string;
    componentFamilies: string[];
  };
  showcase: {
    lead: string;
    desktop: CaseStudyFigure;
    gallery: { src: string; alt: string; label: string; caption: string }[];
  };
  responsive: {
    lead: string;
    desktop: CaseStudyFigure;
    points: { title: string; body: string }[];
    decisions: {
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      caption: string;
    }[];
  };
  outcomes: {
    items: { title: string; body: string }[];
    note: string;
    deliverables: string[];
    reflection: string;
    cta: {
      title: string;
      body: string;
      primary?: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  };
}

const cyberreyAssets = {
  hero: "/projects/Cyberrey/Cyberrey Hero Section.png",
  landing: "/projects/Cyberrey/Cyberrey Landing Page.png",
  mockup: "/projects/Cyberrey/Cyberrey Mockup.png",
  typography: "/projects/Cyberrey/Cyberrey_typography.png",
  colors: "/projects/Cyberrey/Cyberrey_Colorpalette.webp",
  navbars: "/projects/Cyberrey/Cyberrey_Navbars.webp",
  vendor: "/projects/Cyberrey/Cyberrey_Vendor.webp",
  solutions: "/projects/Cyberrey/Cyberrey_Solutions.webp",
  about: "/projects/Cyberrey/Cyberrey_Abouts.webp",
  blogs: "/projects/Cyberrey/Cyberrey_Blogs.webp",
  contact: "/projects/Cyberrey/Cyberrey_Contact.webp",
};

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "cyberrey-platform": {
    intro:
      "CyberRey is a cybersecurity solutions provider. This redesign focuses on building a more credible, structured, and visually engaging digital experience that communicates complex security services with clarity.",
    meta: [
      { label: "Industry", value: "Cybersecurity" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Tools", value: "Figma, Webflow" },
      { label: "Project Type", value: "Website Redesign" },
    ],
    overview: {
      title: "Building a more credible digital presence.",
      paragraphs: [
        "CyberRey provides cybersecurity services to organizations that need to protect their people, infrastructure, and data. Its website is often the first impression potential clients have of the company.",
        "The existing website contained relevant information but lacked a clear visual hierarchy, a confident visual identity, and an intuitive content structure.",
        "The goal was to transform it into a modern, professional digital experience that communicates services more effectively and makes the next step easier for visitors.",
      ],
      responsibilities: [
        "UX direction and content structure.",
        "High-fidelity interface design.",
        "Desktop and mobile UI design.",
        "Visual design system and reusable components.",
        "Interactive Figma prototype.",
      ],
      information: [
        { label: "Project", value: "CyberRey" },
        { label: "Industry", value: "Cybersecurity" },
        { label: "Project Type", value: "Website Redesign" },
        { label: "Role", value: "UI/UX Designer" },
        { label: "Tools", value: "Figma, Webflow" },
        {
          label: "Deliverables",
          value: "Website UI, Responsive Design, Design System, Prototype",
        },
      ],
    },
    challenge: {
      title: "Turning complexity into clarity.",
      points: [
        {
          title: "Unclear Visual Hierarchy",
          body: "Headlines, services, and supporting content competed for attention, making the value proposition difficult to understand.",
        },
        {
          title: "Credibility Gap",
          body: "The outdated visual language did not reflect the professionalism and reliability expected from a cybersecurity provider.",
        },
        {
          title: "Complex Service Presentation",
          body: "Technical capabilities were not communicated clearly enough for potential clients to understand the value of the services.",
        },
        {
          title: "Weak User Journey",
          body: "Calls to action and navigation lacked consistency, making it difficult for visitors to discover information and take the next step.",
        },
      ],
      objective:
        "Create a modern cybersecurity website that establishes trust, simplifies complex services, and guides visitors toward meaningful action.",
    },
    persona: {
      name: "Alex Morgan",
      role: "IT Director / Business Decision-Maker",
      industry: "Mid-sized to enterprise organizations",
      experience:
        "Experienced in business technology, but not necessarily a cybersecurity specialist.",
      bio: "Alex is responsible for evaluating technology partners and ensuring that the organization's digital infrastructure remains secure. When exploring cybersecurity providers, Alex needs clear information, credible expertise, and confidence that the company understands business security challenges.",
      groups: [
        {
          title: "Goals",
          icon: "goals",
          items: [
            "Find a reliable cybersecurity partner.",
            "Understand available security services.",
            "Evaluate expertise and credibility.",
            "Identify solutions relevant to business requirements.",
            "Contact a provider without unnecessary friction.",
          ],
        },
        {
          title: "Frustrations",
          icon: "frustrations",
          items: [
            "Overly technical descriptions.",
            "Unclear service offerings.",
            "Outdated or unprofessional websites.",
            "Missing information about capabilities.",
            "Confusing navigation and unclear calls to action.",
          ],
        },
        {
          title: "Needs",
          icon: "needs",
          items: [
            "Clear and understandable service information.",
            "Strong visual credibility.",
            "Easy navigation.",
            "Organized content.",
            "Accessible contact options.",
          ],
        },
      ],
      consideration:
        "The website needed to communicate technical expertise without overwhelming non-specialist decision-makers. Clarity, credibility, and easy information discovery became important priorities.",
      authenticity:
        "This is a conceptual persona based on the project's intended audience and design considerations. It was not created through formal user interviews or validated research.",
    },
    direction: {
      title: "A visual language built around trust and clarity.",
      intro:
        "The visual direction balances a modern cybersecurity aesthetic with a clear, structured interface. Deep indigo surfaces, violet accents, expressive abstract visuals, and strong typography establish a distinctive identity while keeping the content easy to understand.",
      principles: [
        {
          title: "Trust & Credibility",
          body: "A composed visual language with consistent spacing, typography, and structured content.",
        },
        {
          title: "Clarity & Simplicity",
          body: "Complex services presented through understandable, organized content blocks.",
        },
        {
          title: "Visual Hierarchy",
          body: "Clear typography, contrast, and layout composition guide visitors through important information.",
        },
        {
          title: "Consistency & Scalability",
          body: "Reusable visual styles and components maintain consistency across website pages.",
        },
      ],
      colors: [
        { name: "Midnight", hex: "#0C0C24", role: "Base" },
        { name: "Deep Indigo", hex: "#18183C", role: "Surface" },
        { name: "Indigo", hex: "#24246C", role: "Elevated" },
        { name: "Primary Indigo", hex: "#303084", role: "Brand" },
        { name: "Violet", hex: "#3C3CA8", role: "Accent" },
        { name: "Bright Violet", hex: "#4628B4", role: "Highlight" },
        { name: "Text", hex: "#E4E4F0", role: "Type" },
      ],
      paletteNote: "Sampled from the final CyberRey interface.",
      typographyImage: cyberreyAssets.typography,
      typographyCaption:
        "Actual project type board — display, heading, body, and label styles.",
      typographyRoles: ["Display", "Heading", "Body", "Label"],
      componentsImage: cyberreyAssets.navbars,
      componentsCaption:
        "Navigation states and shared interface components from the design system.",
      componentFamilies: [
        "Buttons",
        "Navigation",
        "Service cards",
        "Content panels",
        "Badges",
        "Form elements",
      ],
    },
    showcase: {
      lead: "The finished website, shown page by page. Each screen extends the same visual system while giving its content room to lead.",
      desktop: {
        src: cyberreyAssets.landing,
        alt: "CyberRey full homepage design",
        label: "Homepage",
        title: "The complete homepage",
        description:
          "Scroll through the full desktop page — hero, services, proof, and closing call to action.",
      },
      gallery: [
        {
          src: cyberreyAssets.hero,
          alt: "CyberRey homepage hero section",
          label: "Homepage",
          caption: "The first screen: value proposition, atmosphere, and a clear action.",
        },
        {
          src: cyberreyAssets.solutions,
          alt: "CyberRey solutions page",
          label: "Solutions",
          caption: "Services organized around what the visitor is trying to solve.",
        },
        {
          src: cyberreyAssets.about,
          alt: "CyberRey about page",
          label: "About",
          caption: "Company and credibility content arranged for scanning.",
        },
        {
          src: cyberreyAssets.contact,
          alt: "CyberRey contact page",
          label: "Contact",
          caption: "A focused conversion page with one clear next step.",
        },
        {
          src: cyberreyAssets.blogs,
          alt: "CyberRey insights page",
          label: "Insights",
          caption: "An editorial layout for security content and longer reading.",
        },
        {
          src: cyberreyAssets.vendor,
          alt: "CyberRey vendor page",
          label: "Vendors",
          caption: "A partner-focused page that extends the system without new patterns.",
        },
        {
          src: cyberreyAssets.mockup,
          alt: "CyberRey desktop and mobile project mockup",
          label: "Presentation",
          caption: "The final interface presented across desktop and mobile.",
        },
      ],
    },
    responsive: {
      lead: "Desktop and mobile were designed together, so the experience stays coherent as the screen changes.",
      desktop: {
        src: cyberreyAssets.landing,
        alt: "CyberRey desktop website",
        label: "Desktop",
        title: "The complete desktop experience",
        description:
          "Scroll the full page inside the frame to see how the sections build.",
      },
      points: [
        {
          title: "Navigation",
          body: "Navigation adapts to smaller screens while keeping the service hierarchy reachable.",
        },
        {
          title: "Layout",
          body: "Multi-column layouts reorganize into a single, readable flow for mobile.",
        },
        {
          title: "Typography",
          body: "Typography scales while preserving the hierarchy established on desktop.",
        },
        {
          title: "Actions",
          body: "Important actions remain visible and accessible across screen sizes.",
        },
      ],
      decisions: [
        {
          title: "Lead With the Value Proposition",
          body: "The hero communicates what CyberRey offers before introducing decorative visuals, helping visitors understand the company's purpose immediately.",
          image: cyberreyAssets.hero,
          imageAlt: "CyberRey hero detail",
          caption: "Hero: offer first.",
        },
        {
          title: "Organize Navigation Around Visitor Intent",
          body: "Services and solutions are presented through a clear structure, making information easier to discover.",
          image: cyberreyAssets.navbars,
          imageAlt: "CyberRey navigation detail",
          caption: "Navigation: clear structure.",
        },
        {
          title: "Use Visual Restraint to Establish Credibility",
          body: "A controlled palette, consistent typography, and structured layouts create a more cohesive and professional brand experience.",
          image: cyberreyAssets.colors,
          imageAlt: "CyberRey color palette detail",
          caption: "Palette: controlled and repeatable.",
        },
      ],
    },
    outcomes: {
      items: [
        {
          title: "Clearer Visual Hierarchy",
          body: "A more structured interface with clear messaging and reading order.",
        },
        {
          title: "Stronger Brand Presentation",
          body: "A consistent visual language that better reflects a professional cybersecurity provider.",
        },
        {
          title: "Improved Service Clarity",
          body: "Organized service content that makes complex offerings easier to explore.",
        },
        {
          title: "Responsive Design Foundation",
          body: "Desktop and mobile experiences designed with consistent visual hierarchy.",
        },
        {
          title: "Reusable Design System",
          body: "Shared typography, colors, and components for consistent future design work.",
        },
      ],
      note: "These are design outcomes, not measured analytics. No verified performance data was available for this project.",
      deliverables: [
        "Website UI Design",
        "Responsive Interface Design",
        "Visual Design System",
        "Reusable UI Components",
        "Interactive Figma Prototype",
      ],
      reflection:
        "One key takeaway from this project was that credibility is built through the entire experience, not just the homepage. Consistent visual language, clear information structure, and thoughtful design decisions work together to make a brand feel more trustworthy.",
      cta: {
        title: "Explore the final CyberRey experience.",
        body: "See the live site, or step through the complete design and prototype in Figma.",
        primary: {
          label: "Live Site",
          href: "https://cyberrey.com/",
        },
        secondary: {
          label: "View Full Design",
          href: "https://www.figma.com/proto/zVgjqRKZdXfZZ5vREeBkqk/Cyberrey-New?node-id=330-2441&p=f&viewport=2571%2C260%2C0.03&t=iNsf4dFXvkq6qVSc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=330%3A2441&page-id=318%3A188",
        },
      },
    },
  },
};
