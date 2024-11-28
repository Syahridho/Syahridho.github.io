/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FlickeringGrid from "@/components/ui/flickering-grid";
import WordPullUp from "@/components/ui/word-pull-up";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/ui/shiny-button";
import BlurFade from "@/components/ui/blur-fade";
import instance from "@/lib/axios/instance";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import * as FaIcons from "react-icons/fa";

interface SocialMedia {
  id: string;
  href: string;
  icons: React.ElementType;
  name: string;
}

const fetchData = async () => {
  const { data } = await instance.get("/api/socialmedia");
  return data.data;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["sosialmedia"],
    queryFn: fetchData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface NavItem {
  title: string;
  href: string;
}

const navs: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Certificate",
    href: "/certificate",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar: NextPage = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>(router.pathname);
  const [loadingImage, setLoadingImage] = useState(true);
  const [modalImageLoading, setModalImageLoading] = useState(true);

  const { data } = useQuery<SocialMedia[]>({
    queryKey: ["sosialmedia"],
    queryFn: fetchData,
  });

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  const handleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed top-0  left-0 w-full z-40 bg-white shadow-sm md:sticky md:h-screen md:w-96 md:pt-16 dark:bg-gray-900 dark:shadow-gray-700">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center md:justify-center md:h-auto md:mb-4 py-2.5 md:py-0 rounded-xl relative card-profile md:dark:bg-slate-800 md:before:shadow-rounded-light md:before:dark:!shadow-rounded-dark md:after:!shadow-rounded-light md:after:dark:!shadow-rounded-dark">
          <h1 className="md:hidden font-medium">Syahridho Arjuna Syahputra</h1>
          <div className="relative py-4 hidden md:flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-sm">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="p-0 h-auto w-auto rounded-full z-50 mb-4 "
                >
                  <Card className="rounded-full">
                    <div className="relative">
                      {loadingImage && (
                        <Skeleton className="absolute inset-0 w-full h-full rounded-full" />
                      )}
                      <Image
                        src={
                          "https://syahridho.github.io/assets/profile-Sg5TBd7P.jpg"
                        }
                        loading="lazy"
                        width={100}
                        height={100}
                        alt="certificate"
                        className={cn(
                          "rounded-full transition-opacity duration-300 aspect-[1/1]",
                          loadingImage ? "opacity-0" : "opacity-100"
                        )}
                        onLoad={() => setLoadingImage(false)}
                      />
                    </div>
                  </Card>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-auto">
                <DialogHeader>
                  <div>
                    {modalImageLoading && (
                      <Skeleton className="absolute inset-0 w-full " />
                    )}
                    <Image
                      src={
                        "https://media.licdn.com/dms/image/v2/D5603AQGWo4CLtxQywA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728105177466?e=1735776000&v=beta&t=_YPuOCPFvap6RxXjkMpiCP0mYiXFX6V2n0qkM9UHbMg"
                      }
                      width={300}
                      height={300}
                      alt="certificate"
                      className={cn(
                        "object-contain",
                        modalImageLoading ? "opacity-0" : "opacity-100"
                      )}
                      onLoad={() => setModalImageLoading(false)}
                    />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <WordPullUp
              className="text-slate-800 dark:text-white text-base font-base tracking-base"
              words="Syahridho Arjuna Syahputra"
            />
            <FlickeringGrid
              className="z-0 absolute inset-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={85}
              width={800}
            />
          </div>
          <button
            id="hamburger"
            aria-label="hamburger"
            className="p-2 hover:bg-slate-100 rounded md:hidden dark:hover:bg-slate-700"
            onClick={handleHamburger}
          >
            {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          <div className={`${!toggle && "hidden"} md:block h-screen md:h-auto`}>
            <nav className="relative flex flex-col py-4 border-y border-slate-200">
              <motion.div
                className="absolute left-0 bg-blue-900/10 border-l-2 border-gray-900/50 dark:bg-blue-500/20"
                layoutId="activeBackground"
                initial={false}
                animate={{
                  y: navs.findIndex((nav) => nav.href === activePath) * 42,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                style={{
                  width: "100%",
                  height: "40px",
                  zIndex: 0,
                }}
              />

              {navs.map((nav, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  // whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={nav.href}
                    onClick={(e) => {
                      setToggle(false);
                      e.preventDefault();
                      router.push(nav.href);
                    }}
                    className={`block font-semibold px-4 py-2 mb-[2px] relative z-10 transition-colors tracking-wide
                      ${
                        activePath === nav.href
                          ? ""
                          : "text-gray-600  hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      }`}
                  >
                    {nav.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="py-8 md:py-6">
              <h1 className="text-center text-slate-500 dark:text-white">
                Social Media
              </h1>
              <ul className="flex justify-center items-center flex-wrap gap-2 py-4">
                {data &&
                  data.map((media: any) => {
                    const Icon = (FaIcons as any)[media.icons];
                    return (
                      <BlurFade delay={0.25} key={media.id}>
                        <li>
                          <ShinyButton
                            className="p-3 rounded-full"
                            onClick={() =>
                              window.open(`${media.href}`, "_blank")
                            }
                            aria-label={`Open ${media.name}`}
                          >
                            <Icon />
                          </ShinyButton>
                        </li>
                      </BlurFade>
                    );
                  })}
              </ul>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
