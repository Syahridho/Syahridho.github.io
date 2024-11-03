// pages/_app.tsx
import ContainerLayout from "@/components/layout/ContainerLayout";
import _404 from "@/pages/404";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// Definisikan valid paths sebagai Set untuk pencarian yang lebih cepat
const validPaths = new Set([
  "/",
  "/project",
  "/certificate",
  "/contact",
  "/about",
]);

// Regex patterns dikompilasi di luar component untuk performa
const projectPattern = /^\/project\/[^/]+$/;
const certificatePattern = /^\/certificate\/all$/;

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  // Fungsi validasi yang lebih efisien
  const isValidPath =
    validPaths.has(pathname) ||
    projectPattern.test(pathname) ||
    certificatePattern.test(pathname);

  // Render 404 langsung jika path tidak valid
  if (!isValidPath) {
    return (
      <div className={roboto.className}>
        <_404 />
      </div>
    );
  }

  // Check container dengan cara yang lebih sederhana
  const needsContainer =
    pathname !== "/project/[id]" && pathname !== "/certificate/all";

  return (
    <div className={roboto.className}>
      {needsContainer ? (
        <ContainerLayout>
          <Component {...pageProps} />
        </ContainerLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
