"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  scroll?: boolean;
  aspect?: string;
  heightClass?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  glow?: boolean;
  className?: string;
}

export function BrowserMockup({
  src,
  alt,
  url = "cyberrey.com",
  scroll = false,
  aspect = "aspect-[16/10]",
  heightClass = "h-[380px] sm:h-[480px] lg:h-[560px]",
  width = 1440,
  height = 9620,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px",
  glow = false,
  className,
}: BrowserMockupProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (!scroll) return;
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setShowHint(el.scrollTop + el.clientHeight < el.scrollHeight - 24);
    };

    el.addEventListener("scroll", check, { passive: true });
    check();
    return () => el.removeEventListener("scroll", check);
  }, [scroll]);

  return (
    <div className={cn("relative", className)}>
      {glow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-8 -top-10 bottom-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.32), transparent 68%)",
            filter: "blur(36px)",
          }}
        />
      ) : null}

      <div
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1d]"
        style={{
          boxShadow:
            "0 30px 90px -20px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="relative flex items-center gap-3 border-b border-white/[0.06] px-3 py-2.5 md:px-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.01))",
          }}
        >
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="flex min-w-0 max-w-[260px] items-center gap-2 rounded-md border border-white/[0.06] bg-black/25 px-3 py-1">
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0 text-emerald-400/80"
                aria-hidden="true"
              >
                <path d="M12 1a6 6 0 0 1 6 6v2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h1V7a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4z" />
              </svg>
              <span className="truncate font-['Space_Mono'] text-[9px] tracking-wide text-slate-400">
                {url}
              </span>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-1 sm:flex">
            <span className="h-1 w-3 rounded-full bg-white/10" />
            <span className="h-1 w-3 rounded-full bg-white/10" />
            <span className="h-1 w-3 rounded-full bg-white/10" />
          </div>
        </div>

        {scroll ? (
          <div
            ref={scrollRef}
            className={cn(
              "relative w-full overflow-y-auto bg-[#050810] hide-scrollbar",
              heightClass
            )}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              sizes={sizes}
              className="h-auto w-full"
            />
            <div
              className={cn(
                "pointer-events-none sticky bottom-0 left-0 right-0 flex justify-center pb-4 transition-opacity duration-500",
                showHint ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3.5 py-1.5 backdrop-blur-md">
                <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.2em] text-white/75">
                  Scroll to explore
                </span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-bounce"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className={cn("relative w-full overflow-hidden bg-[#050810]", aspect)}>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover object-top"
            />
          </div>
        )}
      </div>
    </div>
  );
}
