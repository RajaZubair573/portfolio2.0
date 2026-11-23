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
  navbars: "/projects/Cyberrey/Cyberrey_Navbars.webp",
};

const railItems: RailItem[] = [
  { id: "intro", label: "Overview" },
  { id: "comparison", label: "Before / after" },
  { id: "brief", label: "Brief" },
  { id: "research", label: "Research" },
  { id: "journey", label: "Journey" },
  { id: "system", label: "System" },
  { id: "screens", label: "Screens" },
  { id: "outcome", label: "Outcome" },
  { id: "sources", label: "Sources" },
];

const summary = [
  {
    label: "Problem",
    body: "CyberRey's original website contained the information but did not present it in a clear, structured way for potential buyers.",
  },
  {
    label: "What I did",
    body: "Redesigned the website in Figma around three important visitor questions: What does the company offer? Why should I trust it? How do I get in touch?",
  },
  {
    label: "Result",
    body: "A clearer presentation of services, company information, and contact options. The client gave the project a five-star review and reported receiving more clients through the website.",
  },
];

const comparisonRows = [
  {
    moment: "First impression",
    before: "Less focused presentation",
    after: "Clearer service introduction",
  },
  {
    moment: "Services",
    before: "Information competed for attention",
    after: "More organized service presentation",
  },
  {
    moment: "Credibility",
    before: "Important proof spread across the page",
    after: "Company and partner information presented more clearly",
  },
  {
    moment: "Next step",
    before: "Contact route less prominent",
    after: "Clearer enquiry options",
  },
];

const journeySteps = [
  { number: "01", title: "Scan", body: "Understand what CyberRey offers." },
  { number: "02", title: "Compare", body: "Explore relevant services and solutions." },
  { number: "03", title: "Validate", body: "Review company information and credibility." },
  { number: "04", title: "Act", body: "Find a clear way to contact the company." },
];

const screens = [
  {
    src: assets.hero,
    width: 1440,
    height: 900,
    alt: "Final CyberRey homepage hero design",
    label: "Homepage",
    caption: "Services, credibility, and action in the first viewport.",
    annotation: "Service, partner, and contact routes visible upfront",
    framed: true,
  },
  {
    src: assets.solutions,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey solutions page design",
    label: "Solutions",
    caption: "Four named service routes with consistent headings and links.",
    annotation: "Named service routes",
  },
  {
    src: assets.about,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey company page design",
    label: "Company",
    caption: "Company information and proof grouped for orientation.",
    annotation: "Company proof grouped together",
  },
  {
    src: assets.contact,
    width: 4563,
    height: 1966,
    alt: "Final CyberRey contact page design",
    label: "Contact",
    caption: "A focused form with supporting details.",
  },
  {
    src: assets.blogs,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey blog page design",
    label: "Blog",
    caption: "Insights with a calmer reading rhythm.",
  },
  {
    src: assets.vendor,
    width: 5476,
    height: 2359,
    alt: "Final CyberRey vendor page design",
    label: "Vendors",
    caption: "Partner information in the same visual system.",
  },
];

