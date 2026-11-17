"use client";

import type { CaseStudy } from "@/lib/case-studies";
import { BrowserMockup } from "./browser-mockup";
import { EditorialGallery, type GalleryItem } from "./editorial-gallery";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import {
  AssetFrame,
  BackLink,
  ComponentButton,
  Container,
  SectionHeading,
  SectionLabel,
  ShowcaseFigure,
} from "./ui";

const s = (file: string) => `/projects/Pablo Marbles and Granite/${file}`;

const assets = {
  mockup: s("Pablo Granite and Marbles.png"),
  hero: s("Hero Section Pablo Marbles.png"),
  materials: s("Our Materials.png"),
  story: s("Our Story Pablo Marbles.png"),
  full: s("Pablo Landing Page.png"),
  product: s("Pablo_Product.webp"),
  about: s("Pablo_About.webp"),
  inventory: s("Pablo_Inventory.webp"),
  blogs: s("Pablo_Blogs.webp"),
  works: s("Pablo_Works.webp"),
  contact: s("Pablo_Contact.webp"),
  remodeling: s("Pablo_Remodeling.webp"),
  palette: s("Pablo_Colorpalette.webp"),
  typography: s("Pablo_typography.png"),
};

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Scope" },
  { id: "challenge", label: "Objectives" },
  { id: "direction", label: "Direction" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
  { id: "showcase", label: "Showcase" },
  { id: "outcomes", label: "Outcomes" },
];

const scope = [
  { n: "01", title: "Website redesign", body: "A cleaner, more contemporary structure for the full site." },
  { n: "02", title: "Visual presentation", body: "Stone surfaces and completed work given more room to lead." },
  { n: "03", title: "Content structure", body: "Information grouped into clearer pages and sections." },
  { n: "04", title: "Material galleries", body: "Granite, marble, quartz, and inventory presented visually." },
  { n: "05", title: "Service presentation", body: "Services explained through direct, scannable content." },
  { n: "06", title: "Appointment flow", body: "A dedicated contact and appointment form as the next step." },
];

const objectives = [
  { n: "01", title: "Premium presence", body: "Make the first impression feel as considered as the stonework itself." },
  { n: "02", title: "Explore materials", body: "Help visitors move through stone types, finishes, and inventory." },
  { n: "03", title: "Show the work", body: "Use completed-project imagery as central evidence of craftsmanship." },
  { n: "04", title: "Clear hierarchy", body: "Reduce clutter through stronger navigation and page structure." },
  { n: "05", title: "Service clarity", body: "Explain what the company offers without overwhelming the visitor." },
  { n: "06", title: "Trustworthy booking", body: "Give the appointment form a clear, credible place in the journey." },
  { n: "07", title: "Consistent interface", body: "Carry the same visual language across the redesigned pages." },
];

const palette = [
  { name: "Primary", value: "#1F73B7" },
  { name: "Secondary", value: "#145A89" },
  { name: "Accent", value: "#F5B63E" },
  { name: "Primary text", value: "#111111" },
  { name: "Secondary text", value: "#4B4B4B" },
  { name: "Tertiary text", value: "#8B8B8B" },
  { name: "Background", value: "#FFFFFF" },
  { name: "Alternate BG", value: "#EDF3F8" },
  { name: "Border", value: "#D9D9D9" },
];

const typeSpecs = [
  { role: "H1 / Display", detail: "Playfair Display · 80px · Semibold" },
  { role: "H2 / Heading", detail: "Playfair Display · 64px · Semibold" },
  { role: "H3 / Heading", detail: "Playfair Display · 36px · Semibold" },
  { role: "Body Large", detail: "Inter · 20px · Regular · 160%" },
  { role: "Body Medium", detail: "Inter · 16px · Regular · 160%" },
  { role: "Body Small", detail: "Inter · 14px · Regular · 160%" },
];

const visualTraits = [
  { n: "01", title: "Stone as hero", body: "Full-bleed photography and slab imagery set the tone before copy does." },
  { n: "02", title: "Light surfaces", body: "White and pale blue backgrounds keep the interface calm and architectural." },
  { n: "03", title: "Warm emphasis", body: "Blue actions and amber accents add precision without competing with the material." },
];

