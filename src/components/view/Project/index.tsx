import { projects } from "../../../utils/resume";
import ProjectCard from "@/components/container/ProjectCard";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const ProjectView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6); // Set the number of projects to display per page

  // Get the projects to display based on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <BlurIn
        word="Projects"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">The project I&apos;ve created</h1>
      <div className="p-4 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-[800px] mx-auto">
        {currentProjects.map((project: any, index: number) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + index * 0.05}
            inView
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
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {currentPage > 1 && (
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              )}
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    isActive={pageNumber === currentPage}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              {currentPage < totalPages && (
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default ProjectView;
