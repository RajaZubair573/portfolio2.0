"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypographyReveal } from "./typography-reveal";

gsap.registerPlugin(ScrollTrigger);

const recognitionStats = [
  { value: "3%", label: "Top of global talent" },
  { value: "2026", label: "Joined the network" },
  { value: "Vetted", label: "Screened & selected" },
];

export default function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, panelRef.current], { opacity: 0, y: 32 });
      gsap.set(".recognition-stat", { opacity: 0, y: 18 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      tl.to(panelRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4");
      tl.to(
        ".recognition-stat",
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );

      ringsRef.current.forEach((ring, i) => {
        if (!ring) return;
        gsap.to(ring, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 38 + i * 16,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36 lg:py-40"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.045) 3px, rgba(0,0,0,0.045) 4px)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-px w-full z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.18), rgba(168,85,247,0.12), transparent 95%)",
        }}
      />
      <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-orange-500/[0.05] blur-[130px] pointer-events-none z-0" />
      <div className="absolute right-[10%] bottom-[12%] h-80 w-80 rounded-full bg-purple-500/[0.04] blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div
          ref={headerRef}
          className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(249,115,22,0.55), transparent)",
              }}
            />
            <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-orange-500/50">
              Recognition
            </span>
          </div>
          <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Toptal Talent Network
          </span>
        </div>

        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-sm border border-orange-500/20"
          style={{
            background:
              "linear-gradient(145deg, rgba(15,15,25,0.78), rgba(9,9,15,0.94))",
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 90px rgba(0,0,0,0.45)",
          }}
        >
          <div
            className="absolute left-0 top-0 h-px w-full z-[2]"
            style={{
              background:
                "linear-gradient(to right, transparent 4%, rgba(249,115,22,0.65), rgba(168,85,247,0.35), transparent 96%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-orange-500/25 blur-[130px] z-0" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-purple-500/15 blur-[130px] z-0" />
          <span className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 select-none font-['Bebas_Neue'] text-[19rem] leading-none text-white/[0.025] lg:block">
            3%
          </span>

          <div className="relative z-10 grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-2 lg:p-12 xl:p-14">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/[0.08] px-3 py-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-orange-400"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-orange-300">
                  Toptal Talent Network
                </span>
              </div>

              <h2 className="font-['Rajdhani'] text-[2.5rem] font-bold leading-[1.02] text-slate-100 sm:text-5xl lg:text-[3.4rem]">
                Recognized Among the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                  Top 3%
                </span>{" "}
                of Global Talent
              </h2>

              <div
                className="my-7 h-px w-full max-w-[540px]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.5), rgba(255,255,255,0.07) 40%, rgba(168,85,247,0.2), transparent)",
                }}
              />

              <TypographyReveal
                animationType="colorizeIn"
                revealType="word"
                start="top 82%"
                end="bottom 52%"
                mutedColor="rgba(148,163,184,0.18)"
                className="max-w-[560px] font-sans text-base font-medium leading-8 text-slate-300 md:text-[1.05rem] md:leading-[1.8]"
              >
                Proud to be part of Toptal&apos;s exclusive global talent network,
                representing the top 3% of talent worldwide. Joining Toptal in
                November 2026 marks a significant milestone in my journey as a
                Product Designer and reflects my commitment to delivering
                high-quality digital experiences.
              </TypographyReveal>

              <div className="mt-9 grid max-w-[540px] grid-cols-3 gap-3 sm:gap-5">
                {recognitionStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="recognition-stat border-l border-orange-500/30 pl-3 sm:pl-4"
                  >
                    <div className="font-['Rajdhani'] text-2xl font-bold leading-none text-slate-100 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 font-['Space_Mono'] text-[8px] uppercase leading-relaxed tracking-[0.16em] text-slate-500 sm:text-[9px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-9 inline-flex w-fit items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.18em] text-slate-300 no-underline transition-colors duration-300 hover:text-orange-400"
              >
                More about my journey
                <span className="relative flex h-7 w-7 items-center justify-center border border-slate-100/15 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-orange-500/10">
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
                </span>
              </Link>
            </div>

            <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[360px]">
              <div className="relative flex h-[270px] w-[270px] items-center justify-center sm:h-[330px] sm:w-[330px]">
                <div
                  className="absolute inset-8 rounded-full blur-[55px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.08) 45%, transparent 72%)",
                  }}
                />

                <div
                  ref={(el) => {
                    ringsRef.current[0] = el;
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-white/10"
                />
                <div
                  ref={(el) => {
                    ringsRef.current[1] = el;
                  }}
                  className="absolute inset-7 rounded-full border border-purple-400/15"
                />
                <div
                  ref={(el) => {
                    ringsRef.current[2] = el;
                  }}
                  className="absolute inset-14 rounded-full border border-dashed border-orange-400/20"
                />

                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
                <span className="absolute right-2 top-1/3 h-1.5 w-1.5 rounded-full bg-purple-400/80 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
                <span className="absolute bottom-4 left-7 h-1 w-1 rounded-full bg-orange-400/60" />

                <div
                  className="relative flex h-[64%] w-[64%] flex-col items-center justify-center rounded-full text-center"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 38%, rgba(249,115,22,0.16), rgba(9,9,15,0.92) 70%)",
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,255,255,0.06), 0 24px 70px rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.34em] text-slate-500">
                    Toptal
                  </span>
                  <span className="mt-1 font-['Rajdhani'] text-6xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 drop-shadow-[0_0_25px_rgba(249,115,22,0.35)] sm:text-7xl">
                    3%
                  </span>
                  <span className="mt-2.5 max-w-[130px] font-['Space_Mono'] text-[8px] uppercase leading-relaxed tracking-[0.22em] text-slate-500 sm:text-[9px]">
                    Top of global talent
                  </span>
                </div>

                <div className="absolute -left-1 top-3 flex items-center gap-1.5 rounded-full border border-slate-100/10 bg-slate-950/80 px-2.5 py-1.5 backdrop-blur-md">
                  <span className="h-1 w-1 rounded-full bg-orange-400" />
                  <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-400">
                    Global · Remote
                  </span>
                </div>

                <div className="absolute -right-1 bottom-4 flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-slate-950/80 px-2.5 py-1.5 backdrop-blur-md">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-emerald-400"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-emerald-300">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
