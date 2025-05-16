import { AboutSection } from "@/sections/about-section"
import { HeroSection } from "@/sections/hero-section"
import { PeopleSection } from "@/sections/people-section"
import { QuestionSection } from "@/sections/project-section"

import { Footer } from "@/components/macro/footer"

export default function Page() {
  return (
    <div className="space-y-32">
      <HeroSection />
      <AboutSection />
      <QuestionSection />
      <PeopleSection />
      <Footer />
    </div>
  )
}
