import ProjectCard from "@/components/container/ProjectCard";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import { projects } from "../../../utils/resume";

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
        {projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + index * 0.05}
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
