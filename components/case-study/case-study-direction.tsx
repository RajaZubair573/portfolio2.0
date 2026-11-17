import type { CaseStudyDetail } from "@/lib/case-study-details";
import { Reveal } from "./reveal";
import { AssetFrame, Container, SectionHeading, SectionLabel } from "./ui";

export function CaseStudyDirection({ detail }: { detail: CaseStudyDetail }) {
  const { direction } = detail;

  return (
    <section
      id="direction"
      className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #0b1120 0%, #0c1324 50%, #090f1c 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-subtle opacity-[0.08] [mask-image:radial-gradient(ellipse_at_50%_15%,black,transparent_70%)]"
      />

      <Container className="relative z-10">
        <SectionHeading
          index="05"
          label="Visual direction & design system"
          title={direction.title}
          intro={direction.intro}
        />

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {direction.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={45 * index}>
              <div className="border-t border-white/[0.1] pt-5">
                <span className="font-['Space_Mono'] text-[10px] tracking-[0.14em] text-orange-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
                  {principle.title}
                </h3>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-slate-500">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-10">
          <Reveal>
            <SectionLabel>Design system</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Typography
              </p>
              <div className="mt-4">
                <AssetFrame
                  src={direction.typographyImage}
                  alt="CyberRey typography system"
                  aspect="aspect-[2/1]"
                  objectClass="object-contain"
                  imageClassName="p-2 md:p-4"
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="bg-[#070c16]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {direction.typographyRoles.map((role) => (
                  <span
                    key={role}
                    className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-400"
                  >
                    {role}
                  </span>
                ))}
                <span className="font-sans text-[11px] text-slate-600">
                  {direction.typographyCaption}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Color palette
                </p>
                <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.14em] text-slate-600">
                  {direction.paletteNote}
                </span>
              </div>
              <ul className="mt-4">
                {direction.colors.map((color, index) => (
                  <Reveal key={color.hex} delay={25 * index}>
                    <li className="flex items-center gap-3 border-t border-white/[0.06] py-2.5">
                      <span
                        className="h-8 w-8 shrink-0 rounded-md border border-white/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-sans text-[12px] font-medium text-slate-300">
                          {color.name}
                        </span>
                        <span className="block font-['Space_Mono'] text-[8px] uppercase tracking-[0.14em] text-slate-600">
                          {color.role}
                        </span>
                      </span>
                      <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.1em] text-slate-500">
                        {color.hex}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Navigation & components
              </p>
              <div className="mt-4">
                <AssetFrame
                  src={direction.componentsImage}
                  alt="CyberRey navigation and interface components"
                  aspect="aspect-[16/9]"
                  objectClass="object-contain"
                  imageClassName="p-2 md:p-4"
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="bg-[#070c16]"
                />
              </div>
              <p className="mt-4 font-sans text-[11px] text-slate-600">
                {direction.componentsCaption}
              </p>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-5">
              <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                UI components
              </p>
              <ul className="mt-4 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
                {direction.componentFamilies.map((component, index) => (
                  <Reveal key={component} delay={30 * index}>
                    <li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3">
                      <span className="font-sans text-[13px] text-slate-300">
                        {component}
                      </span>
                      <span className="font-['Space_Mono'] text-[9px] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
