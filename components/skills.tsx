"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const designTools = ["Figma", "Framer", "Webflow", "Photoshop", "Illustrator", "Lightroom", "Canva"];
const devTools = ["HTML", "CSS", "Tailwind CSS", "ReactJS"];

const categorized = {
  design: skills.filter((s) => designTools.includes(s.name)),
  development: skills.filter((s) => devTools.includes(s.name)),
};

interface SkillCardProps {
  skill: { name: string; icon: string };
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

function SkillCard({ skill, index, cardRef }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="group relative cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-[1px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none rounded-lg"
        style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(168,85,247,0.15), rgba(249,115,22,0.1))", filter: "blur(1px)" }}
      />

      {/* Card body */}
      <div
        className="relative flex flex-col items-center gap-5 px-7 py-8 rounded-lg transition-all duration-500 ease-out group-hover:-translate-y-1.5 overflow-hidden"
        style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.9), rgba(10,10,18,0.95))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% -20%, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.5) 50%, transparent 95%)" }} />

        {/* Corner crosshair — top left */}
        <div className="absolute top-3 left-3 opacity-0 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none">
          <div className="w-3 h-[0.5px] bg-orange-400" />
          <div className="w-[0.5px] h-3 bg-orange-400 -mt-[0.5px]" />
        </div>

        {/* Corner crosshair — bottom right */}
        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none flex flex-col items-end rotate-90">
          <div className="w-3 h-[0.5px] bg-purple-400" />
          <div className="w-[0.5px] h-3 bg-purple-400 self-end" />
        </div>

        <span className="absolute top-3 right-4 font-['Space_Mono'] text-[9px] tracking-[0.2em] text-white/[0.06] transition-all duration-500 group-hover:text-orange-400/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-[-8px] rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)", filter: "blur(8px)" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={skill.icon}
            alt={skill.name}
            className="relative w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.2)]"
          />
        </div>

        <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 transition-colors duration-500 group-hover:text-slate-200 text-center whitespace-nowrap">
          {skill.name}
        </span>

        {/* Bottom fill bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-700 ease-out origin-left"
            style={{
              background: "linear-gradient(to right, rgba(249,115,22,0.5), rgba(168,85,247,0.3))",
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const designLabelRef = useRef<HTMLDivElement>(null);
  const devLabelRef = useRef<HTMLDivElement>(null);
  const designCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const devCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 25 });
      gsap.set([designLabelRef.current, devLabelRef.current], { opacity: 0, x: -20 });
      const allDesign = designCardsRef.current.filter(Boolean);
      const allDev = devCardsRef.current.filter(Boolean);
      gsap.set(allDesign, { opacity: 0, y: 35, scale: 0.95 });
      gsap.set(allDev, { opacity: 0, y: 35, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none reverse" },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
      tl.to(designLabelRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
      tl.to(allDesign, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07, ease: "power3.out" }, "-=0.3");
      tl.to(devLabelRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
      tl.to(allDev, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.07, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-[10%] right-[5%] w-[550px] h-[550px] bg-orange-500/[0.02] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-purple-500/[0.018] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
            <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">Tools & Skills</span>
          </div>
          <h2 className="font-['Rajdhani'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              Work With
            </span>
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-500 font-light max-w-lg leading-relaxed">
            The design tools and technologies that power every pixel of my work.
          </p>
        </div>

        {/* Design Tools */}
        <div className="mb-16 md:mb-20">
          <div ref={designLabelRef} className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500/60" />
              <span className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase text-orange-400/60">Design</span>
            </div>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.15), transparent 60%)" }} />
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.15em] text-slate-600">{categorized.design.length} tools</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categorized.design.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} cardRef={(el) => { designCardsRef.current[i] = el; }} />
            ))}
          </div>
        </div>

        {/* Dev Tools */}
        <div>
          <div ref={devLabelRef} className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500/60" />
              <span className="font-['Space_Mono'] text-[10px] tracking-[0.3em] uppercase text-purple-400/60">Development</span>
            </div>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(168,85,247,0.15), transparent 60%)" }} />
            <span className="font-['Space_Mono'] text-[10px] tracking-[0.15em] text-slate-600">{categorized.development.length} tools</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categorized.development.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={categorized.design.length + i} cardRef={(el) => { devCardsRef.current[i] = el; }} />
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24 w-full h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)" }} />
      </div>
    </section>
  );
}
