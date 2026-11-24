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

const a = (file: string) => `/projects/Lighthouse/${file}`;

const assets = {
  mockup: a("Lighthouse-Mockup.png"),
  landing: a("Landing-Page_Lighthouse.png"),
  desktop: a("Lighthouse-Desktop.png"),
  mobile: a("Lighthouse-Mobile.png"),
  systemBoard: a("Lighthouse-System-Board.png"),
};

const railItems: RailItem[] = [
  { id: "intro", label: "01 Hero" },
  { id: "brief", label: "02 Brief" },
  { id: "decisions", label: "03 Decisions" },
  { id: "journey", label: "04 Journey" },
  { id: "screens", label: "05 Screens" },
  { id: "system", label: "06 System" },
  { id: "outcome", label: "07 Outcome" },
];

const summary = [
  {
    label: "Problem",
    body: "The existing website offered a limited shopping experience, making it harder to explore lighting products, understand product details, and move through a complete purchase journey.",
  },
  {
    label: "What I did",
    body: "Designed a responsive e-commerce experience in Figma, covering product discovery, product presentation, supporting content, and the shopping journey.",
  },
  {
    label: "Focus",
    body: "Bringing premium visual presentation and practical shopping information together across desktop and mobile.",
  },
];

const decisions = [
  {
    number: "01",
    title: "Product-first browsing",
    body: "Organize lighting categories and product discovery so visitors can explore the catalogue through a clearer visual structure.",
  },
  {
    number: "02",
    title: "Detailed product presentation",
    body: "Give product imagery, specifications, and available variants a clearer hierarchy so customers can understand what they are exploring.",
  },
  {
    number: "03",
    title: "Connected shopping experience",
    body: "Bring product exploration, cart, checkout, payment, and confirmation into a more cohesive purchasing journey.",
  },
];

const journeySteps = [
  "Discover",
  "Browse",
  "Explore Product",
  "Select Variant",
  "Add to Cart",
  "Checkout",
  "Payment",
  "Order Confirmation",
];

const palette = [
  ["Primary", "#2A1B45"],
  ["Secondary", "#F0B249"],
  ["Primary Text", "#1B1930"],
  ["Secondary Text", "#86808D"],
  ["Tertiary Text", "#CBC5C4"],
  ["Hover", "#CE983E"],
  ["Background", "#F7F5F1"],
  ["Section BG", "#FCFCFA"],
  ["Highlight", "#F5F1EA"],
];

const typography = [
  ["Canela Trail · 64px Bold", "H1 / Display"],
  ["Canela Trail · 52px Bold", "H2 / Heading"],
  ["Canela Trail · 40px Bold", "H3 / Heading"],
  ["Canela Trail · 32px Medium", "H4 / Heading"],
  ["Inter · 16px Regular", "Body Medium"],
  ["Inter · 14px Bold", "Label"],
];

