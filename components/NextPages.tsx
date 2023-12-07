import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "./Icons";
import classNames from "classnames";

type NextPagesProps = {
  pathData: any;
};

export const NextPages: React.FC<NextPagesProps> = ({ pathData }) => {
  let nxt: string = "",
    prev: string = "";

  switch (pathData) {
    case "/":
      prev = "";
      nxt = "/experience";
      break;
    case "/experience":
      prev = "/";
      nxt = "/projects";
      break;
    case "/projects":
      prev = "/experience";
      nxt = "";
      break;
  }
  return (
    <div
      className={classNames(
        !prev ? "justify-end" : "justify-between",
        "flex mb-5 mt-5 sm:mt-0 sm:mb-10 w-full text-neutral-600 dark:text-neutral-300 text-sm md:text-lg lg:text-xl font-medium"
      )}
    >
      <Link href={prev} className={classNames(!prev ? "hidden" : "visible")}>
        <span className="flex items-center hover:text-neutral-900 dark:hover:text-white transition-all">
          <IconArrowLeft className="mr-2 text-2xl md:text-3xl lg:text-4xl" />
          Previous
        </span>
      </Link>
      <Link href={nxt} className={classNames(!nxt ? "hidden" : "visible")}>
        <span className="flex items-center hover:text-neutral-900 dark:hover:text-white transition-all">
          Next
          <IconArrowRight className="ml-2 text-2xl md:text-3xl lg:text-4xl" />
        </span>
      </Link>
    </div>
  );
};
