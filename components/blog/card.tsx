import Image from "next/image"
import Link from "next/link"

import { Calendar } from "lucide-react"

import { cn, formatDate } from "@/lib/utils"

import { Tag } from "@/components/shared/tag"
import { buttonVariants } from "@/components/ui/button"

interface CardProps {
  slug: string
  title: string
  image: string
  description?: string
  date: string
  tags?: Array<string>
}

export function Card({
  slug,
  title,
  image,
  description,
  date,
  tags,
}: CardProps) {
  return (
    <article id={slug}>
      <Link
        href={slug}
        className="flex sm:flex-row flex-col group gap-x-8 gap-y-3"
      >
        <div className="relative sm:h-24 w-auto aspect-video overflow-hidden rounded-lg shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-serif text-base sm:text-lg">{title}</h3>
          <p className="font-medium text-muted-foreground text-sm line-clamp-2 sm:leading-relaxed sm:line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </article>
  )
}
