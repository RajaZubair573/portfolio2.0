import type { CaseStudy } from "@/lib/case-studies";
import CallToAction from "@/components/call-to-action";
import { CaseStudyScrollToTop } from "./case-study-scroll-to-top";
import {
  CaseStudyAssetCaption as AssetCaption,
  CaseStudyAssetPanel as AssetPanel,
  CaseStudyEndNav,
  CaseStudyMetaItem as MetaItem,
  CaseStudySectionHeading as SectionHeading,
} from "./case-study-template";
import { BrowserMockup } from "./browser-mockup";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { BackLink, ComponentButton, Container } from "./ui";

const a = (file: string) => `/projects/CWESD/${file}`;

const assets = {
  mockup: a("CWESD - Mockup.png"),
  landing: a("CWESD Landing Page.png"),
  overview: a("CWESD_Landingpage.webp"),
  systemBoard: a("CWESD-System-Board.png"),
};

const railItems: RailItem[] = [
  { id: "intro", label: "01 Hero" },
  { id: "brief", label: "02 Brief" },
  { id: "decisions", label: "03 Decisions" },
  { id: "architecture", label: "04 Architecture" },
  { id: "screens", label: "05 Screens" },
  { id: "system", label: "06 System" },
  { id: "outcome", label: "07 Outcome" },
];

const summary = [
  {
    label: "Problem",
    body: "People exploring opportunities in technology need a clear introduction to available learning, mentorship, and community resources.",
  },
  {
    label: "What I did",
    body: "Designed the CWESD website landing page and dashboard experience, establishing a consistent visual direction and interface structure.",
  },
  {
    label: "Focus",
    body: "Making the platform feel welcoming, credible, and easy to understand from the first interaction.",
  },
];

const decisions = [
  {
    number: "01",
    title: "Explain the purpose first",
    body: "Create a clear introduction to CWESD's mission and intended audience, helping visitors understand what the organization offers.",
  },
  {
    number: "02",
    title: "Organize opportunities clearly",
    body: "Present learning opportunities and community resources as structured, understandable areas within the landing-page experience.",
  },
  {
    number: "03",
    title: "Balance warmth with credibility",
    body: "Use the existing brand colors, typography, imagery, and layout to create an approachable yet professional visual identity.",
  },
];

const architecture = [
  "Platform Introduction",
  "Learning Opportunities",
  "Mentorship & Community",
  "Engagement",
];

const palette = [
  ["Primary", "#E56B8C"],
  ["Secondary", "#FFCDD9"],
  ["Accent", "#D45778"],
  ["Primary Text", "#1F2933"],
  ["Secondary Text", "#4B5563"],
  ["Tertiary Text", "#9CA3AF"],
  ["Background", "#FFFFFF"],
  ["Surface", "#FFF5F8"],
  ["Border", "#F3CDD7"],
];

const typography = [
  ["Mulish · 80px SemiBold", "H1 / Display"],
  ["Mulish · 56px Semibold", "H2"],
  ["Mulish · 40px Semibold", "H3"],
  ["Mulish · 32px Medium", "H4"],
  ["Karla · 16px Regular", "Body Medium"],
  ["Karla · 14px Bold", "Label"],
];

