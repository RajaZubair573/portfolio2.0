import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudyScrollToTop } from "./case-study-scroll-to-top";
import {
  CaseStudyAssetCaption as AssetCaption,
  CaseStudyAssetPanel as AssetPanel,
  CaseStudyEndNav,
  CaseStudyEyebrow as Eyebrow,
  CaseStudyMetaItem as MetaItem,
  CaseStudyScreenPanel as ScreenPanel,
  CaseStudySectionHeading as SectionHeading,
} from "./case-study-template";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { BackLink, ComponentButton, Container } from "./ui";

const r = (file: string) => `/projects/Reclaim/${file}`;

const railItems: RailItem[] = [
  { id: "intro", label: "01 Hero" },
  { id: "brief", label: "02 Brief" },
  { id: "audience", label: "03 Audience" },
  { id: "flows", label: "04 Key flows" },
  { id: "architecture", label: "05 IA" },
  { id: "system", label: "06 System" },
  { id: "outcome", label: "07 Outcome" },
];

const assets = {
  mockup: r("Reclaim-Mockup.png"),
  language: r("Reclaim-Language.png"),
  intro: r("Reclaim-Intro.png"),
  photos: r("Reclaim-Photos.png"),
  processing: r("Reclaim-Processing.png"),
  recovered: r("Reclaim-Recovered.png"),
  storage: r("Reclaim-Storage.png"),
  videos: r("Reclaim-Videos.png"),
  confirm: r("Reclaim-Confirm.png"),
  premium: r("Reclaim-Premium.png"),
  systemFoundations: r("Reclaim-System-Foundations.png"),
  systemComponents: r("Reclaim-System-Components.png"),
  systemGeometry: r("Reclaim-System-Geometry.png"),
  fullDesign: r("Reclaim-Full-Design-Framed.png"),
};

const summary = [
  {
    label: "Problem",
    body: "Recovering deleted files feels risky and technical. People don't know what can be restored or whether a tap will make things worse.",
  },
  {
    label: "What I did",
    body: "Designed a mobile app in Figma (25+ screens) that guides users from scan to preview to recovery.",
  },
  {
    label: "Focus",
    body: "Reassurance at every step: clear file categories, previews before restoring, and honest status and error states.",
  },
];

type FlowScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  caption: string;
  annotation?: string;
};

const phone = { width: 393, height: 853 };

const flowDescriptions = [
  {
    number: "01",
    title: "Recover Recent Photos",
    body: "Setup, All Photos and the loading and saved-file states show the core photo path.",
  },
  {
    number: "02",
    title: "Find a Specific Document",
    body: "Storage categories, file-type tabs and a warning cover a search across mixed content.",
  },
  {
    number: "03",
    title: "Empty and Failed States",
    body: "No empty or failed-result design was supplied, so this sequence shows only the available status screens.",
  },
];

const flowSets: FlowScreen[][] = [
  [
    {
      ...phone,
      src: assets.language,
      alt: "Reclaim language selection screen",
      label: "Setup",
      caption: "Language selection before the flow.",
      annotation: "Language",
    },
    {
      ...phone,
      src: assets.intro,
      alt: "Reclaim introduction screen listing photo, video, audio and document recovery",
      label: "Introduction",
      caption: "Four recovery categories.",
      annotation: "Features",
    },
    {
      ...phone,
      src: assets.photos,
      alt: "Reclaim All Photos recovery screen with sort and filters",
      label: "Photo results",
      caption: "Sort and filter controls.",
      annotation: "All photos",
    },
    {
      ...phone,
      src: assets.processing,
      alt: "Reclaim processing state with a loading indicator",
      label: "Processing",
      caption: "Visible scan progress.",
      annotation: "Processing",
    },
    {
      ...phone,
      src: assets.recovered,
      alt: "Reclaim Recovery Successful screen confirming a saved file",
      label: "Result",
      caption: "Saved to the device.",
      annotation: "Saved",
    },
  ],
  [
    {
      ...phone,
      src: assets.storage,
      alt: "Reclaim storage details screen with file-category tiles",
      label: "Categories",
      caption: "Storage by file category.",
      annotation: "Storage",
    },
    {
      ...phone,
      src: assets.videos,
      alt: "Reclaim file list with Videos, Audio and Document tabs and a sort sheet",
      label: "File types",
      caption: "Tabs and sort options.",
      annotation: "Tabs + sort",
    },
    {
      ...phone,
      src: assets.confirm,
      alt: "Reclaim Deletion Request warning with cancel and delete actions",
      label: "Warning",
      caption: "Permanent deletion cannot be undone.",
      annotation: "Destructive",
    },
  ],
  [
    {
      ...phone,
      src: assets.processing,
      alt: "Reclaim processing state with a loading indicator",
      label: "In progress",
      caption: "Work in progress.",
      annotation: "Processing",
    },
    {
      ...phone,
      src: assets.recovered,
      alt: "Reclaim Recovery Successful confirmation",
      label: "Success",
      caption: "Saved-file confirmation.",
      annotation: "Success",
    },
    {
      ...phone,
      src: assets.confirm,
      alt: "Reclaim permanent deletion warning",
      label: "Warning",
      caption: "Consequence before deletion.",
      annotation: "Warning",
    },
  ],
];

