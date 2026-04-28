"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Cyberrey Platform",
    description:
      "A modern SaaS experience designed to simplify complex workflows through intuitive interfaces and lightning-fast performance.",
    tags: ["UI/UX", "Webflow", "CMS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    link: "#",
  },
  {
    id: 2,
    title: "Nova Financial",
    description:
      "High-conversion fintech landing page crafted with precision typography and seamless micro-interactions.",
    tags: ["Web Design", "Development", "Figma"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    link: "#",
  },
  {
    id: 3,
    title: "Aura Skincare",
    description:
      "Premium e-commerce experience featuring editorial photography and a frictionless checkout flow.",
    tags: ["E-Commerce", "Webflow", "Interaction"],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1200",
    link: "#",
  },
  {
    id: 4,
    title: "Nexus Dashboard",
    description:
      "Enterprise-grade analytics interface with real-time data visualization and dark-mode-first design.",
    tags: ["UI/UX", "Dashboard", "SaaS"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    link: "#",
  },
];

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
  cardRef: (el: HTMLAnchorElement | null) => void;
}

function ProjectCard({ project, index, cardRef }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.link}
      ref={cardRef}
      className="group relative block w-full"
      style={{ textDecoration: "none" }}
    >
      <div
        className="relative overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1.5"
        style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)" }}
      >
        <div
          className="relative overflow-hidden bg-[#09090f]"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
        >
          {/* Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, #09090f 0%, #09090f 5%, rgba(9,9,15,0.85) 30%, rgba(9,9,15,0.3) 60%, transparent 100%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(9,9,15,0.4) 0%, transparent 40%, transparent 80%, rgba(9,9,15,0.2) 100%)" }} />
            <div className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(170deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 20%, transparent 50%)" }} />
            <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />

            <div className="absolute top-5 left-6 z-10">
              <span className="font-['Space_Mono'] text-[11px] tracking-[0.25em] text-white/15 transition-all duration-500 group-hover:text-orange-400/40">
                {num}
              </span>
            </div>

            <div className="absolute top-5 right-6 z-10 flex gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-['Space_Mono'] text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 border text-white/25 transition-all duration-500 group-hover:text-white/45 group-hover:border-orange-500/15"
                  style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(9,9,15,0.5)", backdropFilter: "blur(12px)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative px-6 pb-6 pt-0 -mt-1">
            <div className="w-full h-px mb-5 transition-all duration-700" style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent 100%)" }} />
            <div className="flex items-end justify-between gap-5">
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-xl sm:text-[22px] font-semibold text-slate-100 mb-2 tracking-[-0.01em] leading-tight transition-colors duration-500 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="font-sans text-[13px] text-slate-500 leading-[1.65] max-w-[380px] transition-colors duration-500 group-hover:text-slate-400">
                  {project.description}
                </p>
              </div>
              <div className="shrink-0 relative">
                <div className="absolute -inset-3 opacity-0 transition-opacity duration-600 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)", filter: "blur(8px)" }} />
                <div className="relative w-11 h-11 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 0 16px rgba(249,115,22,0.2), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <svg className="w-[18px] h-[18px] text-white transition-transform duration-500 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-[1px] transition-opacity duration-700 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
          <div className="absolute top-0 left-0 w-[1px] h-full transition-opacity duration-700 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(249,115,22,0.15) 50%, transparent 80%)" }} />
        </div>
      </div>
      <div className="absolute -bottom-4 left-[10%] right-[10%] h-16 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 75%)", filter: "blur(12px)" }} />
    </a>
  );
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsRef.current, { opacity: 0, y: 45 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
      tl.to(cardsRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: "power3.out" }, "-=0.45");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[5%] w-[500px] h-[500px] bg-slate-400/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-0 w-[400px] h-[600px] bg-orange-500/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
            <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">Selected Work</span>
          </div>
          <p className="font-sans text-lg md:text-xl text-slate-500 font-light max-w-xl leading-relaxed">
            A selection of projects focused on design, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              cardRef={(el) => { cardsRef.current[index] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
