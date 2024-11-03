"use client";

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

const url: string =
  "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcertificates%2Ffrondend%2Fdicoding-belajar-membuat-front-end-web-untuk-pemula.webp?alt=media&token=4d1827af-69d3-4352-b8d7-e28a425b72bf";

const datas = [
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
];

const CertificateView = () => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [modalImageLoading, setModalImageLoading] = useState(true);
  return (
    <>
      <BlurIn
        key={"up"}
        word="Certificate"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">I have certificates from several bootcamps.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas ? (
          datas.map((data, index: number) => (
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
                          src={data.url}
                          loading="lazy"
                          width={350}
                          height={200}
                          alt="certificate"
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
                        src={data.url}
                        width={700}
                        height={700}
                        alt="certificate"
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
          <h1>loading</h1>
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
