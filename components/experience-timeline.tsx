"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const activeExperience = experience[activeIndex] ?? experience[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
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
      <div className="absolute left-[8%] top-[20%] h-56 w-56 rounded-full bg-orange-500/[0.026] blur-[110px]" />
      <div className="absolute right-[8%] bottom-[18%] h-48 w-48 rounded-full bg-purple-500/[0.022] blur-[100px]" />

      <div ref={contentRef} className="relative z-10 mx-auto max-w-[1180px]">
        <div className="mb-14 flex items-center gap-4">
          <div
            className="w-10 h-px"
            style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }}
          />
          <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">
            Experience
          </span>
        </div>
        <h2 className="font-['Rajdhani'] text-4xl font-bold leading-none text-slate-100 md:text-5xl mb-8">
          Where I&apos;ve Worked
        </h2>

        <div className="grid gap-9 lg:grid-cols-[220px_1fr]">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-slate-100/10 md:block" />
            <div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
              {experience.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.company}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative min-w-max border-0 bg-transparent px-5 py-4 text-left font-['Space_Mono'] text-sm transition-colors duration-300 md:min-w-0 md:pl-7 ${
                      isActive ? "text-orange-300" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute bottom-0 left-0 h-px w-full transition-all duration-300 md:bottom-auto md:top-0 md:h-full md:w-0.5 ${
                        isActive ? "bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,0.55)]" : "bg-white/0"
                      }`}
                    />
                    {item.company}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeExperience.company}
            className="relative overflow-hidden px-0 py-1 md:px-2"
          >
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-3">
              <h3 className="font-['Rajdhani'] text-3xl font-bold leading-tight text-slate-100 md:text-4xl">
                {activeExperience.role}
              </h3>
              <span className="font-['Rajdhani'] text-2xl font-bold text-orange-400 md:text-3xl">
                @ {activeExperience.company}
              </span>
            </div>
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-['Space_Mono'] text-sm tracking-[0.08em] text-slate-500">
              <span>{activeExperience.period}</span>
              <span className="hidden h-1 w-1 rounded-full bg-orange-500/50 sm:block" />
              <span className="uppercase text-orange-500/45">{activeExperience.type}</span>
            </div>

            <ul className="space-y-6">
              {activeExperience.points.map((point) => (
                <li key={point} className="grid grid-cols-[18px_1fr] gap-4 font-sans text-lg leading-8 text-slate-400">
                  <span className="mt-2 font-['Space_Mono'] text-sm text-orange-300">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
