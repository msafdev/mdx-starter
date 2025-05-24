import { Heading } from "../shared/heading"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-0 flex flex-col justify-center">
      <div className="container z-0 flex flex-col items-center gap-y-6 sm:gap-y-8 max-w-xl">
        <Heading title="Who Am I?">
          <Avatar className="size-16 rounded block sm:hidden mt-4">
            <AvatarImage
              src="https://github.com/msafdev.png"
              alt="Salman's avatar image."
            />
            <AvatarFallback className="rounded">MS</AvatarFallback>
          </Avatar>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nemo est molestias quae mollitia debitis eos fuga iusto dignissimos?
          </p>
        </Heading>

        <div className="w-full flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          <Avatar className="sm:block hidden size-16 rounded">
            <AvatarImage
              src="https://github.com/msafdev.png"
              alt="Salman's avatar image."
            />
            <AvatarFallback className="rounded">MS</AvatarFallback>
          </Avatar>
          <div className="w-full space-y-6 sm:space-y-8">
            <Heading title="2020" size="sm">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                doloremque?
              </p>
            </Heading>
            <Heading title="2023" size="sm">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                sed ipsam illum.
              </p>
            </Heading>
            <Heading title="2025" size="sm">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                sed ipsam illum.
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus enim odit delectus cum, consequatur porro? Nostrum, in?
              </p>
            </Heading>
          </div>
        </div>

        <div className="w-full flex flex-col"></div>
      </div>
    </section>
  )
}
