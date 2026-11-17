"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import { BrowserMockup } from "./browser-mockup";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import {
  ArrowUpRight,
  AssetFrame,
  BackLink,
  ComponentButton,
  Container,
  SectionHeading,
  SectionLabel,
  ShowcaseFigure,
} from "./ui";

const a = (file: string) => `/projects/Axion/${file}`;

const assets = {
  mockup: a("Axion-Mockup.png"),
  landing: a("Axion Main Landing Page.png"),
  mobileLanding: a("axion Mobile Landing Page.png"),
  palette: a("Axion_colorpalette.png"),
  typography: a("Axion_typography.png"),
  products: a("Axion_Products_Pages.webp"),
  projects: a("Axion_Projects_Pages.webp"),
  blog: a("Axion_Blogs_Pages.webp"),
  aboutContact: a("Axion_AC_Pages.webp"),
  order: a("Axion_Order_Pages.webp"),
  profile: a("Axion_Profile_Pages.webp"),
  mobileView: a("Axion_Mobile_View.webp"),
  dashboards: a("Axion_Dashboards.webp"),
};

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Scope" },
  { id: "challenge", label: "Challenge" },
  { id: "brand", label: "Brand" },
  { id: "website", label: "Website" },
  { id: "mobile", label: "Mobile" },
  { id: "dashboard", label: "Dashboard" },
  { id: "outcomes", label: "Outcomes" },
];

const projectDetails = [
  ["Project", "Axion Lighting E-Commerce"],
  ["Role", "UI/UX Designer"],
  ["Scope", "End-to-end product design"],
  ["Deliverables", "Brand identity, e-commerce website, responsive mobile experience, dashboard, design system"],
  ["Category", "E-commerce / Product Design"],
];

const scopeAreas = [
  {
    n: "01",
    icon: "brand",
    title: "Brand identity",
    body: "The visual direction, palette, typography, and foundational identity that every other interface inherits.",
  },
  {
    n: "02",
    icon: "website",
    title: "E-commerce website",
    body: "The complete shopping experience, from product discovery and presentation through the purchase journey.",
  },
  {
    n: "03",
    icon: "mobile",
    title: "Responsive experience",
    body: "The mobile adaptation of the storefront, preserving hierarchy, usability, and brand consistency on smaller screens.",
  },
  {
    n: "04",
    icon: "dashboard",
    title: "Dashboard",
    body: "A complete dashboard interface designed as part of the broader Axion ecosystem rather than a separate product.",
  },
];

const challenges = [
  {
    n: "01",
    t: "Establish the brand first",
    b: "The identity had to be defined before the digital experience could take shape, giving every interface a clear visual starting point.",
  },
  {
    n: "02",
    t: "Make lighting compelling",
    b: "The storefront needed to present lighting products with enough presence and clarity to feel premium in a visual category.",
  },
  {
    n: "03",
    t: "Organize product discovery",
    b: "Collections, product listings, and product details needed a clear structure that could guide customers without friction.",
  },
  {
    n: "04",
    t: "Carry consistency to mobile",
    b: "The experience had to remain recognizable and usable when the layout, navigation, and content density changed.",
  },
  {
    n: "05",
    t: "Design a different interface",
    b: "The dashboard needed to serve an operational purpose while still belonging to the same Axion product ecosystem.",
  },
  {
    n: "06",
    t: "Unify four surfaces",
    b: "Brand, website, mobile, and dashboard had to feel connected rather than like four disconnected design exercises.",
  },
];

const objectives = [
  "Establish a consistent brand foundation.",
  "Create a visually compelling e-commerce experience.",
  "Make product discovery and shopping intuitive.",
  "Design responsive layouts with a consistent experience.",
  "Build a complete dashboard interface.",
  "Create reusable visual and component foundations.",
];

const uxDirection = [
  {
    t: "Product presentation",
    b: "Large imagery and clear information hierarchy let lighting products carry the experience.",
  },
  {
    t: "Guided discovery",
    b: "Collections and category structures give customers a visible path into the catalogue.",
  },
  {
    t: "Consistent navigation",
    b: "Shared navigation patterns keep the storefront coherent across products, projects, and content.",
  },
  {
    t: "Connected purchase",
    b: "Product selection, cart, checkout, and order confirmation are designed as one continuous journey.",
  },
];

