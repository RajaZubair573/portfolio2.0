"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Selected work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.5;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (viewportAnchor >= elementTop && viewportAnchor < elementBottom) {
          current = section.id;
          break;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-8 top-1/2 z-[100] hidden -translate-y-1/2 flex-col items-center gap-5 md:flex"
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;

        return (
          <button
            key={section.id}
            type="button"
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? "true" : undefined}
            title={section.label}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group flex h-4 w-4 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-10 w-2.5 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                  : "h-2.5 w-2.5 bg-white/55 opacity-55 group-hover:scale-110 group-hover:opacity-95"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
