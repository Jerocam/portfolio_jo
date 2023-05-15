import type { NextPage } from "next";
import { name, about, me, certificates, infoLinks } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <p className="text-lg">{about()}</p>
      <div className="mt-4">
        <h3>Certifications</h3>
        {certificates.map((item: any) => (
          <div key={item.id}>
            <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">
              {item.certificate}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h3>Technical Skills</h3>
        <div>react etc</div>
      </div>
    </ContainerBlock>
  );
};

export default About;
