import Link from "next/link"

import { Magnetic } from "@/components/motion/magnetic"
import { Button } from "@/components/ui/button"

const SOCIAL_ITEMS = [
  {
    label: "github",
    url: "https://github.com/msafdev",
  },
  {
    label: "twitter",
    url: "https://twitter.com/sal__moon",
  },
  {
    label: "linkedin",
    url: "https://linkedin.com/in/msafdev",
  },
]

export const Footer = () => {
  return (
    <footer id="footer" className="relative z-0 py-32">
      <div className="container flex flex-col items-center gap-y-12 sm:gap-y-16">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-y-4 gap-x-6">
          <div className="flex items-center gap-x-6">
            {SOCIAL_ITEMS.map((item) => (
              <Link
                href={item.url}
                target="_blank"
                key={item.url}
                className="text-xs sm:text-sm"
              >
                <span className="font-medium text-anim">{item.label}</span>
              </Link>
            ))}
          </div>
          <span className="sm:block hidden text-xs font-medium text-muted-foreground cursor-default">
            /
          </span>
          <Magnetic
            intensity={0.2}
            springOptions={{ bounce: 0.1 }}
            actionArea="global"
            range={100}
          >
            <Button size={"sm"}>
              <Magnetic
                intensity={0.1}
                springOptions={{ bounce: 0.1 }}
                actionArea="global"
                range={50}
              >
                <Link href={"/"}>Sub to my newsletter</Link>
              </Magnetic>
            </Button>
          </Magnetic>
        </div>

        <div className="font-serif select-none">. . .</div>

        <code className="text-xs font-medium text-muted-foreground">
          © 2025 msafdev (salmoon)
        </code>
      </div>
    </footer>
  )
}
