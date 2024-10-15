import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTsnode,
  SiReact,
} from "react-icons/si";

// Array ikon yang akan ditampilkan beserta warnanya
const icons = [
  { icon: SiHtml5, title: "HTML5", color: "#E34F26" },
  { icon: SiCss3, title: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
  { icon: SiTsnode, title: "TypeScript", color: "#3178C6" },
  { icon: SiReact, title: "React", color: "#61DAFB" },
];

const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);

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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Menggunakan komponen ikon dari react-icons dengan warna */}
        <Icon size={50} color={color} />
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item, index) => (
          <IconsCard
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item, index) => (
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
