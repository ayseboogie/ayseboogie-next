import * as React from "react";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import { Helmet } from "react-helmet";

const Experiences = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Experiences</title>
        <link rel="canonical" href="http://ayse.site/experiences" />
      </Helmet>
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
