import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyDetails } from "@/lib/case-study-details";
import { CaseStudyChallenge } from "@/components/case-study/case-study-challenge";
import { CaseStudyDirection } from "@/components/case-study/case-study-direction";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyNextProject } from "@/components/case-study/case-study-next-project";
import { CaseStudyOutcomes } from "@/components/case-study/case-study-outcomes";
import { CaseStudyOverview } from "@/components/case-study/case-study-overview";
import { CaseStudyPersona } from "@/components/case-study/case-study-persona";
import { CaseStudyResponsive } from "@/components/case-study/case-study-responsive";
import { CaseStudyScrollToTop } from "@/components/case-study/case-study-scroll-to-top";
import { CaseStudyShowcase } from "@/components/case-study/case-study-showcase";
import { ClassicCaseStudy } from "@/components/case-study/classic-case-study";
import { MonivaCaseStudy } from "@/components/case-study/moniva-case-study";
import { ReadingProgress } from "@/components/case-study/reading-progress";
import {
  SectionRail,
  type RailItem,
} from "@/components/case-study/section-rail";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) return { title: "Case Study Not Found" };

  const detail = caseStudyDetails[caseStudy.slug];
  const description = detail?.intro ?? caseStudy.overview;

  return {
    title: `${caseStudy.title} | Case Study`,
    description,
    openGraph: {
      title: caseStudy.title,
      description,
      images: caseStudy.previews.desktop
        ? [{ url: caseStudy.previews.desktop }]
        : undefined,
    },
  };
}

const railItems: RailItem[] = [
  { id: "hero", label: "Intro" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "persona", label: "Persona" },
  { id: "direction", label: "Direction" },
  { id: "showcase", label: "Showcase" },
  { id: "responsive", label: "Responsive" },
  { id: "outcomes", label: "Outcomes" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const caseStudy = caseStudies[index];
  const detail = caseStudyDetails[caseStudy.slug];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const previous = index > 0 ? caseStudies[index - 1] : null;

  if (caseStudy.slug === "moniva-financial-app") {
    return (
      <>
        <CaseStudyScrollToTop />
        <MonivaCaseStudy
          caseStudy={caseStudy}
          index={index}
          next={next}
          previous={previous}
        />
      </>
    );
  }

  if (!detail) {
    return (
      <>
        <CaseStudyScrollToTop />
        <ClassicCaseStudy
          caseStudy={caseStudy}
          index={index}
          next={next}
          previous={previous}
        />
      </>
    );
  }

  return (
    <main className="relative w-full overflow-hidden bg-[#080d1a]">
      <CaseStudyScrollToTop />
      <ReadingProgress />
      <SectionRail items={railItems} />
      <CaseStudyHero caseStudy={caseStudy} detail={detail} index={index} />
      <CaseStudyOverview detail={detail} />
      <CaseStudyChallenge detail={detail} />
      <CaseStudyPersona detail={detail} />
      <CaseStudyDirection detail={detail} />
      <CaseStudyShowcase caseStudy={caseStudy} detail={detail} />
      <CaseStudyResponsive detail={detail} />
      <CaseStudyOutcomes detail={detail} />
      <CaseStudyNextProject next={next} />
    </main>
  );
}
