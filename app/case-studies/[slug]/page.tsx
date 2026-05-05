"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/case-studies";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GalleryCarousel from "@/components/gallery-carousel";
import IPhoneFrame from "@/components/device-frames/iphone-frame";
import DesktopFrame from "@/components/device-frames/desktop-frame";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="relative w-full min-h-screen flex items-center justify-center py-40"
          style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}>
          <div className="text-center">
            <h1 className="font-['Rajdhani'] text-4xl font-bold text-slate-100 mb-4">Case Study Not Found</h1>
            <Link
              href="/case-studies"
              className="font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-5 py-3 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-250 hover:bg-orange-600 inline-flex items-center gap-2 rounded-sm"
            >
              Back to Case Studies
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const caseStudyIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextCaseStudy = caseStudies[caseStudyIndex + 1] || caseStudies[0];
  const prevCaseStudy = caseStudyIndex > 0 ? caseStudies[caseStudyIndex - 1] : null;

  return (
    <>
      <Header />
      <main className="relative w-full overflow-hidden">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full py-20 md:py-28 overflow-hidden min-h-[60vh] flex items-center"
          style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-purple-500/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="relative z-10 w-[90%] max-w-[1000px] mx-auto">
            <div ref={contentRef}>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-['Space_Mono'] text-xs tracking-[0.12em] uppercase text-orange-500 hover:text-orange-400 transition-colors duration-300 mb-8"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
                <span className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase text-orange-500/40">
                  Case Study {String(caseStudyIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <h1 className="font-['Rajdhani'] text-5xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                {caseStudy.title}
              </h1>

              <p className="font-sans text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
                {caseStudy.overview}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Space_Mono'] text-[9px] tracking-[0.12em] uppercase px-3 py-1.5 border text-slate-400 border-slate-100/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="w-12 h-px mb-12" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />

              {/* Featured Image Preview */}
              <div className="relative mt-12 md:mt-16 -mx-8 md:mx-0">
                <div className="relative h-64 md:h-96 overflow-hidden rounded-lg" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={caseStudy.gallery[0]}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(9,9,15,0.8) 0%, rgba(9,9,15,0.2) 60%, transparent 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative w-full py-20 md:py-32 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0b1120 20%, #0d1424 60%, #0f172a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)" }} />

          <div className="relative z-10 w-[90%] max-w-[1000px] mx-auto">
            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="relative group">
                <div className="absolute -inset-1 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none rounded-lg" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(168,85,247,0.1))" }} />

                <div className="relative p-8 rounded-lg" style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.7), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-orange-500/60" />
                    <h2 className="font-['Rajdhani'] text-2xl font-bold text-orange-400">Challenge</h2>
                  </div>
                  <p className="font-sans text-slate-300 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none rounded-lg" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(249,115,22,0.1))" }} />

                <div className="relative p-8 rounded-lg" style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.7), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                    <h2 className="font-['Rajdhani'] text-2xl font-bold text-purple-400">Solution</h2>
                  </div>
                  <p className="font-sans text-slate-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-20">
              <h2 className="font-['Rajdhani'] text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                <div className="w-12 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
                Results
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-1 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none rounded-lg" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(168,85,247,0.08))" }} />

                    <div className="relative p-6 rounded-lg" style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.7))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)" }}>
                      <span className="inline-block font-['Space_Mono'] text-sm text-orange-300 font-bold mb-3">▹ Result {String(i + 1).padStart(2, "0")}</span>
                      <p className="font-sans text-slate-300 leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GalleryCarousel images={caseStudy.gallery} title={caseStudy.title} />

            {/* Device Showcase Section */}
            <div className="mb-20">
              <h2 className="font-['Rajdhani'] text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
                <div className="w-12 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
                Desktop & Mobile Views
              </h2>

              {/* Desktop View */}
              <div className="mb-16">
                <div className="mb-6">
                  <h3 className="font-['Rajdhani'] text-xl font-bold text-slate-300 mb-2 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-orange-400/60 rounded-full" />
                    Desktop Experience
                  </h3>
                  <p className="font-sans text-slate-500 text-sm">
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

              {/* Mobile View */}
              {caseStudy.previews.mobile && (
                <div>
                  <div className="mb-6">
                    <h3 className="font-['Rajdhani'] text-xl font-bold text-slate-300 mb-2 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-purple-400/60 rounded-full" />
                      Mobile Experience
                    </h3>
                    <p className="font-sans text-slate-500 text-sm">
                      Optimized mobile interface with touch-friendly interactions
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <IPhoneFrame
                      src={caseStudy.previews.mobile}
                      alt={`${caseStudy.title} - Mobile View`}
                    />
                  </div>
                </div>)}
            </div>

            {/* CTA */}
            <div className="py-12 border-t border-slate-100/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-['Rajdhani'] text-2xl font-bold text-slate-100 mb-2">
                    Ready to explore the design details?
                  </h3>
                  <p className="font-sans text-slate-400">
                    View the full design on Figma or Dribbble
                  </p>
                </div>

                {
                  caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-6 py-3 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-250 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] rounded-sm group whitespace-nowrap"
                    >
                      Live Site
                      <svg className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )
                }
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-6 py-3 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-250 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] rounded-sm group whitespace-nowrap"
                >
                  View Full Design
                  <svg className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section
          className="relative w-full py-16 md:py-24 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

          <div className="relative z-10 w-[90%] max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {prevCaseStudy && (
                <Link
                  href={`/case-studies/${prevCaseStudy.slug}`}
                  className="group relative block no-underline"
                >
                  <div
                    className="relative p-8 rounded-lg transition-all duration-500 ease-out group-hover:-translate-y-1.5"
                    style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.8), rgba(10,10,18,0.9))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-orange-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-orange-500/60">Previous</span>
                    </div>
                    <h3 className="font-['Rajdhani'] text-xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                      {prevCaseStudy.title}
                    </h3>
                  </div>
                </Link>
              )}

              <Link
                href={`/case-studies/${nextCaseStudy.slug}`}
                className="group relative block no-underline md:col-start-2"
              >
                <div
                  className="relative p-8 rounded-lg transition-all duration-500 ease-out group-hover:-translate-y-1.5 text-right"
                  style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.8), rgba(10,10,18,0.9))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
                >
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-purple-500/60">Next</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-purple-400">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="font-['Rajdhani'] text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                    {nextCaseStudy.title}
                  </h3>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-6 py-3 bg-slate-900/50 backdrop-blur-sm text-slate-300 border border-slate-100/10 no-underline transition-all duration-250 hover:text-slate-100 hover:border-slate-100/30 hover:bg-slate-800/50 rounded-sm"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
