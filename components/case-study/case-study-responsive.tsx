import type { CaseStudyDetail } from "@/lib/case-study-details";
import { BrowserMockup } from "./browser-mockup";
import { Reveal } from "./reveal";
import { AssetFrame, Container, SectionHeading, SectionLabel } from "./ui";

export function CaseStudyResponsive({ detail }: { detail: CaseStudyDetail }) {
  const { responsive } = detail;

  return (
    <section
      id="responsive"
      className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{ background: "#080d1a" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[18%] h-[420px] w-[420px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.32), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          index="07"
          label="Responsive design & key decisions"
          title="Designed for every screen, with intention."
          intro={responsive.lead}
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
              {responsive.points.map((point, index) => (
                <Reveal key={point.title} delay={45 * index}>
                  <div className="border-t border-white/[0.08] pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-['Rajdhani'] text-lg font-semibold text-slate-200 md:text-xl">
                        {point.title}
                      </h3>
                      <span className="font-['Space_Mono'] text-[9px] tracking-[0.12em] text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-500">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80} className="relative">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  {responsive.desktop.label} — {responsive.desktop.title}
                </p>
                <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-600">
                  Scroll inside frame
                </span>
              </div>

              <BrowserMockup
                src={responsive.desktop.src}
                alt={responsive.desktop.alt}
                url="cyberrey.com"
                scroll
                heightClass="h-[300px] sm:h-[380px] lg:h-[440px]"
                glow
              />
            </Reveal>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-12">
          <Reveal>
            <SectionLabel>Key design decisions</SectionLabel>
          </Reveal>

          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {responsive.decisions.map((decision, index) => (
              <Reveal key={decision.title} delay={50 * index}>
                <div>
                  <AssetFrame
                    src={decision.image}
                    alt={decision.imageAlt}
                    aspect="aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="mt-4 flex items-center gap-3">
                    <span className="font-['Space_Mono'] text-[9px] tracking-[0.14em] text-orange-400/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.08]" />
                  </div>
                  <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
                    {decision.title}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-slate-500">
                    {decision.body}
                  </p>
                  <p className="mt-3 font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-600">
                    {decision.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
