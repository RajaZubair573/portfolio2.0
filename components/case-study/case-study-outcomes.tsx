import type { CaseStudyDetail } from "@/lib/case-study-details";
import { Reveal } from "./reveal";
import {
  ComponentButton,
  Container,
  SectionHeading,
  SectionLabel,
} from "./ui";

export function CaseStudyOutcomes({ detail }: { detail: CaseStudyDetail }) {
  const { outcomes } = detail;

  return (
    <section
      id="outcomes"
      className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #0b1120 0%, #0c1426 55%, #080d1a 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-20 [mask-image:radial-gradient(ellipse_at_50%_100%,black,transparent_70%)]"
      />

      <Container className="relative z-10">
        <SectionHeading
          index="08"
          label="Outcomes & deliverables"
          title="A more cohesive digital experience."
        />

        <Reveal delay={50}>
          <p className="mt-5 max-w-2xl font-sans text-[12px] leading-relaxed text-slate-600">
            {outcomes.note}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
          {outcomes.items.map((item, index) => (
            <Reveal key={item.title} delay={35 * index}>
              <div className="border-t border-white/[0.1] pt-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-['Space_Mono'] text-[9px] tracking-[0.14em] text-orange-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-violet-400/60"
                  />
                </div>
                <h3 className="mt-3 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-slate-500">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Reflection</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <blockquote className="relative mt-5 max-w-2xl font-['Rajdhani'] text-xl font-medium leading-snug text-slate-200 md:text-2xl">
                <span
                  aria-hidden="true"
                  className="mr-1 font-['Rajdhani'] text-3xl leading-none text-orange-500/70"
                >
                  “
                </span>
                {outcomes.reflection}
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Deliverables</SectionLabel>
            </Reveal>
            <ul className="mt-4">
              {outcomes.deliverables.map((item, index) => (
                <Reveal key={item} delay={35 * index}>
                  <li className="flex items-center justify-between gap-4 border-t border-white/[0.06] py-3">
                    <span className="flex items-center gap-3">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-orange-400/80"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="font-sans text-[13px] text-slate-300">
                        {item}
                      </span>
                    </span>
                    <span className="font-['Space_Mono'] text-[9px] text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {(outcomes.cta.primary || outcomes.cta.secondary) ? (
          <Reveal delay={80}>
            <div className="mt-14 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {outcomes.cta.primary ? (
                <ComponentButton href={outcomes.cta.primary.href} external>
                  {outcomes.cta.primary.label}
                </ComponentButton>
              ) : null}
              {outcomes.cta.secondary ? (
                <ComponentButton href={outcomes.cta.secondary.href} variant={outcomes.cta.primary ? "outline" : "primary"} external>
                  {outcomes.cta.secondary.label}
                </ComponentButton>
              ) : null}
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
