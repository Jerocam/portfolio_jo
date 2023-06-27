import type { NextPage } from "next";
import { about, certificates, skills } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import {IconTaskDone} from "../components/Icons";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <p className="text-lg mt-2">{about()}</p>
      <div className="mt-8">
        <h2 className="text-xl">Certifications</h2>
        <div className="space-y-3 mt-3 pl-2">
          {certificates.map((item: any) => (
            <div key={item.id}>
              <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
                <IconTaskDone className="mr-2 text-lg"/>{item.certificate} - {item.place}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl">Technical Skills</h2>
        <div className="space-x-2 flex mt-3 pl-2">
          {skills.map((item: any, index: number) => (
            <div key={index}>
              <span className="inline-flex items-center rounded-xl bg-green-400/10 px-2 py-1 text-sm font-medium text-green-500 ring-1 ring-inset ring-green-400/20">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ContainerBlock>
  );
};

export default About;