const flowCaptions = [
  "Language setup, the feature introduction, All Photos, visible progress and the saved-file confirmation.",
  "Storage categories and file-type tabs organise mixed files; a document-specific preview was not supplied.",
  "No empty or failed-result screen was supplied. The available set covers processing, success and a permanent-deletion warning.",
];

function FlowGallery({ items }: { items: FlowScreen[] }) {
  return (
    <div className="mt-7 overflow-x-auto pb-2 md:overflow-visible md:pb-0">
      <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((screen, i) => (
          <Reveal
            key={`${screen.src}-${i}`}
            delay={i * 50}
            className="w-[180px] shrink-0 md:w-auto"
          >
            <ScreenPanel {...screen} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ReclaimCaseStudy({
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
                "radial-gradient(circle, rgba(0,150,136,0.32), rgba(0,77,64,0.16) 55%, transparent 76%)",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackLink />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Case study {String(index + 1).padStart(2, "0")} / Mobile app · Section 01 / 07
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-300/80">
                    Concept project · Utility · Mobile app
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.15rem,4.5vw,3.8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-slate-50">
                  Reclaim — Data Recovery App
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-[1.1] text-slate-300">
                  A guided path from scan to preview to recovery.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ComponentButton href="#flows">View Selected Screens</ComponentButton>
                  <ComponentButton href="#outcome" variant="outline">
                    Read the Outcome
                  </ComponentButton>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-9">
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Project record
                  </p>
                  <dl className="mt-5 space-y-4">
                    <MetaItem label="Role" value="UI/UX Designer" />
                    <MetaItem label="Platform" value="Mobile application" />
                    <MetaItem label="Scope" value="25+ mobile screens" />
                    <MetaItem label="Tools" value="Figma" />
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

            <Reveal delay={100} className="mt-10">
              <figure className="mx-auto max-w-[820px]">
                <AssetPanel
                  src={assets.mockup}
                  alt="Reclaim mobile app mockup showing home, storage and recovery-result screens"
                  width={1184}
                  height={673}
                  sizes="(max-width: 768px) 100vw, 820px"
                />
                <AssetCaption
                  label="Project Mockup"
                  detail="Home, storage and recovery result."
                />
              </figure>
            </Reveal>
          </Container>
        </section>

        <section
          className="scroll-mt-20 border-t border-white/[0.05] py-16 md:py-24"
          style={{ background: "linear-gradient(180deg, #080d1a 0%, #0a1020 100%)" }}
        >
          <Container>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <Reveal className="h-full">
                <article
                  id="brief"
                  className="flex h-full scroll-mt-20 flex-col rounded-xl border border-white/[0.08] bg-[#080d18] p-6 md:p-8"
                >
                  <Eyebrow index="02">Brief</Eyebrow>
                  <h2 className="mt-5 font-['Rajdhani'] text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-tight text-slate-100">
                    The brief
                  </h2>
                  <p className="mt-4 font-sans text-[15px] leading-relaxed text-slate-400">
                    Reclaim is a concept for recovering accidentally deleted photos,
                    videos, audio and documents. The challenge was to make a stressful
                    moment feel calm and controlled for people with very different
                    technical comfort.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={80} className="h-full">
                <article
                  id="audience"
                  className="flex h-full scroll-mt-20 flex-col rounded-xl border border-white/[0.08] bg-[#080d18] p-6 md:p-8"
                >
                  <Eyebrow index="03">Audience</Eyebrow>
                  <h2 className="mt-5 font-['Rajdhani'] text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-tight text-slate-100">
                    Audience
                  </h2>
                  <p className="mt-4 font-sans text-[15px] leading-relaxed text-slate-400">
                    Designed for two common needs: quickly getting back recently
                    deleted photos, and finding one specific document among mixed
                    files. These are assumptions from the app&apos;s intended use, not
                    interview-validated research.
                  </p>
                </article>
              </Reveal>
            </div>
          </Container>
        </section>

        <SectionHeading
          id="flows"
          index="04"
          label="Key flows"
          title="Key flows"
          intro={
            <p>
              The selected screens follow the supplied progression: setup and
              photo discovery, mixed-file browsing, and the status states that
              make an action&apos;s result clear.
            </p>
          }
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-[17px] hidden h-px bg-white/10 lg:block"
            />
            {flowDescriptions.map((flow) => (
              <Reveal key={flow.number}>
                <div className="relative">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[10px] text-orange-300">
                    {flow.number}
                  </span>
                  <h3 className="mt-4 font-['Rajdhani'] text-xl font-semibold text-slate-100">
                    {flow.title}
                  </h3>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-slate-400">
                    {flow.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 space-y-12">
            {flowSets.map((items, i) => (
              <div key={flowDescriptions[i].number}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-white/[0.08] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-orange-300/80">
                    Flow {flowDescriptions[i].number} — {flowDescriptions[i].title}
                  </span>
                  <p className="max-w-3xl font-sans text-[13px] leading-relaxed text-slate-400">
                    {flowCaptions[i]}
                  </p>
                </div>
                <FlowGallery items={items} />
              </div>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="architecture"
          index="05"
          label="Information Architecture"
          title="Four stages from setup to outcome."
          intro={
            <p>
              The supplied screens follow a short path from orientation to result:
              understand the app, find files, review them, then see what happened.
            </p>
          }
        >
          <Reveal className="mt-10">
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden="true"
                className="absolute left-[12%] right-[12%] top-[17px] hidden h-px bg-white/10 lg:block"
              />
              {[
                "Onboarding",
                "Scan and discovery",
                "Browse and preview",
                "Recover and outcomes",
              ].map((stage, i) => (
                <div key={stage} className="relative">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[10px] text-orange-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-['Rajdhani'] text-lg font-semibold leading-snug text-slate-100">
                    {stage}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={40} className="mt-6">
            <p className="max-w-2xl font-sans text-[13px] leading-relaxed text-slate-400">
              These four stages are supported by the language, storage,
              recovery-list and confirmation screens shown above.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <figure className="mx-auto max-w-[620px]">
              <AssetPanel
                src={assets.fullDesign}
                alt="Reclaim full Figma design board showing the complete screen set"
                width={1040}
                height={1142}
                sizes="(max-width: 768px) 100vw, 620px"
              />
              <AssetCaption
                label="Full Design Board"
                detail="Supplied board framed to its content."
              />
            </figure>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="06"
          label="Design System"
          title="One visual system across the recovery flow."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.9fr)] md:gap-7">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={r("Reclaim-System-Board.png")}
                  alt="Unified Reclaim design-system board showing palette, typography, UI specimens and geometry"
                  width={1920}
                  height={1229}
                  sizes="(max-width: 1024px) 100vw, 720px"
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
                    {[
                      ["App surface", "#E0F2F1"],
                      ["Deep teal", "#004D40"],
                      ["Scan action", "#009688"],
                      ["Secondary teal", "#007968"],
                      ["Primary ink", "#263238"],
                      ["Muted text", "#6C757D"],
                      ["On-action", "#FFFFFF"],
                      ["Success", "#28A745"],
                      ["Destructive", "#DC3545"],
                    ].map(([name, hex]) => (
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
                    {[
                      ["Inter · Semibold 600", "20/32 px"],
                      ["Inter · Medium 500", "20/28 px"],
                      ["Inter · Bold 700", "28/26 px · 24/32 px · 22/32 px"],
                      ["Inter · Regular 400", "14/22 px · 12/18 px"],
                      ["Inter · Medium", "18/24 px · 16/24 px"],
                    ].map(([face, sizes]) => (
                      <div
                        key={`${face}-${sizes}`}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 py-2"
                      >
                        <span className="font-sans text-[11px] leading-snug text-slate-300">
                          {face}
                        </span>
                        <span className="text-right font-['Space_Mono'] text-[9px] leading-snug text-slate-500">
                          {sizes}
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
          title="Outcome & reflection"
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Concept project · no usage data
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  <strong>This is a concept, so there is no usage data.</strong> What
                  the project delivered: 25+ screens covering onboarding, scanning,
                  preview, recovery and supporting states, a design system, and an
                  interactive prototype.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="border border-white/[0.08] bg-white/[0.02] p-7">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    What I&apos;d test first
                  </p>
                  <p className="mt-4 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
                    Whether users understand what “recoverable” means before they
                    tap Restore.
                  </p>
                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                      Reflection
                    </p>
                    <p className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                      In utility apps, clarity and reassurance matter more than
                      features. People act with confidence only when they know what
                      will happen next.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of Reclaim case study"
        eyebrow="Continue exploring"
        title="Open the final work."
        actions={
          <>
            <ComponentButton href="#flows">View Selected Screens</ComponentButton>
            <ComponentButton href="#outcome" variant="outline">
              Read the Outcome
            </ComponentButton>
          </>
        }
        previous={previous}
        next={next}
        index={index}
      />
    </>
  );
}
