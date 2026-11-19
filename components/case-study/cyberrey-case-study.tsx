import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudyScrollToTop } from "./case-study-scroll-to-top";
import { CyberReyComparison } from "./cyberrey-comparison";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import {
  ArrowUpRight,
  BackLink,
  ComponentButton,
  Container,
} from "./ui";

const assets = {
  old: "/projects/Cyberrey/Cyberrey-Old.png",
  landing: "/projects/Cyberrey/Cyberrey Landing Page.png",
  hero: "/projects/Cyberrey/Cyberrey Hero Section.png",
  solutions: "/projects/Cyberrey/Cyberrey_Solutions.webp",
  about: "/projects/Cyberrey/Cyberrey_Abouts.webp",
  contact: "/projects/Cyberrey/Cyberrey_Contact.webp",
  blogs: "/projects/Cyberrey/Cyberrey_Blogs.webp",
  vendor: "/projects/Cyberrey/Cyberrey_Vendor.webp",
  palette: "/projects/Cyberrey/Cyberrey_Colorpalette.webp",
  typography: "/projects/Cyberrey/Cyberrey_typography.png",
};

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "brief", label: "Brief" },
  { id: "research", label: "Research" },
  { id: "persona", label: "Persona" },
  { id: "comparison", label: "Before / after" },
  { id: "system", label: "System" },
  { id: "screens", label: "Screens" },
  { id: "outcome", label: "Outcome" },
  { id: "sources", label: "Sources" },
];

const researchSignals = [
  {
    value: "83%",
    label: "self-research before speaking to sales",
    detail: "B2B decision-makers in the SurveyMonkey × Reddit study.",
    source: 1,
  },
  {
    value: "7",
    label: "information sources in a recent purchase",
    detail: "Average reported by buyers in Gartner's 2025 survey.",
    source: 2,
  },
  {
    value: "79%",
    label: "find new security vendors hard to assess",
    detail: "IT and security decision-makers in Sophos' global study.",
    source: 3,
  },
  {
    value: "5%",
    label: "report full trust in cybersecurity vendors",
    detail: "The same Sophos study found trust is the exception.",
    source: 3,
  },
];

const personaSnapshot = [
  {
    label: "Working role",
    value: "IT or operations lead responsible for a vendor shortlist",
  },
  {
    label: "Knowledge",
    value: "Understands the business risk; may not be a security specialist",
  },
  {
    label: "Arrives with",
    value: "A rough problem, two or three providers, and several open tabs",
  },
  {
    label: "Loses confidence when",
    value: "Services are vague, proof is thin, or the next step is hidden",
  },
];

const evaluationPath = [
  {
    stage: "01 / Scan",
    question: "Can I understand what this company actually does?",
    response:
      "Named services, a direct hero statement, and labels that repeat consistently across the navigation and footer.",
  },
  {
    stage: "02 / Compare",
    question: "Which service fits the risk I am trying to solve?",
    response:
      "Four separate service routes replace a compressed service strip, so each offer has room to be recognised.",
  },
  {
    stage: "03 / Validate",
    question: "Is there evidence beyond the marketing line?",
    response:
      "Numbers, company context, projects, insights, and vendor information are placed in a deliberate sequence.",
  },
  {
    stage: "04 / Act",
    question: "How do I enquire or register a deal without a sales maze?",
    response:
      "Deal Registration, Partner With Us, and Contact Us are visible from the first screen and persist in the header.",
  },
];

const anatomyRows = [
  {
    moment: "First screen",
    before: "Home / Vendors / Solution / Company / Blog; Schedule a Call sits inside the hero.",
    after: "A security-led hero, a Partner With Us action, and direct header routes.",
  },
  {
    moment: "Services",
    before: "Broad approach language competes with a compact service strip.",
    after: "Our Services names four routes; the Solution menu and footer repeat the same structure.",
  },
  {
    moment: "Proof",
    before: "20 Years, 98%, +100 Projects, and vendor logos appear across separate areas.",
    after: "Our Numbers, About CyberRey, Recent Projects, Insights, and Trusted Vendors follow one reading order.",
  },
  {
    moment: "Next step",
    before: "Contact information lives mainly in the footer.",
    after: "Contact Us and Deal Registration remain in the header while the hero offers Partner With Us.",
  },
];

