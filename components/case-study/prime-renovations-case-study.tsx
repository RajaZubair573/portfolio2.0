"use client";

import Image from "next/image";
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

const p = (file: string) => `/projects/Prime Renovations/${file}`;

const assets = {
  mockup: p("Prime Renovations Mockup.png"),
  palette: p("Prime_Colorpalette.webp"),
  typography: p("Prime_Renovations_Typography.png"),
  projects: p("Prime_Projects.webp"),
  process: p("Prime_Process.webp"),
  blog: p("Prime_Blogs.webp"),
  about: p("Prime_About.webp"),
  landing: p("Prime Renovations Landing Page.png"),
};

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "brand", label: "Brand" },
  { id: "website", label: "Website" },
  { id: "responsive", label: "Responsive" },
  { id: "showcase", label: "Full Website" },
  { id: "outcomes", label: "Outcomes" },
];

const projectDetails = [
  ["Project", "Prime Renovations Website"],
  ["Focus", "Premium home renovation services"],
  ["Scope", "Website design and brand presentation"],
  ["Experience", "Project work, process, brand story, editorial, inquiry"],
  ["Category", "Luxury Renovation / Web Design"],
];

const scopeAreas = [
  {
    n: "01",
    icon: "work",
    title: "Project work",
    body: "Completed renovations are presented with enough space for materials, finish, and spatial character to carry the quality of the work.",
  },
  {
    n: "02",
    icon: "process",
    title: "Process",
    body: "The project journey is explained from the first conversation through construction, giving clients a clearer view of how the work is delivered.",
  },
  {
    n: "03",
    icon: "story",
    title: "Brand story",
    body: "An about page establishes the standards, integrity, and people behind Prime Renovations rather than relying on project imagery alone.",
  },
  {
    n: "04",
    icon: "inquiry",
    title: "Inquiry path",
    body: "Prospective clients have a direct route to start a consultation or request a quote without navigating a complicated experience.",
  },
];

const challenges = [
  {
    n: "01",
    title: "Luxury without distance",
    body: "The design needed to feel premium and considered without making the first conversation feel intimidating for a prospective client.",
  },
  {
    n: "02",
    title: "Craftsmanship needs proof",
    body: "Renovation quality is judged through detail. Project photography and the process story needed room to do the persuading.",
  },
  {
    n: "03",
    title: "A simple next step",
    body: "High-value clients still need a clear, low-friction route to ask a question, request a quote, or arrange a consultation.",
  },
];

const objectives = [
  "Present renovation work with enough space and clarity to communicate quality.",
  "Establish a restrained visual identity that feels premium and trustworthy.",
  "Explain the process so prospective clients understand how a project is delivered.",
  "Make project, process, about, and editorial content easy to explore.",
  "Keep the path to a consultation or quote clear at every stage.",
  "Maintain visual consistency across the full website.",
];

const brandPrinciples = [
  {
    title: "Photography first",
    body: "Project imagery is treated as the primary brand asset. The interface gives it room rather than competing with it.",
  },
  {
    title: "Editorial pacing",
    body: "Spacing, type hierarchy, and section rhythm create a calmer reading experience closer to a design publication than a service brochure.",
  },
  {
    title: "Restrained interface",
    body: "Navigation, buttons, and supporting detail stay quiet so the work and the next step remain easy to find.",
  },
  {
    title: "Material warmth",
    body: "The palette supports the warmth of natural finishes without turning the site into a decorative theme.",
  },
];

const websiteFeatures = [
  {
    n: "01",
    title: "Project presentation",
    body: "Project pages give completed renovation work room to breathe, with photography and detail leading the experience.",
  },
  {
    n: "02",
    title: "Process clarity",
    body: "The process page explains the sequence, standards, and communication behind a Prime Renovations project.",
  },
  {
    n: "03",
    title: "Trust and proof",
    body: "Testimonial content and the brand story support confidence before a prospective client makes contact.",
  },
  {
    n: "04",
    title: "Clear inquiry",
    body: "Contact and consultation actions are kept visible and direct, without unnecessary steps.",
  },
  {
    n: "05",
    title: "Simple navigation",
    body: "Projects, process, about, blog, and contact are structured as clear top-level destinations.",
  },
  {
    n: "06",
    title: "Editorial extension",
    body: "A blog presence extends the site beyond project photography and gives the brand a broader voice.",
  },
];

