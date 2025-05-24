"use client"

import Link from "next/link"

import { useTheme } from "next-themes"
import { Square, Eye, Home } from "lucide-react"

import { Button } from "../ui/button"

export const Dock = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="pointer-events-none fixed bottom-4 z-10 flex h-svh w-full cursor-default items-end justify-center sm:bottom-8">
      <nav className="pointer-events-auto flex items-center rounded-[16px] border bg-background p-1 text-foreground">
        <Link href={"/"} className="header-item">
          <Home className="size-4" />
        </Link>
        <Link href={"/blog"} className="header-item">
          <Eye className="size-4" />
        </Link>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="header-item rounded-xl size-10"
        >
          <Square className="size-4" />
        </Button>
      </nav>
    </header>
  )
}
