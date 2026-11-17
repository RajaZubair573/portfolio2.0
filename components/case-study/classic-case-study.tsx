"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { CaseStudy } from "@/lib/case-studies";
import GalleryCarousel from "@/components/gallery-carousel";
import DesktopFrame from "@/components/device-frames/desktop-frame";

export function ClassicCaseStudy({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const animation = gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      <section
        className="relative flex min-h-[60vh] w-full items-center overflow-hidden py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/[0.02] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-[5%] z-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.015] blur-[100px]" />

        <div className="relative z-10 mx-auto w-[90%] max-w-[1000px]">
          <div ref={contentRef}>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 font-['Space_Mono'] text-xs uppercase tracking-[0.12em] text-orange-500 transition-colors duration-300 hover:text-orange-400"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="mb-6 flex items-center gap-4">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.5), transparent)",
                }}
              />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.3em] text-orange-500/40">
                Case Study {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h1 className="mb-6 font-['Rajdhani'] text-[clamp(2.3rem,4.8vw,3.8rem)] font-bold leading-tight text-slate-100">
              {caseStudy.title}
            </h1>

            <p className="mb-8 max-w-3xl font-sans text-lg leading-relaxed text-slate-300 md:text-xl">
              {caseStudy.overview}
            </p>

            <div className="mb-12 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-slate-100/10 px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.12em] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="mb-12 h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(249,115,22,0.5), transparent)",
              }}
            />

            <div className="relative -mx-8 mt-12 md:mx-0 md:mt-16">
              <div
                className="relative h-64 overflow-hidden rounded-lg md:h-[40rem]"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                <Image
                  fill
                  src={caseStudy.gallery[0]}
                  alt={caseStudy.title}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  className="h-full w-full object-cover md:object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(9,9,15,0.8) 0%, rgba(9,9,15,0.2) 60%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full overflow-hidden py-20 md:py-32"
        style={{
          background:
            "linear-gradient(180deg, #0a0f1e 0%, #0b1120 20%, #0d1424 60%, #0f172a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
          }}
        />

        <div className="relative z-10 mx-auto w-[90%] max-w-[1000px]">
          <div className="mb-20 grid gap-12 md:grid-cols-2">
            <div className="group relative">
              <div
                className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(168,85,247,0.1))",
                }}
              />
              <div
                className="relative rounded-lg p-8"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(15,15,25,0.7), rgba(10,10,18,0.8))",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500/60" />
                  <h2 className="font-['Rajdhani'] text-2xl font-bold text-orange-400">
                    Challenge
                  </h2>
                </div>
                <p className="font-sans leading-relaxed text-slate-300">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div
                className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(249,115,22,0.1))",
                }}
              />
              <div
                className="relative rounded-lg p-8"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(15,15,25,0.7), rgba(10,10,18,0.8))",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500/60" />
                  <h2 className="font-['Rajdhani'] text-2xl font-bold text-purple-400">
                    Solution
                  </h2>
                </div>
                <p className="font-sans leading-relaxed text-slate-300">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="mb-8 flex items-center gap-3 font-['Rajdhani'] text-[1.75rem] font-bold text-slate-100">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.5), transparent)",
                }}
              />
              Results
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {caseStudy.results.map((result, i) => (
                <div key={i} className="group relative">
                  <div
                    className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(168,85,247,0.08))",
                    }}
                  />
                  <div
                    className="relative rounded-lg p-6"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.7))",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="mb-3 inline-block font-['Space_Mono'] text-sm font-bold text-orange-300">
                      ▹ Result {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans leading-relaxed text-slate-300">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GalleryCarousel images={caseStudy.gallery} title={caseStudy.title} />

          <div className="mb-20">
            <h2 className="mb-12 flex items-center gap-3 font-['Rajdhani'] text-[1.75rem] font-bold text-slate-100">
              <div
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.5), transparent)",
                }}
              />
              Desktop View
            </h2>

            <div className="mb-16">
              <div className="mb-6">
                <h3 className="mb-2 flex items-center gap-2 font-['Rajdhani'] text-xl font-bold text-slate-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-400/60" />
                  Desktop Experience
                </h3>
                <p className="font-sans text-sm text-slate-500">
                  Full-width responsive design optimized for desktop viewing
                </p>
              </div>
              <div className="flex justify-center pb-4">
                <DesktopFrame
                  src={caseStudy.previews.desktop}
                  alt={`${caseStudy.title} - Desktop View`}
                />
              </div>
            </div>
          </div>

          {(caseStudy.liveUrl || caseStudy.link) ? (
            <div className="flex w-full flex-col items-stretch gap-3 border-t border-slate-100/10 py-12 sm:flex-row sm:flex-wrap sm:items-center">
              {caseStudy.liveUrl ? (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-orange-500 px-5 py-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.14em] text-slate-950 no-underline transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_36px_rgba(249,115,22,0.3)] sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Live Site
                  <svg className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ) : null}
              {caseStudy.link ? (
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex w-full items-center justify-center gap-2.5 rounded-sm px-5 py-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.14em] no-underline transition-all duration-300 sm:w-auto sm:px-6 sm:py-3.5 ${caseStudy.liveUrl ? "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-orange-400/40 hover:bg-white/[0.05] hover:text-orange-300" : "bg-orange-500 text-slate-950 hover:bg-orange-400 hover:shadow-[0_0_36px_rgba(249,115,22,0.3)]"}`}
                >
                  View Full Design
                  <svg className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

    </main>
  );
}