const journeySteps = [
  "Discover",
  "Browse collection",
  "View product",
  "Select options",
  "Add to cart",
  "Checkout",
  "Order confirmation",
];

const supportingPages = [
  {
    src: assets.projects,
    alt: "Axion projects and lighting inspiration pages",
    label: "Projects",
    title: "Lighting in real spaces",
    description: "Project showcases connect individual products to completed residential and commercial lighting installations.",
    aspect: "aspect-[9866/4411]",
  },
  {
    src: assets.blog,
    alt: "Axion blog and editorial page designs",
    label: "Editorial",
    title: "Blog and lighting guidance",
    description: "Editorial layouts support brand storytelling, product education, and lighting inspiration beyond the catalogue.",
    aspect: "aspect-[3947/1765]",
  },
  {
    src: assets.aboutContact,
    alt: "Axion about and contact page designs",
    label: "Brand & contact",
    title: "About and contact pages",
    description: "Dedicated brand and contact pages give customers and project clients a clear route to the business.",
    aspect: "aspect-[4488/2007]",
  },
  {
    src: assets.profile,
    alt: "Axion customer profile and account page designs",
    label: "Account",
    title: "Customer profile pages",
    description: "Account-related screens extend the storefront beyond browsing and purchasing into customer profile management.",
    aspect: "aspect-[4649/2079]",
  },
];

const mobileAdaptations = [
  {
    t: "Navigation & menus",
    b: "The storefront navigation is reorganized for a smaller screen while keeping every key destination accessible.",
  },
  {
    t: "Product browsing",
    b: "Collections and product listings retain the same visual hierarchy in a mobile-first layout.",
  },
  {
    t: "Product detail & selection",
    b: "Product imagery, information, and selectable options are sequenced for comfortable one-handed exploration.",
  },
  {
    t: "Cart & checkout",
    b: "The purchase journey is adapted into focused, step-by-step screens that reduce visual noise.",
  },
  {
    t: "Typography & spacing",
    b: "Type scale, spacing, and content density adjust to preserve readability on a narrow viewport.",
  },
  {
    t: "Brand continuity",
    b: "The accent color, imagery, surface treatments, and calls to action remain consistent with desktop.",
  },
];

const dashboardAreas = [
  {
    n: "01",
    t: "One system, a different job",
    b: "The dashboard translates the Axion visual language into an operational interface while remaining recognizably part of the same product.",
  },
  {
    n: "02",
    t: "Navigation and layout",
    b: "A persistent navigation structure and repeatable layout patterns keep the dashboard coherent across screens.",
  },
  {
    n: "03",
    t: "Information and controls",
    b: "The supplied screens show how data, information, and management controls are organized within a clear visual hierarchy.",
  },
  {
    n: "04",
    t: "Ecosystem continuity",
    b: "Typography, spacing, surfaces, and accent usage connect the dashboard back to the storefront identity.",
  },
];

const outcomes = [
  { n: "01", t: "Brand foundation", b: "A complete visual identity established before the digital interfaces were designed." },
  { n: "02", t: "E-commerce website", b: "A comprehensive storefront covering discovery, product presentation, and purchase." },
  { n: "03", t: "Responsive experience", b: "A mobile adaptation that retains the hierarchy and character of the desktop storefront." },
  { n: "04", t: "Dashboard interface", b: "A complete operational interface designed within the same product ecosystem." },
  { n: "05", t: "Design consistency", b: "A shared visual language across brand, website, mobile, and dashboard." },
  { n: "06", t: "Business relevance", b: "A website that now serves as an important source of new client acquisition for the business." },
];

