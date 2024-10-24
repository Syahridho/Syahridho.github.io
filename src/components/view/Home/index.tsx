import { MarqueeDemo } from "@/components/container/Marquee";
import ContainerLayout from "@/components/layout/ContainerLayout";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { careers } from "@/utils/resume";
import DotPattern from "@/components/ui/dot-pattern";
import GridPattern from "@/components/ui/grid-pattern";

const HomeView = () => {
  return (
    <>
      <ContainerLayout>
        <div className="flex flex-col md:justify-between md:items-center md:flex-row">
          <BlurIn
            word="Hi, I'm Syahridho Arjuna Syahputra"
            className="text-4xl font-bold text-black dark:text-white"
          />
          <RainbowButton className="hidden md:block text-nowrap">
            Download CV
          </RainbowButton>
        </div>

        <div className="my-4">
          <ol className="list-disc list-inside flex flex-col gap-1 text-slate-700 md:flex-row md:gap-4">
            <li>Front End Developer</li>
            <li>Based in Pekanbaru, Riau, Indonesia</li>
          </ol>
        </div>
        <div>
          <p className="text-slate-700">
            I am a Frontend Developer with a focus on creating aesthetic and
            responsive user interfaces. With skills in HTML, CSS, JavaScript,
            Tailwind, React JS and others, I have developed a variety of
            projects, ranging from business websites to interactive web
            applications.
          </p>
        </div>

        <div className=" border-t-[1px] my-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <LiaLaptopCodeSolid className="w-8 h-8" />
            <h1 className="text-lg font-semibold tracking-wide text-slate-800">
              Skills
            </h1>
          </div>
          <h1 className="mb-2 text-slate-700">My Coding Skills</h1>

          <MarqueeDemo />
        </div>

        <div className="border-t-[1px] my-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <IoSchoolOutline className="w-7 h-7" />
            <h1 className="text-lg font-semibold tracking-wide text-slate-800">
              Career
            </h1>
          </div>
          <h1 className="mb-2 text-slate-700">My Career</h1>

          <div className="divide-y divide-dashed my-4">
            {careers.map((item: any, index: any) => (
              <div
                key={index}
                className="relative ml-6 py-8 pl-10 border-l border-dashed flex flex-col gap-1.5"
              >
                <div className="absolute -left-6 top-6 flex items-center justify-center bg-white rounded-full z-10">
                  <Avatar className="border size-12 m-auto">
                    <AvatarImage
                      src={item.image}
                      alt="Profile"
                      className="object-contain"
                    />
                    <AvatarFallback>Unilak</AvatarFallback>
                  </Avatar>
                </div>

                <h2 className="text-xs text-muted-foreground">{item.dates}</h2>
                <h1 className="font-medium leading-none">{item.title}</h1>
                <h3 className="text-sm text-muted-foreground">
                  {item.location}
                </h3>
                <h3 className="prose dark:prose-invert text-sm text-muted-foreground">
                  {item.description}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <GridPattern
          width={20}
          height={16}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
          )}
        />

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_right,white,transparent)]"
          )}
        />
      </ContainerLayout>
    </>
  );
};

export default HomeView;
