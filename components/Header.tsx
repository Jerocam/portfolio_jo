import { useRouter } from "next/router";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { Disclosure } from "@headlessui/react";
import { SwitchMode } from "./SwitchMode";
import { IconClose, IconMenu } from "./Icons";
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
            ? "font-semibold text-neutral-800 dark:text-neutral-100"
            : "font-normal text-neutral-700 dark:text-neutral-300",
          "flex flex-row items-center text-sm md:text-base xl:text-lg hover:text-neutral-900 dark:hover:text-white transition-all"
        )}
      >
        <navdata.icon className="text-xl md:text-2xl mr-2" />
        {navdata.title}
      </span>
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="bg-neutral-300 dark:bg-neutral-900">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Image src={logo} alt="logo jerocam" width={30} height={30} />
                </div>
                <div className="hidden sm:flex items-center gap-x-6 lg:gap-x-12">
                  {navbars &&
                    navbars.map((navitem) => (
                      <NavItem key={navitem.id} navdata={navitem} />
                    ))}
                  <SwitchMode />
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IconClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <IconMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navbars &&
                  navbars.map((navitem) => (
                    <Disclosure.Button
                      as="a"
                      key={navitem.id}
                      href={navitem.href}
                      className="block bg-neutral-200 dark:bg-neutral-900 py-2 pl-3 pr-4 text-base font-semibold text-neutral-900 dark:text-white"
                    >
                      {navitem.title}
                    </Disclosure.Button>
                  ))}
              </div>
              <div className="pl-2 pb-2">
                <SwitchMode />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};
