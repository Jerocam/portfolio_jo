import { SVGProps } from "react";

export function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 12h-8m0 0l3.5-3.5M14 12l3.5 3.5M2 12h8m0 0L6.5 8.5M10 12l-3.5 3.5M10 21V3m4 18V3"
      ></path>
    </svg>
  );
}

export function IconDeveloper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857c-2.2-.023-3.957.53-5.27 1.499"></path>
        <path d="m13 7l2 2.5l-2 2.5M5 7L3 9.5L5 12m5-6l-2 7"></path>
      </g>
    </svg>
  );
}

export function IconContact(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path strokeLinejoin="round" d="m9 9l4.5 3L18 9M3 13.5h2m-4-3h4"></path>
        <path d="M5 7.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5"></path>
      </g>
    </svg>
  );
}

export function IconProject(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52L11.7 1.174Z"
        ></path>
        <path strokeLinecap="round" d="M17 15H7l5-8l5 8Z"></path>
        <path d="M2.5 6.5L12 7m-9.5-.5L7 15m14.5-8.5L17 15m4.5-8.5L12 7V1m9.5 16.5L17 15M2.5 17.5L7 15m0 0l5 8l5-8"></path>
      </g>
    </svg>
  );
}

export function IconLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      className="text-yellow-500"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
      ></path>
    </svg>
  );
}

export function IconDark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      className="text-black"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"
      ></path>
    </svg>
  );
}

export function IconHtml5(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178ZM3 2h18l-1.623 18L12 22l-7.377-2L3 2Zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188Z"
      ></path>
    </svg>
  );
}

export const Icons = (switchIcon: string) => {
  switch (switchIcon) {
    case "Home":
      return <IconHome />;
    case "About":
      return <IconDeveloper />;
    case "Experience":
      return <IconDeveloper />;
    case "Projects":
      return <IconProject />;
    case "Contact":
      return <IconContact />;
    case "HTML5":
      return <IconHtml5 />;
  }
};
