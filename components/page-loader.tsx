"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const circleBgRef = useRef<SVGCircleElement>(null);
  const circleStrokeRef = useRef<SVGCircleElement>(null);
  const glowRingRef = useRef<SVGCircleElement>(null);
  const zPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const circle = circleStrokeRef.current;
    const glow = glowRingRef.current;
    const zPath = zPathRef.current;

    if (!circle || !glow || !zPath) return;

    const circleLen = circle.getTotalLength();
    const glowLen = glow.getTotalLength();
    const zLen = zPath.getTotalLength();

    // Hide everything initially
    gsap.set(circle, { strokeDasharray: circleLen, strokeDashoffset: circleLen });
    gsap.set(glow,   { strokeDasharray: glowLen,   strokeDashoffset: glowLen, opacity: 0 });
    gsap.set(zPath,  { strokeDasharray: zLen,       strokeDashoffset: zLen, opacity: 0 });
    gsap.set(circleBgRef.current, { opacity: 0, scale: 0.8, transformOrigin: "32px 32px" });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });

    // 1. Draw outer ring
    tl.to(circle, { strokeDashoffset: 0, duration: 1, ease: "power3.inOut" });

    // 2. Fill circle + inner glow ring
    tl.to(circleBgRef.current, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.4)" }, "-=0.2");
    tl.to(glow, { strokeDashoffset: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");

    // 3. Draw Z — make visible then animate stroke
    tl.set(zPath, { opacity: 1 }, "-=0.1");
    tl.to(zPath, { strokeDashoffset: 0, duration: 0.65, ease: "power3.inOut" }, "<");

    // 4. Subtle glow pulse
    tl.to(glow, { opacity: 0.1, duration: 0.2, ease: "power1.inOut", yoyo: true, repeat: 1 });

    // 5. Fade out
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.55,
      ease: "power2.inOut",
      delay: 0.3,
      onComplete: () => {
        if (overlayRef.current) overlayRef.current.style.display = "none";
      },
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "radial-gradient(ellipse at center, #0d0d0d 0%, #000000 100%)" }}
    >
      {/* Ambient orange glow */}
      <div
        className="absolute w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      <svg
        width="140"
        height="140"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        overflow="visible"
      >
        <defs>
          <radialGradient id="circleFill" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>
        </defs>

        {/* Filled circle — pops in after ring draws */}
        <circle
          ref={circleBgRef}
          cx="32"
          cy="32"
          r="30"
          fill="url(#circleFill)"
        />

        {/* Outer stroke ring — draws first */}
        <circle
          ref={circleStrokeRef}
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transform: "rotate(-90deg)", transformOrigin: "32px 32px" }}
        />

        {/* Inner glow ring */}
        <circle
          ref={glowRingRef}
          cx="32"
          cy="32"
          r="26.5"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.5"
          style={{ transform: "rotate(-90deg)", transformOrigin: "32px 32px" }}
        />

        {/*
          Z as a single continuous path:
          Start top-left → across to top-right → diagonal down to bottom-left → across to bottom-right
          This draws as one unbroken stroke so the animation traces the full Z shape.
        */}
        <path
          ref={zPathRef}
          d="M20 20 L44 20 L20 44 L44 44"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
}
