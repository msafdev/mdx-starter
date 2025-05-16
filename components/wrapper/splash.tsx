"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: "-100%" }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.3,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-3xl font-serif"
          >
            Ola!
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
