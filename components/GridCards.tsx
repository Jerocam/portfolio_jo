import Image from "next/image";
import { IconCode, IconWeb } from "./Icons";

type GridCardProps = {
  data: any;
};

export const GridCards: React.FC<GridCardProps> = ({ data }) => {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((item: any) => (
          <li
            key={item.id}
            className="relative h-52 col-span-1 rounded bg-gray-700 shadow-lg"
          >
            <div className="static flex justify-between w-full p-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-200">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-300 flex-wrap">
                  {item.description}
                </p>
              </div>
              <Image
                className="h-16 w-auto rounded ml-1"
                src={item.image}
                alt="img"
              />
            </div>
            <div className="flex items-center gap-1 flex-wrap static px-4">
              {item.tech.map((techItem: any, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-xl bg-green-400/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-400/20"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="-mt-px flex divide-x divide-gray-400 border-t border-gray-400">
                <div className="flex w-0 flex-1">
                  <a
                    href={item.scode}
                    target="_blank"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl border border-transparent py-3 text-sm font-semibold text-gray-200 hover:bg-gray-900 transition ease-in-out delay-100"
                  >
                    <IconCode className="text-xl" />
                    Source Code
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={item.link}
                    target="_blank"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br border border-transparent py-3 text-sm font-semibold text-gray-200 hover:bg-gray-900 transition ease-in-out delay-100"
                  >
                    <IconWeb className="text-xl" />
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
