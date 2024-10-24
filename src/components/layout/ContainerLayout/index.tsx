import Footer from "@/components/container/Footer";
import Navbar from "@/components/container/Navbar";
import { ReactNode } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className="container mx-auto max-w-[1100px] md:flex relative dark:text-white dark:bg-gray-900">
      <Navbar />
      <div className="w-full flex flex-col overflow-hidden min-h-[110vh] px-6 py-4 mt-14 md:pt-16 md:mt-0">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default ContainerLayout;
