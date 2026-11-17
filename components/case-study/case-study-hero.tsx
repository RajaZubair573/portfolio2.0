import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import type { CaseStudyDetail } from "@/lib/case-study-details";
import { BrowserMockup } from "./browser-mockup";
import { Reveal } from "./reveal";
import { ArrowUpRight, BackLink, Container } from "./ui";

export function CaseStudyHero({
  caseStudy,
  detail,
  index,
}: {
  caseStudy: CaseStudy;
  detail: CaseStudyDetail;
  index: number;
}) {
  const industry =
    detail.meta.find((item) => item.label === "Industry")?.value ??
    caseStudy.tags[0] ??
    "Design";
  const projectType =
    detail.meta.find((item) => item.label === "Project Type")?.value ??
    "Case Study";

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32"
      style={{
        background:
          "linear-gradient(180deg, #080d1a 0%, #0a1020 46%, #0b1120 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-[0.25] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(76,29,149,0.5), rgba(30,27,75,0.15) 55%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[30%] h-[320px] w-[320px] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.22), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div
          className="hero-in flex flex-wrap items-center justify-between gap-4"
          style={{ animationDelay: "40ms" }}
        >
          <BackLink />
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
              Case study {String(index + 1).padStart(2, "0")} / {industry}
            </span>
          </div>
        </div>

        <div className="mt-12 grid items-end gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div
              className="hero-in flex items-center gap-3"
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-orange-500/70 to-transparent" />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">
                {projectType}
              </span>
            </div>

            <h1
              className="hero-in mt-5 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-[0.92] tracking-[-0.02em] text-slate-50"
              style={{ animationDelay: "160ms" }}
            >
              CyberRey
            </h1>
            <p
              className="hero-in mt-3 max-w-2xl font-['Rajdhani'] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-[1.15] text-slate-400"
              style={{ animationDelay: "220ms" }}
            >
              Cybersecurity Website Redesign
            </p>
            <p
              className="hero-in mt-7 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg"
              style={{ animationDelay: "280ms" }}
            >
              {detail.intro}
            </p>
          </div>

          <div
            className="hero-in lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10"
            style={{ animationDelay: "320ms" }}
          >
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">
              Project details
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
              {detail.meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-300">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Reveal className="hero-visual-in relative mt-12 md:mt-16" instant>
          <div className="relative">
            <BrowserMockup
              src="/projects/Cyberrey/Cyberrey Hero Section.png"
              alt="CyberRey final hero section presented in a browser frame"
              url="cyberrey.com"
              aspect="aspect-[16/10]"
              priority
              glow
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 pr-0 sm:flex-row sm:items-center sm:justify-between md:mt-8">
            <p className="flex items-center gap-3 font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
              <span className="text-orange-400/80">01</span>
              <span className="h-px w-6 bg-white/15" />
              Final hero design — desktop
            </p>
            {caseStudy.liveUrl ? (
              <Link
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-400 no-underline transition-colors duration-300 hover:text-orange-300"
              >
                View live site
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
