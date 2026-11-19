import Hero from "@/components/hero";
import AboutSnapshot from "@/components/about-snapshot";
import Testimonial from "@/components/testimonial";
import FeaturedWork from "@/components/featured-work";
import DesignProcess from "@/components/design-process";
import ExperienceTimeline from "@/components/experience-timeline";
import Skills from "@/components/skills";
import CallToAction from "@/components/call-to-action";
import PageLoader from "@/components/page-loader";


export default function Home() {
  return (
    <>
      <PageLoader />
      <main>
        <Hero />
        <AboutSnapshot />
        <FeaturedWork />
        <DesignProcess />
        <Testimonial />
        <ExperienceTimeline />
        <Skills />
        <CallToAction />
      </main>
    </>
  );
}
