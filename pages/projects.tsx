import React, { forwardRef } from "react";
import { ContainerBlock } from "../components/ContainerBlock";
import { GridCards } from "../components/GridCards";
import { projects } from "../lib/details";
import PageTransition from "../components/PageTransition";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function Projects(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <ContainerBlock>
      <PageTransition ref={ref}>
        <GridCards data={projects} />
      </PageTransition>
    </ContainerBlock>
  );
}

export default forwardRef(Projects);
