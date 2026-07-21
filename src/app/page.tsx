import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 lg:py-10">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ResearchSection />
      <ContactSection />
    </main>
  );
}
