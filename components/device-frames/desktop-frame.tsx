"use client";

import { useEffect, useRef, useState } from "react";

interface DesktopFrameProps {
  src: string;
  alt: string;
}

export default function DesktopFrame({ src, alt }: DesktopFrameProps) {
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
    <div className="relative inline-block w-full group">
      <div className="relative w-full">
        {/* Browser chrome */}
        <div
          className="relative overflow-hidden rounded-xl border border-slate-700/40"
          style={{
            background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Title bar */}
          <div
            className="relative px-4 py-2.5 flex items-center gap-3 border-b border-slate-700/30"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)" }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
            </div>

            {/* Address bar */}
            <div className="flex-1 flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-md border border-slate-700/30 min-w-0">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-green-400">
                <path d="M12 1a6 6 0 0 1 6 6v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h1V7a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4z" />
              </svg>
              <span className="text-[10px] font-['Space_Mono'] text-slate-400 truncate">rajazubair.com</span>
            </div>
          </div>

          {/* Screen */}
          <div
            ref={scrollRef}
            className="relative w-full aspect-video overflow-y-auto bg-slate-950"
            style={{ scrollbarWidth: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="w-full object-cover" />

            {/* Scroll hint — pill badge, no gradient overlay */}
            <div
              className="sticky bottom-0 left-0 right-0 flex justify-center pb-3 pointer-events-none transition-opacity duration-300"
              style={{ opacity: showHint ? 1 : 0 }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 shadow-lg">
                <span className="font-['Space_Mono'] text-[8px] tracking-[0.2em] uppercase text-white/80">
                  Scroll to explore
                </span>
                <svg
                  className="animate-bounce flex-shrink-0"
                  width="8" height="8" fill="none" stroke="#f97316" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute -inset-6 rounded-xl opacity-25 -z-10 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.3), transparent 65%)",
            filter: "blur(24px)",
          }}
        />
      </div>
    </div>
  );
}
