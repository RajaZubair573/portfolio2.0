"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: "Design", items: ["UI/UX Design", "Figma", "Adobe Suite", "Prototyping", "Design Systems"] },
  { category: "Development", items: ["Webflow", "React", "Next.js", "Tailwind CSS", "Responsive Design"] },
  { category: "Tools", items: ["Git", "Framer", "Canva", "Lightroom", "Collaboration Tools"] },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
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
      gsap.set(heroRef.current, { opacity: 0, y: 30 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(statsRef.current, { opacity: 0, y: 20 });
      gsap.set(skillsRef.current, { opacity: 0, y: 30 });
      gsap.set(connectRef.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      tl.to(heroRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
        .to(imageRef.current, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=0.6")
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
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-purple-500/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

          <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto space-y-20 md:space-y-32">
            {/* Hero Section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5))" }} />
                <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">About Me</span>
                <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(249,115,22,0.5))" }} />
              </div>

              <div ref={heroRef}>
                <h1 className="font-['Rajdhani'] text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
                  Crafting{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    Digital Experiences
                  </span>
                  <br />
                  That Matter
                </h1>
                <p className="font-sans text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  UI/UX Designer & Webflow Developer passionate about creating beautiful, functional digital products
                </p>
              </div>
            </div>

            {/* Image + Bio Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div ref={imageRef} className="order-2 md:order-1">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-2xl" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.4)" }}>
                    <Image
                      src="/og-image.png"
                      alt="Raja Zubair - Designer"
                      width={600}
                      height={700}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(9,9,15,0.6) 0%, transparent 50%)" }} />
                    {/* Border glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" style={{ boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.3)" }} />
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <div className="space-y-5 font-sans text-base md:text-lg leading-[1.8] text-slate-300">
                  <p>
                    I&apos;m <span className="text-orange-400 font-semibold">Raja Zubair</span>, a passionate{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-semibold">UI/UX Designer</span>
                    {" "}and{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-semibold">Webflow Developer</span>
                    {" "}with over 3 years of design experience and nearly a year in development.
                  </p>
                  <p className="text-slate-400">
                    I specialize in crafting clean, modern, user-focused websites and digital products that balance aesthetics with performance. My work spans from initial concept and design to final development and deployment.
                  </p>
                  <p className="text-slate-400">
                    I&apos;ve collaborated with international clients on projects like <span className="text-orange-400">Cyberrey</span> and <span className="text-orange-400">Prime Renovations</span>, and worked with Synctom on products including Axion Lighting and CWESD. Currently completing my Bachelor&apos;s in Computer Science (June 2026).
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
      </main>
    </>
  );
}
