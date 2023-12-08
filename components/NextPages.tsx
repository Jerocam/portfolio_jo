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
        "flex w-full text-neutral-600 dark:text-neutral-300 text-sm md:text-base xl:text-xl font-medium mt-10 mb-2"
      )}
    >
      <Link href={prev} className={classNames(!prev ? "hidden" : "visible")}>
        <span className="flex items-center hover:text-neutral-900 dark:hover:text-white transition-all">
          <IconArrowLeft className="mr-2 text-2xl lg:text-3xl xl:text-4xl" />
          Previous
        </span>
      </Link>
      <Link href={nxt} className={classNames(!nxt ? "hidden" : "visible")}>
        <span className="flex items-center hover:text-neutral-900 dark:hover:text-white transition-all">
          Next
          <IconArrowRight className="ml-2 text-2xl lg:text-3xl xl:text-4xl" />
        </span>
      </Link>
    </div>
  );
};
