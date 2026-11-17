import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { ArrowUpRight, ComponentButton, Container } from "./ui";

export function CaseStudyNextProject({
  next,
  previous,
}: {
  next?: CaseStudy;
  previous?: CaseStudy | null;
}) {
  return (
    <nav
      aria-label="Case study navigation"
      className="border-t border-white/[0.06] py-16 md:py-20"
      style={{ background: "#05080f" }}
    >
      <Container>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">
            Case study navigation
          </span>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 no-underline transition-colors duration-300 hover:text-orange-300"
          >
            All case studies
            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {previous || next ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/case-studies/${previous.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 no-underline transition-colors duration-300 hover:border-orange-400/40"
              >
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Previous
                </span>
                <h3 className="mt-3 font-['Rajdhani'] text-xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">
                  {previous.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-[#080d18] p-6 text-right no-underline transition-colors duration-300 hover:border-orange-400/40"
              >
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  Next
                </span>
                <h3 className="mt-3 font-['Rajdhani'] text-xl font-bold text-slate-100 transition-colors group-hover:text-orange-300">
                  {next.title}
                </h3>
              </Link>
            ) : null}
          </div>
        ) : null}

        <div className="mt-10 text-center">
          <ComponentButton href="/case-studies" variant="outline">
            View All Case Studies
          </ComponentButton>
        </div>
      </Container>
    </nav>
  );
}
