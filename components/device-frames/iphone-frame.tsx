"use client";

import { useEffect, useRef, useState } from "react";

interface IPhoneFrameProps {
  src: string;
  alt: string;
}

export default function IPhoneFrame({ src, alt }: IPhoneFrameProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setShowHint(el.scrollTop + el.clientHeight < el.scrollHeight - 10);
    };
    el.addEventListener("scroll", check, { passive: true });
    check();
    return () => el.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="relative inline-block">
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        {/* Phone bezel */}
        <div
          className="relative rounded-[44px] overflow-hidden"
          style={{
            background: "#0a0a0a",
            boxShadow: "0 0 0 2px #2a2a2a, 0 0 0 14px #111, 0 30px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700/50" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-700/50" />
          </div>

          {/* Screen */}
          <div
            ref={scrollRef}
            className="relative w-full aspect-[9/19.5] overflow-y-auto bg-slate-950"
            style={{ scrollbarWidth: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full object-cover" />

            {/* Scroll hint — pill badge */}
            <div
              className="sticky bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-none transition-opacity duration-300"
              style={{ opacity: showHint ? 1 : 0 }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-lg">
                <span className="font-['Space_Mono'] text-[7px] tracking-[0.2em] uppercase text-white/80">
                  Scroll to explore
                </span>
                <svg
                  className="animate-bounce flex-shrink-0"
                  width="7" height="7" fill="none" stroke="#f97316" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-2 bg-slate-950">
            <div className="w-24 h-1 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[3px] top-[80px] w-[3px] h-8 bg-[#1a1a1a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[124px] w-[3px] h-12 bg-[#1a1a1a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[180px] w-[3px] h-12 bg-[#1a1a1a] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[140px] w-[3px] h-16 bg-[#1a1a1a] rounded-r-sm" />

        {/* Ambient glow */}
        <div
          className="absolute -inset-4 rounded-[44px] opacity-20 -z-10"
          style={{
            background: "radial-gradient(circle at 40% 30%, rgba(249,115,22,0.35), transparent 65%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}
