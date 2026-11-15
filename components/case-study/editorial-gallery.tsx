"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

interface EditorialGalleryProps {
  items: GalleryItem[];
  title: string;
}

export function EditorialGallery({ items, title }: EditorialGalleryProps) {
  const [active, setActive] = useState(0);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const count = items.length;
  const current = items[active];

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setActive(((index % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    thumbnailRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  if (count === 0) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goTo(count - 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} project gallery`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative rounded-2xl border border-white/10 bg-[#080d18] p-4 outline-none sm:p-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-orange-500/70 to-transparent" />
          <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-orange-400/80">
            Project gallery
          </span>
        </div>
        <span
          className="font-['Space_Mono'] text-[10px] tracking-[0.2em] text-slate-500"
          aria-live="polite"
        >
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-xl border border-white/[0.07] bg-[#050810]">
        <div className="relative aspect-[16/11] w-full sm:aspect-[16/9]">
          {items.map((item, index) => (
            <div
              key={item.src}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                index === active
                  ? "z-10 scale-100 opacity-100"
                  : "pointer-events-none z-0 scale-[1.015] opacity-0"
              )}
              aria-hidden={index !== active}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 86vw, 1050px"
                className="object-contain p-1.5 sm:p-3 md:p-4"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <button
            type="button"
            onClick={previous}
            aria-label="Previous gallery image"
            className="absolute left-2.5 top-1/2 z-30 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-slate-200 backdrop-blur-md transition-colors duration-300 hover:border-orange-400/50 hover:text-orange-300 md:left-4 md:h-11 md:w-11"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next gallery image"
            className="absolute right-2.5 top-1/2 z-30 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-slate-200 backdrop-blur-md transition-colors duration-300 hover:border-orange-400/50 hover:text-orange-300 md:right-4 md:h-11 md:w-11"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-400/70">
            {current.label}
          </p>
          <p className="mt-2 max-w-xl font-sans text-[13px] leading-relaxed text-slate-400 md:text-sm">
            {current.caption}
          </p>
          <p className="mt-3 hidden font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:block">
            Use ← → keys to browse
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:pt-1">
          <button
            type="button"
            onClick={previous}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-3 py-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 hover:border-orange-400/40 hover:text-orange-300"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.02] px-3 py-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-400 transition-colors duration-300 hover:border-orange-400/40 hover:text-orange-300"
          >
            Next
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {items.map((item, index) => (
          <button
            key={item.src}
            ref={(element) => {
              thumbnailRefs.current[index] = element;
            }}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`View ${item.label}`}
            aria-current={index === active}
            className={cn(
              "relative aspect-[4/3] w-[84px] shrink-0 overflow-hidden rounded-md border transition-all duration-300 sm:w-[104px]",
              index === active
                ? "border-orange-400/80 opacity-100 shadow-[0_0_0_1px_rgba(251,146,60,0.35)]"
                : "border-white/[0.08] opacity-55 hover:opacity-90"
            )}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="110px"
              className="object-cover object-top"
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-300",
                index === active ? "bg-orange-400" : "bg-transparent"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
