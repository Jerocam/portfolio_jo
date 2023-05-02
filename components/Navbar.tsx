import { Icons } from "./Icons";
import { smLogo } from "../lib/details";
import {SwitchMode} from "./SwitchMode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import classnames from "classnames";

type NavbarProps = {
  href: string;
  icon: string;
};

const NavItem: React.FC<NavbarProps> = ({ href, icon }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <span
        className={classnames(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-100"
            : "font-normal text-gray-500 dark:text-gray-400",
          "hidden md:inline-block hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-2xl"
        )}
      >
        {Icons(icon)}
      </span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-200 dark:bg-gray-950">
      <div className="h-1/6 flex items-start">
        <Image
          src={smLogo}
          alt="jerocam small logo picture"
          width={40}
          height={40}
        />
      </div>
      <div className="h-4/6 flex items-center">
        <nav className="flex flex-col space-y-8 items-center">
          <NavItem href="/" icon="Home" />
          <NavItem href="/about" icon="About" />
          <NavItem href="/experience" icon="About" />
          <NavItem href="/projects" icon="Projects" />
          <NavItem href="/contact" icon="Contact" />
        </nav>
      </div>
      <div className="h-1/6 flex items-end">
        <SwitchMode />
      </div>
    </div>
  );
};

