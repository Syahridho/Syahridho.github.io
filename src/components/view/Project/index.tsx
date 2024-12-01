import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dynamic from "next/dynamic";
import instance from "@/lib/axios/instance";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const BlurIn = dynamic(() => import("@/components/ui/blur-in"), { ssr: false });
const BlurFade = dynamic(() => import("@/components/ui/blur-fade"), {
  ssr: false,
});
const ProjectCard = dynamic(
  () => import("@/components/container/ProjectCard"),
  { ssr: false }
);

const BLUR_FADE_DELAY = 0.04;

const fetchData = async () => {
  const { data } = await instance.get("/api/projects");
  return data.data;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: fetchData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ProjectView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchData,
  });

  const projectsData = data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

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
        {isLoading ? (
          <>
            <Skeleton className="w-96 md:w-[350px] h-56" />
            <Skeleton className="w-96 md:w-[350px] h-56" />
            <Skeleton className="w-96 md:w-[350px] h-56" />
            <Skeleton className="w-96 md:w-[350px] h-56" />
            <Skeleton className="w-96 md:w-[350px] h-56" />
            <Skeleton className="w-96 md:w-[350px] h-56" />
          </>
        ) : (
          currentProjects.map((project: any, index: number) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              inView
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
              />
            </BlurFade>
          ))
        )}
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
