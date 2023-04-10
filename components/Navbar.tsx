import { IconDeveloper, IconHome, IconContact, IconProject } from "./Icons";
import SwitchMode from "./SwitchMode";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

type NavbarProps = {
  href: string;
  icon: string;
};

const NavItem: React.FC<NavbarProps> = ({ href, icon }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const Icons = (switchIcon: string) => {
    switch (switchIcon) {
      case "Home":
        return <IconHome />;
      case "About":
        return <IconDeveloper />;
      case "Experience":
        return <IconDeveloper />;
      case "Projects":
        return <IconProject />;
      case "Contact":
        return <IconContact />;
    }
  };

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

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-200 dark:bg-gray-950">
      <div className="h-5/6 flex items-center">
        <nav className="flex flex-1 flex-col space-y-8 items-center">
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

export default Navbar;
