import Head from "next/head";
import { useRouter } from "next/router";
import { IconLocation, IconPhoneMsg, IconMail } from "./Icons";
import { Header } from "./Header";
import { name, title, contact, infoLinks } from "../lib/details";

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
    <div className="relative h-screen">
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
      <Header />
      <main className="container mx-auto pt-16 flex static">
        <aside className="w-2/6">
          <div>
            <h1 className="text-4xl font-medium">{name}</h1>
            <h2 className="text-xl">{title}</h2>
          </div>
          <div>
            <dl className="mt-10 space-y-4 text-sm leading-7 text-gray-300">
              <div className="flex gap-x-2">
                <dt className="flex items-center">
                  <span className="sr-only">Location</span>
                  <IconLocation className="text-xl" />
                </dt>
                <dd>{contact.location}</dd>
              </div>
              <div className="flex gap-x-2">
                <dt className="flex items-center">
                  <span className="sr-only">Telephone</span>
                  <IconPhoneMsg className="text-xl" />
                </dt>
                <dd>{contact.phone}</dd>
              </div>
              <div className="flex gap-x-2">
                <dt className="flex items-center">
                  <span className="sr-only">Email</span>
                  <IconMail className="text-xl" />
                </dt>
                <dd>{contact.email}</dd>
              </div>
            </dl>
          </div>
          <div className="mt-20 flex space-x-6">
            {infoLinks &&
              infoLinks.map((infoitem) => (
                <a
                  key={infoitem.id}
                  href={infoitem.href}
                  className="inline-flex rounded bg-white/10 px-3 py-1 text-white shadow-sm hover:bg-white/20 transition ease-in-out delay-150"
                >
                  <infoitem.icon className="text-2xl mr-2" />
                  {infoitem.name}
                </a>
              ))}
          </div>
        </aside>
        <section className="w-4/6">{children}</section>
      </main>
      <footer className="h-16 absolute bottom-0 inset-x-0">
        <p className="text-center">example footer</p>
      </footer>
    </div>
  );
};
