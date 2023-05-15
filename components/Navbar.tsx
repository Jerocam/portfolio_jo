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
          "flex flex-row hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <navdata.icon className="text-2xl mr-2" />
        {navdata.title}
      </span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center space-x-4 bg-black">
      {navbars &&
        navbars.map((navitem) => (
          <NavItem key={navitem.id} navdata={navitem} />
        ))}
        <SwitchMode/>
    </nav>
  );
};
