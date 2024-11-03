import ProjectCard from "@/components/container/ProjectCard";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";

const projects = [
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
  {
    title: "Chat Collect",
    href: "/project/asd",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "/project/asd",
        icon: "",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fprojects%2Ffilm.webp?alt=media&token=d7b6469c-a5de-48ea-a220-8013e8c5df25",
  },
];

const BLUR_FADE_DELAY = 0.04;

const ProjectView = () => {
  return (
    <>
      <BlurIn
        word="Projects"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">The project I&apos;ve created</h1>
      <div className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-[800px] mx-auto">
        {projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
            />
          </BlurFade>
        ))}
      </div>
    </>
  );
};

export default ProjectView;
