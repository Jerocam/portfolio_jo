import React, { forwardRef } from "react";
import { ContainerBlock } from "../components/ContainerBlock";
import classNames from "classnames";
import { IconOpenNew } from "../components/Icons";
import { timeline } from "../lib/details";
import PageTransition from "../components/PageTransition";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function Experience(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <ContainerBlock>
      <PageTransition ref={ref}>
        <div className="overflow-y-auto h-[40rem]">
          {timeline.map((item: any) => (
            <div
              key={item.id}
              className="relative pl-8 lg:pr-4 sm:pl-[12rem] py-4 xl:py-6 group"
            >
              <div className="font-medium text-base sm:text-lg 2xl:text-xl text-neutral-800 dark:text-neutral-200 mb-1 sm:mb-0">
                {item.target}
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-violet-400 sm:before:ml-[10.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-violet-900 after:border-2 after:box-content after:border-violet-400 after:rounded-full sm:after:ml-[10.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-[10px] lg:text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-violet-100 bg-violet-800 rounded-full">
                  {item.year}
                </time>
                <div className="text-sm lg:text-base text-neutral-700 dark:text-neutral-400">
                  {item.place}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm 2xl:text-base text-neutral-600 dark:text-neutral-300">
                  {item.content}
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(
                    !item.href ? "hidden" : "visible",
                    "flex items-center text-xs lg:text-sm 2xl:text-base text-sky-500 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all my-2 sm:mb-0"
                  )}
                  href={item.href}
                >
                  {item.href}
                  <IconOpenNew className="ml-1 text-base lg:text-lg" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((item: any, index: number) => (
                  <div key={index}>
                    <span className="inline-flex items-center rounded-xl bg-green-400/10 px-2 py-1 text-xs lg:text-sm font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-400/20">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageTransition>
    </ContainerBlock>
  );
}

export default forwardRef(Experience);
