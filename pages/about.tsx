import { ContainerBlock } from "../components/ContainerBlock";
import type { NextPage } from "next";
import Image from "next/image";
import JeroAbout from "../public/jo_about.png";

const About: NextPage = () => {
  return (
    <ContainerBlock>
      <div className="container">
        <h1>About</h1>
        <div className="flex flex-1 flex-row">
          <div className="">
            <Image src={JeroAbout} alt="jero about picture" className="rounded-sm" />
          </div>
          <div className="">
            <p className="pl-5 text-lg">
              My name is Jeronimo Jose Ocampos Escobar, a full-stack web
              developer who has excellent knowledge of various frameworks and
              tools for Web Development. I have a passion for coding, web design
              and graphic design, which makes me a highly-motivated and
              fast-learner when it comes to things Technology. I strive to build
              successful websites that are well organized, easy to use and fast
              to load. Currently, I am seeking an internship or a job that will
              challenge me to improve my skill sets with cutting-edge web
              development tools.
            </p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default About;
