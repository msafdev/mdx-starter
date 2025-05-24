import Image from "next/image"

import { WORK_ITEMS } from "@/lib/constants"

import { Heading } from "../shared/heading"

export const WorkSection = () => {
  return (
    <section id="work" className="relative z-0 flex flex-col justify-center">
      <div className="container z-0 flex flex-col items-center gap-4 max-w-xl">
        <Heading title="Carbon Footprint">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo
          est molestias quae mollitia debitis eos fuga iusto dignissimos?
        </Heading>

        <div className="w-full flex flex-col gap-4">
          {WORK_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center w-full gap-x-4">
              <div className="bg-accent border border-dashed rounded-md p-1.5">
                <Image
                  src={item.src}
                  alt={`Logo of ${item.title}`}
                  width={24}
                  height={24}
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-serif leading-none">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.year.from} - {item.year.to}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
