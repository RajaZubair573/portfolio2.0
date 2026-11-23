"use client";

import type { CaseStudy } from "@/lib/case-studies";
import { CaseStudyScrollToTop } from "./case-study-scroll-to-top";
import {
  CaseStudyAssetCaption as AssetCaption,
  CaseStudyAssetPanel as AssetPanel,
  CaseStudyEndNav,
  CaseStudyMetaItem as MetaItem,
  CaseStudyScreenPanel as ScreenPanel,
  CaseStudySectionHeading as SectionHeading,
} from "./case-study-template";
import { ReadingProgress } from "./reading-progress";
import { Reveal } from "./reveal";
import { SectionRail, type RailItem } from "./section-rail";
import { BackLink, ComponentButton, Container } from "./ui";

const m = (file: string) =>
  `/projects/Moniva/${file.split(" ").map(encodeURIComponent).join("%20")}`;

const railItems: RailItem[] = [
  { id: "intro", label: "Overview" },
  { id: "brief", label: "Brief" },
  { id: "flows", label: "Key flows" },
  { id: "architecture", label: "IA" },
  { id: "system", label: "System" },
  { id: "outcome", label: "Outcome" },
];

const assets = {
  mockup: m("Moniva-Mockup.jpg"),
  logo: m("Moniva-Logo.png"),
  full: m("Moniva-Fulldesign.png"),
  palette: m("Moniva-Colorpalette.png"),
  typography: m("Moniva-Typography.png"),
  developer: m("Moniva-Developernote.png"),
  onboarding: m("Onboarding 4 - framed.png"),
  loanApproved: m("Loan Approved.png"),
  home: m("Home - Verified.png"),
  bills: m("Bills - Recent.png"),
  addMoney: m("Add moneysuccess.png"),
};

const summary = [
  {
    label: "Problem",
    body: "Wallet, lending and bill payments usually live in separate apps, so users repeat steps and lose track of their money.",
  },
  {
    label: "What I did",
    body: "Designed a four-tab mobile app (Home, Loan, Bills, More) in Figma, with 88 screens covering onboarding, verification, payments, borrowing and security.",
  },
  {
    label: "Focus",
    body: "Making every money action predictable, with clear confirmation, status and error states.",
  },
];

const flows = [
  {
    number: "01",
    title: "Loan Application",
    body: "From loan promise to decision and repayment summary.",
  },
  {
    number: "02",
    title: "Bill Payment",
    body: "From wallet balance to category, biller and payment result.",
  },
  {
    number: "03",
    title: "Confirmation States",
    body: "Clear outcomes after top-ups and loan decisions.",
  },
];

const screens = {
  onboarding: {
    src: assets.onboarding,
    width: 378,
    height: 815,
    alt: "Moniva personal loans onboarding screen",
    label: "Loan Application",
    caption:
      "Convenient Personal Loans introduces the offer and leads into registration.",
  },
  loanApproved: {
    src: assets.loanApproved,
    width: 375,
    height: 812,
    alt: "Moniva loan request received screen",
    label: "Loan Application",
    caption:
      "The loan request is reviewed with amount, rate, date and repayment shown together.",
  },
  home: {
    src: assets.home,
    width: 375,
    height: 812,
    alt: "Moniva verified home screen with wallet balance and payment shortcuts",
    label: "Bill Payment",
    caption:
      "Home keeps balance, linked bank details, shortcuts and recent activity together.",
  },
  bills: {
    src: assets.bills,
    width: 375,
    height: 812,
    alt: "Moniva bill payment category screen",
    label: "Bill Payment",
    caption:
      "Bills organize recent payments, biller lists and utility categories.",
  },
  addMoney: {
    src: assets.addMoney,
    width: 750,
    height: 1624,
    alt: "Moniva top up success screen",
    label: "Confirmation States",
    caption:
      "Top Up Success confirms the amount and the payment method used.",
  },
};

