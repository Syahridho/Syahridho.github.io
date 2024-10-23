import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiVite,
  SiPython,
  SiNextdotjs,
  SiFigma,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";
import Image from "next/image";

// Array ikon yang akan ditampilkan beserta warnanya
const iconsUp = [
  { icon: SiHtml5, title: "HTML5", color: "#041322" },
  { icon: SiCss3, title: "CSS3", color: "#041322" },
  { icon: SiJavascript, title: "JavaScript", color: "#041322" },
  { icon: SiTypescript, title: "TypeScript", color: "#041322" },
  { icon: SiReact, title: "React", color: "#041322" },
  { icon: SiTailwindcss, title: "Tailwind CSS", color: "#041322" },
  {
    icon: () => (
      <Image src="/shadcn.svg" alt="Shadcn/UI" width="15" height="15" />
    ),
    title: "Shadcn UI",
    color: "#041322", // atau warna yang sesuai dengan tema shadcn
  },
  { icon: SiNodedotjs, title: "Node.js", color: "#041322" },
  { icon: SiPhp, title: "PHP", color: "#041322" },
  { icon: SiLaravel, title: "Laravel", color: "#041322" },
];

const iconsDown = [
  { icon: SiMysql, title: "MySQL", color: "#041322" },
  { icon: SiFirebase, title: "Firebase", color: "#041322" },
  { icon: SiVite, title: "Vite", color: "#041322" },
  { icon: SiPython, title: "Python", color: "#041322" },
  { icon: SiNextdotjs, title: "Next.js", color: "#041322" },
  { icon: SiFigma, title: "Figma", color: "#041322" },
  { icon: SiGithub, title: "GitHub", color: "#041322" },
  { icon: SiGit, title: "Git", color: "#041322" },
  { icon: SiVisualstudiocode, title: "VS Code", color: "#041322" },
];

// const firstRow = icons.slice(0, icons.length / 2);
// const secondRow = icons.slice(icons.length / 2);

// Komponen untuk menampilkan ikon
const IconsCard = ({
  icon: Icon,
  title,
  color,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-full border px-4 py-2",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        {/* Menggunakan komponen ikon dari react-icons dengan warna */}
        <Icon size={14} color={color} />
        <h1 className="text-sm font-medium">{title}</h1>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:30s] md:[--duration:40s]">
        {iconsUp.map((item, index) => (
          <IconsCard
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:30s] md:[--duration:40s]"
      >
        {iconsDown.map((item, index) => (
          <IconsCard
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
