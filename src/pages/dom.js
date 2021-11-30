import * as React from "react";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import { Helmet } from "react-helmet";
import DomTraversal from "../components/domTraversal";

const Experiences = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DOM</title>
        <link rel="canonical" href="http://ayse.site/dom" />
      </Helmet>
      <Layout pageTitle="DOM Traversal">
        <div className="py-6 md:py-10">
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
