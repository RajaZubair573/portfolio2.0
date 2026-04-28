"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "@/components/contact-form";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "rajazubair5626573@gmail.com",
    href: "mailto:rajazubair5626573@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "+92 304 5626573",
    href: "tel:+923045626573",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
];

const socialLinks = [
  {
    label: "Figma",
    href: "https://www.figma.com/@rajazubair",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
        <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
        <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
        <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
        <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rajazubair",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { opacity: 0, x: -30 });
      gsap.set(rightRef.current, { opacity: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      tl.to(leftRef.current, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" })
        .to(rightRef.current, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }, "-=0.6");
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
          <div className="absolute top-1/4 left-[5%] w-[600px] h-[600px] bg-orange-500/[0.025] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-[5%] w-[500px] h-[500px] bg-purple-500/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)" }} />

          <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
            {/* Page header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5))" }} />
                <span className="font-['Space_Mono'] text-[11px] tracking-[0.3em] uppercase text-orange-500/40">Contact</span>
                <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(249,115,22,0.5))" }} />
              </div>
              <h1 className="font-['Rajdhani'] text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-4 leading-tight">
                Let&apos;s Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  Together
                </span>
              </h1>
              <p className="font-sans text-lg text-slate-400 max-w-xl mx-auto">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something great.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left — Contact Info */}
              <div ref={leftRef} className="lg:col-span-2 space-y-8">
                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(34,197,94,0.08)", boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.15)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-['Space_Mono'] text-[10px] tracking-[0.15em] uppercase text-green-400">Available for work</span>
                </div>

                <div>
                  <h2 className="font-['Rajdhani'] text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                    Get in Touch
                  </h2>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    Whether you need a full product design, a Webflow build, or just want to chat about a project — my inbox is always open.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-3">
                  {contactInfo.map((item, i) => {
                    const Wrapper = item.href ? "a" : "div";
                    const extraProps = item.href ? { href: item.href } : {};

                    return (
                      <Wrapper
                        key={i}
                        {...extraProps}
                        className="group relative flex items-center gap-4 p-4 transition-all duration-400 no-underline hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
                      >
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
                        <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.35) 50%, transparent 90%)" }} />

                        <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg text-orange-400/70 group-hover:text-orange-400 transition-colors duration-300" style={{ background: "rgba(249,115,22,0.06)", boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.1)" }}>
                          {item.icon}
                        </div>
                        <div className="relative min-w-0">
                          <div className="font-['Space_Mono'] text-[9px] tracking-[0.2em] uppercase text-slate-500 mb-0.5">{item.label}</div>
                          <div className="font-sans text-sm text-slate-300 group-hover:text-orange-400 transition-colors duration-300 truncate">{item.value}</div>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Social links */}
                <div>
                  <div className="font-['Space_Mono'] text-[9px] tracking-[0.2em] uppercase text-slate-500 mb-3">Find me on</div>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="group flex items-center justify-center w-10 h-10 rounded-lg text-slate-400 hover:text-orange-400 transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(145deg, rgba(15,15,25,0.6), rgba(10,10,18,0.8))", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div ref={rightRef} className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
