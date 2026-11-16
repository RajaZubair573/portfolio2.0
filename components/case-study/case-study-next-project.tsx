import type { CaseStudy } from "@/lib/case-studies";
import { ComponentButton, Container } from "./ui";

export function CaseStudyNextProject({ next, previous }: { next?: CaseStudy; previous?: CaseStudy | null }) {
  if (!next && !previous) return null;

  return (
    <nav
      aria-label="Case study navigation"
      className="border-t border-white/[0.06] py-16 md:py-20"
      style={{ background: "#05080f" }}
    >
      <Container>
        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          {previous ? <ComponentButton href={`/case-studies/${previous.slug}`} variant="outline">{previous.title}</ComponentButton> : <div />}
          {next ? <ComponentButton href={`/case-studies/${next.slug}`} variant="outline">{next.title}</ComponentButton> : null}
        </div>
      </Container>
    </nav>
  );
}
