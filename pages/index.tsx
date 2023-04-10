import type { NextPage } from "next";
import { ContainerBlock } from "../components/ContainerBlock";
import JoLogo from "../public/jo_logo.png";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <ContainerBlock>
      <div className="space-y-8">
        <div>
          <Image
            src={JoLogo}
            alt="jerocam logo picture"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl">Jeronimo Jose Ocampos</h1>
          <h2 className="text-lg">
            A full-stack web developer with a passion for coding
          </h2>
        </div>

        <div className="flex justify-between">
          <Link
            href="https://github.com/Jerocam"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jerocam-226"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </Link>
          <Link href="" target="_blank" rel="noreferrer">
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default Home;
