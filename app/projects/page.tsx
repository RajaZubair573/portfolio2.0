"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/constants";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
      tl.to(cardsRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full py-28 md:py-40 overflow-hidden min-h-screen"
        style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-purple-500/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
          <div ref={headerRef} className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
              <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">All Projects</span>
            </div>
            <h2 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold text-slate-100 mb-3">
              Look at my{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                Projects
              </span>
            </h2>
            <p className="font-sans text-base md:text-lg text-slate-500 font-light max-w-xl leading-relaxed">
              A comprehensive collection of design and development work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative block"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="relative overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1.5"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)" }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ background: "rgba(9,9,15,1)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
                  >
                    <div className="relative w-full aspect-video overflow-hidden">
                      
                      <Image
                        fill
                        src={project.imagePath}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="relative px-5 pb-5 pt-0 -mt-1">
                      <div className="w-full h-px mb-4" style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent 100%)" }} />
                      <h3 className="font-sans text-lg font-semibold text-slate-100 mb-1.5 tracking-[-0.01em] transition-colors duration-500 group-hover:text-white">
                        {project.name}
                      </h3>
                      <p className="font-sans text-[12px] text-slate-500 leading-[1.6] transition-colors duration-500 group-hover:text-slate-400 line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-[1px] transition-opacity duration-700 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
                  </div>
                </div>

                <div className="absolute -bottom-3 left-[10%] right-[10%] h-12 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.05) 0%, transparent 75%)", filter: "blur(10px)" }} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
