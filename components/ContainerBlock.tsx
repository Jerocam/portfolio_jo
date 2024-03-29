import Head from "next/head";
import { useRouter } from "next/router";
import { IconLocation, IconPhoneMsg, IconMail } from "./Icons";
import { Navbar } from "./Navbar";
import { name, title, subtitle, contact, infoLinks } from "../lib/details";
import { NextPages } from "../components/NextPages";

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
    description:
      "I've been developing websites for 5 years straight. Get in touch with me to know more.",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="sm:flex sm:flex-col justify-between min-h-screen bg-neutral-50 dark:bg-neutral-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://portfolio-jo-jerocam.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://portfolio-jo-jerocam.vercel.app${router.asPath}`}
        />
      </Head>
      <div>
        <Navbar />
        <main className="container mx-auto h-full sm:flex px-2 mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
          <aside className="sm:mr-2 sm:flex sm:flex-col sm:justify-between w-full sm:w-2/6">
            <div className="text-center sm:text-left dark:text-neutral-300 text-neutral-800">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                {name}
              </h1>
              <h2 className="text-lg xl:text-xl 2xl:text-2xl font-medium mt-2">
                {title}
              </h2>
              <h3 className="text-sm xl:text-base 2xl:text-lg dark:text-neutral-400 text-neutral-700">
                {subtitle}
              </h3>
              <div className="flex justify-center sm:justify-start mt-6 sm:mt-14">
                <dl className="space-y-2 lg:space-y-3 text-sm lg:text-base leading-5 dark:text-neutral-300 text-neutral-800">
                  <div className="flex gap-x-2">
                    <dt className="flex items-center">
                      <span className="sr-only">Location</span>
                      <IconLocation className="text-xl sm:text-2xl" />
                    </dt>
                    <dd className="">{contact.location}</dd>
                  </div>
                  <div className="flex gap-x-2">
                    <dt className="flex items-center">
                      <span className="sr-only">Telephone</span>
                      <IconPhoneMsg className="text-xl sm:text-2xl" />
                    </dt>
                    <dd className="">{contact.phone}</dd>
                  </div>
                  <div className="flex gap-x-2">
                    <dt className="flex items-center">
                      <span className="sr-only">Email</span>
                      <IconMail className="text-xl sm:text-2xl" />
                    </dt>
                    <dd className="">{contact.email}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-center sm:justify-normal space-x-4 lg:space-x-6 my-4 sm:my-0">
              {infoLinks &&
                infoLinks.map((infoitem) => (
                  <a
                    key={infoitem.id}
                    href={infoitem.href}
                    className="inline-flex text-sm xl:text-base 2xl:text-lg rounded bg-black/10 dark:bg-white/10 px-3 xl:px-4 py-1.5 xl:py-2 text-black dark:text-white shadow dark:hover:bg-white/20 hover:bg-black/20 transition ease-in-out delay-150"
                  >
                    <infoitem.icon className="text-xl xl:text-2xl 2xl:text-3xl mr-2" />
                    {infoitem.name}
                  </a>
                ))}
            </div>
          </aside>
          <section className=" sm:w-4/6 md:pl-2">
            {children}
            <NextPages pathData={router.asPath} />
          </section>
        </main>
      </div>
      <footer className="flex justify-center items-center h-12 dark:text-neutral-300 text-neutral-800 px-2">
        <p className="text-xs lg:text-sm text-center">
          Built with Next.js and Tailwind CSS, deployed with Vercel. All right
          reserved 2023
        </p>
      </footer>
    </div>
  );
};
