import classNames from "classnames";
import { Tabs } from "../components/Tabs";
import { projects } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import type { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <ContainerBlock>
      <div>
        <h1 className="text-3xl">Projects</h1>
        <Tabs tabdata={projects}/>
      </div>
    </ContainerBlock>
  );
};

export default Projects;
