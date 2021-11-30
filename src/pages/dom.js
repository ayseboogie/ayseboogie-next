import * as React from "react";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import { Helmet } from "react-helmet";
import DomTraversal from "../components/domTraversal";
import { StaticImage } from "gatsby-plugin-image";

const Experiences = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DOM</title>
        <link rel="canonical" href="http://ayse.site/dom" />
      </Helmet>
      <Layout pageTitle="DOM Traversal">
        <div className="pb-6 md:pb-10">
          <div className=" flex justify-center align-middle">
            <StaticImage
              className="max-w-sm md:max-w-xl"
              src="../images/nodeTree.png"
              alt="Node Tree"
              objectPosition="center center"
            />
          </div>
          <DomTraversal />
        </div>
        <div className="max-w-2xl lg:max-w-4xl m-auto">
          <hr />
        </div>
        <ProjectsLayout about="This page is different" />
      </Layout>
    </>
  );
};

export default Experiences;