const systemRules = [
  {
    title: "One accent, used with restraint",
    body: "Orange marks actions, dividers, and active cues. It is not used as decoration.",
  },
  {
    title: "Two type voices",
    body: "Rajdhani carries hierarchy; Space Mono carries labels, data, and navigation metadata.",
  },
  {
    title: "Hard edges, quiet depth",
    body: "One-pixel rules, flat panels, and subtle grids keep the interface calm and legible.",
  },
];

const screens = [
  {
    src: assets.hero,
    width: 1440,
    height: 900,
    alt: "Final CyberRey homepage hero design",
    label: "Homepage",
    title: "The first viewport",
    caption: "Offer, atmosphere, and a direct partner enquiry path.",
  },
  {
    src: assets.solutions,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey solutions page design",
    label: "Solutions",
    title: "Service routes",
    caption: "Four named services with consistent headings and links.",
  },
  {
    src: assets.about,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey about page design",
    label: "Company",
    title: "Credibility in context",
    caption: "Company information arranged for fast orientation.",
  },
  {
    src: assets.contact,
    width: 4563,
    height: 1966,
    alt: "Final CyberRey contact page design",
    label: "Contact",
    title: "Enquiry route",
    caption: "A focused form with supporting details.",
    compact: true,
  },
  {
    src: assets.blogs,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey blog page design",
    label: "Blog",
    title: "Insights",
    caption: "Editorial content with a calmer reading rhythm.",
    compact: true,
  },
  {
    src: assets.vendor,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey vendor page design",
    label: "Vendors",
    title: "Partner proof",
    caption: "Vendor content uses the same system as the core pages.",
    compact: true,
  },
];

const sources = [
  {
    number: "01",
    publisher: "SurveyMonkey × Reddit",
    title: "The hidden B2B journey",
    detail:
      "Survey of 1,202 U.S. business decision-makers, conducted 23 December 2025–7 January 2026.",
    url: "https://www.surveymonkey.com/newsroom/surveymonkey-and-reddit-the-hidden-b2b-journey-2026/",
  },
  {
    number: "02",
    publisher: "Gartner",
    title:
      "Gartner Survey Finds 69% of B2B Buyers Turn to Sales Reps to Validate AI-Generated Insights",
    detail:
      "Survey of 645 B2B buyers conducted August–September 2025; presented at the Gartner CSO & Sales Leader Conference, May 2026.",
    url: "https://www.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights",
  },
  {
    number: "03",
    publisher: "Sophos",
    title: "Trust Reality in 2026",
    detail:
      "Independent, vendor-agnostic survey of 5,000 IT and security decision-makers across 17 countries, conducted by Vanson Bourne.",
    url: "https://assets.sophos.com/X24WTUEQ/at/bhmx4pwtc5vz7scc97jjb4c9/sophos-the-cybersecurity-trust-reality-in-2026.pdf",
  },
  {
    number: "04",
    publisher: "NIST",
    title: "Cybersecurity Framework 2.0",
    detail:
      "Framework and quick-start guidance framing cybersecurity as enterprise risk and governance, not only a technical issue.",
    url: "https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework",
  },
];

function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-9 bg-gradient-to-r from-orange-500/80 to-transparent" />
      <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">
        {index} — {children}
      </span>
    </div>
  );
}

function Citation({ number }: { number: number }) {
  return (
    <Link
      href="#sources"
      className="ml-1 font-['Space_Mono'] text-[9px] text-orange-300/80 no-underline hover:text-orange-200"
      aria-label={`Jump to research source ${number}`}
    >
      [{number}]
    </Link>
  );
}