export function CwesdCaseStudy({
  caseStudy,
  index,
  next,
  previous,
}: {
  caseStudy: CaseStudy;
  index: number;
  next: CaseStudy;
  previous?: CaseStudy | null;
}) {
  const figmaUrl = caseStudy.link;

  return (
    <>
      <CaseStudyScrollToTop />
      <main className="relative w-full overflow-hidden bg-[#070b16]">
        <ReadingProgress />
        <SectionRail items={railItems} />

        <section
          id="intro"
          className="relative scroll-mt-20 overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28"
          style={{
            background:
              "linear-gradient(180deg, #080d1a 0%, #0a1020 48%, #0b1120 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-[0.22] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(229,107,140,0.28), rgba(31,41,51,0.12) 58%, transparent 76%)",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackLink />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Case study {String(index + 1).padStart(2, "0")} / Education
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-300/80">
                    Client project · Education · Website UI
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.15rem,4.5vw,3.8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-slate-50">
                  CWESD — Learning Platform
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-[1.1] text-slate-300">
                  A welcoming digital experience supporting women in technology
                  through learning, mentorship, and community.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ComponentButton href={figmaUrl} external>
                    View Figma Prototype
                  </ComponentButton>
                  <ComponentButton href="#screens" variant="outline">
                    View Selected Screens
                  </ComponentButton>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-9">
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Project record
                  </p>
                  <dl className="mt-5 space-y-4">
                    <MetaItem label="Project type" value="Client project" />
                    <MetaItem label="Role" value="UI/UX Designer" />
                    <MetaItem label="Tool" value="Figma" />
                    <MetaItem label="Scope" value="Landing page + dashboard design" />
                    <MetaItem label="Industry" value="Education / E-learning" />
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-3 md:gap-10">
              {summary.map((item) => (
                <Reveal key={item.label}>
                  <div>
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                      {item.label}
                    </p>
                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate-300">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100} className="mt-12">
              <figure className="mx-auto max-w-[900px]">
                <AssetPanel
                  src={assets.mockup}
                  alt="CWESD landing-page mockup showing the hero, program cards, and site navigation"
                  width={3698}
                  height={2160}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
                <AssetCaption
                  label="Project Mockup"
                  detail="Landing-page direction, program cards, and brand presentation."
                />
              </figure>
            </Reveal>
          </Container>
        </section>

        <SectionHeading
          id="brief"
          index="02"
          label="Brief"
          title="Making opportunities in technology easier to discover."
          intro={
            <>
              <p>
                CWESD supports women entering the technology field through learning
                opportunities, mentorship, and community. The website needed to
                communicate these offerings clearly while creating a welcoming and
                professional first impression.
              </p>
              <p className="mt-4">
                My work covered the website landing page and dashboard design, with a
                visual direction intended to make the experience feel approachable
                and organized.
              </p>
            </>
          }
        >
          <Reveal className="mt-8">
            <p className="max-w-3xl border-t border-white/[0.08] pt-5 font-sans text-[14px] leading-relaxed text-slate-300">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                Intended audience
              </span>
              <span className="mt-2 block">
                Designed for women exploring technology education who want to
                discover relevant learning opportunities, mentorship, and a supportive
                community.
              </span>
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="decisions"
          index="03"
          label="Key design decisions"
          title="Designing for clarity, confidence, and connection."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {decisions.map((decision, i) => (
              <Reveal key={decision.number} delay={i * 60}>
                <div className="grid gap-4 py-6 md:grid-cols-[120px_minmax(0,1fr)] md:gap-8">
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.22em] text-orange-300/80">
                    {decision.number}
                  </span>
                  <div>
                    <h3 className="font-['Rajdhani'] text-2xl font-semibold leading-tight text-slate-100">
                      {decision.title}
                    </h3>
                    <p className="mt-2 max-w-2xl font-sans text-[14px] leading-relaxed text-slate-400">
                      {decision.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="architecture"
          index="04"
          label="Information architecture"
          title="A clear path through the CWESD experience."
        >
          <Reveal className="mt-10">
            <div className="overflow-x-auto pb-2 md:overflow-visible md:pb-0">
              <div className="relative min-w-[860px]">
                <div
                  aria-hidden="true"
                  className="absolute left-5 right-5 top-[15px] h-px bg-white/10"
                />
                <div className="relative flex items-start gap-5">
                  {architecture.map((step, i) => (
                    <div key={step} className="w-[190px] shrink-0">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[9px] text-orange-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 font-['Rajdhani'] text-[16px] font-semibold leading-snug text-slate-100">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-7 grid gap-4 border-t border-white/[0.07] pt-5 md:grid-cols-2">
              <p className="font-sans text-[13px] leading-relaxed text-slate-400">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Supporting areas
                </span>
                <span className="mt-2 block">
                  Programs · Impact · Testimonials · Contact · Community
                </span>
              </p>
              <p className="font-sans text-[13px] leading-relaxed text-slate-500">
                Conceptual structure based on the supplied landing page; not a
                validated user flow.
              </p>
            </div>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="screens"
          index="05"
          label="Selected screens"
          title="The website experience."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <Reveal className="mt-10">
            <BrowserMockup
              src={assets.landing}
              alt="Full CWESD desktop landing page showing the hero, programs, masterclass, support, and contact sections"
              url="cwesd"
              scroll
              priority
              heightClass="h-[360px] sm:h-[460px] lg:h-[560px]"
              width={1440}
              height={6833}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview — full desktop landing page
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-[13px] leading-relaxed text-slate-400">
              Scroll inside the frame to explore the supplied landing-page image;
              this is not a live interactive website.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <figure className="mx-auto max-w-[920px]">
              <AssetPanel
                src={assets.overview}
                alt="CWESD landing-page sections overview showing process, impact, and support content"
                width={1856}
                height={979}
                sizes="(max-width: 768px) 100vw, 920px"
              />
              <AssetCaption
                label="Landing-page sections"
                detail="Process, impact, and support areas from the supplied visual overview."
              />
            </figure>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="06"
          label="Design System"
          title="A consistent visual identity for CWESD."
        >
          <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.9fr)] md:gap-7">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={assets.systemBoard}
                  alt="CWESD color palette and typography system board"
                  width={1832}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </figure>
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-6">
                <div>
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Palette
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {palette.map(([name, hex]) => (
                      <div key={`${name}-${hex}`} className="flex min-w-0 items-center gap-2">
                        <span
                          className="h-5 w-5 shrink-0 border border-white/15"
                          style={{ backgroundColor: hex }}
                          aria-hidden="true"
                        />
                        <span className="min-w-0">
                          <span className="block truncate font-sans text-[11px] leading-tight text-slate-300">
                            {name}
                          </span>
                          <span className="block font-['Space_Mono'] text-[9px] leading-tight text-slate-500">
                            {hex}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Typography
                  </p>
                  <div className="mt-3 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                    {typography.map(([style, role]) => (
                      <div
                        key={`${style}-${role}`}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 py-2"
                      >
                        <span className="font-sans text-[11px] leading-snug text-slate-300">
                          {style}
                        </span>
                        <span className="text-right font-['Space_Mono'] text-[9px] leading-snug text-slate-500">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </SectionHeading>

        <SectionHeading
          id="outcome"
          index="07"
          label="Outcome & Reflection"
          title="Building a clearer digital foundation."
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Client project · design scope
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  The project covered the design of the CWESD website landing page
                  and dashboard experience, supported by a consistent visual
                  direction and a clear presentation of the organization's learning,
                  mentorship, and community focus.
                </p>
                <p className="mt-4 max-w-2xl font-sans text-[14px] leading-relaxed text-slate-400">
                  The current portfolio presentation highlights the landing-page
                  design because dashboard visuals are not available in the project
                  assets.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="border border-white/[0.08] bg-white/[0.02] p-6">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Key reflection
                  </p>
                  <blockquote className="mt-4 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200">
                    “Designing for an educational community means making people feel
                    that opportunities are accessible. A clear message, welcoming
                    visual language, and thoughtful structure can make the first step
                    feel easier.”
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of CWESD case study"
        eyebrow="Continue exploring"
        title="Open the next case study."
        actions={
          <>
            <ComponentButton href={figmaUrl} external>
              View Figma Prototype
            </ComponentButton>
            <ComponentButton href="#screens" variant="outline">
              Selected screens
            </ComponentButton>
          </>
        }
        previous={previous}
        next={next}
        index={index}
      />
      <CallToAction />
    </>
  );
}
