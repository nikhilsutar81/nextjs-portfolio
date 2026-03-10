export const dynamic = 'force-dynamic';

import { AboutSection } from "@/components/viewer/about/about-section";
import { ContactSection } from "@/components/viewer/contact/contact-section";
import { HeroSection } from "@/components/viewer/hero/hero-section";
import { ProjectsSection } from "@/components/viewer/projects/projects-section";
import { SkillsSection } from "@/components/viewer/skills/skill-section";
import { Socials } from "@/components/viewer/socials/socials";
import { WorkExpSection } from "@/components/viewer/work-exp/work-exp-section";
import { ScrollFadeIn } from "@/components/scroll-fade-in";


export default async function Home() {
  return (
    <div className="max-w-full select-none overflow-hidden">
      <HeroSection />
      {/* <p className=" font-semibold text-5xl mb-20">Everything App for your teams</p> */}
      {/* <SocialsMaarquee /> */}
      <ScrollFadeIn direction="up">
        <Socials />
      </ScrollFadeIn>
      <ScrollFadeIn direction="up">
        <AboutSection />
      </ScrollFadeIn>
      <ScrollFadeIn direction="up">
        <WorkExpSection />
      </ScrollFadeIn>
      <ScrollFadeIn direction="up">
        <ProjectsSection />
      </ScrollFadeIn>
      <ScrollFadeIn direction="up">
        <SkillsSection />
      </ScrollFadeIn>
      {/* <CTA /> */}
      <ScrollFadeIn direction="up">
        <ContactSection />
      </ScrollFadeIn>
    </div>
  );
}