function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
  note,
  background = "#080d1a",
  children,
}: {
  id?: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  note?: string;
  background?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{ background }}
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index={index}>{label}</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 font-['Rajdhani'] text-[clamp(1.9rem,3.4vw,2.8rem)] font-bold leading-[1.04] tracking-tight text-slate-100">
              {title}
            </h2>
          </Reveal>
          {intro ? (
            <Reveal delay={120}>
              <div className="mt-5 max-w-2xl font-sans text-[15px] leading-relaxed text-slate-400">
                {intro}
              </div>
            </Reveal>
          ) : null}
        </div>
        {note ? (
          <Reveal delay={150}>
            <p className="mt-5 flex items-start gap-2 border-l border-orange-500/50 pl-4 font-['Space_Mono'] text-[9px] uppercase leading-relaxed tracking-[0.16em] text-slate-500">
              <span className="text-orange-300/80">Note</span>
              {note}
            </p>
          </Reveal>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

function SharpFrame({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 1100px",
  preload,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-white/10 bg-[#050810] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        preload={preload}
        className="block h-auto w-full"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.035]" />
    </div>
  );
}

function StarRating() {
  return (
    <div
      className="flex items-center gap-1 text-orange-400"
      role="img"
      aria-label="Client review rating: 5 out of 5 stars"
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m12 2.7 2.8 5.9 6.4.9-4.7 4.5 1.2 6.4L12 17.2 6.3 20.4l1.2-6.4L2.8 9.5l6.4-.9L12 2.7Z" />
        </svg>
      ))}
    </div>
  );
}

