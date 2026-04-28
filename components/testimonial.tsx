"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 24 });
      gsap.set(cardsRef.current, { opacity: 0, y: 36 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      tl.to(cardsRef.current, { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [featured, ...supporting] = testimonials;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0d1424 48%, #0b1120 100%)" }}
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
      <div className="absolute left-[8%] top-1/3 h-52 w-52 rounded-full bg-orange-500/[0.03] blur-[95px]" />
      <div className="absolute right-[12%] bottom-[8%] h-56 w-56 rounded-full bg-purple-500/[0.025] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div ref={headerRef} className="mb-14 md:mb-18">
          <div className="mb-5 flex items-center gap-4">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(to right, rgba(249,115,22,0.55), transparent)" }}
            />
            <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-orange-500/45">
              Client notes
            </span>
          </div>
          <p className="max-w-2xl font-sans text-base leading-8 text-slate-500 md:text-lg">
            A few words from teams I helped turn rough ideas, early screens, and scattered content
            into sharper digital experiences.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
          {featured && (
            <article
              ref={(el) => {
                cardsRef.current[0] = el;
              }}
              className="relative min-h-[360px] overflow-hidden px-6 py-8 md:px-10 md:py-10"
              style={{
                background: "linear-gradient(145deg, rgba(15,15,25,0.62), rgba(9,9,15,0.82))",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.06), 0 18px 60px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="absolute left-0 top-0 h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.5), rgba(168,85,247,0.24), transparent 95%)",
                }}
              />
              <div className="absolute left-0 top-0 h-24 w-px bg-orange-400/30" />
              <div className="absolute right-0 bottom-0 h-24 w-px bg-purple-400/20" />
              <span className="absolute right-8 top-7 font-['Space_Mono'] text-[11px] tracking-[0.25em] text-white/[0.08]">
                01
              </span>

              <blockquote className="relative max-w-[820px] font-['Rajdhani'] text-3xl font-bold leading-[1.15] text-slate-100 md:text-4xl lg:text-[2.75rem]">
                {featured.quote}
              </blockquote>

              <div className="relative mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="font-['Space_Mono'] text-xs uppercase tracking-[0.18em] text-slate-200">
                    {featured.name}
                  </div>
                  <div className="mt-2 font-sans text-sm text-slate-500">
                    {featured.role} / {featured.project}
                  </div>
                </div>
                <div className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.22em] text-orange-500/50">
                  {featured.service}
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-4">
            {supporting.map((item, index) => (
              <article
                key={item.id}
                ref={(el) => {
                  cardsRef.current[index + 1] = el;
                }}
                className="group relative overflow-hidden p-6 md:p-7"
                style={{
                  background: "rgba(255,255,255,0.018)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.055)",
                }}
              >
                <div
                  className="absolute left-0 top-0 h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 8%, rgba(249,115,22,0.38), transparent 92%)",
                  }}
                />
                <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.25em] text-orange-500/40">
                  {String(index + 2).padStart(2, "0")} / {item.project}
                </span>
                <blockquote className="mt-5 font-sans text-base font-medium leading-8 text-slate-300">
                  {item.quote}
                </blockquote>
                <div className="mt-7 border-t border-white/[0.05] pt-5">
                  <div className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    {item.name}
                  </div>
                  <div className="mt-2 font-sans text-sm text-slate-600">
                    {item.role} / {item.service}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
