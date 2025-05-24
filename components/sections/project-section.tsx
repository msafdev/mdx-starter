import Image from "next/image"

import { PROJECT_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

import { Heading } from "../shared/heading"
import { Skills } from "../shared/skills"

export const ProjectSection = () => {
  return (
    <section id="project" className="relative z-0 flex flex-col justify-center">
      <div className="container z-0 flex flex-col items-center gap-y-8 sm:gap-y-12 max-w-xl sm:max-w-4xl">
        <div className="flex items-center -space-x-16 w-full">
          {PROJECT_ITEMS.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-dashed border-zinc-100 dark:border-zinc-700",
                item.id !== 2 ? "scale-75" : "",
                item.id === 1 && "-rotate-3",
                item.id === 3 && "rotate-3",
                item.id === 2 && "z-10"
              )}
            >
              <Image
                src={item.src}
                alt={`Project ${item.id} image cover.`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full sm:max-w-lg space-y-4 sm:space-y-8">
          <Heading title="Digitalize Your Product">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              magni officiis, corporis tempore nam quo et, neque nemo nostrum
              quisquam totam fugiat?
            </p>
            <p>Suscipit, beatae! Lorem ipsum dolor sit amet consectetur.</p>
          </Heading>

          <Skills />
        </div>
      </div>
    </section>
  )
}