const galleryItems: GalleryItem[] = [
  {
    src: assets.mockup,
    alt: "Pablo Marble and Granite website presentation",
    label: "Concept preview",
    caption: "A refined homepage direction built around stone surfaces and clear navigation.",
  },
  {
    src: assets.typography,
    alt: "Pablo Marble and Granite typography system",
    label: "Typography",
    caption: "Playfair Display headings and Inter body copy from the supplied typography asset.",
  },
  {
    src: assets.palette,
    alt: "Pablo Marble and Granite color palette",
    label: "Palette",
    caption: "The supplied palette brings together blue, deep blue, amber, and neutral text tones.",
  },
  {
    src: assets.product,
    alt: "Pablo Marble and Granite product pages",
    label: "Material pages",
    caption: "Stone categories and premium quartz selections presented with large imagery.",
  },
  {
    src: assets.about,
    alt: "Pablo Marble and Granite about and services pages",
    label: "About & services",
    caption: "Company story and service presentation organized into structured content blocks.",
  },
  {
    src: assets.inventory,
    alt: "Pablo Marble and Granite inventory pages",
    label: "Inventory",
    caption: "Inventory-focused layouts give available stone a dedicated browsing space.",
  },
  {
    src: assets.blogs,
    alt: "Pablo Marble and Granite editorial pages",
    label: "Editorial",
    caption: "Article layouts extend the experience beyond materials and services.",
  },
  {
    src: assets.works,
    alt: "Pablo Marble and Granite completed work pages",
    label: "Completed work",
    caption: "Project imagery presented as visual evidence of finished work.",
  },
  {
    src: assets.contact,
    alt: "Pablo Marble and Granite contact and appointment form",
    label: "Appointment",
    caption: "The contact and appointment form gives prospective customers a direct next step.",
  },
  {
    src: assets.remodeling,
    alt: "Pablo Marble and Granite remodeling and popular color pages",
    label: "Remodeling & colors",
    caption: "Remodeling and popular color pages support the material selection journey.",
  },
];

