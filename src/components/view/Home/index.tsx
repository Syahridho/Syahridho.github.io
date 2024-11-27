import { home } from "@/utils/resume";
import { cn } from "@/lib/utils";
import CareerCard from "@/components/container/CareerCard";
import HeaderHome from "@/components/container/HeaderHome";
import GitHubCalendar from "react-github-calendar";
import DotPattern from "@/components/ui/dot-pattern";
import GridPattern from "@/components/ui/grid-pattern";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MarqueeTech } from "@/components/container/Marquee";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoSchoolOutline } from "react-icons/io5";
import { DiGithubBadge } from "react-icons/di";
import BlurFade from "@/components/ui/blur-fade";
import instance from "@/lib/axios/instance";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const { data } = await instance.get("/api/home");
  return data.data;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ["home"], queryFn: fetchData });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const HomeView = () => {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: fetchData,
  });

  console.log(data);

  return (
    <>
      <div className="flex flex-col md:justify-between md:items-center md:flex-row">
        <BlurIn
          word={`Hi, I'm ${home.name}`}
          className="text-4xl font-bold text-black dark:text-white"
        />
        <RainbowButton
          className="hidden md:block text-nowrap"
          onClick={() => window.open(home.cv, "_blank")}
          rel="noopener noreferrer"
        >
          Download CV
        </RainbowButton>
      </div>

      <div className="my-4">
        <ol className="list-disc list-inside flex flex-col gap-1 text-slate-700 md:flex-row md:gap-4">
          <li>{home.role}</li>
          <li>{home.location}</li>
        </ol>
      </div>
      <div>
        <p className="text-slate-700">{home.description}</p>
      </div>

      <HeaderHome
        title={"Skils"}
        subTitle={"My Coding Skills"}
        icon={LiaLaptopCodeSolid}
      >
        <MarqueeTech data={home.tech} />
      </HeaderHome>

      <HeaderHome
        title={"Contribution"}
        subTitle={"My Contribution in github"}
        icon={DiGithubBadge}
      >
        <BlurFade inView>
          <div className="w-full block my-6">
            <GitHubCalendar
              username="syahridho"
              colorScheme="light"
              blockSize={10.5}
              style={{
                overflow: "hidden",
                maxWidth: "100%",
              }}
            />
          </div>
        </BlurFade>
      </HeaderHome>

      <HeaderHome
        title={"Career"}
        subTitle={"My Career"}
        icon={IoSchoolOutline}
      >
        <div className="divide-y divide-dashed my-4">
          {data ? (
            [...data?.career]
              .reverse()
              .map((item: any, index: any) => (
                <CareerCard key={index} career={item} />
              ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </HeaderHome>

      <GridPattern
        width={20}
        height={16}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50"
        )}
      />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_right,white,transparent)]"
        )}
      />
    </>
  );
};

export default HomeView;
