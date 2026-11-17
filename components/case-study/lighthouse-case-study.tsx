"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { BrowserMockup } from "./browser-mockup";
import { EditorialGallery, type GalleryItem } from "./editorial-gallery";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { BackLink, ComponentButton, Container, SectionHeading, SectionLabel } from "./ui";

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "journey", label: "Journey" },
  { id: "direction", label: "Visual Direction" },
  { id: "showcase", label: "Showcase" },
  { id: "responsive", label: "Desktop & Responsive" },
  { id: "outcomes", label: "Outcomes" },
];

const a = (f: string) => `/projects/Lighthouse/${f}`;

const showcaseItems: GalleryItem[] = [
  { src: a("Lighthouse-Desktop.png"), alt: "Light House desktop interface overview", label: "Desktop Experience", caption: "Desktop presentation highlighting the premium e-commerce interface and product-focused layouts." },
  { src: a("Lighthouse-Mobile.png"), alt: "Light House mobile interface overview", label: "Mobile Experience", caption: "Mobile presentation showing the responsive direction of the Light House shopping experience." },
  { src: a("Lighthouse-Mockup.png"), alt: "Light House project mockup", label: "Brand Presentation", caption: "Project mockup showcasing the Light House visual identity across devices." },
];

const challenges = [
  { t: "01 — Limited product discovery", b: "Browsing needed clearer pathways to help customers find lighting products and categories with ease." },
  { t: "02 — Clearer product information", b: "Product detail pages required stronger hierarchy to present specifications, imagery, and selectable variants." },
  { t: "03 — Disconnected shopping journey", b: "Browsing, cart, checkout, and confirmation needed to feel like one continuous e-commerce flow." },
  { t: "04 — Premium brand expression", b: "The interface had to communicate the character of a premium architectural lighting brand." },
  { t: "05 — Consistent cross-device experience", b: "Layouts and interactions needed to remain cohesive and usable across desktop and mobile." },
];

const objectives = [
  "Improve product discovery and category browsing.",
  "Present products with strong visual hierarchy and imagery.",
  "Make product details and variants easier to understand.",
  "Connect browsing, cart, checkout, and order confirmation.",
  "Create a cohesive and responsive brand experience.",
];

const journeySteps = ["Discover", "Browse", "Explore Product", "Select Variant", "Add to Cart", "Checkout", "Payment", "Order Confirmation"];

const supportingAreas = [
  { t: "Product categories", b: "Structured category browsing to guide customers toward relevant lighting collections." },
  { t: "Product detail pages", b: "Detailed pages presenting imagery, information, and available product variants." },
  { t: "Project showcases", b: "Inspiration through completed lighting projects and installation highlights." },
  { t: "Blog", b: "Editorial content supporting brand storytelling and lighting inspiration." },
  { t: "Brand & contact pages", b: "Dedicated pages communicating the brand and enabling customer contact." },
];

const outcomes = [
  { t: "01 — Complete e-commerce structure", b: "A broader website structure covering discovery, product exploration, and purchase flow." },
  { t: "02 — Cohesive premium identity", b: "A consistent visual language aligned with a premium lighting brand." },
  { t: "03 — Organized product presentation", b: "Clearer product discovery and presentation across categories and detail pages." },
  { t: "04 — Connected shopping journey", b: "A linked experience from product exploration through cart, checkout, and confirmation." },
  { t: "05 — Responsive design direction", b: "Desktop and mobile interface directions designed for a consistent experience." },
];

