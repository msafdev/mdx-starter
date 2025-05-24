import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"

import { Card } from "@/components/blog/card"
import { Heading } from "@/components/shared/heading"

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <section
      id="blog"
      className="relative z-0 min-h-svh py-32 flex flex-col justify-center "
    >
      <div className="container z-0 flex flex-col gap-y-6 sm:gap-y-8 max-w-xl">
        <Heading title="Recent Posts">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim vel
          accusantium ea laboriosam, sed similique fuga facilis corrupti?
        </Heading>
        {sortedPosts?.length > 0 ? (
          sortedPosts.map((post) => {
            return <Card key={post.slug} {...post} />
          })
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </section>
  )
}
