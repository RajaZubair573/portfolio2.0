"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { label: "Network", value: "Toptal Talent Network" },
  { label: "Status", value: "Accepted" },
  { label: "Date", value: "November 2026" },
];

export default function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, proofRef.current], { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      tl.to(
        proofRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.45"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full scroll-mt-20 overflow-hidden border-t border-white/[0.06] px-[5%] py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)",
      }}
    >
      <div className="mx-auto max-w-[1120px]">
        <div
          ref={headerRef}
          className="mb-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500/70" />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-orange-400/80">
                Recognition
              </span>
            </div>

            <h2 className="max-w-[760px] font-['Rajdhani'] text-[2.35rem] font-semibold leading-[1.06] text-slate-100 sm:text-5xl md:text-[3.35rem]">
              Accepted into Toptal&apos;s top 3%.
            </h2>

            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-slate-400 md:text-base">
              Toptal works with a small fraction of the designers who apply. I
              was invited to join their network in November 2026. Here is the
              email I received.
            </p>
          </div>

          <dl className="grid gap-0 border-t border-white/10 pt-4 md:w-[240px]">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 border-b border-white/[0.07] py-2.5"
              >
                <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-500">
                  {fact.label}
                </dt>
                <dd className="text-right text-[13px] text-slate-300">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          ref={proofRef}
          className="overflow-hidden border border-black/10 bg-[#f4f3f0] shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white px-5 py-3.5 sm:px-7">
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-neutral-600">
              Email confirmation / Toptal
            </span>
            <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              Nov 2026
            </span>
          </div>

          <figure className="p-3 sm:p-6">
            <div className="border border-black/10 bg-white">
              <Image
                src="/Toptal-Email.png"
                alt="Screenshot of the Toptal email confirming my place in their talent network"
                width={1505}
                height={711}
                sizes="(max-width: 768px) 100vw, 1080px"
                unoptimized
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 pb-1 font-['Space_Mono'] text-[10px] uppercase tracking-[0.12em] text-neutral-500">
              <span>Screenshot of the original email</span>
              <a
                href="/Toptal-Email.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-orange-700"
              >
                Open full size
                <span aria-hidden="true"> ↗</span>
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.07] pt-6">
          <p className="max-w-[480px] text-sm leading-6 text-slate-500">
            Selection is based on a screening process, not an application
            form. I design and ship products for clients through the network.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.18em] text-slate-300 no-underline transition-colors duration-300 hover:text-orange-400"
          >
            More about my journey
            <span className="flex h-7 w-7 items-center justify-center border border-slate-100/15 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-orange-500/10">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7v10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