export function MonivaCaseStudy({
  caseStudy,
  index,
  next,
  previous,
}: {
  caseStudy: CaseStudy;
  index: number;
  next: CaseStudy;
  previous?: CaseStudy | null;
}) {
  return (
    <>
      <CaseStudyScrollToTop />
      <main className="relative w-full overflow-hidden bg-[#070b16]">
        <ReadingProgress />
        <SectionRail items={railItems} />

        <section
          id="intro"
          className="relative scroll-mt-20 overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28"
          style={{
            background:
              "linear-gradient(180deg, #080d1a 0%, #0a1020 48%, #0b1120 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-[0.22] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(76,29,149,0.45), rgba(30,27,75,0.12) 58%, transparent 76%)",
            }}
          />

          <Container className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackLink />
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Case study {String(index + 1).padStart(2, "0")} / Mobile app
              </span>
            </div>

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.26em] text-orange-300/80">
                    Concept project · Fintech · Mobile app · Pakistan
                  </span>
                </div>

                <h1 className="mt-5 font-['Rajdhani'] text-[clamp(2.15rem,4.5vw,3.8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-slate-50">
                  Moniva — Unified Financial Experience
                </h1>
                <p className="mt-5 max-w-3xl font-['Rajdhani'] text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-[1.1] text-slate-300">
                  Moniva is a concept for a Pakistan-focused financial app.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <ComponentButton href="#flows">
                    View Selected Screens
                  </ComponentButton>
                  <ComponentButton href="#outcome" variant="outline">
                    Read the Outcome
                  </ComponentButton>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/[0.08] lg:pl-9">
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    Project record
                  </p>
                  <dl className="mt-5 space-y-4">
                    <MetaItem label="Role" value="UI/UX Designer" />
                    <MetaItem label="Platform" value="Mobile application" />
                    <MetaItem label="Market" value="Pakistan" />
                    <MetaItem label="Scope" value="88 screens and states" />
                    <MetaItem label="Tools" value="Figma" />
                    <MetaItem
                      label="Navigation"
                      value="Home, Loan, Bills, More"
                    />
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-3 md:gap-10">
              {summary.map((item) => (
                <Reveal key={item.label}>
                  <div>
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                      {item.label}
                    </p>
                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate-300">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <SectionHeading
          id="brief"
          index="01"
          label="Brief"
          title="The brief"
          intro={
            <p>
              Moniva is a concept for a Pakistan-focused financial app. The
              challenge was to combine a wallet, personal loans and bill
              payments without overwhelming people, and to keep trust high at
              the moments that matter: entering personal details, authorising a
              payment, and waiting on a loan decision.
            </p>
          }
        >
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Wallet",
              "Personal loans",
              "Bill payments",
              "Trust at key moments",
            ].map((label) => (
              <span
                key={label}
                className="border border-white/[0.08] px-3 py-2 font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-300"
              >
                {label}
              </span>
            ))}
          </div>

          <Reveal delay={100} className="mt-9">
            <figure className="mx-auto max-w-[720px]">
              <AssetPanel
                src={assets.mockup}
                alt="Moniva project mockup across wallet, loans, bills and account screens"
                width={1200}
                height={896}
                sizes="(max-width: 768px) 100vw, 720px"
              />
              <AssetCaption
                label="Project Mockup"
                detail="Four-tab mobile experience across wallet, loans, bills and account management."
              />
            </figure>
          </Reveal>

          <Reveal delay={140} className="mt-8 max-w-2xl">
            <p className="font-sans text-[14px] leading-relaxed text-slate-400">
              Designed for two everyday needs: managing money without switching
              apps, and understanding a loan before committing to it. These are
              assumptions from the app&apos;s intended use, not
              interview-validated research.
            </p>
          </Reveal>
        </SectionHeading>

        <SectionHeading
          id="flows"
          index="02"
          label="Key flows"
          title="Key flows"
          intro={
            <p>
              The selected screens follow the money actions the app is built
              around: borrowing, paying bills, and confirming the result.
            </p>
          }
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-[17px] hidden h-px bg-white/10 lg:block"
            />
            {flows.map((flow) => (
              <Reveal key={flow.number}>
                <div className="relative">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-orange-400/40 bg-[#080d1a] font-['Space_Mono'] text-[10px] text-orange-300">
                    {flow.number}
                  </span>
                  <h3 className="mt-4 font-['Rajdhani'] text-xl font-semibold text-slate-100">
                    {flow.title}
                  </h3>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-slate-400">
                    {flow.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto pb-2 md:overflow-visible md:pb-0">
            <div className="flex w-max gap-4 md:grid md:w-full md:grid-cols-3 md:gap-6 xl:grid-cols-5">
              {[
                screens.onboarding,
                screens.loanApproved,
                screens.home,
                screens.bills,
                screens.addMoney,
              ].map((screen, i) => (
                <Reveal
                  key={screen.src}
                  delay={i * 60}
                  className="w-[190px] shrink-0 md:w-auto"
                >
                  <ScreenPanel {...screen} />
                </Reveal>
              ))}
            </div>
          </div>
        </SectionHeading>

        <SectionHeading
          id="architecture"
          index="03"
          label="Information Architecture"
          title="Four tabs keep each job separate."
          intro={
            <p>
              Home, Loan, Bills and More give wallet, borrowing, payments and
              account management their own place in the app.
            </p>
          }
        >
          <Reveal className="mt-9">
            <figure className="mx-auto max-w-[760px]">
              <AssetPanel
                src={assets.full}
                alt="Moniva full design board showing 88 mobile screens"
                width={1177}
                height={742}
                sizes="(max-width: 768px) 100vw, 760px"
              />
              <AssetCaption
                label="Full Design Board"
                detail="The complete 88-screen Figma board, presented without cropping."
              />
            </figure>
          </Reveal>

          <div className="mt-10 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {[
              ["Home", "Balance, shortcuts, and recent activity."],
              ["Loan", "Personal loan exploration, application, and repayment."],
              ["Bills", "Airtime, mobile data, electricity, and TV payments."],
              [
                "More",
                "Profile, verification, linked accounts, cards, and security.",
              ],
            ].map(([tab, detail]) => (
              <Reveal key={tab}>
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-orange-300/80">
                    {tab}
                  </p>
                  <p className="mt-2 font-['Rajdhani'] text-xl font-semibold leading-snug text-slate-100">
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SectionHeading>

        <SectionHeading
          id="system"
          index="04"
          label="Design System"
          title="One visual system across 88 screens."
          intro={
            <p>
              Midnight Blue for trust, Tangerine for key actions, Inter for
              readable figures. Reusable components and semantic colours
              (success, error, warning) keep all 88 screens consistent.
            </p>
          }
          background="linear-gradient(180deg, #080d1a 0%, #0a1020 100%)"
        >
          <div className="mt-10 space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <figure className="m-0">
                  <AssetPanel
                    src={assets.palette}
                    alt="Moniva color palette"
                    width={1600}
                    height={856}
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <AssetCaption
                    label="Color Palette"
                    detail="Navy #142B4A, Tangerine #F47B35, Gray #979797, White #FFFFFF, Success #108F05, Error #E71616, Warning #F59300."
                  />
                </figure>
              </Reveal>
              <Reveal delay={80}>
                <figure className="m-0">
                  <AssetPanel
                    src={assets.logo}
                    alt="Moniva logo"
                    width={853}
                    height={365}
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <AssetCaption
                    label="Identity"
                    detail="The app's own brand mark and identity asset."
                  />
                </figure>
              </Reveal>
            </div>

            <Reveal>
              <figure className="mx-auto max-w-[420px]">
                <AssetPanel
                  src={assets.typography}
                  alt="Moniva typography board"
                  width={1600}
                  height={2076}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <AssetCaption
                  label="Typography"
                  detail="Lato-led UI (400, 500, 600, 700); Inter retained for large numeric amounts; 14px and 16px are common."
                />
              </figure>
            </Reveal>

            <Reveal delay={80}>
              <figure className="mx-auto max-w-[760px]">
                <AssetPanel
                  src={assets.developer}
                  alt="Moniva developer notes and design system"
                  width={1600}
                  height={644}
                  sizes="(max-width: 768px) 100vw, 760px"
                />
                <AssetCaption
                  label="Developer Notes"
                  detail="7 local colour variables and 16 app text styles; no component inventory or shade ramps."
                />
              </figure>
            </Reveal>
          </div>
        </SectionHeading>

        <SectionHeading
          id="outcome"
          index="05"
          label="Outcome & Reflection"
          title="Outcome & reflection"
          background="linear-gradient(180deg, #0a1020 0%, #080d1a 100%)"
        >
          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-orange-300/80">
                  Concept project · no usage data
                </p>
                <p className="mt-5 max-w-2xl font-['Rajdhani'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-slate-200">
                  <strong>
                    This is a concept, so there is no usage data.
                  </strong>{" "}
                  What the project delivered: a complete, consistent flow set
                  across onboarding, wallet, lending, bills and security, plus
                  a reusable component system and 88 designed screens.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="border border-white/[0.08] bg-white/[0.02] p-7">
                  <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                    What I&apos;d test first
                  </p>
                  <p className="mt-4 font-['Rajdhani'] text-2xl font-semibold text-slate-100">
                    Loan application completion and payment error rates.
                  </p>
                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <p className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.22em] text-slate-500">
                      Reflection
                    </p>
                    <p className="mt-3 font-sans text-[12px] leading-relaxed text-slate-500">
                      In fintech, clarity is what builds trust. Predictable
                      interactions and honest feedback matter more than visual
                      flair.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </SectionHeading>
      </main>

      <CaseStudyEndNav
        ariaLabel="End of Moniva case study"
        eyebrow="Continue exploring"
        title="Open the final work."
        actions={
          <>
            <ComponentButton href="#flows">View Selected Screens</ComponentButton>
            <ComponentButton href="#outcome" variant="outline">
              Read the Outcome
            </ComponentButton>
          </>
        }
        previous={previous}
        next={next}
        index={index}
      />
    </>
  );
}
