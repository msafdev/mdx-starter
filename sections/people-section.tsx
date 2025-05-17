import { PeopleCarousel } from "@/components/macro/carousell"

const PEOPLE_ITEMS = [
  {
    name: "Alex Carter",
    username: "@alexcarter",
    src: "/static/placeholder.svg",
    role: "Vercel",
    text: "Using this tool felt like upgrading my workflow overnight. It's intuitive, fast, and integrates perfectly with my stack.",
  },
  {
    name: "Maya Tanaka",
    username: "@maya.codes",
    src: "/static/placeholder.svg",
    role: "Stripe",
    text: "Honestly one of the best experiences I've had building out a product. Clear documentation and seamless performance.",
  },
  {
    name: "Liam O'Reilly",
    username: "@liamdev",
    src: "/static/placeholder.svg",
    role: "Oddin",
    text: "We adopted this on our team and productivity noticeably improved. Highly recommend for scaling teams.",
  },
  {
    name: "Sofia Müller",
    username: "@sofiamueller",
    src: "/static/placeholder.svg",
    role: "Shopify",
    text: "From onboarding to daily use, it just works. This is the kind of developer experience every tool should strive for.",
  },
  {
    name: "Diego Ramos",
    username: "@diego.codes",
    src: "/static/placeholder.svg",
    role: "Supabase",
    text: "Saves me hours every week. It’s minimal, reliable, and powerful—exactly what I look for in dev tools.",
  },
]

export const PeopleSection = () => {
  return (
    <section id="people" className="relative z-0">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        <PeopleCarousel items={PEOPLE_ITEMS} />
      </div>
    </section>
  )
}