function ScopeIcon({ type }: { type: string }) {
  if (type === "brand") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="13.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="14.5" r="2.5" />
        <path d="M12 22a4 4 0 0 0 4-4c0-2-2-3-4-3s-4 1-4 3a4 4 0 0 0 4 4Z" />
      </svg>
    );
  }

  if (type === "website") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="4" width="19" height="16" rx="2" />
        <path d="M2.5 8.5h19M6 6.4h.01M8.5 6.4h.01M11 6.4h.01" />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
        <path d="M10.5 5.5h3M11 18.5h2" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function PhoneMockup() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setShowHint(el.scrollTop + el.clientHeight < el.scrollHeight - 24);
    };

    el.addEventListener("scroll", check, { passive: true });
    check();
    return () => el.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[292px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-60 blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(225,184,87,0.16), transparent 68%)" }}
      />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#05080f] p-2.5 shadow-[0_35px_90px_-24px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[#050810]">
          <div aria-hidden className="absolute left-1/2 top-2.5 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/15" />
          <div ref={scrollRef} className="relative h-[560px] overflow-y-auto bg-[#050810] hide-scrollbar sm:h-[620px]">
            <Image
              src={assets.mobileLanding}
              alt="Full Axion mobile landing page design"
              width={390}
              height={10786}
              sizes="(max-width: 640px) 82vw, 292px"
              className="h-auto w-full"
            />
            <div
              className="pointer-events-none sticky bottom-0 left-0 right-0 flex justify-center pb-5 transition-opacity duration-500"
              style={{ opacity: showHint ? 1 : 0 }}
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3.5 py-1.5 backdrop-blur-md">
                <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.2em] text-white/75">Scroll to explore</span>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#e1b857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AxionCaseStudy({
  caseStudy,
  index,
  next,
  previous,
}: {
  caseStudy: CaseStudy;
  index: number;
  next?: CaseStudy;
  previous?: CaseStudy | null;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section
        id="hero"
        className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32"
        style={{ background: "linear-gradient(180deg,#080d1a 0%,#0a1020 44%,#0b1120 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full opacity-55 blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(225,184,87,0.16), rgba(30,41,59,0.1) 55%, transparent 76%)" }}
        />
        <div aria-hidden className="pointer-events-none absolute right-[6%] top-[32%] h-[340px] w-[340px] rounded-full bg-orange-500/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e1b857]" />
              01 — Project hero / Case study {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3">
                <span className="h-px w-10" style={{ background: "linear-gradient(90deg,#e1b857,transparent)" }} />
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-[#e1b857]/90">UI/UX Design / E-commerce / Product Design</span>
              </div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">
                Axion Lighting E-Commerce
              </h1>
              <p className="hero-in mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.15rem,2.4vw,1.8rem)] font-medium leading-[1.15] text-slate-400">
                A complete digital commerce experience, designed from the ground up.
              </p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                Axion is a premium lighting e-commerce platform with a complete digital ecosystem. The project spans brand identity, a full online store, a responsive mobile experience, and a dashboard, designed as one connected product rather than a collection of separate interfaces.
              </p>
              <div className="hero-in mt-7 flex flex-wrap gap-2">
                {["Brand identity", "E-commerce website", "Mobile experience", "Dashboard"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Project details</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                {projectDetails.map(([label, value], detailIndex) => (
                  <div key={label} className={detailIndex === 3 ? "col-span-2" : undefined}>
                    <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                    <dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101a2f] to-[#0a1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#e1b857]/10 blur-[100px]" />
              <div aria-hidden className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />
              <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Axion digital ecosystem</span>
                <span className="rounded-full border border-[#e1b857]/25 bg-[#e1b857]/10 px-3 py-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-[#e1b857]">Design preview</span>
              </div>
              <div className="relative mx-auto mt-5 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#070c16]">
                <Image
                  src={assets.mockup}
                  alt="Axion lighting e-commerce and brand mockup"
                  width={1607}
                  height={862}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1040px"
                  className="h-auto w-full"
                />
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
                {["Brand identity", "Storefront", "Mobile experience", "Dashboard"].map((surface, surfaceIndex) => (
                  <div key={surface} className="bg-[#0a1120] px-4 py-3">
                    <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-[#e1b857]/80">{String(surfaceIndex + 1).padStart(2, "0")}</span>
                    <p className="mt-1 font-sans text-[12px] text-slate-300">{surface}</p>
                  </div>
                ))}
              </div>
              <p className="relative mt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Axion brand and storefront presentation</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading
            index="02"
            label="Project overview & scope"
            title="More than an online store. A complete digital experience."
            intro="Axion started from scratch and required a cohesive design foundation across four connected experiences. The work covered the brand, the storefront, the mobile adaptation, and the operational dashboard."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-['Rajdhani'] text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-tight text-slate-200">
                  One brand. Four surfaces. A single experience.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400 md:text-base">
                  The project was not a series of isolated screens. Each deliverable inherited the same visual language and had to work as part of a wider customer and business experience.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-7 border-l-2 border-[#e1b857]/60 pl-5">
                  <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                    Brand identity set the direction. The website applied it to commerce. The mobile experience adapted it. The dashboard extended it into operations.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {scopeAreas.map((area, areaIndex) => (
                  <Reveal key={area.n} delay={35 * areaIndex}>
                    <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#e1b857]/25 hover:bg-white/[0.03]">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#e1b857]/80">
                          <ScopeIcon type={area.icon} />
                        </span>
                        <span className="font-['Space_Mono'] text-[9px] tracking-[0.18em] text-slate-600">{area.n}</span>
                      </div>
                      <h3 className="mt-5 font-['Rajdhani'] text-xl font-semibold text-slate-100">{area.title}</h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{area.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1324 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20" />
        <Container className="relative z-10">
          <SectionHeading
            index="03"
            label="Challenge & design objectives"
            title="Designing an entire digital experience from zero."
            intro="The complexity was not one difficult screen. It was establishing a coherent system before there was an interface to react to, then carrying that system across four very different surfaces."
          />
          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, challengeIndex) => (
              <Reveal key={challenge.n} delay={35 * challengeIndex}>
                <div className="h-full border-t border-white/[0.1] pt-5">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#e1b857]/70">{challenge.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{challenge.t}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{challenge.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-14 border-l-2 border-[#e1b857]/70 bg-gradient-to-r from-[#e1b857]/[0.07] to-transparent py-5 pl-6 pr-4 md:pl-8">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-[#e1b857]/85">Design objectives</span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {objectives.map((objective) => (
                  <li key={objective} className="font-sans text-sm leading-relaxed text-slate-200">• {objective}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="brand" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading
            index="04"
            label="Brand identity & visual foundation"
            title="Building the brand before building the experience."
            intro="The identity established the visual language that would carry through the website, mobile experience, and dashboard. It needed to feel premium and technical enough for architectural lighting, while staying warm and approachable for residential customers."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-8 lg:col-span-7">
              <Reveal>
                <figure>
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <SectionLabel>Color palette</SectionLabel>
                    <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">Supplied brand asset</span>
                  </div>
                  <AssetFrame
                    src={assets.palette}
                    alt="Axion brand color palette"
                    aspect="aspect-[2687/1348]"
                    objectClass="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                  <figcaption className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    The brand palette pairs a deep, architectural foundation with a warm accent that carries through product imagery and interface details.
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={70}>
                <figure>
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <SectionLabel>Typography</SectionLabel>
                    <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">Supplied brand asset</span>
                  </div>
                  <AssetFrame
                    src={assets.typography}
                    alt="Axion typography system"
                    aspect="aspect-[2687/1348]"
                    objectClass="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                  <figcaption className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    A clear typographic hierarchy supports editorial brand moments, dense product information, and the more utilitarian needs of the dashboard.
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <SectionLabel>Design reasoning</SectionLabel>
                </Reveal>
                <div className="mt-4 space-y-4">
                  {[
                    ["A premium foundation", "The identity avoids decorative excess and lets lighting imagery, typography, and spacing carry the sense of quality."],
                    ["A system, not a logo", "Color, type, visual hierarchy, and interface styling were defined as reusable foundations rather than one-off styling decisions."],
                    ["Continuity by design", "The same visual rules move from the storefront to mobile and into the dashboard, keeping the ecosystem recognizable."],
                  ].map(([title, body], reasoningIndex) => (
                    <Reveal key={title} delay={40 * reasoningIndex}>
                      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                        <h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{title}</h3>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={120}>
                  <blockquote className="mt-6 border-l-2 border-[#e1b857]/60 pl-5">
                    <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                      “The brand had to work as a logo, a product page, and a dashboard.”
                    </p>
                  </blockquote>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="website" className="border-t border-white/[0.06] py-20 md:py-28" style={{ background: "#060a12" }}>
        <Container>
          <SectionHeading
            index="05"
            label="E-commerce website experience"
            title="A storefront designed around the product."
            intro="From the full landing page through product discovery, project inspiration, editorial content, and the order journey, the website was designed as one continuous shopping experience."
          />

          <Reveal className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Complete landing page</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e1b857]/30 bg-[#e1b857]/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#e1b857]">
                Scroll to explore <span aria-hidden>↓</span>
              </span>
            </div>
            <BrowserMockup
              src={assets.landing}
              alt="Full Axion desktop landing page design"
              url="axionlights.com"
              scroll
              heightClass="h-[440px] sm:h-[540px] lg:h-[660px]"
              width={1920}
              height={10030}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview — full desktop landing page, not a live website
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {uxDirection.map((item, itemIndex) => (
              <Reveal key={item.t} delay={35 * itemIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#e1b857]/70">{String(itemIndex + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{item.t}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={70}>
            <div className="mt-12 rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-8">
              <SectionLabel>Shopping journey</SectionLabel>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {journeySteps.map((step, stepIndex) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-sm text-slate-300">{step}</span>
                    {stepIndex < journeySteps.length - 1 ? <span className="text-[#e1b857]/70">→</span> : null}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">
                The journey connects inspiration and browsing with product evaluation, option selection, and a clear purchase flow through to confirmation.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <ShowcaseFigure
              src={assets.products}
              alt="Axion product discovery, listing, and product detail page designs"
              label="Product experience"
              title="Discovery, listing, and product detail"
              description="Collection browsing, product listings, and product detail directions establish a clear path from first impression to product evaluation."
              aspect="aspect-[5590/2882]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-14">
            <ShowcaseFigure
              src={assets.order}
              alt="Axion shopping cart, checkout, and order confirmation page designs"
              label="Purchase journey"
              title="Cart, checkout, and order review"
              description="Order-related screens carry the shopping experience through cart, checkout, and order confirmation with a consistent hierarchy."
              aspect="aspect-[4488/2007]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Supporting website pages</SectionLabel>
              <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">Structured gallery</span>
            </div>
            <div className="mt-6 grid gap-x-6 gap-y-12 md:grid-cols-2">
              {supportingPages.map((page) => (
                <div key={page.label} className="min-w-0">
                  <ShowcaseFigure
                    src={page.src}
                    alt={page.alt}
                    label={page.label}
                    title={page.title}
                    description={page.description}
                    aspect={page.aspect}
                    objectClass="object-contain"
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-12 border-t border-white/[0.08] pt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
              All website previews are image-based design assets, not live interactive pages
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="mobile" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading
            index="06"
            label="Responsive mobile experience"
            title="The same storefront, designed for the hand."
            intro="The mobile experience is not a compressed desktop layout. Navigation, product browsing, product detail presentation, selection, cart, and checkout were all considered within a smaller viewport and the same visual language."
          />

          <Reveal className="mt-12">
            <ShowcaseFigure
              src={assets.mobileView}
              alt="Axion mobile storefront screen overview"
              label="Mobile screen overview"
              title="A consistent experience across smaller screens"
              description="The supplied mobile designs show how the storefront adapts its navigation, product presentation, and purchase journey while retaining the Axion visual identity."
              aspect="aspect-[7816/2110]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-5">
              <PhoneMockup />
              <p className="mt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Scroll inside the phone — full mobile landing page
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>How the experience adapts</SectionLabel>
              </Reveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {mobileAdaptations.map((item, itemIndex) => (
                  <Reveal key={item.t} delay={35 * itemIndex}>
                    <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-[#e1b857]/70">{String(itemIndex + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-['Rajdhani'] text-lg font-semibold text-slate-100">{item.t}</h3>
                      <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{item.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={80}>
                <p className="mt-6 border-l-2 border-[#e1b857]/50 pl-5 font-sans text-sm leading-relaxed text-slate-400">
                  The desktop-to-mobile relationship is deliberate: the hierarchy, accent color, imagery, and calls to action remain recognizable while layout density, type scale, spacing, and touch targets adapt to the device.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="dashboard" className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#060a12 0%,#080d18 55%,#060a12 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-15" />
        <Container className="relative z-10 max-w-[1320px]">
          <SectionHeading
            index="07"
            label="Complete dashboard experience"
            title="The interface behind the storefront."
            intro="The dashboard extends Axion into the operational side of the business. It shares the same visual foundation as the storefront while serving a different purpose: presenting information, supporting management tasks, and bringing structure to day-to-day work."
          />

          <Reveal className="mt-12">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-10 -top-12 bottom-0 -z-10 opacity-70"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(225,184,87,0.2), transparent 66%)", filter: "blur(44px)" }}
              />
              <BrowserMockup
                src={assets.dashboards}
                alt="Axion dashboard interface screens"
                url="axionlights.com/admin"
                aspect="aspect-[8363/2782]"
                width={8363}
                height={2782}
                sizes="(max-width: 1400px) 94vw, 1300px"
              />
            </div>
            <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Image-based dashboard preview — not a live product</p>
              <a
                href={assets.dashboards}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500 no-underline transition-colors duration-300 hover:text-[#e1b857]"
              >
                Open full-resolution preview <ArrowUpRight />
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {dashboardAreas.map((area, areaIndex) => (
              <Reveal key={area.n} delay={35 * areaIndex}>
                <div className="border-t border-white/[0.1] pt-5">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#e1b857]/70">{area.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{area.t}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{area.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={90}>
            <div className="mt-14 border-l-2 border-[#e1b857]/60 bg-gradient-to-r from-[#e1b857]/[0.05] to-transparent py-5 pl-6 md:pl-8">
              <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                “The dashboard is not a separate identity. It is the same Axion system, applied to operations.”
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1426 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading
            index="08"
            label="Business impact, outcomes & reflection"
            title="A digital experience built to support real business growth."
          />

          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-[#e1b857]/20 bg-gradient-to-br from-[#e1b857]/[0.08] via-white/[0.02] to-transparent p-6 md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e1b857]/10 blur-[90px]" />
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-[#e1b857]/85">Business outcome</span>
              <blockquote className="relative mt-5 max-w-4xl font-['Rajdhani'] text-[clamp(1.35rem,3vw,2.1rem)] font-medium leading-snug text-slate-100">
                “The Axion website became an important digital touchpoint for the business, helping the client attract and receive new client inquiries through its online presence.”
              </blockquote>
              <p className="relative mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-400">
                The result is a complete digital presence that supports both product discovery and direct business enquiries, rather than a storefront that only exists to display a catalogue.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, outcomeIndex) => (
              <Reveal key={outcome.n} delay={35 * outcomeIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#e1b857]/70">{outcome.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{outcome.t}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{outcome.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Reflection</SectionLabel></Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                  Designing Axion reinforced how much of product design happens between surfaces. The brand had to hold up from a homepage to a product page, from desktop to mobile, and from a customer-facing storefront to an operational dashboard. The balance between brand expression and usability was the constant: enough visual character to feel premium, enough clarity to remain practical. The work was less about making every screen look identical and more about giving each interface the same underlying logic.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Project focus</SectionLabel></Reveal>
              <ul className="mt-4">
                {["Brand identity and visual foundation", "Product discovery and shopping experience", "Responsive mobile adaptation", "Dashboard within the same ecosystem", "Consistency across every interface"].map((item, itemIndex) => (
                  <Reveal key={item} delay={30 * itemIndex}>
                    <li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3">
                      <span className="font-sans text-[13px] text-slate-300">{item}</span>
                      <span className="font-['Space_Mono'] text-[9px] text-slate-600">{String(itemIndex + 1).padStart(2, "0")}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {(caseStudy.liveUrl || caseStudy.link) ? (
            <Reveal delay={80}>
              <div className="mt-14 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {caseStudy.liveUrl ? <ComponentButton href={caseStudy.liveUrl} external>View Live Site</ComponentButton> : null}
                {caseStudy.link ? <ComponentButton href={caseStudy.link} external variant={caseStudy.liveUrl ? "outline" : "primary"}>View Full Design</ComponentButton> : null}
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={100}>
            <div className="mt-16 border-t border-white/[0.08] pt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Case study navigation</span>
                <Link href="/case-studies" className="inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 no-underline transition-colors duration-300 hover:text-[#e1b857]">
                  All case studies <ArrowUpRight />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {previous ? (
                  <Link href={`/case-studies/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 no-underline transition-colors duration-300 hover:border-[#e1b857]/30">
                    <div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Previous</div>
                    <h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-[#e1b857]">{previous.title}</h3>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link href={`/case-studies/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 text-right no-underline transition-colors duration-300 hover:border-[#e1b857]/30">
                    <div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Next</div>
                    <h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-[#e1b857]">{next.title}</h3>
                  </Link>
                ) : null}
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-6 py-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.14em] text-slate-300 no-underline transition-all duration-300 hover:border-[#e1b857]/40 hover:text-[#e1b857]"
                >
                  View All Case Studies <ArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
