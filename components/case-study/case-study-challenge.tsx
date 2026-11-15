import type { CaseStudyDetail } from "@/lib/case-study-details";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

export function CaseStudyChallenge({ detail }: { detail: CaseStudyDetail }) {
  const { challenge } = detail;

  return (
    <section
      id="challenge"
      className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #0b1120 0%, #0c1324 50%, #0a101f 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[360px] w-[360px] rounded-full opacity-25 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          index="03"
          label="The challenge"
          title={challenge.title}
        />

        <div className="mt-14 grid gap-x-16 gap-y-9 md:grid-cols-2">
          {challenge.points.map((point, index) => (
            <Reveal key={point.title} delay={55 * index}>
              <div className="grid gap-3 border-t border-white/[0.1] pt-5 sm:grid-cols-[44px_1fr] sm:gap-5">
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-orange-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100 md:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-[13px] leading-relaxed text-slate-400 md:text-sm">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col gap-4 border-l-2 border-orange-500/70 bg-gradient-to-r from-orange-500/[0.06] to-transparent py-5 pl-6 pr-4 md:flex-row md:items-center md:gap-10 md:pl-8">
            <span className="shrink-0 font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-400/80">
              Design objective
            </span>
            <p className="max-w-3xl font-sans text-base leading-relaxed text-slate-200 md:text-lg">
              {challenge.objective}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
