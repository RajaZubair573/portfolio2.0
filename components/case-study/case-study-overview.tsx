import type { CaseStudyDetail } from "@/lib/case-study-details";
import { Reveal } from "./reveal";
import { Container, SectionHeading, SectionLabel } from "./ui";

export function CaseStudyOverview({ detail }: { detail: CaseStudyDetail }) {
  const { overview } = detail;

  return (
    <section
      id="overview"
      className="relative border-t border-white/[0.05] py-20 md:py-28"
      style={{ background: "#080d1a" }}
    >
      <Container>
        <SectionHeading
          index="02"
          label="Project overview"
          title={overview.title}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {overview.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={40 * index}>
                  <p
                    className={
                      index === 0
                        ? "font-sans text-lg leading-relaxed text-slate-300 md:text-xl"
                        : "font-sans text-sm leading-relaxed text-slate-400 md:text-base"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <Reveal>
                <SectionLabel>Main responsibilities</SectionLabel>
              </Reveal>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {overview.responsibilities.map((item, index) => (
                  <Reveal key={item} delay={35 * index}>
                    <li className="flex items-start gap-3">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0 text-orange-400/80"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="font-sans text-[13px] leading-relaxed text-slate-400">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-10">
            <Reveal>
              <SectionLabel>Project information</SectionLabel>
            </Reveal>
            <dl className="mt-5">
              {overview.information.map((item, index) => (
                <Reveal key={item.label} delay={30 * index}>
                  <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-white/[0.06] py-3.5">
                    <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="font-sans text-[13px] leading-relaxed text-slate-300">
                      {item.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
