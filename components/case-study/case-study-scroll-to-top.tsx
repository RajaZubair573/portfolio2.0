"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function resetScrollPosition() {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previousBehavior;
}

export function CaseStudyScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetScrollPosition();

    const frame = window.requestAnimationFrame(resetScrollPosition);
    const timeout = window.setTimeout(resetScrollPosition, 150);

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) resetScrollPosition();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [pathname]);

  return null;
}
