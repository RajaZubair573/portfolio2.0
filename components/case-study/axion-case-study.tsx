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

const a = (file: string) => `/projects/Axion/${file}`;

const assets = {
  mockup: a("Axion-Mockup.png"),
  landing: a("Axion Main Landing Page.png"),
  products: a("Axion_Products_Pages.webp"),
  order: a("Axion_Order_Pages.webp"),
  projects: a("Axion_Projects_Pages.png"),
  systemBoard: a("Axion-System-Board.png"),
  mobileHero: a("Axion-Mobile-Hero.png"),
  mobileCollections: a("Axion-Mobile-Collections.png"),
  mobileProducts: a("Axion-Mobile-Products.png"),
  mobileCheckout: a("Axion-Mobile-Checkout.png"),
  dashboardOverview: a("Axion-Dashboard-Overview.png"),
  dashboardOrders: a("Axion-Dashboard-Orders.png"),
  dashboardOrderDetails: a("Axion-Dashboard-Order-Details.png"),
  dashboardDiscounts: a("Axion-Dashboard-Discounts.png"),
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
    body: "Axion needed a premium online shopping experience and a dashboard to support its business operations, with a consistent visual direction across every interface.",
  },
  {
    label: "What I did",
    body: "Designed the brand's visual system, e-commerce storefront, responsive mobile experience, and complete dashboard in Figma, retaining the client's existing logo.",
  },
  {
    label: "Result",
    body: "The website went live after custom development by Synctom, and the client reported that the new online presence helped attract customers beyond referrals.",
  },
];

const decisions = [
  {
    number: "01",
    title: "Product-led presentation",
    body: "Use strong product imagery and a clear hierarchy to keep lighting products at the center of the shopping experience.",
    evidence: {
      src: assets.products,
      alt: "Axion product cards and filters",
      label: "Product cards",
      width: 5590,
      height: 2882,
    },
  },
  {
    number: "02",
    title: "Connected discovery and shopping",
    body: "Organize collections, product information, and purchasing touchpoints into a coherent customer journey.",
    evidence: {
      src: assets.order,
      alt: "Axion cart and checkout screens",
      label: "Cart to checkout",
      width: 4488,
      height: 2007,
    },
  },
  {
    number: "03",
    title: "One system across three interfaces",
    body: "Carry the same colors, typography, and component logic across the desktop storefront, mobile experience, and operational dashboard.",
    evidence: {
      src: assets.dashboardOverview,
      alt: "Axion dashboard overview using the same visual system",
      label: "Dashboard overview",
      width: 1152,
      height: 1052,
    },
  },
];

const journey = [
  "Discover",
  "Browse Collection",
  "Product Details",
  "Select Options",
  "Cart",
  "Checkout",
  "Confirmation",
];

const mobileScreens = [
  {
    src: assets.mobileHero,
    alt: "Axion mobile storefront hero showing the lighting headline and navigation",
    width: 390,
    height: 844,
    label: "Mobile hero",
    className: "mx-auto max-w-[280px]",
  },
  {
    src: assets.mobileCollections,
    alt: "Axion mobile collection cards for indoor, solar, and outdoor lighting",
    width: 390,
    height: 844,
    label: "Collections",
    className: "mx-auto max-w-[280px]",
  },
  {
    src: assets.mobileProducts,
    alt: "Axion mobile product cards with names, descriptions, and prices",
    width: 390,
    height: 844,
    label: "Products",
    className: "mx-auto max-w-[280px]",
  },
  {
    src: assets.mobileCheckout,
    alt: "Axion mobile checkout screen with billing and shipping information",
    width: 351,
    height: 2301,
    label: "Checkout",
    className: "mx-auto max-w-[220px]",
  },
];

const dashboardScreens = [
  {
    src: assets.dashboardOrders,
    alt: "Axion dashboard orders screen with order IDs, customers, status, prices, and dates",
    width: 1152,
    height: 1052,
    label: "Orders",
    detail: "Status, price, and date columns keep order review scannable.",
  },
  {
    src: assets.dashboardOrderDetails,
    alt: "Axion order details screen showing customer, product, and payment information",
    width: 1150,
    height: 1052,
    label: "Order details",
    detail: "Customer, product, and payment details are grouped in one view.",
  },
  {
    src: assets.dashboardDiscounts,
    alt: "Axion discount management screen using the shared dashboard sidebar and table patterns",
    width: 1150,
    height: 912,
    label: "Discounts",
    detail: "Shared sidebar and table patterns carry the storefront system into operations.",
  },
];

const palette = [
  ["Primary", "#0077B6"],
  ["Secondary", "#0D3361"],
  ["Accent", "#0252AD"],
  ["Primary Text", "#111827"],
  ["Secondary Text", "#6B7280"],
  ["Background", "#FFFFFF"],
  ["Section BG", "#FAF6F8"],
  ["Section Alt", "#ECEBE7"],
];

const typography = [
  ["Poppins", "H1 64 / H2 48 / H3 40"],
  ["Poppins", "H4 36 / H5 28 / H6 26"],
  ["Inter", "Body 20 / 18 / 16"],
  ["Inter", "Caption 14 / Label 12"],
];

