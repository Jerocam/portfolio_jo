import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { SwitchMode } from "./SwitchMode";

import { logo, navbars } from "../lib/details";

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
          "flex flex-row hover:text-gray-700 dark:hover:text-white transition-all"
        )}
      >
        <navdata.icon className="text-2xl mr-2" />
        {navdata.title}
      </span>
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="bg-gray-200 dark:bg-black sticky top-0 inset-x-0">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex">
          <Image src={logo} alt="logo jerocam" width={30} height={30} />
        </div>
        <div className="flex gap-x-12">
          {navbars &&
            navbars.map((navitem) => (
              <NavItem key={navitem.id} navdata={navitem} />
            ))}
        </div>
        <div className="flex justify-end">
          <SwitchMode />
        </div>
      </nav>
    </header>
  );
};
