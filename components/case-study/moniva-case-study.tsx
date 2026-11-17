"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { EditorialGallery } from "./editorial-gallery";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { BackLink, ComponentButton, Container, SectionHeading, SectionLabel } from "./ui";
import { cn } from "@/lib/utils";

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "persona", label: "Personas" },
  { id: "architecture", label: "IA & Navigation" },
  { id: "direction", label: "Visual Design" },
  { id: "showcase", label: "UI Showcase" },
  { id: "outcomes", label: "Outcomes" },
];

const m = (f: string) => `/projects/Moniva/${f}`;

const challenges = [
  { t: "01 — Complex Financial Workflows", b: "Registration, identity verification, wallet funding, and loan applications require different types of information and interactions." },
  { t: "02 — Building Trust", b: "Financial interactions require clarity when users enter personal information, authorize payments, or manage borrowing." },
  { t: "03 — Service Organization", b: "Multiple financial services need clear separation without making the application feel fragmented." },
  { t: "04 — Consistent Interactions", b: "Different features should share familiar visual patterns and predictable navigation." },
  { t: "05 — Supporting Different Outcomes", b: "The experience must account for pending payments, verification feedback, failed transactions, and incomplete applications." },
];

const personas = [
  {
    name: "Sarah Ahmed",
    role: "The Everyday Money Manager",
    bio: "Sarah wants a convenient way to manage everyday financial activities without switching between multiple applications. She values quick payments, clear transaction records, and easy access to her wallet.",
    goals: ["Manage money from one place.", "Check available wallet balance.", "Purchase mobile airtime and data.", "Pay utility bills.", "Review previous transactions."],
    frus: ["Switching between multiple apps.", "Repeatedly entering payment information.", "Unclear payment confirmations.", "Difficulty locating previous transactions."],
    needs: ["Accessible payment shortcuts.", "Clear wallet balance.", "Organized bill categories.", "Understandable payment confirmations.", "Easy-to-find transaction history."],
  },
  {
    name: "Ahmed Khan",
    role: "The Personal Loan Seeker",
    bio: "Ahmed wants to understand available borrowing options before making a financial commitment. He needs clear loan information, understandable repayment terms, and transparent application status.",
    goals: ["Understand loan eligibility.", "Select a suitable loan amount.", "Review repayment terms.", "Track application progress.", "Manage loan repayments."],
    frus: ["Unclear borrowing requirements.", "Confusing repayment information.", "Uncertainty about application status.", "Difficulty understanding outstanding balances."],
    needs: ["Visible eligibility requirements.", "Structured loan application.", "Clear repayment summaries.", "Distinct application statuses.", "Accessible loan history."],
  },
];

const architecture = [
  { n: "01 — Home", i: ["Wallet balance.", "Linked banking information.", "Add money.", "Payment shortcuts.", "Recent transactions."] },
  { n: "02 — Loan", i: ["Loan overview.", "Eligibility.", "Loan amount selection.", "Repayment duration.", "Application submission.", "Application status.", "Loan history and repayments."] },
  { n: "03 — Bills", i: ["Airtime.", "Mobile data.", "Electricity.", "Cable television.", "Provider selection.", "Payment confirmation."] },
  { n: "04 — More", i: ["Personal information.", "Identity verification.", "Linked bank accounts.", "Debit card management.", "Biometric login.", "Password and PIN settings."] },
];

const galleryItems = [
  { src: m("Moniva-Fulldesign.png"), alt: "Moniva full design board", label: "Full Design", caption: "Complete design board covering 88 mobile screens and states." },
  { src: m("Moniva-Colorpalette.png"), alt: "Moniva color palette", label: "Color Palette", caption: "Supplied color palette design asset." },
  { src: m("Moniva-Typography.png"), alt: "Moniva typography", label: "Typography", caption: "Supplied typography design asset." },
  { src: m("Moniva-Developernote.png"), alt: "Moniva developer notes and components", label: "Design System", caption: "Supplied design system and developer notes asset." },
  { src: m("Moniva-Logo.png"), alt: "Moniva logo", label: "Logo", caption: "Moniva logo asset." },
];

