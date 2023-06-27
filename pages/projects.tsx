import type { NextPage } from "next";
import { ContainerBlock } from "../components/ContainerBlock";
import { GridCards } from "../components/GridCards";
import { projects } from "../lib/details";

const Projects: NextPage = () => {
  return (
    <ContainerBlock>
      <GridCards data={projects} />
    </ContainerBlock>
  );
};

export default Projects;
