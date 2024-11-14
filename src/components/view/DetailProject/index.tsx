import { Badge } from "@/components/ui/badge";
import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { detailProject } from "@/utils/resume";
import Footer from "@/components/container/Footer";

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
      <Link
        className="flex items-center text-slate-600 group transition duration-500 hover:text-slate-900"
        href={"/project"}
      >
        <div className="border rounded-full bg-white p-2 my-2 mr-2 transition duration-500 group-hover:border-slate-600 group:hover:shadow-xl">
          <FaArrowLeft />
        </div>
        Back
      </Link>

      <div className="py-6">
        <h1 className="text-2xl font-medium tracking-wide">
          {detailProject.title}
        </h1>
        <p className="mb-6 text-slate-400 text-sm">{detailProject.dates}</p>
        <p className="mb-4">{detailProject.description}</p>
        <Image
          src={detailProject.image}
          alt={"image"}
          width={800}
          height={800}
          className="mx-auto my-12"
        />
        <h1 className="text-xl font-semibold mb-4">Technologies :</h1>
        <div className="flex gap-2 flex-wrap mb-12">
          {detailProject.technologies.map((tech: string, index: number) => (
            <Badge variant={"default"} key={index}>
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 justify-end">
          {detailProject.links.map((link: any, index: number) => {
            if (link.type === "Demo") {
              return (
                <ShinyButton
                  key={index}
                  onClick={() => {
                    window.open(link.href, "_blank", "noopener,noreferrer");
                  }}
                  className="pt-2.5"
                >
                  Live Demo
                </ShinyButton>
              );
            } else if (link.type === "Github") {
              return (
                <RainbowButton
                  key={index}
                  className="rounded-lg py-0"
                  onClick={() => {
                    window.open(link.href, "_blank", "noopener,noreferrer");
                  }}
                >
                  <SiGithub className="mr-2 w-4 h-4" />
                  Github
                </RainbowButton>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProjectView;
