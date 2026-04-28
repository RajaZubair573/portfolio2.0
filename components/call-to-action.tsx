"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 40 });
      gsap.set(lineRef.current, { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      tl.to(lineRef.current, { scaleX: 1, duration: 1, ease: "power3.out" });
      tl.to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 py-32 md:py-44 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] bg-purple-500/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

      <div className="relative z-10 w-[90%] max-w-[900px] mx-auto text-center">
        <div
          ref={lineRef}
          className="w-20 h-px mx-auto mb-12 origin-center"
          style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)" }}
        />

        <div ref={contentRef}>
          <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40 mb-6 block">
            Let&apos;s Collaborate
          </span>

          <h2 className="font-['Rajdhani'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6">
            See the impact of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.25)]">
              great design
            </span>{" "}
            on your business
          </h2>

          <p className="font-sans text-base md:text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed mb-12">
            Ready to elevate your digital presence? Let&apos;s build something remarkable together.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
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
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)" }}
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
