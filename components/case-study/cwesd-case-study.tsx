"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { EditorialGallery, type GalleryItem } from "./editorial-gallery";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { ArrowUpRight, BackLink, ComponentButton, Container, SectionHeading, SectionLabel } from "./ui";

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "persona", label: "Persona" },
  { id: "architecture", label: "IA & UX" },
  { id: "system", label: "Design System" },
  { id: "showcase", label: "Showcase" },
  { id: "outcomes", label: "Outcomes" },
];

const c = (f: string) => `/projects/CWESD/${f}`;

const galleryItems: GalleryItem[] = [
  { src: c("CWESD - Mockup.png"), alt: "CWESD website mockup", label: "Mockup", caption: "Main CWESD website mockup." },
  { src: c("CWESD_typography.png"), alt: "CWESD typography system", label: "Typography", caption: "Typography system used in the CWESD design." },
  { src: c("CWESD_Colorpalette.webp"), alt: "CWESD color palette", label: "Color palette", caption: "Color palette for the CWESD visual identity." },
  { src: c("CWESD_Landingpage.webp"), alt: "CWESD landing page design", label: "Landing page", caption: "CWESD landing page design." },
];

const challenges = [
  { t: "01 — Inclusive Visual Identity", b: "Create a welcoming visual direction that appeals to the intended audience while maintaining a professional presentation." },
  { t: "02 — Clear Learning Content", b: "Present educational opportunities and platform information in a structured and understandable way." },
  { t: "03 — Intuitive Navigation", b: "Help visitors discover important information without unnecessary navigation complexity." },
  { t: "04 — Responsive Accessibility", b: "Ensure the experience remains usable and visually consistent across desktop and smaller screens." },
];

const goals = [
  "Improve content discoverability.",
  "Establish a recognizable visual identity.",
  "Simplify website navigation.",
  "Deliver a consistent responsive experience.",
];

const architecture = [
  { n: "01 — Platform Introduction", i: ["What CWESD offers.", "Its mission and purpose.", "Introduction to the learning platform."] },
  { n: "02 — Learning Opportunities", i: ["Educational content and learning information.", "Structured presentation of opportunities.", "Relevant platform offerings."] },
  { n: "03 — Mentorship & Community", i: ["Mentorship-related information.", "Community opportunities.", "Ways to engage with the platform."] },
  { n: "04 — Engagement & Navigation", i: ["Important calls to action.", "Contact or participation options.", "Clear website destinations."] },
];

const outcomes = [
  { t: "01 — Clearer Content Presentation", b: "Organized the platform’s information into a more structured visual experience." },
  { t: "02 — Consistent Visual Identity", b: "Established a cohesive presentation through typography, color, and layout." },
  { t: "03 — Improved Information Discoverability", b: "Focused on making important learning and platform information easier to explore." },
  { t: "04 — Responsive Design Direction", b: "Designed the website experience with consideration for different screen sizes." },
];

