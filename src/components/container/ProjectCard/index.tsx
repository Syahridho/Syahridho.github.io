import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import * as SiIcons from "react-icons/si";

interface Props {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string[];
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  tech,
  image,
  className,
}: Props) => {
  return (
    <Link href={`/project/${id}`}>
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded"
        }
      >
        <div className={cn("block cursor-pointer", className)}>
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="h-52 w-full overflow-hidden object-cover object-top shadow"
            />
          )}
        </div>
        <CardHeader className="px-3.5">
          <div className="space-y-0.5">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>

            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardFooter className="mt-auto flex !justify-start gap-1 pl-4">
          {tech &&
            tech.map((tech: any, index: number) => {
              const Icons = (SiIcons as any)[tech.icons];
              return <Icons key={index} color={tech.color} />;
            })}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
