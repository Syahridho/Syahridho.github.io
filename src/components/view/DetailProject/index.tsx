import { Badge } from "@/components/ui/badge";
import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const url: string =
  "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25";

const DetailProjectView = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-8">
      <GridPattern
        width={20}
        height={16}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
        )}
      />
      <Link className="flex items-center text-slate-600" href={"/certificate"}>
        <div className="border rounded-full p-2 my-2 mr-2">
          <FaArrowLeft />
        </div>
        Back
      </Link>

      <div className="py-6">
        <h1 className="text-2xl font-medium mb-3 tracking-wide">
          Lorem ipsum, dolor sit amet
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut
          minus vel itaque suscipit fugiat sint repudiandae obcaecati fuga
          architecto consequatur, qui beatae debitis esse magni voluptatem
          praesentium dignissimos molestias.
        </p>
        <div className="flex gap-2">
          <Badge>Next Js</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind</Badge>
        </div>
        <div className="flex gap-3 justify-end">
          <ShinyButton className="pt-2.5">Live Demo</ShinyButton>
          <RainbowButton className="rounded-lg py-0">
            <SiGithub className="mr-2 w-4 h-4" />
            Github
          </RainbowButton>
        </div>
      </div>
      <Image
        src={url}
        alt={"image"}
        width={800}
        height={800}
        className="mx-auto my-6"
      />
    </div>
  );
};

export default DetailProjectView;
