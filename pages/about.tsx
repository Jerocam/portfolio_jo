import { ContainerBlock } from "../components/ContainerBlock";
import { ListCards } from "../components/ListCards";
import type { NextPage } from "next";
import Image from "next/image";
import JeroAbout from "../public/jo_about.png";

const About: NextPage = () => {
  const skills = [
    {
      id: "FE",
      ringColor: "ring-red-500",
      textColor: "text-red-500",
      skillDetails: [
        {
          title: "HTML5",
          percentage: 85,
        },
        {
          title: "CSS3",
          percentage: 70,
        },
      ],
    },
    {
      id: "BE",
      ringColor: "ring-green-500",
      textColor: "text-green-500",
      skillDetails: [
        {
          title: "PHP",
          percentage: 25,
        },
        {
          title: "SQL",
          percentage: 30,
        },
      ],
    },
  ];
  return (
    <ContainerBlock>
      <div>
        <h1 className="text-2xl">About</h1>
        <p className="text-lg">
          My name is Jeronimo Jose Ocampos Escobar, a full-stack web developer
          who has excellent knowledge of various frameworks and tools for Web
          Development. I have a passion for coding, web design and graphic
          design, which makes me a highly-motivated and fast-learner when it
          comes to things Technology. I strive to build successful websites that
          are well organized, easy to use and fast to load. Currently, I am
          seeking an internship or a job that will challenge me to improve my
          skill sets with cutting-edge web development tools.
        </p>
        <ListCards data={skills} />
      </div>
    </ContainerBlock>
  );
};

export default About;
