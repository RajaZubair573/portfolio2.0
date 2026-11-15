import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { ArrowUpRight, Container } from "./ui";

export function CaseStudyNextProject({ next }: { next?: CaseStudy }) {
  const image = next?.previews.desktop || next?.gallery[0];

  return (
    <nav
      aria-label="Next project"
      className="border-t border-white/[0.06] py-16 md:py-20"
      style={{ background: "#05080f" }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">
            Next project
          </span>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 no-underline transition-colors duration-300 hover:text-orange-300"
          >
            All case studies
            <ArrowUpRight />
          </Link>
        </div>

        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group mt-8 grid items-center gap-8 no-underline md:mt-10 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                  {next.tags[0] ?? "Case study"}
                </span>
              </div>
              <h2 className="mt-5 font-['Rajdhani'] text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.02] text-slate-100 transition-colors duration-500 group-hover:text-orange-300">
                {next.title}
              </h2>
              <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-slate-500">
                {next.overview}
              </p>
              <span className="mt-7 inline-flex items-center gap-3 border-b border-white/10 pb-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 group-hover:border-orange-400/50 group-hover:text-orange-300">
                View case study
                <ArrowUpRight />
              </span>
            </div>

            <div className="lg:col-span-6">
              {image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.09] bg-[#080d18]">
                  <Image
                    src={image}
                    alt={`${next.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              ) : null}
            </div>
          </Link>
        ) : (
          <div className="mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-['Rajdhani'] text-2xl font-semibold text-slate-200 no-underline transition-colors hover:text-orange-300"
            >
              Browse all case studies
              <ArrowUpRight />
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
