import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router"; // Import useRouter
import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
  const router = useRouter(); // Use Next.js router
  const [toggle, setToggle] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>(router.pathname); // Set initial path based on router.pathname

  useEffect(() => {
    // Update activePath when the route changes
    setActivePath(router.pathname);
  }, [router.pathname]); // Listen to route changes

  const handleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-sm md:sticky md:h-screen md:w-96 md:pt-16 dark:bg-gray-900 dark:shadow-gray-700">
      <div className="container mx-auto px-4 relative">
        <div className="h-14 flex justify-between items-center md:justify-center md:h-auto md:mb-4 md:py-4 md:bg-slate-50 rounded-xl relative card-profile md:dark:bg-slate-800 md:before:shadow-rounded-light md:before:dark:!shadow-rounded-dark md:after:!shadow-rounded-light md:after:dark:!shadow-rounded-dark">
          <div className="flex items-center gap-2 md:flex-col">
            <h1 className="font-medium text-center">
              Syahridho Arjuna Syahputra
            </h1>
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
            <nav className="relative flex flex-col gap-1 py-4 border-y border-slate-200">
              {/* Animated background block */}
              <motion.div
                className="absolute left-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-md"
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
                  height: "38px",
                  zIndex: 0,
                }}
              />

              {/* Nav Items */}
              {navs.map((nav, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={nav.href}
                    className={`block px-4 py-2 relative z-10 rounded-md transition-colors
                      ${
                        activePath === nav.href
                          ? "text-blue-600 font-medium dark:text-blue-400"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
