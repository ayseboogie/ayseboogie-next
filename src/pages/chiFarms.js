import * as React from "react";
import Layout from "../components/layout/layout";
import ProjectsLayout from "../components/projectsLayout/projectsLayout";

const ChiFarms = () => {
  return (
    <Layout pageTitle="Chi Farms">
      <ProjectsLayout
        about="Chi Farms is an ecommerce site I made for my friends at my local market.
            This is a multivendor shop that offers various products from CSA boxes
            to pottery, all locally made by vendors in Chattanooga. This project
            has been fun, and is continuously improving as I navigate the world of
            Wordpress."
        platform="Wordpress Woocommerce, hosted through GoDaddy"
        checkIt="www.chifarms.org"
      />
    </Layout>
  );
};

export default ChiFarms;
