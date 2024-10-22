import { MarqueeDemo } from "@/components/container/Marquee";
import ContainerLayout from "@/components/layout/ContainerLayout";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
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

        <div className=" border-y-[1px] my-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <LiaLaptopCodeSolid className="w-8 h-8" />
            <h1 className="text-lg font-semibold tracking-wide text-slate-800">
              Skills
            </h1>
          </div>
          <h1 className="mb-2 text-slate-700">My Coding Skills</h1>

          <MarqueeDemo />
        </div>

        <div className=" border-y-[1px] my-6 py-8">
          <div className="flex items-center gap-2 mb-2">
            <IoSchoolOutline className="w-8 h-8" />
            <h1 className="text-lg font-semibold tracking-wide text-slate-800">
              Career
            </h1>
          </div>
          <h1 className="mb-2 text-slate-700">My Coding Skills</h1>
        </div>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
          )}
        />
      </ContainerLayout>
    </>
  );
};

export default HomeView;
