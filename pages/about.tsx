import type { NextPage } from "next";
import { name, about, me, skills } from "../lib/details";
import { ContainerBlock } from "../components/ContainerBlock";
import { ListCards } from "../components/ListCards";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <div>
        <h1 className="text-2xl">About</h1>
        <p className="text-lg mx-2 my-4">{about()}
        {/* <Image
          alt={name}
          className="rounded-sm grayscale"
          src={me}
          placeholder="blur"
          width={100}
          priority
        /> */}
        </p>
        <ListCards data={skills} />
      </div>
    </ContainerBlock>
  );
};

export default About;
