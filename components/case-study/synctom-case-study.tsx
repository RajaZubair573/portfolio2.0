"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

const s = (file: string) => `/projects/Synctom/${file}`;

const assets = {
  wordmark: s("loo.png"),
  mark: s("logo.png"),
  mockup: s("Synctom.png"),
  palette: s("Synctom_Colorpalette.webp"),
  typography: s("Synctom_typography.png"),
  landing: s("Synctom_LandingPage.webp"),
  service: s("Synctom_ServicePage.webp"),
  project: s("Synctom_Project.webp"),
  about: s("Synctom_About.webp"),
  full: s("Landing-Page_Synctom.png"),
};

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "brand", label: "Identity" },
  { id: "strategy", label: "Strategy" },
  { id: "interface", label: "Key Pages" },
  { id: "showcase", label: "Full Website" },
  { id: "outcomes", label: "Outcomes" },
];

const projectDetails = [
  ["Project", "Synctom Digital Transformation"],
  ["My role", "Complete visual and design experience"],
  ["Scope", "Brand identity and website design"],
  ["Deliverables", "Logo, typography, color palette, visual identity, page designs, UI components"],
  ["Category", "Brand Identity / Web Design / UI/UX"],
];

const roleItems = [
  {
    n: "01",
    title: "Logo design and brand identity",
    body: "Established the visual direction around the Synctom name, mark, and overall identity system.",
  },
  {
    n: "02",
    title: "Brand color palette",
    body: "Defined the color language and gradient system used across the identity and website.",
  },
  {
    n: "03",
    title: "Typography and visual direction",
    body: "Selected the type pairing and set the hierarchy, scale, and supporting visual rules.",
  },
  {
    n: "04",
    title: "Website design from the ground up",
    body: "Built a complete website structure rather than redesigning a single isolated page.",
  },
  {
    n: "05",
    title: "Page structure and content presentation",
    body: "Organized services, portfolio, industries, about, and contact content into a clearer experience.",
  },
  {
    n: "06",
    title: "UI components and interface styling",
    body: "Styled the interface elements so the brand identity carried consistently into every page.",
  },
];

const problems = [
  "Understanding what the company actually does",
  "Exploring services beyond a single page",
  "Recognizing Synctom's professional expertise",
  "Building confidence in the brand",
  "Finding a clear way to get in touch",
];

const objectives = [
  "Establish a distinctive and professional visual identity.",
  "Improve brand credibility and consistency.",
  "Organize information into a more complete website experience.",
  "Introduce dedicated service pages.",
  "Improve content hierarchy and navigation.",
  "Make calls-to-action clear and accessible.",
  "Present Synctom as a capable software development company.",
];

const paletteColors = [
  { name: "Brand blue", value: "#0383CA" },
  { name: "Brand pink", value: "#EF3A61" },
  { name: "Primary gradient", value: "#4F46E5", note: "to #3B82F6" },
  { name: "Background", value: "#F9FAFB" },
  { name: "Surface", value: "#FFFFFF" },
  { name: "Hover", value: "#7781FF" },
  { name: "Border", value: "#E5E7EB" },
  { name: "Primary text", value: "#1A1A1A" },
  { name: "Secondary text", value: "#4B5563" },
  { name: "Tertiary text", value: "#9CA3AF" },
];

const typeSpecs = [
  { role: "H1 / Display", font: "Red Rose", size: "80px / Regular", tracking: "-0.5%" },
  { role: "H2 / Heading", font: "Red Rose", size: "66px / Bold", tracking: "-0.5%" },
  { role: "H3 / Heading", font: "Red Rose", size: "40px / Bold", tracking: "-0.5%" },
  { role: "H4 / Subheading", font: "Red Rose", size: "28px / Regular", tracking: "-0.25%" },
  { role: "Body large", font: "Inter", size: "18px / Regular", tracking: "160% line height" },
  { role: "Body medium", font: "Inter", size: "16px / Regular", tracking: "160% line height" },
  { role: "Captions", font: "Inter", size: "12px / Bold", tracking: "5% letter spacing" },
];

