import type { NextPage } from "next";
import { logo, name, title, infoLinks } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <ContainerBlock>
      <div className="flex justify-center items-center h-full">
        <div className="space-y-8">
          <div>
            <Image
              src={logo}
              alt={name}
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">{name}</h1>
            <h2 className="text-lg">{title}</h2>
          </div>
          <div className="flex flex-row gap-2">
            {infoLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  
                  <div className="ml-3">{item.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default Home;
