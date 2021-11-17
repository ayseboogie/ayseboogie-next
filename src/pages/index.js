import * as React from "react";
import Layout from "../components/layout/layout";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import AboutPhotos from "../components/aboutPhotos/aboutPhotos";
import Contact from "../components/contact/contact";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div id="home" />
      <div className="py-10">
        <div
          className="w-full text-center text-3xl tracking-widest px-32 py-16"
          style={{ backgroundColor: "#B76E79" }}
        >
          "It was a musical thing and you were supposed to sing or to dance
          while the music was being played"
          <br />- Alan Watts
        </div>
      </div>

      <AboutPhotos />
      <span id="about" />
      <div className="w-full text-center text-2xl tracking-widest px-32 py-16">
        I am a frontend engineer who enjoys taking on new challenges and
        continuously growing my skill set.
        <br />
        I am a React developer by day. I have built freelance sites with
        WordPress and Duda. I have upcoming projects in Wix and Shopify.
        <br />I developed this website with Gatsby and Tailwind styling. <br />I
        received my computer science degree from UT Chattanooga.
      </div>

      <span id="portfolio" />
      <ProjectsContainer />

      <Contact />
      <span id="contact" />
    </Layout>
  );
};

export default IndexPage;
