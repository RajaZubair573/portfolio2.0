import type { CaseStudy } from "@/lib/case-studies";
import type { CaseStudyDetail } from "@/lib/case-study-details";
import { BrowserMockup } from "./browser-mockup";
import { EditorialGallery } from "./editorial-gallery";
import { Reveal } from "./reveal";
import { Container, SectionLabel } from "./ui";

export function CaseStudyShowcase({
  caseStudy,
  detail,
}: {
  caseStudy: CaseStudy;
  detail: CaseStudyDetail;
}) {
  const { showcase } = detail;

  return (
    <section
      id="showcase"
      className="relative border-t border-white/[0.06] py-14 md:py-20"
      style={{ background: "#060a12" }}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="06">Final design showcase</SectionLabel>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 font-['Rajdhani'] text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-slate-50">
                The final
                <br />
                design<span className="text-orange-500">.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <Reveal delay={120}>
              <p className="max-w-md font-sans text-sm leading-relaxed text-slate-400 md:text-base">
                {showcase.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80} className="mt-8 lg:mt-10">
          <BrowserMockup
            src={showcase.desktop.src}
            alt={showcase.desktop.alt}
            url="cyberrey.com"
            scroll
            heightClass="h-[320px] sm:h-[420px] lg:h-[500px]"
            glow
          />
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="flex items-baseline gap-3">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-orange-400/70">
                {showcase.desktop.label}
              </span>
              <span className="font-['Rajdhani'] text-xl font-semibold text-slate-200">
                {showcase.desktop.title}
              </span>
            </div>
            <p className="max-w-md font-sans text-[12px] leading-relaxed text-slate-500 sm:text-right">
              {showcase.desktop.description}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 lg:mt-10">
          <EditorialGallery items={showcase.gallery} title={caseStudy.title} />
        </Reveal>
      </Container>
    </section>
  );
}
