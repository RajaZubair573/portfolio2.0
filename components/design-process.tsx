"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover & Align",
    output: "Brief → direction",
    body: "I start with the brief, business goals, audience, and constraints. We agree on the problem to solve and what a successful outcome should support.",
  },
  {
    title: "Research & Structure",
    output: "Insight → information",
    body: "I review the project context, references, and competing patterns, then organize the content into sitemap, flows, and a clear reading order.",
  },
  {
    title: "Direction & Systems",
    output: "Ideas → visual language",
    body: "I define typography, color, layout principles, and reusable components so the design has a consistent foundation rather than a collection of one-off screens.",
  },
  {
    title: "Design & Prototype",
    output: "Structure → interface",
    body: "I design the screens in Figma and connect the important paths into a prototype, making hierarchy, interaction, and behavior visible before development.",
  },
  {
    title: "Review & Refine",
    output: "Feedback → decisions",
    body: "I walk through the work with stakeholders, gather feedback, and refine the details that affect clarity, consistency, and usability.",
  },
  {
    title: "Handoff & Support",
    output: "Design → build",
    body: "I package final files, specs, and assets, then stay available through implementation so the built experience remains faithful to the approved design.",
  },
];

export default function DesignProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const stepEls = stepRefs.current.filter(
        (element): element is HTMLLIElement => Boolean(element)
      );

      gsap.set(headerRef.current, { opacity: 0, y: 24 });
      gsap.set(asideRef.current, { opacity: 0, y: 24 });
      gsap.set(stepEls, { opacity: 0, y: 28 });
      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      timeline.to(
        asideRef.current,
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
        "-=0.45"
      );
      timeline.to(
        lineRef.current,
        { scaleY: 1, duration: 1.3, ease: "power2.out" },
        "-=0.55"
      );
      timeline.to(
        stepEls,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=1.05"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #0a0f1e 0%, #0d1424 48%, #0a0f1e 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[8%] h-[520px] w-[520px] rounded-full bg-orange-500/[0.025] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[4%] left-[3%] h-[420px] w-[420px] rounded-full bg-purple-500/[0.02] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div
          ref={headerRef}
          className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(249,115,22,0.6), transparent)",
                }}
              />
              <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-orange-500/50">
                My Design Process
              </span>
            </div>
            <h2 className="font-['Rajdhani'] text-4xl font-bold leading-none text-slate-100 md:text-5xl lg:text-[3.4rem]">
              From unclear brief to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600">
                buildable design.
              </span>
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-8 text-slate-500">
              A repeatable sequence that keeps decisions visible, the work
              focused, and the final design ready to hand off.
            </p>
          </div>

          <div className="flex gap-8 border-t border-white/10 pt-4 font-['Space_Mono'] text-[10px] uppercase tracking-[0.18em] text-slate-500 md:w-[210px]">
            <div>
              <span className="block text-orange-400/70">06</span>
              <span className="mt-1 block text-[9px] text-slate-600">
                Stages
              </span>
            </div>
            <div>
              <span className="block text-slate-300">Brief → build</span>
              <span className="mt-1 block text-[9px] text-slate-600">
                Full path
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
          <div ref={asideRef} className="self-start lg:sticky lg:top-28">
            <div className="border-t border-orange-500/40 pt-5">
              <p className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-orange-400/70">
                The constant
              </p>
              <p className="mt-4 font-['Rajdhani'] text-3xl font-semibold leading-[1.12] text-slate-100 md:text-4xl">
                One clear path, adapted to the project.
              </p>
              <p className="mt-4 max-w-sm font-sans text-[14px] leading-7 text-slate-500">
                The tools and deliverables change with the brief. The sequence
                stays deliberate so nothing important gets skipped.
              </p>
            </div>

            <dl className="mt-8 border-t border-white/[0.07]">
              {[
                { label: "Starts with", value: "The brief" },
                { label: "Turns on", value: "Clear decisions" },
                { label: "Ends with", value: "A buildable system" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-b border-white/[0.07] py-3"
                >
                  <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    {item.label}
                  </dt>
                  <dd className="text-right font-['Rajdhani'] text-lg font-semibold text-slate-300">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="relative">
            <div
              ref={lineRef}
              aria-hidden="true"
              className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-orange-500/70 via-white/10 to-transparent"
            />

            {steps.map((step, index) => (
              <li
                key={step.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="relative grid grid-cols-[36px_minmax(0,1fr)] gap-5 pb-10 last:pb-0 md:gap-7 md:pb-12"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#0a0f1e] font-['Space_Mono'] text-[10px] tracking-[0.12em] text-orange-300/80">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="border-t border-white/[0.08] pt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-['Rajdhani'] text-2xl font-semibold leading-tight text-slate-100 md:text-[1.7rem]">
                      {step.title}
                    </h3>
                    <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-400/70">
                      {step.output}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl font-sans text-[14px] leading-7 text-slate-500">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
