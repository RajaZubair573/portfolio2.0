"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

const BEFORE_WIDTH = 1440;
const BEFORE_HEIGHT = 6138;
const AFTER_WIDTH = 1440;
const AFTER_HEIGHT = 9620;

interface CyberReyComparisonProps {
  beforeSrc: string;
  afterSrc: string;
}

export function CyberReyComparison({
  beforeSrc,
  afterSrc,
}: CyberReyComparisonProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(52);
  const [mobileView, setMobileView] = useState<"before" | "after">("after");

  const updateFromClientX = (clientX: number) => {
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(94, Math.max(6, next)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) updateFromClientX(event.clientX);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 3;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setPosition((value) => Math.max(6, value - step));
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setPosition((value) => Math.min(94, value + step));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(6);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(94);
    }
  };

  return (
    <figure className="m-0">
      <div
        className="relative overflow-hidden rounded-sm border border-white/10 bg-[#070b14]"
        style={{
          boxShadow:
            "0 40px 110px -45px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.025)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] bg-white/[0.015] px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </span>
            <span className="truncate border-l border-white/10 pl-3 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
              cyberrey.com — full page
            </span>
          </div>
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-orange-300/70">
            <span className="hidden sm:inline">Drag to compare</span>
            <span className="sm:hidden">Switch views to compare</span>
          </p>
        </div>

        <div className="border-b border-white/[0.07] bg-[#080d18] px-4 py-3 sm:hidden">
          <div className="grid grid-cols-2 gap-1 rounded-sm border border-white/10 bg-black/20 p-1">
            {(["before", "after"] as const).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setMobileView(view)}
                aria-pressed={mobileView === view}
                className={cn(
                  "rounded-[2px] px-3 py-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] transition-colors duration-300",
                  mobileView === view
                    ? "bg-orange-500 text-slate-950"
                    : "text-slate-400"
                )}
              >
                {view === "before" ? "Original" : "Redesign"}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={viewportRef}
            className="cyberrey-scroll relative h-[420px] overflow-x-hidden overflow-y-auto bg-[#050810] sm:h-[520px] lg:h-[640px]"
            aria-label="Scrollable before and after website comparison"
          >
            <div
              className="cyberrey-compare-canvas relative mx-auto w-full"
              data-view={mobileView}
              style={{ "--compare-position": `${position}%` } as CSSProperties}
            >
              <div
                className={cn(
                  "absolute inset-x-0 top-0",
                  mobileView === "before" ? "block" : "hidden",
                  "sm:block"
                )}
              >
                <Image
                  src={beforeSrc}
                  alt="Original CyberRey website homepage before the redesign"
                  width={BEFORE_WIDTH}
                  height={BEFORE_HEIGHT}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="block h-auto w-full"
                />
              </div>

              <div
                className={cn(
                  "cyberrey-after-layer absolute inset-x-0 top-0",
                  mobileView === "after" ? "block" : "hidden",
                  "sm:block"
                )}
              >
                <Image
                  src={afterSrc}
                  alt="Redesigned CyberRey website homepage after the redesign"
                  width={AFTER_WIDTH}
                  height={AFTER_HEIGHT}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-sm border border-white/10 bg-black/75 px-2.5 py-1.5 backdrop-blur-sm sm:left-4 sm:top-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.2em] text-slate-300">
                Before
              </span>
            </div>
            <div className="absolute right-3 top-3 flex items-center gap-2 rounded-sm border border-white/10 bg-black/75 px-2.5 py-1.5 backdrop-blur-sm sm:right-4 sm:top-4">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.2em] text-slate-300">
                After
              </span>
            </div>

            <div
              className="cyberrey-compare-divider pointer-events-none absolute bottom-0 top-0 hidden sm:block"
              style={{ left: `${position}%` }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Reveal the redesigned CyberRey website"
                aria-valuemin={6}
                aria-valuemax={94}
                aria-valuenow={Math.round(position)}
                aria-orientation="horizontal"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                onKeyDown={handleKeyDown}
                className="pointer-events-auto absolute inset-y-0 -left-5 w-10 cursor-ew-resize touch-none outline-none"
              >
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-orange-400/90 shadow-[0_0_18px_rgba(249,115,22,0.65)]" />
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-300/70 bg-[#0b1120]/95 text-orange-200 shadow-[0_0_30px_rgba(249,115,22,0.25)] transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-400/80">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M3 12h18" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050810] via-[#050810]/60 to-transparent" />
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.2em] text-slate-300">
                Scroll to explore full page
              </span>
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fb923c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
        <p className="font-sans text-[12px] leading-relaxed text-slate-500">
          Both pages are shown at their native proportions inside one shared
          scroll area. The redesigned page is longer, so the original ends
          earlier — no sections are stretched or artificially aligned.
        </p>
        <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-600">
          Original 1440 × 6138 · Redesign 1440 × 9620
        </span>
      </figcaption>
    </figure>
  );
}
