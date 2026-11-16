"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { EditorialGallery } from "./editorial-gallery";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { ArrowUpRight, BackLink, ComponentButton, Container, SectionHeading, SectionLabel } from "./ui";
import { cn } from "@/lib/utils";

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "audience", label: "Personas" },
  { id: "architecture", label: "IA & Journeys" },
  { id: "system", label: "Design System" },
  { id: "showcase", label: "UI Showcase" },
  { id: "outcomes", label: "Outcomes" },
];

const r = (f: string) => `/projects/Reclaim/${f}`;

const challenges = [
  { t: "01 — Clarity during recovery", b: "Users recovering lost files may feel uncertain. The experience needs clear steps and feedback so actions feel understandable." },
  { t: "02 — Accessible to different users", b: "File recovery should be approachable for people with varying levels of technical comfort without exposing unnecessary complexity." },
  { t: "03 — Organizing multiple file types", b: "Photos, videos, audio, and documents must be easy to browse and distinguish throughout discovery and recovery." },
  { t: "04 — Confident recovery actions", b: "Preview, selection, and restore interactions should help users understand what they are about to recover before completing an action." },
];

const goals = [
  "Make file discovery and recovery feel simple and guided.",
  "Provide clear organization for different categories of recoverable files.",
  "Support preview and recovery interactions with understandable interface states.",
  "Maintain a consistent, trustworthy mobile UI across the core recovery journey.",
];

const personas = [
  {
    name: "Alex Morgan",
    role: "Everyday Phone User",
    bio: "Alex accidentally deleted important photos and wants a straightforward way to find and bring them back without dealing with technical recovery steps.",
    goals: ["Quickly scan for recently deleted files.", "Browse recoverable items by category.", "Preview files before restoring them.", "Recover selected files with confidence."],
    frus: ["Not knowing where deleted files can be found.", "Unclear progress or results during a scan.", "Worry about restoring the wrong files."],
    needs: ["Simple scanning flow.", "Clear file categories and previews.", "Understandable recovery actions and feedback."],
  },
  {
    name: "Sarah Williams",
    role: "Organized Content Keeper",
    bio: "Sarah stores a mix of photos, videos, audio, and documents on her device and wants an organized way to locate and recover specific items when something goes missing.",
    goals: ["Find specific file types efficiently.", "Review details before recovery.", "Recover multiple kinds of content from one place.", "Feel reassured throughout the process."],
    frus: ["Mixed file types being hard to sort through.", "Difficulty confirming what a file contains.", "Recovery steps that feel ambiguous."],
    needs: ["Structured file-type organization.", "Preview support across content types.", "Consistent, clear recovery states."],
  },
];

const architecture = [
  { n: "01 — Onboarding & entry", i: ["Introduce the recovery experience.", "Set expectations for scanning and discovery.", "Guide users into the main recovery flow."] },
  { n: "02 — Scan & discovery", i: ["Initiate file scanning.", "Surface recoverable content.", "Communicate scanning progress and results."] },
  { n: "03 — Browse & preview", i: ["Organize files by type (photos, videos, audio, documents).", "Review items before taking action.", "Support selection for recovery."] },
  { n: "04 — Recover & outcomes", i: ["Confirm recovery actions.", "Complete restoration steps.", "Provide clear outcome and supporting states."] },
];

const journeys = [
  { t: "Recover recently deleted photos", steps: ["Open Reclaim and start a scan.", "Browse discovered photo results.", "Preview and select items to restore.", "Complete recovery and see the outcome."] },
  { t: "Find and restore a specific document", steps: ["Enter the recovery experience.", "Navigate to document results.", "Review file details/preview.", "Recover the selected document."] },
];

