import Image from "next/image";
import { IconCode, IconWeb } from "./Icons";

type GridCardProps = {
  data: any;
};

export const GridCards: React.FC<GridCardProps> = ({ data }) => {
  return (
    <div className="overflow-y-auto max-h-[42rem]">
      <ul
        role="list"
        className="grid grid-cols-1 gap-4 lg:gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {data.map((item: any) => (
          <li
            key={item.id}
            className="relative h-52 col-span-1 rounded bg-neutral-300 dark:bg-neutral-700 shadow-lg p-2"
          >
            <div className="static flex w-full">
              <Image
                className="h-28 md:h-16 lg:h-20 w-auto rounded mr-1"
                src={item.image}
                alt="img"
              />
              <div className="flex items-center">
                <div className="ml-2 md:ml-0">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-neutral-800 dark:text-neutral-300 flex-wrap">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap static pt-2 justify-center">
              {item.tech.map((techItem: any, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded bg-green-400/50 dark:bg-green-400/10 px-2 py-1 text-xs font-medium text-green-800 dark:text-green-400 ring-1 ring-inset ring-green-400/20"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="-mt-px flex divide-x divide-neutral-700 dark:divide-neutral-400 border-t border-neutral-700 dark:border-neutral-400">
                <div className="flex w-0 flex-1">
                  <a
                    href={item.scode}
                    target="_blank"
                    rel="noreferrer"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-1 lg:gap-x-3 rounded-bl border border-transparent py-2 lg:py-3 text-xs lg:text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:bg-sky-800 hover:text-neutral-200 transition ease-in-out delay-100"
                  >
                    <IconCode className="text-lg lg:text-xl" />
                    Source Code
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-1 lg:gap-x-3 rounded-br border border-transparent py-2 lg:py-3 text-xs lg:text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:bg-sky-800 hover:text-neutral-200 transition ease-in-out delay-100"
                  >
                    <IconWeb className="text-lg lg:text-xl" />
                    Website
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
