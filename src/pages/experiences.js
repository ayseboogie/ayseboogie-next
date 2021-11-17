import * as React from "react";
import Layout from "../components/layout/layout";
import ProjectsLayout from "../components/projectsLayout/projectsLayout";

const Experiences = () => {
  return (
    <Layout pageTitle="Experiences">
      <ProjectsLayout
        about="I used to work for Lonely Planet, and have done much development throughout their site. The
                experiences page is the first project I took on while working there, and I was always most proud of it."
        platform="React with Tailwind styling, using GraphQL to query from a Drupal CMS"
        checkIt="https://www.lonelyplanet.com/experiences"
      />
    </Layout>
  );
};

export default Experiences;
