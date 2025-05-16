"use client"

import Link from "next/link"
import { Eye, Fingerprint, Home, Inbox } from "lucide-react"

import { TransitionLink } from "@/components/wrapper/link"

const DOCK_ITEMS = [
  {
    label: "home",
    href: "/",
    icon: Home,
    type: "page",
  },
  {
    label: "about",
    href: "/about",
    icon: Fingerprint,
  },
  {
    label: "project",
    href: "#project",
    icon: Inbox,
  },
  {
    label: "blog",
    href: "/blog",
    icon: Eye,
    type: "page",
  },
]

export const Dock = () => {
  return (
    <header className="pointer-events-none fixed bottom-4 z-10 flex h-svh w-full cursor-default items-end justify-center md:bottom-8">
      <nav className="pointer-events-auto flex items-center rounded-[16px] border bg-background p-1 text-foreground">
        {DOCK_ITEMS.map((item) =>
          item.type === "page" ? (
            <TransitionLink
              key={item.label}
              href={item.href}
              className="header-item"
            >
              <item.icon className="size-4" />
            </TransitionLink>
          ) : (
            <Link key={item.label} href={item.href} className="header-item">
              <item.icon className="size-4" />
            </Link>
          )
        )}
      </nav>
    </header>
  )
}
