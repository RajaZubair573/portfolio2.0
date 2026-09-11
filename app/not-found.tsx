"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const glitchLine1 = useRef<HTMLDivElement>(null);
  const glitchLine2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.set([codeRef.current, labelRef.current, headingRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      });

      tl.to(codeRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.9);

      gsap.to(glitchLine1.current, {
        x: "110%",
        duration: 2.5,
        repeat: -1,
        repeatDelay: 3,
        ease: "power2.inOut",
      });
      gsap.to(glitchLine2.current, {
        x: "-110%",
        duration: 2,
        repeat: -1,
        repeatDelay: 4,
        ease: "power2.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06060a 0%, #0f172a 40%, #0b1120 80%, #06060a 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

      <div
        ref={glitchLine1}
        className="absolute top-[38%] left-0 w-[200px] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-[2] pointer-events-none"
      />
      <div
        ref={glitchLine2}
        className="absolute top-[62%] left-0 w-[150px] h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent z-[2] pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-xl">
        <h1
          ref={codeRef}
          className="font-['Rajdhani'] text-[120px] md:text-[180px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-100/20 to-slate-100/[0.03] select-none pointer-events-none"
        >
          404
        </h1>

        <span
          ref={labelRef}
          className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/50 mb-4 block -mt-16 md:-mt-20"
        >
          Page Not Found
        </span>

        <div
          className="w-16 h-px mx-auto my-6"
          style={{
            background: "linear-gradient(to right, transparent, rgba(249,115,22,0.4), transparent)",
          }}
        />

        <h2
          ref={headingRef}
          className="font-['Rajdhani'] text-2xl md:text-3xl font-semibold text-slate-100 mb-4"
        >
          Looks like this page{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            doesn&apos;t exist
          </span>
        </h2>

        <p
          ref={descRef}
          className="font-sans text-sm md:text-base text-slate-500 font-light leading-relaxed mb-10"
        >
          The page you&apos;re looking for might have been moved, removed,
          or is temporarily unavailable.
        </p>

        <div ref={buttonsRef} className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="group font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-8 py-4 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-3 rounded-sm"
          >
            Go Home
            <svg
              className="transform group-hover:translate-x-1 transition-transform duration-300"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
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

        <div className="absolute top-[15%] left-[10%] w-2 h-2 border-l border-t border-orange-500/20 pointer-events-none" />
        <div className="absolute bottom-[15%] right-[10%] w-2 h-2 border-r border-b border-purple-500/20 pointer-events-none" />
      </div>
    </div>
  );
}
