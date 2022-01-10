import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const Experiences = () => {
  return (
    <>
      <Head>
        <title>LP Experiences - Ayse Site</title>
        <link rel="icon" href="/triangle.png" />
        <meta name="author" content="Ayse Stinnett" />
        <meta
          name="description"
          content="I used to work for Lonely Planet, and have done much development throughout their site. The experiences page is the first project I took on while working there, and I was always most proud of it."
          key="desc"
        />
        <meta property="og:title" content="LP Experiences - Ayse Site" />
        <meta property="og:url" content="https://www.ayse.site/experiences" />
        <meta
          property="og:description"
          content="I used to work for Lonely Planet, and have done much development throughout their site. The experiences page is the first project I took on while working there, and I was always most proud of it."
          key="desc"
        />
        <meta property="og:image" content="/ayseSite.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ayseimg.s3.amazonaws.com/ayseSite.png"
        />
        <meta name="twitter:site" content="@AyseStinnett" />
      </Head>
      <Layout pageTitle="Experiences">
        <ProjectsLayout
          about="I used to work for Lonely Planet, and have done much development throughout their site. The
                experiences page is the first project I took on while working there, and I was always most proud of it."
          platform="React in a NextJS framework with Tailwind styling, using GraphQL to query from a Drupal CMS"
          checkIt="https://www.lonelyplanet.com/experiences"
        />
      </Layout>
    </>
  );
};

export default Experiences;
