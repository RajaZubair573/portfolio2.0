"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectQuestionnaire from "@/components/project-questionnaire";

gsap.registerPlugin(ScrollTrigger);

const meta = [
  { label: "Focus", value: "Product & Web" },
  { label: "Process", value: "Discover → Design" },
  { label: "Location", value: "Remote · Worldwide" },
];

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([contentRef.current, panelRef.current, footerRef.current], {
        opacity: 0,
        y: 28,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      });
      tl.to(
        panelRef.current,
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.55"
      );
      tl.to(
        footerRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-24 md:py-32 lg:py-36"
      style={{
        background:
          "radial-gradient(ellipse at 15% 25%, rgba(249,115,22,0.06), transparent 42%), radial-gradient(ellipse at 85% 75%, rgba(168,85,247,0.04), transparent 45%), linear-gradient(180deg, #0f172a 0%, #0b1120 48%, #070b14 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.016]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
        }}
      />
      <div className="absolute left-[12%] top-[18%] h-64 w-64 rounded-full bg-orange-500/[0.045] blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[8%] right-[8%] h-72 w-72 rounded-full bg-purple-500/[0.035] blur-[120px] pointer-events-none z-0" />
      <div
        className="absolute left-0 top-0 h-px w-full z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.28), rgba(168,85,247,0.16), transparent 95%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-px w-full z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div ref={contentRef} className="min-w-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              </span>
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-orange-300/70">
                Available for select projects · 2026
              </span>
            </div>

            <h2 className="font-['Rajdhani'] text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-slate-100">
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-500 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                worth remembering.
              </span>
            </h2>

            <p className="mt-6 max-w-lg font-sans text-base font-light leading-8 text-slate-400">
              Have a product, brand, or idea that needs a sharper digital
              presence? Answer four quick questions on the right and I&apos;ll
              shape the first direction for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-sm border border-orange-500 bg-orange-500 px-7 py-4 font-['Space_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-950 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-[0_10px_35px_rgba(249,115,22,0.28)]"
              >
                Start a Project
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="rounded-sm border border-white/10 bg-white/[0.02] px-7 py-4 font-['Space_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-300 no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                View Work
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-5 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
              {meta.map((item) => (
                <div key={item.label} className="min-w-0">
                  <div className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-600">
                    {item.label}
                  </div>
                  <div className="mt-2 font-['Rajdhani'] text-base font-semibold text-slate-300">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={panelRef} className="min-w-0">
            <ProjectQuestionnaire />
          </div>
        </div>

        <div
          ref={footerRef}
          className="mt-20 flex flex-col gap-3 border-t border-white/[0.06] pt-6 font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Design · Prototyping · Interface Systems</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-orange-500/70" />
            Based in Pakistan · Working worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
