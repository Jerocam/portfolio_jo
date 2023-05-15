import classNames from "classnames";
import Image from "next/image";

type GridCardProps = {
  data: any;
};

export const GridCards: React.FC<GridCardProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-tr from-purple-800 via-violet-900 to-purple-800 rounded-lg shadow-lg">
      <div className="p-3">
        <div className="">
          <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
            {data.name}
          </h2>
          <p className="mt-1 text-base leading-8 text-gray-300">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <button className="mr-2 rounded-xl bg-white/5 py-1 px-4 ring-1 ring-inset ring-white/10 hover:bg-gray-200 hover:text-black transition-all duration-150">
              View Website
            </button>
            <button className="rounded-xl bg-white/5 py-1 px-4 ring-1 ring-inset ring-white/10 hover:bg-gray-200 hover:text-black transition-all duration-150">
              View Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
