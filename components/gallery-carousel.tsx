"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface GalleryCarouselProps {
  images: string[];
  title: string;
}

export default function GalleryCarousel({ images, title }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    const currentThumbnail = thumbnailsRef.current[activeIndex];
    if (currentThumbnail) {
      currentThumbnail.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-20">
      <h2 className="font-['Rajdhani'] text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
        <div className="w-12 h-px" style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }} />
        Project Gallery
      </h2>

      <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950/70 shadow-[0_0_80px_rgba(0,0,0,0.12)] mb-6">
        <div className="relative h-[420px] sm:h-[520px] bg-slate-900 overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={image} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={image}
                  alt={`${title} - Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          <button
            type="button"
            onClick={() => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:bg-slate-800"
            aria-label="Previous gallery image"
          >
            <span className="text-xl">‹</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:bg-slate-800"
            aria-label="Next gallery image"
          >
            <span className="text-xl">›</span>
          </button>

          <div className="absolute left-1/2 bottom-4 -translate-x-1/2 rounded-full bg-slate-900/80 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-300">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        <div className="p-4 bg-slate-950/90">
          <div className="flex items-center gap-3 overflow-x-auto overflow-y-hidden scroll-container py-2 px-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                ref={(el) => {
                  thumbnailsRef.current[index] = el;
                }}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View gallery image ${index + 1}`}
                className={`relative min-w-[120px] flex-shrink-0 overflow-hidden rounded-lg border transition duration-300 focus:outline-none ${
                  activeIndex === index
                    ? "border-orange-400 shadow-[0_0_0_3px_rgba(249,115,22,0.28)] ring-2 ring-orange-400 ring-offset-2 ring-offset-slate-950 scale-[1.02]"
                    : "border-transparent hover:border-slate-500"
                }`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
