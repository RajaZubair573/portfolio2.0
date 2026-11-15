"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface RailItem {
  id: string;
  label: string;
}

export function SectionRail({ items }: { items: RailItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Case study sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3.5 min-[1400px]:flex 2xl:right-8"
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center justify-end gap-2.5 no-underline"
          >
            <span
              className={cn(
                "font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] transition-all duration-300",
                isActive
                  ? "text-orange-300/90 opacity-100"
                  : "text-slate-500 opacity-0 group-hover:opacity-100"
              )}
            >
              {item.label}
            </span>
            <span
              className={cn(
                "h-px transition-all duration-300",
                isActive
                  ? "w-6 bg-orange-400"
                  : "w-3 bg-white/25 group-hover:w-5 group-hover:bg-white/50"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
