import { TypographyReveal } from "./typography-reveal";

export default function AboutSnapshot() {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-20 overflow-hidden px-[5%] py-28 md:py-36 lg:py-44"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0d1424 40%, #0b1120 80%, #0a0f1e 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.045) 3px, rgba(0,0,0,0.045) 4px)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-px w-full z-[2]"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(249,115,22,0.18), rgba(168,85,247,0.12), transparent 95%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px]">
        <div
          className="pointer-events-none absolute -left-5 top-2 hidden h-[calc(100%-1rem)] w-px md:block"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(249,115,22,0.35), transparent)" }}
        />
        <div
          className="pointer-events-none absolute -right-5 top-2 hidden h-[calc(100%-1rem)] w-px md:block"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.18), transparent)" }}
        />
        <div className="pointer-events-none absolute -left-5 top-2 hidden md:block">
          <div className="h-px w-12 bg-orange-400/35" />
          <div className="h-12 w-px bg-orange-400/35" />
        </div>
        <div className="pointer-events-none absolute -right-5 bottom-2 hidden md:flex md:flex-col md:items-end">
          <div className="h-12 w-px bg-purple-400/20" />
          <div className="h-px w-12 bg-purple-400/20" />
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(to right, rgba(249,115,22,0.55), transparent)" }}
          />
          <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-orange-500/45">
            Raja Zubair
          </span>
        </div>

        <TypographyReveal
          animationType="colorizeIn"
          revealType="word"
          start="top 74%"
          end="bottom 48%"
          mutedColor="rgba(148,163,184,0.17)"
          className="font-['Rajdhani'] text-[2.35rem] font-bold leading-[1.08] text-slate-100 sm:text-4xl md:text-[2.9rem] lg:text-[3.15rem] xl:text-[3.35rem]"
        >
          I design websites that feel sharp before they say a word: clean structure, confident
          spacing, fast movement, and visual decisions that make the offer easier to trust.
        </TypographyReveal>

        <div className="my-10 h-px w-full overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(249,115,22,0.55), rgba(255,255,255,0.06) 35%, rgba(168,85,247,0.2), transparent)",
            }}
          />
        </div>

        <TypographyReveal
          animationType="colorizeIn"
          revealType="word"
          start="top 82%"
          end="bottom 52%"
          mutedColor="rgba(148,163,184,0.16)"
          className="max-w-[720px] font-sans text-lg font-medium leading-8 text-slate-300 md:text-[1.15rem] md:leading-[1.75]"
        >
          My work sits between UI/UX and Webflow development, so the idea does not get lost between
          design and build. Every section has a job. Every interaction has restraint. The final
          site should feel premium, but more importantly, it should feel clear.
        </TypographyReveal>

        <div
          className="mt-12 h-px w-32"
          style={{ background: "linear-gradient(to right, rgba(249,115,22,0.5), transparent)" }}
        />
      </div>
    </section>
  );
}