const outcomes = [
  { t: "01 — Unified Financial Experience", b: "Multiple financial services organized within a single application." },
  { t: "02 — Structured User Journeys", b: "Account setup, wallet funding, borrowing, and bill payments organized into manageable interactions." },
  { t: "03 — Clear Financial Information", b: "Dedicated interfaces for balances, repayments, transaction details, and payment outcomes." },
  { t: "04 — Consistent Interface System", b: "Reusable visual patterns and interaction components across different application features." },
  { t: "05 — Comprehensive Design Coverage", b: "88 mobile screens and states covering the application's major financial journeys." },
];

export function MonivaCaseStudy({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {

  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section id="hero" className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32" style={{ background: "linear-gradient(180deg,#080d1a 0%,#0a1020 46%,#0b1120 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> Case study {String(index + 1).padStart(2, "0")} / Fintech</div>
          </div>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3"><span className="h-px w-10 bg-gradient-to-r from-orange-500/70 to-transparent" /><span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">UI/UX Design / Fintech</span></div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">Moniva — Unified Financial Experience</h1>
              <p className="hero-in mt-4 max-w-2xl font-['Rajdhani'] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-[1.15] text-slate-400">Designing a unified financial experience for everyday money management.</p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">An all-in-one mobile financial platform bringing digital wallet management, personal lending, and everyday bill payments into one intuitive experience.</p>
            </div>
            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Project metadata</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">{[["Product","Moniva"],["Industry","Fintech / Digital Financial Services"],["Platform","Mobile Application"],["Market Context","Pakistan"],["Role","UI/UX Designer"],["Tools","Figma"],["Design Scope","88 mobile screens and states"]].map(([l,v])=>(<div key={l}><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{l}</dt><dd className="mt-1.5 font-sans text-[13px] text-slate-300">{v}</dd></div>))}</dl>
            </aside>
          </div>
          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101a2f] to-[#0a1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-500/20 blur-[90px]" />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={m("Moniva-Mockup.jpg")} alt="Moniva main project mockup" fill priority className="object-contain" sizes="(max-width: 1200px) 100vw, 1100px" />
                </div>
              </div>
              <p className="mt-6 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Main Moniva project mockup</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="02" label="Project overview" title="Bringing everyday financial services into one experience." />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 lg:col-span-7">
              <Reveal><p className="font-sans text-lg leading-relaxed text-slate-300">Moniva is a Pakistan-oriented digital financial-services concept designed to bring essential money-management activities into one mobile application.</p></Reveal>
              <Reveal delay={40}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The experience combines wallet management, personal lending, bill payments, and transaction tracking within a unified interface.</p></Reveal>
              <Reveal delay={80}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The design focuses on simplifying financial interactions, organizing different services, and creating consistent experiences across account registration, payments, borrowing, and account management.</p></Reveal>
              <Reveal delay={120}><div className="border-t border-white/[0.08] pt-6"><SectionLabel>My contribution</SectionLabel><p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">UI/UX design across the application's core financial experiences, including onboarding, identity verification, wallet management, personal lending, bill payments, transaction records, and account settings.</p></div></Reveal>
            </div>
            <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-10">
              <Reveal><SectionLabel>Project information</SectionLabel></Reveal>
              <dl className="mt-5">{[["Product","Moniva"],["Industry","Fintech"],["Platform","Mobile Application"],["Market","Pakistan"],["Role","UI/UX Designer"],["Tools","Figma"],["Scope","88 screens and states"],["Navigation","Home, Loan, Bills, More"]].map(([l,v],i)=>(<Reveal key={l} delay={25*i}><div className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/[0.06] py-3.5"><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">{l}</dt><dd className="font-sans text-[13px] text-slate-300">{v}</dd></div></Reveal>))}</dl>
            </aside>
          </div>
        </Container>
      </section>

      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1324 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-25" />
        <Container className="relative z-10">
          <SectionHeading index="03" label="The challenge & product goals" title="Multiple financial services. One cohesive experience." intro="Combining wallet management, borrowing, and everyday payments within one application introduces different interaction requirements. The challenge was to make these services feel connected without overwhelming users with complex workflows." />
          <div className="mt-14 grid gap-x-14 gap-y-8 md:grid-cols-2">{challenges.map((p,i)=>(<Reveal key={p.t} delay={40*i}><div className="border-t border-white/[0.1] pt-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100 md:text-2xl">{p.t}</h3><p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-slate-400">{p.b}</p></div></Reveal>))}</div>
          <Reveal delay={100}><div className="mt-14 border-l-2 border-orange-500/70 bg-gradient-to-r from-orange-500/[0.06] to-transparent py-5 pl-6 pr-4 md:pl-8"><span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-400/80">Design objective</span><p className="mt-2 max-w-3xl font-sans text-base leading-relaxed text-slate-200 md:text-lg">Create a unified mobile financial experience that makes essential financial activities easier to understand, navigate, and manage.</p></div></Reveal>
        </Container>
      </section>

      <section id="persona" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="04" label="Target audience & user personas" title="Designed around everyday money needs and borrowing decisions." intro="Two product archetypes based on the application's intended functionality. These are not personas validated through interviews or formal research." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{personas.map((p,i)=>(<Reveal key={p.name} delay={60*i}><article className="relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-7"><div className="flex items-start gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-violet-500/40 to-orange-500/30 font-['Rajdhani'] text-xl font-bold text-slate-100">{p.name.split(" ").map(n=>n[0]).join("")}</div><div><h3 className="font-['Rajdhani'] text-2xl font-bold text-slate-100">{p.name}</h3><p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300/80">{p.role}</p></div></div><p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">{p.bio}</p><div className="mt-6 grid gap-4 sm:grid-cols-3">{[["Goals",p.goals,"text-violet-300/80","bg-violet-500/10 border-violet-400/20"],["Frustrations",p.frus,"text-orange-300/80","bg-orange-500/10 border-orange-400/20"],["Design considerations",p.needs,"text-emerald-300/80","bg-emerald-500/10 border-emerald-400/20"]].map(([title,items,lc,cc])=>(<div key={title as string} className={cn("rounded-xl border p-4",cc as string)}><h4 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{title as string}</h4><p className={cn("mt-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em]",lc as string)}>{(items as string[]).length} items</p><ul className="mt-3 space-y-2">{(items as string[]).map((it)=>(<li key={it} className="font-sans text-[12px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div>))}</div></article></Reveal>))}</div>
          <Reveal delay={80}><div className="mt-8 rounded-xl border border-violet-400/15 bg-violet-500/[0.05] p-6"><SectionLabel>Shared user need</SectionLabel><p className="mt-3 font-sans text-base leading-relaxed text-slate-200">Users need a financial application that makes essential tasks easy to find, financial information easy to understand, and important actions easy to complete with confidence.</p></div></Reveal>
        </Container>
      </section>

      <section id="architecture" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading index="05" label="Information architecture & navigation" title="One application. Four essential experiences." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{architecture.map((a,i)=>(<Reveal key={a.n} delay={35*i}><div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{a.n}</h3><ul className="mt-4 space-y-2">{a.i.map((it)=>(<li key={it} className="font-sans text-[13px] leading-relaxed text-slate-400">• {it}</li>))}</ul></div></Reveal>))}</div>
        </Container>
      </section>

      <section id="direction" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="06" label="Visual design & design system" title="Creating a distinctive and consistent fintech identity." intro="The visual direction combines a clean interface foundation with a distinctive Midnight Blue and Tangerine identity. The design emphasizes readability, structured layouts, and clear financial information." />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7"><SectionLabel>Supplied design assets</SectionLabel><div className="mt-4 grid gap-4 sm:grid-cols-2">{[["Color palette",m("Moniva-Colorpalette.png"),"object-contain p-2"],["Typography",m("Moniva-Typography.png"),"object-contain p-2"],["UI components / system",m("Moniva-Developernote.png"),"object-contain p-2"],["Logo / identity",m("Moniva-Logo.png"),"object-contain p-6"]].map(([label,src,cls])=>(<div key={label as string}><p className="mb-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{label as string}</p><div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#070c16]"><Image src={src as string} alt={`Moniva ${label as string}`} fill className={cls as string} sizes="(max-width:768px) 100vw, 500px" /></div></div>))}</div><p className="mt-4 font-sans text-[11px] leading-relaxed text-slate-500">Supplied actual Figma/design assets are presented as-is and take priority over the proposed palette below.</p></Reveal>
            <div className="space-y-8 lg:col-span-5"><Reveal delay={60}><SectionLabel>Proposed Moniva brand direction</SectionLabel><ul className="mt-4 space-y-2.5">{[["Midnight Blue","#142B4A","Primary"],["Tangerine","#F47B35","Accent"],["Background","#F7F9FC","Surface"],["White","#FFFFFF","Base"],["Primary Text","#17263B","Type"],["Secondary Text","#748196","Type"],["Border","#E3E8EF","UI"],["Success","#13845B","Semantic"],["Error","#D83F49","Semantic"],["Warning","#D98A20","Semantic"]].map(([name,hex,role])=>(<li key={hex} className="flex items-center gap-3 border-t border-white/[0.06] pt-2.5"><span className="h-7 w-7 rounded-md border border-white/10" style={{backgroundColor:hex}} /><span className="flex-1 font-sans text-[12px] text-slate-300">{name} <span className="text-slate-600">· {role}</span></span><span className="font-['Space_Mono'] text-[9px] text-slate-500">{hex}</span></li>))}</ul></Reveal><Reveal delay={100}><SectionLabel>Typography & principles</SectionLabel><p className="mt-3 font-sans text-sm text-slate-400">Primary typeface: Inter. Clear hierarchy with bold headings, semibold component titles, medium labels, regular body text, and clear financial figures.</p><ul className="mt-4 grid gap-3">{["1. Clarity over complexity.","2. Consistent interaction patterns.","3. Readable financial information.","4. Trust through transparent feedback."].map((p)=>(<li key={p} className="border-t border-white/[0.08] pt-3 font-sans text-sm text-slate-300">{p}</li>))}</ul></Reveal></div>
          </div>
        </Container>
      </section>

      <section id="showcase" className="border-t border-white/[0.06] py-20 md:py-28" style={{ background: "#060a12" }}>
        <Container>
          <SectionHeading index="07" label="Visual system" title="Selected screens" />
          <Reveal delay={80} className="mt-6"><EditorialGallery items={galleryItems} title="Moniva" /></Reveal>
        </Container>
      </section>

      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1426 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading index="08" label="Outcomes & reflection" title="A unified foundation for everyday financial experiences." />
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{outcomes.map((o,i)=>(<Reveal key={o.t} delay={35*i}><div className="border-t border-white/[0.1] pt-4"><span className="font-['Space_Mono'] text-[9px] tracking-[0.14em] text-orange-400/70">{String(i+1).padStart(2,"0")}</span><h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{o.t}</h3><p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{o.b}</p></div></Reveal>))}</div>
          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12"><div className="lg:col-span-7"><Reveal><SectionLabel>Key reflection</SectionLabel></Reveal><Reveal delay={60}><blockquote className="mt-5 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl"><span className="mr-1 text-3xl text-orange-500/70">“</span>Moniva reinforced that successful fintech design is not simply about making financial services accessible. It is about making financial information understandable, interactions predictable, and important actions transparent. Working across onboarding, wallet management, lending, payments, and transaction records highlighted the importance of consistency throughout an entire financial product experience.</blockquote></Reveal></div><div className="lg:col-span-5"><Reveal><SectionLabel>Project deliverables</SectionLabel></Reveal><ul className="mt-4">{["88 mobile screen designs and states.","Account onboarding and verification.","Wallet management and funding.","Personal loan application and repayment.","Bill payments.","Transaction history and receipts.","Profile and security settings.","Visual foundations and reusable components.","Interactive prototype."].map((item,i)=>(<Reveal key={item} delay={30*i}><li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3"><span className="font-sans text-[13px] text-slate-300">{item}</span><span className="font-['Space_Mono'] text-[9px] text-slate-600">{String(i+1).padStart(2,"0")}</span></li></Reveal>))}</ul></div></div>
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

    </main>
  );
}
