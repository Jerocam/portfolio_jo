import type { NextPage } from "next";
import { about, certificates, skills, deliverables } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import { IconTaskDone, IconCheckBox } from "../components/Icons";
import DialogOpen from "../components/DialogOpen";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <div className="text-center sm:text-left text-sm lg:text-base xl:text-lg mt-2 text-neutral-900 dark:text-neutral-300">
        <p>{about()}</p>
        <h2 className="mt-5">Top Deliverables</h2>
        <div className="flex flex-wrap justify-center sm:justify-normal gap-4 mt-2">
          {deliverables.map((item: any, index: number) => (
            <div key={index}>
              <span className="inline-flex items-center rounded-md bg-neutral-400/10 px-2 py-1 text-neutral-600 dark:text-neutral-400 ring-1 ring-inset ring-neutral-400/20">
                <IconCheckBox className="mr-1 sm:text-lg" />
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row mt-14 xl:mt-16">
          <div className="basis-1/2">
            <h2>Degree / Certifications</h2>
            <div className="space-y-4 mt-4 pr-5">
              {certificates.map((item: any) => (
                <div key={item.id}>
                  <div className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs lg:text-sm xl:text-base text-yellow-600 dark:text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
                    <IconTaskDone className="mr-2 text-lg" />
                    {item.certificate}
                    <DialogOpen>
                      <h2 className="font-semibold text-base lg:text-lg mb-2">
                        {item.school}
                      </h2>
                      <div className="text-sm lg:text-base">
                        <h3>Website info: {item.href}</h3>
                        <h3>Location: {item.location}</h3>
                      </div>
                    </DialogOpen>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <h2>Technical Skills</h2>
            <div className="flex flex-wrap gap-2 lg:gap-3 mt-4">
              {skills.map((item: any, index: number) => (
                <div key={index}>
                  <span className="inline-flex items-center rounded-xl bg-green-400/10 px-2 py-1 text-xs lg:text-sm xl:text-base text-green-600 dark:text-green-500 ring-1 ring-inset ring-green-400/20">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default About;
