import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { ComponentButton, Container } from "./ui";

export function CaseStudyEyebrow({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-9 bg-gradient-to-r from-orange-500/80 to-transparent" />
      <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">
        {index} — {children}
      </span>
    </div>
  );
}

export function CaseStudySectionHeading({
  id,
  index,
  label,
  title,
  intro,
  background = "#080d1a",
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  background?: string;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.05] py-16 md:py-24"
      style={{ background }}
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <CaseStudyEyebrow index={index}>{label}</CaseStudyEyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 font-['Rajdhani'] text-[clamp(1.75rem,3.1vw,2.55rem)] font-bold leading-[1.04] tracking-tight text-slate-100">
              {title}
            </h2>
          </Reveal>
          {intro ? (
            <Reveal delay={120}>
              <div className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-slate-400">
                {intro}
              </div>
            </Reveal>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function CaseStudySharpFrame({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 1100px",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-white/10 bg-[#050810] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="block h-auto w-full"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.035]" />
    </div>
  );
}

export function CaseStudyMetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 font-sans text-[12px] leading-relaxed text-slate-300">
        {value}
      </dd>
    </div>
  );
}

export function CaseStudyAssetPanel({
  src,
  alt,
  width,
  height,
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}) {
  return (
    <div className="border border-white/[0.09] bg-[#070c17] p-3 md:p-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}

export function CaseStudyAssetCaption({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-orange-400/70">
        {label}
      </span>
      <span className="font-sans text-[12px] text-slate-500">{detail}</span>
    </figcaption>
  );
}

export function CaseStudyScreenPanel({
  src,
  width,
  height,
  alt,
  label,
  caption,
  annotation,
  framed,
  framedUrl = "cyberrey.com",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  caption: string;
  annotation?: string;
  framed?: boolean;
  framedUrl?: string;
}) {
  return (
    <figure className="m-0">
      <div className="relative">
        {framed ? (
          <div className="relative overflow-hidden border border-white/10 bg-[#050810]">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-4 py-2.5">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </span>
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500">
                {framedUrl}
              </span>
              <span className="hidden w-[52px] sm:block" />
            </div>
            <CaseStudySharpFrame
              src={src}
              width={width}
              height={height}
              alt={alt}
              sizes="(max-width: 768px) 100vw, 1100px"
              className="border-0"
            />
          </div>
        ) : (
          <CaseStudySharpFrame src={src} width={width} height={height} alt={alt} />
        )}
        {annotation ? (
          <span className="absolute bottom-3 right-3 flex items-center gap-2 border border-white/10 bg-black/75 px-2.5 py-1.5 font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            {annotation}
          </span>
        ) : null}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-orange-400/70">
          {label}
        </span>
        <span className="font-sans text-[12px] leading-relaxed text-slate-500">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

export function CaseStudyEndNav({
  ariaLabel,
  eyebrow,
  title,
  actions,
  previous,
  next,
  index,
}: {
  ariaLabel: string;
  eyebrow: string;
  title: string;
  actions: ReactNode;
  previous?: CaseStudy | null;
  next?: CaseStudy;
  index: number;
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className="border-t border-white/[0.06] py-16 md:py-20"
      style={{ background: "#080d1a" }}
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.24em] text-slate-500">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-['Rajdhani'] text-3xl font-bold text-slate-100 md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">{actions}</div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/case-studies/${previous.slug}`}
              className="group border border-white/[0.08] bg-white/[0.02] p-5 no-underline transition-colors duration-300 hover:border-orange-400/40"
            >
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                ← Previous project
              </span>
              <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-100 transition-colors group-hover:text-orange-300">
                {previous.title}
              </span>
            </Link>
          ) : (
            <div className="border border-white/[0.05] bg-white/[0.01] p-5">
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-600">
                ← Previous project
              </span>
              <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-600">
                First in the sequence
              </span>
            </div>
          )}

          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group border border-white/[0.08] bg-white/[0.02] p-5 text-right no-underline transition-colors duration-300 hover:border-orange-400/40"
            >
              <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500">
                Next project →
              </span>
              <span className="mt-3 block font-['Rajdhani'] text-xl font-semibold text-slate-100 transition-colors group-hover:text-orange-300">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.07] pt-8">
          <p className="font-sans text-[12px] text-slate-600">
            Case study {String(index + 1).padStart(2, "0")} of the selected
            work.
          </p>
          <ComponentButton href="/case-studies" variant="outline">
            View All Case Studies
          </ComponentButton>
        </div>
      </Container>
    </nav>
  );
}
