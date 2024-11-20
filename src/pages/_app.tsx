import ContainerLayout from "@/components/layout/ContainerLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import _404 from "@/pages/404";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const validPaths = new Set([
  "/",
  "/project",
  "/certificate",
  "/contact",
  "/about",
]);

const projectPattern = /^\/project\/[^/]+$/;
const certificatePattern = /^\/certificate\/all$/;

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  const isValidPath =
    validPaths.has(pathname) ||
    projectPattern.test(pathname) ||
    certificatePattern.test(pathname);

  if (!isValidPath) {
    return (
      <div className={roboto.className}>
        <_404 />
      </div>
    );
  }

  const needsContainer =
    pathname !== "/project/[id]" && pathname !== "/certificate/all";

  return (
    <div className={roboto.className}>
      {needsContainer ? (
        <QueryClientProvider client={queryClient}>
          <ContainerLayout>
            <Component {...pageProps} />
          </ContainerLayout>
        </QueryClientProvider>
      ) : (
        <Component {...pageProps} />
      )}
      <Toaster />
    </div>
  );
}
