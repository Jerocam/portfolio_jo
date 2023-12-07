import type { NextPage } from "next";
import { ContainerBlock } from "../components/ContainerBlock";
import { GridCards } from "../components/GridCards";
import { projects } from "../lib/details";
import { IconOpenLink } from "../components/Icons";

const Projects: NextPage = () => {
  return (
    <ContainerBlock>
      <GridCards data={projects} />
      <div className="flex justify-center">
        <a
          className="flex items-center space-x-1 text-neutral-900 dark:text-neutral-200 text-sm lg:text-base transition-all hover:text-sky-600 dark:hover:text-sky-400"
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
