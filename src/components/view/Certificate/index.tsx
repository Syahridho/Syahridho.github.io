import BlurIn from "@/components/ui/blur-in";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import BlurFade from "@/components/ui/blur-fade";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import instance from "@/lib/axios/instance";

const fetchData = async () => {
  const { data } = await instance.get("/api/certificate");
  return data;
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

const CertificateView = () => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [modalImageLoading, setModalImageLoading] = useState(true);

  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: fetchData,
  });

  return (
    <>
      <BlurIn
        key={"up"}
        word="Certificate"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">I have certificates from several bootcamps.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data ? (
          data?.data.map((certificate: any, index: number) => (
            <BlurFade key={index} delay={0.13 * index}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="p-0 h-auto w-auto">
                    <Card>
                      <div className="aspect-[16/11.5] relative">
                        {loadingImage && (
                          <Skeleton className="absolute inset-0 w-full h-full" />
                        )}
                        <Image
                          src={certificate.image}
                          loading="lazy"
                          width={350}
                          height={200}
                          alt={certificate.name}
                          className={cn(
                            "object-cover w-full h-full transition-opacity duration-300",
                            loadingImage ? "opacity-0" : "opacity-100"
                          )}
                          onLoad={() => setLoadingImage(false)}
                        />
                      </div>
                    </Card>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="relative">
                      {modalImageLoading && (
                        <Skeleton className="absolute inset-0 w-full aspect-[1/1]" />
                      )}
                      <Image
                        src={certificate.image}
                        width={700}
                        height={700}
                        alt={certificate.name}
                        className={cn(
                          "w-full object-contain",
                          modalImageLoading ? "opacity-0" : "opacity-100"
                        )}
                        onLoad={() => setModalImageLoading(false)}
                      />
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </BlurFade>
          ))
        ) : (
          <div>
            <Skeleton className="w-[250px] h-[250px]" />
          </div>
        )}
      </div>
      <div className="z-10 flex my-8 items-center justify-center">
        <Link
          href={"/certificate/all"}
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ See All</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </Link>
      </div>
    </>
  );
};

export default CertificateView;
