"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/case-studies";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CgArrowTopRight, CgFigma } from "react-icons/cg";
import { LuArrowUpLeft, LuArrowUpRight, LuFigma } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCardProps {
  caseStudy: (typeof caseStudies)[0];
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

function CaseStudyCard({ caseStudy, index, cardRef }: CaseStudyCardProps) {
  const router = useRouter();
  const isReversed = index % 2 === 1;

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on link/button or Figma icon
    if ((e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) {
      return;
    }
    router.push(`/case-studies/${caseStudy.slug}`);
  };

  // Alternating orders for columns on desktop (lg breakpoint) - split 50/50 (col-span-6 / col-span-6)
  const contentClasses = [
    "relative p-8 md:p-12 lg:p-14 flex flex-col justify-between z-10 order-2 lg:col-span-6",
    isReversed ? "lg:order-2" : "lg:order-1",
  ].join(" ");

  const imageClasses = [
    "relative w-full h-72 lg:h-auto min-h-[300px] lg:min-h-full overflow-hidden bg-[#09090f] order-1 lg:col-span-6",
    isReversed ? "lg:order-1" : "lg:order-2",
  ].join(" ");

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className="group relative rounded-none overflow-hidden cursor-pointer border border-white/[0.06] bg-slate-950/40 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#0c0c14]/60"
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        
        {/* Content Section */}
        <div className={contentClasses}>
          <div className="space-y-6">
            {/* Tag/Index Label Header */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-orange-500 font-medium">
                  Featured Case Study
                </span>
              </div>
              <span className="font-['Space_Mono'] text-[11px] tracking-[0.2em] text-slate-600 group-hover:text-orange-500/50 transition-colors duration-500">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-['Rajdhani'] text-3xl md:text-[36px] font-bold text-slate-100 group-hover:text-white transition-colors duration-300 leading-tight">
              {caseStudy.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-sm md:text-[15px] text-slate-400 leading-relaxed font-light">
              {caseStudy.overview}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1 text-[10px] tracking-wider font-['Space_Mono'] text-slate-500 uppercase">
              {caseStudy.tags.map((tag, idx) => (
                <span key={tag} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-slate-800">•</span>}
                  <span className="hover:text-slate-300 transition-colors duration-300">{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between gap-4 pt-6 mt-8 border-t border-white/5">
            <span
              className="inline-flex items-center gap-2 font-['Space_Mono'] text-[10px] tracking-[0.15em] uppercase text-orange-500 font-semibold group-hover:text-orange-400 transition-colors duration-300"
            >
              Explore Case Study
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </span>

            <div className="flex items-center gap-4 text-slate-500 text-lg">
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  title="Live Website"
                >
                  <LuArrowUpRight/>
                </a>
              )}
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                title="Figma Design"
              >
                <LuFigma />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className={cn(imageClasses, "relative")}>
          
          <Image
            fill
            src={caseStudy.gallery[0] || caseStudy.previews.desktop}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover blur-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2}
          />

          <Image
            fill
            src={caseStudy.gallery[0] || caseStudy.previews.desktop}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-500 group-hover:brightness-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2}
          />
          {/* Gradient overlay toward content */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isReversed
                ? "linear-gradient(to right, rgba(6,6,10,0.25) 0%, rgba(6,6,10,0) 100%)"
                : "linear-gradient(to left, rgba(6,6,10,0.25) 0%, rgba(6,6,10,0) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get list of prominent categories for filter buttons
  const filterCategories = ["All", "UI/UX", "Web Design", "Webflow", "E-Commerce", "Figma"];

  // Filter case studies
  const filteredCaseStudies = selectedCategory === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.tags.includes(selectedCategory));

  // Initial load animation for header
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation on list category changes or mount
  useEffect(() => {
    // Get valid elements
    const visibleCards = Array.from(cardsRef.current.values()).filter(Boolean);
    
    if (visibleCards.length > 0) {
      // Clear inline gsap styles first to prevent layout issues
      gsap.killTweensOf(visibleCards);
      
      gsap.fromTo(
        visibleCards,
        { opacity: 0, scale: 0.94, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          overwrite: "auto",
        }
      );
    }

    // Refresh ScrollTrigger since page length changes
    ScrollTrigger.refresh();
  }, [selectedCategory, filteredCaseStudies]);

  return (
    <>
      <main>
        <section
          ref={sectionRef}
          className="relative w-full py-28 md:py-40 overflow-hidden min-h-screen"
          style={{
            background:
              "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)",
          }}
        >
          {/* Background noise and glows */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/[0.025] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-purple-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
            }}
          />

          <div className="relative z-10 w-[90%] max-w-[1100px] mx-auto">
            {/* Header */}
            <div ref={headerRef} className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div
                  className="w-10 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(249,115,22,0.5), transparent)",
                  }}
                />
                <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">
                  Case Studies
                </span>
                <div
                  className="w-10 h-px"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(249,115,22,0.5), transparent)",
                  }}
                />
              </div>
              <h1 className="font-['Rajdhani'] text-4xl md:text-6xl font-bold text-slate-100 mb-6">
                In-Depth Project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  Breakdowns
                </span>
              </h1>
              <p className="font-sans text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                Detailed explorations of design thinking, problem-solving, and
                the creative process behind my most impactful projects.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-2xl mx-auto">
              {filterCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={[
                      "font-['Space_Mono'] text-[11px] tracking-[0.1em] uppercase px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer",
                      isActive
                        ? "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                        : "border-white/5 text-slate-400 bg-white/[0.015] hover:text-slate-200 hover:border-white/10 hover:bg-white/[0.03]",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Case Studies Grid List */}
            {filteredCaseStudies.length > 0 ? (
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <CaseStudyCard
                    key={caseStudy.id}
                    caseStudy={caseStudy}
                    index={index}
                    cardRef={(el) => {
                      if (el) {
                        cardsRef.current.set(caseStudy.id, el);
                      } else {
                        cardsRef.current.delete(caseStudy.id);
                      }
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-white/5 rounded-2xl bg-white/[0.01] backdrop-blur-md">
                <p className="font-sans text-slate-400">No case studies found for &ldquo;{selectedCategory}&rdquo;.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