export function LighthouseCaseStudy({
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
  const liveUrl = caseStudy.liveUrl ?? "https://www.lighthouseisb.com.pk/";

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
                "radial-gradient(circle, rgba(251,191,36,0.22), rgba(30,41,59,0.12) 58%, transparent 76%)",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackLink />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Case study {String(index + 1).padStart(2, "0")} / E-commerce
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-300/80">
                    Client project · E-commerce · Responsive website
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.15rem,4.5vw,3.8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-slate-50">
                  Light House — E-commerce Website
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-[1.1] text-slate-300">
                  A premium digital shopping experience for an architectural
                  lighting brand.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ComponentButton href={liveUrl} external>
                    View Live Website
                  </ComponentButton>
                  <ComponentButton href={caseStudy.link} variant="outline" external>
                    View Design Prototype
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
                    <MetaItem label="Design tool" value="Figma" />
                    <MetaItem label="Development" value="Synctom" />
                    <MetaItem label="Development method" value="Custom coding" />
                    <MetaItem label="Platform" value="Responsive website" />
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
                  alt="Light House e-commerce website mockup showing lighting collections and product presentation"
                  width={1672}
                  height={941}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
                <AssetCaption
                  label="Project Mockup"
                  detail="Lighting collections and premium brand presentation."
                />
              </figure>
            </Reveal>
          </Container>
        </section>

        <SectionHeading
          id="brief"
          index="02"
          label="Brief"
          title="Designing a more complete lighting shopping experience."
          intro={
            <>
              <p>
                Light House is a premium architectural lighting brand. The project
                focused on expanding its existing limited website experience into a
                more complete e-commerce journey.
              </p>
              <p className="mt-4">
                The design brings product discovery, detailed product presentation,
                project inspiration, and purchasing touchpoints together in a refined
                interface. The challenge was to balance the visual appeal of lighting
                products with the practical information customers need when exploring
                and choosing them.
              </p>
            </>
          }
        >
          <Reveal className="mt-8">
            <p className="max-w-3xl border-t border-white/[0.08] pt-5 font-sans text-[14px] leading-relaxed text-slate-300">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                My contribution
              </span>
              <span className="mt-2 block">
                UI/UX design in Figma. Website development was handled separately by
                Synctom using custom coding.
              </span>
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="decisions"
          index="03"
          label="Key design decisions"
          title="Three decisions that shaped the experience."
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

          <Reveal delay={180}>
            <p className="mt-6 max-w-3xl font-sans text-[14px] leading-relaxed text-slate-400">
              The catalogue structure covers pendant lights, chandeliers, wall
              lights, ceiling lights, track lights, spot lights, and outdoor lights,
              with customer favourites and project inspiration supporting product
              discovery.
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="journey"
          index="04"
          label="Shopping journey"
          title="A connected path from discovery to order confirmation."
        >
          <Reveal className="mt-10">
            <div className="overflow-x-auto pb-2 md:overflow-visible md:pb-0">
              <div className="relative min-w-[1120px]">
                <div
                  aria-hidden="true"
                  className="absolute left-5 right-5 top-[13px] h-px bg-white/10"
                />
                <div className="relative flex items-start gap-4">
                  {journeySteps.map((step, i) => (
                    <div key={step} className="w-[130px] shrink-0">
                      <span className="relative z-10 flex h-7 w-7 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[9px] text-orange-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 font-['Rajdhani'] text-[15px] font-semibold leading-snug text-slate-100">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-7 border-t border-white/[0.07] pt-4 font-sans text-[13px] leading-relaxed text-slate-400">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Supporting pages
              </span>
              <span className="mt-2 block">
                Product categories, project showcases, blog, brand information, and
                contact.
              </span>
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="screens"
          index="05"
          label="Selected screens"
          title="The experience across desktop and mobile."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <Reveal className="mt-10">
            <BrowserMockup
              src={assets.landing}
              alt="Full Light House desktop landing page showing product discovery, collections, projects, and supporting content"
              url="www.lighthouseisb.com.pk"
              scroll
              heightClass="h-[360px] sm:h-[460px] lg:h-[560px]"
              width={1440}
              height={8219}
              sizes="(max-width: 1200px) 100vw, 1100px"
              glow
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview — full desktop landing page
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-center font-sans text-[13px] leading-relaxed text-slate-400">
              Featured products are presented with names and prices, including
              Aurora Brass Desk Lamp, Marble Aura Table Lamp, Luna Arc Floor Lamp,
              Elysian Feather Floor Lamp, and Crystal Bloom Table Lamp.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={assets.desktop}
                  alt="Light House desktop interface overview"
                  width={1170}
                  height={526}
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <AssetCaption
                  label="Desktop interface overview"
                  detail="Product-focused layouts and supporting content."
                />
              </figure>
            </Reveal>

            <Reveal delay={80}>
              <figure className="m-0">
                <AssetPanel
                  src={assets.mobile}
                  alt="Light House responsive mobile interface overview"
                  width={1200}
                  height={732}
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <AssetCaption
                  label="Responsive mobile presentation"
                  detail="Product browsing and shopping screens adapted to mobile."
                />
              </figure>
            </Reveal>
          </div>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="06"
          label="Design System"
          title="A visual language shaped around premium lighting."
        >
          <div className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.9fr)] md:gap-7">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={assets.systemBoard}
                  alt="Light House colour palette and typography system board"
                  width={3770}
                  height={944}
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
                      <div
                        key={`${name}-${hex}`}
                        className="flex min-w-0 items-center gap-2"
                      >
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
          title="A more complete foundation for lighting e-commerce."
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Client project · design scope
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  The project delivered a redesigned e-commerce experience that brings
                  product discovery, product information, brand storytelling, and
                  purchasing touchpoints into one cohesive interface.
                </p>
                <p className="mt-4 max-w-2xl font-sans text-[14px] leading-relaxed text-slate-400">
                  The final design covered desktop and mobile presentations, with
                  development carried out separately by Synctom using custom coding.
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
                    “Premium e-commerce is not only about making products look
                    attractive. It is about giving people enough clarity to understand
                    what they are buying and making the journey from discovery to
                    purchase feel natural.”
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of Light House case study"
        eyebrow="Continue exploring"
        title="Open the next case study."
        actions={
          <>
            <ComponentButton href={liveUrl} external>
              View Live Website
            </ComponentButton>
            <ComponentButton href={caseStudy.link} variant="outline" external>
              View Design Prototype
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