const responsiveChecks = [
  {
    title: "Navigation",
    body: "The desktop navigation collapses into a dedicated menu control on smaller screens, keeping Projects, Our Process, About, Blog, and Contact accessible.",
  },
  {
    title: "Layout",
    body: "Content recomposes for a narrow viewport without horizontal overflow at 390px.",
  },
  {
    title: "Typography",
    body: "The H1 scales from 64px on desktop to approximately 35px on mobile, preserving hierarchy at a smaller size.",
  },
  {
    title: "Project content",
    body: "Desktop grids give way to a narrower reading flow instead of compressing the full composition into the viewport.",
  },
  {
    title: "Inquiry",
    body: "Contact remains available from the mobile navigation and page content.",
  },
  {
    title: "Brand continuity",
    body: "The same content hierarchy, palette, and imagery carry across breakpoints.",
  },
];

const outcomes = [
  {
    n: "01",
    title: "Premium presentation",
    body: "A refined visual direction aligned with high-end renovation work and the expectations of design-conscious clients.",
  },
  {
    n: "02",
    title: "Clearer project storytelling",
    body: "Project work has the space to carry the quality of the craftsmanship rather than being reduced to thumbnails.",
  },
  {
    n: "03",
    title: "Process confidence",
    body: "The process page gives prospective clients a clearer understanding of how a project moves from conversation to delivery.",
  },
  {
    n: "04",
    title: "Simpler inquiry path",
    body: "A direct route to a consultation or quote keeps the next step visible without adding friction.",
  },
  {
    n: "05",
    title: "Responsive foundation",
    body: "The design remains composed across desktop and mobile widths, with responsive behavior verified on the implemented site.",
  },
  {
    n: "06",
    title: "Consistent brand presence",
    body: "Project, process, about, and editorial pages share one visual language and one clear point of view.",
  },
];

function ScopeIcon({ type }: { type: string }) {
  if (type === "work") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m3 15 5-4 4 3 3-2 6 4" />
        <circle cx="8" cy="8" r="1.5" />
      </svg>
    );
  }

  if (type === "process") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h4v4H4zM10 14h4v4h-4zM16 6h4v4h-4z" />
        <path d="M8 8h8M12 10v4" />
      </svg>
    );
  }

  if (type === "story") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

