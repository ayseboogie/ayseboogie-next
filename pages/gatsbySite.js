import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const GatsbySite = () => {
  return (
    <>
      <Head>
        <title>Gatsby - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="The beginning of my website, built in a Gatsby framework."
          key="desc"
        />
        <meta property="og:title" content="Gatsby - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/gatsbySite" />
        <meta
          property="og:description"
          content="The beginning of my website, built in a Gatsby framework."
          key="desc"
        />
        <meta property="og:image" content="/ayseSite.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ayseimg.s3.amazonaws.com/ayseSite.png"
        />
        <meta name="twitter:site" content="@AyseStinnett" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1933632198679662"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout pageTitle="Gatsby Site">
        <ProjectsLayout
          about="This is my first build of the website you are currently on. As mentioned on my Code page,
          I got stuck debugging my CSS Trick component. After some hours, I decided to rewrite the whole site in a NextJS framework.
          It was fun developing the same site in slightly different frameworks."
          platform="React in a Gatsby framework with Tailwind styling"
          checkIt="https://ayseboogie.gatsbyjs.io/"
        />
      </Layout>
    </>
  );
};

export default GatsbySite;