const showcase = [
  { src: r("Reclaim-Mockup.png"), alt: "Reclaim mobile app mockup", label: "Hero mockup", caption: "Primary Reclaim mobile presentation mockup." },
  { src: r("Screen-1.png"), alt: "Reclaim mobile screen 1", label: "App screen", caption: "Supplied Reclaim interface screen." },
  { src: r("Screen-2.png"), alt: "Reclaim mobile screen 2", label: "App screen", caption: "Supplied Reclaim interface screen." },
  { src: r("Screen-3.png"), alt: "Reclaim mobile screen 3", label: "App screen", caption: "Supplied Reclaim interface screen." },
  { src: r("Design-System.png"), alt: "Reclaim design system", label: "Design system", caption: "Supplied Reclaim design system asset." },
  { src: r("Full-Design.png"), alt: "Reclaim full design overview", label: "Full design", caption: "Supplied full design overview showing broader UI coverage." },
];

const outcomes = [
  { t: "01 — Structured recovery journey", b: "Organized the experience from discovery and scanning through preview, recovery, and outcomes." },
  { t: "02 — Clear file organization", b: "Separated content types to make browsing and finding recoverable items more understandable." },
  { t: "03 — Consistent mobile interface", b: "Applied a cohesive visual language across core flows and supporting interface states." },
  { t: "04 — Comprehensive UI coverage", b: "Designed 25+ mobile screens supported by a design system and interactive prototype." },
];