const sources = [
  {
    publisher: "SurveyMonkey × Reddit",
    title: "The hidden B2B journey",
    finding: "83% of B2B decision-makers self-research before speaking to sales.",
    url: "https://www.surveymonkey.com/newsroom/surveymonkey-and-reddit-the-hidden-b2b-journey-2026/",
  },
  {
    publisher: "Gartner",
    title: "B2B buyers turn to sales reps to validate AI-generated insights",
    finding: "Buyers reported using an average of seven information sources in a recent purchase.",
    url: "https://www.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights",
  },
  {
    publisher: "Sophos",
    title: "The Cybersecurity Trust Reality in 2026",
    finding: "79% find it challenging to assess new cybersecurity providers.",
    url: "https://assets.sophos.com/X24WTUEQ/at/bhmx4pwtc5vz7scc97jjb4c9/sophos-the-cybersecurity-trust-reality-in-2026.pdf",
  },
  {
    publisher: "Sophos",
    title: "The Cybersecurity Trust Reality in 2026",
    finding: "5% of IT leaders say both they and their organization fully trust cybersecurity vendors.",
    url: "https://assets.sophos.com/X24WTUEQ/at/bhmx4pwtc5vz7scc97jjb4c9/sophos-the-cybersecurity-trust-reality-in-2026.pdf",
  },
  {
    publisher: "NIST",
    title: "Cybersecurity Framework 2.0",
    finding: "Frames cybersecurity as enterprise risk and governance.",
    url: "https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework",
  },
];

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

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.8rem,6.2vw,4.9rem)] font-bold leading-[0.86] tracking-[-0.04em] text-slate-50">
                  CyberRey
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.45rem,2.7vw,2.1rem)] font-medium leading-[1.1] text-slate-300">
                  A security website built for skeptical, self-directed
                  evaluation.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
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
                    <MetaItem
                      label="Role"
                      value="Independent UI/UX Designer"
                    />
                    <MetaItem label="Design" value="January–February 2026" />
                    <MetaItem
                      label="Development"
                      value="Webflow by me"
                    />
                    <MetaItem label="Delivery" value="April 2026" />
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
          </Container>
        </section>

        <SectionHeading
          id="comparison"
          index="01"
          label="Before / after"
          title={
            <>
              From an outdated presentation to a clearer digital experience.
            </>
          }
          intro={
            <p>
              Explore how the original CyberRey website changed through the
              redesign.
            </p>
          }
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <Reveal delay={100} className="mt-9">
            <CyberReyComparison
              beforeSrc={assets.old}
              afterSrc={assets.landing}
            />
          </Reveal>

          <div className="mt-10 overflow-x-auto border-t border-white/[0.08]">
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
                {comparisonRows.map((row) => (
                  <tr key={row.moment} className="border-b border-white/[0.07]">
                    <td className="py-4 pr-6 align-top font-['Rajdhani'] text-lg font-semibold text-slate-200">
                      {row.moment}
                    </td>
                    <td className="py-4 pr-6 align-top font-sans text-[12px] leading-relaxed text-slate-500">
                      {row.before}
                    </td>
                    <td className="py-4 align-top font-sans text-[12px] leading-relaxed text-slate-300">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionHeading>

        <SectionHeading
          id="brief"
          index="02"
          label="Brief"
          title="The brief"
          intro={
            <p>
              The original site had the information but lacked a clear
              structure. Services competed for attention, important company
              proof was distributed across the page, and the contact experience
              could be easier to navigate.
            </p>
          }
        >
          <div className="mt-7 flex flex-wrap gap-2">
            {["Service clarity", "Company credibility", "Contact experience"].map(
              (label) => (
                <span
                  key={label}
                  className="border border-white/[0.08] px-3 py-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-300"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </SectionHeading>

        <SectionHeading
          id="research"
          index="03"
          label="Research basis"
          title="Research basis"
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <Reveal className="mt-9 max-w-2xl">
            <span className="inline-flex items-center border border-orange-400/30 bg-orange-500/[0.07] px-3 py-1.5 font-['Rajdhani'] text-2xl font-bold text-orange-200">
              5%
            </span>
            <p className="mt-5 font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-snug text-slate-100">
              <strong>
                Only 5% of IT leaders said both they and their organization had
                full trust in their cybersecurity vendors.
              </strong>
            </p>
            <p className="mt-3 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-300/80">
              Source: Sophos — The Cybersecurity Trust Reality in 2026
            </p>
            <p className="mt-5 font-sans text-[14px] leading-relaxed text-slate-400">
              This reinforced the need to present CyberRey&apos;s services and
              company credibility clearly, without requiring visitors to rely
              on a sales conversation to understand the business.
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="journey"
          index="04"
          label="Audience journey"
          title="Audience journey"
          intro={
            <p>
              The visitor: an IT or operations lead responsible for evaluating
              providers, but not necessarily a cybersecurity specialist.
            </p>
          }
        >
          <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-[17px] hidden h-px bg-white/10 lg:block"
            />
            {journeySteps.map((step) => (
              <Reveal key={step.number}>
                <div className="relative">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[10px] text-orange-300">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-['Rajdhani'] text-xl font-semibold text-slate-100">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-slate-400">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 border-t border-white/[0.07] pt-4 font-sans text-[12px] leading-relaxed text-slate-500">
            Audience assumption informed by public research and a review of the
            original website. It shaped the order of information on the page.
          </p>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="05"
          label="Design system"
          title="Design system"
          intro={
            <p>
              A consistent visual language built around bold typography, a
              violet-blue palette, and structured layouts.
            </p>
          }
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="mt-10 space-y-8">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={assets.navbars}
                  alt="CyberRey navigation structures across the delivered website"
                  width={6375}
                  height={2746}
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
                <AssetCaption
                  label="Information Architecture"
                  detail="Delivered navigation and page structure."
                />
              </figure>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <figure className="m-0">
                  <AssetPanel
                    src={assets.palette}
                    alt="CyberRey brand color palette"
                    width={2150}
                    height={1079}
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <AssetCaption
                    label="Color Palette"
                    detail="CyberRey brand colors."
                  />
                </figure>
              </Reveal>
              <Reveal delay={80}>
                <figure className="m-0">
                  <AssetPanel
                    src={assets.typography}
                    alt="CyberRey typography board with Clash Display and General Sans"
                    width={2687}
                    height={1348}
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <AssetCaption
                    label="Typography"
                    detail="Clash Display and General Sans."
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="screens"
          index="06"
          label="Selected screens"
          title="Selected screens"
          intro={
            <p>
              The same structure carries across the homepage, services, company
              information, enquiry, insights, and partners.
            </p>
          }
          background="#080d1a"
        >
          <div className="mt-10 space-y-12">
            <Reveal>
              <ScreenPanel {...screens[0]} />
            </Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-7">
                <ScreenPanel {...screens[1]} />
              </Reveal>
              <Reveal delay={80} className="lg:col-span-5">
                <ScreenPanel {...screens[2]} />
              </Reveal>
            </div>
            <Reveal>
              <ScreenPanel {...screens[3]} />
            </Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              <Reveal>
                <ScreenPanel {...screens[4]} />
              </Reveal>
              <Reveal delay={80}>
                <ScreenPanel {...screens[5]} />
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="outcome"
          index="07"
          label="Outcome"
          title="Outcome"
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Client feedback — paraphrased
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  <strong>The client said</strong> the redesigned website
                  communicated services more clearly, received positive
                  reactions from visitors, and brought in more clients through
                  the website.
                </p>
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
                  <p className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                    Client feedback; no measured traffic or conversion figures
                    were supplied.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="sources"
          index="08"
          label="Sources"
          title="Sources"
          background="#080d1a"
        >
          <div className="mt-9 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {sources.map((source) => (
              <Reveal key={`${source.publisher}-${source.finding}`}>
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                    {source.publisher}
                  </p>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 inline-flex max-w-full items-start gap-2 font-['Rajdhani'] text-lg font-semibold leading-snug text-slate-100 no-underline transition-colors duration-300 hover:text-orange-300"
                  >
                    <span>{source.title}</span>
                    <ArrowUpRight className="mt-1 shrink-0 text-orange-400/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-1 font-sans text-[12px] leading-relaxed text-slate-500">
                    {source.finding}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of CyberRey case study"
        eyebrow="Continue exploring"
        title="Open the final work."
        actions={
          <>
            <ComponentButton href={liveUrl} external>
              View Live Website
            </ComponentButton>
            <ComponentButton href={figmaUrl} variant="outline" external>
              View Figma Design
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
