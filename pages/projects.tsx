import type { NextPage } from "next";
import { ContainerBlock } from "../components/ContainerBlock";
import { GridCards } from "../components/GridCards";
import { projects } from "../lib/details";
import { IconOpenLink } from "../components/Icons";

const Projects: NextPage = () => {
  return (
    <ContainerBlock>
      <GridCards data={projects} />
      <div className="flex justify-center mt-6">
        <a
          className="flex items-center space-x-1 text-gray-200 text-base transition-all ease-in-out hover:text-lg duration-300"
          target="_blank"
          href="https://github.com/Jerocam?tab=repositories"
        >
          <span>Click to see more projects</span>
          <IconOpenLink />
        </a>
      </div>
    </ContainerBlock>
  );
};

export default Projects;
