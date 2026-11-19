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

export const caseStudyDetails: Record<string, CaseStudyDetail> = {};
