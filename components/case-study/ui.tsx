import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-[90%] max-w-[1180px]", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-gradient-to-r from-orange-500/70 to-transparent" />
      <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.28em] text-orange-400/80">
        {index ? `${index} — ${children}` : children}
      </span>
    </div>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  intro,
  className,
  align = "left",
}: {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <SectionLabel
          index={index}
          className={cn(align === "center" && "justify-center")}
        >
          {label}
        </SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 font-['Rajdhani'] text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-slate-100">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={150}>
          <p className="mt-6 font-sans text-base leading-relaxed text-slate-400 md:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function BackLink() {
  return (
    <Link
      href="/case-studies"
      className="group inline-flex items-center gap-2 font-['Space_Mono'] text-[10px] uppercase tracking-[0.2em] text-slate-400 no-underline transition-colors duration-300 hover:text-orange-400"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
        aria-hidden="true"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      All case studies
    </Link>
  );
}



export function AssetFrame({
  src,
  alt,
  aspect = "aspect-[16/9]",
  priority,
  sizes = "(max-width: 1024px) 100vw, 1100px",
  className,
  imageClassName,
  objectClass = "object-cover",
}: {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  objectClass?: string;
}) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#070b14]",
        aspect,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-subtle opacity-[0.16]" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "relative z-10 h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.012]",
          objectClass,
          imageClassName
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-inset ring-white/[0.06]" />
    </div>
  );
}

export function ShowcaseFigure({
  src,
  alt,
  label,
  title,
  description,
  aspect = "aspect-[16/9]",
  objectClass = "object-cover",
  imageClassName,
  priority,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  aspect?: string;
  objectClass?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)}>
      <AssetFrame
        src={src}
        alt={alt}
        aspect={aspect}
        objectClass={objectClass}
        imageClassName={imageClassName}
        priority={priority}
        sizes={sizes}
      />
      <figcaption className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-10">
        <div className="sm:w-[42%] sm:shrink-0">
          <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-400/70">
            {label}
          </p>
          <p className="mt-1.5 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-200">
            {title}
          </p>
        </div>
        <p className="font-sans text-[13px] leading-relaxed text-slate-500">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

export function ComponentButton({
  children,
  href,
  variant = "primary",
  external,
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
}) {
    const classes = cn(
      "group inline-flex w-full items-center justify-center gap-2.5 rounded-sm px-5 py-3 text-center font-['Space_Mono'] text-[10px] uppercase tracking-[0.14em] no-underline transition-all duration-300 sm:w-auto sm:px-6 sm:py-3.5",
      variant === "primary"
        ? "bg-orange-500 text-slate-950 hover:bg-orange-400 hover:shadow-[0_0_36px_rgba(249,115,22,0.3)]"
        : "border border-white/15 bg-white/[0.02] text-slate-200 hover:border-orange-400/40 hover:bg-white/[0.05] hover:text-orange-300",
      className
    );

  const content = (
    <>
      {children}
      <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
