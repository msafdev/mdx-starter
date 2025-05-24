import Image from "next/image"

import { SKILL_ITEMS } from "@/lib/constants"

export const Skills = () => {
  return (
    <div className="flex items-center w-full gap-2 justify-between max-w-full">
      {SKILL_ITEMS.map((item) => (
        <div key={item.id} className="relative group/skill">
          <div className="p-1.5 min-w-6 rounded-lg bg-transparent hover:bg-accent shrink-0">
            <Image
              src={item.src}
              alt={`Icons of ${item.title}`}
              width={24}
              height={24}
            />
          </div>
          <span className="group-hover/skill:opacity-100 opacity-0 absolute text-xs border bg-card font-medium shadow-sm px-2 py-1 left-1/2 -translate-x-1/2 -bottom-8 rounded animate z-10">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  )
}
