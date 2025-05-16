"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type PeopleCarouselProps = {
  name: string
  username: string
  src: string
  role: string
}

export default function PeopleCarousel({
  items,
}: {
  items: PeopleCarouselProps[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setDirection(1)

      setCurrentIndex((current) => (current + 1) % items.length)

      // Reset transitioning state after animation completes
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 500)

      return () => clearTimeout(timeout)
    }, 3000)

    return () => clearInterval(interval)
  }, [items.length])

  const positions = [
    { x: -120, scale: 0.4, opacity: 0.1, zIndex: 1 },
    { x: -80, scale: 0.8, opacity: 0.4, zIndex: 2 },
    { x: 0, scale: 1.2, opacity: 1, zIndex: 3 },
    { x: 80, scale: 0.8, opacity: 0.4, zIndex: 2 },
    { x: 120, scale: 0.4, opacity: 0.1, zIndex: 1 },
  ]

  const visibleItems = items.map((person, index) => {
    const currentPositionIndex =
      (index - currentIndex + 2 + items.length * 5) % items.length

    const previousPositionIndex =
      (index -
        ((currentIndex - 1 + items.length) % items.length) +
        2 +
        items.length * 5) %
      items.length

    const isLoopingItem =
      isTransitioning &&
      direction === 1 &&
      previousPositionIndex === 0 &&
      currentPositionIndex === 4

    return {
      person,
      index,
      positionIndex: currentPositionIndex,
      isVisible:
        currentPositionIndex >= 0 && currentPositionIndex < 5 && !isLoopingItem,
    }
  })

  return (
    <div className="w-full max-w-2xl mx-auto relative h-12 flex items-center justify-center">
      <div className="relative w-full flex justify-center items-center">
        <AnimatePresence>
          {visibleItems.map(({ person, index, positionIndex, isVisible }) => {
            if (!isVisible) return null

            const position = positions[positionIndex]

            return (
              <motion.div
                key={`person-${index}`}
                className="absolute flex flex-col items-center"
                layout
                initial={false}
                animate={{
                  x: position.x,
                  opacity: position.opacity,
                  scale: position.scale,
                  zIndex: position.zIndex,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  layout: { duration: 0.5 },
                }}
              >
                <Avatar className="size-12 rounded-md border shadow-sm">
                  <AvatarImage
                    src={person.src || "/placeholder.svg"}
                    alt={person.username}
                  />
                  <AvatarFallback className="rounded-md">
                    {person.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
