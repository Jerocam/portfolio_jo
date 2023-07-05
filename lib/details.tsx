import {
  IconDeveloper,
  IconProject,
  IconExperience,
  IconDegree,
  IconGithubBox,
  IconLinkedin,
} from "../components/Icons";
import JoLogo from "../public/jo_logo.png";
import JoSmLogo from "../public/jo_sm_logo.png";
import JeroAbout from "../public/jo_about.png";
import SBG from "../public/sbg.png";
import JoShop from "../public/jo_shop.png";
import JoProjects from "../public/jerocam_projects.png";
import JoPizza from "../public/jo_pizza.png";

export const name = "Jeronimo Jose Ocampos";
export const title = "Web Developer";

// images
export const logo = JoLogo;
export const smLogo = JoSmLogo;
export const me = JeroAbout;

export const navbars = [
  {
    id: 1,
    title: "About",
    href: "/",
    icon: IconDeveloper,
  },
  {
    id: 2,
    title: "Experience",
    href: "/experience",
    icon: IconExperience,
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
    icon: IconProject,
  },
];

export const contact = {
  location: "Washington, DC",
  phone: "+1 (619) 885-3285",
  email: "ocamposjero@gmail.com",
};

export const about = () => {
  return (
    <>
      I have been developing websites since 2018. A web developer who has
      excellent knowledge of various frameworks and tools for Web Development. I
      have a passion for coding, web design and graphic design, which makes me a
      highly-motivated and fast-learner when it comes to things Technology. I
      strive to build successful websites that are well organized, easy to use
      and fast to load. Currently, I am seeking a job that will challenge me to
      improve my skill sets with cutting-edge web development tools.
    </>
  );
};

export const infoLinks = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/Jerocam",
    icon: IconGithubBox,
  },
  {
    id: 2,
    name: "Linkedln",
    href: "https://www.linkedin.com/in/jerocam-226",
    icon: IconLinkedin,
  },
];

export const certificates = [
  {
    id: 1,
    certificate: "Bachelor's degree in Information Technology",
    place: "Gallaudet University",
  },
  {
    id: 2,
    certificate: "Front End Web Developer I",
    place: "San Diego Community College",
  },
  {
    id: 3,
    certificate: "Front End Web Developer II",
    place: "San Diego Community College",
  },
  {
    id: 4,
    certificate: "Python programming I",
    place: "San Diego Community College",
  },
];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Sveltekit",
  "Prisma",
  "CSS3",
  "Sass",
  "HTML5",
  "MongoDB",
  "Contentful",
  "HubSpot",
  "React Bricks",
  "Plasmic",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
];

export const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    year: "2017",
    icon: IconDegree,
  },
  {
    id: 2,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    year: "2016",
    icon: IconDegree,
  },
];

export const projects = [
  {
    id: 1,
    title: "Jerocam Pizza",
    description: "Final project of my school in 2020",
    link: "https://jerocam.github.io/pizza-jerocam/",
    scode: "https://github.com/Jerocam/pizza-jerocam",
    image: JoPizza,
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    title: "Jerocam React Web App",
    description: "Multiple Restful API proyects",
    link: "https://jerocam.github.io/jerocamReact/",
    scode: "https://github.com/Jerocam/jerocamReact",
    image: JoProjects,
    tech: [
      "React",
      "Bootstrap",
      "Tailwind CSS",
      "RapidAPI",
      "JavaScript"
    ],
  },
  {
    id: 3,
    title: "First E-Commerce website",
    description: "Jerocam Shop",
    link: "https://snipcart2master.gatsbyjs.io/",
    scode: "https://github.com/Jerocam/snipcart2/tree/master",
    image: JoShop,
    tech: ["Gatsby", "Snipcart", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "SBG Website",
    description: "Student Board Goverment of Gallaudet University",
    link: "https://romantic-blackwell-0723fa.netlify.app/",
    scode: "https://github.com/Jerocam/sbg-website/tree/master",
    image: SBG,
    tech: ["HTML5", "CSS3", "Saas", "jQuery"],
  },
];