function ResponsiveBlueprint() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#101827] via-[#0b1120] to-[#080d18] p-5 md:p-7">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/10 blur-[80px]" />
      <div className="relative flex items-end justify-center gap-3 sm:gap-4">
        <div className="w-[48%]">
          <div className="overflow-hidden rounded-lg border border-white/15 bg-[#060a12] p-1.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]">
            <div className="rounded-md border border-white/[0.06] bg-[#0a0f1b]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-2.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <span className="ml-2 h-1 w-12 rounded-full bg-white/10" />
              </div>
              <div className="p-3">
                <div className="h-2 w-16 rounded-full bg-orange-300/50" />
                <div className="mt-2 h-4 w-3/4 rounded-sm bg-white/20" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
                <div className="mt-3 h-12 rounded-sm bg-gradient-to-br from-orange-300/20 to-white/[0.03]" />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-sm bg-white/[0.06]" />
                  <div className="h-8 rounded-sm bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[26%]">
          <div className="overflow-hidden rounded-lg border border-white/12 bg-[#060a12] p-1.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]">
            <div className="rounded-md border border-white/[0.06] bg-[#0a0f1b] p-2">
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-6 rounded-full bg-orange-300/40" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <div className="mt-3 h-3 w-3/4 rounded-sm bg-white/18" />
              <div className="mt-1 h-1.5 w-1/2 rounded-full bg-white/10" />
              <div className="mt-3 h-10 rounded-sm bg-gradient-to-br from-orange-300/18 to-white/[0.03]" />
              <div className="mt-2 h-7 rounded-sm bg-white/[0.05]" />
            </div>
          </div>
        </div>

        <div className="w-[17%]">
          <div className="overflow-hidden rounded-[1rem] border border-white/15 bg-[#060a12] p-1 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)]">
            <div className="rounded-[0.7rem] border border-white/[0.06] bg-[#0a0f1b] p-1.5">
              <div className="mx-auto h-1 w-4 rounded-full bg-white/15" />
              <div className="mt-3 h-2 w-10 rounded-sm bg-orange-300/40" />
              <div className="mt-1 h-1 w-8 rounded-full bg-white/10" />
              <div className="mt-2 h-8 rounded-sm bg-gradient-to-br from-orange-300/18 to-white/[0.03]" />
              <div className="mt-1.5 h-1 w-full rounded-full bg-white/10" />
              <div className="mt-1 h-1 w-3/4 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-4 text-center">
        {[
          ["1440", "Desktop"],
          ["768", "Tablet"],
          ["390", "Mobile"],
        ].map(([width, label]) => (
          <div key={label}>
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300/75">{width}px</p>
            <p className="mt-1 font-sans text-[11px] text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <p className="relative mt-4 text-center font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-600">
        Responsive blueprint - schematic only, not a screenshot
      </p>
    </div>
  );
}

export function PrimeRenovationsCaseStudy({
  caseStudy,
}: {
  caseStudy: CaseStudy;
  index?: number;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section
        id="hero"
        className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32"
        style={{ background: "linear-gradient(180deg,#080d1a 0%,#0d1420 46%,#10151f 100%)" }}
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
          className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full opacity-50 blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.14), rgba(30,41,59,0.1) 55%, transparent 76%)" }}
        />
        <div aria-hidden className="pointer-events-none absolute right-[8%] top-[30%] h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[110px]" />

        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              01 / Project hero / Case Study 07
            </div>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3">
                <span className="h-px w-10" style={{ background: "linear-gradient(90deg,#fb923c,transparent)" }} />
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-300/90">Web Design / Luxury Branding / Webflow</span>
              </div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">
                Prime Renovations Website
              </h1>
              <p className="hero-in mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-[1.15] text-slate-400">
                A refined digital home for premium renovation craftsmanship.
              </p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                Prime Renovations needed a website that communicates the quality of its renovation work and the precision behind it. The design presents the project work, explains the process, and gives prospective clients a clear path to start a conversation.
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#171b23] to-[#0b1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-orange-400/10 blur-[100px]" />
              <div aria-hidden className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px]" />
              <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Prime Renovations digital presence</span>
                <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-orange-300">Design preview</span>
              </div>
              <div className="relative mx-auto mt-5 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#070c16]">
                <Image
                  src={assets.mockup}
                  alt="Prime Renovations website mockup"
                  width={1264}
                  height={842}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1040px"
                  className="h-auto w-full"
                />
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
                {["Project work", "Process", "Brand story", "Inquiry"].map((surface, surfaceIndex) => (
                  <div key={surface} className="bg-[#0b1120] px-4 py-3">
                    <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-orange-300/80">{String(surfaceIndex + 1).padStart(2, "0")}</span>
                    <p className="mt-1 font-sans text-[12px] text-slate-300">{surface}</p>
                  </div>
                ))}
              </div>
              <p className="relative mt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Prime Renovations website presentation</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading
            index="02"
            label="Project overview & scope"
            title="A premium digital presence, built around the work."
            intro="Prime Renovations is a New York-based renovation company specializing in high-end residential work. The website needed to present the craftsmanship, process, and values behind that work with the clarity and restraint expected by high-value clients."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-['Rajdhani'] text-[clamp(1.2rem,2.1vw,1.65rem)] font-semibold leading-tight text-slate-200">
                  The work, the process, and the next step.
                </p>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400 md:text-base">
                  The website is organized around the questions a prospective client asks when considering a renovation partner: is the work good, is the process under control, and what happens next?
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-7 border-l-2 border-orange-400/60 pl-5">
                  <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                    Each part of the site supports one of those questions, from project imagery and process detail through the brand story and inquiry path.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {scopeAreas.map((area, areaIndex) => (
                  <Reveal key={area.n} delay={35 * areaIndex}>
                    <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-orange-400/25 hover:bg-white/[0.03]">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-orange-300/80">
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

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0e1523 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20" />
        <Container className="relative z-10">
          <SectionHeading
            index="03"
            label="Challenge & objectives"
            title="Premium work, presented with clarity."
            intro="The challenge was not simply to look luxurious. It was to make quality visible, explain the process with confidence, and keep the path to an inquiry straightforward for high-value clients."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>Central challenge</SectionLabel>
              </Reveal>
              <div className="mt-5 space-y-4">
                {challenges.map((challenge, challengeIndex) => (
                  <Reveal key={challenge.n} delay={40 * challengeIndex}>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{challenge.n}</span>
                      <h3 className="mt-2 font-['Rajdhani'] text-xl font-semibold text-slate-100">{challenge.title}</h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{challenge.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Design objectives</SectionLabel>
              </Reveal>
              <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {objectives.map((objective, objectiveIndex) => (
                  <Reveal key={objective} delay={30 * objectiveIndex}>
                    <div className="border-t border-white/[0.1] pt-4">
                      <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{String(objectiveIndex + 1).padStart(2, "0")}</span>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-slate-300">{objective}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={100}>
                <blockquote className="mt-10 border-l-2 border-orange-400/70 bg-gradient-to-r from-orange-400/[0.07] to-transparent py-5 pl-6 pr-4 md:pl-8">
                  <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                    The design had to make quality visible before a client ever picked up the phone.
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
            label="Brand direction"
            title="Quiet luxury, expressed through restraint."
            intro="The visual language leans on editorial spacing, strong project photography, and a restrained interface so the renovation work remains the focus. The brand does not need to announce itself loudly when the work already carries the evidence."
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
                    alt="Prime Renovations color palette"
                    aspect="aspect-[2150/1079]"
                    objectClass="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                  <figcaption className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    The palette is used as a quiet supporting layer, leaving project photography and content to carry the brand.
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
                    alt="Prime Renovations typography system"
                    aspect="aspect-[2687/1348]"
                    objectClass="object-contain"
                    sizes="(max-width: 1024px) 100vw, 720px"
                  />
                  <figcaption className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    A clear typographic hierarchy gives editorial moments, project descriptions, and inquiry content distinct roles.
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
                  {brandPrinciples.map((principle, principleIndex) => (
                    <Reveal key={principle.title} delay={40 * principleIndex}>
                      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                        <h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{principle.title}</h3>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{principle.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={120}>
                  <blockquote className="mt-6 border-l-2 border-orange-400/60 pl-5">
                    <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                      The interface should feel like a well-finished room: calm, precise, and intentional.
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
            label="Website experience"
            title="A portfolio that behaves like a walkthrough."
            intro="The website is structured around the two things a high-value client needs in order to judge a renovation partner: the quality of the work and the confidence that the process is under control."
          />

          <Reveal className="mt-12">
            <ShowcaseFigure
              src={assets.projects}
              alt="Prime Renovations project work and portfolio pages"
              label="Project work"
              title="Renovation work given room to breathe"
              description="Project pages present completed work through large imagery and detail-focused layouts, allowing materials, finish, and spatial character to carry the quality of the renovation."
              aspect="aspect-[4510/2345]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <Reveal className="mt-14">
            <ShowcaseFigure
              src={assets.process}
              alt="Prime Renovations process page design"
              label="Process"
              title="A clearer view of how the work is delivered"
              description="The process page explains the project journey, standards, and communication behind a Prime Renovations project, giving clients confidence before construction begins."
              aspect="aspect-[4445/2312]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteFeatures.map((feature, featureIndex) => (
              <Reveal key={feature.n} delay={35 * featureIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{feature.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{feature.title}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-12 border-l-2 border-orange-400/60 bg-gradient-to-r from-orange-400/[0.05] to-transparent py-5 pl-6 md:pl-8">
              <p className="font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                The site answers three questions in order: Is the work good? Is the process under control? What happens next?
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="responsive" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading
            index="06"
            label="Responsive experience"
            title="Composed at every width."
            intro="The responsive experience was reviewed against the implemented website at desktop and mobile widths. No mobile-specific design assets were supplied, so this section documents the live behavior rather than recreating it with fabricated screenshots."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-5">
              <ResponsiveBlueprint />
              <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                Verified at 1440px and 390px viewport widths
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Verified responsive behavior</SectionLabel>
              </Reveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {responsiveChecks.map((check, checkIndex) => (
                  <Reveal key={check.title} delay={35 * checkIndex}>
                    <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-orange-300/70">{String(checkIndex + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-['Rajdhani'] text-xl font-semibold text-slate-100">{check.title}</h3>
                      <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{check.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={80}>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <p className="font-sans text-sm leading-relaxed text-slate-400">
                    The desktop-to-mobile relationship keeps the same content priorities while navigation, layout density, and type scale adapt to the device.
                  </p>
                  {caseStudy.liveUrl ? (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500 no-underline transition-colors duration-300 hover:text-orange-300"
                    >
                      Review live behavior <ArrowUpRight />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="showcase" className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#060a12 0%,#080d18 55%,#060a12 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-15" />
        <Container className="relative z-10 max-w-[1320px]">
          <SectionHeading
            index="07"
            label="Complete website showcase"
            title="The complete website, from first impression to inquiry."
            intro="The full landing page brings the brand, project work, process, and inquiry path into one continuous experience. The supporting pages extend that experience into the brand story and editorial content."
          />

          <Reveal className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Complete landing page</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300">
                Scroll to explore <span aria-hidden>&darr;</span>
              </span>
            </div>
            <BrowserMockup
              src={assets.landing}
              alt="Full Prime Renovations desktop landing page design"
              url="primerenovationsnyc.com"
              scroll
              heightClass="h-[320px] sm:h-[420px] lg:h-[500px]"
              width={1920}
              height={10406}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview - full desktop landing page, not a live website
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Supporting pages</SectionLabel>
              <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">Brand story and editorial</span>
            </div>
            <div className="mt-6 grid gap-x-6 gap-y-12 md:grid-cols-2">
              <ShowcaseFigure
                src={assets.blog}
                alt="Prime Renovations blog page designs"
                label="Editorial"
                title="Blog and renovation perspective"
                description="Editorial layouts extend the brand beyond project photography with insights, updates, and a broader point of view on renovation."
                aspect="aspect-[4510/2345]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
              <ShowcaseFigure
                src={assets.about}
                alt="Prime Renovations about page design"
                label="Brand story"
                title="The people and standards behind the work"
                description="The about page establishes the standards, integrity, and people behind Prime Renovations, giving the portfolio a human context."
                aspect="aspect-[5582/2903]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
              {["Project work", "Process", "Brand story", "Editorial", "Inquiry"].map((page, pageIndex) => (
                <div key={page} className="bg-[#0a101b] px-5 py-4">
                  <span className="font-['Space_Mono'] text-[8px] tracking-[0.16em] text-orange-300/70">{String(pageIndex + 1).padStart(2, "0")}</span>
                  <p className="mt-1.5 font-sans text-sm text-slate-300">{page}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/[0.08] pt-5 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
              All website previews are image-based design assets, not live interactive pages
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0d1525 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading
            index="08"
            label="Outcomes & reflection"
            title="A premium presence that makes the next step clear."
          />

          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-400/[0.08] via-white/[0.02] to-transparent p-6 md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-400/10 blur-[90px]" />
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-300/85">Design outcome</span>
              <blockquote className="relative mt-5 max-w-4xl font-['Rajdhani'] text-[clamp(1.35rem,3vw,2.1rem)] font-medium leading-snug text-slate-100">
                A website that presents Prime Renovations as a considered, high-end renovation partner, with project work and process given equal weight.
              </blockquote>
              <p className="relative mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-400">
                The result is a more coherent digital presence: one that lets the work speak, explains how a project is delivered, and keeps the path to a consultation or quote clear.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, outcomeIndex) => (
              <Reveal key={outcome.n} delay={35 * outcomeIndex}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{outcome.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{outcome.title}</h3>
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
                  The work reinforced how much premium web design depends on restraint. The strongest signals are not extra decoration; they are the space around the work, the clarity of the process, and the confidence of a simple next step. The design keeps the interface quiet so the renovation work remains the focus.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Project focus</SectionLabel></Reveal>
              <ul className="mt-4">
                {[
                  "Premium brand presentation",
                  "Project and process storytelling",
                  "Responsive website behavior",
                  "Testimonial and trust content",
                  "Consultation and inquiry path",
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

        </Container>
      </section>
    </main>
  );
}