export function AxionCaseStudy({
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
  const liveUrl = caseStudy.liveUrl ?? "https://axionlights.com/";
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
                "radial-gradient(circle, rgba(0,119,182,0.30), rgba(13,51,97,0.16) 58%, transparent 76%)",
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
                    Client project · E-commerce
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.15rem,4.5vw,3.8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-slate-50">
                  Axion Lighting — E-commerce Experience
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.3rem,2.3vw,1.85rem)] font-medium leading-[1.1] text-slate-300">
                  A unified digital experience connecting premium lighting commerce
                  with business operations.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ComponentButton href={liveUrl} external>
                    View Live Website
                  </ComponentButton>
                  <ComponentButton href={figmaUrl} external variant="outline">
                    View Full Figma Design
                  </ComponentButton>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-9">
                <div className="border-t border-white/[0.08] pt-5">
                  <dl className="mt-5 space-y-4">
                    <MetaItem label="Type" value="Client project" />
                    <MetaItem label="Role" value="UI/UX Designer" />
                    <MetaItem label="Development" value="Synctom" />
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
              <figure className="mx-auto max-w-[920px]">
                <AssetPanel
                  src={assets.mockup}
                  alt="Axion Lighting storefront mockup showing the brand wordmark, homepage hero, and lighting product presentation"
                  width={1607}
                  height={862}
                  sizes="(max-width: 768px) 100vw, 920px"
                />
                <AssetCaption
                  label="Project Mockup"
                  detail="Brand wordmark, storefront hero, and product presentation."
                />
              </figure>
            </Reveal>
          </Container>
        </section>

        <SectionHeading
          id="brief"
          index="02"
          label="Brief & My Role"
          title="One brand system across commerce and operations."
          intro={
            <>
              <p>
                Axion needed more than a product catalogue. The experience had to
                present lighting products professionally, support customer discovery
                and purchasing, and provide a dashboard for business operations.
              </p>
              <p className="mt-4">
                I worked directly with the client, presenting and explaining design
                decisions in person. Almost all of the proposed direction was
                approved. I created the visual system and designed the storefront,
                mobile experience, and dashboard in Figma.
              </p>
            </>
          }
        >
          <Reveal className="mt-8">
            <div className="grid gap-4 border-t border-white/[0.08] pt-5 md:grid-cols-2">
              <p className="font-sans text-[14px] leading-relaxed text-slate-300">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Logo decision
                </span>
                <span className="mt-2 block">
                  I proposed reworking the box-shaped logo to better fit the visual
                  direction. The client preferred to retain the established logo, so
                  it stayed unchanged.
                </span>
              </p>
              <p className="font-sans text-[14px] leading-relaxed text-slate-400">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  Development handoff
                </span>
                <span className="mt-2 block">
                  Synctom subsequently developed the website using custom coding. My
                  contribution was the Figma design and design direction.
                </span>
              </p>
            </div>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="decisions"
          index="03"
          label="Key Design Decisions"
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
                    {decision.evidence ? (
                      <div className="mt-4 max-w-[180px]">
                        <AssetPanel
                          src={decision.evidence.src}
                          alt={decision.evidence.alt}
                          width={decision.evidence.width}
                          height={decision.evidence.height}
                          sizes="180px"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="journey"
          index="04"
          label="Shopping Journey"
          title="From product discovery to purchase."
        >
          <Reveal className="mt-10">
            <div className="overflow-x-auto pb-2 md:overflow-visible md:pb-0">
              <div className="relative min-w-[1020px]">
                <div
                  aria-hidden="true"
                  className="absolute left-5 right-5 top-[15px] h-px bg-white/10"
                />
                <div className="relative flex items-start gap-4">
                  {journey.map((step, i) => (
                    <div key={step} className="w-[132px] shrink-0">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[9px] text-orange-300">
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
            <p className="mt-6 border-t border-white/[0.07] pt-5 font-sans text-[13px] leading-relaxed text-slate-500">
              Coverage reflects the supplied design screens. It is not a validated
              usability flow or evidence of conversion improvement.
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="screens"
          index="05"
          label="Selected Screens"
          title="Three interfaces. One connected experience."
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <Reveal className="mt-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Storefront
                </p>
                <h3 className="mt-2 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
                  Full desktop shopping experience
                </h3>
              </div>
            </div>
            <div className="mt-5">
              <BrowserMockup
                src={assets.landing}
                alt="Full Axion desktop landing page showing the hero, lighting collections, featured products, services, and footer"
                url="axion design preview"
                scroll
                priority
                heightClass="h-[340px] sm:h-[440px] lg:h-[560px]"
                width={1920}
                height={10030}
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
              <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Image-based design preview — full desktop landing page
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-center font-sans text-[13px] leading-relaxed text-slate-400">
                Design image only. Synctom developed the live website.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <figure className="m-0">
                <AssetPanel
                  src={assets.products}
                  alt="Axion product listing filters, product cards, and product detail page with options and pricing"
                  width={5590}
                  height={2882}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <AssetCaption
                  label="Discovery + Detail"
                  detail="Product filters, cards, and option selection."
                />
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure className="m-0">
                <AssetPanel
                  src={assets.order}
                  alt="Axion cart, wishlist, order history, checkout, and order confirmation screens"
                  width={4488}
                  height={2007}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <AssetCaption
                  label="Purchase Journey"
                  detail="Cart, checkout, and confirmation."
                />
              </figure>
            </Reveal>
          </div>

          <Reveal delay={80} className="mt-5">
            <figure className="mx-auto max-w-[900px]">
              <AssetPanel
                src={assets.projects}
                alt="Axion projects listing and project detail pages showing lighting installations in real spaces"
                width={9866}
                height={4411}
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <AssetCaption
                label="Supporting Pages"
                detail="Project galleries and editorial content extend the storefront beyond the catalogue."
              />
            </figure>
          </Reveal>

          <Reveal className="mt-14">
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
              Mobile experience
            </p>
            <h3 className="mt-2 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
              Storefront and checkout on a narrow viewport
            </h3>
            <p className="mt-3 max-w-2xl font-sans text-[14px] leading-relaxed text-slate-400">
              The mobile screens adapt navigation, collection cards, product density,
              and checkout into focused layouts while keeping the same visual system.
            </p>
            <div className="mt-6 grid items-start gap-5 sm:grid-cols-2">
              {mobileScreens.map((screen, i) => (
                <Reveal key={screen.label} delay={i * 50} className={screen.className}>
                  <figure className="m-0">
                    <AssetPanel
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      sizes="(max-width: 640px) 90vw, 280px"
                    />
                    <AssetCaption label={screen.label} detail="Supplied mobile design" />
                  </figure>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
              Dashboard
            </p>
            <h3 className="mt-2 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
              Operational screens in the same visual language
            </h3>
            <div className="mt-6">
              <figure className="m-0">
                <AssetPanel
                  src={assets.dashboardOverview}
                  alt="Axion admin dashboard overview with order totals, order trend, top products, and low-stock products"
                  width={1152}
                  height={1052}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
                <AssetCaption
                  label="Dashboard Overview"
                  detail="Order totals, order trend, top products, and low-stock data share one landing view."
                />
              </figure>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {dashboardScreens.map((screen, i) => (
                <Reveal key={screen.label} delay={i * 50}>
                  <figure className="m-0">
                    <AssetPanel
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <AssetCaption label={screen.label} detail={screen.detail} />
                  </figure>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="06"
          label="Design System"
          title="A visual foundation created for Axion."
        >
          <Reveal className="mt-8">
            <figure className="m-0">
              <AssetPanel
                src={assets.systemBoard}
                alt="Axion design-system board combining the created color palette, typography system, and interface component examples"
                width={2256}
                height={520}
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </figure>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="border-t border-white/[0.08] pt-5">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Retained
                </p>
                <p className="mt-3 font-sans text-[14px] leading-relaxed text-slate-300">
                  Client logo, retained.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Created by me
                </p>
                <p className="mt-3 font-sans text-[14px] leading-relaxed text-slate-300">
                  Palette, typography, and interface components.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
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
              <div className="mt-6">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                  Typography
                </p>
                <div className="mt-3 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                  {typography.map(([font, scale]) => (
                    <div key={`${font}-${scale}`} className="grid grid-cols-[80px_1fr] gap-3 py-2">
                      <span className="font-sans text-[11px] font-semibold text-slate-200">
                        {font}
                      </span>
                      <span className="font-sans text-[11px] leading-snug text-slate-400">
                        {scale}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </SectionHeading>

        <SectionHeading
          id="outcome"
          index="07"
          label="Outcome & Reflection"
          title="A stronger digital presence for the business."
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Client feedback (paraphrased)
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  The completed design was developed into a live website by Synctom.
                  During our collaboration, the client shared that the business had
                  previously relied heavily on referrals to attract customers and that
                  the new website had helped bring in additional customers and
                  inquiries.
                </p>
                <p className="mt-4 max-w-2xl font-sans text-[13px] leading-relaxed text-slate-500">
                  No quantified growth claim.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="border border-white/[0.08] bg-white/[0.02] p-6">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Reflection
                  </p>
                  <blockquote className="mt-4 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200">
                    “Designing Axion taught me how to maintain one coherent visual
                    language across very different interfaces. A storefront, mobile
                    shopping experience, and operational dashboard each have different
                    needs, but all three should feel like parts of the same product.”
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/[0.08] pt-7">
              <ComponentButton href={liveUrl} external>
                View Live Website
              </ComponentButton>
              <ComponentButton href={figmaUrl} external variant="outline">
                View Full Figma Design
              </ComponentButton>
            </div>
          </Reveal>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of Axion Lighting case study"
        eyebrow="Continue exploring"
        title="Open the next case study."
        actions={null}
        previous={previous}
        next={next}
        index={index}
      />
      <CallToAction />
    </>
  );
}
