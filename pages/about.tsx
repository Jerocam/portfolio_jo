import type { NextPage } from "next";
import { name, about, me, skills, certificates } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import { ListCards } from "../components/ListCards";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <div>
        <h1 className="text-3xl">About Me</h1>
        <div className="flex gap-x-6">
          <div className="w-2/5">
            <p className="text-xl text-right">{about()}</p>
          </div>
          <div className="w-1/5">
            <Image
              alt={name}
              className="rounded-sm"
              src={me}
              placeholder="blur"
              width={0}
              height={0}
              priority
            />
          </div>
          <div className="w-2/5">
            <h2>My certificates</h2>
            <div className="flex flex-col">
              {certificates.map((item: any) => (
                <div key={item.id}>
                  <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
                    {item.certificate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2">My Technical Skills</h2>
          <div className="bg-gray-800 ring-1 ring-gray-700 rounded-md shadow-xl p-4">
            <ListCards data={skills} />
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default About;
