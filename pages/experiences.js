import * as React from "react";
// import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";

const Experiences = () => {
  return (
    <>
      {/*<NextSeo*/}
      {/*  title="Experiences"*/}
      {/*  description="This was my first project with Lonely Planet. It has been changed a bit since I built it, but it is React in a NextJS framework with Tailwind styling, using GraphQL to query from a Drupal CMS. Built in WordPress."*/}
      {/*/>*/}
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