export function CwesdCaseStudy({ caseStudy, index, next, previous }: { caseStudy: CaseStudy; index: number; next?: CaseStudy; previous?: CaseStudy | null }) {
  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section id="hero" className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32" style={{ background: "linear-gradient(180deg,#080d1a 0%,#0a1020 46%,#0b1120 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[130px]" />
        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> Case study {String(index + 1).padStart(2, "0")} / Education</div>
          </div>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex flex-wrap items-center gap-3"><span className="h-px w-10 bg-gradient-to-r from-orange-500/70 to-transparent" /><span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">UI/UX Design · Education · Web Design · Mobile-First · Community</span></div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">CWESD Learning Platform</h1>
              <p className="hero-in mt-4 max-w-2xl font-['Rajdhani'] text-[clamp(1.15rem,2.4vw,1.8rem)] font-medium leading-[1.15] text-slate-400">Designing an inclusive learning experience that empowers women in technology.</p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">CWESD is a modern learning platform designed to make technology education more accessible through structured learning opportunities, mentorship, and community building.</p>
            </div>
            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Project metadata</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">{[["Project", "CWESD Learning Platform"], ["Industry", "Education / E-learning"], ["Platform", "Web / Responsive Website"], ["Role", "UI/UX Designer"], ["Tools", "Figma"], ["Focus", "Learning Experience, Website UI, Responsive Design"]].map(([l, v]) => (<div key={l}><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{l}</dt><dd className="mt-1.5 font-sans text-[13px] text-slate-300">{v}</dd></div>))}</dl>
            </aside>
          </div>
          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101a2f] to-[#0a1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-500/15 blur-[90px]" />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />
              <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f172a] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 truncate font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">CWESD Learning Platform</span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#0a0f1c]">
                  <Image src={c("CWESD - Mockup.png")} alt="CWESD website mockup" fill priority className="object-contain" sizes="(max-width: 1200px) 100vw, 1100px" />
                </div>
              </div>
              <p className="mt-6 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">CWESD desktop website mockup</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="02" label="Project overview" title="Creating a more engaging digital learning experience." />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 lg:col-span-7">
              <Reveal><p className="font-sans text-lg leading-relaxed text-slate-300">CWESD is a learning platform focused on supporting women in technology through educational content, mentorship, and community-oriented opportunities.</p></Reveal>
              <Reveal delay={40}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The design aims to bring these experiences together within a welcoming and professionally structured digital environment.</p></Reveal>
              <Reveal delay={80}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The focus was to create a clear website experience where visitors can understand the platform, explore its learning opportunities, and navigate its content with ease.</p></Reveal>
              <Reveal delay={120}><div className="border-t border-white/[0.08] pt-6"><SectionLabel>My contribution</SectionLabel><p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">Worked on the website&apos;s visual direction, interface design, content presentation, navigation structure, and responsive experience.</p></div></Reveal>
            </div>
            <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-10">
              <Reveal><SectionLabel>Project information</SectionLabel></Reveal>
              <dl className="mt-5">{[["Project", "CWESD"], ["Industry", "Education"], ["Platform", "Web"], ["Role", "UI/UX Designer"], ["Tool", "Figma"], ["Design Focus", "Learning Platform UI"], ["Deliverables", "Website UI, Responsive Design, Visual Design System"]].map(([l, v], i) => (<Reveal key={l} delay={25 * i}><div className="grid grid-cols-[120px_1fr] gap-4 border-t border-white/[0.06] py-3.5"><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">{l}</dt><dd className="font-sans text-[13px] text-slate-300">{v}</dd></div></Reveal>))}</dl>
            </aside>
          </div>
        </Container>
      </section>

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1324 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-25" />
        <Container className="relative z-10">
          <SectionHeading index="03" label="The challenge & design goals" title="Making technology education feel more accessible." intro="An educational platform needs to communicate its value clearly while helping visitors discover relevant learning opportunities. The challenge was to create an inclusive and engaging experience without sacrificing the professional credibility expected from an education-focused organization." />
          <div className="mt-14 grid gap-x-14 gap-y-8 md:grid-cols-2">{challenges.map((p, i) => (<Reveal key={p.t} delay={40 * i}><div className="border-t border-white/[0.1] pt-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100 md:text-2xl">{p.t}</h3><p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-slate-400">{p.b}</p></div></Reveal>))}</div>
          <Reveal delay={100}><div className="mt-14 grid gap-6 border-l-2 border-orange-500/70 bg-gradient-to-r from-orange-500/[0.06] to-transparent py-5 pl-6 pr-4 md:pl-8 lg:grid-cols-2 lg:items-start"><div><span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-400/80">Design objective</span><p className="mt-2 max-w-xl font-sans text-base leading-relaxed text-slate-200">Create a welcoming, organized, and responsive learning platform that communicates its purpose clearly and makes educational opportunities easier to explore.</p></div><div><span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Product goals</span><ul className="mt-3 grid gap-2 sm:grid-cols-2">{goals.map((g) => (<li key={g} className="font-sans text-sm text-slate-300">• {g}</li>))}</ul></div></div></Reveal>
        </Container>
      </section>

      <section id="persona" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="04" label="Target audience & user persona" title="A perspective grounded in the platform’s intended audience." intro="One conceptual persona based on the intended audience of the platform. This is not an interviewed user and not validated through formal research." />
          <Reveal className="mt-12">
            <article className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-orange-500/30 to-sky-500/30 font-['Rajdhani'] text-2xl font-bold text-slate-100">AM</div>
                    <div>
                      <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-300/80">The aspiring woman in tech</p>
                      <h3 className="mt-1 font-['Rajdhani'] text-3xl font-bold text-slate-100">Ayesha Malik</h3>
                      <p className="font-sans text-sm text-slate-400">Aspiring Technology Professional</p>
                    </div>
                  </div>
                  <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">Ayesha wants to build her knowledge and confidence in technology. She is looking for an approachable learning environment where she can discover relevant educational resources, develop practical skills, and explore mentorship and community opportunities.</p>
                  <p className="mt-4 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3 font-['Space_Mono'] text-[9px] uppercase tracking-[0.14em] text-slate-500">Conceptual persona — not validated through formal research</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
                  <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-4"><h4 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">Goals</h4><ul className="mt-3 space-y-2">{["Discover relevant technology courses.", "Develop practical skills.", "Find learning opportunities that match her interests.", "Explore mentorship opportunities.", "Connect with a supportive technology community."].map((it) => (<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div>
                  <div className="rounded-xl border border-orange-400/20 bg-orange-500/10 p-4"><h4 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">Frustrations</h4><ul className="mt-3 space-y-2">{["Difficulty finding relevant learning resources.", "Overwhelming educational platforms.", "Unclear course information.", "Limited visibility into mentorship opportunities.", "Confusing navigation."].map((it) => (<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4"><h4 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">Design considerations</h4><ul className="mt-3 space-y-2">{["Clear learning categories.", "Organized educational content.", "Accessible navigation.", "Welcoming visual language.", "Visible mentorship and community information.", "Responsive layouts."].map((it) => (<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div>
                </div>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-5"><SectionLabel>Shared user need</SectionLabel><p className="mt-2 font-sans text-base leading-relaxed text-slate-200">An accessible and welcoming digital environment that makes discovering learning opportunities and exploring technology education straightforward.</p></div>
            </article>
          </Reveal>
        </Container>
      </section>

      <section id="architecture" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading index="05" label="Information architecture & UX direction" title="Organizing learning around the user." intro="The website structure focuses on making the platform’s educational purpose, learning opportunities, and community-related information easy to discover." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{architecture.map((a, i) => (<Reveal key={a.n} delay={35 * i}><div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{a.n}</h3><ul className="mt-4 space-y-2">{a.i.map((it) => (<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div></Reveal>))}</div>
          <Reveal delay={80}><div className="mt-10 rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-7"><SectionLabel>Main user journey</SectionLabel><div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-sm text-slate-300">{["Website Entry", "Understand Platform", "Explore Learning Opportunities", "Discover Relevant Information", "Take the Next Step"].map((s, i, arr) => (<span key={s} className="flex items-center gap-2"><span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">{s}</span>{i < arr.length - 1 ? <span className="text-orange-400/70">→</span> : null}</span>))}</div><p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-slate-400">The design emphasizes clear content hierarchy and accessible navigation so visitors can understand the platform and explore its offerings without unnecessary friction.</p></div></Reveal>
        </Container>
      </section>

      <section id="system" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="06" label="Visual design & design system" title="Building a welcoming and professional visual identity." intro="The visual direction balances an approachable educational atmosphere with a polished and professional website presentation. Typography, color, and structured layouts work together to create a recognizable visual language." />
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel>Color palette</SectionLabel>
                <div className="mt-3 relative overflow-hidden rounded-xl border border-white/10 bg-[#070c16] p-2"><div className="relative aspect-[16/10] w-full"><Image src={c("CWESD_Colorpalette.webp")} alt="CWESD color palette" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 700px" /></div></div>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-slate-500">Actual supplied color palette asset shown without fabricated values.</p>
              </div>
              <div>
                <SectionLabel>Typography</SectionLabel>
                <div className="mt-3 relative overflow-hidden rounded-xl border border-white/10 bg-[#070c16] p-2"><div className="relative aspect-[16/10] w-full"><Image src={c("CWESD_typography.png")} alt="CWESD typography system" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 700px" /></div></div>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-slate-500">Typography presented from the supplied project asset.</p>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={60}>
              <SectionLabel>Visual direction</SectionLabel>
              <div className="mt-4 grid gap-4">{[["01 — Inclusivity", "A welcoming visual presentation that supports the platform’s intended audience."], ["02 — Clarity", "Organized information and readable typography."], ["03 — Consistency", "A cohesive design language across website sections."], ["04 — Accessibility", "Responsive layouts and readable interface elements."]].map(([t, b]) => (<div key={t} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{t}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{b}</p></div>))}</div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="showcase" className="border-t border-white/[0.06] py-20 md:py-32" style={{ background: "#060a12" }}>
        <Container>
          <SectionHeading index="07" label="Final design showcase & complete desktop experience" title="The complete CWESD experience." intro="Explore the full desktop website in a scrollable preview, alongside supplied visual assets and responsive design considerations." />

          <Reveal className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-[#080d18] p-4 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>Part A — Complete desktop website scroll experience</SectionLabel>
                  <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-slate-400">Scroll inside the browser preview to explore the actual full-page CWESD landing page from top to bottom.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300">Scroll to explore <span aria-hidden>↓</span></span>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f172a] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                  <span className="ml-3 truncate font-['Space_Mono'] text-[9px] uppercase tracking-[0.14em] text-slate-500">Desktop preview — CWESD landing page</span>
                </div>
                <div className="relative">
                  <div className="max-h-[72vh] overflow-y-auto overscroll-contain bg-white [scrollbar-width:thin]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c("CWESD Landing Page.png")} alt="Full CWESD desktop landing page" className="block h-auto w-full" loading="lazy" />
                  </div>
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1220]/70 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <div className="rounded-3xl border border-white/10 bg-[#080d18] p-4 md:p-7">
              <SectionLabel>Part B — Project gallery</SectionLabel>
              <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-slate-400">Supplied CWESD visual assets presented as a complementary gallery.</p>
              <div className="mt-6"><EditorialGallery items={galleryItems} title="CWESD" /></div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
              <SectionLabel>Part C — Responsive experience</SectionLabel>
              <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-slate-300">Responsive design considerations help maintain content readability, navigation clarity, and a consistent visual experience across different screen sizes.</p>
              <p className="mt-2 font-sans text-[12px] leading-relaxed text-slate-500">No dedicated mobile or tablet screenshots were fabricated for this presentation.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1426 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading index="08" label="Outcomes & reflection" title="A cohesive foundation for an inclusive learning experience." />
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map((o, i) => (<Reveal key={o.t} delay={35 * i}><div className="border-t border-white/[0.1] pt-4"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{o.t}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-slate-500">{o.b}</p></div></Reveal>))}</div>
          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Key reflection</SectionLabel></Reveal>
              <Reveal delay={60}><blockquote className="mt-5 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl"><span className="mr-1 text-3xl text-orange-500/70">“</span>Working on CWESD highlighted the importance of balancing visual identity with clear information architecture. An educational platform should not only look welcoming but also help visitors understand its purpose and discover relevant opportunities. The project reinforced how thoughtful typography, structured content, and responsive layouts can contribute to a more approachable digital learning experience.</blockquote></Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Project deliverables</SectionLabel></Reveal>
              <ul className="mt-4">{["Learning Platform Website UI.", "Homepage Design.", "Visual Design Direction.", "Typography System.", "Color Palette.", "Desktop Website Presentation.", "Responsive Design Considerations.", "Figma Prototype."].map((item, i) => (<Reveal key={item} delay={30 * i}><li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3"><span className="font-sans text-[13px] text-slate-300">{item}</span><span className="font-['Space_Mono'] text-[9px] text-slate-600">{String(i + 1).padStart(2, "0")}</span></li></Reveal>))}</ul>
            </div>
          </div>
          {(caseStudy.liveUrl || caseStudy.link) ? (
            <Reveal delay={80}>
              <div className="mt-14 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {caseStudy.liveUrl ? <ComponentButton href={caseStudy.liveUrl} external>Live Site</ComponentButton> : null}
                {caseStudy.link ? <ComponentButton href={caseStudy.link} external variant={caseStudy.liveUrl ? "outline" : "primary"}>View Full Design</ComponentButton> : null}
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      <nav aria-label="Case study navigation" className="border-t border-white/[0.06] py-16 md:py-20" style={{ background: "#05080f" }}>
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4"><span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Case study navigation</span><Link href="/case-studies" className="inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 no-underline transition-colors duration-300 hover:text-orange-300">All case studies <ArrowUpRight /></Link></div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {previous ? (<Link href={`/case-studies/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 no-underline"><div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Previous: {previous.title}</div><h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">{previous.title}</h3></Link>) : <div />}
            {next ? (<Link href={`/case-studies/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 text-right no-underline"><div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Next: {next.title}</div><h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">{next.title}</h3></Link>) : null}
          </div>
        </Container>
      </nav>
    </main>
  );
}
