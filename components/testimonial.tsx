"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuLinkedin } from "react-icons/lu";
import { testimonials } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const LINKEDIN_URL = "https://www.linkedin.com/in/raja-zubair-664066294/";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const active = testimonials[activeIndex] ?? testimonials[0];
  const total = testimonials.length;

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, panelRef.current], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      tl.to(panelRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!quoteRef.current) return;
    const tween = gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 16, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.55,
        ease: "power3.out",
      }
    );
    return () => {
      tween.kill();
    };
  }, [activeIndex]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #0a0f1e 0%, #0d1424 48%, #0b1120 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.045) 3px, rgba(0,0,0,0.045) 4px)",
        }}
      />
      <div className="absolute left-[8%] top-1/3 h-52 w-52 rounded-full bg-orange-500/[0.04] blur-[95px]" />
      <div className="absolute right-[12%] bottom-[8%] h-56 w-56 rounded-full bg-purple-500/[0.03] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div
          ref={headerRef}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.55), transparent)",
                }}
              />
              <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-orange-500/45">
                Testimonials
              </span>
            </div>
            <h2 className="font-['Rajdhani'] text-4xl font-bold leading-none text-slate-100 md:text-5xl">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600">
                clients
              </span>{" "}
              say
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-8 text-slate-500">
              A few words from teams I helped turn rough ideas into sharper
              digital experiences.
            </p>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-sm border border-[#0a66c2]/40 bg-[#0a66c2]/10 px-5 py-3.5 font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-slate-200 no-underline transition-all duration-300 hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
          >
            <LuLinkedin className="text-base transition-transform duration-300 group-hover:scale-110" />
            View on LinkedIn
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div ref={panelRef} className="grid min-w-0 gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Spotlight quote */}
          <article
            className="relative flex min-w-0 flex-col overflow-hidden rounded-sm border border-white/[0.07] p-6 sm:p-9 md:p-12"
            style={{
              background:
                "linear-gradient(145deg, rgba(15,15,25,0.72), rgba(9,9,15,0.9))",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.03), 0 24px 70px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="absolute left-0 top-0 h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.55), rgba(168,85,247,0.28), transparent 95%)",
              }}
            />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/[0.08] blur-[90px]" />
            <svg
              className="pointer-events-none absolute right-5 top-4 h-24 w-24 text-orange-500/[0.07] sm:right-8 sm:top-6 sm:h-32 sm:w-32"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.5 5C6 5 4 8 4 12c0 3 2 5 4.5 5S12 15 12 12.5 10.5 8 8.5 8c.5-1.5 1.5-2 3-2.5L9.5 5Zm10 0C16 5 14 8 14 12c0 3 2 5 4.5 5S22 15 22 12.5 20.5 8 18.5 8c.5-1.5 1.5-2 3-2.5L19.5 5Z" />
            </svg>

            <div className="relative flex items-center justify-between">
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.25em] text-orange-500/50">
                Client feedback
              </span>
              <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] text-white/15">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <div ref={quoteRef} className="relative flex min-w-0 flex-1 flex-col">
              <blockquote className="mt-8 max-w-[720px] whitespace-pre-line break-words font-['Rajdhani'] text-lg font-semibold leading-[1.55] text-slate-200 sm:text-xl md:text-[1.6rem]">
                {active.quote}
              </blockquote>

              <div className="mt-auto pt-9">
                <div className="mb-6 h-px w-full bg-white/[0.06]" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500/30 font-['Rajdhani'] text-lg font-bold text-orange-300"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 35%, rgba(249,115,22,0.16), rgba(9,9,15,0.9) 72%)",
                      }}
                    >
                      {active.project.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="break-words font-['Space_Mono'] text-xs uppercase tracking-[0.16em] text-slate-200">
                        {active.name}
                      </div>
                      <div className="mt-1 break-words font-sans text-sm text-slate-500">
                        {active.role} / {active.project}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-sm border border-orange-500/20 bg-orange-500/[0.06] px-3 py-1.5 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-400/80">
                    {active.service}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)]"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-orange-500/50 hover:text-orange-400"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-orange-500/50 hover:text-orange-400"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Selector rail */}
          <div className="flex min-w-0 flex-col">
            <span className="mb-3 hidden font-['Space_Mono'] text-[10px] uppercase tracking-[0.25em] text-slate-600 lg:block">
              All testimonials
            </span>
            <div className="experience-scroller flex min-w-0 gap-2.5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-1 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0">
              {testimonials.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative shrink-0 snap-start overflow-hidden rounded-sm border p-4 text-left transition-all duration-300 lg:w-full ${
                      isActive
                        ? "border-orange-500/40 bg-orange-500/[0.07]"
                        : "border-white/[0.06] bg-white/[0.015] hover:border-white/15 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-0.5 transition-all duration-300 ${
                        isActive ? "bg-orange-400" : "bg-transparent"
                      }`}
                    />
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`font-['Space_Mono'] text-[9px] tracking-[0.25em] ${
                          isActive ? "text-orange-400" : "text-slate-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] ${
                          isActive ? "text-orange-300/70" : "text-slate-600"
                        }`}
                      >
                        {item.service}
                      </span>
                    </div>
                    <div
                      className={`mt-2 whitespace-nowrap font-['Rajdhani'] text-lg font-bold leading-tight transition-colors duration-300 ${
                        isActive ? "text-slate-100" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {item.project}
                    </div>
                    <div className="mt-0.5 whitespace-nowrap font-sans text-xs text-slate-600">
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
