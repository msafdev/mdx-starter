import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectSection } from "@/components/sections/project-section"
import { WorkSection } from "@/components/sections/work-section"

export default function Page() {
  return (
    <main className="space-y-12 sm:space-y-24">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <WorkSection />
    </main>
  )
}
