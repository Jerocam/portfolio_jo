import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar";
import { logo, infoLinks } from "../lib/details";

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
};

export const ContainerBlock: React.FC<ContainerProps> = ({
  children,
  ...customMeta
}) => {
  const router = useRouter();

  const meta = {
    title: "Jeronimo J. Ocampos - Web Developer",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
      </Head>
      <Navbar />
      <main className="flex flex-row p-10">
        <div className="basis-2/6">
          <div className="flex flex-row">
            <div>
              <Image src={logo} alt="" width={60} height={60} />
            </div>
            <div className="pl-2">
              <h1 className="text-3xl">Jeronimo J. Ocampos</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
          <div>
            <dl className="mt-10 space-y-4 text-sm leading-7 text-gray-300">
              <div className="flex gap-x-2">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </dt>
                <dd>Washington, DC</dd>
              </div>
              <div className="flex gap-x-2">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-2">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:hello@example.com"
                  >
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 flex flex-row space-x-6">
            {infoLinks &&
              infoLinks.map((infoitem) => (
                <a
                  key={infoitem.id}
                  href={infoitem.href}
                  className="inline-flex"
                >
                  <infoitem.icon />
                  {infoitem.name}
                </a>
              ))}
          </div>
        </div>
        <section className="basis-4/6">{children}</section>
      </main>
    </div>
  );
};