export function ReclaimCaseStudy({ caseStudy, index, next, previous }: { caseStudy: CaseStudy; index: number; next?: CaseStudy; previous?: CaseStudy | null }) {
  const galleryItems = useMemo(() => showcase, []);

  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section id="hero" className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32" style={{ background: "linear-gradient(180deg,#080d1a 0%,#0a1020 46%,#0b1120 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[130px]" />
        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> Case study {String(index + 1).padStart(2, "0")} / Mobile app</div>
          </div>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3"><span className="h-px w-10 bg-gradient-to-r from-orange-500/70 to-transparent" /><span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">UI/UX Design / Mobile App</span></div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">Reclaim — Data Recovery App</h1>
              <p className="hero-in mt-4 max-w-2xl font-['Rajdhani'] text-[clamp(1.15rem,2.4vw,1.8rem)] font-medium leading-[1.15] text-slate-400">A mobile experience for discovering, previewing, and recovering lost files with clarity.</p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">Reclaim is designed to help users recover accidentally deleted photos, videos, audio, and documents through an intuitive, approachable mobile interface.</p>
            </div>
            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Project metadata</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">{[["Product", "Reclaim"], ["Category", "Data recovery / Utility"], ["Platform", "Mobile application"], ["Role", "UI/UX Designer"], ["Tools", "Figma"], ["Screens", "25+ mobile screens"], ["Deliverables", "UI design, design system, prototype"]].map(([l, v]) => (<div key={l}><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{l}</dt><dd className="mt-1.5 font-sans text-[13px] text-slate-300">{v}</dd></div>))}</dl>
            </aside>
          </div>
          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101a2f] to-[#0a1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-500/15 blur-[90px]" />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[100px]" />
              <div className="relative mx-auto max-w-4xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={r("Reclaim-Mockup.png")} alt="Reclaim mobile app mockup" fill priority className="object-contain" sizes="(max-width: 1200px) 100vw, 1000px" />
                </div>
              </div>
              <p className="mt-6 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Supplied Reclaim project mockup</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="02" label="Project overview" title="Making file recovery approachable on mobile." />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 lg:col-span-7">
              <Reveal><p className="font-sans text-lg leading-relaxed text-slate-300">Reclaim is a mobile data recovery application designed to help users recover lost or accidentally deleted files. The experience focuses on making file discovery, scanning, previewing, and recovery simple through an intuitive and approachable interface.</p></Reveal>
              <Reveal delay={40}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The product concept brings together the key moments of recovery — finding recoverable content, understanding what can be restored, and completing recovery actions — in a consistent mobile UI.</p></Reveal>
              <Reveal delay={80}><div className="border-t border-white/[0.08] pt-6"><SectionLabel>My contribution</SectionLabel><p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">UI/UX design for the core mobile recovery experience, including onboarding, file discovery and scanning, file browsing and preview, recovery interactions, supporting interface states, a design system, and an interactive prototype.</p></div></Reveal>
            </div>
            <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-10">
              <Reveal><SectionLabel>Project information</SectionLabel></Reveal>
              <dl className="mt-5">{[["Product", "Reclaim"], ["Category", "Mobile data recovery"], ["Platform", "Mobile application"], ["Role", "UI/UX Designer"], ["Tools", "Figma"], ["Scope", "25+ mobile screens"], ["Deliverables", "Design system, prototype"], ["File types", "Photos, videos, audio, documents"]].map(([l, v], i) => (<Reveal key={l} delay={25 * i}><div className="grid grid-cols-[120px_1fr] gap-4 border-t border-white/[0.06] py-3.5"><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">{l}</dt><dd className="font-sans text-[13px] text-slate-300">{v}</dd></div></Reveal>))}</dl>
            </aside>
          </div>
        </Container>
      </section>

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1324 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-25" />
        <Container className="relative z-10">
          <SectionHeading index="03" label="Challenge & product goals" title="Reducing uncertainty in the file recovery experience." intro="Recovering deleted files can feel stressful and unclear. The challenge was to design a mobile flow that helps users discover, understand, and recover content without unnecessary complexity." />
          <div className="mt-14 grid gap-x-14 gap-y-8 md:grid-cols-2">{challenges.map((p, i) => (<Reveal key={p.t} delay={40 * i}><div className="border-t border-white/[0.1] pt-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100 md:text-2xl">{p.t}</h3><p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-slate-400">{p.b}</p></div></Reveal>))}</div>
          <Reveal delay={100}>
            <div className="mt-14 border-l-2 border-orange-500/70 bg-gradient-to-r from-orange-500/[0.06] to-transparent py-5 pl-6 pr-4 md:pl-8">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-400/80">Product goals</span>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">{goals.map((g) => (<li key={g} className="font-sans text-sm leading-relaxed text-slate-200">• {g}</li>))}</ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="audience" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="04" label="Target audience & user personas" title="Designed for people who need to recover important content quickly." intro="Two conceptual personas based on the intended product use cases. These are not personas validated through interviews or formal research." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{personas.map((p, i) => (<Reveal key={p.name} delay={60 * i}><article className="relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-7"><div className="flex items-start gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-sky-500/40 to-orange-500/30 font-['Rajdhani'] text-xl font-bold text-slate-100">{p.name.split(" ").map(n => n[0]).join("")}</div><div><h3 className="font-['Rajdhani'] text-2xl font-bold text-slate-100">{p.name}</h3><p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300/80">{p.role}</p></div></div><p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">{p.bio}</p><div className="mt-6 grid gap-4 sm:grid-cols-3">{[["Goals", p.goals, "bg-sky-500/10 border-sky-400/20"], ["Pain points", p.frus, "bg-orange-500/10 border-orange-400/20"], ["Needs", p.needs, "bg-emerald-500/10 border-emerald-400/20"]].map(([title, items, cc]) => (<div key={title as string} className={cn("rounded-xl border p-4", cc as string)}><h4 className="font-['Rajdhani'] text-lg font-semibold text-slate-100">{title as string}</h4><ul className="mt-3 space-y-2">{(items as string[]).map((it) => (<li key={it} className="font-sans text-[12px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div>))}</div></article></Reveal>))}</div>
        </Container>
      </section>

      <section id="architecture" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading index="05" label="Information architecture & user journeys" title="A guided path from discovery to recovery." intro="The experience is organized around the core moments of mobile file recovery, helping users move from scanning to preview and restore with clear context." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{architecture.map((a, i) => (<Reveal key={a.n} delay={35 * i}><div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{a.n}</h3><ul className="mt-4 space-y-2">{a.i.map((it) => (<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div></Reveal>))}</div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">{journeys.map((j, i) => (<Reveal key={j.t} delay={60 + 40 * i}><div className="rounded-xl border border-white/[0.08] bg-[#090f1d] p-6"><SectionLabel>{`User journey ${i + 1}`}</SectionLabel><h3 className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-slate-100">{j.t}</h3><ol className="mt-4 space-y-3">{j.steps.map((s, si) => (<li key={s} className="flex gap-3"><span className="mt-0.5 font-['Space_Mono'] text-[10px] text-orange-400/80">{String(si + 1).padStart(2, "0")}</span><span className="font-sans text-sm leading-relaxed text-slate-400">{s}</span></li>))}</ol></div></Reveal>))}</div>
        </Container>
      </section>

      <section id="system" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="06" label="Visual design & design system" title="A clean, approachable interface for a sensitive task." intro="The visual direction prioritizes clarity, readability, and consistency to support users through file discovery and recovery. Supplied design assets are presented as-is to reflect Reclaim’s original visual identity." />
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <SectionLabel>Supplied design system asset</SectionLabel>
              <div className="mt-4 relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#070c16]">
                <Image src={r("Design-System.png")} alt="Reclaim design system" fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 700px" />
              </div>
              <p className="mt-4 font-sans text-[11px] leading-relaxed text-slate-500">Visual system details are shown from supplied project assets only.</p>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={60}>
              <SectionLabel>Design principles</SectionLabel>
              <ul className="mt-4 grid gap-3">{["1. Keep recovery steps clear and easy to follow.", "2. Present file information in an organized, scannable way.", "3. Make preview and recovery actions understandable before confirmation.", "4. Maintain consistent patterns across flows and supporting states."].map((p) => (<li key={p} className="border-t border-white/[0.08] pt-3 font-sans text-sm leading-relaxed text-slate-300">{p}</li>))}</ul>
              <div className="mt-8 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                <SectionLabel>Coverage</SectionLabel>
                <p className="mt-3 font-sans text-sm leading-relaxed text-slate-400">The Reclaim design scope includes 25+ mobile screens, a reusable visual/design system, and an interactive prototype. A curated set of supplied screens is showcased below.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="showcase" className="border-t border-white/[0.06] py-20 md:py-28" style={{ background: "#060a12" }}>
        <Container>
          <Reveal><EditorialGallery items={galleryItems} title="Reclaim" /></Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1426 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading index="08" label="Outcomes & reflection" title="A clearer foundation for mobile file recovery." />
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map((o, i) => (<Reveal key={o.t} delay={35 * i}><div className="border-t border-white/[0.1] pt-4"><span className="font-['Space_Mono'] text-[9px] tracking-[0.14em] text-orange-400/70">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{o.t}</h3><p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{o.b}</p></div></Reveal>))}</div>
          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Key reflection</SectionLabel></Reveal>
              <Reveal delay={60}><blockquote className="mt-5 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl"><span className="mr-1 text-3xl text-orange-500/70">“</span>Designing Reclaim highlighted the importance of clarity and reassurance in utility experiences. When users are trying to recover something valuable, straightforward flows, organized content, and understandable actions matter as much as visual consistency.</blockquote></Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Project deliverables</SectionLabel></Reveal>
              <ul className="mt-4">{["25+ mobile screen designs.", "Core recovery flows and supporting interface states.", "File browsing and preview interactions.", "Design system asset.", "Interactive prototype."].map((item, i) => (<Reveal key={item} delay={30 * i}><li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3"><span className="font-sans text-[13px] text-slate-300">{item}</span><span className="font-['Space_Mono'] text-[9px] text-slate-600">{String(i + 1).padStart(2, "0")}</span></li></Reveal>))}</ul>
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
            {previous ? (<Link href={`/case-studies/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 no-underline"><div className="flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Previous</div><h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">{previous.title}</h3></Link>) : <div />}
            {next ? (<Link href={`/case-studies/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 text-right no-underline"><div className="flex items-center justify-end gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Next</div><h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">{next.title}</h3></Link>) : null}
          </div>
        </Container>
      </nav>
    </main>
  );
}