const strategyCards = [
  {
    n: "01",
    title: "Structure and navigation",
    body: "A single landing page became a structured website with clear destinations for services, industries, portfolio, about, insights, and contact.",
  },
  {
    n: "02",
    title: "Homepage hierarchy",
    body: "The homepage leads with the value proposition, then moves through services, defining projects, sectors, trust signals, and the final call to action.",
  },
  {
    n: "03",
    title: "Service presentation",
    body: "Dedicated service content gives each capability more room to be understood, rather than compressing everything into one page.",
  },
  {
    n: "04",
    title: "Visual consistency",
    body: "The palette, typography, spacing, and component styling carry the identity through the full website rather than living only in the logo.",
  },
  {
    n: "05",
    title: "Trust and credibility",
    body: "Project showcases, client logos, sector coverage, and team content help communicate that Synctom is an established digital partner.",
  },
  {
    n: "06",
    title: "Calls to action",
    body: "Start a Project, View our Work, Explore our Services, Get a Quote, and Get In Touch give visitors clear next steps at key moments.",
  },
];

const pageCoverage = [
  "Homepage hero and first impression",
  "Services and industries presentation",
  "Portfolio and project detail",
  "About and company information",
  "Contact and inquiry experience",
  "Navigation and footer",
];

const responsiveChecks = [
  {
    t: "Navigation",
    b: "The desktop navigation collapses into an Open menu control on mobile while keeping the main site destinations accessible.",
  },
  {
    t: "Typography",
    b: "The H1 scales from 60px on desktop to 30px on mobile, preserving hierarchy at a narrower viewport.",
  },
  {
    t: "Content flow",
    b: "Content reflows for a 390px viewport without horizontal overflow in the live implementation.",
  },
  {
    t: "Calls to action",
    b: "Primary actions such as Start a Project remain visible in the mobile flow.",
  },
  {
    t: "Brand continuity",
    b: "The same palette, typography, and page content carry across the desktop and mobile views.",
  },
];

const outcomes = [
  {
    n: "01",
    title: "Stronger brand presence",
    body: "A more coherent identity gives Synctom a distinctive and professional visual foundation.",
  },
  {
    n: "02",
    title: "Clearer service communication",
    body: "Dedicated service content and improved hierarchy make the company's capabilities easier to understand.",
  },
  {
    n: "03",
    title: "More complete website",
    body: "The transformation moves the brand from one landing page to a structured multi-page experience.",
  },
  {
    n: "04",
    title: "Consistent digital presentation",
    body: "Logo, type, color, and interface styling work together across the website.",
  },
  {
    n: "05",
    title: "Clearer path to contact",
    body: "Visible calls to action make it easier for prospective clients to start a conversation.",
  },
  {
    n: "06",
    title: "Professional credibility",
    body: "Portfolio, sector, and team content support a more confident presentation of Synctom's expertise.",
  },
];

const galleryItems = [
  { src: assets.mockup, alt: "Synctom website presentation mockup", label: "Website mockup" },
  { src: assets.palette, alt: "Synctom color palette", label: "Color palette" },
  { src: assets.typography, alt: "Synctom typography system", label: "Typography" },
  { src: assets.landing, alt: "Synctom landing page design", label: "Homepage" },
  { src: assets.service, alt: "Synctom service and industry pages", label: "Service pages" },
  { src: assets.project, alt: "Synctom portfolio and project detail pages", label: "Portfolio pages" },
  { src: assets.about, alt: "Synctom about and contact pages", label: "About and contact" },
];

function BrandRule() {
  return (
    <div
      aria-hidden
      className="h-px w-full"
      style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }}
    />
  );
}

