import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type HeadingProps = {
  title: string
  children: ReactNode
  size?: "sm" | "md"
}

export const Heading = ({ title, children, size = "md" }: HeadingProps) => {
  const headingSizeVariant = {
    sm: "text-xl mb-1",
    md: "text-2xl mb-2",
  }

  const paragraphSizeVariant = {
    sm: "text-sm",
    md: "text-base",
  }

  return (
    <div className="w-full">
      <h2 className={cn("font-serif", headingSizeVariant[size])}>{title}</h2>
      <div
        className={cn(
          "space-y-4 font-medium text-muted-foreground",
          paragraphSizeVariant[size]
        )}
      >
        {children}
      </div>
    </div>
  )
}
