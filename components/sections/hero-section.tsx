import Image from "next/image"
import Link from "next/link"

import MemojiLaptop from "@/assets/icons/memoji-laptop.png"

import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-0 min-h-svh py-32 flex flex-col justify-center"
    >
      <div className="absolute inset-0 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_-50%,hsl(var(--accent))_10%,transparent_100%)]"></div>

      <div className="container z-0 flex flex-col items-center gap-y-6 sm:gap-y-8 max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={MemojiLaptop}
            alt="Image of Salman peeking from behind of a laptop"
            width={64}
            height={64}
          />
          <div className="inline-flex h-fit w-fit items-center gap-x-3 rounded-lg border border-background/20 bg-foreground px-3 py-2 text-background">
            <div className="relative size-2 rounded-full bg-green-500" />
            <p className="text-xs font-medium sm:text-sm">Open to new things</p>
          </div>
        </div>

        <div className="z-0 flex flex-col gap-y-4">
          <h1 className="text-balance text-center font-serif text-2xl sm:text-3xl">
            Thoughtfully Designed and Engineered
          </h1>
          <p className="text-balance text-center text-sm text-muted-foreground sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            recusandae ratione nesciunt odio voluptatum tempora ex placeat
            dignissimos, doloremque ullam eum quo esse dolorum.
          </p>
        </div>

        <div className="z-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <Button size={"sm"}>
            <Link href={"#footer"}>
              <span>👋</span>
              <span>Let's connect</span>
            </Link>
          </Button>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={"/blog"} aria-label="Go to /blog">
              <span>Read entries</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
