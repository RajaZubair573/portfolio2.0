"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/case-studies";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCardProps {
  caseStudy: typeof caseStudies[0];
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

function CaseStudyCard({ caseStudy, index, cardRef }: CaseStudyCardProps) {
  // Reverse layout on odd indexes (2nd, 4th…); mobile always stays normal (image top, content bottom)
  const isReversed = index % 2 === 1;

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group no-underline"
    >
      <div
        // ref={cardRef}
        className="relative mb-16 last:mb-0 cursor-pointer"
      >
        <div className="relative overflow-hidden grid grid-cols-12 gap-0">

          {/* Content Section */}
          <div
            className={[
              "relative p-8 md:p-12 col-span-12 row-start-1 flex flex-col justify-between z-10",
              "order-2", // mobile: always below image
              isReversed
                ? "md:col-span-7 md:col-start-6 md:order-2" // reversed: content right
                : "md:col-span-7 md:col-start-1 md:order-1", // normal: content left
            ].join(" ")}
          >
            <div>
              {/* Label */}
              <div className="inline-block mb-4">
                <span className="font-['Space_Mono'] text-[10px] tracking-[0.25em] uppercase text-orange-500/60 bg-orange-500/5 px-3 py-1.5 rounded-full border border-orange-500/20">
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Rajdhani'] text-3xl md:text-4xl font-bold text-slate-100 mb-4 leading-tight">
                {caseStudy.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-slate-100 leading-relaxed mb-6 bg-orange-800 p-4">
                {caseStudy.overview}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {caseStudy.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase text-invert"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icons/Links — right-aligned when reversed on desktop */}
              <div
                className={[
                  "flex items-center gap-4 pt-4 border-t border-slate-100/10",
                  isReversed ? "md:justify-end" : "justify-start",
                ].join(" ")}
              >
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label="View on Figma"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </a>
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label="View project"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-7M13 6a2 2 0 002-2h-2a2 2 0 00-2 2m0 0v4m-6 10l7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={[
              "relative w-full h-64 col-span-12 md:col-span-6 md:row-start-1 md:min-h-full overflow-hidden bg-slate-950",
              "order-1", // mobile: always on top
              isReversed
                ? "md:col-start-1 md:order-1" // reversed: image left
                : "md:col-start-7 md:order-2", // normal: image right
            ].join(" ")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={caseStudy.gallery[0] || caseStudy.previews.desktop}
              alt={caseStudy.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
            />
            {/* Gradient fades toward the content panel */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isReversed
                  ? "linear-gradient(to right, rgba(9,9,15,0.4) 0%, rgba(9,9,15,0) 100%)"
                  : "linear-gradient(to left, rgba(9,9,15,0.4) 0%, rgba(9,9,15,0) 100%)",
              }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
          </div>

          {/* Top border glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] transition-opacity duration-700 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
        </div>

        {/* Bottom glow */}
        <div className="absolute -bottom-4 left-[10%] right-[10%] h-16 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.05) 0%, transparent 75%)", filter: "blur(12px)" }} />
      </div>
    </Link>
  );
}


export default function CaseStudiesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
      tl.to(cardsRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main>
        <section
          ref={sectionRef}
          className="relative w-full py-28 md:py-40 overflow-hidden min-h-screen"
          style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-purple-500/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

          <div className="relative z-10 w-[90%] max-w-[1000px] mx-auto">
            <div ref={headerRef} className="mb-16 md:mb-24 text-center">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-10 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
                <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">Case Studies</span>
                <div className="w-10 h-px" style={{ background: "linear-gradient(to left, rgba(249,115,22,0.5), transparent)" }} />
              </div>
              <h1 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold text-slate-100 mb-6">
                In-Depth Project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  Breakdowns
                </span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                Detailed explorations of design thinking, problem-solving, and the creative process behind my most impactful projects.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  index={index}
                  cardRef={(el) => { cardsRef.current[index] = el; }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}