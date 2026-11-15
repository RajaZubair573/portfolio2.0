import type { CaseStudyDetail, PersonaGroup } from "@/lib/case-study-details";
import { Reveal } from "./reveal";
import { Container, SectionHeading, SectionLabel } from "./ui";

function PersonaIcon({ icon }: { icon: PersonaGroup["icon"] }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (icon === "goals") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    );
  }

  if (icon === "frustrations") {
    return (
      <svg {...common}>
        <path d="M12 3 2.5 20h19L12 3Z" />
        <path d="M12 9v5M12 17h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const groupStyles: Record<
  PersonaGroup["icon"],
  {
    icon: string;
    tile: string;
    dot: string;
    card: string;
    label: string;
    tag: string;
  }
> = {
  goals: {
    icon: "text-violet-200",
    tile: "border-violet-400/20 bg-violet-500/10",
    dot: "bg-violet-400",
    card: "from-violet-500/[0.07] to-transparent",
    label: "text-violet-300/80",
    tag: "priorities",
  },
  frustrations: {
    icon: "text-orange-200",
    tile: "border-orange-400/20 bg-orange-500/10",
    dot: "bg-orange-400",
    card: "from-orange-500/[0.06] to-transparent",
    label: "text-orange-300/80",
    tag: "friction points",
  },
  needs: {
    icon: "text-emerald-200",
    tile: "border-emerald-400/20 bg-emerald-500/10",
    dot: "bg-emerald-400",
    card: "from-emerald-500/[0.06] to-transparent",
    label: "text-emerald-300/80",
    tag: "requirements",
  },
};

export function CaseStudyPersona({ detail }: { detail: CaseStudyDetail }) {
  const { persona } = detail;

  return (
    <section
      id="persona"
      className="relative overflow-hidden border-t border-white/[0.05] py-20 md:py-28"
      style={{ background: "#080d1a" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-subtle opacity-[0.06] [mask-image:radial-gradient(ellipse_at_30%_35%,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[12%] h-[460px] w-[460px] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.34), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionHeading
          index="04"
          label="Target audience & user persona"
          title="Designed around the person making the decision."
          intro="A conceptual archetype of the visitor the website needed to convince — and what would help them feel confident enough to start a conversation."
        />

        <Reveal delay={60} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090f1d] shadow-[0_35px_100px_-45px_rgba(0,0,0,0.9)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-orange-400/40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-violet-600/[0.08] blur-[90px]"
            />

            <div className="relative grid xl:grid-cols-12">
              <aside className="relative overflow-hidden border-b border-white/[0.07] p-6 md:p-8 xl:col-span-4 xl:border-b-0 xl:border-r">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-10 select-none font-['Rajdhani'] text-[8rem] font-bold leading-none tracking-tighter text-white/[0.025]"
                >
                  AM
                </span>

                <div className="relative flex items-center justify-between gap-4">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    User profile
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2.5 py-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-violet-300/80">
                    <span className="h-1 w-1 rounded-full bg-violet-400/80" />
                    Conceptual
                  </span>
                </div>

                <div className="relative mt-7 flex items-center gap-5">
                  <div className="relative h-[88px] w-[88px] shrink-0">
                    <div className="absolute -inset-2.5 rounded-full border border-dashed border-white/[0.09]" />
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_150deg,rgba(139,92,246,0.9),rgba(249,115,22,0.55),rgba(139,92,246,0.15),rgba(139,92,246,0.9))] opacity-80" />
                    <div className="absolute inset-[1.5px] rounded-full bg-[#090f1d]" />
                    <span className="absolute inset-0 flex items-center justify-center font-['Rajdhani'] text-[1.7rem] font-bold tracking-wide text-slate-100">
                      AM
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-['Rajdhani'] text-[1.75rem] font-bold leading-none tracking-tight text-slate-100">
                      {persona.name}
                    </h3>
                    <p className="mt-2 font-['Space_Mono'] text-[9px] uppercase leading-relaxed tracking-[0.14em] text-orange-300/80">
                      {persona.role}
                    </p>
                  </div>
                </div>

                <dl className="relative mt-7 space-y-4 border-t border-white/[0.07] pt-5">
                  <div className="grid grid-cols-[78px_1fr] gap-4">
                    <dt className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-500">
                      Industry
                    </dt>
                    <dd className="font-sans text-[12px] leading-relaxed text-slate-300">
                      {persona.industry}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[78px_1fr] gap-4">
                    <dt className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] text-slate-500">
                      Experience
                    </dt>
                    <dd className="font-sans text-[12px] leading-relaxed text-slate-400">
                      {persona.experience}
                    </dd>
                  </div>
                </dl>

                <p className="relative mt-5 font-sans text-[13px] leading-[1.75] text-slate-400">
                  {persona.bio}
                </p>
              </aside>

              <div className="p-6 md:p-8 xl:col-span-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400/80" />
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                      Behavior & needs
                    </p>
                  </div>
                  <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.18em] text-slate-600">
                    Three lenses
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {persona.groups.map((group, index) => {
                    const style = groupStyles[group.icon];
                    return (
                      <div
                        key={group.title}
                        className={`flex h-full flex-col rounded-xl border border-white/[0.07] bg-gradient-to-b p-5 ${style.card}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-lg border ${style.tile} ${style.icon}`}
                          >
                            <PersonaIcon icon={group.icon} />
                          </span>
                          <span className="font-['Space_Mono'] text-[8px] tracking-[0.14em] text-slate-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h4 className="mt-5 font-['Rajdhani'] text-xl font-semibold text-slate-100">
                          {group.title}
                        </h4>
                        <p
                          className={`mt-1 font-['Space_Mono'] text-[8px] uppercase tracking-[0.16em] ${style.label}`}
                        >
                          {group.items.length} {style.tag}
                        </p>

                        <div className="my-4 h-px bg-white/[0.07]" />

                        <ul className="space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span
                                className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
                              />
                              <span className="font-sans text-[12px] leading-relaxed text-slate-400">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="relative h-full overflow-hidden rounded-xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.07] via-violet-500/[0.03] to-transparent p-6 md:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-violet-400/70 via-violet-400/30 to-transparent"
              />
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-violet-400/20 bg-violet-500/10 text-violet-200">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-violet-300/80">
                  Key design consideration
                </span>
              </div>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-slate-300">
                {persona.consideration}
              </p>
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-4">
            <div className="h-full rounded-xl border border-white/[0.07] bg-white/[0.015] p-6">
              <SectionLabel>Method note</SectionLabel>
              <p className="mt-4 font-sans text-[11px] leading-[1.7] text-slate-500">
                {persona.authenticity}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