export function CyberReyCaseStudy({
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
  const liveUrl = caseStudy.liveUrl ?? "https://cyberrey.com/";
  const figmaUrl = caseStudy.link;

  return (
    <>
      <CaseStudyScrollToTop />
      <main className="relative w-full overflow-hidden bg-[#070b16]">
        <ReadingProgress />
        <SectionRail items={railItems} />

        <section
          id="hero"
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
                "radial-gradient(circle, rgba(76,29,149,0.45), rgba(30,27,75,0.12) 58%, transparent 76%)",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackLink />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Case study {String(index + 1).padStart(2, "0")} / Website
                redesign
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-300/80">
                    Cybersecurity · Independent design
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(3.1rem,7vw,5.6rem)] font-bold leading-[0.86] tracking-[-0.04em] text-slate-50">
                  CyberRey
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.45rem,2.7vw,2.1rem)] font-medium leading-[1.1] text-slate-300">
                  A security website built for skeptical, self-directed
                  evaluation.
                </p>

                <p className="mt-7 max-w-2xl font-sans text-[15px] leading-relaxed text-slate-300 md:text-[17px]">
                  The original site had the information, but not a reading
                  path. I reorganised it around the questions a cautious buyer
                  asks first: what do you do, why should I believe it, and how
                  do I start?
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <ComponentButton href={liveUrl} external>
                    View Live Website
                  </ComponentButton>
                  <ComponentButton href={figmaUrl} variant="outline" external>
                    View Figma Design
                  </ComponentButton>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-9">
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Project record
                  </p>
                  <dl className="mt-5 space-y-4">
                    <MetaItem label="Role" value="Complete UI/UX design, independently" />
                    <MetaItem label="Design" value="January–February 2026" />
                    <MetaItem
                      label="Build"
                      value="Webflow by Flowcubo Studio"
                    />
                    <MetaItem label="Delivery" value="April 2026" />
                    <MetaItem label="Tools" value="Figma → Webflow" />
                  </dl>
                  <p className="mt-6 border-t border-white/[0.07] pt-4 font-sans text-[12px] leading-relaxed text-slate-500">
                    The persona and market research in this case study are
                    cited desk research. No client interviews or client-supplied
                    persona were provided.
                  </p>
                </div>
              </div>
            </div>

            <Reveal className="mt-12 md:mt-14">
              <div className="relative mx-auto max-w-[1080px]">
                <div className="relative overflow-hidden border border-white/10 bg-[#050810]">
                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-4 py-2.5">
                    <span className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                      cyberrey.com — final hero
                    </span>
                    <span className="hidden w-[52px] sm:block" />
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={assets.hero}
                      alt="Final CyberRey homepage hero design in a browser frame"
                      fill
                      sizes="(max-width: 768px) 100vw, 1080px"
                      preload
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <p className="mt-3 flex items-center justify-between gap-4 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  <span>Final homepage — first viewport</span>
                  <span>Figma → Webflow</span>
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <SectionHeading
          id="brief"
          index="02"
          label="The brief"
          title={
            <>
              The website had information. It did not have a reading path.
            </>
          }
          intro={
            <p>
              CyberRey needed a more professional website that explained its
              services and made the company easier to evaluate. The work was a
              complete independent design; Flowcubo Studio built the approved
              design in Webflow.
            </p>
          }
        >
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  What was visible in the original site
                </p>
              </Reveal>
              <div className="mt-5">
                <BriefObservation
                  number="01"
                  title="Services competed for attention"
                  body="Broad approach language and a short service strip asked the visitor to piece the offer together."
                />
                <BriefObservation
                  number="02"
                  title="Proof was present but dispersed"
                  body="Years, retention, projects, and vendor logos appeared across different parts of the long page."
                />
                <BriefObservation
                  number="03"
                  title="The enquiry route was narrow"
                  body="Schedule a Call sat in the hero, while contact details were mainly left to the footer."
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="border-l border-orange-500/60 pl-6">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                    Design objective
                  </p>
                  <p className="mt-4 font-['Rajdhani'] text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight text-slate-100">
                    Let a non-specialist confirm fit without reading the whole
                    site.
                  </p>
                  <p className="mt-4 font-sans text-[13px] leading-relaxed text-slate-500">
                    I treated structure, language, proof, and action as one
                    problem rather than four separate visual sections.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="research"
          index="03"
          label="Research basis"
          title={
            <>
              Security buyers research first, then look for reasons to trust.
            </>
          }
          intro={
            <p>
              No client research pack was supplied, so I built an evidence base
              from public B2B and security-buying studies. These findings shaped
              the persona and the order of information on the page.
            </p>
          }
          note="Desk research only. It explains the audience assumptions behind the design; it is not client-validated user research."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
            {researchSignals.map((signal, signalIndex) => (
              <Reveal key={signal.value} delay={signalIndex * 60}>
                <div className="border-t border-orange-500/40 pt-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-['Rajdhani'] text-5xl font-bold leading-none text-slate-100">
                      {signal.value}
                    </p>
                    <Citation number={signal.source} />
                  </div>
                  <p className="mt-4 font-['Rajdhani'] text-lg font-semibold leading-snug text-slate-200">
                    {signal.label}
                  </p>
                  <p className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    {signal.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-white/[0.08] pt-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  What this changed in the design
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>
            </Reveal>
            <div className="mt-7 grid gap-8 md:grid-cols-3">
              <ResearchImplication
                number="01"
                title="Design for the invisible research phase"
                body="Most evaluation happens before a conversation. The homepage had to answer real questions without depending on a sales call."
                source={1}
              />
              <ResearchImplication
                number="02"
                title="Make validation easy"
                body="Buyers use several sources and still want human confirmation at key moments. Clear routes to contact and deal registration matter."
                source={2}
              />
              <ResearchImplication
                number="03"
                title="Reduce the trust gap"
                body="Detailed, interpretable information is a trust signal. The site gives numbers, company context, projects, and vendors a clear order."
                source={3}
              />
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="persona"
          index="04"
          label="Persona"
          title={
            <>
              An evidence-based evaluator, not an invented customer.
            </>
          }
          intro={
            <p>
              The persona is a composite built from the cited studies plus a
              direct audit of CyberRey&apos;s navigation, labels, and page
              screens. It has no fake name, quote, photograph, or client
              attribution.
            </p>
          }
          background="#080d1a"
        >
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="border border-white/[0.09] bg-[#070c17] p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                      Composite persona
                    </p>
                    <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-600">
                      Desk research only
                    </span>
                  </div>
                  <h3 className="mt-6 font-['Rajdhani'] text-3xl font-bold leading-tight text-slate-100">
                    The evaluating operations lead
                  </h3>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate-500">
                    Accountable for choosing outside help, but not necessarily
                    a cybersecurity specialist.
                  </p>

                  <dl className="mt-7">
                    {personaSnapshot.map((item) => (
                      <div
                        key={item.label}
                        className="border-t border-white/[0.08] py-4"
                      >
                        <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
                          {item.label}
                        </dt>
                        <dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Evaluation path → design response
                  </p>
                  <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-600">
                    4 moments
                  </span>
                </div>
              </Reveal>
              <div className="mt-1">
                {evaluationPath.map((step, stepIndex) => (
                  <Reveal key={step.stage} delay={stepIndex * 60}>
                    <div className="grid gap-4 border-b border-white/[0.08] py-6 sm:grid-cols-[110px_1fr] sm:gap-8">
                      <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-300/80">
                        {step.stage}
                      </p>
                      <div>
                        <p className="font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
                          {step.question}
                        </p>
                        <p className="mt-2 max-w-xl font-sans text-[13px] leading-relaxed text-slate-500">
                          {step.response}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={180}>
                <p className="mt-7 border-l border-orange-500/50 pl-5 font-sans text-[13px] leading-relaxed text-slate-400">
                  This is why the redesign leads with services and action, not
                  with a long company story. The story is still present, but it
                  appears after the visitor can confirm relevance.
                </p>
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="comparison"
          index="05"
          label="Before / after"
          title={
            <>
              From service list to evaluation path.
            </>
          }
          intro={
            <p>
              Drag the divider to compare the original and redesigned
              homepages. Scroll inside the frame to explore each full page at
              its native proportions.
            </p>
          }
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <Reveal delay={100} className="mt-10">
            <CyberReyComparison
              beforeSrc={assets.old}
              afterSrc={assets.landing}
            />
          </Reveal>

          <div className="mt-14 overflow-x-auto border-t border-white/[0.08]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="w-[18%] py-4 pr-6 font-['Space_Mono'] text-[9px] font-normal uppercase tracking-[0.18em] text-slate-600">
                    Reading moment
                  </th>
                  <th className="w-[41%] py-4 pr-6 font-['Space_Mono'] text-[9px] font-normal uppercase tracking-[0.18em] text-slate-500">
                    Original
                  </th>
                  <th className="w-[41%] py-4 font-['Space_Mono'] text-[9px] font-normal uppercase tracking-[0.18em] text-orange-300/80">
                    Redesign
                  </th>
                </tr>
              </thead>
              <tbody>
                {anatomyRows.map((row) => (
                  <tr key={row.moment} className="border-b border-white/[0.07]">
                    <td className="py-5 pr-6 align-top font-['Rajdhani'] text-lg font-semibold text-slate-200">
                      {row.moment}
                    </td>
                    <td className="py-5 pr-6 align-top font-sans text-[12px] leading-relaxed text-slate-500">
                      {row.before}
                    </td>
                    <td className="py-5 align-top font-sans text-[12px] leading-relaxed text-slate-300">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="06"
          label="Design system"
          title={
            <>
              A calm system that survives every page.
            </>
          }
          intro={
            <p>
              The structure was mapped before the screens were refined. The
              same navigation logic, type roles, spacing, and accent rules then
              carried from the homepage to each supporting page.
            </p>
          }
        >
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SitemapDiagram />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="grid grid-cols-2 gap-3">
                  <MiniArtifact
                    src={assets.palette}
                    alt="CyberRey final color palette"
                    label="Palette"
                  />
                  <MiniArtifact
                    src={assets.typography}
                    alt="CyberRey final typography board"
                    label="Type"
                  />
                </div>
              </Reveal>
              <div className="mt-7">
                {systemRules.map((rule, ruleIndex) => (
                  <Reveal key={rule.title} delay={ruleIndex * 60}>
                    <div className="border-t border-white/[0.08] py-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-['Rajdhani'] text-lg font-semibold text-slate-200">
                          {rule.title}
                        </h3>
                        <span className="font-['Space_Mono'] text-[9px] text-slate-600">
                          {String(ruleIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-2 font-sans text-[12px] leading-relaxed text-slate-500">
                        {rule.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="screens"
          index="07"
          label="Selected screens"
          title={
            <>
              The system in use across the delivered pages.
            </>
          }
          intro={
            <p>
              A small set of screens shows how the same structure holds from
              the first viewport through services, company information, and
              enquiry.
            </p>
          }
          background="#080d1a"
        >
          <div className="mt-12 space-y-12">
            <Reveal>
              <ScreenPanel {...screens[0]} />
            </Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              <Reveal delay={60}>
                <ScreenPanel {...screens[1]} />
              </Reveal>
              <Reveal delay={110}>
                <ScreenPanel {...screens[2]} />
              </Reveal>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {screens.slice(3).map((screen, screenIndex) => (
                <Reveal key={screen.label} delay={screenIndex * 60}>
                  <ScreenPanel {...screen} />
                </Reveal>
              ))}
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="outcome"
          index="08"
          label="Outcome"
          title={
            <>
              Positive feedback, with the evidence boundary kept clear.
            </>
          }
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Client feedback — paraphrased
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  Following delivery, the client said the redesigned website
                  communicated services more clearly, drew positive reactions
                  from visitors, and contributed to more clients coming through
                  the website.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Reflection
                  </p>
                  <p className="mt-4 max-w-2xl font-sans text-[13px] leading-relaxed text-slate-400">
                    The redesign worked because the information order changed,
                    not only the styling. Services became recognisable, proof
                    became sequenceable, and the next step stopped depending on
                    a footer link.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="border border-white/[0.08] bg-white/[0.02] p-7">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Client review rating
                  </p>
                  <div className="mt-4">
                    <StarRating />
                  </div>
                  <p className="mt-3 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
                    5 out of 5
                  </p>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-slate-500">
                    The client gave a five-star review. Exact wording was not
                    supplied and is not reproduced here.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={130}>
                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Evidence boundary
                  </p>
                  <ul className="mt-4">
                    {[
                      "Measured traffic or conversion data: not supplied",
                      "Exact client quote: not supplied",
                      "Client-supplied persona research: not supplied",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-t border-white/[0.06] py-3 font-sans text-[12px] leading-relaxed text-slate-500 first:border-t-0 first:pt-0"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 bg-orange-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="sources"
          index="09"
          label="Research sources"
          title={
            <>
              Where the persona evidence comes from.
            </>
          }
          intro={
            <p>
              The persona is a synthesis of these public sources and a direct
              audit of CyberRey&apos;s live site and Figma screens. It is not a
              claim about client research or a specific CyberRey customer.
            </p>
          }
          background="#080d1a"
        >
          <div className="mt-12">
            {sources.map((source) => (
              <Reveal key={source.number}>
                <div className="grid gap-4 border-t border-white/[0.08] py-6 sm:grid-cols-[56px_1fr] sm:gap-8">
                  <span className="font-['Space_Mono'] text-[10px] tracking-[0.16em] text-orange-300/80">
                    {source.number}
                  </span>
                  <div>
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                      {source.publisher}
                    </p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 inline-flex max-w-full items-start gap-2 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100 no-underline transition-colors duration-300 hover:text-orange-300"
                    >
                      <span>{source.title}</span>
                      <ArrowUpRight className="mt-1 shrink-0 text-orange-400/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <p className="mt-2 max-w-2xl font-sans text-[12px] leading-relaxed text-slate-500">
                      {source.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-7">
              <ComponentButton href={liveUrl} external>
                View Live Website
              </ComponentButton>
              <ComponentButton href={figmaUrl} variant="outline" external>
                View Figma Design
              </ComponentButton>
            </div>
          </Reveal>
        </SectionHeading>
      </main>

      <nav
        aria-label="End of CyberRey case study"
        className="border-t border-white/[0.06] py-16 md:py-20"
        style={{ background: "#080d1a" }}
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">
                Continue exploring
              </p>
              <h2 className="mt-3 font-['Rajdhani'] text-3xl font-bold text-slate-100 md:text-4xl">
                Open the final work.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <ComponentButton href={liveUrl} external>
                View Live Website
              </ComponentButton>
              <ComponentButton href={figmaUrl} variant="outline" external>
                View Figma Design
              </ComponentButton>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/case-studies/${previous.slug}`}
                className="group border border-white/[0.08] bg-white/[0.02] p-5 no-underline transition-colors duration-300 hover:border-orange-400/40"
              >
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  ← Previous project
                </span>
                <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-100 transition-colors group-hover:text-orange-300">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div className="border border-white/[0.05] bg-white/[0.01] p-5">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  ← Previous project
                </span>
                <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-600">
                  First in the sequence
                </span>
              </div>
            )}

            {next ? (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group border border-white/[0.08] bg-white/[0.02] p-5 text-right no-underline transition-colors duration-300 hover:border-orange-400/40"
              >
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Next project →
                </span>
                <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-100 transition-colors group-hover:text-orange-300">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.07] pt-8">
            <p className="font-sans text-[12px] text-slate-600">
              Case study {String(index + 1).padStart(2, "0")} of the selected
              work.
            </p>
            <ComponentButton href="/case-studies" variant="outline">
              View All Case Studies
            </ComponentButton>
          </div>
        </Container>
      </nav>
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 font-sans text-[12px] leading-relaxed text-slate-300">
        {value}
      </dd>
    </div>
  );
}

function BriefObservation({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-3 border-t border-white/[0.08] py-5 sm:grid-cols-[48px_1fr] sm:gap-6">
      <span className="font-['Space_Mono'] text-[9px] tracking-[0.18em] text-orange-400/80">
        {number}
      </span>
      <div>
        <h3 className="font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
          {title}
        </h3>
        <p className="mt-2 font-sans text-[13px] leading-relaxed text-slate-500">
          {body}
        </p>
      </div>
    </div>
  );
}

function ResearchImplication({
  number,
  title,
  body,
  source,
}: {
  number: string;
  title: string;
  body: string;
  source: number;
}) {
  return (
    <Reveal>
      <div className="border-t border-white/[0.08] pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="font-['Space_Mono'] text-[9px] tracking-[0.18em] text-orange-400/80">
            {number}
          </span>
          <Citation number={source} />
        </div>
        <h3 className="mt-4 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
          {title}
        </h3>
        <p className="mt-2 font-sans text-[12px] leading-relaxed text-slate-500">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

function ScreenPanel({
  src,
  width,
  height,
  alt,
  label,
  title,
  caption,
  compact,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  title: string;
  caption: string;
  compact?: boolean;
}) {
  return (
    <figure className="m-0">
      <SharpFrame
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={
          compact
            ? "(max-width: 768px) 100vw, 360px"
            : "(max-width: 768px) 100vw, 1100px"
        }
      />
      <figcaption className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
        <div className="sm:w-[38%] sm:shrink-0">
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-orange-400/70">
            {label}
          </p>
          <p className="mt-1 font-['Rajdhani'] text-lg font-semibold leading-snug text-slate-200">
            {title}
          </p>
        </div>
        <p className="font-sans text-[12px] leading-relaxed text-slate-500">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}

function SitemapDiagram() {
  return (
    <div className="border border-white/[0.09] bg-[#080d18] p-6">
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
        <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-400">
          Sitemap — delivered structure
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      </div>

      <div className="mt-5 font-['Space_Mono'] text-[10px] leading-relaxed">
        <div className="border border-orange-400/30 bg-orange-500/[0.07] px-3 py-2 text-orange-200">
          HOME
        </div>

        <div className="ml-3 mt-3 space-y-3 border-l border-white/[0.1] pl-4">
          <SitemapBranch label="VENDORS" children={["Vendor profile"]} />
          <SitemapBranch
            label="SOLUTIONS"
            children={[
              "Security Awareness Training",
              "IoT Security Audit",
              "Cybersecurity Strategy & Audit",
              "Infrastructure Security Consulting",
            ]}
          />
          <SitemapBranch
            label="COMPANY"
            children={[
              "About Us",
              "Our Team",
              "Mission & Vision",
              "Awards & Recognition",
            ]}
          />
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-px w-4 bg-white/15" />
            BLOG
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-px w-4 bg-white/15" />
            DEAL REGISTRATION
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-px w-4 bg-white/15" />
            CONTACT
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-white/[0.07] pt-4 font-sans text-[11px] leading-relaxed text-slate-600">
        Mapped from the delivered navigation and confirmed page screens — not
        a separate, undocumented sitemap artefact.
      </p>
    </div>
  );
}

function SitemapBranch({
  label,
  children,
}: {
  label: string;
  children: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-slate-300">
        <span className="h-px w-4 bg-white/15" />
        {label}
      </div>
      <div className="ml-5 mt-2 space-y-1.5 border-l border-white/[0.06] pl-4 text-slate-500">
        {children.map((child) => (
          <div key={child} className="flex items-center gap-2">
            <span className="h-px w-3 bg-white/10" />
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniArtifact({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="border border-white/[0.08] bg-[#050810]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 220px"
          className="object-cover object-top"
        />
      </div>
      <p className="border-t border-white/[0.07] px-3 py-2 font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
