import { IconHome, IconDeveloper, IconProject, IconExperience, IconContact, IconDegree } from "../components/Icons";
import JoLogo from "../public/jo_logo.png";
import JoSmLogo from "../public/jo_sm_logo.png";
import JeroAbout from "../public/jo_about.png";

export const name = "Jeronimo Jose Ocampos";
export const title = "Front End Web Developer";

// images
export const logo = JoLogo;
export const smLogo = JoSmLogo;
export const me = JeroAbout;

export const navbars = [
  {
    id: 1,
    title:'Home',
    href: '/',
    icon: IconHome
  },
  {
    id: 2,
    title:'About',
    href: '/about',
    icon: IconDeveloper
  },
  {
    id: 3,
    title:'Experience',
    href: '/experience',
    icon: IconExperience
  },
  {
    id: 4,
    title:'Projects',
    href: '/projects',
    icon: IconProject
  },
  {
    id: 5,
    title:'Contact',
    href: '/contact',
    icon: IconContact
  }
]

export const about = () => {
  return (
    <>
      My name is Jeronimo, a full-stack web developer who has excellent
      knowledge of various frameworks and tools for Web Development. I have a
      passion for coding, web design and graphic design, which makes me a
      highly-motivated and fast-learner when it comes to things Technology. I
      strive to build successful websites that are well organized, easy to use
      and fast to load. Currently, I am seeking a job that will
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

export const certificates = [
  {
    id:1,
    certificate:"Bachelor's degree in Information Technology",
    place:"Gallaudet University"
  },
  {
    id:2,
    certificate:"Front End Web Developer I",
    place:"San Diego College"
  },
  {
    id:3,
    certificate:"Front End Web Developer II",
    place:"San Diego College"
  },
  {
    id:4,
    certificate:"Python programming I",
    place:"San Diego College"
  }
]

export const skills = [
  {
    id: "FE",
    title:"Front End",
    color: "red",
    skillDetails: [
      {
        title: "HTML5",
        percentage: 85,
      },
      {
        title: "CSS3",
        percentage: 75,
      },
      {
        title: "JavaScript",
        percentage: 60,
      },
      {
        title: "Tailwind CSS",
        percentage: 80,
      },
    ],
  },
  {
    id: "BE",
    title:"Back End",
    color: "blue",
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
  {
    id: "BE2",
    title:"Back End2",
    color: "green",
    skillDetails: [
      {
        title: "PHP",
        percentage: 25,
      },
      {
        title: "SQL",
        percentage: 30,
      },
      {
        title: "SQL2",
        percentage: 30,
      },
      {
        title: "SQL3",
        percentage: 30,
      },
    ],
  },
  {
    id: "BE3",
    title:"Back End3",
    color: "green",
    skillDetails: [
      {
        title: "PHP",
        percentage: 25,
      },
      {
        title: "SQL",
        percentage: 30,
      },
      {
        title: "SQL2",
        percentage: 30,
      },
      {
        title: "SQL3",
        percentage: 30,
      },
    ],
  },
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