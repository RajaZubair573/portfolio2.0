"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CallToAction from "@/components/call-to-action";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: "Design", items: ["UI/UX Design", "Figma", "Adobe Suite", "Prototyping", "Design Systems"] },
  { category: "Development", items: ["Webflow", "React", "Next.js", "Tailwind CSS", "Responsive Design"] },
  { category: "Tools", items: ["Framer", "Git", "Canva", "Lightroom", "Collaboration Tools"] },
];

const stats = [
  { value: "3", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "25+", label: "Happy Clients" },
];

const contactLinks = [
  { icon: "✉️", label: "rajazubair5626573@gmail.com", href: "mailto:rajazubair5626573@gmail.com" },
  { icon: "📞", label: "+92 304 5626573", href: "tel:+923045626573" },
  { icon: "📍", label: "Islamabad, Pakistan", href: null },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([heroRef.current, imageRef.current], { opacity: 0, y: 24 });
      gsap.set(".about-highlight-line", { scaleX: 0 });
      gsap.set(statsRef.current, { opacity: 0, y: 20 });
      gsap.set(skillsRef.current, { opacity: 0, y: 30 });
      gsap.set(connectRef.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      tl.to(
        [heroRef.current, imageRef.current],
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      )
        .to(
          ".about-highlight-line",
          { scaleX: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" },
          "-=0.35"
        )
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
        .to(skillsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(connectRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main>
        <section
          ref={sectionRef}
          className="relative w-full py-28 md:py-40 overflow-hidden min-h-screen"
          style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
        >
          <div className="relative z-10 mx-auto w-[90%] max-w-[1200px] space-y-20 md:space-y-32">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
              <div ref={imageRef} className="h-full">
                <figure className="flex h-full flex-col border border-white/10 bg-[#0b1120] p-2.5">
                  <div className="relative min-h-[220px] flex-1 overflow-hidden bg-slate-900">
                    <Image
                      src="/og-image.png"
                      alt="Raja Zubair portfolio preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 px-1 pb-1 pt-3 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">
                    <span>Portfolio preview</span>
                    <span>2026</span>
                  </figcaption>
                </figure>
              </div>

              <div ref={heroRef}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-500/70" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-orange-400/80">
                    Product designer · Islamabad, Pakistan
                  </span>
                </div>

                <h1 className="font-['Rajdhani'] text-[1.75rem] font-semibold leading-[1.12] text-slate-100 sm:text-[2.25rem] lg:text-[2.75rem]">
                  I&apos;m Raja Zubair. I design products people actually understand.
                </h1>

                <div className="my-8 h-px w-full bg-white/10" />

                <div className="space-y-5 font-sans text-[15px] leading-7 text-slate-400 md:text-base md:leading-[1.85]">
                  <p className="text-slate-300">
                    I work at the point where{" "}
                    <span className="about-highlight">
                      product thinking meets interface design
                      <span className="about-highlight-line" aria-hidden="true" />
                    </span>{" "}
                    — taking a vague problem and turning it into a{" "}
                    <span className="about-highlight">
                      clear, usable product
                      <span className="about-highlight-line" aria-hidden="true" />
                    </span>
                    . Most of that work starts in Figma before it becomes
                    something real in Webflow, React, or Framer.
                  </p>
                  <p>
                    Over the last three years I&apos;ve shipped{" "}
                    <span className="about-highlight">
                      more than 40 projects
                      <span className="about-highlight-line" aria-hidden="true" />
                    </span>{" "}
                    for studios and clients in Pakistan and abroad, including
                    Flow Cubo Studio, Synctom, and Devcubix. Cyberrey, Prime
                    Renovations, Axion Lighting, and CWESD are a few I&apos;m
                    proud of.
                  </p>
                  <p>
                    I hold a Computer Science degree from NUML (2026) with a
                    CGPA of 3.49/4.00, and I&apos;m part of{" "}
                    <span className="about-highlight">
                      Toptal&apos;s top 3% global talent network
                      <span className="about-highlight-line" aria-hidden="true" />
                    </span>
                    .
                  </p>
                </div>

              </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group relative text-center p-8 transition-all duration-500"
                    style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
                    <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
                    <div className="relative">
                      <div className="font-['Rajdhani'] text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-300 to-orange-500 mb-2">
                        {stat.value}
                      </div>
                      <div className="font-['Space_Mono'] text-xs tracking-[0.15em] uppercase text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div ref={skillsRef}>
              <div className="text-center mb-12">
                <h2 className="font-['Rajdhani'] text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                  Skills &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
                    Expertise
                  </span>
                </h2>
                <p className="font-sans text-slate-400">Tools and technologies I work with</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative p-8 transition-all duration-500 hover:-translate-y-1"
                    style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
                    <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
                    
                    <div className="relative">
                      <h3 className="font-['Rajdhani'] text-xl font-bold text-orange-400 mb-4">
                        {skill.category}
                      </h3>
                      <ul className="space-y-2">
                        {skill.items.map((item, j) => (
                          <li key={j} className="font-sans text-sm text-slate-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div ref={connectRef}>
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5))" }} />
                  <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">Let&apos;s Connect</span>
                  <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(249,115,22,0.5))" }} />
                </div>
                <h2 className="font-['Rajdhani'] text-3xl md:text-4xl font-bold text-slate-100">
                  Get in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
                    Touch
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {contactLinks.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  const extraProps = item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined } : {};

                  return (
                    <Wrapper
                      key={i}
                      {...extraProps}
                      className="group relative flex flex-col items-center gap-3 p-6 transition-all duration-500 hover:-translate-y-1 no-underline"
                      style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
                      <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.4) 50%, transparent 90%)" }} />
                      
                      <div className="relative text-3xl transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="relative font-['Space_Mono'] text-xs tracking-[0.08em] text-slate-300 transition-colors duration-300 group-hover:text-orange-400 text-center break-all">
                        {item.label}
                      </span>
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
    </>
  );
}
