"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[380px] bg-orange-500/[0.035] rounded-full blur-[140px] pointer-events-none z-0" />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-px w-full z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.2), rgba(168,85,247,0.14), transparent 95%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <div ref={contentRef}>
          <div className="mb-5 flex items-center justify-center gap-3">
            <div
              className="h-px w-8 sm:w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(249,115,22,0.5))",
              }}
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="text-orange-400"
            >
              <path
                d="M8 4h8v2a4 4 0 0 1-8 0V4Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 5H5.5a2 2 0 0 0 0 4H7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 5h2.5a2 2 0 0 1 0 4H17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 10v4" strokeLinecap="round" />
              <path
                d="M9.5 19h5l-.6-4h-3.8l-.6 4Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9 19h6" strokeLinecap="round" />
            </svg>
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-500/60">
              Available for select projects · 2026
            </span>
            <div
              className="h-px w-8 sm:w-10"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(168,85,247,0.4))",
              }}
            />
          </div>

          <h2 className="font-['Rajdhani'] text-[2.4rem] font-bold leading-[1.05] text-slate-100 sm:text-5xl md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
              award-worthy
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-lg font-sans text-base font-light leading-relaxed text-slate-400 md:text-lg">
            Ready to elevate your digital presence? Let&apos;s create something
            remarkable together.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-8 py-4 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-3 rounded-sm"
            >
              Start a Project
              <svg
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-8 py-4 text-slate-300 border border-slate-100/10 no-underline transition-all duration-300 hover:text-slate-100 hover:border-slate-100/30 rounded-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(12px)",
              }}
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
