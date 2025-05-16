import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"

import { Card } from "@/components/blog/card"

export const BlogWrapper = async () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <>
      {sortedPosts?.length > 0 ? (
        <ul className="flex max-w-lg flex-col w-full">
          {sortedPosts.map((post) => {
            const { slug, date, title, description, tags, image, author } = post
            return (
              <li key={slug}>
                <Card
                  image={image}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </>
  )
}
