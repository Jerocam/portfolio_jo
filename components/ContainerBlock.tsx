import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="flex flex-row h-screen">
        <Navbar />
        <div className="w-screen bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 dark:from-gray-700 dark:via-gray-900 dark:to-black">
          <section className="h-full flex justify-center items-center">
            {children}
          </section>
        </div>
      </main>
    </div>
  );
};