export function PabloCaseStudy({
  caseStudy,
}: {
  caseStudy: CaseStudy;
  index?: number;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <ReadingProgress />
      <SectionRail items={railItems} />

      <section
        id="hero"
        className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32"
        style={{ background: "linear-gradient(180deg,#080d1a 0%,#0b1220 46%,#101827 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-[16%] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute right-[4%] top-[24%] h-[380px] w-[380px] rounded-full bg-[#1F73B7]/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="hero-in flex flex-wrap items-center justify-between gap-4">
            <BackLink />
            <div className="flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              01 / Project intro / Case Study 09
            </div>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="hero-in flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-orange-500 to-transparent" />
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-300/90">
                  {caseStudy.tags.join(" / ")}
                </span>
              </div>
              <h1 className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[0.94] tracking-[-0.02em] text-slate-50">
                {caseStudy.title}
              </h1>
              <p className="hero-in mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-[1.15] text-slate-400">
                Premium stone, presented with clarity.
              </p>
              <p className="hero-in mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                This project redesigned a premium stone fabrication company&apos;s website to better showcase its materials, craftsmanship, completed projects, and services.
              </p>
              <div className="hero-in mt-7 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              <SectionLabel>Project focus</SectionLabel>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  ["Direction", "Website redesign"],
                  ["Focus", "Materials & projects"],
                  ["Structure", "Clearer page hierarchy"],
                  ["Conversion", "Appointment form"],
                ].map(([label, value], detailIndex) => (
                  <div key={label} className={detailIndex === 3 ? "col-span-2" : undefined}>
                    <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                    <dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <Reveal className="hero-visual-in mt-12 md:mt-16" instant>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#111a2b] to-[#0a101f] p-4 md:p-7">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
                <SectionLabel>Redesigned homepage direction</SectionLabel>
                <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-orange-300">
                  Website design asset
                </span>
              </div>
              <AssetFrame
                src={assets.mockup}
                alt="Pablo Marble and Granite redesigned homepage mockup"
                aspect="aspect-[1642/920]"
                objectClass="object-contain"
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="overview"
        className="border-t border-white/[0.05] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}
      >
        <Container>
          <SectionHeading
            index="02"
            label="Project overview & scope"
            title="A clearer stage for premium stone."
            intro="The existing website needed a more modern and organized presentation to communicate the quality of the company's work and help visitors explore its materials, projects, and services."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                  The redesign puts the material first. Large stone imagery, simpler navigation, and more deliberate page sections give granite, marble, quartz, and completed work a stronger visual presence.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
                {scope.map((item, scopeIndex) => (
                  <Reveal key={item.n} delay={scopeIndex * 35}>
                    <div className="h-full bg-[#0a101b] p-5">
                      <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{item.n}</span>
                      <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{item.title}</h3>
                      <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={80}>
              <ShowcaseFigure
                src={assets.materials}
                alt="Pablo Marble and Granite materials section"
                label="Material presentation"
                title="Stone given the lead"
                description="The materials section uses generous image areas and concise supporting copy to help visitors understand the range on offer."
                aspect="aspect-[1440/1176]"
                objectClass="object-contain"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="challenge"
        className="border-t border-white/[0.05] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0a101f 0%,#0b1120 100%)" }}
      >
        <Container>
          <SectionHeading
            index="03"
            label="Challenge & design objectives"
            title="From cluttered pages to confident presentation."
            intro="The old website felt outdated and cluttered, making it difficult to showcase materials, projects, and services in a premium and user-friendly way."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <blockquote className="border-l-2 border-orange-500/70 pl-6 font-['Rajdhani'] text-[clamp(1.3rem,2.4vw,1.8rem)] font-medium leading-snug text-slate-100">
                The redesign needed to make the work easier to see, the materials easier to explore, and the next step easier to take.
              </blockquote>
              <p className="mt-6 font-sans text-sm leading-relaxed text-slate-400">
                Each objective focused on reducing friction: stronger hierarchy, clearer content grouping, more visual evidence, and a more credible path to an appointment.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={70}>
              <AssetFrame
                src={assets.hero}
                alt="Pablo Marble and Granite redesigned homepage section"
                aspect="aspect-[1440/914]"
                objectClass="object-contain"
                sizes="(max-width: 1200px) 100vw, 700px"
              />
              <p className="mt-4 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Redesigned homepage hierarchy — image-based design asset
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective, objectiveIndex) => (
              <Reveal key={objective.n} delay={objectiveIndex * 30}>
                <div className="h-full bg-[#0a101b] p-5">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{objective.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-lg font-semibold text-slate-100">{objective.title}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{objective.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="direction"
        className="border-t border-white/[0.06] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0b1120 0%,#0a101f 100%)" }}
      >
        <Container>
          <SectionHeading
            index="04"
            label="Visual direction & design language"
            title="Warm precision, built around the stone."
            intro="The supplied assets show a light, architectural interface: restrained surfaces, strong photography, serif headings, and clear blue and amber accents."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel>Color palette</SectionLabel>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <AssetFrame
                  src={assets.palette}
                  alt="Pablo Marble and Granite color palette asset"
                  aspect="aspect-[2150/1079]"
                  objectClass="object-contain"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06]">
                {palette.map((color, colorIndex) => (
                  <div key={color.name} className="bg-[#0b1120] p-3">
                    <div
                      className="h-7 w-full rounded-md border border-white/10"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="mt-2 truncate font-sans text-[10px] text-slate-300">{color.name}</p>
                    <p className="font-['Space_Mono'] text-[8px] text-slate-500">{color.value}</p>
                    <p className="mt-1 font-['Space_Mono'] text-[7px] text-slate-700">{String(colorIndex + 1).padStart(2, "0")}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={70}>
              <SectionLabel>Typography</SectionLabel>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <AssetFrame
                  src={assets.typography}
                  alt="Pablo Marble and Granite typography asset"
                  aspect="aspect-[2687/1348]"
                  objectClass="object-contain"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                {typeSpecs.map((spec) => (
                  <div key={spec.role} className="grid grid-cols-[1fr_1.6fr] gap-3 border-b border-white/[0.06] px-4 py-2.5 last:border-b-0">
                    <span className="font-sans text-[11px] text-slate-300">{spec.role}</span>
                    <span className="text-right font-['Space_Mono'] text-[8px] uppercase tracking-[0.08em] text-orange-300/70">{spec.detail}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
              {visualTraits.map((trait) => (
                <div key={trait.n} className="bg-[#0a101b] p-6">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{trait.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{trait.title}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{trait.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={60}>
            <AssetFrame
              src={assets.inventory}
              alt="Pablo Marble and Granite inventory interface"
              aspect="aspect-[4005/2078]"
              objectClass="object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Reveal>
        </Container>
      </section>

      <section
        id="experience"
        className="border-t border-white/[0.05] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0a101f 0%,#0b1120 100%)" }}
      >
        <Container>
          <SectionHeading
            index="05"
            label="Website experience & key features"
            title="A more direct path from material to inquiry."
            intro="The redesigned pages give each part of the offering a clearer role: materials are easier to browse, work is easier to view, services are easier to understand, and the appointment form has a natural place at the end of the journey."
          />

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            <Reveal>
              <ShowcaseFigure
                src={assets.product}
                alt="Pablo Marble and Granite material and product pages"
                label="Materials & collections"
                title="Stone categories made visible"
                description="Material and quartz pages use large imagery and clear groupings so the surface itself carries much of the decision-making."
                aspect="aspect-[7482/3882]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>

            <Reveal delay={60}>
              <ShowcaseFigure
                src={assets.works}
                alt="Pablo Marble and Granite completed work pages"
                label="Completed projects"
                title="Work as proof"
                description="Project galleries show finished applications with minimal framing, keeping attention on the craftsmanship and material."
                aspect="aspect-[4800/2490]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>

            <Reveal>
              <ShowcaseFigure
                src={assets.about}
                alt="Pablo Marble and Granite about and services pages"
                label="Services & about"
                title="The company behind the work"
                description="Service and about pages add context without interrupting the visual flow of the website."
                aspect="aspect-[5873/3047]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>

            <Reveal delay={60}>
              <ShowcaseFigure
                src={assets.contact}
                alt="Pablo Marble and Granite contact and appointment form"
                label="Appointment"
                title="A clear next step"
                description="The contact and appointment form turns interest into action with a focused, uncluttered destination."
                aspect="aspect-[4013/2082]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <ShowcaseFigure
                src={assets.remodeling}
                alt="Pablo Marble and Granite remodeling and popular color pages"
                label="Remodeling & colors"
                title="Support for material choices"
                description="Remodeling and popular color pages extend the browsing experience beyond the main product categories."
                aspect="aspect-[5073/2632]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>

            <Reveal delay={60}>
              <ShowcaseFigure
                src={assets.blogs}
                alt="Pablo Marble and Granite editorial pages"
                label="Editorial"
                title="A broader point of view"
                description="Article layouts add a quieter, informational layer to the website while keeping the same visual language."
                aspect="aspect-[5788/3003]"
                objectClass="object-contain"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </Reveal>
          </div>

          <Reveal className="mt-12" delay={80}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
              {[
                { n: "01", t: "Image-led hierarchy", b: "Large visuals lead each section; copy explains only what is needed." },
                { n: "02", t: "Clear navigation", b: "Grouped destinations make materials, work, services, and inquiry easier to find." },
                { n: "03", t: "Focused conversion", b: "Free estimate and appointment language creates a direct path forward." },
              ].map((item) => (
                <div key={item.n} className="bg-[#0b1120] p-6">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">{item.n}</span>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold text-slate-100">{item.t}</h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">{item.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="gallery"
        className="relative overflow-hidden border-t border-white/[0.06] py-14 md:py-20"
        style={{ background: "linear-gradient(180deg,#060a12 0%,#080d18 55%,#060a12 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-15" />
        <Container className="relative z-10 max-w-[1320px]">
          <SectionHeading
            index="06"
            label="Craftsmanship showcase"
            title="The material is the message."
            intro="The gallery keeps the supplied ten-image set and presents it with larger viewing, clearer captions, and straightforward navigation."
          />

          <Reveal className="mt-8">
            <EditorialGallery items={galleryItems} title="Pablo Marble & Granite" />
          </Reveal>
        </Container>
      </section>

      <section
        id="showcase"
        className="border-t border-white/[0.06] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0a101f 0%,#080d18 100%)" }}
      >
        <Container className="max-w-[1320px]">
          <SectionHeading
            index="07"
            label="Complete desktop & responsive experience"
            title="The full redesign, viewed as one continuous page."
            intro="The complete landing page is presented in a refined browser frame with its own vertical scroll. Supporting page assets show how the same design language extends across the site."
          />

          <Reveal className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
              <SectionLabel>Full-page desktop design</SectionLabel>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300">
                Scroll to explore <span aria-hidden>&darr;</span>
              </span>
            </div>
            <BrowserMockup
              src={assets.full}
              alt="Full Pablo Marble and Granite desktop landing page design"
              url="full-page design preview"
              scroll
              heightClass="h-[320px] sm:h-[420px] lg:h-[500px]"
              width={1440}
              height={17304}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <p className="mt-4 text-center font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              Image-based scrollable preview - full desktop landing page, not a live website
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-7">
              <ShowcaseFigure
                src={assets.story}
                alt="Pablo Marble and Granite story section"
                label="Supporting desktop section"
                title="Craftsmanship with context"
                description="The story section connects the visual presentation with the company's approach to fabrication and installation."
                aspect="aspect-[1440/1237]"
                objectClass="object-contain"
                sizes="(max-width: 1200px) 100vw, 700px"
              />
            </Reveal>

            <Reveal className="lg:col-span-5" delay={70}>
              <SectionLabel>Asset coverage</SectionLabel>
              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                {[
                  ["Full-page desktop", "Supplied"],
                  ["Individual page sections", "Supplied"],
                  ["Material & project imagery", "Supplied"],
                  ["Mobile & tablet screens", "Not supplied"],
                ].map(([label, status], coverageIndex) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 last:border-b-0"
                  >
                    <span className="font-sans text-[13px] text-slate-300">{label}</span>
                    <span
                      className={`font-['Space_Mono'] text-[8px] uppercase tracking-[0.14em] ${
                        coverageIndex === 3 ? "text-slate-600" : "text-orange-300/80"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-orange-500/60 pl-5 font-sans text-sm leading-relaxed text-slate-400">
                No mobile or tablet design files were included in the project folder, so this case study does not claim unverified responsive screens. The portfolio layout itself was checked at desktop, tablet, and mobile widths.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="outcomes"
        className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
        style={{ background: "linear-gradient(180deg,#0b1120 0%,#101827 55%,#080d1a 100%)" }}
      >
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-[90px]" />
        <Container className="relative z-10">
          <SectionHeading
            index="08"
            label="Outcomes, reflection & project navigation"
            title="A cleaner, more confident digital presence."
          />

          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-400/[0.08] via-white/[0.02] to-transparent p-6 md:p-10">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-300/85">
                Design transformation
              </span>
              <blockquote className="relative mt-5 max-w-4xl font-['Rajdhani'] text-[clamp(1.35rem,3vw,2.1rem)] font-medium leading-snug text-slate-100">
                An outdated, cluttered website became a premium, gallery-focused experience that makes stone materials, craftsmanship, projects, and services easier to discover.
              </blockquote>
              <p className="relative mt-5 max-w-3xl font-sans text-sm leading-relaxed text-slate-400">
                The value is qualitative: clearer content, stronger visual presentation, and a more polished path from exploration to appointment.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.results.map((result, outcomeIndex) => (
              <Reveal key={result} delay={outcomeIndex * 50}>
                <div className="border-t border-white/[0.1] pt-4">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.16em] text-orange-300/70">
                    {String(outcomeIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate-300">{result}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Reflection</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                  For a business built on visible material quality, the website had to behave like a gallery first and a brochure second. The redesign gives imagery room to persuade, then uses clear structure and calls-to-action to turn attention into an inquiry.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>Design access</SectionLabel>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-sans text-sm leading-relaxed text-slate-400">
                  The complete Figma presentation contains the redesigned pages and supporting layouts referenced throughout this case study.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ComponentButton href={caseStudy.link} external>
                    View Full Design
                  </ComponentButton>
                </div>
              </Reveal>
            </div>
          </div>

        </Container>
      </section>
    </main>
  );
}