export function LighthouseCaseStudy({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      {/* 01 — Project hero */}
      <section id="hero" className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32" style={{ background: "linear-gradient(180deg,#080d1a 0%,#0a1020 46%,#0b1120 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.18), rgba(30,41,59,0.12) 55%, transparent 75%)" }} />
        <div aria-hidden className="pointer-events-none absolute right-[8%] top-[35%] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[110px]" />
        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" />Case study {String(index + 1).padStart(2, "0")} / E-commerce</div>
          </div>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3"><span className="h-px w-10 bg-gradient-to-r from-orange-500/70 to-transparent" /><span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">UI/UX Design / E-commerce / Web Design</span></div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50">Light House — E-commerce Website</h1>
              <p className="hero-in mt-4 max-w-2xl font-['Rajdhani'] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-[1.15] text-slate-400">A premium digital shopping experience for an architectural lighting brand.</p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">This project transforms a limited website experience into a more complete online shopping experience for a premium lighting brand—bringing product discovery, storytelling, and purchase flow into one cohesive interface.</p>
            </div>
            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">Project details</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                {[["Industry", "Premium Lighting / E-commerce"], ["Category", "UI/UX Design, Web Design"], ["Platform", "Responsive Website"], ["Focus", "Product discovery & shopping journey"]].map(([l, v]) => (<div key={l}><dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{l}</dt><dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">{v}</dd></div>))}
              </dl>
            </aside>
          </div>
          <Reveal className="mt-12 md:mt-16" instant>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101a2f] to-[#0a1120] p-4 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]" />
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={a("Lighthouse-Mockup.png")} alt="Light House e-commerce website mockup" fill priority className="object-contain" sizes="(max-width: 1200px) 100vw, 1100px" />
                </div>
              </div>
              <p className="mt-6 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Main Light House project mockup</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 02 — Project overview */}
      <section id="overview" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="02" label="Project overview" title="Expanding a limited website into a complete e-commerce experience." />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-5 lg:col-span-5">
              <Reveal><p className="font-sans text-lg leading-relaxed text-slate-300">Light House is a premium lighting brand. The redesign expands the existing limited website experience into a more complete e-commerce experience.</p></Reveal>
              <Reveal delay={40}><p className="font-sans text-sm leading-relaxed text-slate-400 md:text-base">The goal was to bring product discovery, brand storytelling, and a connected shopping journey together within a refined, image-led interface.</p></Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={60}><SectionLabel>Key experience areas</SectionLabel></Reveal>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Product discovery and browsing",
                  "Lighting product categories",
                  "Product detail pages and variants",
                  "Project and installation showcases",
                  "Blog and editorial content",
                  "Brand and contact information",
                  "Shopping cart and checkout journey",
                ].map((item, i) => (
                  <Reveal key={item} delay={30 * i}><div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"><span className="mt-0.5 font-['Space_Mono'] text-[9px] text-orange-400/80">{String(i + 1).padStart(2, "0")}</span><span className="font-sans text-sm text-slate-300">{item}</span></div></Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — Challenge and design objectives */}
      <section id="challenge" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1324 50%,#0a101f 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20" />
        <Container className="relative z-10">
          <SectionHeading index="03" label="Challenge & design objectives" title="Designing a complete, premium shopping experience." intro="The central challenge was to create a more complete and cohesive digital shopping experience for a premium lighting brand—balancing product clarity, brand expression, and a connected purchase flow." />
          <div className="mt-14 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <Reveal key={c.t} delay={35 * i}><div className="h-full border-t border-white/[0.1] pt-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{c.t}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{c.b}</p></div></Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-14 border-l-2 border-orange-500/70 bg-gradient-to-r from-orange-500/[0.06] to-transparent py-5 pl-6 pr-4 md:pl-8">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-400/80">Design objectives</span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">{objectives.map((o) => (<li key={o} className="font-sans text-sm leading-relaxed text-slate-200">• {o}</li>))}</ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 04 — E-commerce experience and user journey */}
      <section id="journey" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "#080d1a" }}>
        <Container>
          <SectionHeading index="04" label="E-commerce experience & user journey" title="A connected path from discovery to order confirmation." intro="The redesigned website supports a complete shopping experience, guiding customers from first impression through purchase with clear steps and supporting content." />
          <Reveal className="mt-12">
            <div className="rounded-2xl border border-white/[0.09] bg-[#090f1d] p-6 md:p-8">
              <SectionLabel>Shopping journey</SectionLabel>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {journeySteps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-sm text-slate-300">{step}</span>
                    {i < journeySteps.length - 1 ? <span className="text-orange-400/70">→</span> : null}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">The journey connects inspiration and browsing with product evaluation, variant selection, and a clear purchase flow through to confirmation.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportingAreas.map((area, i) => (
              <Reveal key={area.t} delay={35 * i}><div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{area.t}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{area.b}</p></div></Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — Visual direction and design system */}
      <section id="direction" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading index="05" label="Visual direction & design system" title="Premium lighting expressed through refined visual foundations." intro="The visual direction communicates premium lighting through deep navy tones, warm lighting imagery, refined typography, and spacious compositions. Supplied design assets are presented as-is to reflect the original Light House visual identity." />
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7 space-y-6">
              <div>
                <SectionLabel>Color palette</SectionLabel>
                <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#070c16] p-2">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={a("Lighthouse-Colorpalette.webp")} alt="Light House color palette" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 700px" />
                  </div>
                </div>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-slate-500">Supplied color palette asset presented without fabricated color values.</p>
              </div>
              <div>
                <SectionLabel>Typography</SectionLabel>
                <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#070c16] p-2">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={a("Lighthouse-Typography.webp")} alt="Light House typography system" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 700px" />
                  </div>
                </div>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-slate-500">Typography presented from the supplied project asset.</p>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={60}>
              <SectionLabel>Design principles</SectionLabel>
              <div className="mt-4 grid gap-4">
                {[
                  ["01 — Visual hierarchy", "Structured layouts that guide attention from brand moments to product information and actions."],
                  ["02 — Premium imagery", "Warm, atmospheric lighting photography to showcase products and installations."],
                  ["03 — Spacious composition", "Generous spacing and clear grouping to support readability and an elevated feel."],
                  ["04 — Brand consistency", "A cohesive interface language across browsing, content, and shopping touchpoints."],
                ].map(([t, b]) => (
                  <div key={t} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"><h3 className="font-['Rajdhani'] text-xl font-semibold text-slate-100">{t}</h3><p className="mt-2 font-sans text-sm leading-relaxed text-slate-400">{b}</p></div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 06 - Product and shopping interface showcase */}
      <section id="showcase" className="border-t border-white/[0.06] py-20 md:py-28" style={{ background: "#060a12" }}>
        <Container>
          <SectionHeading index="06" label="Product & shopping interface showcase" title="Key interface directions for browsing and buying." intro="Explore the complete landing page, then browse supplied interface designs illustrating the homepage direction, product presentation, and responsive shopping experience across the Light House website." />
          <Reveal className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Complete landing page</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300">Scroll to explore <span aria-hidden>↓</span></span>
            </div>
            <BrowserMockup
              src={a("Landing-Page_Lighthouse.png")}
              alt="Full Light House desktop landing page"
              url="lighthouse"
              scroll
              heightClass="h-[320px] sm:h-[420px] lg:h-[500px]"
              width={1440}
              height={8219}
              sizes="(max-width: 1200px) 100vw, 1100px"
              glow
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">Image-based scrollable preview - full desktop landing page</p>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <EditorialGallery items={showcaseItems} title="Light House" />
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
              <SectionLabel>Showcased experience areas</SectionLabel>
              <p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">Homepage and landing direction, product category and listing experience, product detail pages with variants, cart, checkout, payment and order confirmation, and supporting content such as project showcases—represented through the available supplied design assets.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 07 - Complete desktop experience and responsive presentation */}
      <section id="responsive" className="border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}>
        <Container>
          <SectionHeading index="07" label="Responsive presentation" title="Designed for desktop and mobile." intro="The available assets include desktop and mobile interface presentations, illustrating a consistent visual direction across screen sizes." />
          <Reveal className="mt-12">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionLabel>Consistent cross-device direction</SectionLabel>
                <p className="mt-3 font-sans text-sm leading-relaxed text-slate-400">Layouts and product-focused compositions are presented for both desktop and mobile, maintaining the Light House visual identity and shopping experience. No additional responsive screens were fabricated beyond the supplied designs.</p>
              </div>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070c16] p-3">
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={a("Lighthouse-Mobile.png")} alt="Light House mobile responsive presentation" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 700px" />
                  </div>
                </div>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-slate-500">Supplied mobile presentation asset.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 08 — Outcomes, reflection and project links */}
      <section id="outcomes" className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28" style={{ background: "linear-gradient(180deg,#0b1120 0%,#0c1426 55%,#080d1a 100%)" }}>
        <Container className="relative z-10">
          <SectionHeading index="08" label="Outcomes & reflection" title="A cohesive foundation for premium lighting e-commerce." />
          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {outcomes.map((o, i) => (
              <Reveal key={o.t} delay={35 * i}><div className="border-t border-white/[0.1] pt-4"><span className="font-['Space_Mono'] text-[9px] tracking-[0.14em] text-orange-400/70">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{o.t}</h3><p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{o.b}</p></div></Reveal>
            ))}
          </div>
          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><SectionLabel>Key reflection</SectionLabel></Reveal>
              <Reveal delay={60}>
                <blockquote className="mt-5 font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                  <span className="mr-1 text-3xl text-orange-500/70">“</span>
                  Designing for a premium lighting brand reinforced the value of combining strong product imagery with clear information hierarchy and a connected shopping experience. When browsing, product understanding, and purchase flow work together, the interface can better express the brand while supporting confident decisions.
                </blockquote>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal><SectionLabel>Design focus</SectionLabel></Reveal>
              <ul className="mt-4">
                {["Premium, image-led e-commerce experience", "Clear product discovery and category structure", "Detailed product presentation with variants", "Connected cart-to-confirmation journey", "Consistent desktop and mobile direction"].map((item, i) => (
                  <Reveal key={item} delay={30 * i}><li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3"><span className="font-sans text-[13px] text-slate-300">{item}</span><span className="font-['Space_Mono'] text-[9px] text-slate-600">{String(i + 1).padStart(2, "0")}</span></li></Reveal>
                ))}
              </ul>
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

    </main>
  );
}
