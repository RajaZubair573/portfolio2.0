"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const headingWords = [
  {
    text: "UI/UX",
    class:
      "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]",
  },
  {
    text: "Designer",
    class:
      "text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]",
  },
  { text: "&", class: "text-slate-100" },
  { text: "Webflow", class: "text-slate-100" },
  { text: "Developer", class: "text-slate-100" },
];

const subtextString =
  "I design intuitive, user-focused interfaces and develop them in Webflow — helping businesses create fast, scalable websites that look great and perform even better.";
const subtextWords = subtextString
  .split(" ")
  .map((word) => ({ text: word, class: "text-slate-400" }));

interface HoverStatProps {
  original: string;
  label: string;
  isNumber: boolean;
  targetNum?: number;
  suffix?: string;
  hoverColorClass: string;
  textSizeClass?: string;
}

function HoverStat({
  original,
  label,
  isNumber,
  targetNum = 0,
  suffix = "",
  hoverColorClass,
  textSizeClass = "text-4xl",
}: HoverStatProps) {
  const [display, setDisplay] = useState(original);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isNumber) {
      let current = 1;
      const step = Math.max(1, Math.ceil(targetNum / 10));
      intervalRef.current = setInterval(() => {
        if (current >= targetNum) {
          setDisplay(original);
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          setDisplay(current + suffix);
          current += step;
        }
      }, 40);
    } else {
      let ticks = 0;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
      intervalRef.current = setInterval(() => {
        ticks++;
        if (ticks > 10) {
          setDisplay(original);
          if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
          let result = "";
          for (let i = 0; i < original.length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          setDisplay(result);
        }
      }, 40);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(original);
  };

  return (
    <div
      className="relative group cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`font-bold ${textSizeClass} text-slate-100 transition-colors duration-300 relative inline-block group-hover:text-transparent bg-clip-text bg-gradient-to-r ${hoverColorClass}`}
      >
        {display}
      </div>
      <div className="font-['Space_Mono'] text-xs text-slate-400 uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const subtextLength = subtextWords.length;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isWaiting) return;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (visibleCount < subtextLength) {
          setVisibleCount((c) => c + 1);
        } else {
          setIsWaiting(true);
          setTimeout(() => { setIsWaiting(false); setIsDeleting(true); }, 3000);
        }
      } else {
        if (visibleCount > 0) {
          setVisibleCount((c) => c - 1);
        } else {
          setIsWaiting(true);
          setTimeout(() => { setIsWaiting(false); setIsDeleting(false); }, 3000);
        }
      }
    }, isDeleting ? 30 : 120);
    return () => clearTimeout(timeout);
  }, [visibleCount, isDeleting, isWaiting, subtextLength]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([contentRef.current, rightContentRef.current], { opacity: 0, y: 30 });
      gsap.set(personRef.current, { opacity: 0, y: 60 });

      const tl = gsap.timeline();

      gsap.to(orbRef.current, {
        scale: 1.04, duration: 3, ease: "power2.inOut", yoyo: true, repeat: -1,
      });

      if (ringsRef.current) {
        const rings = ringsRef.current.querySelectorAll(".orbital-ring");
        rings.forEach((ring, i) => {
          gsap.to(ring, {
            rotation: i % 2 === 0 ? 360 : -360,
            duration: 30 + i * 15, ease: "none", repeat: -1, transformOrigin: "center center",
          });
        });
        const dots = ringsRef.current.querySelectorAll(".orbit-dot");
        dots.forEach((dot, i) => {
          gsap.to(dot, {
            opacity: 0.15, scale: 1.8, duration: 2 + i * 0.5,
            ease: "sine.inOut", yoyo: true, repeat: -1,
          });
        });
      }

      tl.to(personRef.current, { opacity: 1, y: 0, duration: 1.4, ease: "power2.out" });
      tl.to(
        [contentRef.current, rightContentRef.current],
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" },
        "<0.3"
      );

      const glitchLines = gsap.utils.toArray<HTMLElement>(".glitch-line");
      glitchLines.forEach((line, index) => {
        const randomX = (Math.random() - 0.5) * 80;
        gsap.to(line, {
          keyframes: [
            { opacity: 0.8, x: randomX * 0.3, scaleX: 1.2, duration: 0.4, ease: "power2.out" },
            { opacity: 0.2, x: randomX * 0.6, scaleX: 0.9, duration: 0.2, ease: "none" },
            { opacity: 1, x: randomX, scaleX: 1.6, duration: 0.3, ease: "power2.inOut" },
            { opacity: 0, x: randomX * 1.5, scaleX: 1, duration: 0.6, ease: "power2.in" },
          ],
          repeat: -1,
          delay: index * 0.3 + Math.random() * 2,
          repeatDelay: 2.5 + Math.random() * 4,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen bg-slate-950 text-slate-100 font-['Rajdhani'] overflow-hidden"
    >
      {/* Grain */}
      <div
        className="fixed inset-0 opacity-70 pointer-events-none z-[200]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Shell */}
      <div className="grid grid-rows-[1fr_52px] w-full min-h-screen bg-slate-900 relative">
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)" }}
        />

        {/* Main Canvas */}
        <main className="row-start-1 relative overflow-hidden flex flex-col md:block">

          {/* Ghost Corner Chars — desktop only */}
          <span className="hidden md:block absolute top-5 left-5 font-['Bebas_Neue'] text-4xl lg:text-5xl xl:text-6xl text-slate-100/5 pointer-events-none select-none z-[2]">Raja</span>
          <span className="hidden md:block absolute top-5 right-5 font-['Bebas_Neue'] text-4xl lg:text-5xl xl:text-6xl text-slate-100/5 pointer-events-none select-none z-[2]">Zubair</span>
          <span className="hidden md:block absolute bottom-5 left-4 font-['Bebas_Neue'] text-5xl lg:text-6xl xl:text-7xl text-slate-100/5 pointer-events-none select-none z-[2]">↗</span>

          {/* Glitch Lines */}
          <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
            <div className="glitch-line absolute top-[15%] left-[30%] w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[28%] left-[10%] w-44 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[35%] left-[70%] w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[42%] left-[80%] w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[55%] left-[55%] w-28 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[62%] left-[15%] w-36 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[72%] left-[20%] w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[85%] left-[65%] w-40 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[92%] left-[40%] w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0" />
            <div className="glitch-line absolute top-[20%] left-[85%] w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0" />
          </div>

          {/* Orb */}
          <div
            ref={orbRef}
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] md:w-[560px] md:h-[560px] rounded-full z-[2]"
            style={{
              background: "radial-gradient(circle at 45% 40%, #a855f7 0%, #ec4899 35%, #f97316 65%, rgba(30,10,5,0) 80%)",
              filter: "blur(2px)",
              transform: "translate(-50%, -55%)",
            }}
          >
            <div className="absolute inset-[-30px] rounded-full" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)", filter: "blur(20px)" }} />
          </div>

          {/* Orbital Rings */}
          <div
            ref={ringsRef}
            className="absolute top-1/2 left-1/2 w-[340px] h-[340px] md:w-[700px] md:h-[700px] z-[3] pointer-events-none"
            style={{ transform: "translate(-50%, -52%)" }}
          >
            <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(168,85,247,0.03) 25%, transparent 50%, rgba(249,115,22,0.03) 75%, transparent 100%)" }} />
            <svg className="orbital-ring absolute inset-0 w-full h-full" viewBox="0 0 700 700" fill="none">
              <circle cx="350" cy="350" r="340" stroke="url(#ring1Grad)" strokeWidth="0.5" strokeDasharray="8 12" opacity="0.3" />
              <defs><linearGradient id="ring1Grad" x1="0" y1="0" x2="700" y2="700"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#f97316" /></linearGradient></defs>
            </svg>
            <svg className="orbital-ring absolute inset-[60px] w-[calc(100%-120px)] h-[calc(100%-120px)]" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="245" stroke="url(#ring2Grad)" strokeWidth="0.6" strokeDasharray="4 18" opacity="0.2" />
              <defs><linearGradient id="ring2Grad" x1="0" y1="500" x2="500" y2="0"><stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#a855f7" /></linearGradient></defs>
            </svg>
            <svg className="orbital-ring absolute inset-[130px] w-[calc(100%-260px)] h-[calc(100%-260px)]" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="195" stroke="url(#ring3Grad)" strokeWidth="0.4" opacity="0.15" />
              <defs><linearGradient id="ring3Grad" x1="0" y1="0" x2="400" y2="400"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
            </svg>
            <div className="orbit-dot absolute top-[2%] left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40" />
            <div className="orbit-dot absolute bottom-[8%] right-[18%] w-1 h-1 bg-pink-400 rounded-full opacity-30" />
            <div className="orbit-dot absolute top-[30%] left-[5%] w-1 h-1 bg-orange-400 rounded-full opacity-35" />
            <div className="orbit-dot absolute bottom-[25%] left-[12%] w-1.5 h-1.5 bg-purple-500 rounded-full opacity-25" />
            <div className="orbit-dot absolute top-[15%] right-[10%] w-1 h-1 bg-orange-300 rounded-full opacity-30" />
          </div>

          {/* ── MOBILE LAYOUT ── */}
          <div className="md:hidden relative" style={{ height: "calc(100vh - 52px)" }}>
            {/* Person image — leaves gap at top, fills rest */}
            <div ref={personRef} className="absolute z-10" style={{ top: "8%", left: 0, right: 0, bottom: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.png"
                alt="Raja Zubair"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient scrim — only bottom half, face stays clear */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" style={{ top: "45%" }} />
            </div>

            {/* Text content — pinned to bottom over the image */}
            <div ref={contentRef} className="absolute bottom-0 left-0 right-0 z-[15] px-6 pb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-0.5 bg-orange-500" />
                <span className="font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-orange-500">Available for Projects</span>
              </div>

              <h1 className="font-bold text-[1.9rem] leading-tight mb-2 font-['Rajdhani']">
                {headingWords.map((w, i) => (
                  <span key={i} className={`${w.class} mr-2 inline-block`}>{w.text}</span>
                ))}
              </h1>

              <p className="font-['Space_Mono'] text-xs leading-relaxed text-slate-400 mb-5 min-h-[60px]">
                {subtextWords.slice(0, visibleCount).map((w, i) => (
                  <span key={i} className={`${w.class} mr-1.5 inline-block word-appear`}>{w.text}</span>
                ))}
                <span className="inline-block w-[6px] h-[13px] bg-orange-500 animate-pulse align-middle ml-1" />
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase px-4 py-3 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-250 hover:bg-orange-600 flex items-center gap-2 rounded-sm"
                >
                  Start a Project
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="font-['Space_Mono'] text-[10px] tracking-[0.12em] uppercase px-4 py-3 bg-slate-900/50 text-slate-300 border border-slate-100/10 no-underline transition-all duration-250 hover:text-slate-100 rounded-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          {/* Person Photo */}
          <div
            ref={personRef}
            className="hidden md:flex absolute bottom-0 left-1/2 w-[500px] h-[90%] z-10 items-end justify-center"
            style={{ transform: "translateX(-48%)" }}
          >
            <div className="relative w-[500px] h-full flex items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.png"
                alt="Raja Zubair - UI/UX Designer & Webflow Developer"
                className="absolute bottom-0 w-full h-full object-contain object-bottom"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-slate-900 to-transparent z-[11] pointer-events-none" />
            </div>
          </div>

          {/* Left Side Content — desktop */}
          <div
            ref={contentRef}
            className="hidden md:block absolute left-8 top-1/2 z-[15] w-[420px] lg:w-[460px]"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-0.5 bg-orange-500" />
                <span className="font-['Space_Mono'] text-xs tracking-[0.2em] uppercase text-orange-500">Available for Projects</span>
              </div>

              <h1 className="font-bold text-[2.2rem] lg:text-[2.4rem] leading-tight mb-2 min-h-[110px] font-['Rajdhani']">
                {headingWords.map((w, i) => (
                  <span key={i} className={`${w.class} mr-2 inline-block`}>{w.text}</span>
                ))}
              </h1>

              <p className="font-['Space_Mono'] text-sm leading-relaxed text-slate-400 min-h-[80px]">
                {subtextWords.slice(0, visibleCount).map((w, i) => (
                  <span key={i} className={`${w.class} mr-1.5 inline-block word-appear`}>{w.text}</span>
                ))}
                <span className="inline-block w-[8px] h-[16px] bg-orange-500 animate-pulse align-middle ml-1" />
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-5 py-4 bg-orange-500 text-slate-950 border border-orange-500 no-underline transition-all duration-250 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] flex items-center justify-between group rounded-sm"
                >
                  Start a Project
                  <svg className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="font-['Space_Mono'] text-xs tracking-[0.12em] uppercase px-5 py-4 bg-slate-900/50 backdrop-blur-sm text-slate-300 border border-slate-100/10 no-underline transition-all duration-250 hover:text-slate-100 hover:border-slate-100/30 hover:bg-slate-800/50 text-center rounded-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Content — desktop KPIs */}
          <div
            ref={rightContentRef}
            className="hidden md:flex absolute right-8 top-1/2 z-20 w-[260px] lg:w-[300px] flex-col items-end"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="flex flex-col gap-6 w-full text-right mb-10 border-r-2 border-slate-100/10 pr-6">
              <HoverStat original="15+" label="Real Client Projects" isNumber={true} targetNum={15} suffix="+" hoverColorClass="from-orange-400 to-orange-600" />
              <HoverStat original="Global" label="Clients in PK & Int'l" isNumber={false} hoverColorClass="from-orange-400 to-orange-600" textSizeClass="text-3xl" />
              <HoverStat original="3+" label="Years Experience" isNumber={true} targetNum={3} suffix="+" hoverColorClass="from-orange-400 to-orange-600" />
            </div>
          </div>
        </main>

        {/* Bottom Bar */}
        <footer className="row-start-2 flex items-center justify-between px-4 md:px-6 py-0 border-t border-slate-100/[0.07] relative z-20">
          <div className="font-['Space_Mono'] text-[10px] md:text-xs tracking-[0.15em] text-slate-400 uppercase">
            <span className="text-orange-500 text-lg md:text-xl align-middle">&copy;</span> {currentYear} — Raja Zubair
          </div>
          <div className="hidden sm:flex absolute left-1/2 bottom-0 items-center gap-2 pb-3.5 whitespace-nowrap transform -translate-x-1/2">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-['Space_Mono'] text-xs tracking-[0.15em] text-slate-400 uppercase">Available for work</span>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <a href="https://www.behance.net/rajazubair3" className="font-['Space_Mono'] text-[10px] md:text-xs tracking-[0.1em] uppercase text-slate-400 no-underline transition-colors duration-200 hover:text-orange-500">Behance</a>
            <a href="https://dribbble.com/rajazubair" className="font-['Space_Mono'] text-[10px] md:text-xs tracking-[0.1em] uppercase text-slate-400 no-underline transition-colors duration-200 hover:text-orange-500">Dribbble</a>
            <a href="https://www.linkedin.com/in/raja-zubair-664066294/" className="font-['Space_Mono'] text-[10px] md:text-xs tracking-[0.1em] uppercase text-slate-400 no-underline transition-colors duration-200 hover:text-orange-500">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
