import { Metadata } from "next"

import { BlogWrapper } from "@/components/wrapper/blog"

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
}

export default async function Page() {
  return (
    <div className="relative z-0 flex min-h-svh items-center py-32">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        <BlogWrapper />
      </div>
    </div>
  )
}