function StructureDiagram() {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#101827] via-[#0b1120] to-[#080d18] p-5 md:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Before</p>
          <div className="mt-3 rounded-xl border border-white/[0.08] bg-[#070b14] p-4">
            <div className="h-2 w-16 rounded-full bg-white/15" />
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/[0.06]" />
            <div className="mt-2 h-1.5 w-4/5 rounded-full bg-white/[0.06]" />
            <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
            <div className="mt-4 h-10 rounded-lg bg-white/[0.04]" />
          </div>
          <p className="mt-2 font-sans text-[12px] text-slate-500">Single landing page</p>
        </div>
        <div>
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-[#5aa7e8]">After</p>
          <div className="mt-3 rounded-xl border border-white/[0.08] bg-[#070b14] p-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#0383CA]" />
              <span className="h-2 w-2 rounded-full bg-[#EF3A61]" />
              <span className="h-2 w-2 rounded-full bg-[#7781FF]" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {["Home", "Services", "Portfolio", "About", "Contact", "More"].map((item) => (
                <span key={item} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1.5 font-sans text-[10px] text-slate-400">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-3 h-10 rounded-lg" style={{ background: "linear-gradient(90deg,rgba(3,131,202,0.24),rgba(239,58,97,0.24))" }} />
          </div>
          <p className="mt-2 font-sans text-[12px] text-slate-500">Structured website experience</p>
        </div>
      </div>
      <p className="mt-5 border-t border-white/[0.08] pt-4 text-center font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-600">
        Structure schematic - not a screenshot
      </p>
    </div>
  );
}

function ResponsiveDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#101827] via-[#0b1120] to-[#080d18] p-5 md:p-7">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0383CA]/10 blur-[80px]" />
      <div className="relative mx-auto w-full max-w-[290px]">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#060a12] p-2 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)]">
          <div className="rounded-[1.7rem] border border-white/[0.06] bg-[#0a0f1b] p-4">
            <div className="mx-auto h-1 w-12 rounded-full bg-white/15" />
            <div className="mt-6 flex items-center justify-between">
              <div className="h-2 w-16 rounded-full bg-[#0383CA]/60" />
              <div className="h-4 w-4 rounded-full border border-white/20" />
            </div>
            <div className="mt-6 h-3 w-4/5 rounded-sm bg-white/20" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
            <div className="mt-5 h-24 rounded-xl" style={{ background: "linear-gradient(135deg,rgba(3,131,202,0.28),rgba(239,58,97,0.2))" }} />
            <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-5/6 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
            <div className="mt-5 h-8 rounded-lg bg-[#0383CA]/80" />
          </div>
        </div>
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-4 text-center">
        {[
          ["60px", "Desktop H1"],
          ["30px", "Mobile H1"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#5aa7e8]">{value}</p>
            <p className="mt-1 font-sans text-[11px] text-slate-500">{label}</p>
          </div>
        ))}
      </div>
      <p className="relative mt-4 text-center font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-600">
        Responsive behavior - schematic, not a screenshot
      </p>
    </div>
  );
}

function SynctomGallery() {
  const [active, setActive] = useState(0);
  const item = galleryItems[active];

  const go = (direction: number) => {
    setActive((current) => (current + direction + galleryItems.length) % galleryItems.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Synctom project gallery"
      className="mt-12 rounded-2xl border border-white/[0.08] bg-[#080d18] p-4 md:p-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionLabel>Project gallery</SectionLabel>
        <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">
          {String(active + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#05080f]">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/9]">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-subtle opacity-[0.12]" />
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="relative z-10 object-contain p-5 sm:p-8"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#05080f] to-transparent p-4 pt-12">
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-[#5aa7e8]">{item.label}</p>
        </div>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous gallery image"
          className="absolute left-3 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0f1b]/85 text-slate-200 no-underline transition-colors duration-300 hover:border-[#0383CA]/60 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next gallery image"
          className="absolute right-3 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0f1b]/85 text-slate-200 no-underline transition-colors duration-300 hover:border-[#0383CA]/60 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="hide-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {galleryItems.map((galleryItem, index) => (
          <button
            key={galleryItem.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View ${galleryItem.label}`}
            aria-current={active === index}
            className={`relative aspect-[4/3] w-[84px] shrink-0 overflow-hidden rounded-md border transition-all duration-300 sm:w-[104px] ${
              active === index
                ? "border-[#0383CA]/80 opacity-100 shadow-[0_0_0_1px_rgba(3,131,202,0.35)]"
                : "border-white/[0.08] opacity-55 hover:opacity-90"
            }`}
          >
            <Image
              src={galleryItem.src}
              alt=""
              fill
              sizes="110px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function SynctomCaseStudy({
  caseStudy,
  next,
  previous,
}: {
  caseStudy: CaseStudy;
  index?: number;
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
        style={{ background: "linear-gradient(180deg,#080d1a 0%,#0b1220 46%,#0d1423 100%)" }}
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
        <div aria-hidden className="pointer-events-none absolute -left-24 top-[18%] h-[420px] w-[420px] rounded-full bg-[#0383CA]/10 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute right-[6%] top-[28%] h-[360px] w-[360px] rounded-full bg-[#EF3A61]/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0383CA]" />
              01 / Project hero / Case Study 08
            </div>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3">
                <span className="h-px w-10" style={{ background: "linear-gradient(90deg,#0383CA,transparent)" }} />
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-[#5aa7e8]">Brand Identity / Web Design / UI/UX / Figma</span>
              </div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.5rem,5.7vw,4.6rem)] font-bold leading-[0.94] tracking-[-0.02em] text-slate-50">
                Synctom - Digital Solutions That Drive Innovation
              </h1>
              <p className="hero-in mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.15rem,2.4vw,1.8rem)] font-medium leading-[1.15] text-slate-400">
                Complete brand identity and website design.
              </p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                Synctom needed a stronger brand presence and a complete website experience to communicate its software development services and expertise. The project covered the identity foundations and the full digital presentation built from them.
              </p>
              <div className="hero-in mt-7 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
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
                  <div key={label} className={detailIndex === 3 || detailIndex === 4 ? "col-span-2" : undefined}>
                    <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                    <dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111a2b] to-[#0a101f] p-4 md:p-8">
              <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Synctom brand and digital presence</span>
                <span className="rounded-full border border-[#0383CA]/30 bg-[#0383CA]/10 px-3 py-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-[#5aa7e8]">Design preview</span>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.55fr_0.75fr]">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070c16]">
                  <Image
                    src={assets.mockup}
                    alt="Synctom website presentation mockup"
                    width={1536}
                    height={997}
                    priority
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="h-auto w-full"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl bg-[#F9FAFB] p-5 md:p-6">
                    <Image
                      src={assets.wordmark}
                      alt="Synctom wordmark"
                      width={762}
                      height={156}
                      sizes="(max-width: 1024px) 80vw, 260px"
                      className="h-auto w-full max-w-[280px]"
                    />
                    <div className="mt-5">
                      <BrandRule />
                    </div>
                    <p className="mt-4 font-sans text-[12px] leading-relaxed text-[#4B5563]">Primary wordmark and brand gradient</p>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F9FAFB] p-5 md:p-6">
                    <Image
                      src={assets.mark}
                      alt="Synctom brand mark"
                      width={244}
                      height={262}
                      sizes="72px"
                      className="h-16 w-auto"
                    />
                    <div>
                      <p className="font-sans text-[12px] font-semibold text-[#1A1A1A]">Brand mark</p>
                      <p className="mt-1 font-sans text-[11px] leading-relaxed text-[#4B5563]">Compact identity for smaller applications</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1b] p-5">
                    <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }} />
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">Delivered direction</p>
                    <p className="mt-2 font-['Rajdhani'] text-xl font-semibold text-slate-100">Identity to interface</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
                {["Logo system", "Brand foundation", "Website design", "UI components"].map((surface, surfaceIndex) => (
                  <div key={surface} className="bg-[#0a101f] px-4 py-3">
                    <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-[#5aa7e8]/80">{String(surfaceIndex + 1).padStart(2, "0")}</span>
                    <p className="mt-1 font-sans text-[12px] text-slate-300">{surface}</p>
                  </div>
                ))}
              </div>
              <p className="relative mt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Synctom identity and website presentation</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading
            index="02"
            label="Project overview & my role"
            title="Brand foundations first. Complete website second. One system throughout."
            intro="Synctom's existing presentation was limited to a single landing page. I handled the complete design experience, from the logo and visual identity through the page structure and final website interface."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-['Rajdhani'] text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-tight text-slate-200">
                  I owned the design from the brand up.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400 md:text-base">
                  This was not a single-page layout exercise. The identity had to be established first, then translated into a professional website with enough structure to explain what Synctom does and give visitors clear routes forward.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-7 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <BrandRule />
                  <p className="mt-4 font-sans text-[13px] leading-relaxed text-slate-400">
                    Logo, typography, color palette, visual identity, page structure, content presentation, UI styling, and overall consistency were all part of the same design responsibility.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {roleItems.map((role, roleIndex) => (
                  <Reveal key={role.n} delay={35 * roleIndex}>
                    <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#0383CA]/40 hover:bg-white/[0.03]">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] font-['Space_Mono'] text-[9px] text-[#5aa7e8]">
                          {role.n}
                        </span>
                        <span className="h-px w-10" style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }} />
                      </div>
                      <h3 className="mt-5 font-['Rajdhani'] text-xl font-semibold text-slate-100">{role.title}</h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{role.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0e1626 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20" />
        <Container className="relative z-10">
          <SectionHeading
            index="03"
            label="Challenge & design objectives"
            title="From one page to a company website."
            intro="The original site gave visitors too little to work with. It did not provide enough service detail, structure, or brand confidence to support a serious software development company."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>The original problem</SectionLabel>
              </Reveal>
              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                {problems.map((problem, problemIndex) => (
                  <Reveal key={problem} delay={30 * problemIndex}>
                    <div className="flex items-start gap-4 border-b border-white/[0.06] px-5 py-4 last:border-b-0">
                      <span className="mt-0.5 font-['Space_Mono'] text-[9px] text-[#EF3A61]">{String(problemIndex + 1).padStart(2, "0")}</span>
                      <p className="font-sans text-sm leading-relaxed text-slate-300">{problem}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={90}>
                <StructureDiagram />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Design objectives</SectionLabel>
              </Reveal>
              <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {objectives.map((objective, objectiveIndex) => (
                  <Reveal key={objective} delay={30 * objectiveIndex}>
                    <div className="border-t border-white/[0.1] pt-4">
                      <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#5aa7e8]">{String(objectiveIndex + 1).padStart(2, "0")}</span>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-slate-300">{objective}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={100}>
                <blockquote className="mt-10 border-l-2 border-[#0383CA]/70 bg-gradient-to-r from-[#0383CA]/[0.07] to-transparent py-5 pl-6 pr-4 md:pl-8">
                  <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                    The site had to prove capability before a visitor ever reached the contact form.
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="brand" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading
            index="04"
            label="Brand identity & visual foundation"
            title="A visual system built before the website."
            intro="The supplied project files define a complete identity: a wordmark and brand mark, a blue-to-pink palette with neutral support, a Red Rose and Inter type pairing, and a set of interface treatments that carry the identity into the website."
          />

          <Reveal className="mt-12">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="bg-[#F9FAFB] p-6 md:p-10">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-[#4B5563]">Primary wordmark</p>
                <Image
                  src={assets.wordmark}
                  alt="Synctom wordmark on light background"
                  width={762}
                  height={156}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="mt-8 h-auto w-full max-w-[520px]"
                />
                <div className="mt-8 max-w-[520px]">
                  <BrandRule />
                </div>
                <p className="mt-4 max-w-[520px] font-sans text-[13px] leading-relaxed text-[#4B5563]">
                  The wordmark is presented on a light surface so the original black artwork remains faithful and legible.
                </p>
              </div>
              <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-1">
                <div className="bg-[#FFFFFF] p-6 md:p-8">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-[#4B5563]">Brand mark</p>
                  <div className="mt-6 flex items-center justify-center rounded-xl bg-[#F9FAFB] p-6">
                    <Image
                      src={assets.mark}
                      alt="Synctom brand mark"
                      width={244}
                      height={262}
                      sizes="120px"
                      className="h-28 w-auto"
                    />
                  </div>
                  <p className="mt-5 font-sans text-[13px] leading-relaxed text-[#4B5563]">
                    A compact circular mark accompanies the wordmark for smaller brand applications.
                  </p>
                </div>
                <div className="relative overflow-hidden bg-[#0a0f1b] p-6 md:p-8">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }} />
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Brand gradient</p>
                  <div className="mt-6 h-24 rounded-xl" style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }} />
                  <p className="mt-5 font-sans text-[13px] leading-relaxed text-slate-400">
                    #0383CA to #EF3A61 is the core brand gradient used for identity-led moments.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <figure>
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <SectionLabel>Color palette</SectionLabel>
                    <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">Supplied brand asset</span>
                  </div>
                  <AssetFrame
                    src={assets.palette}
                    alt="Synctom color palette"
                    aspect="aspect-[2150/1079]"
                    objectClass="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                </figure>
              </Reveal>

              <Reveal className="mt-8">
                <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
                  {paletteColors.map((color, colorIndex) => (
                    <div key={color.name} className="flex items-center gap-3 bg-[#0b1120] px-4 py-3">
                      <span
                        className="h-8 w-8 shrink-0 rounded-lg border border-white/10"
                        style={{ background: color.value }}
                      />
                      <div className="min-w-0">
                        <p className="truncate font-sans text-[12px] text-slate-300">{color.name}</p>
                        <p className="font-['Space_Mono'] text-[9px] tracking-[0.12em] text-slate-500">
                          {color.value}{color.note ? ` / ${color.note}` : ""}
                        </p>
                      </div>
                      <span className="ml-auto font-['Space_Mono'] text-[8px] text-slate-700">{String(colorIndex + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <SectionLabel>Typography system</SectionLabel>
                </Reveal>
                <Reveal delay={60}>
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                    <AssetFrame
                      src={assets.typography}
                      alt="Synctom typography system"
                      aspect="aspect-[2687/1348]"
                      objectClass="object-contain"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>
                </Reveal>
                <Reveal delay={90}>
                  <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                    {typeSpecs.map((spec, specIndex) => (
                      <div key={spec.role} className="grid grid-cols-[1.1fr_0.8fr_1fr] gap-3 border-b border-white/[0.06] px-4 py-2.5 last:border-b-0">
                        <span className="font-sans text-[11px] text-slate-300">{spec.role}</span>
                        <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.1em] text-[#5aa7e8]">{spec.font}</span>
                        <span className="text-right font-['Space_Mono'] text-[8px] text-slate-500">{spec.size} / {spec.tracking}</span>
                        <span className="sr-only">{specIndex}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-5 border-l-2 border-[#0383CA]/60 pl-5 font-sans text-sm leading-relaxed text-slate-400">
                    Red Rose carries headings and key moments. Inter handles paragraphs, inputs, labels, and forms. The contrast keeps the identity expressive without compromising readability.
                  </p>
                </Reveal>
              </div>
            </aside>
          </div>

          <Reveal className="mt-14">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a101f] p-6 md:p-8">
              <SectionLabel>Visual language in interface</SectionLabel>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/[0.08] bg-[#F9FAFB] p-5">
                  <p className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-[#4B5563]">Primary action</p>
                  <span className="mt-4 inline-flex rounded-lg px-4 py-2 font-sans text-[12px] font-semibold text-white" style={{ background: "#0383CA" }}>
                    Get a Quote
                  </span>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-[#F9FAFB] p-5">
                  <p className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-[#4B5563]">Gradient moment</p>
                  <span className="mt-4 inline-flex rounded-lg px-4 py-2 font-sans text-[12px] font-semibold text-white" style={{ background: "linear-gradient(90deg,#0383CA,#EF3A61)" }}>
                    Start a Project
                  </span>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-[#F9FAFB] p-5">
                  <p className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-[#4B5563]">Support surface</p>
                  <div className="mt-4 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 font-sans text-[12px] text-[#4B5563]">
                    Clean neutral UI
                  </div>
                </div>
              </div>
              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">
                The same identity rules appear in the website's buttons, gradients, borders, surfaces, and content hierarchy, so the brand carries through the interface rather than sitting beside it.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="strategy" className="border-t border-white/[0.06] py-20 md:py-28" style={{ background: "#060a12" }}>
        <Container>
          <SectionHeading
            index="05"
            label="Website strategy & experience"
            title="The identity translated into a complete website."
            intro="The redesign turned the original single landing page into a structured experience with dedicated service content, stronger hierarchy, clearer navigation, and repeated opportunities to make contact."
          />

          <Reveal className="mt-12">
            <ShowcaseFigure
              src={assets.landing}
              alt="Synctom landing page design"
              label="Homepage"
              title="A stronger first impression"
              description="The homepage leads with the value proposition, then moves through services, defining projects, sectors, trust signals, and the final call to action."
              aspect="aspect-[2651/1353]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-14">
            <ShowcaseFigure
              src={assets.service}
              alt="Synctom service and industry page designs"
              label="Services & industries"
              title="Dedicated space for capabilities"
              description="Service and industry pages give each area more room to explain the offering, supporting the shift from one page to a complete company website."
              aspect="aspect-[4239/2162]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategyCards.map((card, cardIndex) => (
              <Reveal key={card.n} delay={35 * cardIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#5aa7e8]">{card.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{card.title}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#090f1d] p-6 md:p-8">
              <SectionLabel>Website destinations</SectionLabel>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Home", "Services", "Industries", "Portfolio", "About", "Insights", "Contact"].map((page, pageIndex) => (
                  <span key={page} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-sm text-slate-300">
                    <span className="font-['Space_Mono'] text-[8px] text-[#5aa7e8]">{String(pageIndex + 1).padStart(2, "0")}</span>
                    {page}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="interface" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading
            index="06"
            label="Interface design & key pages"
            title="A visual showcase of the actual interface."
            intro="The supplied page designs show the breadth of the work: homepage, services, portfolio, project detail, about, and contact. The strongest screens are presented here once, in a deliberate sequence."
          />

          <Reveal className="mt-12">
            <ShowcaseFigure
              src={assets.project}
              alt="Synctom portfolio and project detail pages"
              label="Portfolio & project detail"
              title="Work presented as evidence"
              description="Portfolio and detail pages give projects room to demonstrate the company's design and development work, from overview through process, tools, and outcomes."
              aspect="aspect-[4239/2162]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-14">
            <ShowcaseFigure
              src={assets.about}
              alt="Synctom about and contact pages"
              label="About & contact"
              title="The company behind the work"
              description="About and contact content gives the brand a human layer and a direct next step, connecting the portfolio back to the people and services behind it."
              aspect="aspect-[4756/2426]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
              {pageCoverage.map((page, pageIndex) => (
                <div key={page} className="flex items-center justify-between gap-4 bg-[#0b1120] px-5 py-4">
                  <span className="font-sans text-[13px] text-slate-300">{page}</span>
                  <span className="font-['Space_Mono'] text-[8px] text-slate-600">{String(pageIndex + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="showcase" className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#060a12 0%,#080d18 55%,#060a12 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-15" />
        <Container className="relative z-10 max-w-[1320px]">
          <SectionHeading
            index="07"
            label="Complete desktop & responsive showcase"
            title="The full website, plus how it behaves on mobile."
            intro="The full-page desktop design is presented as a scrollable screenshot preview. The responsive section documents behavior verified on the implemented site; no mobile or tablet screenshots were supplied or fabricated."
          />

          <Reveal className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Full-page desktop design</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0383CA]/30 bg-[#0383CA]/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-[#5aa7e8]">
                Scroll to explore <span aria-hidden>&darr;</span>
              </span>
            </div>
            <BrowserMockup
              src={assets.full}
              alt="Full Synctom desktop landing page design"
              url="synctom.com"
              scroll
              heightClass="h-[440px] sm:h-[560px] lg:h-[700px]"
              width={1920}
              height={9216}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview - full desktop landing page, not a live website
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-5">
              <ResponsiveDiagram />
              <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Verified at 1440px and 390px viewport widths
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Responsive behavior</SectionLabel>
              </Reveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {responsiveChecks.map((check, checkIndex) => (
                  <Reveal key={check.t} delay={35 * checkIndex}>
                    <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-[#5aa7e8]">{String(checkIndex + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-['Rajdhani'] text-lg font-semibold text-slate-100">{check.t}</h3>
                      <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{check.b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={80}>
                <p className="mt-6 border-l-2 border-[#0383CA]/60 pl-5 font-sans text-sm leading-relaxed text-slate-400">
                  The desktop and mobile views keep the same content priorities while navigation, type scale, and layout density adapt to the device. No mobile or tablet design files were included in the project folder.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={70}>
            <SynctomGallery />
          </Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0d1626 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading
            index="08"
            label="Outcomes, reflection & project navigation"
            title="A more complete identity and digital presence."
          />

          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-[#0383CA]/25 bg-gradient-to-br from-[#0383CA]/[0.09] via-white/[0.02] to-[#EF3A61]/[0.06] p-6 md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EF3A61]/10 blur-[90px]" />
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-[#5aa7e8]">Design transformation</span>
              <blockquote className="relative mt-5 max-w-4xl font-['Rajdhani'] text-[clamp(1.35rem,3vw,2.1rem)] font-medium leading-snug text-slate-100">
                Synctom moved from a single dated landing page to a coherent brand identity and a professional website built to communicate its services and expertise.
              </blockquote>
              <p className="relative mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-400">
                The value is qualitative: a more coherent identity, clearer service communication, and a digital presence that better matches the quality of the company's work.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, outcomeIndex) => (
              <Reveal key={outcome.n} delay={35 * outcomeIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-[#5aa7e8]">{outcome.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{outcome.title}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{outcome.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Reflection</SectionLabel></Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                  This project showed how much stronger a website becomes when the identity is designed as part of the same decision set. The logo, palette, typography, page structure, and interface styling all reinforce one another. Starting with the brand made the website more than a collection of pages; it made the digital experience feel like Synctom.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>What I handled</SectionLabel></Reveal>
              <ul className="mt-4">
                {[
                  "Logo and brand mark",
                  "Color palette and typography",
                  "Visual identity and UI styling",
                  "Complete website structure",
                  "Page designs and content presentation",
                ].map((item, itemIndex) => (
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
                <Link href="/case-studies" className="inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 no-underline transition-colors duration-300 hover:text-[#5aa7e8]">
                  All case studies <ArrowUpRight />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {previous ? (
                  <Link href={`/case-studies/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 no-underline transition-colors duration-300 hover:border-[#0383CA]/40">
                    <div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Previous</div>
                    <h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-[#5aa7e8]">{previous.title}</h3>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link href={`/case-studies/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 text-right no-underline transition-colors duration-300 hover:border-[#EF3A61]/40">
                    <div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Next</div>
                    <h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-[#ef7b96]">{next.title}</h3>
                  </Link>
                ) : null}
              </div>
              <div className="mt-10 text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-6 py-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.14em] text-slate-300 no-underline transition-all duration-300 hover:border-[#0383CA]/50 hover:text-[#5aa7e8]"
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
