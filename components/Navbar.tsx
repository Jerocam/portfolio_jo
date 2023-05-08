import { smLogo, navbars } from "../lib/details";
import { SwitchMode } from "./SwitchMode";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import classnames from "classnames";

type NavbarProps = {
  navdata: any;
};

const NavItem: React.FC<NavbarProps> = ({ navdata }) => {
  const router = useRouter();
  const isActive = router.asPath === navdata.href;

  return (
    <Link href={navdata.href}>
      <span
        className={classnames(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-100"
            : "font-normal text-gray-500 dark:text-gray-400",
          "hidden md:inline-block hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        {navdata.title}
        <navdata.icon className="text-2xl"/>
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
          alt="sm logo"
          className="rounded-sm w-12 h-12"
          placeholder="blur"
          width={0}
          height={0}
          priority
        />
      </div>
      <div className="h-4/6 flex items-center">
        <nav className="flex flex-col space-y-8 items-center">
          {navbars.map((navitem)=>(
            <NavItem key={navitem.id} navdata={navitem} />
          ))}
        </nav>
      </div>
      <div className="h-1/6 flex items-end">
        <SwitchMode />
      </div>
    </div>
  );
};
