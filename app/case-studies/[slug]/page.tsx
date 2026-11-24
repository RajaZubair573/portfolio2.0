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
import { AxionCaseStudy } from "@/components/case-study/axion-case-study";
import { CyberReyCaseStudy } from "@/components/case-study/cyberrey-case-study";
import { ClassicCaseStudy } from "@/components/case-study/classic-case-study";
import CallToAction from "@/components/call-to-action";
import { CwesdCaseStudy } from "@/components/case-study/cwesd-case-study";
import { LighthouseCaseStudy } from "@/components/case-study/lighthouse-case-study";
import { MonivaCaseStudy } from "@/components/case-study/moniva-case-study";
import { PabloCaseStudy } from "@/components/case-study/pablo-case-study";
import { PrimeRenovationsCaseStudy } from "@/components/case-study/prime-renovations-case-study";
import { ReclaimCaseStudy } from "@/components/case-study/reclaim-case-study";
import { ReadingProgress } from "@/components/case-study/reading-progress";
import { SynctomCaseStudy } from "@/components/case-study/synctom-case-study";
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
  const isReclaim = caseStudy.slug === "reclaim-data-recovery-app";
  const isLightHouse = caseStudy.slug === "light-house-ecommerce-website";
  const isCwesd = caseStudy.slug === "cwesd-learning-platform";
  const pageTitle = isReclaim
    ? "Reclaim — Data Recovery App Concept | Raja Zubair"
    : isLightHouse
      ? "Light House E-commerce Website | UI/UX Case Study — Raja Zubair"
      : isCwesd
        ? "CWESD Learning Platform | UI/UX Case Study — Raja Zubair"
        : `${caseStudy.title} | Case Study`;
  const description = isReclaim
    ? "A mobile data recovery app concept designed to make scanning, previewing and restoring deleted files feel clear and reassuring."
    : isLightHouse
      ? "A client project by Raja Zubair: UI/UX design for a premium architectural lighting e-commerce website, designed in Figma and developed by Synctom using custom coding."
      : isCwesd
        ? "A real client project by Raja Zubair: UI/UX design for CWESD, a learning platform supporting women in technology through education, mentorship, and community."
        : detail?.intro ?? caseStudy.overview;
  const socialImage = isLightHouse
    ? "/projects/Lighthouse/Lighthouse-Mockup.png"
    : isCwesd
      ? "/projects/CWESD/CWESD - Mockup.png"
      : caseStudy.previews.desktop;

  const metadata: Metadata = {
    title: pageTitle,
    description,
    openGraph: {
      title: isReclaim || isLightHouse || isCwesd ? pageTitle : caseStudy.title,
      description,
      images: socialImage ? [{ url: socialImage }] : undefined,
    },
  };

  if (isReclaim || isLightHouse || isCwesd) {
    metadata.twitter = {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: socialImage ? [socialImage] : undefined,
    };
  }

  return metadata;
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

  let content;
  let standalone = false;

  if (caseStudy.slug === "cyberrey-platform") {
    content = (
      <CyberReyCaseStudy
        caseStudy={caseStudy}
        index={index}
        next={next}
        previous={previous}
      />
    );
    standalone = true;
  } else if (caseStudy.slug === "moniva-financial-app") {
    content = (
      <MonivaCaseStudy
        caseStudy={caseStudy}
        index={index}
        next={next}
        previous={previous}
      />
    );
    standalone = true;
  } else if (caseStudy.slug === "reclaim-data-recovery-app") {
    content = (
      <ReclaimCaseStudy
        caseStudy={caseStudy}
        index={index}
        next={next}
        previous={previous}
      />
    );
    standalone = true;
  } else if (caseStudy.slug === "cwesd-learning-platform") {
    content = (
      <CwesdCaseStudy
        caseStudy={caseStudy}
        index={index}
        next={next}
        previous={previous}
      />
    );
    standalone = true;
  } else if (caseStudy.slug === "light-house-ecommerce-website") {
    content = (
      <LighthouseCaseStudy
        caseStudy={caseStudy}
        index={index}
        next={next}
        previous={previous}
      />
    );
    standalone = true;
  } else if (caseStudy.slug === "axion-lighting-ecommerce") {
    content = <AxionCaseStudy caseStudy={caseStudy} index={index} />;
  } else if (caseStudy.slug === "prime-renovations") {
    content = <PrimeRenovationsCaseStudy caseStudy={caseStudy} index={index} />;
  } else if (caseStudy.slug === "synctom-digital-solutions") {
    content = <SynctomCaseStudy caseStudy={caseStudy} index={index} />;
  } else if (caseStudy.slug === "pablo-marbles-granite") {
    content = <PabloCaseStudy caseStudy={caseStudy} index={index} />;
  } else if (!detail) {
    content = <ClassicCaseStudy caseStudy={caseStudy} index={index} />;
  } else {
    content = (
      <main className="relative w-full overflow-hidden bg-[#080d1a]">
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
      </main>
    );
  }

  if (standalone) {
    return content;
  }

  return (
    <>
      <CaseStudyScrollToTop />
      {content}
      <CaseStudyNextProject next={next} previous={previous} />
      <CallToAction />
    </>
  );
}
