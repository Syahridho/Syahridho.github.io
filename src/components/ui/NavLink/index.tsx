import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  title: string;
  href: string;
};

const NavLink = (props: NavLinkProps) => {
  const { title, href } = props;
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`block py-1.5 px-2 rounded-r tracking-wide font-medium text-gray-400 border-2 border-transparent transition duration-500 hover:text-slate-700 ${
        router.pathname === href
          ? "!text-gray-800 border-gray-950/[.1] bg-gray-950/[.05] hover:bg-gray-950/[.05] border-2 border-s-slate-800"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
