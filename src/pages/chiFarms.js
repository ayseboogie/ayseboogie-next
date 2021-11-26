import * as React from "react";
import Layout from "../components/layout";
import ProjectsLayout from "../components/projectsLayout";
import { Helmet } from "react-helmet";

const ChiFarms = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chi Farms</title>
        <link rel="canonical" href="http://ayse.site/chiFarms" />
      </Helmet>
      <Layout pageTitle="Chi Farms">
        <ProjectsLayout
          about="Chi Farms is an ecommerce site I made for my friends at my local market.
            This is a multivendor shop that offers various products from CSA boxes
            to pottery, all locally made by vendors in Chattanooga. This project
            has been fun, and is continuously improving as I navigate the world of
            Wordpress."
          platform="Wordpress Woocommerce, hosted through GoDaddy"
          checkIt="https://chifarms.org/"
        />
      </Layout>
    </>
  );
};

export default ChiFarms;
