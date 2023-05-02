import JoLogo from "../public/jo_logo.png";
import JoSmLogo from "../public/jo_sm_logo.png";
import JeroAbout from "../public/jo_about.png";

export const name = "Jeronimo Jose Ocampos";
export const title = "Front End Web Developer";

// images
export const logo = JoLogo;
export const smLogo = JoSmLogo;
export const me = JeroAbout;

export const about = () => {
  return (
    <>
      Hola, my name is Jeronimo, a full-stack web developer who has excellent
      knowledge of various frameworks and tools for Web Development. I have a
      passion for coding, web design and graphic design, which makes me a
      highly-motivated and fast-learner when it comes to things Technology. I
      strive to build successful websites that are well organized, easy to use
      and fast to load. Currently, I am seeking an internship or a job that will
      challenge me to improve my skill sets with cutting-edge web development
      tools.
    </>
  );
};

export const infoLinks = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/Jerocam",
  },
  {
    id: 2,
    name: "Linkedln",
    href: "https://www.linkedin.com/in/jerocam-226",
  },
];

export const skills = [
  {
    id: "FE",
    ringColor: "ring-red-500",
    textColor: "text-red-500",
    bgColor: "bg-red-900/40",
    skillDetails: [
      {
        title: "HTML5",
        percentage: 85,
      },
      {
        title: "CSS3",
        percentage: 70,
      },
      {
        title: "CSS3",
        percentage: 70,
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
    bgColor: "bg-green-900/40",
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
