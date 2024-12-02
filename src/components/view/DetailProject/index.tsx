import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import Footer from "@/components/container/Footer";
import CopyCode from "@/components/container/CopyCode";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import instance from "@/lib/axios/instance";
import _404 from "@/pages/404";
import { AiOutlineLoading } from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";

const AllIcons: any = {
  ...SiIcons,
  ...RiIcons,
};

const fetchData = async (id: string) => {
  try {
    const { data } = await instance.get(`/api/projects/${id}`);
    return data.data;
  } catch (error: any) {
    throw new Error(error.response?.status || "Unknown error");
  }
};

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();
  const { id } = context.query;

  try {
    await queryClient.prefetchQuery({
      queryKey: ["detailProject", id],
      queryFn: () => fetchData(id),
    });
  } catch (error: any) {
    console.log(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}

const DetailProjectView = () => {
  const { id }: any = useRouter().query;

  const { data, isError, isLoading } = useQuery({
    queryKey: ["detailProject", id],
    queryFn: () => fetchData(id),
    enabled: !!id,
    retry: false,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-slate-800">
        Loading...{" "}
        <AiOutlineLoading className="ml-2 animate-spin text-slate-700" />
      </div>
    );
  if (isError || !data) return <_404 />;

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
        <div
          className={
            "flex flex-col mb-6 md:flex-row md:justify-between md:mb-0"
          }
        >
          <div className={"mb-6"}>
            <h1 className="text-2xl font-medium tracking-wide">
              {data && data.title}
            </h1>
            <p className="text-slate-400 text-sm">{data && data.date}</p>
          </div>
          <div className="flex gap-3">
            {data &&
              data?.links.map((link: any, index: number) => {
                if (link.name === "website") {
                  return (
                    <ShinyButton
                      key={index}
                      onClick={() => {
                        window.open(link.href, "_blank", "noopener,noreferrer");
                      }}
                      className="pt-2.5 h-fit"
                    >
                      Live Demo
                    </ShinyButton>
                  );
                } else if (link.name === "github") {
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
        <p className="mb-4">{data?.description}</p>
        <Image
          src={data && data?.image}
          alt={"image"}
          width={700}
          height={700}
          className="mx-auto my-12"
        />
        <h1 className="text-xl font-semibold mb-4">Technologies :</h1>
        <div className="flex gap-2 flex-wrap mb-12">
          {data &&
            data?.tech.map((tech: any, index: number) => {
              const Icons = AllIcons[tech.icons];
              return (
                <Icons key={index} color={tech.color} className="w-6 h-6" />
              );
            })}
        </div>
      </div>
      {data?.github && (
        <>
          <h1 className="text-xl font-medium mb-6">How to start my code</h1>
          <div className="flex flex-col gap-10">
            {data?.github.map((tutor: any, index: number) =>
              tutor.code ? (
                <CopyCode
                  key={index}
                  title={`${index + 1}. ${tutor.title}`}
                  code={tutor.code}
                />
              ) : (
                <h1 key={index}>{tutor.title}</h1>
              )
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default DetailProjectView;
