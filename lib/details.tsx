import {
  IconDeveloper,
  IconProject,
  IconExperience,
  IconGithubBox,
  IconLinkedin,
} from "../components/Icons";
import JoLogo from "../public/jo_logo.png";
import SBG from "../public/sbg.png";
import JoShop from "../public/jo_shop.png";
import JoProjects from "../public/jerocam_projects.png";
import JoPizza from "../public/jo_pizza.png";
import ETI from "../public/eti.png";

export const name = "Jeronimo Jose Ocampos";
export const title = "Web Developer";
export const subtitle = "I have been developing websites since 2018.";

// images
export const logo = JoLogo;

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
      I am web developer with excellent knowledge of various frameworks and
      tools for Web Development. I have a passion for coding, web design and
      graphic design, which makes me a highly-motivated and fast-learner when it
      comes to things Technology. I strive to build successful websites that are
      well organized, easy to use and fast to load. Currently, I am seeking a
      job that will challenge me to improve my skill sets with cutting-edge web
      development tools.
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
    href: "",
  },
  {
    id: 2,
    certificate: "Front End Web Developer I Certificate",
    href: "",
  },
  {
    id: 3,
    certificate: "Front End Web Developer II Certificate",
    href: "",
  },
  {
    id: 4,
    certificate: "Python programming I Certificate",
    href: "",
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

export const deliverables = [
  "Web Application",
  "Landing Page",
  "Website Redesign",
  "Responsive Design",
];

export const timeline = [
  {
    id: 1,
    target: "Full Stack Web Developer",
    year: "Aug 2021 - Sept 2023",
    content:
      "Developed and maintained websites for independent entities and online courses within the office of CBO such as Bilingual Evaluation, Testing, and Assessment Center and ASL Connect. Developed several syllabus websites based on innovations through the lens of American Sign Language and English bilingualism.",
    href: "https://www.gallaudetvctl.com/leadership-cadre",
    place: "CBO - Gallaudet University, Washington, DC",
    skills: [
      "Sveltekit",
      "Prisma",
      "Plasmic",
      "Next.js",
      "React Bricks",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Hubspot",
      "JavaScript",
      "Grid.js",
      "GitHub",
      "Vercel",
      "AWS",
      "Figma",
      "Google Calendar API",
    ],
  },
  {
    id: 2,
    target: "Volunteer Web Developer",
    year: "Nov 2020 - May 2021",
    content:
      "Created and maintained websites for nonprofits or community projects without financial compensation. Helped to improve, fix, and add codes for many projects through developforgood.org and volunteermatch.org",
    href: "",
    place: "Remote, United States",
    skills: ["HTML5", "Sass", "JavaScript", "PHP", "Bootstrap"],
  },
  {
    id: 3,
    target: "Mobile App Developer Internship",
    year: "May 2017 - Aug 2017",
    content:
      "Helped desk ticket response and resolution for the app CyberEyez. Implemented a customer support forum and improved error reporting by Flurry Analytics. Developed new/existing features and functions. Diagnosed and tested the app.",
    href: "https://cybertimez.com",
    place: "CyberTimez, Inc., Virginia, Crystal City",
    skills: ["Oracle DB", "Yahoo Analytics", "Android Studio"],
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
    tech: ["HTML5", "CSS3", "Photoshop", "JavaScript"],
  },
  {
    id: 4,
    title: "SBG Website",
    description: "Student Board Goverment of Gallaudet University",
    link: "https://romantic-blackwell-0723fa.netlify.app/",
    scode: "https://github.com/Jerocam/sbg-website/tree/master",
    image: SBG,
    tech: ["HTML5", "CSS3", "Saas", "jQuery", "JavaScript", "Photoshop"],
  },
  {
    id: 2,
    title: "Jerocam React Web App",
    description: "Multiple Restful API proyects",
    link: "https://jerocam.github.io/jerocamReact/",
    scode: "https://github.com/Jerocam/jerocamReact",
    image: JoProjects,
    tech: ["React", "Bootstrap", "Tailwind CSS", "Photoshop", "RapidAPI"],
  },
  {
    id: 5,
    title: "ETI Website",
    description: "Redesgined the website of Employee Training Institute",
    link: "https://jerocam.github.io/eti-jerocam/",
    scode: "https://github.com/Jerocam/eti-jerocam",
    image: ETI,
    tech: ["HTML5", "CSS3", "JavaScript", "MDBootstrap", "Photoshop"],
  },
  {
    id: 3,
    title: "Jerocam Web Shop",
    description: "First E-Commerce website",
    link: "https://snipcart2master.gatsbyjs.io/",
    scode: "https://github.com/Jerocam/snipcart2/tree/master",
    image: JoShop,
    tech: ["Gatsby", "Snipcart", "CSS", "JavaScript", "Photoshop"],
  },
  {
    id: 6,
    title: "SBG Website",
    description: "Student Board Goverment of Gallaudet University",
    link: "https://romantic-blackwell-0723fa.netlify.app/",
    scode: "https://github.com/Jerocam/sbg-website/tree/master",
    image: SBG,
    tech: ["HTML5", "CSS3", "Saas", "jQuery"],
  },
  {
    id: 7,
    title: "SBG Website",
    description: "Student Board Goverment of Gallaudet University",
    link: "https://romantic-blackwell-0723fa.netlify.app/",
    scode: "https://github.com/Jerocam/sbg-website/tree/master",
    image: SBG,
    tech: ["HTML5", "CSS3", "Saas", "jQuery"],
  },
  {
    id: 8,
    title: "SBG Website",
    description: "Student Board Goverment of Gallaudet University",
    link: "https://romantic-blackwell-0723fa.netlify.app/",
    scode: "https://github.com/Jerocam/sbg-website/tree/master",
    image: SBG,
    tech: ["HTML5", "CSS3", "Saas", "jQuery"],
  },
];
