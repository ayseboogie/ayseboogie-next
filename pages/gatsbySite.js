import * as React from "react";
// import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const GatsbySite = () => {
  return (
    <>
      {/*<NextSeo*/}
      {/*  title="Experiences"*/}
      {/*  description="This was my first project with Lonely Planet. It has been changed a bit since I built it, but it is React in a NextJS framework with Tailwind styling, using GraphQL to query from a Drupal CMS. Built in WordPress."*/}
      {/*/>*/}
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
